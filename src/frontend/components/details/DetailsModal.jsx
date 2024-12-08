function DetailsModal({ member }) {
    console.log(member)
    // Generate a dynamic modal ID based on the title
    const modalId = member.title.replace(/\s+/g, '-').toLowerCase();

    return (
        <>
            <button
                className="btn px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600"
                onClick={() => document.getElementById(modalId).showModal()}>
                Open Modal
            </button>

            <dialog
                id={modalId}
                className="modal fixed inset-0 flex items-center justify-center z-50 p-4 bg-gray-900 bg-opacity-50">

                <div className="modal-box w-11/12 max-w-5xl p-6 bg-white rounded-lg shadow-lg">
                    <div className="flex justify-between items-center mb-4">
                        <button
                            className="absolute top-4 right-5 border rounded-full p-2 text-gray-500 hover:text-gray-700"
                            onClick={() => document.getElementById(modalId).close()}>
                            <span className="text-2xl">&times;</span>
                        </button>
                    </div>

                    <div className="modal-content">
                        <div className="flex gap-8">
                            <div className="w-4/6">
                                <img src={member.meta_data.image} alt={member.title}
                                     className="w-96 h-96 object-contain mb-4"/>

                                <p className="text-base">RonaldHoll@neom.com</p>
                                <p className="text-base">512-626-8324</p>
                                <p className="text-base">394-268-9576</p>
                                <p className="text-base">https://cuatiwpsendat.com</p>
                            </div>

                            <div className="w-full">
                                <h2 className="text-2xl">{member.title}</h2>
                                <p className="text-base">{member.meta_data.designation}</p>
                                <p className="text-gray-700">{member.meta_data.description}</p>
                            </div>
                        </div>
                    </div>

                </div>
            </dialog>
        </>
    );
}

export default DetailsModal;