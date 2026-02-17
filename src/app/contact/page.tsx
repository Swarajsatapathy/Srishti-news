export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-360 mx-auto px-4 py-10 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-white shadow-sm p-6 sm:p-10 space-y-6">
          <header className="space-y-2">
            <p className="text-xs uppercase tracking-[0.35em] text-slate-500">
              Contact Us
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Get in touch
            </h1>
          </header>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-xs uppercase tracking-wide text-slate-500">
                Mobile / Whatsapp / Telegram
              </p>
              <p className="mt-2 text-lg font-semibold text-slate-900">
                9668421545
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-xs uppercase tracking-wide text-slate-500">
                E-Mail
              </p>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=srishtinews@gmail.com"
                className="mt-2 inline-flex text-lg font-semibold text-slate-900 hover:text-red-600"
                target="_blank"
                rel="noreferrer"
              >
                srishtinews@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
