import Image from "next/image";
import React from "react";

import styles from "../../styles/BlogPageComponents/NewArticles/main.module.css";

function NewArticles() {
  return (
    <div className={styles.main}>
      <div className={styles.heading_container}>
        <h2>New</h2>
        <h2>Articles</h2>
      </div>

      <div className={styles.articles_container}>
        {/*  */}
        <a href="/" alt="article-gate" className={styles.article}>
          <Image
            src={
              "https://cdn.pixabay.com/photo/2018/09/01/23/19/tequila-3647876_960_720.jpg"
            }
            alt="article-image"
            height={400}
            width={300}
            className={styles.article_image}
          />
          <div className={styles.article_body}>
            <p className={styles.article_posted_time}>
              Posted by Jerry Trippin - January 24, 2024
            </p>
            <h2 className={styles.article_heading}>
              7 Sensational Summer Cocktails
            </h2>
          </div>
        </a>
        {/*  */}
        <a href="/" alt="article" className={styles.article}>
          <Image
            src={
              "https://images.unsplash.com/photo-1618517047922-d18a5a36c109?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            }
            alt="article-image"
            height={400}
            width={300}
            className={styles.article_image}
          />
          <div className={styles.article_body}>
            <p className={styles.article_posted_time}>
              Posted by Jerry Trippin - January 24, 2024
            </p>
            <h2 className={styles.article_heading}>Our Fav Hangover Cures</h2>
          </div>
        </a>
        {/*  */}
        <a href="/" alt="article-gate" className={styles.article}>
          <Image
            src={
              "https://cdn.pixabay.com/photo/2018/09/01/23/19/tequila-3647876_960_720.jpg"
            }
            alt="article-image"
            height={400}
            width={300}
            className={styles.article_image}
          />
          <div className={styles.article_body}>
            <p className={styles.article_posted_time}>
              Posted by Jerry Trippin - January 24, 2024
            </p>
            <h2 className={styles.article_heading}>
              7 Sensational Summer Cocktails
            </h2>
          </div>
        </a>
        {/*  */}
        <a href="/" alt="article" className={styles.article}>
          <Image
            src={
              "https://images.unsplash.com/photo-1618517047922-d18a5a36c109?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            }
            alt="article-image"
            height={400}
            width={300}
            className={styles.article_image}
          />
          <div className={styles.article_body}>
            <p className={styles.article_posted_time}>
              Posted by Jerry Trippin - January 24, 2024
            </p>
            <h2 className={styles.article_heading}>Our Fav Hangover Cures</h2>
          </div>
        </a>
        {/*  */}
      </div>
    </div>
  );
}

export default NewArticles;
