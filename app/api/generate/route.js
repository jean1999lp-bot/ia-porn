import { NextResponse } from 'next/server';

export async function POST(request) {
  const formData = await request.formData();
  const prompt = formData.get('prompt');

  const response = await fetch('https://api.replicate.com/v1/predictions', {
    method: 'POST',
    headers: {
      'Authorization': `Token ${process.env.REPLICATE_API_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      version: "30e2032f5b1c1d2e5b3c5d4e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c", // FLUX.1 Dev NSFW (liberado)
      input: { 
        prompt,
        num_outputs: 1,
        guidance_scale: 7.5,
        num_inference_steps: 28,
        disable_safety_checker: true  // FORÇA NSFW
      }
    })
  });

  const data = await response.json();
  return NextResponse.json(data);
}
