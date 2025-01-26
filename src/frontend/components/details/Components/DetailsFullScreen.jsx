import React, { useState, useEffect } from 'react';
import { safeJsonParse } from "../../../../common/utils/safeJsonParse.js";
import renderEditorContent from "../Helper/renderEditorContent.jsx";

const DetailsFullScreen = ({ member }) => {
    const modalId = member.title.replace(/\s+/g, '-').toLowerCase(); // Generate a unique modal ID based on member title
    const editorData = safeJsonParse(member.meta_data.information);

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
        }, 500); // Match the transition duration (1s)
    };

    // UseEffect to reset transitioning state when height changes (after transition)
    useEffect(() => {
        if (height === 0 && !isFullScreen) {
            setTransitioning(false); // Reset the transition state after closing
        }
    }, [height, isFullScreen]);

    return (
        <div>
            {/* Button to open the full screen */}
            <button
                className="btn px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600"
                onClick={openFullScreen} // Trigger full-screen open
            >
                Open Full Screen
            </button>

            {/* Full Screen OverlayCard */}
            {isFullScreen && (
                <div
                    id={modalId} // Set the modal ID dynamically based on the member title
                    style={{
                        position: 'fixed',
                        bottom: 0,
                        left: 0,
                        width: '100%',
                        height: height,
                        zIndex: 9999,
                        backgroundColor: 'black', // Ensure initial transparency
                        transition: transitioning ? 'height 0.5s ease-in-out, background-color 0.5s ease-in-out' : 'none', // Only apply transition when in a transitioning state
                        overflow: 'hidden',
                        transformOrigin: 'bottom',
                    }}
                >
                    <div
                        className="relative w-full h-full flex justify-center items-center">
                        <button
                            className="absolute top-24 right-32 text-white text-3xl"
                            onClick={closeFullScreen}
                        >
                            &times;
                        </button>

                        <div className="modal-content text-white w-4/6">
                            <div className="flex gap-8">
                                <div className="w-4/6">
                                    <img src={member.meta_data.image} alt={member.title}
                                         className="w-96 h-96 object-contain mb-4"/>

                                    <p className="text-base">{member.meta_data.email}</p>
                                    <p className="text-base">{member.meta_data.phone}</p>
                                    <p className="text-base">394-268-9576</p>
                                    <p className="text-base">{member.meta_data.website}</p>
                                </div>

                                <div className="w-full">
                                    <h2 className="text-2xl text-white">{member.title}</h2>
                                    <p className="text-base">{member.meta_data.designation}</p>
                                    <p className="text-gray-700">{member.meta_data.description}</p>

                                    <div className="editor-content mt-4">
                                        {editorData && editorData.blocks ? renderEditorContent(editorData.blocks) :
                                            <p>No content available.</p>}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            )}
        </div>
    );
};

export default DetailsFullScreen;