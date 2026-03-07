"use client";

import { useEffect, useState, type ElementType } from "react";
import { startGlitchAnimation } from "../../lib/glitch-text";

type GlitchTitleProps = {
  text: string;
  className?: string;
  as?: ElementType;
  durationMs?: number;
  frameDurationMs?: number;
};

export default function GlitchTitle({
  text,
  className,
  as,
  durationMs = 850,
  frameDurationMs = 45,
}: GlitchTitleProps) {
  const [displayText, setDisplayText] = useState(text);
  const Component = as ?? "h1";

  useEffect(() => {
    setDisplayText(text);

    return startGlitchAnimation({
      target: text,
      durationMs,
      frameDurationMs,
      onUpdate: setDisplayText,
    });
  }, [text, durationMs, frameDurationMs]);

  return (
    <Component className={className} aria-label={text}>
      {displayText}
    </Component>
  );
}
