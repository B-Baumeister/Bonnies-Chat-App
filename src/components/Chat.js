import { useState } from 'react';
let nextID = 0;

export default function Chat() {
  const [inputMessage, setMessage] = useState('');
  const [messageHistory, setMessageHistory] = useState([]);

  return (
    <main>
      <input
        value={inputMessage}
        onChange={event => {
          setMessage(event.target.value);
        }}
      />

      <button
        onClick={() => {
          setMessageHistory([
            ...messageHistory,
            { id: nextID++, messageValue: inputMessage, userName: 'Fabian' }
          ]);
          setMessage('');
        }}
      >
        Send
      </button>

      <ul>
        {messageHistory.map(message => (
          <li key={message.id}>
            {message.userName}: {message.messageValue}
          </li>
        ))}
      </ul>
    </main>
  );
}
