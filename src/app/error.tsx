'use client'  
import { useEffect } from 'react'

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])

    return (
        <div className='container-center flex items-center justify-center gap-4 flex-col h-screen'>
            <h2 className='text-3xl font-semibold'>Something went wrong!</h2>
            <button
                onClick={
                    // Attempt to recover by trying to re-render the segment
                    () => reset()
                }
                className='bg-rose-500 text-white rounded-full px-6 py-3'
            >
                Try again
            </button>
        </div>
    )
}