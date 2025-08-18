import React, { useState } from 'react';
import { Form } from 'antd';
import {generateTeamMembers} from "./generatorSerivce.js";
import { toastNotification } from "../../../../common/utils/toastNotification.js";
import TsInput from "../../../../common/components/controls/TsInput.jsx";

function TeamMemberGenerator() {
    const [teamMembers, setTeamMembers] = useState([]);
    const [isGenerating, setIsGenerating] = useState(false);
    const [form] = Form.useForm();

    const handleGenerate = async (values) => {
        setIsGenerating(true);

        try {
            const generationCount = values.generationCount || 5;
            const result = await generateTeamMembers(generationCount);

            setTeamMembers(result.createdMembers);

            // Show notification
            if (result.successCount > 0 && result.failCount === 0) {
                toastNotification('success', 'Success!', `${result.successCount} team members generated successfully`);
            } else if (result.successCount > 0 && result.failCount > 0) {
                toastNotification('warning', 'Partial Success', `${result.successCount} members created, ${result.failCount} failed`);
            } else {
                toastNotification('error', 'Failed', 'Failed to generate team members');
            }

        } catch (error) {
            console.error('Generation error:', error);
            toastNotification('error', 'Error', `An error occurred: ${error.message}`);
        } finally {
            setIsGenerating(false);
        }
    };

    const handleClear = () => {
        setTeamMembers([]);
        toastNotification('info', 'Cleared', 'Generated team members list cleared');
    };

    return (
        <>
            <div className="tsteam__color--bg w-full shadow-4xl p-6">
                <Form
                    form={form}
                    layout="vertical"
                    onFinish={handleGenerate}
                    initialValues={{ generationCount: 5 }}
                >
                    <div className="flex flex-col gap-4 mb-4 w-4/6">
                        <h2 className="text-xl font-bold mb-4">Team Member Generator</h2>

                        <p className="text-sm text-gray-600 mb-4">
                            Generate and create dummy team member for TS Team Member. This tool creates team member entries with dummy data including names, roles, descriptions, and contact information.
                        </p>
                        <div className="w-3/6">
                            <TsInput
                                type="number"
                                label="Number of Members to Generate"
                                name="generationCount"
                                required={true}
                                maxLength={2}
                            />
                            <p className="text-xs text-gray-500 mt-1">Choose how many team members you want to create in the database (1-20)</p>
                        </div>

                        <div className="flex items-end gap-2">
                            <button
                                type="submit"
                                disabled={isGenerating}
                                className="tsteam-button btn btn-primary"
                            >
                                {isGenerating ? 'Creating Members...' : 'Generate & Create Team Members'}
                            </button>

                            {teamMembers.length > 0 && (
                                <button
                                    type="button"
                                    onClick={handleClear}
                                    className="tsteam-button btn btn-secondary"
                                    disabled={isGenerating}
                                >
                                    Clear List
                                </button>
                            )}
                        </div>
                    </div>
                </Form>

                {isGenerating && (
                    <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded">
                        <div className="flex items-center">
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600 mr-2"></div>
                            <span className="text-sm text-blue-700">Creating team members in database...</span>
                        </div>
                    </div>
                )}

                {teamMembers.length > 0 && (
                    <div className="mt-6">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-semibold">Successfully Created Team Members</h3>
                            <span className="text-sm text-gray-600 bg-green-100 px-3 py-1 rounded">
                                {teamMembers.length} member{teamMembers.length !== 1 ? 's' : ''} created
                            </span>
                        </div>

                        <div className="text-sm text-gray-600 mb-4">
                            The following team members have been successfully created in your WordPress database and are now available in your team member posts.
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {teamMembers.map((member, index) => (
                                <div key={member.post_id} className="bg-white p-4 rounded border shadow-sm hover:shadow-md transition-shadow">
                                    <div className="flex items-start justify-between mb-2">
                                        <h4 className="font-semibold text-gray-900">{member.member_name}</h4>
                                        <span className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded">
                                            ID: {member.post_id}
                                        </span>
                                    </div>
                                    <p className="text-sm text-blue-600 font-medium mb-1">{member.member_designation}</p>
                                    <p className="text-xs text-gray-500 mb-2">{member.member_email}</p>
                                    <p className="text-xs text-gray-500 mb-2">{member.member_phone}</p>
                                    <div className="text-xs text-gray-500 mt-3 pt-2 border-t">
                                        <p className="truncate">{member.member_description}</p>
                                    </div>
                                    <div className="flex justify-between text-xs text-gray-400 mt-2">
                                        <span>#{index + 1}</span>
                                        <span>{member.member_location}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-4 p-3 bg-green-50 rounded text-sm text-green-700">
                            <strong>Success!</strong> All team members have been created successfully.
                        </div>
                    </div>
                )}

                {teamMembers.length === 0 && !isGenerating && (
                    <div className="mt-6 p-6 bg-gray-50 rounded text-center">
                        <p className="text-gray-600 mb-2">No team members created yet.</p>
                        <p className="text-sm text-gray-500">Click "Generate & Create Team Members" to create dummy team members.</p>
                    </div>
                )}
            </div>
        </>
    );
}

export default TeamMemberGenerator;