
import React from 'react';
import Socials from '../Components/Socials.js';
import ChatsList from '../Components/ChatsList.js';
import DCAForm from '../Components/DCAForm.js';

import GlobalStyles from '../GlobalStyles';

export default function ChatPage() {
  const classes = GlobalStyles();
  return (
    <div className="Chat">
      <ChatsList/>
    </div>
  );
}
