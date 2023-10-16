import { Post, getAllPosts } from "@/utils/getAllPosts";
import { BlogCard } from "./ui/common/BlogCard";

const Home = async () => {
  const posts = await getPosts();

  return (
    <div>
      <div className="grid grid-cols-3 gap-4">
        {posts.map((post, index) => (
          <BlogCard key={`blog_card_${index}`} {...post} />
        ))}
      </div>
    </div>
  );
};

const getPosts = async (): Promise<Post[]> => {
  const allPosts = getAllPosts();
  return allPosts.map((post) => post);
};

export default Home;
