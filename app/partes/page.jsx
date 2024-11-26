"use client"
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";
import { delay, motion } from "framer-motion";

const partes = [
    {
        num: "01",
        title: "تقنيات الحاسوب",
        description: "",
        href: "https://technical-institute.vercel.app/resume"
    },
    {
        num: "02",
        title: "تقنيات الكهرباء",
        description: "",
        href: "https://technical-institute.vercel.app/resume"
    },
    {
        num: "03",
        title: "تقنيات ميكانيك المركبات",
        description: "",
        href: "https://technical-institute.vercel.app/resume"
    },
    {
        num: "04",
        title: "تقنيات الالكترون",
        description: "",
        href: "https://technical-institute.vercel.app/resume"
    },
    {
        num: "05",
        title: "تقنيات الإنشاءات المعدنية",
        description: "",
        href: "https://technical-institute.vercel.app/resume"
    },
];

const Partes = () => {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-[60px] text-right"
                >
                    {partes.map((partes, index) => {
                        return (
                            <div
                                key={index}
                                className="flex-1 flex flex-col justify-center gap-6 group"
                            >
                                <div className="w-full flex justify-between items-center">
                                    <Link
                                        href={partes.href}
                                        className="w-[70px] h-[70px] rounded-full bg-black group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                                    >
                                        <BsArrowDownRight className="text-primary text-3xl" />
                                    </Link>

                                    <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                                        {partes.num}
                                    </div>

                                </div>
                                <h2 className="text-[42px] font-bold leading-none text-black group-hover:text-accent transition-all duration-500">
                                    {partes.title}
                                </h2>
                                <p className="text-black/80 ">{partes.description}</p>
                                <div className="border-b border-black/20 w-full"></div>
                            </div>
                        )
                    })}
                </motion.div>
            </div>
        </section>
    )
}

export default Partes;
