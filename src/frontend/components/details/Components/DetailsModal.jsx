import React, { useEffect, useState } from "react";
import { safeJsonParse } from "../../../../common/utils/safeJsonParse.js";
import renderEditorContent from "../Helper/renderEditorContent.jsx";
import { createPortal } from 'react-dom';
import { X, Mail, Phone, MapPin, Briefcase } from 'lucide-react';

import SkillsBar from "./Child/SkillsBar.jsx";
import CTAButton from "./Child/CTAButton.jsx";
import SocialLinks from "./Child/SocialLinks.jsx";

function DetailsModal({ member }) {
    const [currentMember, setCurrentMember] = useState(null);

    const modalId = `${member.title.replace(/\s+/g, '-').toLowerCase()}-${member.post_id}`;
    const editorData = safeJsonParse(member.meta_data.information);
    const skills = safeJsonParse(member.meta_data.skills);
    const socialLinks = member.meta_data.socialLinks;

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
            <div className="modal-box max-w-[65vw] max-h-[90vh] w-[85vw] overflow-y-auto relative p-0 rounded-2xl shadow-2xl">
                {/* Close Button */}
                <button
                    className="absolute right-6 top-6 z-50 p-2.5 rounded-full bg-gray-100 hover:bg-gray-200 transition-all duration-200 hover:scale-110 shadow-md"
                    onClick={() => document.getElementById(`${modalId}-details`).close()}
                >
                    <X className="w-5 h-5 text-gray-700" />
                </button>

                {/* Top Section with Image and Details */}
                <div className="bg-white p-8 md:p-12 border-b border-gray-100">
                    <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                        {/* Profile Image */}
                        <div className="w-full md:w-auto flex flex-col items-center justify-center mb-4 md:mb-0">
                            <div className="relative">
                                <img
                                    src={member.meta_data.image}
                                    alt={member.title}
                                    className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl shadow-xl ring-1 ring-gray-200"
                                />
                            </div>
                        </div>

                        {/* Personal Info */}
                        <div className="w-full flex flex-col justify-center">
                            <div className="inline-block w-fit px-4 py-1.5 mb-3 bg-indigo-50 rounded-full text-sm font-semibold uppercase tracking-wider text-indigo-700">
                                {member.meta_data.designation}
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">{member.title}</h2>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                                {member.meta_data.experience && (
                                    <div className="flex items-center gap-3 bg-gray-50 rounded-xl p-4 border border-gray-200">
                                        <div className="p-2 bg-indigo-100 rounded-lg">
                                            <Briefcase className="w-5 h-5 text-indigo-600" />
                                        </div>
                                        <div>
                                            <div className="text-xs text-gray-500 font-medium">Experience</div>
                                            <div className="font-semibold text-gray-900">{member.meta_data.experience}</div>
                                        </div>
                                    </div>
                                )}
                                {member.meta_data.location && (
                                    <div className="flex items-center gap-3 bg-gray-50 rounded-xl p-4 border border-gray-200">
                                        <div className="p-2 bg-indigo-100 rounded-lg">
                                            <MapPin className="w-5 h-5 text-indigo-600" />
                                        </div>
                                        <div>
                                            <div className="text-xs text-gray-500 font-medium">Location</div>
                                            <div className="font-semibold text-gray-900">{member.meta_data.location}</div>
                                        </div>
                                    </div>
                                )}
                                {member.meta_data.email && (
                                    <div className="flex items-center gap-3 bg-gray-50 rounded-xl p-4 border border-gray-200">
                                        <div className="p-2 bg-indigo-100 rounded-lg">
                                            <Mail className="w-5 h-5 text-indigo-600" />
                                        </div>
                                        <div className="overflow-hidden">
                                            <div className="text-xs text-gray-500 font-medium">Email</div>
                                            <div className="font-semibold text-gray-900 text-sm truncate">{member.meta_data.email}</div>
                                        </div>
                                    </div>
                                )}
                                {member.meta_data.phone && (
                                    <div className="flex items-center gap-3 bg-gray-50 rounded-xl p-4 border border-gray-200">
                                        <div className="p-2 bg-indigo-100 rounded-lg">
                                            <Phone className="w-5 h-5 text-indigo-600" />
                                        </div>
                                        <div>
                                            <div className="text-xs text-gray-500 font-medium">Phone</div>
                                            <div className="font-semibold text-gray-900">{member.meta_data.phone}</div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Social Media */}
                            <div className="mt-4 bg-gray-50 rounded-xl p-5 border border-gray-200">
                                <div className="text-sm font-semibold mb-3 text-gray-700">Social Media</div>
                                <SocialLinks socialLinks={socialLinks} />
                            </div>

                            <div className="mt-4 bg-gray-50 rounded-xl p-5 border border-gray-200">
                                <div className="text-sm font-semibold mb-3 text-gray-700">Links</div>
                                <CTAButton
                                    donationLink={member.meta_data.donationLink}
                                    hireLink={member.meta_data.hireLink}
                                    website={member.meta_data.website}
                                    resume={member.meta_data.resume}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section with Skills/Info */}
                <div className="bg-gray-50 flex-grow p-8 md:p-12">
                    <div className="flex flex-col md:flex-row gap-6 max-w-6xl mx-auto">
                        {/* Professional Info */}
                        <div className="w-full md:w-1/2 bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Overview</h3>
                            <p className="text-gray-600 leading-relaxed">
                                {member.meta_data.description}
                            </p>
                        </div>

                        {/* Skills */}
                        <div className="w-full md:w-1/2 bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Skills</h3>
                            <SkillsBar skills={skills} />
                        </div>
                    </div>
                </div>

                {/* Additional Content from Editor */}
                {editorData && editorData.blocks && (
                    <div className="bg-white p-8 md:p-12 border-t border-gray-100">
                        <div className="max-w-6xl mx-auto">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Details</h3>
                            <div className="prose max-w-none text-gray-600">
                                {renderEditorContent(editorData.blocks)}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </dialog>
    );

    return createPortal(modalContent, document.body);
}

export default DetailsModal;