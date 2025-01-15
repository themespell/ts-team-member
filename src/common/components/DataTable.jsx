import { useState, useEffect } from "react";
import { Table, Dropdown, Menu, Space } from 'antd';
import { fetchData } from '../services/fetchData';
import { deleteData } from "../services/deleteData";
import { toastNotification } from '.././utils/toastNotification.js';
import { TsModal } from './controls/tsControls.js';
import { FilePenLine, Brush, Trash2, AlertTriangle } from 'lucide-react';

import commonStore from "../states/commonStore.js";

import { Typography } from 'antd';
import TsButton from "./controls/TsButton.jsx";
const { Text } = Typography;

function DataTable({ type, title, editor }) {
  const [data, setData] = useState([]);
  const [columns, setColumns] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

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
              case 'snippet':
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
                            <div className="tsteam__action-dropdown flex items-center w-full space-x-2 p-2 rounded-xl">
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
                                  <div className="tsteam__action-dropdown flex items-center w-full space-x-2 p-2 rounded-xl">
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
                            <div className="tsteam__action-dropdown flex items-center space-x-2 w-full p-2 rounded-xl">
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
        setDeleteId(post_id);
        setDeleteModalOpen(true);
    };

    const confirmDelete = () => {
        deleteData(`tsteam/${type}/delete`, deleteId)
            .then((response) => {
                if (response.success) {
                    toastNotification('success', `${title} Deleted`, `The ${title} has been successfully deleted.`);
                    setData((prevData) => prevData.filter((item) => item.key !== deleteId));
                    setDeleteModalOpen(false);
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
      bordered
      columns={columns} 
      dataSource={data}
      loading={loading}
      pagination={{
          position: ['none', 'bottomCenter'],
      }}
      />

      <TsModal
          actionType='edit'
          formSupport={true}
          name={title}
          type={type}
          id={selectedPost}
          isOpen={updateModal}
          isClose={closeModal}
          width={800} />

        <TsModal
            isOpen={deleteModalOpen}
            isClose={() => setDeleteModalOpen(false)}
            width={400}
            name={title}
        >
            <div className="flex flex-col items-center justify-center p-6">
                {/* Warning Icon Circle */}
                <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mb-6">
                    <AlertTriangle className="w-8 h-8 text-red-500" />
                </div>

                {/* Text Content */}
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Are you sure?</h3>
                <p className="text-gray-600 text-center mb-8">
                    You're going to delete this "{title}". Are you sure?
                </p>

                {/* Buttons */}
                <div className="flex space-x-4 w-full">
                    <TsButton
                        label="No, Keep It."
                        onClick={() => setDeleteModalOpen(false)}
                        className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-2.5 rounded-lg"
                    />
                    <TsButton
                        label="Yes, Delete!"
                        onClick={confirmDelete}
                        className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2.5 rounded-lg"
                    />
                </div>
            </div>
        </TsModal>
    </div>
  );
}

export default DataTable;