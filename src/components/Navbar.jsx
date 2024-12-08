"use client"
import * as React from "react"
import { Moon, MoonIcon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

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
    const { theme, setTheme } = useTheme("light")

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

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
            title: 'registation',
            path: '/registation'
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
                    <nav className={`   hidden md:block`}>
                        <ul className="flex gap-6">
                            {links.map((link, idx) => (
                                <li key={idx}>
                                    <Link href={link.path} className={`${pathName === link.path && 'text-green-600 dark:text-green-600'} hover:text-green-600 dark:hover:text-green-600 dark:text-white transition-all duration-700 capitalize`}>{link.title}</Link>
                                </li>
                            ))}

                        </ul>
                    </nav>
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={toggleTheme}
                        aria-label="Toggle theme"
                    >
                        {theme === 'light' ? (
                            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                        ) : (
                            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                        )}
                    </Button>
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