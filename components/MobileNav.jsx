"use client";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { useState } from "react"; // تم استيراد useState

const links = [
    {
        name: "الصفحة الرائيسية",
        path: "/",
    },
    {
        name: "الاقسام",
        path: "/partes",
    },
    {
        name: "المعرض",
        path: "/slider",
    },
    {
        name: "ملخص",
        path: "/resume",
    },
    {
        name: "مشاريع",
        path: "/work",
    },
    {
        name: "تواصل",
        path: "/contact",
    },
];

const MobileNav = () => {
    const pathname = usePathname();
    const [open, setOpen] = useState(false); // إضافة حالة التحكم

    return (
        <Sheet open={open} onOpenChange={setOpen}> {/* ربط حالة الفتح/الإغلاق */}
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className="text-[32px] text-accent" />
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                <div className="mt-32 mb-40 text-center text-2xl">
                    <Link href="/" onClick={() => setOpen(false)}>
                        <h1 className="text-4xl font-semibold">
                            المعهد التقاني <span className="text-accent">.</span>
                        </h1>
                    </Link>
                </div>

                <nav className="flex flex-col justify-center items-center gap-6">
                    {links.map((link, index) => (
                        <Link
                            href={link.path}
                            key={index}
                            onClick={() => setOpen(false)} // إغلاق القائمة عند النقر
                            className="text-xl capitalize hover:text-accent transition-all"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNav;