export default function Loading() {
    return (
        <main className="min-h-screen px-6 py-6 sm:px-10 lg:px-16">
            <article className="mx-auto max-w-4xl">
                <nav className="mb-10 flex items-center justify-between border-b border-[#17231d]/15 pb-5">
                    <div className="h-10 w-28 animate-pulse rounded-lg border border-[#17231d]/20 bg-[#fffaf2] shadow-[3px_3px_0_rgba(23,35,29,0.14)]" />
                    <span className="h-7 w-11 animate-pulse rounded-lg bg-[#153f38]/25" />
                </nav>

                <header className="border-b border-[#17231d]/15 pb-8">
                    <div className="mb-4 h-8 w-36 animate-pulse rounded-lg bg-[#fffaf2]" />
                    <div className="h-14 max-w-3xl animate-pulse rounded-lg bg-[#17231d]/10" />
                </header>

                <section className="mt-8 grid gap-6 lg:grid-cols-[180px_1fr]">
                    <aside className="rounded-lg border border-[#17231d]/15 bg-[#153f38] p-5 text-[#fffaf2]">
                        <div className="h-4 w-20 animate-pulse rounded-full bg-[#fffaf2]/20" />
                        <div className="mt-3 h-10 w-14 animate-pulse rounded-lg bg-[#fffaf2]/25" />
                    </aside>
                    <div className="rounded-lg border border-[#17231d]/15 bg-[#fffaf2] p-6 shadow-[8px_8px_0_rgba(21,63,56,0.12)]">
                        <div className="h-6 animate-pulse rounded-full bg-[#17231d]/10" />
                        <div className="mt-4 h-6 w-11/12 animate-pulse rounded-full bg-[#17231d]/10" />
                        <div className="mt-4 h-6 w-8/12 animate-pulse rounded-full bg-[#17231d]/10" />
                    </div>
                </section>
            </article>
        </main>
    )
}
