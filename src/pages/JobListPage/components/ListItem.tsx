import { Activity } from "./Activity"
import { MainContent } from "./MainContent"
import { StarRating } from "./StarRating"

export const ListItem = () => {
    return (

        // Item List Box (Wrapper)
        <div
            className="flex flex-row flex-wrap-reverse justify-between items-center w-[80%] max-w-[1400px] my-2 px-[16px] bg-white rounded-[9px] shadow-md 
            lg:h-[155px]
            md:h-[120px]
            sm:h-[195px]"
        >

            {/* Avatar + Headline + Department name + Adress */}
            <MainContent />

            {/* Rating */}
            <StarRating />

            {/* Favourites + Posted Date */}
            <Activity />

        </div>
    )
}
