"use client";

import React from 'react';
import styles from './style-slider.module.css';
import { motion } from "framer-motion";
import Image from "next/image";

export default function Slider() {
  const images = [
    '/assets/t/1.jpg',
    '/assets/t/2.jpg',
    '/assets/t/3.jpg',
    '/assets/t/4.jpg',
    '/assets/t/5.jpg',
    '/assets/t/6.jpg',
    '/assets/t/7.jpg',
    '/assets/t/8.jpg',
    '/assets/t/9.jpg',
    '/assets/t/10.jpg',
    '/assets/t/11.jpg',
    '/assets/t/12.jpg',
    '/assets/t/13.jpg',
    '/assets/t/14.jpg',
    '/assets/t/15.jpg',

  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
      }}
      className={styles.sliderContainer}>
      <motion.div className={styles.slider}>
        {images.concat(images).map((src, index) => (
          <motion.div key={index} className={styles.slide}>
            <img src={src} alt={`image-${index}`} className={styles.image} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div >
  );
}
