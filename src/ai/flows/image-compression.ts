// src/ai/flows/image-compression.ts
'use server';

/**
 * @fileOverview A tool for compressing and optimizing images.
 *
 * - compressImage - A function that handles the image compression process.
 * - CompressImageInput - The input type for the compressImage function.
 * - CompressImageOutput - The return type for the compressImage function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import { googleAI } from '@genkit-ai/google-genai';

const CompressImageInputSchema = z.object({
  photoDataUri: z
    .string()
    .describe(
      "A photo to be compressed, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
});
export type CompressImageInput = z.infer<typeof CompressImageInputSchema>;

const CompressImageOutputSchema = z.object({
  compressedPhotoDataUri: z
    .string()
    .describe("The compressed photo, as a data URI."),
});
export type CompressImageOutput = z.infer<typeof CompressImageOutputSchema>;

export async function compressImage(input: CompressImageInput): Promise<CompressImageOutput> {
  return compressImageFlow(input);
}

const compressImageFlow = ai.defineFlow(
  {
    name: 'compressImageFlow',
    inputSchema: CompressImageInputSchema,
    outputSchema: CompressImageOutputSchema,
  },
  async input => {
    const { media } = await ai.generate({
      model: 'googleai/gemini-2.5-flash-image-preview',
      prompt: [
        { media: { url: input.photoDataUri } },
        { text: 'compress this image and optimize it for web use' },
      ],
      config: {
        responseModalities: ['TEXT', 'IMAGE'],
      },
    });

    if (!media) {
      throw new Error('No compressed image returned from the model.');
    }

    return { compressedPhotoDataUri: media.url };
  }
);
