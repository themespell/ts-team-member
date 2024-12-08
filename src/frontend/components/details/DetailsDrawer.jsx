function DetailsDrawer({ member }) {
    // Generate a unique drawer ID based on the member's title
    const drawerId = member.title.replace(/\s+/g, '-').toLowerCase();

    return (
        <div className="drawer">
            {/* Use the dynamically generated drawer ID */}
            <input id={drawerId} type="checkbox" className="drawer-toggle"/>
            <div className="drawer-content">
                {/* Page content here */}
                <label htmlFor={drawerId} className="btn btn-primary drawer-button">Open drawer</label>
            </div>
            <div className="drawer-side">
                <label htmlFor={drawerId} aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                    {/* Sidebar content here */}
                    <li>{member.title}</li>
                </ul>
            </div>
        </div>
    );
}

export default DetailsDrawer;