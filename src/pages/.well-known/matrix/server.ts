export async function GET() {
  return new Response(
    JSON.stringify(
      {
        "m.server": "matrix.bjerk.io:443",
      },
      null,
      2,
    ),
  );
}
