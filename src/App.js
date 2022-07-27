import React from 'react';
import axios from 'axios'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import UserLayout from './layout/UserLayout/index';
import AdminLayout from './layout/AdminLayout';
import Login from './components/Login';

axios.defaults.baseURL = 'http://shop.bn2002.com';
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.withCredentials = false;

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/login' element= {<Login />} />
          <Route path='/*' element = {<UserLayout/>}/>
          <Route path='/admin/*' element = {<AdminLayout />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
