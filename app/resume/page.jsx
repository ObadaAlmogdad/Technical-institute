"use client";
import { FaHtml5, FaCss3, FaJs, FaLaravel, FaReact, FaNodeJs, FaPhp, FaJava } from "react-icons/fa";
import {
    SiTailwindcss, SiNextdotjs, SiLaravel, SiCplusplus, SiCsharp
} from "react-icons/si";

const about = {
    title: "Abot me",
    description: "I am a passionate Software Engineer with over 3 years of experience in developing innovative and efficient software solutions. I thrive in dynamic environments and enjoy tackling complex challenges. My commitment to continuous learning drives me to stay updated with the latest technologies and best practices in the industry. I am eager to contribute my skills and collaborate with teams to create impactful projects.",
    info: [
        {
            fieldName: "Name",
            fieldValue: "المعهد التقاني"
        },
        {
            fieldName: "Phone",
            fieldValue: "(+963) 995 882 681"
        },
        {
            fieldName: "Exrerience",
            fieldValue: "3+ Years"
        },
        {
            fieldName: "Linked in",
            fieldValue: "المعهد التقاني"
        },
        {
            fieldName: "Nationality",
            fieldValue: "Syrian"
        },
        {
            fieldName: "Email",
            fieldValue: "المعهد التقاني@gmail.com"
        },
        {
            fieldName: "Languages",
            fieldValue: "English, Arabic"
        },
    ]
};

const ex = {
    icon: "/public/assets/resume/badge.svg",
    title: "My experience",
    description: "As a freelancer, I have successfully completed multiple projects that demonstrate my ability to deliver high-quality software solutions tailored to client needs. I have worked with various clients across different industries, enhancing my skills in communication and project management. My freelance work has allowed me to take on diverse challenges, from web development to software design, ensuring timely delivery and client satisfaction. I thrive in independent environments and enjoy collaborating with clients to bring their visions to life.",
    items: [
        {
            company: "Freelancer",
            position: "Full Stack Developer",
            duration: "2022 -2024"
        },
        // {
        //     company:"teac.",
        //     position:"Full Stack Developer",
        //     duration:"2022 -2023"
        // },
        // {
        //     company:"teac.",
        //     position:"Full Stack Developer",
        //     duration:"2022 -2023"
        // },
        // {
        //     company:"teac.",
        //     position:"Full Stack Developer",
        //     duration:"2022 -2023"
        // },

    ]
}

const education = {
    icon: "/public/assets/resume/badge.svg",
    title: "My education",
    description: "I hold a degree in Software Engineering, complemented by various courses from online platforms such as Coursera and Udemy. These courses have enhanced my skills in programming, software development, and modern technologies, allowing me to stay updated in this dynamic field.",
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
        // {
        //     inst: "teac.",
        //     degree: "Full Stack Developer",
        //     duration: "2022 -2023"
        // },

    ]
}

const skills = {
    title: "My skills",
    description: "Strong ability to design, develop, and implement efficient software solutions tailored to meet user needs.Excellent analytical skills for identifying issues and developing effective solutions in complex scenarios.",
    skillList: [
        {
            icon: <FaHtml5 />,
            name: "html 5",
        },
        {
            icon: <FaCss3 />,
            name: "css 3",
        },
        {
            icon: <FaJs />,
            name: "javascript",
        },
        {
            icon: <FaReact />,
            name: "React ",
        },
        {
            icon: <FaLaravel />,
            name: "Laravel",
        },
        {
            icon: <FaPhp />,
            name: "PHP",
        },
        {
            icon: <FaJava />,
            name: "Java",
        },
        {
            icon: <SiCplusplus />,
            name: "C++",
        },
        {
            icon: <SiCsharp />,
            name: "C#",
        },
        {
            icon: <SiTailwindcss />,
            name: "Tailwind.css",
        },


    ]
}

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
                <Tabs defaultValue="education" className="flex flex-col xl:flex-row gap-[60px]">
                    <TabsList className="flex flex-col w-full max-w-[300px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="about">About me</TabsTrigger>
                    </TabsList>

                    {/* content */}
                    <div className="min-h-[70vh] max-h-[100vh] w-full">
                        {/* education */}
                        <TabsContent value="education" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">
                                    {education.title}
                                </h3>
                                <p className="max-w-[600px] text-black/60 mx-auto xl:mx-0">{education.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 gap-[30px] lg:grid-cols-2">
                                        {education.items.map((item, index) => {
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
                        {/* experience */}
                        <TabsContent value="experience" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">
                                    {ex.title}
                                </h3>
                                <p className="max-w-[600px] text-black/60 mx-auto xl:mx-0">{ex.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 gap-[30px] lg:grid-cols-2">
                                        {ex.items.map((item, index) => {
                                            return (
                                                <li
                                                    key={index}
                                                    className="bg-[#dfdfdf] h-[184px] py-6 px-10 rounded-2xl flex flex-col justify-center items-center lg:items-start gap-1"
                                                >
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h3 className="text-xl max-h-[60px] max-w-[260px] text-center lg:text-left">{item.position}</h3>
                                                    <div className="flex items-center gap-3">
                                                        <span className="w-[6px] h-[50px] rounded-full bg-accent"></span>
                                                        <p className="text-black/60">{item.company}</p>
                                                    </div>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        {/* skills */}
                        <TabsContent value="skills" className="w-full h-full">
                            <div className="flex flex-col gap-[30px]">
                                <div className="flex flex-col text-center gap-[30px] xl:text-left">
                                    <h3 className="text-4xl font-bold ">{skills.title}</h3>
                                    <p className="max-w-[600px] text-black/60 mx-auto xl:mx-0">{skills.description}</p>
                                </div>
                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-[30px]">
                                    {skills.skillList.map((skill, index) => {
                                        return (
                                            <li key={index}>
                                                <TooltipProvider>
                                                    <Tooltip>
                                                        <TooltipTrigger className="w-full h-[150px] bg-[#dfdfdf] rounded-2xl flex justify-center items-center group">
                                                            <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <p className="capitalize">
                                                                {skill.name}
                                                            </p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                        {/* about */}
                        <TabsContent value="about" className="w-full text-center xl:text-left">
                            <div className="flex flex-col gap-[30px]">
                                <h3 className="text-4xl font-bold">{about.title}</h3>
                                <p className="max-w-[600px] text-black/60 mx-auto xl:mx-0">{about.description}</p>
                                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                                    {about.info.map((item, index) => {
                                        return (
                                            <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                                                <span className="text-accent/60">{item.fieldName}</span>
                                                <span className="text-l">{item.fieldValue}</span>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>

                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    )
}

export default Resume