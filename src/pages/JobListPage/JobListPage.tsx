import { ListItem } from "./components/ListItem"
import { Pagination } from "./components/Pagination"

export const JobListPage = () => {

  return (
    // Wrapper
    <div className="flex flex-col items-center w-full min-h-screen bg-[#F5F5F5] py-7 relative pb-[100px]">

      {/* Job List Items */}
      <ListItem />

      {/* Pagination */}
      <Pagination />

    </div>
  )
}
