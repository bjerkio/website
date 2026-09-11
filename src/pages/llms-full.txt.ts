import type { APIRoute } from "astro";
import { getDocs, SITE_URL } from "../lib/docs";

export const GET: APIRoute = async () => {
  const docs = await getDocs();

  const body = [
    "# Bjerk — hele nettstedet",
    "",
    "> Innholdet fra bjerk.io samlet i én fil. Kortversjonen med lenker ligger på",
    "> https://bjerk.io/llms.txt",
    "",
    ...docs.flatMap(doc => [
      "---",
      "",
      `Kilde: ${SITE_URL}${doc.path === "/" ? "" : doc.path}`,
      "",
      doc.body.trim(),
      "",
    ]),
  ].join("\n");

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
