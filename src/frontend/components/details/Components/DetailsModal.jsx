import React, { useEffect } from "react";
import { safeJsonParse } from "../../../../common/utils/safeJsonParse.js";
import renderEditorContent from "../Helper/renderEditorContent.jsx";
import { createPortal } from 'react-dom';

import SkillsBar from "./Child/SkillsBar.jsx";

function DetailsModal({ member }) {
    console.log(member)
    const modalId = `${member.title.replace(/\s+/g, '-').toLowerCase()}-${member.post_id}`;
    const editorData = safeJsonParse(member.meta_data.information);

    const handleImageClick = (e) => {
        const imageId = e.target.id;
        const modal = document.getElementById(`${imageId}-details`);
        if (modal) {
            modal.setAttribute('open', '');
        }
    };

    const handleButtonClick = (e) => {
        const buttonId = e.target.id;
        const modal = document.getElementById(`${buttonId}-details`);
        if (modal) {
            modal.setAttribute('open', '');
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

        // Cleanup: Remove the event listeners on component unmount
        return () => {
            imageElements.forEach((imageElement) => {
                imageElement.removeEventListener('click', handleImageClick);
            });

            detailsButtonElements.forEach((detailsButtonElement) => {
                detailsButtonElement.removeEventListener('click', handleButtonClick);
            });
        };
    }, []);

    const modalContent = (
        <dialog
            id={`${modalId}-details`}
            className="modal"
        >
            <div className="modal-box max-w-[80vw] max-h-[80vh] h-[80vh] w-[80vw] overflow-y-auto relative p-0">
                {/* Close Button */}
                <button
                    className="btn btn-sm btn-circle btn-ghost absolute right-12 top-8 z-50"
                    onClick={() => document.getElementById(`${modalId}-details`).close()}
                >
                    ✕
                </button>

                {/* Top Section with Image and Details */}
                <div className="bg-white p-6 flex relative">
                    {/* Profile Image */}
                    <div className="w-full flex flex-col items-center justify-center mb-4">
                        <img
                            src={member.meta_data.image}
                            alt={member.title}
                            className="w-[450px] h-[450px] object-cover max-w-sm mx-auto rounded-lg"
                        />
                    </div>

                    {/* Personal Info */}
                    <div className="w-full flex flex-col justify-center md:w-2/3 md:pl-8 mt-6 md:mt-0">
                        <div className="text-sm uppercase text-gray-600 mb-1">{member.meta_data.designation}</div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">{member.title}</h2>

                        <div className="space-y-4">
                            <div className="font-medium">Experience: {member.meta_data.experience}</div>
                            <div className="font-medium">Location: {member.meta_data.location}</div>
                            <div className="font-medium">Email: {member.meta_data.email}</div>
                            <div className="font-medium">Phone: {member.meta_data.phone}</div>
                        </div>

                        {/* Social Media */}
                        <div className="mt-6">
                            <div className="font-medium mb-2">Social Media</div>
                            <div className="flex space-x-2">
                                <a href="#" className="w-8 h-8 rounded-sm bg-yellow-400 flex items-center justify-center text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 320 512" fill="currentColor">
                                        <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/>
                                    </svg>
                                </a>
                                <a href="#" className="w-8 h-8 rounded-sm bg-blue-400 flex items-center justify-center text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 512 512" fill="currentColor">
                                        <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/>
                                    </svg>
                                </a>
                                <a href="#" className="w-8 h-8 rounded-sm bg-red-500 flex items-center justify-center text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 384 512" fill="currentColor">
                                        <path d="M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z"/>
                                    </svg>
                                </a>
                                <a href="#" className="w-8 h-8 rounded-sm bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 448 512" fill="currentColor">
                                        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section with Skills/Info */}
                <div className="bg-indigo-600 text-white flex-grow p-6 md:p-12">
                    <div className="flex max-w-6xl mx-auto">
                        {/* Professional Info */}
                        <div className="w-full md:w-1/2 md:pr-12 mb-8 md:mb-0">
                            <h3 className="text-2xl font-bold mb-6">Professional Info</h3>
                            <p className="text-indigo-100 leading-relaxed">
                                There are many variations of passages of Lorem Ipsum available, but
                                the majority have suffered alteration in some form, by injected humour,
                                or randomized words which don't look even slightly believable. If you
                                are going to use a passage of Lorem Ipsum, you need to be sure there
                                isn't anything embarrassing hidden in the middle of text. All the Lorem
                                Ipsum generators on the Internet tend to repeat predefined chunks.
                            </p>
                        </div>

                        {/* Skills */}
                        <div className="w-full md:w-1/2">
                            <h3 className="text-2xl font-bold mb-6">Skills</h3>
                            {/*<SkillsBar />*/}
                        </div>
                    </div>
                </div>

                {/* Additional Content from Editor */}
                {editorData && editorData.blocks && (
                    <div className="bg-white p-8">
                        {renderEditorContent(editorData.blocks)}
                    </div>
                )}
            </div>
        </dialog>
    );

    return createPortal(modalContent, document.body);
}

export default DetailsModal;