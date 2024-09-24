import { getPosts } from '@repo/supabase/queries';

export async function PostsServer() {
  const { data } = await getPosts();

  return (
    <div>
      {data?.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
}
