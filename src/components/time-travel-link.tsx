"use client";

/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createPortal } from "react-dom";
import {
  forwardRef,
  useEffect,
  useState,
  type AnchorHTMLAttributes,
  type ReactNode,
} from "react";
import styles from "./time-travel-link.module.css";

const DESTINATION_YEAR = 1996;
const TRAVEL_DURATION = 3600;
const COUNTDOWN_DURATION = 2600;

interface TimeTravelLinkProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  href: "/retro";
  children: ReactNode;
}

export const TimeTravelLink = forwardRef<HTMLAnchorElement, TimeTravelLinkProps>(
  function TimeTravelLink({ href, children, onClick, ...props }, ref) {
  const router = useRouter();
  const [isTravelling, setIsTravelling] = useState(false);
  const [displayYear, setDisplayYear] = useState(DESTINATION_YEAR);

  useEffect(() => {
    if (!isTravelling) return;

    const departureYear = new Date().getFullYear();
    const yearsToTravel = Math.max(departureYear - DESTINATION_YEAR, 1);
    const startedAt = performance.now();

    const countdown = window.setInterval(() => {
      const elapsed = performance.now() - startedAt;
      const progress = Math.min(elapsed / COUNTDOWN_DURATION, 1);
      const year = Math.max(
        DESTINATION_YEAR,
        departureYear - Math.floor(progress * yearsToTravel)
      );

      setDisplayYear(year);

      if (progress === 1) window.clearInterval(countdown);
    }, 70);
    const timeout = window.setTimeout(() => router.push(href), TRAVEL_DURATION);

    return () => {
      window.clearTimeout(timeout);
      window.clearInterval(countdown);
    };
  }, [href, isTravelling, router]);

  const handleClick: AnchorHTMLAttributes<HTMLAnchorElement>["onClick"] = (
    event
  ) => {
    onClick?.(event);

    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    event.preventDefault();

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      router.push(href);
      return;
    }

    setDisplayYear(new Date().getFullYear());
    setIsTravelling(true);
  };

    return (
      <>
        <Link
          ref={ref}
          href={href}
          onClick={handleClick}
          aria-busy={isTravelling || undefined}
          {...props}
        >
          {children}
        </Link>
        {isTravelling &&
          createPortal(
            <div className={styles.overlay} role="status" aria-live="assertive">
              <div className={styles.stars} aria-hidden="true" />
              <div className={styles.portal} aria-hidden="true" />
              <img
                className={styles.traveller}
                src="/go-gopher.png"
                alt=""
                aria-hidden="true"
              />
              <div className={styles.destination}>
                <p className={styles.kicker}>TIME TRAVEL INITIATED</p>
                <p className={styles.year}>{displayYear}</p>
                <p className={styles.message}>
                  Gopher is taking us back to the early web…
                </p>
              </div>
            </div>,
            document.body
          )}
      </>
    );
  }
);
