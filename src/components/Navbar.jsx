"use client"
import { AlignRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import Container from "./Container";


const Navbar = () => {
    const pathName = usePathname()
    const links = [
        {
            title: 'Home',
            path: '/'
        },
        {
            title: 'menu',
            path: '/menu'
        },
        {
            title: 'about',
            path: '/about'
        },
    
        {
            title: 'blog',
            path: '/blog'
        },
      
        {
            title: 'contact',
            path: '/contact'
        },
        {
            title: 'Login',
            path: '/login'
        },
        {
            title: 'signUp',
            path: '/sign-up'
        }
    ]
    return (
        <div className=" border-b">
            <Container>
            <div className='flex justify-between items-center  py-3'>
            <h1 className="text-2xl font-bold">
                <Link href="/" className="logo">Ayesha kitchen </Link>
            </h1>
            {/* Navbar */}
            <nav className={` bg-white   hidden md:block`}>
                <ul className="flex gap-6">
                    {links.map((link, idx) => (
                        <li key={idx}>
                            <Link href={link.path} className={`${pathName === link.path && 'text-green-600'} hover:text-green-600 transition-all duration-700 capitalize`}>{link.title}</Link>
                        </li>
                    ))}

                </ul>
            </nav>
           <div className="block md:hidden">
           <Sheet  >
                <SheetTrigger className="outline-0 focus:outline-0"><AlignRight /></SheetTrigger>
                <SheetContent side='right' className='m-0 p-0'>
                    <SheetHeader className='text-white bg-[#4fc04f] p-3 items-start'>
                        <SheetTitle className='text-white'>logo</SheetTitle>
                    </SheetHeader>
                    <SheetDescription>
                    
                        </SheetDescription>
                        <ul className="flex gap-3 flex-col px-3 mt-[50px]">
                                        {links.map((link, idx) => (
                                            <li key={idx}>
                                                <Link href={link.path} className={`${pathName === link.path && 'text-green-600'} hover:text-green-600 transition-all duration-700 capitalize`}>{link.title}</Link>
                                            </li>
                                        ))}

                                    </ul>
                </SheetContent>
            </Sheet>
           </div>
            
        </div>
            </Container>
        </div>
        
    );
};

export default Navbar;