import React, { useEffect, useRef } from 'react';
import { Form, Input, Tabs } from 'antd';
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import Paragraph from '@editorjs/paragraph';  // Import Paragraph tool

import TeamMemberBasic from './TeamMember/TeamMemberBasic';
import TeamMemberProfile from './TeamMember/TeamMemberProfile';

function TeamMemberFields({ form }) {
  const onChange = (key) => {
    console.log(key);
  };

  const items = [
    {
      key: '1',
      label: 'Basic Information',
      children: <TeamMemberBasic form={form} />,
    },
    {
      key: '2',
      label: 'Profile Links',
      children: <TeamMemberProfile />,
    },
    {
      key: '3',
      label: 'Social Links',
      children: 'Content of Tab Pane 3',
    },
    {
      key: '4',
      label: 'Additional Information Links',
      children: 'Content of Tab Pane 3',
    },
  ];
    

  return (
    <>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />    
    </>
  );
}

export default TeamMemberFields;