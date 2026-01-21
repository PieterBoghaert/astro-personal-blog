import data from "../../starter-code/data.json";

export type Post = {
  id: string;
  title: string;
  date?: string;
  excerpt?: string;
  content?: string;
  [k: string]: any;
};

export const posts: Post[] = Array.isArray(data) ? data : [];

export default posts;
