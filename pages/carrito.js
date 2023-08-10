import Layout from "../components/layout";
import styles from "../styles/carrito.module.css";

export default function Carrito() {
  return (
    <Layout title="Carrito de Compras">
      <main className="contenedor">
        <h1 className="heding">Carrito</h1>
        <div className={styles.contenido}>
          <div className={styles.carrito}>
            <h2>articulos</h2>
          </div>
          <aside className={styles.resumen}>
            <h3>Resumen del pedido</h3>
            <p>Total a pagar</p>
          </aside>
        </div>
      </main>
    </Layout>
  );
}