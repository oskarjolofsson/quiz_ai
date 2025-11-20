"use client";

import { useCallback, useEffect, useState } from "react";

type Props = {
  frontText: String;
  backText: String;
};

export default function FlashCard({ frontText, backText }: Props) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="flex min-h-[300px] items-center justify-center">
      <div className="h-80 w-126" style={{ perspective: "1200px" }}>
        <div
          className={`
            relative h-full w-full
            transition-transform duration-500
            transform-3d
            origin-center
            ${
              flipped
                ? "transform-[rotateX(180deg)]"
                : "transform-[rotateX(0deg)]"
            }
          `}
        >
          <div className="absolute inset-0 flex items-center justify-center rounded-xl border bg-card p-6 text-center text-card-foreground [backface-visibility:hidden]">
            {frontText}
          </div>

          <div className="absolute inset-0 flex items-center justify-center rounded-xl border bg-card p-6 text-center text-primary-foreground [backface-visibility:hidden] [transform:rotateX(180deg)]">
            {backText}
          </div>
        </div>
      </div>
    </div>
  );
}
