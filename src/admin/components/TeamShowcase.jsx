import { useEffect, useState } from 'react';
import Editor from '../../editor/Editor.jsx';
import Container from '../../common/components/Container.jsx';

function TeamShowcase() {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleEdit = (item) => {
    setSelectedItem(item);  // Set the selected item
  };

  if (selectedItem) {
    return (
      <>
      {/* <Media /> */}
      <Editor 
        item={selectedItem} 
        onClose={() => setSelectedItem(null)}  // Callback to close the edit view
      />
      </>
    );
  }

  return (
    <div className="bg-gray-100 min-h-fit flex">
      {/* Main Content */}
      <div className="flex-1 p-6">
      <Container
            type='team_showcase'
            title='Team Showcase'
        />
      </div>
    </div>
  );
}

export default TeamShowcase;