import React from "react";
import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/layout";
import styles from "../../styles/blog.module.css";
import { formatearFecha } from "../../utils/helpers";

export default function Post({ post }) {
  const { titulo, contenido, imagen, publishedAt } = post[0].attributes;
  return (
    <Layout title="Blog">
      <article className={`${styles.post} ${styles["mt-3"]}`}>
        <Image
          src={imagen.data.attributes.formats.medium.url}
          width={600}
          height={400}
          alt={`imagen blog ${titulo}`}
        ></Image>
        <div className={styles.contenido}>
          <h3>{titulo}</h3>
          <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
          <p className={styles.resumen}>{contenido}</p>
        </div>
      </article>
    </Layout>
  );
}

export async function getServerSideProps({ query: { url } }) {
  const respuesta = await fetch(
    `http://192.168.1.24:1337/api/posts?filters[url]=${url}&populate=imagen`
  );

  const { data: post } = await respuesta.json();

  return {
    props: {
      post,
    },
  };
}
