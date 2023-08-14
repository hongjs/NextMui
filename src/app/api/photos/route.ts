import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const res = await fetch('https://jsonplaceholder.typicode.com/photos');
  const data = await res.json();
  return NextResponse.json(data.slice(0, 100), { status: 200 });
}
