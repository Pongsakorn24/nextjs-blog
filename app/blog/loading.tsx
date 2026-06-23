export default function Loading() {
    return (
        <main className="min-h-screen px-6 py-6 sm:px-10 lg:px-16">
            <div className="mx-auto max-w-6xl">
                <nav className="mb-10 flex items-center justify-between border-b border-[#17231d]/15 pb-5">
                    <div className="flex items-center gap-3">
                        <span className="grid size-10 place-items-center rounded-lg bg-[#153f38] text-sm font-black text-[#fffaf2] shadow-[4px_4px_0_#e6533f]">
                            NB
                        </span>
                        <span className="text-sm font-bold text-[#153f38]">Next Blog</span>
                    </div>
                    <span className="h-10 w-24 animate-pulse rounded-lg border border-[#17231d]/15 bg-[#fffaf2]" />
                </nav>

                <section className="mb-10 grid gap-6 lg:grid-cols-[1fr_280px] lg:items-end">
                    <div>
                        <div className="mb-4 h-8 w-24 animate-pulse rounded-lg bg-[#fffaf2]" />
                        <div className="h-12 max-w-2xl animate-pulse rounded-lg bg-[#17231d]/10 sm:h-16" />
                    </div>
                    <div className="space-y-3">
                        <div className="h-4 animate-pulse rounded-full bg-[#17231d]/10" />
                        <div className="h-4 w-10/12 animate-pulse rounded-full bg-[#17231d]/10" />
                    </div>
                </section>

                <ul className="grid gap-5 md:grid-cols-3" aria-label="Loading blog posts">
                    {[1, 2, 3].map((item) => (
                        <li
                            key={item}
                            className="flex min-h-72 flex-col justify-between rounded-lg border border-[#17231d]/15 bg-[#fffaf2] p-6 shadow-[7px_7px_0_rgba(21,63,56,0.12)]"
                        >
                            <div>
                                <div className="mb-8 flex items-center justify-between">
                                    <span className="h-7 w-11 animate-pulse rounded-lg bg-[#153f38]/25" />
                                    <span className="h-4 w-14 animate-pulse rounded-full bg-[#17231d]/10" />
                                </div>
                                <div className="h-8 animate-pulse rounded-lg bg-[#17231d]/12" />
                                <div className="mt-4 h-4 animate-pulse rounded-full bg-[#17231d]/10" />
                                <div className="mt-3 h-4 w-8/12 animate-pulse rounded-full bg-[#17231d]/10" />
                            </div>
                            <div className="mt-8 h-10 w-28 animate-pulse rounded-lg border border-[#17231d]/15 bg-[#fffaf2]" />
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    )
}
