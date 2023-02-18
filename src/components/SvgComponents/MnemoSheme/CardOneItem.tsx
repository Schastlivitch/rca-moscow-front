import React from "react";
import styles from "./Mnemo.module.css";

interface IProp {}

const CardOneItem: React.FC = () => {
  return (
    <svg
      width="141"
      height="88"
      viewBox="0 0 141 88"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="10.8262"
        y="10.709"
        width="120"
        height="67"
        rx="10"
        fill="#414F4F"
      />

      <path
        d="M61.8351 25.584L61.1601 27.369H58.7301C58.5701 27.369 58.4301 27.349 58.3101 27.309L58.2951 27.324C58.2951 27.464 58.2651 27.654 58.2051 27.894L57.9951 28.644C57.9451 28.834 57.8501 29.004 57.7101 29.154L57.7251 29.184C57.8851 29.124 58.0901 29.094 58.3401 29.094C59.3201 29.094 60.1001 29.384 60.6801 29.964C61.2601 30.544 61.5501 31.329 61.5501 32.319C61.5501 33.449 61.1901 34.334 60.4701 34.974C59.7601 35.614 58.7701 35.934 57.5001 35.934C56.4301 35.934 55.4501 35.694 54.5601 35.214L55.1901 33.564C56.0401 34.004 56.8251 34.224 57.5451 34.224C58.2051 34.224 58.7201 34.059 59.0901 33.729C59.4701 33.389 59.6601 32.929 59.6601 32.349C59.6601 31.169 58.8901 30.579 57.3501 30.579C56.7401 30.579 56.2101 30.649 55.7601 30.789L55.7001 30.744L57.2301 25.584H61.8351ZM75.8656 25.209V35.709H73.9456V27.354C73.9456 27.184 73.9656 27.049 74.0056 26.949L73.9756 26.919C73.8956 26.959 73.7656 26.979 73.5856 26.979H69.5056C69.3256 26.979 69.1956 26.959 69.1156 26.919L69.0856 26.949C69.1256 27.049 69.1456 27.184 69.1456 27.354V35.709H67.2256V25.209H75.8656ZM83.0322 35.934C81.3722 35.934 80.0172 35.424 78.9672 34.404C77.9172 33.384 77.3922 32.069 77.3922 30.459C77.3922 28.849 77.9172 27.534 78.9672 26.514C80.0172 25.494 81.3722 24.984 83.0322 24.984C84.4522 24.984 85.7072 25.369 86.7972 26.139L85.7322 27.759C84.8922 27.179 83.9922 26.889 83.0322 26.889C81.9722 26.889 81.1072 27.219 80.4372 27.879C79.7772 28.539 79.4472 29.399 79.4472 30.459C79.4472 31.519 79.7772 32.379 80.4372 33.039C81.1072 33.699 81.9722 34.029 83.0322 34.029C83.9922 34.029 84.8922 33.739 85.7322 33.159L86.7972 34.779C85.7072 35.549 84.4522 35.934 83.0322 35.934Z"
        fill="white"
      />
      <rect x="21.3262" y="21.209" width="99" height="20" stroke="#8D9595" />
      <foreignObject
        className={styles.header_one}
        x="23"
        y="24"
        width="95"
        height="14"
      >
        <div>4 ПС</div>
      </foreignObject>

      <rect
        x="20.8262"
        y="48.709"
        width="100"
        height="19"
        rx="4"
        // fill={getFill(bearings[3].temperature.status)}
        fill="#EB5835"
      />

      <path
        d="M32.4172 53.609V54.727H30.0902C29.9255 54.727 29.8128 54.714 29.7522 54.688L29.7392 54.714C29.7652 54.7747 29.7782 54.8787 29.7782 55.026V62.709H28.6082V55.026C28.6082 54.8787 28.6212 54.7747 28.6472 54.714L28.6212 54.688C28.5605 54.714 28.4522 54.727 28.2962 54.727H25.9562V53.609H32.4172ZM31.9578 64.88L32.4388 61.409H33.7518L32.5818 64.88H31.9578ZM40.7596 53.739C41.271 53.739 41.6913 53.9037 42.0206 54.233C42.3586 54.5623 42.5276 54.9913 42.5276 55.52C42.5276 56.04 42.3586 56.4647 42.0206 56.794C41.6913 57.1233 41.271 57.288 40.7596 57.288C40.2396 57.288 39.8106 57.1233 39.4726 56.794C39.1433 56.4647 38.9786 56.04 38.9786 55.52C38.9786 54.9913 39.1433 54.5623 39.4726 54.233C39.8106 53.9037 40.2396 53.739 40.7596 53.739ZM41.6306 54.636C41.3966 54.402 41.1063 54.285 40.7596 54.285C40.413 54.285 40.1226 54.402 39.8886 54.636C39.6546 54.8613 39.5376 55.156 39.5376 55.52C39.5376 55.8753 39.6546 56.17 39.8886 56.404C40.1226 56.6293 40.413 56.742 40.7596 56.742C41.1063 56.742 41.3966 56.6293 41.6306 56.404C41.8646 56.17 41.9816 55.8753 41.9816 55.52C41.9816 55.156 41.8646 54.8613 41.6306 54.636ZM48.4221 62.904C46.9748 62.904 45.8004 62.4663 44.8991 61.591C44.0064 60.7157 43.5601 59.5717 43.5601 58.159C43.5601 56.7463 44.0064 55.6023 44.8991 54.727C45.8004 53.8517 46.9748 53.414 48.4221 53.414C49.6354 53.414 50.7014 53.752 51.6201 54.428L50.9051 55.442C50.1251 54.8873 49.2844 54.61 48.3831 54.61C47.3344 54.61 46.4808 54.9393 45.8221 55.598C45.1634 56.2567 44.8341 57.1103 44.8341 58.159C44.8341 59.2077 45.1634 60.0613 45.8221 60.72C46.4808 61.3787 47.3344 61.708 48.3831 61.708C49.2844 61.708 50.1251 61.4307 50.9051 60.876L51.6201 61.89C50.7014 62.566 49.6354 62.904 48.4221 62.904Z"
        fill="white"
      />

      <foreignObject
        className={styles.item_first}
        x="20.8262"
        y="48.709"
        width="100"
        height="19"
      >
        <div className={styles.item_first_count}>250</div>
      </foreignObject>
    </svg>
  );
};

export default CardOneItem;