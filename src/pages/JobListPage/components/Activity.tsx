import { MdBookmarkBorder } from "react-icons/md";

export const Activity = () => {
    return (
        <div className="
        lg:w-[15%] lg:h-[90%] lg:flex lg:flex-col lg:justify-between
        md:w-[15%] md:h-[90%] md:flex md:flex-col md:justify-between
        sm:w-[40%] sm:h-[15%] sm:flex sm:flex-wrap sm:justify-end items-end">

            <div className="w-full">
                <MdBookmarkBorder className="float-right
                lg:text-[28px]
                md:text-[24px]
                sm:text-[0px]"
                />
            </div>

            <p className="text-[#878D9D] 
            lg:text-[16px] lg:text-left
            md:text-[14px] md:text-left
            sm:text-[12px] sm:text-right"
            >
                Posted 2 days ago
            </p>

        </div>
    )
}
