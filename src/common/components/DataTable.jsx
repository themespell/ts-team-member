import { useState, useEffect } from "react";
import { Table, Space } from 'antd';
import { fetchData } from '../services/fetchData';
import { deleteData } from "../services/deleteData";
import { toastNotification } from '.././utils/toastNotification.js';
import { TsModal } from './controls/tsControls.js';

function DataTable({ type, title, editor }) {
  const [data, setData] = useState([]);
  const [columns, setColumns] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    fetchData(`tsteam/${type}/fetch`, (response) => {
      if (response && response.success) {
        const showcaseData = response.data.map((item) => ({
          key: item.post_id,
          ...item,
        }));

        const dynamicColumns = Object.keys(showcaseData[0]).map((key) => ({
          title: key.charAt(0).toUpperCase() + key.slice(1),
          dataIndex: key,
          key: key,
          render: (text) => <span>{text}</span>,
        }));

        const actionColumn = {
          title: 'Action',
          key: 'action',
          render: (_, record) => (
            <Space size="middle">
              <a onClick={() => handleEdit(record.key)}>Edit</a>
              {editor && (
                <a onClick={() => handleEditor(record.key, type)}>Edit Design</a>
              )}
              <a onClick={() => handleDelete(record.key)}>Delete</a>
            </Space>
          ),
        };

        setColumns([...dynamicColumns, actionColumn]);
        setData(showcaseData);
      } else {
        console.error('Error fetching showcases:', response);
      }
    });
  }, [type]);

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
        toastNotification('error', 'Error', `There was an error deleting the ${title}.`);
    });
  };

  const handleEdit = (post_id) => {
    console.log(post_id);
    setSelectedPost(post_id);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
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
    <div className="shadow-md rounded-lg overflow-hidden">
      <Table
      columns={columns} 
      dataSource={data} />

      <TsModal
          actionType='edit'
          formSupport={true}
          name={title}
          type={type}
          id={selectedPost}
          isOpen={isModalOpen}
          isClose={closeModal}
          width={550} />
    </div>
  );
}

export default DataTable;