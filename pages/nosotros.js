import Link from "next/link";
import Layout from "../components/layout";
export default function Nosotros() {
  return (
    <Layout title={"Nosotros"} description={"index home"}>
      <h1>nosotros</h1>
      <Link href="/">Ir al Home</Link>
    </Layout>
  );
}
