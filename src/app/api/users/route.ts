import { NextResponse } from 'next/server';

export async function GET() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const data = (await res.json()) as unknown[];
  return NextResponse.json(data, { status: 200 });
}
