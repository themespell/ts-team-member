import React, { useState, useEffect } from 'react';
import { safeJsonParse } from "../../../../common/utils/safeJsonParse.js";
import renderEditorContent from "../Helper/renderEditorContent.jsx";
import { createPortal } from 'react-dom';
import { X, Mail, Phone, Globe } from 'lucide-react';

import SkillsBar from "./Child/SkillsBar.jsx";
import CTAButton from "./Child/CTAButton.jsx";
import SocialLinks from "./Child/SocialLinks.jsx";

const DetailsFullScreen = ({ member }) => {
    // Generate a unique modal ID based on member title and post_id
    const modalId = `${member.title.replace(/\s+/g, '-').toLowerCase()}-${member.post_id}`;
    const editorData = safeJsonParse(member.meta_data.information);
    const skills = safeJsonParse(member.meta_data.skills);
    const socialLinks = member.meta_data.socialLinks;

    const [isFullScreen, setIsFullScreen] = useState(false);
    const [height, setHeight] = useState(0); // Initially hidden
    const [transitioning, setTransitioning] = useState(false); // To handle transition state

    // Function to handle opening the full screen
    const openFullScreen = () => {
        setTransitioning(true); // Start the transition
        setIsFullScreen(true);  // Set full screen active

        // Use a timeout to trigger the height change after a slight delay (for smooth transition)
        setTimeout(() => {
            setHeight('100%'); // Trigger transition to full height
        }, 5); // Small delay to allow the transition to apply smoothly
    };

    // Function to close the full screen
    const closeFullScreen = () => {
        setTransitioning(true); // Start the transition
        setHeight(0); // Trigger transition to hidden (height 0)

        // After the transition ends, close the fullscreen
        setTimeout(() => {
            setIsFullScreen(false); // Hide the content after transition ends
        }, 500); // Match the transition duration (0.5s)
    };

    // UseEffect to reset transitioning state when height changes (after transition)
    useEffect(() => {
        if (height === 0 && !isFullScreen) {
            setTransitioning(false); // Reset the transition state after closing
        }
    }, [height, isFullScreen]);

    // Set up event listeners for image and button clicks
    useEffect(() => {
        const handleImageClick = (e) => {
            const imageId = e.target.id;
            const targetModalId = `${imageId}-details`;
            if (targetModalId === `${modalId}-details`) {
                openFullScreen();
            }
        };

        const handleButtonClick = (e) => {
            const buttonId = e.target.id;
            const targetModalId = `${buttonId}-details`;
            if (targetModalId === `${modalId}-details`) {
                openFullScreen();
            }
        };

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
    }, [modalId]);

    // Create the modal content to be portaled to the body
    const modalContent = isFullScreen && (
        <div
            id={`${modalId}-details`}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: height,
                zIndex: 9999,
                backgroundColor: '#0a0a0a',
                transition: transitioning ? 'height 0.5s ease-in-out, background-color 0.5s ease-in-out' : 'none',
                overflow: 'auto',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-start',
                padding: '40px 0'
            }}
        >
            <div className="relative w-full max-w-6xl px-8">
                {/* Close Button */}
                <button
                    className="fixed top-8 right-8 z-50 p-3 rounded-full bg-gray-800/80 hover:bg-gray-700 backdrop-blur-sm transition-all duration-200"
                    onClick={closeFullScreen}
                >
                    <X className="w-6 h-6 text-white" />
                </button>

                {/* Top Section - Centered Image */}
                <div className="flex justify-center mb-8">
                    <img
                        src={member.meta_data.image}
                        alt={member.title}
                        className="w-96 h-96 object-cover rounded-3xl shadow-2xl"
                    />
                </div>

                {/* Designation Badge */}
                <div className="flex justify-center mb-4">
                    <div className="inline-block px-5 py-2 bg-indigo-900/30 rounded-full text-sm font-semibold uppercase tracking-wider text-indigo-300 border border-indigo-800/50">
                        {member.meta_data.designation}
                    </div>
                </div>

                {/* Name */}
                <h2 className="text-4xl font-bold text-white text-center mb-8">{member.title}</h2>

                {/* Contact Information Section */}
                <div className="bg-gray-900/50 rounded-2xl p-6 border border-gray-800 mb-6">
                    <h3 className="text-white text-lg font-semibold mb-4">Contact Information</h3>
                    <div className="space-y-3">
                        {member.meta_data.email && (
                            <div className="flex items-center gap-3 text-gray-300">
                                <div className="p-2 bg-indigo-500/20 rounded-lg">
                                    <Mail className="w-5 h-5 text-indigo-400" />
                                </div>
                                <span className="text-sm">{member.meta_data.email}</span>
                            </div>
                        )}
                        {member.meta_data.phone && (
                            <div className="flex items-center gap-3 text-gray-300">
                                <div className="p-2 bg-indigo-500/20 rounded-lg">
                                    <Phone className="w-5 h-5 text-indigo-400" />
                                </div>
                                <span className="text-sm">{member.meta_data.phone}</span>
                            </div>
                        )}
                        {member.meta_data.website && (
                            <div className="flex items-center gap-3 text-gray-300">
                                <div className="p-2 bg-indigo-500/20 rounded-lg">
                                    <Globe className="w-5 h-5 text-indigo-400" />
                                </div>
                                <span className="text-sm">{member.meta_data.website}</span>
                            </div>
                        )}
                    </div>
                </div>

                {/* Social Media Section */}
                {socialLinks && (
                    <div className="bg-gray-900/50 rounded-2xl p-6 border border-gray-800 mb-6">
                        <h3 className="text-white text-lg font-semibold mb-4">Social Media</h3>
                        <SocialLinks socialLinks={socialLinks} />
                    </div>
                )}

                {/* Links Section */}
                <div className="bg-gray-900/50 rounded-2xl p-6 border border-gray-800 mb-8">
                    <h3 className="text-white text-lg font-semibold mb-4">Links</h3>
                    <CTAButton
                        donationLink={member.meta_data.donationLink}
                        hireLink={member.meta_data.hireLink}
                        website={member.meta_data.website}
                        resume={member.meta_data.resume}
                    />
                </div>

                {/* Bottom Section - Overview and Skills Side by Side */}
                <div className="flex flex-col lg:flex-row gap-6 mb-8">
                    {/* Overview */}
                    <div className="w-full lg:w-1/2 bg-gray-900/50 rounded-2xl p-6 border border-gray-800">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="w-1 h-6 bg-indigo-500 rounded-full"></span>
                            <h3 className="text-white text-xl font-bold">Overview</h3>
                        </div>
                        <p className="text-gray-300 leading-relaxed">
                            {member.meta_data.description}
                        </p>
                    </div>

                    {/* Skills Section */}
                    {skills && skills.length > 0 && (
                        <div className="w-full lg:w-1/2 bg-gray-900/50 rounded-2xl p-6 border border-gray-800">
                            <div className="flex items-center gap-2 mb-4">
                                <span className="w-1 h-6 bg-indigo-500 rounded-full"></span>
                                <h3 className="text-white text-xl font-bold">Skills & Expertise</h3>
                            </div>
                            <SkillsBar skills={skills} />
                        </div>
                    )}
                </div>

                {/* Additional Details - Full Width */}
                {editorData && editorData.blocks && (
                    <div className="bg-gray-900/50 rounded-2xl p-6 border border-gray-800">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="w-1 h-6 bg-indigo-500 rounded-full"></span>
                            <h3 className="text-white text-xl font-bold">Details</h3>
                        </div>
                        <div className="text-gray-300 leading-relaxed">
                            {renderEditorContent(editorData.blocks)}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );

    // Use createPortal to render the modal at the document body level
    return createPortal(modalContent, document.body);
};

export default DetailsFullScreen;