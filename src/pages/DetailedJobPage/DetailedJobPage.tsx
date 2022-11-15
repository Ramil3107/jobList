import { BlockTitle } from "../../common/components/BlockTitle"
import { MdBookmarkBorder } from "react-icons/md";
import { IoShareSocialSharp } from "react-icons/io5";
import { ApplyButton } from "../../common/components/ApplyButton";
import { TitleAndPrice } from "./components/TitleAndPrice";
import { Date } from "./components/Date";
import { CompanyDescription } from "./components/CompanyDescription";
import { Responsobilities } from "./components/Responsobilities";
import { CompensationAndBenefits } from "./components/CompensationAndBenefits";
import { Options } from "./components/Options";
import { Gallery } from "./components/Gallery";

export const DetailedJobPage = () => {
  return (

    //Wrapper
    <div className="flex flex-wrap justify-center mt-[50px] h-[300vh]">

      {/* Job Info (Left Side) */}
      <div className="w-[45%] border">

        <BlockTitle
          title="Job Details"
          firstIcon={<MdBookmarkBorder className="text-[24px] mr-[3px]" />}
          firstIconTitle="Save to my list"
          secondIcon={<IoShareSocialSharp className="text-[24px] mr-[3px]" />}
          secondIconTitle="Share"
        />

        <ApplyButton
          title="Apply Now"
        />

        <TitleAndPrice />

        <Date />

        <CompanyDescription />

        <Responsobilities />

        <CompensationAndBenefits />

        <ApplyButton
          title="Apply Now"
        />

        <BlockTitle
          title="Additional Info"
        />

        <div className="mb-[60px]">
          <Options />
          <Options />
        </div>

        <BlockTitle
          title="Attached images"
        />

        <Gallery />

      </div>





      <div className="w-[25%] border">

      </div>

    </div>
  )
}
