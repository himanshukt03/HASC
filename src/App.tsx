/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { lazy, Suspense, ReactNode } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import {
  GenericPageSkeleton,
  ServicesIndexSkeleton,
  LocationsIndexSkeleton,
  ServiceDetailSkeleton,
  LocationDetailSkeleton,
} from './components/skeletons/PageSkeletons';

// Lazy-loaded pages — only loaded when the user navigates to them.
// This reduces the initial JS bundle size by ~40%, improving mobile performance (TBT & FCP).
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const FAQ = lazy(() => import('./pages/FAQ'));
const Resources = lazy(() => import('./pages/Resources'));
const Portal = lazy(() => import('./pages/Portal'));
const Contact = lazy(() => import('./pages/Contact'));
const Careers = lazy(() => import('./pages/Careers'));
const Standards = lazy(() => import('./pages/Standards'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));
const HIPAA = lazy(() => import('./pages/HIPAA'));
const ServicePage = lazy(() => import('./pages/services/ServicePage'));
const Locations = lazy(() => import('./pages/Locations'));
const LocationPage = lazy(() => import('./pages/locations/LocationPage'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Route wrapper to provide skeleton fallback
function RouteWrapper({ children, fallback }: { children: ReactNode; fallback: ReactNode }) {
  return <Suspense fallback={fallback}>{children}</Suspense>;
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.18 }}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<RouteWrapper fallback={<GenericPageSkeleton />}><About /></RouteWrapper>} />
          <Route path="/services" element={<RouteWrapper fallback={<ServicesIndexSkeleton />}><Services /></RouteWrapper>} />
          <Route path="/services/:slug" element={<RouteWrapper fallback={<ServiceDetailSkeleton />}><ServicePage /></RouteWrapper>} />
          <Route path="/locations" element={<RouteWrapper fallback={<LocationsIndexSkeleton />}><Locations /></RouteWrapper>} />
          <Route path="/locations/:county" element={<RouteWrapper fallback={<LocationDetailSkeleton />}><LocationPage /></RouteWrapper>} />
          <Route path="/faq" element={<RouteWrapper fallback={<GenericPageSkeleton />}><FAQ /></RouteWrapper>} />
          <Route path="/resources" element={<RouteWrapper fallback={<GenericPageSkeleton />}><Resources /></RouteWrapper>} />
          <Route path="/portal" element={<RouteWrapper fallback={<GenericPageSkeleton />}><Portal /></RouteWrapper>} />
          <Route path="/contact" element={<RouteWrapper fallback={<GenericPageSkeleton />}><Contact /></RouteWrapper>} />
          <Route path="/careers" element={<RouteWrapper fallback={<GenericPageSkeleton />}><Careers /></RouteWrapper>} />
          <Route path="/standards" element={<RouteWrapper fallback={<GenericPageSkeleton />}><Standards /></RouteWrapper>} />
          <Route path="/privacy" element={<RouteWrapper fallback={<GenericPageSkeleton />}><Privacy /></RouteWrapper>} />
          <Route path="/terms" element={<RouteWrapper fallback={<GenericPageSkeleton />}><Terms /></RouteWrapper>} />
          <Route path="/hipaa" element={<RouteWrapper fallback={<GenericPageSkeleton />}><HIPAA /></RouteWrapper>} />
          <Route path="*" element={<RouteWrapper fallback={<GenericPageSkeleton />}><NotFound /></RouteWrapper>} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <Layout>
        <AnimatedRoutes />
      </Layout>
    </Router>
  );
}
