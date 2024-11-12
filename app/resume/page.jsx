"use client";
import { FaHtml5, FaCss3, FaJs, FaLaravel, FaReact, FaNodeJs, FaPhp, FaJava } from "react-icons/fa";
import {
    SiTailwindcss, SiNextdotjs, SiLaravel, SiCplusplus, SiCsharp
} from "react-icons/si";

const a = {
    icon: "/public/assets/resume/badge.svg",
    title: "تقنيات الحاسوب",
    description: "I hold a degree in Software Engineering, complemented by various courses from online platforms such as Coursera and Udemy. These courses have enhanced my c in programming, software development, and modern technologies, allowing me to stay updated in this dynamic field.",
    items: [
        {
            inst: "Coursera",
            degree: "Data Analyst",
            duration: "2023 -2024"
        },
        {
            inst: "Damascuse Univarcty",
            degree: "Software Engineer",
            duration: "2020 -2025"
        },
        {
            inst: "Udmy",
            degree: "Full Stack Developer",
            duration: "2021 -2022"
        },
        {
            inst: "Coursera",
            degree: "Backend Developer",
            duration: "2022 -2023"
        },

    ]
};

const b = {
    icon: "/public/assets/resume/badge.svg",
    title: "تقنيات الكهرباء",
    description: "I hold a degree in Software Engineering, complemented by various courses from online platforms such as Coursera and Udemy. These courses have enhanced my c in programming, software development, and modern technologies, allowing me to stay updated in this dynamic field.",
    items: [
        {
            inst: "Coursera",
            degree: "Data Analyst",
            duration: "2023 -2024"
        },
        {
            inst: "Damascuse Univarcty",
            degree: "Software Engineer",
            duration: "2020 -2025"
        },
        {
            inst: "Udmy",
            degree: "Full Stack Developer",
            duration: "2021 -2022"
        },
        {
            inst: "Coursera",
            degree: "Backend Developer",
            duration: "2022 -2023"
        },

    ]
};

const c = {
    icon: "/public/assets/resume/badge.svg",
    title: "تقنيات مكنيك المركبات",
    description: "I hold a degree in Software Engineering, complemented by various courses from online platforms such as Coursera and Udemy. These courses have enhanced my c in programming, software development, and modern technologies, allowing me to stay updated in this dynamic field.",
    items: [
        {
            inst: "Coursera",
            degree: "Data Analyst",
            duration: "2023 -2024"
        },
        {
            inst: "Damascuse Univarcty",
            degree: "Software Engineer",
            duration: "2020 -2025"
        },
        {
            inst: "Udmy",
            degree: "Full Stack Developer",
            duration: "2021 -2022"
        },
        {
            inst: "Coursera",
            degree: "Backend Developer",
            duration: "2022 -2023"
        },

    ]
};

const d = {
    icon: "/public/assets/resume/badge.svg",
    title: "تقنيات الالكترون",
    description: "I hold a degree in Software Engineering, complemented by various courses from online platforms such as Coursera and Udemy. These courses have enhanced my c in programming, software development, and modern technologies, allowing me to stay updated in this dynamic field.",
    items: [
        {
            inst: "Coursera",
            degree: "Data Analyst",
            duration: "2023 -2024"
        },
        {
            inst: "Damascuse Univarcty",
            degree: "Software Engineer",
            duration: "2020 -2025"
        },
        {
            inst: "Udmy",
            degree: "Full Stack Developer",
            duration: "2021 -2022"
        },
        {
            inst: "Coursera",
            degree: "Backend Developer",
            duration: "2022 -2023"
        },

    ]
};

const e = {
    icon: "/public/assets/resume/badge.svg",
    title: "تقنيات الانشاءات المعدنية",
    description: "I hold a degree in Software Engineering, complemented by various courses from online platforms such as Coursera and Udemy. These courses have enhanced my c in programming, software development, and modern technologies, allowing me to stay updated in this dynamic field.",
    items: [
        {
            inst: "Coursera",
            degree: "Data Analyst",
            duration: "2023 -2024"
        },
        {
            inst: "Damascuse Univarcty",
            degree: "Software Engineer",
            duration: "2020 -2025"
        },
        {
            inst: "Udmy",
            degree: "Full Stack Developer",
            duration: "2021 -2022"
        },
        {
            inst: "Coursera",
            degree: "Backend Developer",
            duration: "2022 -2023"
        },

    ]
};


import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: "2.4", duration: 0.4, ease: "easeIn" }, }}
            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >

            <div className="container mx-auto">
                <Tabs defaultValue="a" className="flex flex-col xl:flex-row gap-[60px]">
                    <TabsList className="flex flex-col w-full max-w-[300px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="a">تقنيات الحاسوب</TabsTrigger>
                        <TabsTrigger value="b">تقنيات الكهرباء</TabsTrigger>
                        <TabsTrigger value="c">تقنيات ميكانيك المركبات</TabsTrigger>
                        <TabsTrigger value="d">تقنيات الالكترون</TabsTrigger>
                        <TabsTrigger value="e">تقنيات الإنشاءات المعدنية</TabsTrigger>
                    </TabsList>

                    {/* content */}
                    <div className="min-h-[70vh] max-h-[100vh] w-full">
                        {/* a */}
                        <TabsContent value="a" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">
                                    {a.title}
                                </h3>
                                <p className="max-w-[600px] text-black/60 mx-auto xl:mx-0">{a.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 gap-[30px] lg:grid-cols-2">
                                        {a.items.map((item, index) => {
                                            return (
                                                <li
                                                    key={index}
                                                    className="bg-[#dfdfdf] h-[184px] py-6 px-10 rounded-2xl flex flex-col justify-center items-center lg:items-start gap-1"
                                                >
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h3 className="text-xl max-h-[60px] max-w-[260px] text-center lg:text-left">{item.degree}</h3>
                                                    <div className="flex items-center gap-3">
                                                        <span className="w-[6px] h-[50px] rounded-full bg-accent"></span>
                                                        <p className="text-black/60">{item.inst}</p>
                                                    </div>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        {/* b */}
                        <TabsContent value="b" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">
                                    {b.title}
                                </h3>
                                <p className="max-w-[600px] text-black/60 mx-auto xl:mx-0">{b.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 gap-[30px] lg:grid-cols-2">
                                        {b.items.map((item, index) => {
                                            return (
                                                <li
                                                    key={index}
                                                    className="bg-[#dfdfdf] h-[184px] py-6 px-10 rounded-2xl flex flex-col justify-center items-center lg:items-start gap-1"
                                                >
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h3 className="text-xl max-h-[60px] max-w-[260px] text-center lg:text-left">{item.degree}</h3>
                                                    <div className="flex items-center gap-3">
                                                        <span className="w-[6px] h-[50px] rounded-full bg-accent"></span>
                                                        <p className="text-black/60">{item.inst}</p>
                                                    </div>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        {/* c */}
                        <TabsContent value="c" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">
                                    {c.title}
                                </h3>
                                <p className="max-w-[600px] text-black/60 mx-auto xl:mx-0">{c.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 gap-[30px] lg:grid-cols-2">
                                        {c.items.map((item, index) => {
                                            return (
                                                <li
                                                    key={index}
                                                    className="bg-[#dfdfdf] h-[184px] py-6 px-10 rounded-2xl flex flex-col justify-center items-center lg:items-start gap-1"
                                                >
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h3 className="text-xl max-h-[60px] max-w-[260px] text-center lg:text-left">{item.degree}</h3>
                                                    <div className="flex items-center gap-3">
                                                        <span className="w-[6px] h-[50px] rounded-full bg-accent"></span>
                                                        <p className="text-black/60">{item.inst}</p>
                                                    </div>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        {/* d */}
                        <TabsContent value="d" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">
                                    {d.title}
                                </h3>
                                <p className="max-w-[600px] text-black/60 mx-auto xl:mx-0">{d.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 gap-[30px] lg:grid-cols-2">
                                        {d.items.map((item, index) => {
                                            return (
                                                <li
                                                    key={index}
                                                    className="bg-[#dfdfdf] h-[184px] py-6 px-10 rounded-2xl flex flex-col justify-center items-center lg:items-start gap-1"
                                                >
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h3 className="text-xl max-h-[60px] max-w-[260px] text-center lg:text-left">{item.degree}</h3>
                                                    <div className="flex items-center gap-3">
                                                        <span className="w-[6px] h-[50px] rounded-full bg-accent"></span>
                                                        <p className="text-black/60">{item.inst}</p>
                                                    </div>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        {/* e */}
                        <TabsContent value="e" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">
                                    {e.title}
                                </h3>
                                <p className="max-w-[600px] text-black/60 mx-auto xl:mx-0">{e.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 gap-[30px] lg:grid-cols-2">
                                        {e.items.map((item, index) => {
                                            return (
                                                <li
                                                    key={index}
                                                    className="bg-[#dfdfdf] h-[184px] py-6 px-10 rounded-2xl flex flex-col justify-center items-center lg:items-start gap-1"
                                                >
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h3 className="text-xl max-h-[60px] max-w-[260px] text-center lg:text-left">{item.degree}</h3>
                                                    <div className="flex items-center gap-3">
                                                        <span className="w-[6px] h-[50px] rounded-full bg-accent"></span>
                                                        <p className="text-black/60">{item.inst}</p>
                                                    </div>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    )
}

export default Resume