import { NextResponse } from "next/server";
import allReviews from '@/app/data/reviews.json'

export  function GET(){
    return NextResponse.json(allReviews)
}