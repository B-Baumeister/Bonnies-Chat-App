import { useState } from 'react';
let nextID = 0;

export default function Chat() {
  const [inputMessage, setMessage] = useState('');
  const [messageHistory, setMessageHistory] = useState([]);

  return (
    <main>
      <div className='Chat'>
        <ul>
          {messageHistory.map(message => (
            <li key={message.id} className='Chatmessage'>
              {message.userName}: {message.messageValue}
            </li>
          ))}
        </ul>
      </div>
      <section className='Inputarea'>
        <input
          className='MessageInput'
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
      </section>
    </main>
  );
}
