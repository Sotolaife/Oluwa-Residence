'use client';

import { useState } from 'react';
import { compressImage } from '@/ai/flows/image-compression';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import Image from 'next/image';
import { Download, Loader2, UploadCloud } from 'lucide-react';

export default function ImageCompressorPage() {
  const [originalImage, setOriginalImage] = useState<string | null>(null);
  const [originalImageFile, setOriginalImageFile] = useState<File | null>(null);
  const [compressedImage, setCompressedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setOriginalImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setOriginalImage(reader.result as string);
        setCompressedImage(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCompress = async () => {
    if (!originalImage) {
      toast({
        title: 'Error',
        description: 'Please select an image first.',
        variant: 'destructive',
      });
      return;
    }

    setIsLoading(true);
    setCompressedImage(null);

    try {
      const result = await compressImage({ photoDataUri: originalImage });
      if (result.compressedPhotoDataUri) {
        setCompressedImage(result.compressedPhotoDataUri);
        toast({
          title: 'Success!',
          description: 'Image compressed successfully.',
        });
      } else {
        throw new Error('Compression failed to return an image.');
      }
    } catch (error) {
      console.error('Compression error:', error);
      toast({
        title: 'Compression Failed',
        description: 'An error occurred while compressing the image. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const getFileSize = (dataUri: string): string => {
    if (!dataUri) return '0 KB';
    const base64 = dataUri.split(',')[1];
    if (!base64) return '0 KB';
    // The length of a base64 string is not the file size.
    // This is an approximation.
    const bytes = (base64.length * 3) / 4 - (base64.endsWith('==') ? 2 : base64.endsWith('=') ? 1 : 0);
    return (bytes / 1024).toFixed(2) + ' KB';
  }

  return (
    <div>
       <h1 className="text-3xl font-bold font-headline mb-4">Image Compression Tool</h1>
      <Card>
        <CardHeader>
          <CardTitle>AI Image Optimizer</CardTitle>
          <CardDescription>Optimize your property images for the web. Upload an image to compress it using AI.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="picture" className="sr-only">Upload Image</Label>
            <Input id="picture" type="file" accept="image/*" onChange={handleFileChange} className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20"/>
            <p className="text-sm text-muted-foreground">Select a PNG, JPG, or WEBP file.</p>
          </div>
          <Button onClick={handleCompress} disabled={!originalImage || isLoading} className="bg-primary hover:bg-primary/90">
            {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <UploadCloud className="mr-2 h-4 w-4" />}
            {isLoading ? 'Compressing...' : 'Compress Image'}
          </Button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Original Image</h3>
              {originalImage ? (
                <div className="relative border rounded-lg p-2 aspect-video flex items-center justify-center bg-muted/20">
                  <Image src={originalImage} alt="Original" layout="fill" objectFit="contain" />
                  <div className="absolute bottom-2 right-2 bg-background/80 px-2 py-1 rounded-md text-sm font-semibold">{getFileSize(originalImage)}</div>
                </div>
              ) : (
                <div className="border rounded-lg aspect-video flex items-center justify-center bg-muted/50">
                  <p className="text-muted-foreground">Upload an image to see the preview</p>
                </div>
              )}
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Compressed Image</h3>
              {isLoading ? (
                <div className="border rounded-lg aspect-video flex items-center justify-center bg-muted/50">
                    <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
                </div>
              ) : compressedImage ? (
                <div className="relative border rounded-lg p-2 aspect-video flex items-center justify-center bg-muted/20">
                  <Image src={compressedImage} alt="Compressed" layout="fill" objectFit="contain" />
                  <div className="absolute bottom-2 right-2 bg-background/80 px-2 py-1 rounded-md text-sm font-semibold">{getFileSize(compressedImage)}</div>
                  <a href={compressedImage} download={`compressed-${originalImageFile?.name || 'image.jpg'}`}>
                    <Button variant="outline" size="icon" className="absolute top-2 right-2">
                        <Download className="h-4 w-4" />
                        <span className="sr-only">Download compressed image</span>
                    </Button>
                  </a>
                </div>
              ) : (
                <div className="border rounded-lg aspect-video flex items-center justify-center bg-muted/50">
                  <p className="text-muted-foreground">Compressed image will appear here</p>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
