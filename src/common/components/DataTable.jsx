import { useState, useEffect } from "react";
import { Table, Space } from 'antd';
import { fetchData } from '../services/fetchData';
import { deleteData } from "../services/deleteData";
import { toastNotification } from '.././utils/toastNotification.js';

function DataTable({ type, title }) {
  const [data, setData] = useState([]);
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    fetchData(`tsteam/${type}/fetch`, (response) => {
      if (response && response.success) {
        const showcaseData = response.data.map((item) => ({
          key: item.post_id,
          ...item,
        }));
        
        // Dynamically generate columns based on the keys in the response data
        const dynamicColumns = Object.keys(showcaseData[0]).map((key) => ({
          title: key.charAt(0).toUpperCase() + key.slice(1), // Capitalize the first letter
          dataIndex: key,
          key: key,
          render: (text) => <span>{text}</span>,
        }));

        // Add static "Action" column
        const actionColumn = {
          title: 'Action',
          key: 'action',
          render: (_, record) => (
            <Space size="middle">
              <a onClick={() => handleEdit(record)}>Edit</a>
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

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <Table
      columns={columns} 
      dataSource={data} />
    </div>
  );
}

export default DataTable;