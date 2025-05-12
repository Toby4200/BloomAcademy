import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Dashboard } from './screens/Dashboard/Dashboard';
import { Landing } from './screens/Landing/Landing';
import { Assessments } from './screens/Assessments';

createRoot(document.getElementById('app') as HTMLElement).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  </StrictMode>
);
