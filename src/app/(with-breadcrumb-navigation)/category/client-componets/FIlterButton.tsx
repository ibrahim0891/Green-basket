
'use client'

import Button from '@/app/Components/Button';
import { SlidersHorizontalIcon } from 'lucide-react';
import React from 'react';

const FilterButton = () => {
    return (
        <Button label="Filter" className="px-8 flex items-center gap-4"> <SlidersHorizontalIcon />  </Button>
    );
};

export default FilterButton;