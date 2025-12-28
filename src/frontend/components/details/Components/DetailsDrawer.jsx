import React, { useEffect } from "react";
import { safeJsonParse } from "../../../../common/utils/safeJsonParse.js";
import renderEditorContent from "../Helper/renderEditorContent.jsx";
import { createPortal } from 'react-dom';
import { X, Mail, Phone, MapPin, Briefcase } from 'lucide-react';

import SkillsBar from "./Child/SkillsBar.jsx";
import CTAButton from "./Child/CTAButton.jsx";
import SocialLinks from "./Child/SocialLinks.jsx";

function DetailsDrawer({ member }) {
    const drawerId = `${member.title.replace(/\s+/g, '-').toLowerCase()}-${member.post_id}`;
    const editorData = safeJsonParse(member.meta_data.information);
    const skills = safeJsonParse(member.meta_data.skills);
    const socialLinks = member.meta_data.socialLinks;
    console.log(member)

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
            <div className="drawer-side z-50">
                {/* Close the drawer when clicking the overlay */}
                <label htmlFor={`${drawerId}-details-toggle`} aria-label="close sidebar" className="drawer-overlay"></label>
                <div className="bg-white min-h-full w-[450px] p-0 shadow-2xl">
                    {/* Close Button */}
                    <div className="sticky top-0 bg-white z-10 p-4 border-b border-gray-100 flex justify-end">
                        <label htmlFor={`${drawerId}-details-toggle`} className="cursor-pointer p-2.5 rounded-full bg-gray-100 hover:bg-gray-200 transition-all duration-200 hover:scale-110 shadow-md">
                            <X className="w-5 h-5 text-gray-700" />
                        </label>
                    </div>

                    <div className="overflow-y-auto h-[calc(100vh-80px)]">
                        {/* Profile Section */}
                        <div className="p-6 border-b border-gray-100">
                            {/* Profile image */}
                            <div className="relative mb-6 flex justify-center">
                                <img
                                    className="w-56 h-56 object-cover rounded-full shadow-2xl ring-4 ring-indigo-50"
                                    src={member.meta_data.image}
                                    alt={member.title}
                                />
                            </div>

                            {/* Name and Designation */}
                            <div className="mb-6 text-center">
                                <h2 className="text-3xl font-bold text-gray-900 mb-2">{member.title}</h2>
                                <div className="inline-block px-5 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-sm font-semibold uppercase tracking-wider text-white shadow-lg">
                                    {member.meta_data.designation}
                                </div>
                            </div>

                            {/* Contact Info Cards */}
                            <div className="space-y-3 mb-6">
                                {member.meta_data.experience && (
                                    <div className="group flex items-center gap-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-4 border border-indigo-100 hover:shadow-md transition-all duration-200">
                                        <div className="p-3 bg-white rounded-xl shadow-sm group-hover:scale-110 transition-transform">
                                            <Briefcase className="w-5 h-5 text-indigo-600" />
                                        </div>
                                        <div>
                                            <div className="text-xs text-gray-500 font-medium">Experience</div>
                                            <div className="font-semibold text-gray-900">{member.meta_data.experience}</div>
                                        </div>
                                    </div>
                                )}
                                {member.meta_data.location && (
                                    <div className="group flex items-center gap-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-4 border border-indigo-100 hover:shadow-md transition-all duration-200">
                                        <div className="p-3 bg-white rounded-xl shadow-sm group-hover:scale-110 transition-transform">
                                            <MapPin className="w-5 h-5 text-indigo-600" />
                                        </div>
                                        <div>
                                            <div className="text-xs text-gray-500 font-medium">Location</div>
                                            <div className="font-semibold text-gray-900">{member.meta_data.location}</div>
                                        </div>
                                    </div>
                                )}
                                {member.meta_data.email && (
                                    <div className="group flex items-center gap-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-4 border border-indigo-100 hover:shadow-md transition-all duration-200">
                                        <div className="p-3 bg-white rounded-xl shadow-sm group-hover:scale-110 transition-transform">
                                            <Mail className="w-5 h-5 text-indigo-600" />
                                        </div>
                                        <div className="overflow-hidden flex-1">
                                            <div className="text-xs text-gray-500 font-medium">Email</div>
                                            <div className="font-semibold text-gray-900 text-sm truncate">{member.meta_data.email}</div>
                                        </div>
                                    </div>
                                )}
                                {member.meta_data.phone && (
                                    <div className="group flex items-center gap-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-4 border border-indigo-100 hover:shadow-md transition-all duration-200">
                                        <div className="p-3 bg-white rounded-xl shadow-sm group-hover:scale-110 transition-transform">
                                            <Phone className="w-5 h-5 text-indigo-600" />
                                        </div>
                                        <div>
                                            <div className="text-xs text-gray-500 font-medium">Phone</div>
                                            <div className="font-semibold text-gray-900">{member.meta_data.phone}</div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Overview section */}
                            <div className="bg-gray-50 rounded-xl p-5 border border-gray-200 mb-4">
                                <h3 className="text-lg font-bold text-gray-900 mb-3">Overview</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    {member.meta_data.description}
                                </p>
                            </div>

                            {/* Social Media */}
                            <div className="bg-gray-50 rounded-xl p-5 border border-gray-200 mb-4">
                                <div className="text-sm font-semibold mb-3 text-gray-700">Social Media</div>
                                <SocialLinks socialLinks={socialLinks} />
                            </div>

                            {/* Links */}
                            <div className="bg-gray-50 rounded-xl p-5 border border-gray-200 mb-4">
                                <div className="text-sm font-semibold mb-3 text-gray-700">Links</div>
                                <CTAButton
                                    donationLink={member.meta_data.donationLink}
                                    hireLink={member.meta_data.hireLink}
                                    website={member.meta_data.website}
                                    resume={member.meta_data.resume}
                                />
                            </div>

                            {/* Skills bars section */}
                            {skills && skills.length > 0 && (
                                <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                                    <h3 className="text-lg font-bold text-gray-900 mb-3">Experience & Skill</h3>
                                    <SkillsBar skills={skills} />
                                </div>
                            )}
                        </div>

                        {/* Render editor content if available */}
                        {editorData && editorData.blocks && (
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Details</h3>
                                <div className="prose max-w-none text-gray-600">
                                    {renderEditorContent(editorData.blocks)}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );

    return createPortal(drawerContent, document.body);
}

export default DetailsDrawer;