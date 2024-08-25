import { Button, Modal, Space, Table } from 'antd';
import { useEffect, useState } from 'react';
import AddNew from './AddNew.jsx';
import Media from './Media.jsx';
import Sidebar from './Sidebar.jsx';
import { toastNotification } from '../actions/toastNotification.js';
import useAdminStore from '../states/admin-store.js';
import { getShowcase } from '../actions/getShowcase.js';
import { deleteShowcase } from '../actions/deleteShowcase.js'; 

function Content() {
  const { isOpen, openModal, closeShowcaseModal } = useAdminStore();
  const [data, setData] = useState([]);

  const loadShowcaseData = () => {
    getShowcase((response) => {
      if (response && response.success) {
        const showcaseData = response.data.map((item) => ({
          key: item.post_id,
          name: item.title,
          shortcode: `[showcase id="${item.post_id}"]`,
        }));
        setData(showcaseData);
      } else {
        console.error('Error fetching showcases:', response);
      }
    });
  };

  const handleDelete = (post_id) => {
    deleteShowcase(post_id)
      .then(() => {
        toastNotification('success', 'Showcase Deleted', 'The showcase has been successfully deleted.');
        loadShowcaseData();
      })
      .catch((error) => {
        toastNotification('error', 'Error', 'There was an error deleting the showcase.');
        console.log('Error:', error);
      });
  };

  const columns = [
    {
      title: 'Title',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Shortcode',
      dataIndex: 'shortcode',
      key: 'shortcode',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a>Edit</a>
          <a onClick={() => handleDelete(record.key)}>Delete</a>
        </Space>
      ),
    },
  ];

  useEffect(() => {
    loadShowcaseData();
  }, []);

  return (
    <div className="bg-gray-100 min-h-fit flex">
      {/* Main Content */}
      <div className="flex-1 p-6">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-700">Team Showcase</h2>
          <div className="flex justify-between mt-4">
            <div>
              <button onClick={openModal} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Create New Showcase
              </button>
              <Modal 
                title="Add New Showcase" 
                open={isOpen} 
                onOk={closeShowcaseModal} 
                onCancel={closeShowcaseModal}
                width={500}
                footer={[]}
              >
                <AddNew onShowcaseAdded={loadShowcaseData} />
              </Modal>
            </div>
            <div>
              <input
                type="text"
                placeholder="Search Pages"
                className="px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
              />
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <Table columns={columns} dataSource={data} />
        </div>
      </div>
      <Sidebar />
    </div>
  );
}

export default Content;