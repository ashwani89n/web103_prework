import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddCreator from './pages/AddCreator.jsx';
import ShowCreators from './pages/ShowCreators.jsx';
import ViewCreator from './pages/ViewCreator.jsx';
import EditCreator from './pages/EditCreator.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/create" element={<AddCreator />} />
        <Route path="/showall" element={<ShowCreators />} />
        <Route  path="/view/:name" element={<EditCreator />} />
        <Route  path="/edit/:name" element={<ViewCreator />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
