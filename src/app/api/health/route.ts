export function GET() {
  return new Response(JSON.stringify({ alive: true }));
}
