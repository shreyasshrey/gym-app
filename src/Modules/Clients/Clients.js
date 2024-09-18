import React, { useState } from 'react';
import AddClient from './AddClient';
import './Clients.css';

const Clients = () => {
  const [openClient, setOpenClient] = useState(false);
  //   let location = useNavigate();

  return (
    <div className="client-container">
      <div className="add-client-btn">
        {openClient && (
          <button onClick={() => setOpenClient(false)}>Cancel</button>
        )}
        <button onClick={() => setOpenClient(true)}>Add Client</button>
      </div>
      <div className="client-section">
        {!openClient ? <div>Table</div> : <AddClient />}
      </div>
    </div>
  );
};

export default Clients;
