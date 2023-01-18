import { useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { SearchInput } from "@/components/SearchInput";
import { Suggestions } from "@/components/Suggestions";

export default function Home() {
  const [showingResult, setShowingResult] = useState(false);

  const [question, setQuestion] = useState("");

  const handleSearch = () => setShowingResult(true);

  const logo = (
    <svg
      className={styles.slogonIcon}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.2929 21.7071C20.6834 22.0976 21.3166 22.0976 21.7071 21.7071C22.0976 21.3166 22.0976 20.6834 21.7071 20.2929L20.2929 21.7071ZM18.2072 16.7929C17.8167 16.4024 17.1835 16.4024 16.793 16.7929C16.4025 17.1834 16.4025 17.8166 16.793 18.2071L18.2072 16.7929ZM7.9697 12.1579C7.41741 12.1579 6.9697 12.6056 6.9697 13.1579C6.9697 13.7102 7.41741 14.1579 7.9697 14.1579V12.1579ZM11.3636 14.1579C11.9159 14.1579 12.3636 13.7102 12.3636 13.1579C12.3636 12.6056 11.9159 12.1579 11.3636 12.1579V14.1579ZM6.05996 14.6589C5.8716 15.1781 6.13977 15.7517 6.65894 15.94C7.17811 16.1284 7.75168 15.8602 7.94004 15.3411L6.05996 14.6589ZM9.53968 8L10.4684 7.62934C10.3146 7.24392 9.93876 6.99355 9.52384 7.00013C9.10892 7.0067 8.74117 7.26885 8.59964 7.65894L9.53968 8ZM11.4046 15.3707C11.6093 15.8836 12.1911 16.1335 12.704 15.9288C13.2169 15.7241 13.4668 15.1423 13.2621 14.6293L11.4046 15.3707ZM16 8C16 7.44772 15.5523 7 15 7C14.4477 7 14 7.44772 14 8H16ZM14 15C14 15.5523 14.4477 16 15 16C15.5523 16 16 15.5523 16 15H14ZM21.7071 20.2929L18.2072 16.7929L16.793 18.2071L20.2929 21.7071L21.7071 20.2929ZM19 11.5C19 15.6421 15.6421 19 11.5 19V21C16.7467 21 21 16.7467 21 11.5H19ZM11.5 19C7.35786 19 4 15.6421 4 11.5H2C2 16.7467 6.25329 21 11.5 21V19ZM4 11.5C4 7.35786 7.35786 4 11.5 4V2C6.25329 2 2 6.25329 2 11.5H4ZM11.5 4C15.6421 4 19 7.35786 19 11.5H21C21 6.25329 16.7467 2 11.5 2V4ZM7.9697 14.1579H11.3636V12.1579H7.9697V14.1579ZM7.94004 15.3411L10.4797 8.34106L8.59964 7.65894L6.05996 14.6589L7.94004 15.3411ZM8.61092 8.37066L11.4046 15.3707L13.2621 14.6293L10.4684 7.62934L8.61092 8.37066ZM14 8V15H16V8H14Z"
        fill="black"
      />
    </svg>
  );

  return (
    <>
      <Head>
        <title>SmartChart</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={clsx(styles.main, showingResult && styles.withResult)}>
        <div className={styles.description}>
          <p className={styles.slogon}>{logo}Instant Data Exploration</p>
        </div>

        <motion.div layout className={styles.content}>
          <SearchInput
            onSearch={handleSearch}
            showingResult={showingResult}
            searchValue={question}
          />
        </motion.div>

        {!showingResult && (
          <Suggestions showResult={showingResult} onSelect={setQuestion} />
        )}

        <footer className={styles.footer}>
          <a
            href="https://tidbcloud.com/?utm_source=smartchart&utm_medium=referral"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{" "}
            <Image
              src="/tidb.svg"
              alt="TiDB Cloud Logo"
              width={138}
              height={24}
              priority
            />
          </a>
        </footer>
      </main>
    </>
  );
}
