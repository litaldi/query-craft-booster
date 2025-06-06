
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import { AuthProvider } from "@/contexts/auth-context";
import { PublicLayout } from "@/components/layout/PublicLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Features from "./pages/Features";
import Learn from "./pages/Learn";
import HowItWorks from "./pages/HowItWorks";
import Pricing from "./pages/Pricing";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Dashboard from "./pages/Dashboard";
import Repositories from "./pages/Repositories";
import Queries from "./pages/Queries";
import QueryOptimization from "./pages/QueryOptimization";
import AIFeatures from "./pages/AIFeatures";
import Account from "./pages/Account";
import Settings from "./pages/Settings";
import Reports from "./pages/Reports";
import Teams from "./pages/Teams";
import Support from "./pages/Support";
import DbImport from "./pages/DbImport";
import Approvals from "./pages/Approvals";
import AuditLog from "./pages/AuditLog";
import DocsHelp from "./pages/DocsHelp";
import Sandbox from "./pages/Sandbox";
import ProtectedRoute from "./components/protected-route";
import Layout from "./components/layout";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="system" storageKey="dbooster-theme">
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              {/* Public routes with public layout */}
              <Route path="/" element={<PublicLayout />}>
                <Route path="home" element={<Home />} />
                <Route path="features" element={<Features />} />
                <Route path="learn" element={<Learn />} />
                <Route path="how-it-works" element={<HowItWorks />} />
                <Route path="pricing" element={<Pricing />} />
                <Route path="blog" element={<Blog />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
                <Route path="privacy" element={<Privacy />} />
                <Route path="terms" element={<Terms />} />
              </Route>
              
              {/* Auth route without layout */}
              <Route path="/login" element={<Login />} />
              
              {/* Protected routes with authenticated layout */}
              <Route
                path="/"
                element={
                  <ProtectedRoute>
                    <Layout />
                  </ProtectedRoute>
                }
              >
                <Route index element={<Dashboard />} />
                <Route path="repositories" element={<Repositories />} />
                <Route path="queries" element={<Queries />} />
                <Route path="queries/:id" element={<QueryOptimization />} />
                <Route path="ai-features" element={<AIFeatures />} />
                <Route path="account" element={<Account />} />
                <Route path="settings" element={<Settings />} />
                <Route path="reports" element={<Reports />} />
                <Route path="teams" element={<Teams />} />
                <Route path="support" element={<Support />} />
                <Route path="db-import" element={<DbImport />} />
                <Route path="approvals" element={<Approvals />} />
                <Route path="audit-log" element={<AuditLog />} />
                <Route path="docs-help" element={<DocsHelp />} />
                <Route path="sandbox" element={<Sandbox />} />
              </Route>
              
              {/* 404 route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </AuthProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
