import Card from "../components/Card/Card";
import Button from "../components/Button/Button";
import styles from "../styles/page.module.scss";

export default function Home() {
  return (
      <div className={styles.page}>
        <div className={styles.wrapper}>
          <h1 className={styles.page__title}>Зарабатывайте вместе с нами!</h1>
          <div className={styles.container}>
            <main className={styles.page__main}>
              <Card link="../../images/partnerCard.svg" />
              <Card link="../../images/repostCard.svg" />
              <Card link="../../images/persentCard.svg" />
            </main>
            <Button text="Стать партнером" marginRight={191} />
          </div>
        </div>
      </div>
  );
}
