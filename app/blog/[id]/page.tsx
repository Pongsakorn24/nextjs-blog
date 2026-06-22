import React from 'react'
import Link from 'next/link'
import { Blog } from '@/app/data/blogs'
import { notFound } from 'next/navigation';

interface PageProps {
    params: Promise<{ id: number }>;
}

interface BlogResponse {
    blog: Blog;
};

async function getBlogsDetail(id: number): Promise<BlogResponse> {
    const res = await fetch(`http://localhost:3000/api/blogs/${id}`, {
        cache: 'no-store'
    });

    if (!res.ok) throw new Error('Failed to fetch blogs');
    return res.json();
}

const page = async ({ params }: PageProps) => {

    const { id } = await params;

    const { blog } = await getBlogsDetail(id);

    if (!blog) {
        notFound();
    }

    return (<main className="min-h-screen px-6 py-6 sm:px-10 lg:px-16">
        <article className="mx-auto max-w-4xl">
            <nav className="mb-10 flex items-center justify-between border-b border-[#17231d]/15 pb-5">
                <Link
                    href="/blog"
                    className="rounded-lg border border-[#17231d]/20 bg-[#fffaf2] px-4 py-2 text-sm font-bold text-[#153f38] shadow-[3px_3px_0_rgba(23,35,29,0.14)] transition hover:-translate-y-0.5 hover:border-[#e6533f]"
                >
                    Back to Blog
                </Link>
                <span className="rounded-lg bg-[#153f38] px-3 py-1 text-sm font-black text-[#fffaf2]">
                    0{blog.id}
                </span>
            </nav>

            <header className="border-b border-[#17231d]/15 pb-8">
                <p className="mb-4 inline-flex rounded-lg border border-[#153f38]/20 bg-[#fffaf2] px-3 py-1 text-sm font-semibold text-[#153f38]">
                    Blog Detail : {blog.id}
                </p>
                <h1 className="max-w-3xl text-5xl font-black leading-none text-[#17231d]">
                    {blog.title}
                </h1>
            </header>

            <section className="mt-8 grid gap-6 lg:grid-cols-[180px_1fr]">
                <aside className="rounded-lg border border-[#17231d]/15 bg-[#153f38] p-5 text-[#fffaf2]">
                    <p className="text-sm font-semibold text-[#fffaf2]/75">
                        Field note
                    </p>
                    <p className="mt-3 text-4xl font-black">0{blog.id}</p>
                </aside>
                <div className="rounded-lg border border-[#17231d]/15 bg-[#fffaf2] p-6 shadow-[8px_8px_0_rgba(21,63,56,0.12)]">
                    <p className="text-xl leading-9 text-[#2f3a33]">
                        {blog.detail}
                    </p>
                </div>
            </section>
        </article>
    </main>)
}

export default page
