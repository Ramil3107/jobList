import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

export const Pagination = () => {
    return (

        <nav className="bottom-[30px] absolute mt-[20px]">
            <ul className="flex items-center justify-center bg-white rounded-lg shadow-md">
                <li className="text-[#7D859C] text-[25px] px-5 cursor-pointer border-r-2 mr-[40px] hover:text-[#5876C5]"><MdKeyboardArrowLeft /></li>
                <li className="text-[#70778B] font-bold px-3 py-2 cursor-pointer hover:text-[#5876C5] hover:border-b-[2px]">1</li>
                <li className="text-[#5876C5] font-bold px-3 py-2 border-b-[2px] border-[#5876C5]">2</li>
                <li className="text-[#70778B] font-bold px-3 py-2 cursor-pointer hover:text-[#5876C5] hover:border-b-[2px]">3</li>
                <li className="text-[#70778B] font-bold px-3 py-2 cursor-pointer hover:text-[#5876C5] hover:border-b-[2px]">4</li>
                <li className="text-[#70778B] font-bold px-3 py-2 cursor-pointer hover:text-[#5876C5] hover:border-b-[2px]">5</li>
                <li className="text-[#7D859C] text-[25px] px-5 border-l-2 ml-[40px] cursor-pointer hover:text-[#5876C5]"><MdKeyboardArrowRight /></li>
            </ul>
        </nav>

    )
}
