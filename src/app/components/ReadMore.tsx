"use client";

import Link from "next/link";

interface ReadMoreProps {
  text: string;
  maxWords?: number;
  className?: string;
  href?: string;
}

export default function ReadMore({
  text,
  maxWords = 20,
  className = "",
  href,
}: ReadMoreProps) {
  const words = text.trim().split(/\s+/);
  const shouldTruncate = words.length > maxWords;
  const displayText = shouldTruncate
    ? `${words.slice(0, maxWords).join(" ")}...`
    : text;

  return (
    <div className="space-y-2">
      <p className={className}>{displayText}</p>
      {shouldTruncate && href ? (
        <Link
          href={href}
          className="text-sm font-semibold text-red-600 hover:text-red-700"
        >
          Read more
        </Link>
      ) : null}
    </div>
  );
}
