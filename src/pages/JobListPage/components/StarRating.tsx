import { useState } from "react";

export const StarRating = () => {
    return (
        <div className="border">
            {[...Array(5)].map((star, index) => {
                return (
                    <span key={index} className="text-[#38415D]">&#9733;</span>
                );
            })}
        </div>
    );
};