import React from 'react';
import HOME from './pages/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HOME />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;