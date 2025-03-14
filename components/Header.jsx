import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
const Header = () => {
    return (
        <header className="py-8 xl:pu-12 text-black bg-slate-200">
            <div className="container mx-auto flex justify-between items-center">
                {/* logo */}
                <Link href="/">
                    <h1 className="text-4xl font-semiblod">
                    <span className="text-accent">.</span> المعهد التقاني 
                    </h1>
                </Link>

                <div className="hidden xl:flex items-center gap-8">
                    <Nav />
                    <Link href="/contact">
                        <Button>نحن هنا</Button>
                    </Link>
                </div>

                {/* mobile*/}
                <div className="xl:hidden">
                    <MobileNav />
                </div>

            </div>
        </header>
    )
}
export default Header