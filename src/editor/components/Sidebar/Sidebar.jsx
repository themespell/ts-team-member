import { useState } from "react";
import { SquareChevronLeft, SquareChevronRight, LayoutDashboard, Paintbrush, Settings } from "lucide-react"; // Import Lucide icons
import ContentTab from "./Tabs/ContentTab";
import StyleTab from './Tabs/StyleTab';
import AdvanceTab from "./Tabs/AdvanceTab";

function Sidebar({ isOpen, selectedLayout, layoutType, onToggleSidebar }) {
    const [activeTab, setActiveTab] = useState("1"); // State to manage active tab

    return (
        <div className={`sidebar-container ${isOpen ? 'open' : 'closed'}`}>
            {/* Small section (blue section) that is always visible */}
            <div className="sidebar-toggle">
                {/* Toggle button */}
                <div className="toggle-icon pb-12" onClick={onToggleSidebar}>
                    {isOpen ? (
                        <SquareChevronLeft size={22} /> // Show left chevron when sidebar is open
                    ) : (
                        <SquareChevronRight size={22} /> // Show right chevron when sidebar is closed
                    )}
                </div>

                {/* Buttons to toggle between tabs */}
                <div className="sidebar-buttons flex flex-col gap-12 pt-12">
                    <button
                        className={`sidebar-button ${activeTab === "1" ? "active" : ""}`}
                        onClick={() => setActiveTab("1")}
                    >
                        <LayoutDashboard size={22} /> {/* Icon for Content */}
                    </button>
                    <button
                        className={`sidebar-button ${activeTab === "2" ? "active" : ""}`}
                        onClick={() => setActiveTab("2")}
                    >
                        <Paintbrush size={22} /> {/* Icon for Style */}
                    </button>
                    <button
                        className={`sidebar-button ${activeTab === "3" ? "active" : ""}`}
                        onClick={() => setActiveTab("3")}
                    >
                        <Settings size={22} /> {/* Icon for Advance */}
                    </button>
                </div>
            </div>

            {/* Main sidebar content */}
            <div className="sidebar">
                {/* Render the active tab component */}
                <div className="sidebar-content">
                    {activeTab === "1" && <ContentTab />}
                    {activeTab === "2" && (
                        <StyleTab selectedLayout={selectedLayout} layoutType={layoutType} />
                    )}
                    {activeTab === "3" && <AdvanceTab />}
                </div>
            </div>
        </div>
    );
}

export default Sidebar;