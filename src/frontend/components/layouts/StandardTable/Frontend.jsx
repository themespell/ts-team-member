import React from 'react';
import SocialIcons from "./SocialIcons.jsx";

const StandardTable = ({ settings, team_members, details }) => {
    const renderContent = () => {
        if (!team_members || team_members.length === 0) {
            return (
                <div className="flex items-center justify-center py-12 text-gray-500">
                    No team members found.
                </div>
            );
        }

        return (
            <div className="w-full">
                {/* Modern card-style table */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                    {/* Table Header */}
                    <div className="bg-slate-700 text-white">
                        <div className="grid grid-cols-12 gap-4 px-6 py-4 font-medium text-sm">
                            <div className="col-span-1">Thumbnail</div>
                            <div className="col-span-2">Name</div>
                            <div className="col-span-2">Designation</div>
                            <div className="col-span-5">Details</div>
                            <div className="col-span-2">Social Links</div>
                        </div>
                    </div>

                    {/* Table Body */}
                    <div className="divide-y divide-gray-100">
                        {team_members.map((member, index) => {
                            const { post_id: id, meta_data, content } = member;

                            return (
                                <div
                                    key={id || index}
                                    className="grid grid-cols-12 gap-4 px-6 py-6 hover:bg-gray-50 transition-colors duration-200 items-center"
                                >
                                    {/* Thumbnail Column */}
                                    <div className="col-span-1">
                                        <div className="relative">
                                            {meta_data?.image ? (
                                                <img
                                                    src={meta_data.image}
                                                    alt={meta_data.name || 'Team member'}
                                                    className="w-14 h-14 rounded-xl object-cover shadow-sm border border-gray-200"
                                                />
                                            ) : (
                                                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center border border-gray-200">
                                                    <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                    </svg>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Name Column */}
                                    <div className="col-span-2">
                                        <h3 className="font-semibold text-gray-900 text-lg leading-tight">
                                            {meta_data?.name || 'N/A'}
                                        </h3>
                                    </div>

                                    {/* Designation Column */}
                                    <div className="col-span-2">
                                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-700">
                                            {meta_data?.designation || 'N/A'}
                                        </span>
                                    </div>

                                    {/* Details Column */}
                                    <div className="col-span-5">
                                        <p className="text-gray-600 leading-relaxed text-sm">
                                            {content || 'No description available'}
                                        </p>
                                    </div>

                                    {/* Social Links Column */}
                                    <div className="col-span-2">
                                        <div className="flex justify-start">
                                            {meta_data?.social_links ? (
                                                <SocialIcons socialLinks={meta_data.social_links} />
                                            ) : (
                                                <span className="text-gray-400 text-xs italic">No social links</span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Mobile View - Single Column Cards */}
                <div className="lg:hidden">
                    <div className="space-y-3">
                        {team_members.map((member, index) => {
                            const { post_id: id, meta_data, content } = member;

                            return (
                                <div
                                    key={`mobile-${id || index}`}
                                    className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden"
                                >
                                    {/* Mobile Header with Image and Basic Info */}
                                    <div className="p-4 border-b border-gray-100 bg-gray-50">
                                        <div className="flex items-center space-x-3">
                                            {/* Smaller Mobile Image */}
                                            <div className="flex-shrink-0">
                                                {meta_data?.image ? (
                                                    <img
                                                        src={meta_data.image}
                                                        alt={meta_data.name || 'Team member'}
                                                        className="w-12 h-12 rounded-lg object-cover"
                                                    />
                                                ) : (
                                                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                                                        <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                        </svg>
                                                    </div>
                                                )}
                                            </div>

                                            {/* Name and Designation */}
                                            <div className="flex-1 min-w-0">
                                                <h3 className="font-semibold text-gray-900 text-base truncate">
                                                    {meta_data?.name || 'N/A'}
                                                </h3>
                                                <p className="text-sm text-gray-600 mt-1">
                                                    {meta_data?.designation || 'N/A'}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Mobile Content Body */}
                                    <div className="p-4 space-y-3">
                                        {/* Description */}
                                        {content && (
                                            <div>
                                                <p className="text-gray-700 text-sm leading-relaxed">
                                                    {content}
                                                </p>
                                            </div>
                                        )}

                                        {/* Social Links */}
                                        {meta_data?.social_links && (
                                            <div className="pt-2 border-t border-gray-100">
                                                <div className="flex items-center justify-between">
                                                <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                                                    Social Links
                                                </span>
                                                    <div className="flex items-center space-x-1">
                                                        <SocialIcons socialLinks={meta_data.social_links} />
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="w-full">
            {/* Desktop Table View */}
            <div className="hidden lg:block">
                {renderContent()}
            </div>
        </div>
    );
};

export default StandardTable;