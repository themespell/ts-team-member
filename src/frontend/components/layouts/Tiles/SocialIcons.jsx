import {getSocialIcon, getSocialIconStyle, parseSocialIcons} from "../../helper/socialIcons.jsx";

const SocialIcons = ({ socialIcons, settings }) => {
    const data = parseSocialIcons(socialIcons);

    if (!data || !Array.isArray(data)) return null;

    return (
        <div className="flex flex-wrap items-center justify-center gap-4">
            {data.map((item, index) => (
                <a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tsteam-social-icon bg-white hover:text-gray-200 text-sm text-purple-500 hover:bg-white rounded-full p-2 transition-colors"
                    style={getSocialIconStyle(item, settings)}
                >
                    {getSocialIcon(item.socialChannel)}
                </a>
            ))}
        </div>
    );
};

export default SocialIcons;
