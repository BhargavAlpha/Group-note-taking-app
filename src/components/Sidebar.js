import React from 'react'
import CreateGroupModal from './CreateGroupModal';
import { useState } from 'react';
function Sidebar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [groups, setGroups] = useState([]);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleCreateGroup = (name) => {
    if (name.trim() !== '') {
      setGroups([...groups, name]);
    }
  };
  return (
    <div className='sidebar'>
        <div className='heading'><h1>Pocket Notes</h1></div>
        <div className><button className='create-btn' onClick={openModal}>+ Create Notes Group</button></div>
        <CreateGroupModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onCreate={handleCreateGroup}
        />
        {groups.map((group, index) => (
          <div className='chat-name-wrapper'>
          <div className='chat-name-logo' key={index}>{group.slice(0, 2)}</div>
          <div className='chat-name' key={index}>{group}</div>
        </div>
          
        ))}
        
        
    </div>
    
  )
}

export default Sidebar;