import Head from "next/head";
export default function Layout({ children, title = "", description = "" }) {
  return (
    <div>
      <Head>
        <title>{`GuitarLA - ${title}`}</title>
        <description>{description}</description>
      </Head>
      <h1>Desde Layout</h1>
      {children}
    </div>
  );
}
