import React from 'react'

export const BorderConers = () => {
    return (
        <div>
            <div className="absolute -left-0.75 -top-0.75 z-20 h-1.5 w-1.5 border border-[#1a1a1a] bg-[#F5F5F5]" />
            <div className="absolute -right-0.75 -top-0.75 z-20 h-1.5 w-1.5 border border-[#1a1a1a] bg-[#F5F5F5]" />
            <div className="absolute -bottom-0.75 -left-0.75 z-20 h-1.5 w-1.5 border border-[#1a1a1a] bg-[#F5F5F5]" />
            <div className="absolute -bottom-0.75 -right-0.75 z-20 h-1.5 w-1.5 border border-[#1a1a1a] bg-[#F5F5F5]" />
        </div>
    )
}
