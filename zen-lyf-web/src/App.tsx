import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ThemeProvider from './contexts/ThemeContext';
import AuthProvider from './contexts/AuthContext';
import MainLayout from './layouts/MainLayout';

// Import pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import DashboardPage from './pages/DashboardPage';
import MedicalRecordPage from './pages/MedicalRecordPage';
import MedicalRecordAnalysis from './pages/MedicalRecordAnalysis';
import MedicalRecordAccessPage from './pages/MedicalRecordAccessPage';
import WearableDemo from './pages/WearableDemo';
import FeaturesPage from './pages/FeaturesPage';
import ContactPage from './pages/ContactPage';
import HospitalLoginPage from './pages/HospitalLoginPage';
import HospitalDashboardPage from './pages/HospitalDashboardPage';
import PricingPage from './pages/PricingPage';
import PatientSolutionsPage from './pages/PatientSolutionsPage';
import HospitalSolutionsPage from './pages/HospitalSolutionsPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import SupportPage from './pages/SupportPage';
import MobileAppPage from './pages/MobileAppPage';
import AITechnologyPage from './pages/AITechnologyPage';
import IntegrationsPage from './pages/IntegrationsPage';
import PatientSuccessStoriesPage from './pages/PatientSuccessStoriesPage';
import CompliancePage from './pages/CompliancePage';
import APIDocumentationPage from './pages/APIDocumentationPage';
import BlogPage from './pages/BlogPage';
import DocumentationPage from './pages/DocumentationPage';
import GuidesPage from './pages/GuidesPage';
import CareersPage from './pages/CareersPage';
import CareerJobPage from './pages/CareerJobPage';
import IconWrapper from 'components/IconWrapper';

// Placeholder component for pages that haven't been created yet
const PlaceholderPage: React.FC<{ pageName: string }> = ({ pageName }) => (
  <div style={{ padding: '2rem', textAlign: 'center' }}>
    <h1>{pageName}</h1>
    <p>This page is under construction.</p>
  </div>
);

function App() {
  return (
    <Router>
      <ThemeProvider>
        <AuthProvider>
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<MainLayout><HomePage /></MainLayout>} />
            <Route path="/about" element={<MainLayout><AboutPage /></MainLayout>} />
            <Route path="/features" element={<MainLayout><FeaturesPage /></MainLayout>} />
            <Route path="/pricing" element={<MainLayout><PricingPage /></MainLayout>} />
            <Route path="/contact" element={<MainLayout><ContactPage /></MainLayout>} />
            <Route path="/patient-solutions" element={<MainLayout><PatientSolutionsPage /></MainLayout>} />
            <Route path="/hospital-solutions" element={<MainLayout><HospitalSolutionsPage /></MainLayout>} />
            <Route path="/wearable-demo" element={<MainLayout><WearableDemo /></MainLayout>} />
            <Route path="/privacy" element={<MainLayout><PrivacyPage /></MainLayout>} />
            <Route path="/terms" element={<MainLayout><TermsPage /></MainLayout>} />
            <Route path="/support" element={<MainLayout><SupportPage /></MainLayout>} />
            <Route path="/mobile-app" element={<MainLayout><MobileAppPage /></MainLayout>} />
            <Route path="/ai-technology" element={<MainLayout><AITechnologyPage /></MainLayout>} />
            <Route path="/integrations" element={<MainLayout><IntegrationsPage /></MainLayout>} />
            <Route path="/success-stories" element={<MainLayout><PatientSuccessStoriesPage /></MainLayout>} />
            <Route path="/compliance" element={<MainLayout><CompliancePage /></MainLayout>} />
            <Route path="/api-documentation" element={<MainLayout><APIDocumentationPage /></MainLayout>} />
            <Route path="/blog" element={<MainLayout><BlogPage /></MainLayout>} />
            <Route path="/documentation" element={<MainLayout><DocumentationPage /></MainLayout>} />
            <Route path="/guides" element={<MainLayout><GuidesPage /></MainLayout>} />
            <Route path="/careers" element={<MainLayout><CareersPage /></MainLayout>} />
            <Route path="/careers/:id" element={<MainLayout><CareerJobPage /></MainLayout>} />
            <Route path="/careers/apply" element={<MainLayout><PlaceholderPage pageName="Submit Your Resume" /></MainLayout>} />
            
            {/* Authentication routes */}
            <Route path="/login" element={<MainLayout><LoginPage /></MainLayout>} />
            <Route path="/signup" element={<MainLayout><IconWrapper icon={SignupPage} /></MainLayout>} />
            <Route path="/hospital-login" element={<MainLayout><HospitalLoginPage /></MainLayout>} />
            
            {/* Protected routes (will add authentication check later) */}
            <Route path="/dashboard" element={<MainLayout><DashboardPage /></MainLayout>} />
            <Route path="/medical-records" element={<MainLayout><MedicalRecordPage /></MainLayout>} />
            <Route path="/medical-records/access" element={<MainLayout><MedicalRecordAccessPage /></MainLayout>} />
            <Route path="/medical-records/:id" element={<MainLayout><PlaceholderPage pageName="Medical Record Details" /></MainLayout>} />
            <Route path="/medical-records/upload" element={<MainLayout><PlaceholderPage pageName="Upload Medical Record" /></MainLayout>} />
            <Route path="/medical-record-analysis" element={<MainLayout><MedicalRecordAnalysis /></MainLayout>} />
            <Route path="/hospital-dashboard" element={<MainLayout><HospitalDashboardPage /></MainLayout>} />
            
            {/* Blog and Guide detail routes */}
            <Route path="/blog/:id" element={<MainLayout><PlaceholderPage pageName="Blog Post Details" /></MainLayout>} />
            <Route path="/guides/:id" element={<MainLayout><PlaceholderPage pageName="Guide Details" /></MainLayout>} />
            
            {/* 404 route */}
            <Route path="*" element={<MainLayout><PlaceholderPage pageName="404 - Page Not Found" /></MainLayout>} />
          </Routes>
        </AuthProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
