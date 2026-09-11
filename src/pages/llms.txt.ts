import type { APIRoute } from "astro";
import { getDocs, SITE_URL, type Doc } from "../lib/docs";

const SECTIONS: Doc["section"][] = [
  "Om Bjerk",
  "Tjenester",
  "Arbeid",
  "Artikler",
  "Arrangementer",
];

export const GET: APIRoute = async () => {
  const docs = await getDocs();

  const body = [
    "# Bjerk",
    "",
    "> Bjerk er et norsk teknologibyrå som siden 2009 har skrevet kode for å skape,",
    "> forbedre og forenkle for ambisiøse bedrifter. Vi jobber med rådgivning,",
    "> produktutvikling, systemintegrasjoner og opplæring.",
    "",
    "Nettstedet er på norsk (nb-NO). Hver side finnes også som Markdown: legg til",
    "`.md` på slutten av adressen, for eksempel `/om.md`. `/llms-full.txt`",
    "inneholder innholdet fra alle sidene samlet.",
    "",
    ...SECTIONS.flatMap(section => {
      const entries = docs.filter(doc => doc.section === section);
      if (entries.length === 0) return [];
      return [
        `## ${section}`,
        "",
        ...entries.map(doc => {
          const summary = doc.description.replace(/\s+/g, " ").trim();
          const link = `[${doc.title}](${SITE_URL}${doc.markdownPath})`;
          return summary ? `- ${link}: ${summary}` : `- ${link}`;
        }),
        "",
      ];
    }),
    "## Kontakt",
    "",
    "- E-post: kontoret@bjerk.io",
    "- Telefon: +47 22 12 05 12",
    "- Adresse: Arbins gate 11, 0253 Oslo, Norge",
    "",
  ].join("\n");

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
