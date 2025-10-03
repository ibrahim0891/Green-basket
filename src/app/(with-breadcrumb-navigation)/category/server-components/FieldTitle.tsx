'use client'
import { CaretDownIcon } from "@phosphor-icons/react"



let FieldTitle = ({ name }: { name: string }) => {
    return <div className="flex items-center justify-between pb-4 mt-2">
        <h1 className="text-2xl font-semibold"> {name} </h1>
        <span>
            <CaretDownIcon size={20} />
        </span>
    </div>

}


export default FieldTitle