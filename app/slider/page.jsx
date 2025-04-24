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
    '/assets/t/5.jpg',
    '/assets/t/6.jpg',
    '/assets/t/7.jpg',
    '/assets/t/8.jpg',
    '/assets/t/9.jpg',
    '/assets/t/11.jpg',
    '/assets/t/12.jpg',
    '/assets/t/13.jpg',
    '/assets/t/15.jpg',
    '/assets/t/16.jpg',
    '/assets/t/17.jpg',
    '/assets/t/18.jpg',
    '/assets/t/19.jpg',
    '/assets/t/20.jpg',
    '/assets/t/21.jpg',
    '/assets/t/22.jpg',
    '/assets/t/23.jpg',
    '/assets/t/24.jpg',
    '/assets/t/25.jpg',
  ];

  const firstRow = images.slice(0, Math.ceil(images.length/2));
  const secondRow = images.slice(Math.ceil(images.length/2));

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
      }}
      className={styles.sliderContainer}
    >
      {/* الصف الأول */}
      <motion.div className={`${styles.slider} ${styles.firstRow}`}>
        {[...firstRow, ...firstRow].map((src, index) => (
          <motion.div key={index} className={styles.slide}>
            <div className={styles.imageContainer}>
              <img 
                src={src} 
                alt={`image-${index}`} 
                className={styles.image} 
              />
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* الصف الثاني */}
      <motion.div className={`${styles.slider} ${styles.secondRow}`}>
        {[...secondRow, ...secondRow].map((src, index) => (
          <motion.div key={index} className={styles.slide}>
            <div className={styles.imageContainer}>
              <img 
                src={src} 
                alt={`image-${index}`} 
                className={styles.image} 
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}