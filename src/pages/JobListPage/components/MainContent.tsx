import { MdLocationOn } from "react-icons/md"

export const MainContent = () => {
    return (
        <div className="flex w-[70%] border">

            <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" className="w-[85px] h-[85px] rounded-full" />

            <div className="flex flex-col justify-between w-full h-[130px] ml-[26px] ">
                <h1 className="text-[20px] text-[#3A4562] font-bold leading-[25px] mb-[8px]">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                     Maiores ab maxime!
                </h1>
                <p className="text-[#878D9D] text-[16px] font-normal mb-[8px]">
                    Department name • Allgemeines Krankenhaus der Stadt Wien - AKH
                </p>
                <div className="flex flex-row items-center">
                    <MdLocationOn className="text-[#878D9D] text-[20px]" />
                    <p className="text-[#878D9D] text-[16px] ">
                        Vienna, Austria
                    </p>
                </div>
            </div>

        </div>
    )
}
