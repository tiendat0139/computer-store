import React from 'react';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import UserLayout from './layout/UserLayout/index';
import AdminLayout from './layout/AdminLayout';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/*' element = {<UserLayout/>}/>
          <Route path='/admin/*' element = {<AdminLayout />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
