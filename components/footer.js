import Link from "next/link";
import styles from "../styles/footer.module.css";

export default function Footer() {
  return (
    <div className="contenedor">
      <nav className="navegacion">
        <Link href="/">Inicio</Link>
        <Link href="/nosotros">Nosotros</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/tienda">Tienda</Link>
      </nav>
    </div>
  );
}
