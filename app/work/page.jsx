"use client"

import { motion } from "framer-motion"
import React, { useState } from "react"

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"

import { BsArrowUpRight, BsGithub } from "react-icons/bs"

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

import Link from "next/link"
import Image from "next/image"
import WorkSliderBtns from "@/components/WorkSliderBtns"

const projects = [
    {
        num: "01",
        category: "تقنيات الحاسوب",
        title: "نظام تحكم باشارة اليد",
        description: "هو مشروع يسمح للاشخاص ذوي الاحتياجات الخاصة بالتحكم بالاجهزة والادوات المختلفة باستخدام اشارات اليد",
        stack: [
            { name: "رؤية حاسوبية" }, { name: "برمجة" }, { name: "تحكم" },
        ],
        image: "/assets/work/1.jpg",
        live: "",
    },
    {
        num: "02",
        category: "طاقة والكترون",
        title: "الطاقة البديلة",
        description: "انشاء نموذج للطاقة الشمسية بحيث يدعم نظام تتبع شمسي بحيث نتتبع حركة الشمس و توجية الالواح على هذا الاساس للحصول على اكبر قدر ممكن من الطاقة باستخدام مقاومات ضوئية لاستشعار موضع الشمس ",
        stack: [
            { name: "مصادر مستدامة" }, { name: "طاقة نظيفة" }, { name: "كهرباء" },
        ],
        image: "/assets/work/2.png",
        live: "",
    },
    {
        num: "03",
        category: "انشائات معدنية",
        title: "رافعة ميكانيكية",
        description: "مشروع تصميم و تنفيذ رافعة ميكانيكية متعددة الاستخدام يحث يمكن استخدامها في العمليات الانشائية وغيرها من الامور التي تتطلب الى محركات ذات قوة كبيلاة",
        stack: [
            { name: "محركات" }, { name: "ميكانيك" }, { name: "تروس" },
        ],
        image: "/assets/work/3.jpg",
        live: "",
    },


];

const Work = () => {
    const [project, setProjct] = useState(projects[0]);

    const handleSlideChange = (swiper) => {

        const currentIndex = swiper.activeIndex;

        setProjct(projects[currentIndex])
    }
    return (
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2.1, duration: 0.4, ease: "easeIn" } }}
            className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div className="flex flex-col gap-[25px] h-[50%]">
                            <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                                {project.num}
                            </div>
                            <h2 className="text-[42px] font-blod leadinng-none text-black group-hover:text-accent transition-all duration-500 capitalize">
                            مشروع {project.category} 
                            </h2>
                            <p className="text-black/60 ">{project.title}</p>
                            <p className="text-black/60 ">{project.description}</p>

                            <ul className="flex gap-4 ">
                                {project.stack.map((item, index) => {
                                    return (
                                        <li key={index} className="text-xl text-accent">
                                            {item.name}
                                            {index !== project.stack.length - 1 && ","}
                                        </li>
                                    )
                                })}
                            </ul>
                            {/*  */}
                            <div className="border border-blue-300"></div>

                            {/* buttons */}
                            <div className=" flex items-center gap-4">
                                <Link href={project.live}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full flex justify-center items-center group">
                                                <BsArrowUpRight className="text-3xl group-hover:text-accent" />
                                            </TooltipTrigger>
                                            <TooltipContent className="border border-blue-300 text-stone-50">
                                                <p>Live project</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                            </div>

                        </div>
                    </div>
                    <div className="w-full xl:w-[50%]">
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            className="xl:h-[520px] mb-12"
                            onSlideChange={handleSlideChange}
                        >
                            {projects.map((project, index) => {
                                return (
                                    <SwiperSlide key={index} className="w-full">
                                        <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                                            <div className="absolute top-0 bottom-0 w-full h-full bg-black"></div>
                                            <div className="relative w-full h-full">
                                                <Image src={project.image} fill className="object-cover" />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })}
                            {/* slider buttons */}
                            <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                            />
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default Work