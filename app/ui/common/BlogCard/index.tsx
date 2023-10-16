import { Post } from "@/utils/getAllPosts";
import Link from "next/link";
import Image from "next/image";

export const BlogCard = ({ slug, title, date }: Post) => {
  return (
    <Link href={`post/${slug}`}>
      <div className="block max-w-sm h-60 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-50">
        <div
          className="w-full max-h-20 flex justify-center mb-2"
          style={{
            objectFit: "contain",
            overflow: "hidden",
          }}
        >
          <Image
            src="/thumbnails/dafault-thumbnail.png"
            alt=""
            width={0}
            height={0}
            className="rounded-t-lg"
            style={{
              width: "80%",
              height: "80%",
            }}
          />
        </div>
        <div>
          <h3>{title}</h3>
          <p>{date}</p>
        </div>
      </div>
    </Link>
  );
};
