import { q, sanityImage } from 'groqd';
import { client } from '../sanity-client';

export const privacyModel = q.object({
  hideName: q.boolean(),
  anonymizedName: q.string().optional()
});

const projectQuery = q('*', {
  isArray: true
})
  .filter("_type == 'project' && !(_id in path('drafts.**'))")
  .grab$({
    name: q.string(),
    title: q.string().optional(),
    preamble: q.contentBlocks().optional(),
    mission: q.string().optional(),
    image: sanityImage('image', { withCrop: true, withHotspot: true }).nullable(),
    body: q.array(q.union([q.contentBlock(), sanityImage('').schema])).optional(),
    description: q.string(),
    customer: q('customer')
      .deref()
      .grab$({
        name: q.string(),
        privacy: privacyModel.optional(),
        sameAs: q.array(q.string()).optional()
      })
      .nullable(),
    yearFrom: q.number(),
    yearTo: q.number().optional(),
    slug: ['slug.current', q.string().optional()],
    technologies: q('technologies[]', { isArray: true })
      .deref()
      .grabOne$('name', q.string())
      .nullable(),
    links: q
      .array(
        q.object({
          _type: q.literal('link'),
          name: q.string(),
          target: q.string(),
          url: q.string()
        })
      )
      .optional()
  });

export async function getProjects() {
  const { schema, query } = projectQuery;

  const rawProjects = schema.parse(await client.fetch(query));
  return rawProjects.map((project) => {
    console.log({ customer: project.customer });
    let customerName = project.customer?.name;

    if (project.customer?.privacy?.hideName) {
      customerName = project.customer?.privacy?.anonymizedName ?? 'Anonym';
    }

    return {
      ...project,
      customer: {
        ...project.customer,
        name: customerName
      }
    };
  });
}
