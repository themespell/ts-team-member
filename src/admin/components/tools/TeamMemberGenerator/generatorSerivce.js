import { createData } from "../../../../common/services/createData.js";

const roles = [
    'Frontend Developer', 'Backend Developer', 'Full Stack Developer', 'DevOps Engineer',
    'UI Designer', 'UX Designer', 'Product Designer', 'Graphic Designer',
    'Digital Marketer', 'Content Creator', 'SEO Specialist', 'Brand Manager',
    'Sales Representative', 'Account Manager', 'Business Development', 'Sales Manager',
    'HR Generalist', 'Recruiter', 'Training Specialist', 'Project Manager',
    'Financial Analyst', 'Accountant', 'Data Analyst', 'QA Engineer'
];

const firstNames = ['Alex', 'Jordan', 'Taylor', 'Morgan', 'Casey', 'Riley', 'Avery', 'Quinn', 'Cameron', 'Sage', 'Blake', 'River'];
const lastNames = ['Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez', 'Wilson', 'Anderson', 'Thomas'];

export const generateRandomMember = () => {
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    const role = roles[Math.floor(Math.random() * roles.length)];
    const experience = Math.floor(Math.random() * 15) + 1;

    return {
        member_name: `${firstName} ${lastName}`,
        member_designation: role,
        member_description: `Experienced ${role.toLowerCase()} with ${experience} years of expertise in the field. Passionate about delivering high-quality results and collaborating with cross-functional teams to achieve business objectives.`,
        member_email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@company.com`,
        member_phone: `+1 (${Math.floor(Math.random() * 900) + 100}) ${Math.floor(Math.random() * 900) + 100}-${Math.floor(Math.random() * 9000) + 1000}`,
        member_telephone: `+1 (${Math.floor(Math.random() * 900) + 100}) ${Math.floor(Math.random() * 900) + 100}-${Math.floor(Math.random() * 9000) + 1000}`,
        member_location: ['New York, NY', 'San Francisco, CA', 'Austin, TX', 'Seattle, WA', 'Chicago, IL', 'Boston, MA', 'Remote'][Math.floor(Math.random() * 7)],
        member_website: `https://${firstName.toLowerCase()}${lastName.toLowerCase()}.dev`,
        member_experience: `${experience} years`,
        member_company: 'Tech Solutions Inc.',
        member_information: `Professional ${role.toLowerCase()} with extensive experience in modern technologies and best practices. Known for delivering high-quality solutions and mentoring junior team members.`,
        member_image: '',
        member_resume: '',
        member_hire: '',
        member_donation: '',
    };
};

export const createTeamMember = async (memberData) => {
    try {
        const endpoint = 'tsteam/team_member/create';
        const response = await createData(endpoint, memberData);

        if (response.success) {
            return { success: true, post_id: response.data.post_id };
        } else {
            return { success: false, message: response.data || 'Failed to create team member' };
        }
    } catch (error) {
        return { success: false, message: `Error creating team member: ${error.message}` };
    }
};

export const generateTeamMembers = async (count) => {
    const generatedMembers = [];
    const createdMembers = [];
    let successCount = 0;
    let failCount = 0;

    // Generate member data
    for (let i = 0; i < count; i++) {
        generatedMembers.push(generateRandomMember());
    }

    // Create each member via AJAX
    for (const memberData of generatedMembers) {
        const result = await createTeamMember(memberData);

        if (result.success) {
            createdMembers.push({
                ...memberData,
                post_id: result.post_id,
                id: result.post_id
            });
            successCount++;
        } else {
            console.error('Failed to create member:', result.message);
            failCount++;
        }
    }

    return {
        createdMembers,
        successCount,
        failCount,
        totalGenerated: count
    };
};
