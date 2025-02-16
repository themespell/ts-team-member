const SkillBar = ({ label, percentage, barColor, progressColor }) => {
    return (
        <div>
            <div className="flex justify-between mb-1">
                <span>{label}</span>
                <span>{percentage}%</span>
            </div>
            <div className={`w-full ${barColor} h-2 rounded-full overflow-hidden`}>
                <div
                    className={`${progressColor} h-full rounded-full`}
                    style={{ width: `${percentage}%` }}
                ></div>
            </div>
        </div>
    );
};

// Parent Component to Use SkillBar (Accepts Skills as Prop)
const SkillsSection = ({ skills }) => {
    return (
        <div className="space-y-6">
            {skills.map((skill, index) => (
                <SkillBar
                    key={index}
                    label={skill.label}
                    percentage={skill.percentage}
                    barColor={skill.barColor}
                    progressColor={skill.progressColor}
                />
            ))}
        </div>
    );
};

export default SkillsSection;