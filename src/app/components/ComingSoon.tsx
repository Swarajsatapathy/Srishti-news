import Link from "next/link";

export default function ComingSoon() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center bg-slate-50 px-4 text-center">
      <div className="mb-6 rounded-full bg-red-100 p-6">
        <span className="text-4xl">🚧</span>
      </div>
      <h1 className="text-3xl font-extrabold text-slate-900 sm:text-5xl">
        Coming Soon
      </h1>
      <p className="mt-4 max-w-lg text-lg text-slate-600">
        We're working hard to bring you this section. Stay tuned for updates!
      </p>
      <div className="mt-8">
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-lg bg-red-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
