import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router';
import { useEffect } from 'react';
import { VersionSwitcher } from './components/VersionSwitcher';
import { V1Page } from './pages/V1Page';
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
        <Route path="/" element={<Navigate to="/v2" replace />} />
        <Route path="/v1" element={<V1Page />} />
        <Route path="/v2" element={<V2Page />} />
        <Route path="*" element={<Navigate to="/v2" replace />} />
      </Routes>
      <VersionSwitcher />
    </BrowserRouter>
  );
}
