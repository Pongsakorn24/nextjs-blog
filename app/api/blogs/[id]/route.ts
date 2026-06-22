import { mockBlogs } from '@/app/data/blogs'

// จำลอง latency ของ DB/network
function delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;

    try {
        const blogDetail = mockBlogs.find((p) => p.id === parseInt(id));

        await delay(1000);
        if (!blogDetail) {
            return Response.json({ error: 'Blog not found' }, { status: 404 });
        }

        console.log(blogDetail);

        return Response.json({ blog: blogDetail });
    }
    catch (ex) {
        console.log(ex);
        return Response.json({ error: 'Blog Error' }, { status: 500 });
    }
}