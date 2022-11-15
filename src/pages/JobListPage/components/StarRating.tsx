import { useState } from "react";

export const StarRating = () => {
    return (
        <div className="sm:h-[15%]">
            {[...Array(5)].map((star, index) => {
                return (
                    <span key={index} className="text-[#38415D] 
                    lg:text-[18px]
                    md:text-[14px]
                    sm:text-[12px]">&#9733;</span>
                );
            })}
        </div>
    );
};