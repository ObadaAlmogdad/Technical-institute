"use client";

import React from 'react';
import styles from './style-slider.module.css';
import { motion } from "framer-motion";
import Image from "next/image";

export default function Slider() {
  const images = [
    '/assets/1.png',
    '/assets/1.png',
    '/assets/1.png',
    '/assets/1.png',
    '/assets/1.png',
    '/images/image1.jpg',
    '/images/image2.jpg',
    '/images/image3.jpg',
    '/images/image4.jpg',
    // أضف مسارات الصور الأخرى
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
