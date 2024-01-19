export const dynamic = "force-dynamic"; // by default it's value is auto

export async function GET() {
  return Response.json({
    time: new Date().toLocaleString(),
  });
}
