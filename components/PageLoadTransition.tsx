"use client";

import { useLayoutEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { SiteImage as Image } from "@/components/SiteImage";

export function PageLoadTransition() {
  const pathname = usePathname();
  const loaderRef = useRef<HTMLDivElement>(null);
  const panelTopRef = useRef<HTMLDivElement>(null);
  const panelBottomRef = useRef<HTMLDivElement>(null);
  const loaderMarkRef = useRef<HTMLDivElement>(null);
  const routeLineRef = useRef<HTMLElement>(null);
  const hasPlayedRef = useRef(false);

  useLayoutEffect(() => {
    const loader = loaderRef.current;
    if (!loader) return;

    loader.style.animation = "none";

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set(loader, { autoAlpha: 0 });
      return;
    }

    const hero = document.querySelector<HTMLElement>(".hero");
    if (!hero) {
      gsap.set(loader, { autoAlpha: 0 });
      return;
    }

    const panelTop = panelTopRef.current;
    const panelBottom = panelBottomRef.current;
    const loaderMark = loaderMarkRef.current;
    const routeLine = routeLineRef.current;
    if (!panelTop || !panelBottom || !loaderMark || !routeLine) {
      gsap.set(loader, { autoAlpha: 0 });
      return;
    }
    const heroMedia = hero.querySelector<HTMLElement>(".hero-media");
    const eyebrow = hero.querySelector<HTMLElement>(".hero-eyebrow");
    const heading = hero.querySelector<HTMLElement>("h1");
    const copy = hero.querySelector<HTMLElement>(".hero-copy");
    const actions = hero.querySelector<HTMLElement>(".hero-actions");
    const proof = hero.querySelector<HTMLElement>(".hero-proof");
    const detailRoute = hero.querySelector<HTMLElement>(".detail-route");
    const headerSelector = window.matchMedia("(min-width: 901px)").matches
      ? ".site-header .brand, .site-header .main-nav, .site-header .header-actions"
      : ".site-header .brand, .site-header .menu-toggle";
    const headerTargets = Array.from(
      hero.querySelectorAll<HTMLElement>(headerSelector),
    ).filter((node) => window.getComputedStyle(node).display !== "none");
    const entranceTargets = [
      heroMedia,
      eyebrow,
      heading,
      copy,
      actions,
      proof,
      detailRoute,
      ...headerTargets,
    ].filter((node): node is HTMLElement => Boolean(node));
    const supportingTargets = [eyebrow, copy, actions].filter(
      (node): node is HTMLElement => Boolean(node),
    );
    const sideTargets = [proof, detailRoute].filter(
      (node): node is HTMLElement => Boolean(node),
    );

    const context = gsap.context(() => {
      gsap.set(loader, { autoAlpha: 1 });
      gsap.set([panelTop, panelBottom], { yPercent: 0 });
      gsap.set(loaderMark, { autoAlpha: 0, y: 12, scale: 0.88 });
      gsap.set(routeLine, { scaleX: 0, transformOrigin: "left center" });
      if (heroMedia) gsap.set(heroMedia, { scale: 1.07 });
      gsap.set(headerTargets, { autoAlpha: 0, y: -18 });
      gsap.set(supportingTargets, { autoAlpha: 0, y: 28 });
      if (heading) {
        gsap.set(heading, {
          autoAlpha: 0,
          clipPath: "inset(0 0 100% 0)",
          y: 54,
        });
      }
      gsap.set(sideTargets, { autoAlpha: 0, x: 28 });

      const timeline = gsap.timeline({
        defaults: { ease: "power3.out" },
        onComplete: () => {
          gsap.set(loader, { autoAlpha: 0 });
          gsap.set(entranceTargets, {
            clearProps: "clipPath,opacity,transform,visibility",
          });
        },
      });

      timeline
        .to(loaderMark, {
          autoAlpha: 1,
          duration: 0.38,
          scale: 1,
          y: 0,
        })
        .to(
          routeLine,
          {
            duration: 0.5,
            ease: "power2.inOut",
            scaleX: 1,
          },
          0.08,
        )
        .to(
          loaderMark,
          {
            autoAlpha: 0,
            duration: 0.24,
            ease: "power2.in",
            y: -14,
          },
          0.52,
        )
        .to(
          panelTop,
          {
            duration: 0.86,
            ease: "power4.inOut",
            yPercent: -101,
          },
          0.58,
        )
        .to(
          panelBottom,
          {
            duration: 0.86,
            ease: "power4.inOut",
            yPercent: 101,
          },
          0.58,
        )
        .to(
          headerTargets,
          {
            autoAlpha: 1,
            duration: 0.62,
            stagger: 0.055,
            y: 0,
          },
          0.73,
        );

      if (heroMedia) {
        timeline.to(
          heroMedia,
          {
            duration: 1.25,
            ease: "power3.out",
            scale: 1,
          },
          0.64,
        );
      }
      if (eyebrow) {
        timeline.to(
          eyebrow,
          {
            autoAlpha: 1,
            duration: 0.55,
            y: 0,
          },
          0.78,
        );
      }
      if (heading) {
        timeline.to(
          heading,
          {
            autoAlpha: 1,
            clipPath: "inset(0 0 0% 0)",
            duration: 0.84,
            ease: "power4.out",
            y: 0,
          },
          0.83,
        );
      }
      if (copy) {
        timeline.to(
          copy,
          {
            autoAlpha: 1,
            duration: 0.62,
            y: 0,
          },
          1.02,
        );
      }
      if (actions) {
        timeline.to(
          actions,
          {
            autoAlpha: 1,
            duration: 0.58,
            y: 0,
          },
          1.1,
        );
      }
      if (sideTargets.length > 0) {
        timeline.to(
          sideTargets,
          {
            autoAlpha: 1,
            duration: 0.58,
            stagger: 0.06,
            x: 0,
          },
          1.12,
        );
      }

      if (hasPlayedRef.current) {
        timeline.timeScale(1.35);
      }
      hasPlayedRef.current = true;
    });

    return () => context.revert();
  }, [pathname]);

  return (
    <div className="page-loader" ref={loaderRef} aria-hidden="true">
      <div
        className="page-loader__panel page-loader__panel--top"
        ref={panelTopRef}
      />
      <div
        className="page-loader__panel page-loader__panel--bottom"
        ref={panelBottomRef}
      />
      <div className="page-loader__mark" ref={loaderMarkRef}>
        <Image
          className="page-loader__symbol"
          src="/assets/brand/sara-s-favicon-192.png"
          alt=""
          width={56}
          height={56}
          priority
        />
        <div className="page-loader__route">
          <span>CH</span>
          <i className="page-loader__route-line" ref={routeLineRef} />
          <span>EU</span>
        </div>
      </div>
    </div>
  );
}
