import Link from "next/link";
import Layout from "../components/layout";
export default function Home({ guitarras, posts }) {
  console.log(guitarras, posts);
  return (
    <Layout title="Index">
      <h1>Hola mundo en Next</h1>
      <Link href="/nosotros">Ir a nosotros</Link>
    </Layout>
  );
}

export async function getStaticProps() {
  const resGuitarras = await fetch(
    "http://192.168.1.24:1337/api/guitarras?populate=imagen"
  );
  const resPosts = await fetch(
    "http://192.168.1.24:1337/api/posts?populate=imagen"
  );
  const { data: guitarras } = await resGuitarras.json();
  const { data: posts } = await resPosts.json();

  return {
    props: {
      guitarras,
      posts,
    },
  };
}
