import { Post } from "@/utils/getAllPosts";
import Link from "next/link";

export const BlogCard = ({ slug, title, date }: Post) => {
  return (
    <Link href={`post/${slug}`}>
      <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
        <h3>{title}</h3>
        <p>{date}</p>
      </div>
    </Link>
  );
};
