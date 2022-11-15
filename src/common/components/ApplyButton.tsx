import { MouseEventHandler } from "react"

interface props {
    buttonHandler?: MouseEventHandler,
    title: string
}

export const ApplyButton = ({ buttonHandler, title }: props) => {
    return (
        <div onClick={buttonHandler} className="cursor-pointer flex justify-center items-center w-[120px] h-[50px] my-[40px] bg-[#384564] rounded-lg text-white">
            {title}
        </div>
    )
}
