
import React, { useState } from 'react';
import NotificationModal2 from 'components/notification/NotificationModal2';
import 'bootstrap/dist/css/bootstrap.min.css';
import NotificationModal from 'components/notification/NotificationModal';


const Notification = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button onClick={handleOpenModal}>Show Notification</button>
      <NotificationModal2
        show={showModal}
        handleClose={handleCloseModal}
        message="This is a notification message."
      />
    </div>
  );
};

export default Notification;
