"use client";

import CountUp from "react-countup";

const stats = [
    {
        num: 150,
        text: "طالب جديد كل سنة"
    },
    {
        num: 20,
        text: "مادة دراسية"
    },
    {
        num: 5,
        text: "اقسام"
    },
    {
        num: 1400,
        text: "خريج من المعهد"
    },

]
const Stats = () => {
    return (
        <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
            <div className="container mx-auto">
                <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none ">
                    {stats.map((item, index) => {
                        return (
                            <div
                                className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
                                key={index} >
                                <p
                                    className={`${item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                                        } leading-snug text-black/80 font-bold text-md`}>
                                    {item.text}
                                </p>
                                <CountUp
                                    end={item.num}
                                    duration={5}
                                    delay={2}
                                    className="text-3xl xl:text-4xl font-extrabold"
                                />

                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}
export default Stats;