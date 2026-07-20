import { useState, useEffect } from 'react';
import { Form, Select } from 'antd';
import { TsInput } from '../../controls/tsControls';
import { getTranslations } from "../../../utils/translations.js";
import { fetchData } from "../../../services/fetchData.js";

function MemberCategoryFields({ form, post_id }) {
    const translations = getTranslations();
    const [teamMembers, setTeamMembers] = useState([]);
    const [selectedMembers, setSelectedMembers] = useState([]);

    // Fetch existing category data when editing
    useEffect(() => {
        if (post_id) {
            fetchData('tsteam/member_category/fetch/single', (response) => {
                if (response.success && response.data) {
                    form.setFieldsValue({
                        name: response.data.name,
                        slug: response.data.slug,
                    });
                }
            }, { term_id: post_id });
        }
    }, [post_id, form]);

    // Fetch all team members for the dropdown
    useEffect(() => {
        fetchData('tsteam/team_member/fetch', (response) => {
            if (response.success && response.data) {
                const members = response.data.map((member) => ({
                    label: member.name,
                    value: member.post_id,
                }));
                setTeamMembers(members);
            }
        });
    }, []);

    // Fetch team members that belong to this category when editing
    useEffect(() => {
        if (post_id) {
            fetchData('tsteam/member_category/fetch/single', (response) => {
                if (response.success && response.data && response.data.team_member_ids) {
                    setSelectedMembers(response.data.team_member_ids);
                    form.setFieldsValue({
                        team_members: response.data.team_member_ids,
                    });
                }
            }, { term_id: post_id });
        }
    }, [post_id, form]);

    const handleMemberChange = (values) => {
        setSelectedMembers(values);
        form.setFieldsValue({ team_members: values });
    };

    return (
        <div style={{ padding: '20px 32px 12px' }}>
            <TsInput
                label={translations.categoryName || 'Category Name'}
                name="name"
                required={true}
            />

            <TsInput
                label={translations.slug || 'Slug'}
                name="slug"
                placeholder="category-slug"
            />

            <Form.Item
                label={
                    <span style={{ fontSize: '14px', fontWeight: 500, color: '#333' }}>
                        Team Members
                    </span>
                }
                name="team_members"
                style={{ marginBottom: 12 }}
            >
                <Select
                    mode="multiple"
                    placeholder="Select team members for this category"
                    style={{ width: '100%' }}
                    options={teamMembers}
                    value={selectedMembers}
                    onChange={handleMemberChange}
                    allowClear
                    showSearch
                    filterOption={(input, option) =>
                        (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                    }
                />
            </Form.Item>
        </div>
    );
}

export default MemberCategoryFields;
