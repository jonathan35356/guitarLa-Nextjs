import Link from "next/link";
import Layout from "../components/layout";
import Guitarra from "../components/guitarra";
import Curso from "../components/curso";
import Post from "../components/post";
import styles from "../styles/grid.module.css";

export default function Home({ guitarras, posts, curso }) {
  console.log(curso);
  return (
    <Layout
      title="Index"
      description={"Blog de música, venta de guitarras y más"}
    >
      <main className="contenedor">
        <h1 className="heading">Nuestra Colección</h1>
        <div className={styles.grid}>
          {guitarras?.map((guitarra) => (
            <Guitarra key={guitarra.id} guitarra={guitarra.attributes} />
          ))}
        </div>
      </main>
      <Curso curso={curso.attributes}></Curso>
      <section className="contenedor">
        <h2 className="heading">Blog</h2>
        <div className={styles.grid}>
          {posts?.map((post) => (
            <Post key={post.id} post={post.attributes} />
          ))}
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  try {
    const resCurso = await fetch(
      "http://192.168.1.24:1337/api/curso?populate=imagen"
    );

    const resGuitarras = await fetch(
      "http://192.168.1.24:1337/api/guitarras?populate=imagen"
    );
    const resPosts = await fetch(
      "http://192.168.1.24:1337/api/posts?populate=imagen"
    );
    const { data: guitarras } = await resGuitarras.json();
    const { data: posts } = await resPosts.json();
    const { data: curso } = await resCurso.json();
    return {
      props: {
        guitarras,
        posts,
        curso,
      },
    };
  } catch (error) {
    console.log(error.message);
  }
}
