import { Post, getAllPosts } from "@/utils/getAllPosts";

const Home = async () => {
  const posts = await getPosts();

  return (
    <div>
      <h1 className="my-8">コンテンツ</h1>
      {posts.map((post) => post.date)}
    </div>
  );
};

const getPosts = async (): Promise<Post[]> => {
  const allPosts = getAllPosts();
  return allPosts.slice(0, 2).map((post) => post);
};

export default Home;
