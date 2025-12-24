import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Palette, MessageSquare, LogOut, Shield, Users } from 'lucide-react';

const Admin = () => {
  const { user, loading, isAdmin, signOut } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      navigate('/auth');
    }
  }, [user, loading, navigate]);

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-white" />
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Header */}
      <header className="bg-white/10 backdrop-blur-sm border-b border-white/20">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-red-600 to-green-600 rounded-lg flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">TechFlow Admin</h1>
              <p className="text-sm text-gray-400">{user.email}</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/">
              <Button variant="outline" className="text-white border-white/30 hover:bg-white/10">
                View Site
              </Button>
            </Link>
            <Button onClick={handleSignOut} variant="ghost" className="text-white hover:bg-white/10">
              <LogOut className="w-4 h-4 mr-2" />
              Sign Out
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {!isAdmin && (
          <div className="mb-8 p-4 bg-amber-500/20 border border-amber-500/50 rounded-lg">
            <p className="text-amber-200">
              <strong>Note:</strong> You don't have admin privileges yet. Contact your administrator to grant admin access.
            </p>
          </div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Theme Management */}
          <Link to="/admin/themes">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all cursor-pointer group">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Palette className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white">Theme Management</CardTitle>
                <CardDescription className="text-gray-400">
                  Customize holiday colors and gradients
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-300">
                  Manage Christmas, New Year, and other holiday themes. Change primary, secondary, and accent colors.
                </p>
              </CardContent>
            </Card>
          </Link>

          {/* Contact Submissions */}
          <Link to="/admin/contacts">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all cursor-pointer group">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white">Contact Submissions</CardTitle>
                <CardDescription className="text-gray-400">
                  View and manage customer inquiries
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-300">
                  Review contact form submissions, update statuses, and respond to customer inquiries.
                </p>
              </CardContent>
            </Card>
          </Link>

          {/* User Management (Admin Only) */}
          {isAdmin && (
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 opacity-60">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white">User Management</CardTitle>
                <CardDescription className="text-gray-400">
                  Manage admin users and roles
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-300">
                  Coming soon: Add, remove, and manage admin user roles and permissions.
                </p>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Entra ID Setup Guide */}
        <Card className="mt-8 bg-white/10 backdrop-blur-sm border-white/20">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Shield className="w-5 h-5 mr-2 text-blue-400" />
              Microsoft Entra ID Setup Guide
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-300 space-y-4">
            <p>To configure Microsoft Entra ID (Azure AD) authentication:</p>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>Go to the <a href="https://portal.azure.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Azure Portal</a></li>
              <li>Navigate to <strong>Microsoft Entra ID</strong> → <strong>App registrations</strong></li>
              <li>Click <strong>New registration</strong> and enter:
                <ul className="list-disc list-inside ml-6 mt-1">
                  <li>Name: TechFlow Admin Portal</li>
                  <li>Supported account types: Single tenant (or as required)</li>
                  <li>Redirect URI: Your app URL + /auth/callback</li>
                </ul>
              </li>
              <li>Copy the <strong>Application (client) ID</strong> and <strong>Directory (tenant) ID</strong></li>
              <li>Go to <strong>Certificates & secrets</strong> → Create a new client secret</li>
              <li>Configure the OAuth provider in your backend settings</li>
            </ol>
            <p className="text-amber-300 text-sm mt-4">
              Contact support@techflow.co.zw for assistance with enterprise SSO configuration.
            </p>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Admin;
