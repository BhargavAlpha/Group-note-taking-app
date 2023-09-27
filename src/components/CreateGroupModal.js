import React, { useState } from 'react';
import Modal from 'react-modal';

const CreateGroupModal = ({ isOpen, onClose, onCreate }) => {
  const [groupName, setGroupName] = useState('');

  const handleCreate = () => {
    onCreate(groupName);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Create Group Modal"
    >
      <h2>Create Group</h2>
      <input
        type="text"
        placeholder="Enter group name"
        value={groupName}
        onChange={(e) => setGroupName(e.target.value)}
      />
      <button onClick={handleCreate}>Create</button>
      <button onClick={onClose}>Cancel</button>
    </Modal>
  );
};

export default CreateGroupModal;
