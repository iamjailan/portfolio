"use client";

import {
  Children,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ComponentType,
  type ReactNode,
  type RefAttributes,
} from "react";
import {
  motion,
  useInView,
  type DOMMotionComponents,
  type HTMLMotionProps,
  type MotionProps,
} from "motion/react";

import { cn } from "@/lib/utils";

interface SequenceContextValue {
  completeItem: (index: number) => void;
  activeIndex: number;
  sequenceStarted: boolean;
}

const SequenceContext = createContext<SequenceContextValue | null>(null);
const ItemIndexContext = createContext<number | null>(null);

const motionElements = {
  article: motion.article,
  div: motion.div,
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  h4: motion.h4,
  h5: motion.h5,
  h6: motion.h6,
  li: motion.li,
  p: motion.p,
  section: motion.section,
  span: motion.span,
} as const;

type MotionElementType = Extract<
  keyof DOMMotionComponents,
  keyof typeof motionElements
>;
type TerminalTypingMotionComponent = ComponentType<
  Omit<HTMLMotionProps<"span">, "ref"> & RefAttributes<HTMLElement>
>;

interface AnimatedSpanProps extends MotionProps {
  children: ReactNode;
  className?: string;
}

export function AnimatedSpan({
  children,
  className,
  ...props
}: AnimatedSpanProps) {
  const sequence = useContext(SequenceContext);
  const itemIndex = useContext(ItemIndexContext);
  const hasStarted =
    sequence?.sequenceStarted && itemIndex !== null && sequence.activeIndex >= itemIndex;

  return (
    <motion.div
      initial={{ opacity: 0, y: -5 }}
      animate={hasStarted ? { opacity: 1, y: 0 } : { opacity: 0, y: -5 }}
      transition={{ duration: 0.25 }}
      className={cn("text-sm leading-6", className)}
      onAnimationComplete={() => {
        if (itemIndex !== null) sequence?.completeItem(itemIndex);
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

interface TypingAnimationProps extends Omit<MotionProps, "children"> {
  children: string;
  className?: string;
  duration?: number;
  as?: MotionElementType;
}

export function TypingAnimation({
  children,
  className,
  duration = 24,
  as: Component = "span",
  ...props
}: TypingAnimationProps) {
  const sequence = useContext(SequenceContext);
  const itemIndex = useContext(ItemIndexContext);
  const [displayedText, setDisplayedText] = useState("");
  const isActive =
    sequence?.sequenceStarted && itemIndex !== null && sequence.activeIndex === itemIndex;
  const isComplete =
    sequence?.sequenceStarted && itemIndex !== null && sequence.activeIndex > itemIndex;

  useEffect(() => {
    if (!isActive) return;

    let characterIndex = 0;
    const interval = setInterval(() => {
      if (characterIndex < children.length) {
        setDisplayedText(children.slice(0, characterIndex + 1));
        characterIndex += 1;
        return;
      }

      clearInterval(interval);
      if (itemIndex !== null) sequence?.completeItem(itemIndex);
    }, duration);

    return () => clearInterval(interval);
  }, [children, duration, isActive, itemIndex, sequence]);

  const MotionComponent = motionElements[
    Component
  ] as TerminalTypingMotionComponent;

  return (
    <MotionComponent
      className={cn("block text-sm leading-6", className)}
      {...props}
    >
      {isComplete ? children : displayedText}
    </MotionComponent>
  );
}

interface TerminalProps {
  children: ReactNode;
  className?: string;
  title?: string;
}

export function Terminal({
  children,
  className,
  title = "jailan@portfolio — zsh",
}: TerminalProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(containerRef, { amount: 0.3, once: true });
  const [activeIndex, setActiveIndex] = useState(0);
  const wrappedChildren = useMemo(
    () =>
      Children.toArray(children).map((child, index) => (
        <ItemIndexContext.Provider key={index} value={index}>
          {child}
        </ItemIndexContext.Provider>
      )),
    [children]
  );

  const contextValue = useMemo(
    () => ({
      completeItem: (index: number) => {
        setActiveIndex((current) => (index === current ? current + 1 : current));
      },
      activeIndex,
      sequenceStarted: isInView,
    }),
    [activeIndex, isInView]
  );

  return (
    <SequenceContext.Provider value={contextValue}>
      <div
        ref={containerRef}
        className={cn(
          "overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950 font-mono text-zinc-100 shadow-2xl dark:border-zinc-700",
          className
        )}
      >
        <div className="flex items-center gap-2 border-b border-zinc-800 bg-zinc-900/80 px-4 py-3 dark:border-zinc-700">
          <span className="size-3 rounded-full bg-red-500" />
          <span className="size-3 rounded-full bg-amber-400" />
          <span className="size-3 rounded-full bg-emerald-500" />
          <span className="ml-2 text-xs text-zinc-400">{title}</span>
        </div>
        <pre className="overflow-x-auto p-4 sm:p-5">
          <code className="grid gap-y-1 whitespace-pre-wrap">{wrappedChildren}</code>
        </pre>
      </div>
    </SequenceContext.Provider>
  );
}
