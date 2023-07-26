import { NextRequest, NextResponse } from 'next/server';

export const config = {
  runtime: 'edge',
};

const handler = (req) => {
  return NextResponse.json({
    name: `Hello, from ${req.url} I'm now an Edge Function!`,
  });
};

export default handler;
/*
   Maximize Your Next.js 13 App’s Performance with Edge Functions
   https://medium.com/codingthesmartway-com-blog/maximize-your-next-js-13-apps-performance-with-edge-functions-dd21e66bb59a
*/