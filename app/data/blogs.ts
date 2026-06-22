export interface Blog {
  id: number;
  title: string;
  detail: string;
};

export const mockBlogs: Blog[] = [
  {
    id: 1,
    title: "Blog title 1",
    detail: "Blog detail 1",
  },
  {
    id: 2,
    title: "Blog title 2",
    detail: "Blog detail 2",
  },
  {
    id: 3,
    title: "Blog title 3",
    detail: "Blog detail 3",
  },
];