import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router';
import { useEffect } from 'react';
import { V2Page } from './pages/V2Page';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<V2Page />} />
        <Route path="/v2" element={<V2Page />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
