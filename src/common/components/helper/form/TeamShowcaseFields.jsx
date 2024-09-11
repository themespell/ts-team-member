import { Form, Input, Select,Space } from 'antd';

function TeamShowcaseFields() {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  const options = [
    {
      label: 'China',
      value: 'china',
      emoji: '🇨🇳',
      desc: 'China (中国)',
    },
    {
      label: 'USA',
      value: 'usa',
      emoji: '🇺🇸',
      desc: 'USA (美国)',
    },
    {
      label: 'Japan',
      value: 'japan',
      emoji: '🇯🇵',
      desc: 'Japan (日本)',
    },
    {
      label: 'Korea',
      value: 'korea',
      emoji: '🇰🇷',
      desc: 'Korea (韩国)',
    },
  ];

  return (
    <>
        <Form.Item
          label="Showcase Name"
          name="title"
          rules={[
            { required: true, message: 'Please input your showcase name!' },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
        name="member"
        label="Team Member"
        rules={[
          {
            required: false,
          },
        ]}
      >
        <Select
          mode="multiple"
          placeholder="Select a option and change input text above"
          onChange={handleChange}
          allowClear
          options={options}
          optionRender={(option) => (
            <Space>
              <span role="img" aria-label={option.data.label}>
                {option.data.emoji}
              </span>
              {option.data.desc}
            </Space>
          )}
        />
      </Form.Item>
    </>
  );
}

export default TeamShowcaseFields;