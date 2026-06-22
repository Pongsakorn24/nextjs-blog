import Link from "next/link";

export default function Home() {
  return (
    <main className="grid min-h-screen place-items-center px-6">
      <div className="w-full max-w-md rounded-lg border border-[#17231d]/15 bg-[#fffaf2] p-8 text-center shadow-[8px_8px_0_rgba(21,63,56,0.14)]">
        <div className="mx-auto mb-6 grid size-12 place-items-center rounded-lg bg-[#153f38] text-sm font-black text-[#fffaf2] shadow-[4px_4px_0_#e6533f]">
          NB
        </div>
        <h1 className="text-4xl font-black leading-tight text-[#17231d]">
          Next Blog
        </h1>
        <p className="mt-3 text-base leading-7 text-[#59645c]">
          Simple notes and blog details.
        </p>
        <Link
          href="/blog"
          className="mt-7 inline-flex rounded-lg bg-[#153f38] px-5 py-3 text-sm font-bold text-[#fffaf2] shadow-[4px_4px_0_#e6533f] transition hover:-translate-y-0.5"
        >
          Go To Blog
        </Link>
      </div>
    </main>
  );
}
