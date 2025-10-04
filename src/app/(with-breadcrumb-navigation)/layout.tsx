"use client";

import { CaretRightIcon } from "@phosphor-icons/react";
import { HouseIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Suspense } from "react";

const Layout = ({ children }: { children: React.JSX.Element }) => {
    let pathname = decodeURIComponent(usePathname());
    let pathArray = pathname.split("/").filter((path) => path != "");

    return (
        <div>
            <div className="bg-[url(/images/shopHero.jpg)]">
                <div className=" backdrop-brightness-50 text-white w-full">
                    <div className="container-center flex py-6 lg:py-12 lg:px-12 gap-4  text-base lg:text-xl container m-auto '  ">
                        <Link href="/" className="flex items-center gap-2">
                            <HouseIcon /> Home
                        </Link>
                        {pathArray.map((item, index) => {
                            const href = `/${pathArray.slice(0, index + 1).join("/")}`;
                            const isLast = index === pathArray.length - 1;
                            return (
                                <div key={index} className="flex  items-center gap-4">
                                    <CaretRightIcon />
                                    {isLast ? (
                                        <span className="capitalize">{item}</span>
                                    ) : (
                                        <Link href={href}>
                                            <span className="capitalize">{item}</span>
                                        </Link>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* {children} */}
        </div>
    );
};

export default Layout;