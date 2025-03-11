"use client";

const a = {
    icon: "/public/assets/resume/badge.svg",
    title: "تقنيات الحاسوب",
    description: "اختصاص تقنيات الحاسوب هو أحد التخصصات التي تركز على دراسة الجوانب التقنية والعملية للحاسوب. يهدف هذا التخصص إلى إعداد خريجين يمتلكون المهارات اللازمة للعمل في مجالات تكنولوجيا المعلومات، البرمجة، والشبكات، مع التركيز على التطبيق العملي والتعامل مع الأجهزة والبرمجيات.",
    items: [
        {
            inst: "فصل اول",
            degree: "مهارات الحاسوب",
            duration: "1"
        },
        {
            inst: "فصل اول",
            degree: "صيانة الحاسوب",
            duration: "2"
        }, 
        {
            inst: "فصل اول",
            degree: "تصميم مواقع الويب",
            duration: "3"
        }, 
        {
            inst: "فصل اول",
            degree: "برمجة1",
            duration: "4"
        }, 

    ]
};

const b = {
    icon: "/public/assets/resume/badge.svg",
    title: "تقنيات الكهرباء",
    description: "يُعد اختصاص تقنيات الكهرباء من التخصصات المهمة والعملية التي تهتم بدراسة الأسس النظرية والتطبيقية للكهرباء وتطبيقاتها في الحياة اليومية والصناعة. يهدف التخصص إلى إعداد كوادر فنية قادرة على التعامل مع أنظمة الطاقة الكهربائية وتصميمها وصيانتها، بالإضافة إلى التحكم بها وحل المشكلات المتعلقة بها.",
    items: [
        {
            inst: "فصل اول",
            degree: "اسس هندسة كهربائية",
            duration: "1"
        },
        {
            inst: "فصل اول",
            degree: "قيادة والتحكم الالي",
            duration: "2"
        }, 
        {
            inst: "فصل اول",
            degree: " الكترونات القدرة",
            duration: "3"
        }, 
        {
            inst: "فصل اول",
            degree: "الات",
            duration: "4"
        }, 
      ]
};

const c = {
    icon: "/public/assets/resume/badge.svg",
    title: "تقنيات مكنيك المركبات",
    description: "اختصاص تقنيات ميكانيك المركبات هو مجال تعليمي وتطبيقي يركز على دراسة الأنظمة الميكانيكية والكهربائية للمركبات، بالإضافة إلى صيانة وتصليح المحركات وناقلات الحركة والأنظمة المختلفة للمركبة. يهدف التخصص إلى إعداد فنيين ومهندسين مهرة قادرين على العمل في مجال صيانة وإصلاح المركبات الحديثة.",
    items: [
        {
            inst: "فصل اول",
            degree: "كهرباء السيارات",
            duration: "1"
        },
        {
            inst: "فصل اول",
            degree: "علم المواد",
            duration: "2"
        }, 
        {
            inst: "فصل اول",
            degree: "محركات1",
            duration: "3"
        }, 
        {
            inst: "فصل اول",
            degree: "اسس صيانة",
            duration: "4"
        }, 
    ]
};

const d = {
    icon: "/public/assets/resume/badge.svg",
    title: "تقنيات الالكترون",
    description: "اختصاص تقنيات الإلكترون هو مجال علمي وعملي يهتم بدراسة المكونات الإلكترونية وتصميم الأنظمة التي تعتمد عليها، سواء في الأجهزة المنزلية أو الأنظمة الصناعية المتقدمة. يهدف هذا التخصص إلى تخريج فنيين ومهندسين مؤهلين للعمل في تصميم وتصنيع وصيانة الأنظمة الإلكترونية المختلفة.",
    items: [
        {
            inst: "فصل اول",
            degree: "نظم الدارات",
            duration: "1"
        },
        {
            inst: "فصل اول",
            degree: "بمية الحاسوب ",
            duration: "2"
        }, 
        {
            inst: "فصل اول",
            degree: "الرسم بالحاسوب",
            duration: "3"
        }, 
        {
            inst: "فصل اول",
            degree: "معالجة",
            duration: "4"
        },
    ]
};

const e = {
    icon: "/public/assets/resume/badge.svg",
    title: "تقنيات الانشاءات المعدنية",
    description: "يُعد اختصاص تقنيات الإنشاءات المعدنية مجالاً تقنيًا يُركز على تصميم وتصنيع وتركيب الهياكل المعدنية المختلفة، مثل المباني والجسور والأبراج الصناعية، إضافة إلى صيانة وإصلاح المنشآت المعدنية. يهدف هذا التخصص إلى إعداد فنيين ومهندسين متخصصين قادرين على تطبيق المهارات التقنية في المجالات الصناعية والإنشائية.",
    items: [
        {
            inst: "فصل اول",
            degree: "مكنيك تطبيقي",
            duration: "1"
        },
        {
            inst: "فصل اول",
            degree: "علم المواد",
            duration: "2"
        }, 
        {
            inst: "فصل اول",
            degree: "رياضيات",
            duration: "3"
        }, 
        {
            inst: "فصل اول",
            degree: "صيانة",
            duration: "4"
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
            <div className="container mx-auto xl:m-9">
                <Tabs defaultValue="a" className="flex flex-col xl:flex-row gap-[60px]">
                    <TabsList className="flex flex-col w-full max-w-[300px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="a">تقنيات الحاسوب</TabsTrigger>
                        <TabsTrigger value="b">تقنيات الكهرباء</TabsTrigger>
                        <TabsTrigger value="c">تقنيات ميكانيك المركبات</TabsTrigger>
                        <TabsTrigger value="d">تقنيات الالكترون</TabsTrigger>
                        <TabsTrigger value="e">تقنيات الإنشاءات المعدنية</TabsTrigger>
                    </TabsList>

                    {/* content */}
                    <div className="min-h-[70vh] max-h-[100vh] w-full ">
                        {/* a */}
                        <TabsContent value="a" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-right">
                                <h3 className="text-4xl font-bold">
                                    {a.title}
                                </h3>
                                <p className="max-w-[600px] text-black/60 mx-auto xl:mx-0 xl:text-right">{a.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 gap-[30px] lg:grid-cols-2">
                                        {a.items.map((item, index) => {
                                            return (
                                                <li
                                                    key={index}
                                                    className="bg-[#dfdfdf] h-[184px] py-6 px-10 rounded-2xl flex flex-col justify-center items-center lg:items-start gap-1"
                                                >
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h3 className="text-xl max-h-[60px] max-w-[260px] text-center lg:text-right">{item.degree}</h3>
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
                            <div className="flex flex-col gap-[30px] text-center xl:text-right">
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
                                                    <h3 className="text-xl max-h-[60px] max-w-[260px] text-center lg:text-right">{item.degree}</h3>
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
                            <div className="flex flex-col gap-[30px] text-center xl:text-right">
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
                                                    <h3 className="text-xl max-h-[60px] max-w-[260px] text-center lg:text-right">{item.degree}</h3>
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
                            <div className="flex flex-col gap-[30px] text-center xl:text-right">
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
                                                    <h3 className="text-xl max-h-[60px] max-w-[260px] text-center lg:text-right">{item.degree}</h3>
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
                            <div className="flex flex-col gap-[30px] text-center xl:text-right">
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
                                                    <h3 className="text-xl max-h-[60px] max-w-[260px] text-center lg:text-right">{item.degree}</h3>
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
