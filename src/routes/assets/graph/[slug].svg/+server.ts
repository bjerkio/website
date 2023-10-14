import { invariant } from 'ts-invariant';
import { getProjects } from '$data/projects/get-projects';
import type { EntryGenerator } from './$types';

export const prerender = true;

const projects = await getProjects();

export const entries = (() => {
  const urls = projects
    .filter((project) => project.slug)
    .map((project) => {
      invariant(project.slug);
      return {
        slug: project.slug
      };
    });

  return urls;
}) satisfies EntryGenerator;

export async function GET({ params }) {
  const project = projects.find((project) => project.slug === params.slug);

  if (!project) {
    throw new Error(`Project not found`);
  }

  return new Response(
    `<svg xmlns="http://www.w3.org/2000/svg" fill="none" style="font-family:&quot;Sora&quot;,sans-serif;;color:#fff;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale" viewBox="0 0 1200 627">
  <defs>
    <style>
      @import url(https://fonts.googleapis.com/css2?family=Sora);

      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box
      }
    </style>
  </defs>
  <path fill="#EDF9F1" d="M0 0h1200v630H0z"/>
  <foreignObject width="100%" height="100%" x="0" y="0">
    <div xmlns="http://www.w3.org/1999/xhtml" style="height:100%;padding:64px;color:#0F2040;display:flex;max-width:80ch;flex-direction:column;justify-content:space-between;gap:32px">
      <img src="https://bjerk.io/assets/logo.svg" style="width: 100px" />
      <h1 xmlns="http://www.w3.org/1999/xhtml" style="font-size:48px;font-weight:400">
        ${project.title ?? project.name}
      </h1>
    </div>
  </foreignObject>
</svg>`
  );
}
