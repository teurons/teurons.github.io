import { generateOGImage } from "fumadocs-ui/og";
import { blogsMetaImage } from "@/lib/metadata-image";
import type { ImageResponse } from "next/og";

export const GET = blogsMetaImage.createAPI((page: any): ImageResponse => {
  return generateOGImage({
    title: page.data.title,
    description: page.data.description,
    site: "teurons",
  });
});

export function generateStaticParams() {
  return blogsMetaImage.generateParams();
}
