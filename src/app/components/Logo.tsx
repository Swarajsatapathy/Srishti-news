import Image from "next/image";

export default function Logo({
  className = "w-26 h-22",
  language = "en",
}: {
  className?: string;
  language?: "en" | "or";
}) {
  // Select logo based on language preference
  const logoSrc = language === "or" ? "/Logo-or.png" : "/Logo-en.png";

  return (
    <div className={`${className} flex-shrink-0 relative`}>
      <Image
        src={logoSrc}
        alt="Srishti News Logo"
        fill
        className="object-contain"
        priority
      />
    </div>
  );
}
