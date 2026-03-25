/**
 * AXONO IoT Solutions — App Router
 * Wires React Router v6 <Routes> from the routes config.
 */

import { Suspense } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { ROUTES } from './routes.jsx'
import PageLoader from '../components/PageLoader.jsx'
import MainLayout from '../layouts/MainLayout.jsx'

export default function AppRouter() {
  const location = useLocation()

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes location={location} key={location.pathname}>
        {ROUTES.map(({ path, component: Page }) => (
          <Route
            key={path}
            path={path}
            element={
              <MainLayout>
                <Page />
              </MainLayout>
            }
          />
        ))}
      </Routes>
    </Suspense>
  )
}
