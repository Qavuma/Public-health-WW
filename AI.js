// app/api/assistant/route.js
import { NextResponse } from 'next/server';
import { OpenAI } from 'openai';

export const runtime = 'edge';

export async function POST(req) {
  const { question } = await req.json();
  
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_KEY,
  });

  const response = await openai.chat.completions.create({
    model: "gpt-4-med",
    messages: [{
      role: "system",
      content: "You are a public health expert specializing in African health matters. Provide accurate, culturally-sensitive information."
    }, {
      role: "user",
      content: question
    }],
    temperature: 0.3,
  });

  return NextResponse.json({ answer: response.choices[0].message.content });
}
