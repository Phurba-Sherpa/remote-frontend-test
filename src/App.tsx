import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

// ** Layout + styles
import GlobalStyles from '@/styles/GlobalStyles';
import AppLayout from '@/components/layouts/AppLayout';

// ** Pages
import Dashboard from '@/pages/Dashboard';
import Measurement from '@/pages/Measurement';
import CadOverlay from '@/pages/CadOverLay';
import PageNotFound from '@/pages/PageNotFound';

// ** We can change based on the requirements
const STALE_TIME_MSEC = 60 * 1000;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: STALE_TIME_MSEC,
    },
  },
});

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          {/* Will add app layout to all children */}
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="/dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="measurement" element={<Measurement />} />
            <Route path="cad-overlay" element={<CadOverlay />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
