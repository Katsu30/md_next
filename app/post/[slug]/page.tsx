import { getAllPosts, getPostBySlug } from "@/utils/getAllPosts";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Image from "next/image";

export async function generateStaticParams() {
  const posts = getAllPosts();
  const paths = posts.map((post) => ({
    slug: post.slug,
  }));
  return paths;
}

type Props = {
  params: {
    slug: string;
  };
};

const BlogPostPage = ({ params }: Props) => {
  const { slug } = params;
  const post = getPostBySlug(slug);

  return (
    <div className="flex justify-center align-middle flex-col w-full h-full gap-2 my-8">
      <div className="w-full h-full flex justify-center">
        <Image
          src={"/thumbnails/dafault-thumbnail.png"}
          alt={""}
          width={400}
          height={400}
          className="justify-items-center align-self-center"
        />
      </div>
      <Markdown
        remarkPlugins={[remarkGfm]}
        className={"markdown w-full h-full"}
      >
        {post.content}
      </Markdown>
    </div>
  );
};

export default BlogPostPage;
