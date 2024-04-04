import './App.css';
import Header from './components/Header';
import MessageInput from './components/MessageInput';
import SendButton from './components/SendButton';
import Form from './components/Form';
import Chat from './components/Chat';
function App() {
  return (
    <div className='App'>
      <Header className='App-header'>
        <h1>Bonnies Chat App</h1>
      </Header>
      <Chat></Chat>
    </div>
  );
}

export default App;
