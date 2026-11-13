import Confetti from "./confetti";
import styles from "./page.module.css";

async function getTotalContents() {
  const response = await fetch(
    "https://www.tabnews.com.br/api/v1/contents?strategy=new&per_page=1",
    { next: { revalidate: 60 } },
  );
  return Number(response.headers.get("x-pagination-total-rows"));
}

export default async function Home() {
  const totalContents = await getTotalContents();

  return (
    <main className={styles.main}>
      <Confetti />
      <h1 className={styles.title}>Em Construção</h1>
      <p className={styles.description}>
        Estamos neste exato momento reconstruindo o TabNews, um lugar na
        internet para quem trabalha com tecnologia e precisa consumir conteúdos
        com valor concreto.
      </p>
      <p className={styles.total}>
        <strong>{totalContents.toLocaleString("pt-BR")}</strong> conteúdos
        publicados no TabNews
      </p>
      <a className={styles.link} href="https://www.tabnews.com.br">
        Acesse o TabNews oficial
      </a>
    </main>
  );
}
