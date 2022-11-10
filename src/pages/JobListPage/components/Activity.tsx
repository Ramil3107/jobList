import { MdBookmarkBorder } from "react-icons/md";

export const Activity = () => {
    return (
        <div className="flex flex-col justify-between w-[15%] h-[130px] border">

            <div className="w-full">
                <MdBookmarkBorder className="text-[28px] float-right" />
            </div>

            <p className="text-[#878D9D] text-[16px]">
                Posted 2 days ago
            </p>

        </div>
    )
}
