import { useState, useEffect } from "react";
import { Table, Dropdown, Menu, Space } from 'antd';
import { fetchData } from '../services/fetchData';
import { deleteData } from "../services/deleteData";
import { toastNotification } from '.././utils/toastNotification.js';
import { TsModal } from './controls/tsControls.js';
import { FilePenLine, Brush,Trash2 } from 'lucide-react';

import commonStore from "../states/commonStore.js";

import { Typography } from 'antd';
const { Text } = Typography;

function DataTable({ type, title, editor }) {
  const [data, setData] = useState([]);
  const [columns, setColumns] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [loading, setLoading] = useState(true);

  const { saveSettings, updateModal, reloadData } = commonStore((state) => ({
    saveSettings: state.saveSettings,
    updateModal: state.updateModal,
    reloadData: state.reloadData,
  }));

  useEffect(() => {
    setLoading(true);
    fetchData(`tsteam/${type}/fetch`, (response) => {
      if (response && response.success) {
        const showcaseData = response.data.map((item) => ({
          key: item.post_id,
          ...item,
        }));
        
        const dynamicColumns = Object.keys(showcaseData[0])
        .filter((key) => key !== 'post_id' && key !== 'key')
        .map((key) => ({
          title: key.charAt(0).toUpperCase() + key.slice(1),
          dataIndex: key,
          key: key,
          render: (text) => {
            switch (key) {
              case 'image':
              case 'profileImage':
                return <img src={text} alt={key} style={{ width: '70px', height: '70px', borderRadius: '100%' }} />;
              case 'shortcode':
                return <Text copyable>{text}</Text>;

              default:
                return <span>{text}</span>;
            }
          },
      }));

        const actionColumn = {
          title: 'Action',
          key: 'action',
          render: (_, record) => (
              <Dropdown
                  menu={{
                    items: [
                      {
                        key: 'edit',
                        label: (
                            <div className="flex items-center w-full space-x-2 p-2 bg-gray-100 rounded-xl">
                                <FilePenLine size={20} className="tsteam__color--icon" />
                                <span>Edit</span>
                            </div>
                        ),
                        onClick: () => handleEdit(record.key),
                      },
                      ...(editor
                          ? [
                            {
                              key: 'editor',
                              label: (
                                  <div className="flex items-center w-full bg-gray-100 space-x-2 p-2 rounded-xl">
                                    <Brush size={20} className="tsteam__color--icon" />
                                    <span>Edit Design</span>
                                  </div>
                              ),
                              onClick: () => handleEditor(record.key, type),
                            },
                          ]
                          : []),
                      {
                        key: 'delete',
                        label: (
                            <div className="flex items-center space-x-2 w-full bg-gray-100 p-2 rounded-xl">
                              <Trash2 size={20} className="text-red-500" />
                              <span>Delete</span>
                            </div>
                        ),
                        onClick: () => handleDelete(record.key),
                      },
                    ],
                  }}
                  trigger={['click']}
                  placement="bottomRight"
                  overlayStyle={{
                    width: '250px',
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                    border: '1px solid rgb(223, 231, 255)',
                    borderRadius: '10px',
              }}
              >
                <a onClick={(e) => e.preventDefault()}> {/* Prevent default link behavior */}
                  <span style={{ fontSize: '18px', cursor: 'pointer' }}>•••</span> {/* Three dots */}
                </a>
              </Dropdown>
          ),
        };

        setColumns([...dynamicColumns, actionColumn]);
        setData(showcaseData);
      } else {
        console.error('Error fetching showcases:', response);
      }
      setLoading(false);
    });
  }, [type, reloadData]);

  const handleDelete = (post_id) => {
    deleteData(`tsteam/${type}/delete`, post_id)
      .then((response) => {
        if (response.success) {
          toastNotification('success', `${title} Deleted`, `The ${title} has been successfully deleted.`);
          setData((prevData) => prevData.filter((item) => item.key !== post_id));
        } else {
          toastNotification('error', 'Error', `There was an error deleting the ${title}.`);
        }
      })
      .catch((error) => {
        toastNotification('error', 'Error', `There was an error deleting the ${error}.`);
    });
  };

  const handleEdit = (post_id) => {
    setSelectedPost(post_id);
    saveSettings('updateModal', true);
  };

  const closeModal = () => {
    saveSettings('updateModal', false);
    setSelectedPost(null);
  };

  const handleEditor = (post_id, type) => {
    let currentUrl = window.location.href;
    if (currentUrl.includes('?')) {
        currentUrl += `&path=editor&type=${type}&post_id=${post_id}`;
    } else {
        currentUrl += `?path=editor&type=${type}&post_id=${post_id}`;
    }
    window.location.href = currentUrl;
  }

  return (
    <div className="shadow-md rounded-lg overflow-hidden mt-4">
      <Table
      columns={columns} 
      dataSource={data}
      loading={loading}
       />

      <TsModal
          actionType='edit'
          formSupport={true}
          name={title}
          type={type}
          id={selectedPost}
          isOpen={updateModal}
          isClose={closeModal}
          width={650} />
    </div>
  );
}

export default DataTable;