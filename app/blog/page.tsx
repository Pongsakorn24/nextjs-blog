import React from 'react'
import Link from 'next/link'
import { Blog } from '@/app/data/blogs'

interface BlogResponse {
    count: number;
    blogs: Blog[];
};

async function getBlogs(): Promise<BlogResponse> {
    const res = await fetch('http://localhost:3000/api/blogs', {
        cache: 'no-store'
    });

    if (!res.ok) throw new Error('Failed to fetch blogs');
    return res.json();
}

const page = async () => {

    const { count, blogs } = await getBlogs();

    return (<main className="min-h-screen px-6 py-6 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
            <nav className="mb-10 flex items-center justify-between border-b border-[#17231d]/15 pb-5">
                <Link href="/" className="flex items-center gap-3">
                    <span className="grid size-10 place-items-center rounded-lg bg-[#153f38] text-sm font-black text-[#fffaf2] shadow-[4px_4px_0_#e6533f]">
                        NB
                    </span>
                    <span className="text-sm font-bold text-[#153f38]">Next Blog</span>
                </Link>
                <span className="rounded-lg border border-[#17231d]/15 bg-[#fffaf2] px-4 py-2 text-sm font-bold text-[#17231d]">
                    Blogs : {count}
                </span>
            </nav>

            <section className="mb-10 grid gap-6 lg:grid-cols-[1fr_280px] lg:items-end">
                <div>
                    <p className="mb-4 inline-flex rounded-lg border border-[#153f38]/20 bg-[#fffaf2] px-3 py-1 text-sm font-semibold text-[#153f38]">
                        Archive
                    </p>
                    <h1 className="max-w-3xl text-4xl font-black leading-tight text-[#17231d] sm:text-5xl">
                        Latest notes from the desk.
                    </h1>
                </div>
                <p className="text-base leading-7 text-[#59645c]">
                    Browse compact posts with a cleaner rhythm, stronger
                    hierarchy, and more breathing room.
                </p>
            </section>

            <ul className="grid gap-5 md:grid-cols-3">
                {blogs.map((item) => {
                    return <li
                        key={item.id}
                        className="flex min-h-72 flex-col justify-between rounded-lg border border-[#17231d]/15 bg-[#fffaf2] p-6 shadow-[7px_7px_0_rgba(21,63,56,0.12)] transition hover:-translate-y-1 hover:border-[#e6533f]/70"
                    >
                        <div>
                            <div className="mb-8 flex items-center justify-between">
                                <span className="rounded-lg bg-[#153f38] px-3 py-1 text-sm font-black text-[#fffaf2]">
                                    0{item.id}
                                </span>
                                <span className="text-sm font-semibold text-[#657065]">
                                    Article
                                </span>
                            </div>
                            <h2 className="text-2xl font-black leading-tight text-[#17231d]">
                                {item.title}
                            </h2>
                            <p className="mt-4 text-base leading-7 text-[#59645c]">
                                {item.detail}
                            </p>
                        </div>
                        <Link
                            href={`/blog/${item.id}`}
                            className="mt-8 inline-flex w-fit rounded-lg border border-[#17231d]/20 px-4 py-2 text-sm font-bold text-[#153f38] transition hover:border-[#e6533f] hover:bg-[#f3c45f]/25"
                        >
                            Read detail
                        </Link>
                    </li>
                })}
            </ul>
        </div>
    </main>)
}

export default page
