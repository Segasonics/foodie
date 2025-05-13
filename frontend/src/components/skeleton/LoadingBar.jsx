import React from 'react'

const LoadingBar = () => {
    return (
        <section className="relative h-[600px] bg-gray-800 animate-pulse flex items-center justify-center text-white">
            <div className="text-center space-y-4">
                <div className="h-10 w-3/4 bg-gray-600 rounded mx-auto"></div>
                <div className="h-6 w-1/2 bg-gray-700 rounded mx-auto"></div>
                <div className="h-12 w-3/5 bg-gray-700 rounded-full mx-auto mt-6"></div>
            </div>
        </section>
    )
}

export default LoadingBar
