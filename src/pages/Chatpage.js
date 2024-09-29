import Navbar from '../components/Navbar';
import ChatWindow from '../components/ChatWindow';
import GroupSidebar from '../components/GroupsSidebar';
import PeopleSidebar from '../components/PeopleSidebar';

const ChatPage = () => {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-grow">
        <GroupSidebar />
        <ChatWindow />
        <PeopleSidebar />
      </div>
    </div>
  );
};

export default ChatPage;
