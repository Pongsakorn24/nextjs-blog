import { mockBlogs } from '@/app/data/blogs'

// จำลอง latency ของ DB/network
function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const getBlogs = async () => {
  await delay(1000);
  return mockBlogs;
};

export async function GET() {
  const blogs = await getBlogs();
  return Response.json({ count: blogs.length, blogs: blogs });
}
 