import {safeJsonParse} from "../../../../common/utils/safeJsonParse.js";
import renderEditorContent from "../Helper/renderEditorContent.jsx";
import {useEffect} from "react";
import { createPortal } from 'react-dom';

function DetailsModal({ member }) {
    const modalId = `${member.title.replace(/\s+/g, '-').toLowerCase()}-${member.post_id}`;
    const editorData = safeJsonParse(member.meta_data.information);

    const handleImageClick = (e) => {
        const imageId = e.target.id;
        const modal = document.getElementById(`${imageId}-details`);
        if (modal) {
            modal.setAttribute('open', '');
        }
    };

    useEffect(() => {
        const imageElements = document.querySelectorAll('.tsteam-member__image');
        imageElements.forEach((imageElement) => {
            imageElement.addEventListener('click', handleImageClick);
        });

        // Cleanup: Remove the event listeners on component unmount
        return () => {
            imageElements.forEach((imageElement) => {
                imageElement.removeEventListener('click', handleImageClick);
            });
        };
    }, []);

    const modalContent = (
        <dialog
            id={`${modalId}-details`}
            className="modal fixed inset-0 flex items-center justify-center z-50 p-4 bg-gray-900 bg-opacity-50">

            <div className="modal-box w-11/12 max-w-5xl p-6 bg-white rounded-lg shadow-lg">
                <div className="flex justify-between items-center mb-4">
                    <button
                        className="absolute top-4 right-5 border rounded-full p-2 text-gray-500 hover:text-gray-700"
                        onClick={() => document.getElementById(`${modalId}-details`).close()}>
                        <span className="text-2xl">&times;</span>
                    </button>
                </div>

                <div className="modal-content">
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
                            <h2 className="text-2xl">{member.title}</h2>
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
        </dialog>
    );

    return createPortal(modalContent, document.body);
}

export default DetailsModal;