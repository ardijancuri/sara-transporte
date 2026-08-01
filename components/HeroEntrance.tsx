"use client";

import { useLayoutEffect } from "react";
import { gsap } from "gsap";

export function HeroEntrance() {
  useLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const hero = document.querySelector<HTMLElement>(".hero");
    if (!hero) return;

    const heroMedia = hero.querySelector<HTMLElement>(".hero-media");
    const eyebrow = hero.querySelector<HTMLElement>(".hero-eyebrow");
    const heading = hero.querySelector<HTMLElement>("h1");
    const copy = hero.querySelector<HTMLElement>(".hero-copy");
    const actions = hero.querySelector<HTMLElement>(".hero-actions");
    const proof = hero.querySelector<HTMLElement>(".hero-proof");
    const detailRoute = hero.querySelector<HTMLElement>(".detail-route");
    const headerSelector = window.matchMedia("(min-width: 901px)").matches
      ? ".site-header .brand, .site-header .main-nav, .site-header .header-actions"
      : ".site-header .brand, .site-header .language-switcher.is-mobile, .site-header .menu-toggle";
    const headerTargets = Array.from(
      hero.querySelectorAll<HTMLElement>(headerSelector),
    ).filter((node) => window.getComputedStyle(node).display !== "none");
    const supportingTargets = [eyebrow, copy, actions].filter(
      (node): node is HTMLElement => Boolean(node),
    );
    const sideTargets = [proof, detailRoute].filter(
      (node): node is HTMLElement => Boolean(node),
    );
    const entranceTargets = [
      heroMedia,
      heading,
      ...supportingTargets,
      ...sideTargets,
      ...headerTargets,
    ].filter((node): node is HTMLElement => Boolean(node));

    const context = gsap.context(() => {
      if (heroMedia) gsap.set(heroMedia, { scale: 1.045 });
      gsap.set(headerTargets, { autoAlpha: 0, y: -16 });
      gsap.set(supportingTargets, { autoAlpha: 0, y: 24 });
      if (heading) {
        gsap.set(heading, {
          autoAlpha: 0,
          clipPath: "inset(0 0 100% 0)",
          y: 46,
        });
      }
      gsap.set(sideTargets, { autoAlpha: 0, x: 24 });

      const timeline = gsap.timeline({
        defaults: { ease: "power3.out" },
        onComplete: () => {
          gsap.set(entranceTargets, {
            clearProps: "clipPath,opacity,transform,visibility",
          });
        },
      });

      if (heroMedia) {
        timeline.to(heroMedia, { duration: 1.05, scale: 1 }, 0);
      }
      timeline.to(
        headerTargets,
        { autoAlpha: 1, duration: 0.58, stagger: 0.05, y: 0 },
        0.04,
      );
      if (eyebrow) {
        timeline.to(eyebrow, { autoAlpha: 1, duration: 0.5, y: 0 }, 0.1);
      }
      if (heading) {
        timeline.to(
          heading,
          {
            autoAlpha: 1,
            clipPath: "inset(0 0 0% 0)",
            duration: 0.76,
            ease: "power4.out",
            y: 0,
          },
          0.16,
        );
      }
      if (copy) {
        timeline.to(copy, { autoAlpha: 1, duration: 0.56, y: 0 }, 0.34);
      }
      if (actions) {
        timeline.to(actions, { autoAlpha: 1, duration: 0.52, y: 0 }, 0.42);
      }
      if (sideTargets.length > 0) {
        timeline.to(
          sideTargets,
          { autoAlpha: 1, duration: 0.54, stagger: 0.05, x: 0 },
          0.48,
        );
      }
    });

    return () => context.revert();
  }, []);

  return null;
}
