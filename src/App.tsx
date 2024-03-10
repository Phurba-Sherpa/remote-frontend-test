import { BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Suspense, lazy } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

// ** Layout + styles
import GlobalStyles from '@/styles/GlobalStyles';
import AppLayout from '@/components/layouts/AppLayout';
import Loader from '@/components/ui/Loader';
import ErrorFallback from '@/components/ui/ErrorFallback';

// ** Pages
const Dashboard = lazy(() => import('@/pages/Dashboard'));
const Measurement = lazy(() => import('@/pages/Measurement'));
const CadOverLay = lazy(() => import('@/pages/CadOverLay'));
const PageNotFound = lazy(() => import('@/pages/PageNotFound'));

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
        <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => (window.location.href = '/')}>
          <Suspense fallback={<Loader />}>
            <Routes>
              {/* Will add app layout to all children */}
              <Route element={<AppLayout />}>
                <Route index element={<Navigate replace to="/dashboard" />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="measurement" element={<Measurement />} />
                <Route path="cad-overlay" element={<CadOverLay />} />
              </Route>
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
