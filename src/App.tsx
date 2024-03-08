import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

// ** Layout + styles
import GlobalStyles from '@/styles/GlobalStyles';
import AppLayout from '@/components/layouts/AppLayout';

// ** Pages
import Dashboard from '@/pages/dashboard';
import Measurement from '@/pages/mesurement';
import CadOverlay from '@/pages/cad-overlay';
import PageNotFound from '@/pages/PageNotFound';

export function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
      <Routes>

        <Route element={<AppLayout />}>
        <Route index element={<Navigate replace to='/dashboard' />} />
        <Route path='dashboard' element={<Dashboard />} />
        <Route path='measurement' element={<Measurement />} />
        <Route path='cad-overlay' element={<CadOverlay />} />
        <Route path='*' element={<PageNotFound />} />
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  );
}
