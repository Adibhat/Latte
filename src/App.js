import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Playground, VR } from './pages';

const App = () => {
  return (
    <div className="flex-auto">
      <div className="flex bg-transparent items-center justify-center">
        <div className="inline-flex rounded-md shadow-sm bg-transparent" role="group">
          <button type="button" href="/" className="py-2 px-4 text-sm font-medium text-gray-900 bg-transparent rounded-l-lg border border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
            Playground
          </button>
          <button type="button" href="/vr" className="py-2 px-4 text-sm font-medium text-gray-900 bg-transparent border-t border-b border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
            Viewer
          </button>
          <button type="button" href="/vr" className="py-2 px-4 text-sm font-medium text-gray-900 bg-transparent rounded-r-md border border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
            VR
          </button>
        </div>
      </div>
      <BrowserRouter>
      <Routes>    
        <Route path="/" element={(<Playground />)} />
        <Route path="/playground" element={(<Playground />)} />
        <Route path="/vr" element={(<VR />)} />
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
