// import { generateOGImage } from "@/og-image";

import { generateOGImage } from "@/components/og-image";

// Image metadata
export const alt = "teurons";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";
export const dynamic = "force-static";
export const revalidate = false; // Revalidate every hour (or your preferred interval)

// Image generation
export default async function Image() {
  return generateOGImage("teurons");
}
