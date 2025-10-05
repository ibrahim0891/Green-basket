


import axiosInstance from '@/app/lib/axios';
import React from 'react';

const res = await axiosInstance.get('/api/categories')
const { categories } = res.data

const CategoryRadioButtonList = ({ setCategorySidebarOpen, selected, setSelected, setCategoryName }) => {
    

    let handleRadioInputChange = (id , name) => {
        setSelected(id)
        setCategorySidebarOpen(false)
        setCategoryName(name)
    }
    return (
        <div className='space-y-3 mb-10 '>
            {
                categories.map((item) => {
                    let { id, name, productCount } = item;
                    return <label key={id} className="flex items-center space-x-6  cursor-pointer active:scale-95 transition-all">
                        <input
                            type="radio"
                            name={name}
                            value={name}
                            checked={selected == id}
                            className="hidden peer"
                            onChange={() => handleRadioInputChange(id , name)}
                        />
                        <div className="w-6 aspect-square rounded-full peer-checked:bg-green-500 border-3 border-gray-200 peer-checked:border-white p-2 peer-checked:outline-1 peer-checked:outline-green-500"></div>
                        <div className='text-base '>
                            <span className="">{name}</span> 
                        </div>

                    </label>
                })
            }
        </div>
    );
};

export default CategoryRadioButtonList;