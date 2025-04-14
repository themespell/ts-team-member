import { CircleHelp, ArrowUpRight, Bell, UserRound } from 'lucide-react';
import globalSettings from "../../common/utils/globalSettings";

function Topbar({ title }) {
    const tsteamLogo = tsteam_settings.assets_path;
    const { menuitems, proLink, version } = globalSettings.topbar;

    return (
        <div className="tsteam__color--bg w-full flex justify-center shadow-4xl">
            <div className="w-4/6 tsteam__color--link py-4 flex items-center justify-between px-4">
                {/* Left Section: Logo and Navigation */}
                <div className="flex items-center space-x-8">
                    {/* Ts Team Logo */}
                    <img src={`${tsteamLogo}/img/tsteam_icon.svg`} className="tsteam__topbar-logo w-10 h-10"/>

                    {/* Navigation Links */}
                    <div className="flex space-x-4 gap-4 tsteam__topbar-nav mt-2">
                        {Object.entries(menuitems).map(([key, item]) => (
                            <a key={key} href={item.link} className="nav-link">
                                {item.label}
                            </a>
                        ))}
                        {proLink && proLink.link ? (
                        <a href={proLink.link} className="">
                            <span className="flex justify-between">
                                <span className="font-bold">{proLink.label}</span> <ArrowUpRight strokeWidth={1} className="-mt-1" />
                            </span>
                        </a>
                        ) : null}
                    </div>
                </div>

                {/* Right Section: Help and Get Pro Button */}
                <div className="flex items-center space-x-8">
                    {/* Version Number */}
                    <div className="tsteam__color--button text-tsteam__color--bg px-4 py-2 rounded-md font-semibold hover:bg-gray-100 transition-colors">
                        V {version}
                    </div>

                    {/* Icons */}
                    <div className="relative flex gap-4">
                        <a href="https://wordpress.org/support/plugin/ts-team-member" target="_blank"><CircleHelp size={24} strokeWidth={1.5} className="tsteam__color--link" /></a>
                        <Bell size={24} strokeWidth={1.5} className="tsteam__color--link" />
                        <a href="admin.php?page=tsteam-pro-account"><UserRound size={24} strokeWidth={1.5} className="tsteam__color--link"/></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Topbar;