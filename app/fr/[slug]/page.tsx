import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DetailPage } from "@/components/DetailPage";
import {
  languageAlternates,
  localizedPageMetadata,
} from "@/lib/localized-metadata";
import { pages, type PageSlug } from "@/lib/site-data";

export function generateStaticParams() {
  return Object.keys(pages).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = localizedPageMetadata[slug as PageSlug]?.fr;

  if (!page) {
    return {};
  }

  return {
    ...page,
    alternates: {
      canonical: `/fr/${slug}`,
      languages: languageAlternates(`/${slug}`),
    },
  };
}

export default async function FrenchPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (!(slug in pages)) {
    notFound();
  }

  return <DetailPage slug={slug as PageSlug} />;
}
