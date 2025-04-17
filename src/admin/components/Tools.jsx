import React from 'react';
import { Cloud, Folder, BookOpen, BarChart2, Users } from 'lucide-react';

function Tools() {
    // Data array for the cards
    const toolsData = [
        {
            id: 1,
            title: 'Migration',
            description: 'Effortlessly migrate data between platforms with our tool.',
            icon: <Cloud size={40} />,
            cta: 'Access Now',
            link: 'admin.php?page=tsteam-showcase&path=migration',
        },
        {
            id: 2,
            title: 'Import / Export',
            description: 'Seamlessly import and export data for better workflow management.',
            icon: <Folder size={40} />,
            cta: 'Coming Soon',
            link: '#',
        },
        {
            id: 3,
            title: 'Custom Field',
            description: 'Add custom fields to tailor your data collection needs.',
            icon: <BookOpen size={40} />,
            cta: 'Coming Soon',
            link: '#',
        },
        {
            id: 4,
            title: 'Custom Font',
            description: 'Personalize your design with custom fonts for a unique look.',
            icon: <BarChart2 size={40} />,
            cta: 'Coming Soon',
            link: '#',
        },
        {
            id: 5,
            title: 'Team Member Generator',
            description: 'Generate team member profiles effortlessly for your projects.',
            icon: <Users size={40} />,
            cta: 'Coming Soon',
            link: '#',
        },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-white tsteam__global--border p-6">
            {/* Map through the toolsData array to render cards */}
            {toolsData.map((tool) => (
                <a
                    key={tool.id}
                    href={tool.link}
                    className="block bg-white rounded-lg shadow-md transition duration-300 hover:shadow-lg"
                >
                    {/* Icon */}
                    <div className={`tsteam__color--button w-full rounded-t-xl flex items-center justify-center p-10`}>
                        {React.cloneElement(tool.icon, { color: '#fff' })}
                    </div>
                    {/* Content */}
                    <div className="p-6">
                        <h2 className="text-xl font-bold">{tool.title}</h2>
                        <p className="text-gray-600 mt-2">{tool.description}</p>
                        <a href={tool.link} className="tsteam-button btn btn-primary mt-4">{tool.cta}</a>
                    </div>
                </a>
            ))}
        </div>
    );
}

export default Tools;