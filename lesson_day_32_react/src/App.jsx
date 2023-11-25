import React from 'react';
import MessageComponent from './components/MessageComponents';

function App() {
  const shouldShowMessage = true;

  return (
    <div className='App'>
      <h1>Welcome to the Conditional Rendering Demo</h1>
      <MessageComponent showMessage={shouldShowMessage} />
    </div>
  );
}

export default App;
