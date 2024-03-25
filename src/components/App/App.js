import Button from "../Button/Button";
import Card from "../Card/Card";
import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.wrapper}>
      <h1 className={styles.app__title}>Зарабатывайте вместе с нами!</h1>
      <main className={styles.app__main}>
      <Card partnerCardItem/>
      <Card repostCardItem/>
      <Card persentCardItem/>
      </main>
      <Button/>
      </div>
    </div>
  );
}

export default App;
