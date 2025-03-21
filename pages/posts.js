export default function Posts({ posts }) {
  console.log("posts:", posts);
  return (
    <>
      <h1>Posts</h1>
      <ul>
        {posts?.map((post) => (
          <li key={post?.id}>{post?.title}</li>
        ))}
      </ul>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}
