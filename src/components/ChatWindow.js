import ChatHeader from './ChatHeader'; // Import the new ChatHeader component

const ChatWindow = () => {
  return (
    <div className="flex flex-col bg-white shadow-lg rounded-lg m-4 flex-grow">
      {/* Chat Header */}
      <ChatHeader />

      {/* Chat Messages */}
      <div className="flex-grow overflow-y-scroll p-4">
        <div className="flex flex-col space-y-2">
          <p className="bg-gray-100 p-3 rounded-xl self-start">
            Hey There!
          </p>
          <p className="bg-gray-100 p-3 rounded-xl self-start">
            How are you?
          </p>
          <p className="bg-[#B10244] text-white p-3 rounded-xl self-end">
            Hello! I am fine, how about you?
          </p>
          <p className="bg-gray-100 p-3 rounded-xl self-start">
            I am doing well, can we meet tomorrow?
          </p>
          <p className="bg-[#B10244] text-white p-3 rounded-xl self-end">
            Yes sure!
          </p>
        </div>
      </div>

      {/* Prompt Bar */}
      <div className="flex items-center mt-4 space-x-2 p-4">
        <button className="bg-[#B12044] text-white p-2 rounded-lg"><svg xmlns="http://www.w3.org/2000/svg" fill='white' width="24" height="24" viewBox="0 0 24 24"><path d="M12 1a11 11 0 1 0 11 11A11.013 11.013 0 0 0 12 1zm0 20a9 9 0 1 1 9-9 9.011 9.011 0 0 1-9 9zm6-8a6 6 0 0 1-12 0 1 1 0 0 1 2 0 4 4 0 0 0 8 0 1 1 0 0 1 2 0zM8 10V9a1 1 0 0 1 2 0v1a1 1 0 0 1-2 0zm6 0V9a1 1 0 0 1 2 0v1a1 1 0 0 1-2 0z"/></svg></button>
        <button className="bg-[#B12044] text-white p-2 rounded-lg"><svg xmlns="http://www.w3.org/2000/svg" fill='white' width="24" height="24" viewBox="0 0 48 48"><path d="M44.82 6.21a10.88 10.88 0 0 0-15.37 0L12 23.66a6.92 6.92 0 0 0 9.79 9.78c12.3-12.3 12-11.61 12-13.26a3 3 0 0 0-5.08-2.11L17.59 29.24a1 1 0 0 1-1.38-1.38l17.45-17.44a4.92 4.92 0 1 1 7 7L21.08 36.91A8.87 8.87 0 0 1 8.54 24.37L25.28 7.63a3 3 0 0 0-4.2-4.21L4.33 20.17a14.81 14.81 0 0 0 21 20.95l19.49-19.54a10.88 10.88 0 0 0 0-15.37zm-1.41 14L23.87 39.7A12.81 12.81 0 0 1 5.75 21.58L22.49 4.83a1 1 0 0 1 1.38 1.38L7.12 23a10.87 10.87 0 0 0 15.37 15.33L42 18.79A6.92 6.92 0 1 0 32.24 9L14.8 26.45a3 3 0 0 0 4.2 4.2l11.17-11.16a1 1 0 0 1 1.66.69c0 .57.72-.32-11.45 11.85a4.92 4.92 0 0 1-7-7l17.49-17.4a8.87 8.87 0 1 1 12.54 12.54z"/></svg></button>
        <input 
          type="text" 
          placeholder="Type your message here..." 
          className="flex-grow border rounded-lg p-2" 
        />
        <button className="bg-[#B12044] text-white p-2 rounded-lg"><svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" fill='white' width="24" height="24" viewBox="0 0 128 128"><path d="M127.994 16.609a1.763 1.763 0 0 0-2.13-1.774L1.363 43.043A1.75 1.75 0 0 0 .775 46.2l33.937 22.756 19.071 36.4a1.773 1.773 0 0 0 2.721.489L70.695 93.08l29.581 19.832a1.75 1.75 0 0 0 2.667-1.008l25-94.917a1.84 1.84 0 0 0 .051-.378zM59.2 82.941a1.82 1.82 0 0 0-.416.759l-4.027 15.972-16.365-31.235 78.027-44.3L59.23 82.908c-.009.01-.016.023-.03.033zm55.887-62.077-78.96 44.83L6.1 45.559zM58.437 99.4l.293-1.16 2.845-11.272 6.122 4.1zm41.747 9.239L71.517 89.417 63.2 83.844l59.659-61.311z"/></svg></button>
      </div>
    </div>
  );
};

export default ChatWindow;
