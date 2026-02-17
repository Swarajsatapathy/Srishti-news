import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-10 bg-linear-to-r from-[#0f1629] to-[#111827] text-white shadow-inner">
      <div className="max-w-360 mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div className="space-y-2">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-white/80">Srishti News</p>
            <p className="text-lg font-bold">Odisha | India | World</p>
            <p className="text-xs text-white/70">Trusted headlines, breaking updates, and voices from the ground.</p>
          </div>

          <div className="space-y-2 text-sm">
            <p className="text-white/80 font-semibold uppercase tracking-[0.12em]">Explore</p>
            <div className="flex flex-col gap-1">
              <Link href="/about" className="hover:text-amber-200">About</Link>
              <Link href="/contact" className="hover:text-amber-200">Contact</Link>
              <Link href="/web-news" className="hover:text-amber-200">Web News</Link>
            </div>
          </div>

          <div className="space-y-2 text-sm">
            <p className="text-white/80 font-semibold uppercase tracking-[0.12em]">Contact</p>
            <div className="flex flex-col gap-1 text-white">
              <span className="text-[11px] uppercase tracking-[0.08em] text-white/70">Mobile / Whatsapp / Telegram</span>
              <a href="tel:+919668421545" className="font-semibold hover:text-amber-200">9668421545</a>
              <span className="text-[11px] uppercase tracking-[0.08em] text-white/70 mt-2">E-Mail</span>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=srishtinews@gmail.com"
                className="font-semibold hover:text-amber-200"
                target="_blank"
                rel="noreferrer"
              >
                srishtinews@gmail.com
              </a>
              <span className="text-white/70 mt-2">© {year} Srishti News</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
