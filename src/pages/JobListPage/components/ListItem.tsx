import { Activity } from "./Activity"
import { MainContent } from "./MainContent"
import { StarRating } from "./StarRating"

export const ListItem = () => {
    return (

        // Item List Box (Wrapper)
        <div className="flex flex-row justify-between items-center w-[80%] max-w-[1400px] h-[155px] my-2 py-[24px] px-[16px] bg-white rounded-[9px] shadow-md">

            {/* Avatar + Headline + Department name + Adress */}
            <MainContent />

            {/* Rating */}
            <StarRating />

            {/* Favourites + Posted Date */}
            <Activity />

        </div>
    )
}
