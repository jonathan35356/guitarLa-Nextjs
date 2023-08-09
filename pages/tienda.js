import Layout from "../components/layout";
import Guitarra from "../components/guitarra";
import styles from "../styles/grid.module.css";

export default function Tienda({ guitarras }) {
  const guitarrass = guitarras;
  return (
    <Layout title={"Tienda Virtual"} description={"Venta de guitarras"}>
      <main className="contenedor">
        <h1 className="heading">Nuestra Colección</h1>{" "}
        <div className={styles.grid}>
          {guitarras?.map((guitarra) => (
            <Guitarra key={guitarra.id} guitarra={guitarra.attributes} />
          ))}
        </div>
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  const respuesta = await fetch(
    "http://192.168.1.24:1337/api/guitarras?populate=imagen"
  );
  const { data: guitarras } = await respuesta.json();
  return { props: { guitarras } };
}
