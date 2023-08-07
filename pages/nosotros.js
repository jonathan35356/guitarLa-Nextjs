import Link from "next/link";
import Image from "next/image";
import styles from "../styles/nosotros.module.css";
import Layout from "../components/layout";

export default function Nosotros() {
  return (
    <Layout title={"Nosotros"} description={"index home"}>
      <main className="contenedor">
        <h1 className="heading">Nosotros</h1>

        <div className={styles.contenido}>
          <Image
            src="/img/nosotros.jpg"
            width={1000}
            height={800}
            alt="Imagen sobre nosotros"
          />
          <div>
            <p className="p2">
              Nulla vitae ex molestie felis lacinia vestibulum ut in nibh.
              Suspendisse eget dui vitae enim aliquam pulvinar a ut erat. Donec
              sed nisl in odio egestas efficitur id nec mi. Aliquam erat
              volutpat. Ut non tortor gravida, volutpat quam vitae, lobortis
              justo. Fusce mollis accumsan est ac iaculis. Ut varius metus vitae
              suscipit tristique. Cras in mauris vel lectus venenatis
              scelerisque. Nulla sagittis tellus quis ultricies elementum.
              Curabitur eget ex massa. Etiam ipsum turpis, dignissim non orci
              et, finibus gravida lacus. Proin a quam nec lacus eleifend
              vehicula. Proin aliquet viverra elit, vel tincidunt quam laoreet
              eget. Vestibulum at velit dapibus, malesuada ipsum vitae, mollis
              metus. In hac habitasse platea dictumst.
            </p>
            <p>
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Proin sollicitudin venenatis nunc
              tempor aliquam. Etiam eu tincidunt tortor. Aliquam est lacus,
              consequat eu lobortis eget, feugiat eu eros. Nam massa sem, luctus
              ac sapien egestas, placerat tristique libero. Pellentesque
              habitant morbi tristique senectus et netus et malesuada fames ac
              turpis egestas. In semper scelerisque magna, et fringilla justo.
              Proin facilisis magna vel velit aliquam tincidunt. Vivamus
              condimentum tortor sed erat venenatis pharetra. Duis sed enim
              justo. Sed orci lorem, viverra eu risus et, ultrices viverra est.
              Duis pellentesque tellus eget lectus euismod pharetra. Integer dui
              sem, maximus ut lacus non, malesuada egestas elit.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}
