import { useState, useEffect } from "react";
import { Table, Space } from 'antd';
import { fetchData } from '../services/fetchData';
import { deleteData } from "../services/deleteData";
import { toastNotification } from '.././utils/toastNotification.js';
import { TsModal } from './controls/tsControls.js';
import { PaintBrushIcon, PencilIcon, PencilSquareIcon, TrashIcon } from "@heroicons/react/24/solid";

import { Typography } from 'antd';
const { Text } = Typography;

function DataTable({ type, title, editor }) {
  const [data, setData] = useState([]);
  const [columns, setColumns] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const [loading, setLoading] = useState(true);

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
                return <img src={text} alt={key} style={{ width: '70px', height: 'auto', borderRadius: '100%' }} />;
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
            <Space size="middle">
              <a onClick={() => handleEdit(record.key)}><PencilSquareIcon className="size-5 tsteam__color--icon" /></a>
              {editor && (
                <a onClick={() => handleEditor(record.key, type)}><PaintBrushIcon className="size-5 tsteam__color--icon" /></a>
              )}
              <a onClick={() => handleDelete(record.key)}><TrashIcon className="size-5 text-red-500" /></a>
            </Space>
          ),
        };

        setColumns([...dynamicColumns, actionColumn]);
        setData(showcaseData);
      } else {
        console.error('Error fetching showcases:', response);
      }
      setLoading(false);
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
          isOpen={isModalOpen}
          isClose={closeModal}
          width={550} />
    </div>
  );
}

export default DataTable;