"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
    {
        icon: <FaPhoneAlt />,
        titke: "Phone",
        description: "0999999999"
    },
    {
        icon: <FaEnvelope />,
        titke: "Email",
        description: "المعهد التقاني@gmail.com"
    },
    {
        icon: <FaMapMarkedAlt />,
        titke: "Address",
        description: "Dara Syria"
    },
];

const Contact = () => {
    return (
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2.1, duration: 0.4, ease: "easeIn" } }}
            className="py-6">
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    <div className="xl:w-[54%] order-2 xl:order-none">
                        <form className="flex flex-col gap-6 p-10 bg-[#dfdfdf] rounded-xl">
                            <h3 className="text-4xl text-accent">
                                let's work together
                            </h3>
                            {/* <p className="text-black/60">asdasd asdasdasdasdasdasdasdasd
                            asdasdasdasdasdasdasdasdasdasd
                            </p> */}
                            <div className="grid grid-cols-1 mb:grid-cols-2 sm:grid-cols-2 gap-6">
                                <Input type="firstname" placeholder="الاسم" />
                                <Input type="lastname" placeholder="الكنية" />
                                <Input type="email" placeholder="الايميل" />
                                <Input type="phone" placeholder="رقم الهاتف" />
                            </div>
                            {/* select */}
                            <Select>
                                <SelectTrigger className="w-full ">
                                    <SelectValue placeholder="السبب" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>اختر السبب</SelectLabel>
                                        <SelectItem value="est">استفسار</SelectItem>
                                        <SelectItem value="cst">شكاوي</SelectItem>
                                        <SelectItem value="mst">غير ذلك</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            {/* text */}
                            <Textarea className="h-[150px]" placeholder="اكتب الرسالة هنا" />
                            <Button
                                size="md"
                                className="max-w-40"
                            >Send</Button>

                        </form>
                    </div>

                    <div className="flex flex-1 items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                        <ul>
                            {info.map((item, index) => {
                                return (
                                    <li key={index} className="flex items-center gap-6">
                                        <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#dfdfdf] text-accent rounded-xl flex items-center justify-center mb-4">
                                            <div className="text-[28px]">
                                                {item.icon}
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-black/60">{item.titke}</p>
                                            <h3 className="text-xl">{item.description}</h3>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default Contact