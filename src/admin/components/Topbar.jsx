import { GlobeAltIcon, QuestionMarkCircleIcon } from "@heroicons/react/24/solid";
import globalSettings from "../../common/utils/globalSettings";

function Topbar({title}) {
    return (
        <div className="tsteam__color--bg w-full flex justify-center shadow-4xl">

        <div className="w-5/6 text-white py-4 flex items-center justify-between px-4">
            {/* Breadcrumb */}
            <div className="text-sm">
                <a href="#" className="hover:underline">Home</a> 
                <span className=" mx-2">/</span> 
                <span className="">{title}</span>
            </div>

            {/* Icons */}
            <div className="flex items-center space-x-4">
                <div className="relative">
                    <QuestionMarkCircleIcon className="size-8 text-white" />
                </div>
            </div>
        </div>
        </div>
    );
}

export default Topbar;