import { useEffect } from "react";
import { safeJsonParse } from "../../../../common/utils/safeJsonParse.js";
import renderEditorContent from "../Helper/renderEditorContent.jsx";
import { createPortal } from 'react-dom';

function DetailsDrawer({ member }) {
    const drawerId = `${member.title.replace(/\s+/g, '-').toLowerCase()}-${member.post_id}`;
    const editorData = safeJsonParse(member.meta_data.information);

    const handleImageClick = (e) => {
        const imageId = e.target.id;
        const drawer = document.getElementById(`${imageId}-details-toggle`);
        if (drawer) {
            drawer.checked = true; // Open the drawer
        }
    };

    const handleButtonClick = (e) => {
        const buttonId = e.target.id;
        const drawer = document.getElementById(`${buttonId}-details-toggle`);
        if (drawer) {
            drawer.checked = true; // Open the drawer
        }
    };

    useEffect(() => {
        const imageElements = document.querySelectorAll('.tsteam-member__image');
        const detailsButtonElements = document.querySelectorAll('.tsteam-member-button__details');

        imageElements.forEach((imageElement) => {
            imageElement.addEventListener('click', handleImageClick);
        });

        detailsButtonElements.forEach((detailsButtonElement) => {
            detailsButtonElement.addEventListener('click', handleButtonClick);
        });

        // Cleanup: Remove event listeners on component unmount
        return () => {
            imageElements.forEach((imageElement) => {
                imageElement.removeEventListener('click', handleImageClick);
            });

            detailsButtonElements.forEach((detailsButtonElement) => {
                detailsButtonElement.removeEventListener('click', handleButtonClick);
            });
        };
    }, []);

    const drawerContent = (
        <div className="drawer">
            {/* Drawer toggle controlled by JavaScript */}
            <input id={`${drawerId}-details-toggle`} type="checkbox" className="drawer-toggle" />
            <div className="drawer-side">
                {/* Close the drawer when clicking the overlay */}
                <label htmlFor={`${drawerId}-details-toggle`} aria-label="close sidebar" className="drawer-overlay"></label>
                <div className="bg-white min-h-full w-80 p-0 shadow-lg">
                    {/* Profile card based on the screenshot */}
                    <div className="max-w-sm overflow-scroll bg-white">
                        {/* Header with yellow background and profile image */}
                        <div className="relative">
                            {/* Profile image */}
                            <img
                                className="w-[250px] h-[250px] object-cover mt-12 ml-4 rounded-xl"
                                src={member.meta_data.image}
                                alt={member.title}
                            />
                        </div>

                        {/* Profile information */}
                        <div className="p-4 pt-8">
                            <h2 className="text-xl font-bold">{member.title}</h2>
                            <p className="text-sm text-gray-600">{member.meta_data.designation}</p>

                            {/* Overview section */}
                            <div className="mt-4">
                                <h3 className="text-sm font-bold">Overview</h3>
                                <p className="text-xs text-gray-600 mt-1">
                                    {member.meta_data.overview || "Creative Producer with 15 years of experience across film, television, and digital media. Known for the ability to wear many hats with ease, bring fresh perspective to established concepts, and foster creative collaboration around complex ideas. Widely seen as a natural team leader who values feedback and adjusts course as needed."}
                                </p>
                            </div>

                            {/* Skills section */}
                            <div className="mt-4">
                                <h3 className="text-sm font-bold">Skills</h3>
                                <p className="text-xs mt-1">{member.meta_data.skills || "Director-oriented"}</p>
                            </div>

                            {/* Language section */}
                            <div className="mt-4">
                                <h3 className="text-sm font-bold">Language</h3>
                                <p className="text-xs mt-1">{member.meta_data.language || "English (native)"}</p>
                            </div>

                            {/* Experience section */}
                            <div className="mt-4">
                                <h3 className="text-sm font-bold">Experience</h3>
                                <p className="text-xs mt-1">{member.meta_data.experience || "12 Years"}</p>
                            </div>

                            {/* Availability section */}
                            <div className="mt-4">
                                <h3 className="text-sm font-bold">Availability</h3>
                                <p className="text-xs mt-1">{member.meta_data.availability || "Full-time Employment"}</p>
                            </div>

                            {/* Skills bars section */}
                            <div className="mt-4">
                                <h3 className="text-sm font-bold">My Experience & Skill</h3>

                                {/* Creativity bar */}
                                <div className="mt-2">
                                    <div className="flex justify-between items-center text-xs">
                                        <span>Creativity</span>
                                        <span>{member.meta_data.creativity || "70%"}</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                                        <div
                                            className="bg-red-400 h-1.5 rounded-full"
                                            style={{width: member.meta_data.creativity || "70%"}}
                                        ></div>
                                    </div>
                                </div>

                                {/* Work ethic bar */}
                                <div className="mt-2">
                                    <div className="flex justify-between items-center text-xs">
                                        <span>Work Ethic</span>
                                        <span>{member.meta_data.work_ethic || "80%"}</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                                        <div
                                            className="bg-red-400 h-1.5 rounded-full"
                                            style={{width: member.meta_data.work_ethic || "80%"}}
                                        ></div>
                                    </div>
                                </div>

                                {/* Communication bar */}
                                <div className="mt-2">
                                    <div className="flex justify-between items-center text-xs">
                                        <span>Communication</span>
                                        <span>{member.meta_data.communication || "80%"}</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                                        <div
                                            className="bg-red-400 h-1.5 rounded-full"
                                            style={{width: member.meta_data.communication || "80%"}}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Render editor content if available */}
                    <div className="p-4">
                        {editorData && editorData.blocks ? renderEditorContent(editorData.blocks) : null}
                    </div>
                </div>
            </div>
        </div>
    );

    return createPortal(drawerContent, document.body);
}

export default DetailsDrawer;