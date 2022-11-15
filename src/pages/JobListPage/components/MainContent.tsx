import { MdLocationOn } from "react-icons/md"

export const MainContent = () => {
    return (

        //Wrapper
        <div className="flex
        lg:w-[70%] lg:h-[90%]
         md:w-[70%] md:h-[90%]
         sm:w-[100%] sm:h-[75%]">

            {/* Image */}
            <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" className="rounded-full
            lg:w-[85px] lg:h-[85px]
            md:w-[65px] md:h-[65px]
            sm:w-[55px] sm:h-[55px]"
            />

            {/* Title */}
            <div className="flex flex-col justify-around w-full ml-[26px] ">
                <h1 className="text-[#3A4562] font-bold
                lg:text-[20px] lg:leading-[25px]
                md:text-[16px] md:leading-[20px]
                sm:text-[14px] sm:leading-[20px]">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Maiores ab maxime!
                </h1>

                {/* Department name */}
                <p className="text-[#878D9D] font-normal
                lg:text-[16px] 
                md:text-[12px]>
                sm:text-[10px]">
                    Department name • Allgemeines Krankenhaus der Stadt Wien - AKH
                </p>

                {/* Location */}
                <div className="flex flex-row items-center">
                    <MdLocationOn className="text-[#878D9D] 
                    lg:text-[16px] 
                    md:text-[12px] 
                    sm:text-[10px]"
                    />
                    <p className="text-[#878D9D]
                     lg:text-[16px] 
                     md:text-[12px] 
                     sm:text-[10px]"
                    >
                        Vienna, Austria
                    </p>

                </div>
            </div>

        </div>
    )
}
