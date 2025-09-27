'use client' 
import { FacebookLogoIcon, PinterestLogoIcon, TwitterLogoIcon, YoutubeLogoIcon } from "@phosphor-icons/react";

import React from 'react';
import Button from "./Button";

const SubscribeToNewsLetter = () => {
    return (
        <div>
            <div className="bg-[#f7f7f7]">
                <div className="container-center py-10 flex items-center justify-between">
                    <div className="space-y-3">
                        <h2 className="text-3xl font-semibold"> Subcribe our Newsletter</h2>
                        <p className="text-gray-500"> Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna. </p>
                    </div>

                    <div className="flex items-center gap-8">

                        <div >
                            <div className="flex bg-white items-center justify-between border pl-5 rounded-full border-gray-200">
                                <input type="text" placeholder="Enter Your e-mail address." />
                                <Button label="Subscribe" className="px-10" />
                            </div>
                        </div>
                        <div className="flex items-center *:p-4 *:hover:bg-green-500 *:hover:text-white *:rounded-full">
                            <span> <FacebookLogoIcon size={32} /> </span>
                            <span> <TwitterLogoIcon size={32} /> </span>
                            <span> <PinterestLogoIcon size={32} /> </span>
                            <span> <YoutubeLogoIcon size={32} /> </span>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default SubscribeToNewsLetter;