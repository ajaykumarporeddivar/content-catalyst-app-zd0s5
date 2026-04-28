import { Response } from 'next/server';
import { mockUsers, mockContent, STATS } from '@/lib/data';
import { Request } from 'next/server';

export async function GET(): Promise<Response> {
  return Response.json({ ok: true, data: { users: mockUsers, content: mockContent, stats: STATS } }, {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  });
}

export async function POST(request: Request): Promise<Response> {
  const body = await request.json();
  console.log(body);
  return Response.json({ ok: true, message: 'Demo mode — data not persisted' }, {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  });
}