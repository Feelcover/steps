import React from "react";
import Card from "../components/Card/Card";
import Button from "../components/Button/Button";
import styles from "../styles/page.module.scss";
import Head from "next/head";
import { motion } from "framer-motion";
import { useMediaQuery } from "../hooks/useWindowWidth";

export default function Home() {
  const isMobile = useMediaQuery(1130);
  let marginTopCards = isMobile ? -40 : 0;
  return (
    <>
      <Head>
        <title>Steps</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className={styles.page}>
        <div className={styles.wrapper}>
         {!isMobile &&  <motion.div
            transition={{
              delay: 1.5,
              ease: "linear",
              duration: 0.5,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <h1 className={styles.page__title}>Зарабатывайте вместе с нами!</h1>
          </motion.div>}
          <div className={styles.container}>
            <motion.div
              transition={{
                delay: 1,
                ease: "linear",
                duration: 0.5,
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <main className={styles.page__main}>
              {isMobile &&  <motion.div
            transition={{
              delay: 1.5,
              ease: "linear",
              duration: 0.5,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <h1 className={styles.page__title}>Зарабатывайте вместе с нами!</h1>
          </motion.div>}
                <motion.div
                  transition={{
                    delay: 1,
                    ease: "linear",
                    duration: 0.5,
                  }}
                  initial={{ opacity: 0, y: -120 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <Card marginTop={marginTopCards} partnerCard />
                </motion.div>
                <motion.div
                  transition={{
                    delay: 1.2,
                    ease: "linear",
                    duration: 0.5,
                  }}
                  initial={{ opacity: 0, y: -120 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <Card marginTop={marginTopCards} repostCard />
                </motion.div>
                <motion.div
                  transition={{
                    delay: 1.4,
                    ease: "linear",
                    duration: 0.5,
                  }}
                  initial={{ opacity: 0, y: -120 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <Card marginTop={marginTopCards} persentCard />
                </motion.div>
                {isMobile && <motion.div
              transition={{
                delay: 1.7,
                ease: "linear",
                duration: 0.5,
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <Button text="Стать партнером" marginTop={30} />
            </motion.div>}
              </main>
            </motion.div>
            {!isMobile && <motion.div
              transition={{
                delay: 1.7,
                ease: "linear",
                duration: 0.5,
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <Button text="Стать партнером" marginRight={191} />
            </motion.div>}
          </div>
        </div>
      </div>
    </>
  );
}
