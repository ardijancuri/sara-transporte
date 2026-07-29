"use client";

import NextLink from "next/link";
import type { ComponentProps } from "react";
import { localizePath, useI18n } from "@/lib/i18n";

type LocalizedLinkProps = Omit<ComponentProps<typeof NextLink>, "href"> & {
  href: string;
};

export function LocalizedLink({ href, ...props }: LocalizedLinkProps) {
  const { locale } = useI18n();

  return <NextLink href={localizePath(href, locale)} {...props} />;
}
