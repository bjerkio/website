import type { APIRoute, GetStaticPaths } from "astro";
import { getDocs, type Doc } from "../lib/docs";

export const getStaticPaths = (async () => {
  const docs = await getDocs();
  return docs.map(doc => ({
    // "/om.md" is routed as slug "om"; the front page becomes "index".
    params: { slug: doc.markdownPath.replace(/^\//, "").replace(/\.md$/, "") },
    props: { doc },
  }));
}) satisfies GetStaticPaths;

export const GET: APIRoute<{ doc: Doc }> = ({ props }) =>
  new Response(props.doc.body, {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
