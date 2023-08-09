export default function Guitarra(guitarra) {
  console.log(guitarra);
  return <div>Guitarra</div>;
}

export async function getStaticPaths() {
  const respuesta = await fetch("http://192.168.1.24:1337/api/guitarras");
  const { data } = await respuesta.json();

  const paths = data.map((guitarra) => ({
    params: {
      url: guitarra.attributes.url,
    },
  }));

  console.log(paths);

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { url } }) {
  const respuesta = await fetch(
    `http://192.168.1.24:1337/api/guitarras?filters[url]=${url}&populate=imagen`
  );
  const { data: guitarra } = await respuesta.json();
  return { props: { guitarra } };
}
