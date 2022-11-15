interface props {
    title: string,
    firstIcon?: JSX.Element,
    secondIcon?: JSX.Element,
    firstIconTitle?: string,
    secondIconTitle?: string
}

export const BlockTitle = ({ title, firstIcon, secondIcon, firstIconTitle, secondIconTitle }: props) => {
    return (
        <div className="flex border-b-[1px] border-[#3A4562]">
            <h1 className="text-[24px] text-[#3A4562] w-full font-semibold">{title}</h1>

            <div className="flex items-center justify-end mr-[10px] w-full">
                {
                    firstIcon &&
                    (
                        <div className="flex mx-[10px]">
                            {firstIcon}
                            <p className="text-[16px]">{firstIconTitle}</p>
                        </div>
                    )
                }

                {
                    secondIcon &&
                    (
                        <div className="flex">
                            {secondIcon}
                            <p className="text-[16px]">{secondIconTitle}</p>
                        </div>
                    )
                }

            </div>
        </div>
    )
}
