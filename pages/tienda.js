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

//el metodo nuevo para ssr o server side rende  getServerSideProps
export async function getServerSideProps() {
  const respuesta = await fetch(
    "http://192.168.1.24:1337/api/guitarras?populate=imagen"
  );
  const { data: guitarras } = await respuesta.json();
  return { props: { guitarras } };
}

//funcion estatica como loader se debe tener
//en cuenta que debe de estar en el mismo archivo getStaticProps
// export async function getStaticProps() {
//   const respuesta = await fetch(
//     "http://192.168.1.20:1337/api/guitarras?populate=imagen"
//   );
//   const { data: guitarras } = await respuesta.json();
//   return { props: { guitarras } };
// }
