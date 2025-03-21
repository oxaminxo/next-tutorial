import Link from "next/link";

export default function UserDetails({ userDetails }) {
  return (
    <>
      <h1>UserDetails</h1>
      <h3>{userDetails?.name}</h3>
      <h3>{userDetails?.email}</h3>
    </>
  );
}

export function getStaticPaths() {
  const paths = [];

  for (let i = 1; i <= 10; i++) {
    paths.push({
        params: { userId: String(i) },
      });
  }

  console.log('paths:', paths)

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.userId}`
  );
  const data = await res.json();

  return {
    props: {
      userDetails: data,
    },
  };
}
