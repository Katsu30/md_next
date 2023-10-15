import { Post, getAllPosts, getPostBySlug } from "@/utils/getAllPosts";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

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
    <div className="my-8">
      <Markdown remarkPlugins={[remarkGfm]} className={"markdown"}>
        {post.content}
      </Markdown>
    </div>
  );
};

export default BlogPostPage;
