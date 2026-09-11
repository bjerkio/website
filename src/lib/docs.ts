import { getCollection, getEntries, type CollectionEntry } from "astro:content";
import formatHumanDate from "../utils";

export interface Doc {
  /** Route of the HTML page, without trailing slash. "/" for the front page. */
  path: string;
  /** Route of the Markdown twin: "/om.md", "/index.md" for the front page. */
  markdownPath: string;
  title: string;
  description: string;
  /** Grouping used by llms.txt. */
  section: "Om Bjerk" | "Tjenester" | "Artikler" | "Arbeid" | "Arrangementer";
  date?: Date;
  body: string;
}

const SITE = "https://bjerk.io";

/** "/om" -> "/om.md", "/" -> "/index.md" */
export const toMarkdownPath = (path: string): string =>
  path === "/" ? "/index.md" : `${path.replace(/\/$/, "")}.md`;

export const toMarkdownUrl = (path: string): string =>
  new URL(toMarkdownPath(path), SITE).toString();

/**
 * Markdown pages under src/pages render to a directory route, so
 * "/src/pages/tjenester/radgivning/index.md" is served at "/tjenester/radgivning".
 */
const pageModules = import.meta.glob<{
  frontmatter: Record<string, unknown>;
  rawContent: () => string;
}>("/src/pages/**/*.md", { eager: true });

const pathFromModuleId = (id: string): string => {
  const route = id
    .replace("/src/pages", "")
    .replace(/\/index\.md$/, "")
    .replace(/\.md$/, "");
  return route === "" ? "/" : route;
};

const sectionForPath = (path: string): Doc["section"] =>
  path.startsWith("/tjenester") ? "Tjenester" : "Om Bjerk";

/** First H1 in a Markdown body, used when frontmatter carries no title. */
const headingOf = (body: string): string | undefined =>
  body
    .trim()
    .match(/^#\s+(.+)$/m)?.[1]
    ?.trim();

/** Frontmatter and body, with the body's own H1 dropped -- we add one from the title. */
const compose = (title: string, description: string, body: string): string => {
  const trimmed = body.trim().replace(/^#\s+.*\n+/, "");
  const summary = description ? `> ${description}\n\n` : "";
  return `# ${title}\n\n${summary}${trimmed}\n`;
};

const markdownPages = (): Doc[] =>
  Object.entries(pageModules).map(([id, mod]) => {
    const path = pathFromModuleId(id);
    const raw = mod.rawContent();
    // A couple of service pages carry no frontmatter, so fall back to the H1.
    const title = String(mod.frontmatter.title ?? headingOf(raw) ?? "Bjerk");
    const description = String(mod.frontmatter.description ?? "");
    return {
      path,
      markdownPath: toMarkdownPath(path),
      title,
      description,
      section: sectionForPath(path),
      body: compose(title, description, raw),
    };
  });

const postDocs = async (): Promise<Doc[]> => {
  const posts = await getCollection("post");
  return Promise.all(
    posts.map(async post => {
      const path = `/artikler/${post.slug}`;
      const authors = post.data.author
        ? await getEntries(
            Array.isArray(post.data.author)
              ? post.data.author
              : [post.data.author],
          )
        : [];
      const byline = authors
        .map(author => `${author.data.givenName} ${author.data.familyName}`)
        .join(", ");
      const meta = [
        `Publisert: ${formatHumanDate(post.data.date)}`,
        byline && `Skrevet av: ${byline}`,
      ]
        .filter(Boolean)
        .join("  \n");

      return {
        path,
        markdownPath: toMarkdownPath(path),
        title: post.data.headline ?? post.data.title,
        description: post.data.description,
        section: "Artikler" as const,
        date: post.data.date,
        body: `${compose(
          post.data.headline ?? post.data.title,
          post.data.description,
          post.body,
        )}\n${meta}\n`,
      };
    }),
  );
};

const projectDocs = async (): Promise<Doc[]> => {
  const projects = await getCollection("project");
  return projects.map(project => {
    const path = `/arbeid/${project.slug}`;
    const years = [project.data.dateFrom, project.data.dateTo]
      .filter(Boolean)
      .map(date => (date as Date).getFullYear())
      .join("–");
    const meta = [
      `Kunde: ${project.data.customer}`,
      years && `Periode: ${years}`,
      project.data.technologies?.length &&
        `Teknologi: ${project.data.technologies.join(", ")}`,
    ]
      .filter(Boolean)
      .join("  \n");

    return {
      path,
      markdownPath: toMarkdownPath(path),
      title: project.data.title,
      description: project.data.description,
      section: "Arbeid" as const,
      date: project.data.dateFrom,
      body: `${compose(
        project.data.title,
        project.data.description,
        project.body,
      )}\n${meta}\n`,
    };
  });
};

const eventDocs = async (): Promise<Doc[]> => {
  const events = await getCollection("event");
  return events.map(event => {
    const path = `/arrangementer/${event.slug}`;
    return {
      path,
      markdownPath: toMarkdownPath(path),
      title: event.data.title,
      description: event.data.description,
      section: "Arrangementer" as const,
      date: event.data.startDate,
      body: compose(event.data.title, event.data.description, event.body),
    };
  });
};

const list = (
  items: { title: string; description: string; path: string }[],
): string =>
  items
    .map(item => `- [${item.title}](${SITE}${item.path}): ${item.description}`)
    .join("\n");

/** The .astro pages have no Markdown source, so their twins are built from the data they render. */
const generatedDocs = async (): Promise<Doc[]> => {
  const [posts, projects, people] = await Promise.all([
    getCollection("post"),
    getCollection("project"),
    getCollection("people"),
  ]);

  const sortedPosts = posts
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())
    .map(post => ({
      title: post.data.title,
      description: post.data.description,
      path: `/artikler/${post.slug}`,
    }));

  const sortedProjects = projects.map(project => ({
    title: project.data.title,
    description: `${project.data.customer}. ${project.data.description}`,
    path: `/arbeid/${project.slug}`,
  }));

  const employees = (people as CollectionEntry<"people">[])
    .filter(person => person.data.type === "employee")
    .filter(person => person.data.email.includes("@bjerk.io"))
    .map(
      person =>
        `- ${person.data.givenName} ${person.data.familyName} — ${person.data.position}`,
    )
    .join("\n");

  return [
    {
      path: "/",
      markdownPath: "/index.md",
      title: "Bjerk",
      description:
        "Bjerk er et teknologibyrå som skriver kode for å skape, forbedre og forenkle for ambisiøse bedrifter.",
      section: "Om Bjerk",
      body: [
        "# Bjerk",
        "",
        "> Bjerk er et teknologibyrå som skriver kode for å skape, forbedre og forenkle for ambisiøse bedrifter.",
        "",
        "Vi skaper digitale produkter og løsninger som er tilpasset bedrifters unike behov og arbeidsprosesser.",
        "",
        "## Tjenester",
        "",
        "- [Data og integrasjoner](https://bjerk.io/tjenester/integrasjoner)",
        "- [Rådgivning](https://bjerk.io/tjenester/radgivning)",
        "- [Produktutvikling](https://bjerk.io/tjenester/produktutvikling)",
        "- [Teknologi og utvikling](https://bjerk.io/tjenester/teknologi-og-utvikling)",
        "- [Opplæring](https://bjerk.io/tjenester/opplaring)",
        "",
        "## Utvalgt arbeid",
        "",
        list(sortedProjects.slice(0, 8)),
        "",
      ].join("\n"),
    },
    {
      path: "/artikler",
      markdownPath: "/artikler.md",
      title: "Artikler",
      description: "Artikler skrevet av menneskene i Bjerk.",
      section: "Artikler",
      body: [
        "# Artikler",
        "",
        "> Artikler skrevet av menneskene i Bjerk.",
        "",
        "I Bjerk jobber det mennesker med ulike bakgrunner og perspektiver. Alt fra fag og",
        "teknologi, til ledelse og samarbeid.",
        "",
        list(sortedPosts),
        "",
      ].join("\n"),
    },
    {
      path: "/arbeid",
      markdownPath: "/arbeid.md",
      title: "Arbeider",
      description:
        "Siden 2009 har vi endret hvordan folk tenker, arbeider, kommuniserer og jobber gjennom å skape digitale produkter.",
      section: "Arbeid",
      body: [
        "# Arbeider",
        "",
        "> Siden 2009 har vi endret hvordan folk tenker, arbeider, kommuniserer og jobber gjennom å skape digitale produkter.",
        "",
        list(sortedProjects),
        "",
      ].join("\n"),
    },
    {
      path: "/kontakt",
      markdownPath: "/kontakt.md",
      title: "Kontakt oss",
      description: "Kontaktinformasjon og menneskene i Bjerk.",
      section: "Om Bjerk",
      body: [
        "# Kontakt oss",
        "",
        "> Kontaktinformasjon og menneskene i Bjerk.",
        "",
        "- E-post: kontoret@bjerk.io",
        "- Telefon: +47 22 12 05 12",
        "- Adresse: Arbins gate 11, 0253 Oslo, Norge",
        "- Organisasjonsnummer: 930 334 693",
        "",
        "## Menneskene i Bjerk",
        "",
        employees,
        "",
      ].join("\n"),
    },
  ];
};

let cache: Doc[] | undefined;

/** Every page that has a Markdown twin, front page first. */
export const getDocs = async (): Promise<Doc[]> => {
  if (cache) return cache;

  const [posts, projects, events, generated] = await Promise.all([
    postDocs(),
    projectDocs(),
    eventDocs(),
    generatedDocs(),
  ]);

  const docs = [
    ...generated,
    ...markdownPages(),
    ...posts,
    ...projects,
    ...events,
  ];

  cache = docs.sort((a, b) => {
    if (a.path === "/") return -1;
    if (b.path === "/") return 1;
    return a.path.localeCompare(b.path, "nb");
  });

  return cache;
};

export const SITE_URL = SITE;
