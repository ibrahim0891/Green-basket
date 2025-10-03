'use client'

import { FacebookLogoIcon, PinterestLogoIcon, TwitterLogoIcon, YoutubeLogoIcon } from "@phosphor-icons/react"


let AuthorInfoSection = ({ authorInfo }: { authorInfo: { name: string, date: { day: string, month: string } } }) => {
    let { name, date: { day, month } } = authorInfo
    return <div className="flex items-center justify-between border-b border-gray-200 pb-6">
        <div className="flex items-center gap-4">
            <div className="aspect-square bg-gray-100 rounded-full w-14 ">

            </div>
            <div className="space-y-1">
                <h3 className="text-xl font-semibold"> {name} </h3>
                <div className="text-gray-400"> {month} {day} 2025</div>
            </div>

        </div>
        <div className="flex items-center gap-2 *:p-4 *:rounded-full *:hover:bg-green-500 *:hover:text-white">
            <span>
                <FacebookLogoIcon />
            </span>
            <span>
                <YoutubeLogoIcon />
            </span>
            <span>
                <TwitterLogoIcon />
            </span>
            <span>
                <PinterestLogoIcon />
            </span>
        </div>
    </div>
}

export default AuthorInfoSection