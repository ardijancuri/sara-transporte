import Image, { type ImageProps } from "next/image";

export function SiteImage({ alt, ...props }: ImageProps) {
  return <Image {...props} alt={alt} unoptimized />;
}
