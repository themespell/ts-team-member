import React, { useEffect, useRef } from 'react';
import { Form, Input } from 'antd';
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import Paragraph from '@editorjs/paragraph';  // Import Paragraph tool

function TeamMemberBasic({ form }) {
  const editorRef = useRef(null);

  useEffect(() => {
    const editor = new EditorJS({
      holder: 'editorjs',
      tools: {
        header: Header,
        list: List,
        paragraph: {  // Add paragraph tool with preserveBlank option
          class: Paragraph,
          inlineToolbar: true, // Enable the toolbar for paragraph tool
          config: {
            preserveBlank: true, // Allow blank or space-only paragraphs
          },
        },
      },
      onReady: () => {
        editorRef.current = editor;
      },
      onChange: async () => {
        try {
          if (form) {
            const editorData = await editorRef.current.save();
            form.setFieldsValue({ information: JSON.stringify(editorData) });
          } else {
            console.error('Form is not defined');
          }
        } catch (error) {
          console.error('Failed to save editor data:', error);
        }
      },
    });

    return () => {
      if (editorRef.current) {
        editorRef.current.destroy();
        editorRef.current = null;
      }
    };
  }, [form]);

  return (
    <>
      <Form.Item
        label="Team Member Name"
        name="name"
        rules={[
          { required: true, message: 'Please input your team member name!' },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Team Member Information"
        name="information"
        rules={[
          { required: true, message: 'Please input team member information!' },
        ]}
      >
        <div id="editorjs" style={{ padding: '16px', backgroundColor: '#f7f7f7' }}></div>
      </Form.Item>
    </>
  );
}

export default TeamMemberBasic;