export default function Guitarra(guitarra) {
  console.log(guitarra);
  return <div>Guitarra</div>;
}

export async function getServerSideProps({ query: { url } }) {
  const respuesta = await fetch(
    `http://192.168.1.20:1337/api/guitarras?filters[url]=${url}&populate=imagen`
  );
  const { data: guitarra } = await respuesta.json();

  return { props: { guitarra } };
}
