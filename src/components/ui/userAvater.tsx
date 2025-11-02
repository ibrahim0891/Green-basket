/* eslint-disable @next/next/no-img-element */
'use client';
import userStore from "@/app/Store/userStore";
import { Tooltip, TooltipProvider, TooltipTrigger } from "../lightswind/tooltip";
import { useRef } from "react";
import Link from "next/link";

let TooltipContent = ({ user }) => {
    return <p className="text-center">
        {user?.displayName}
    </p>
}

const UserAvater = () => {
    const ref = useRef<HTMLImageElement>(null);
    const { user , logout} = userStore() as { user : User , logout : () => void}

    return (
        <div>
            {
                user ?
                    <div className="flex items-center justify-center gap-4">
                        <button className="text-xs border border-green-600 px-5 py-2.5 rounded-md" onClick={logout}> Logout </button>
                        <img className="w-8 aspect-square rounded-full border border-gray-200" src={user?.photoURL} alt="avater" ref={ref} />

                    </div>
                :
                    <Link href={'/auth/login'} prefetch={false}>
                        <button className="text-xs border bg-green-500 text-white px-5 py-2.5 rounded-md" onClick={logout}> Log in </button>
                    </Link>
            }

        </div>
    );
};

export default UserAvater;