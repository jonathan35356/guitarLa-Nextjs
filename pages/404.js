import React from "react";
import Layout from "../components/layout";
import Link from "next/link";

export default function Pagina404() {
  return (
    <Layout title="Pagina No Encontrada">
      <p className="error">Pagina No Encontrada</p>
      <Link href="/" className="error-enlace">
        Volver al Inicio
      </Link>
    </Layout>
  );
}
