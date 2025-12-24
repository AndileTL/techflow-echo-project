import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Loader2, ArrowLeft, Check, Palette } from 'lucide-react';

interface Theme {
  id: string;
  name: string;
  primary_color: string;
  secondary_color: string;
  accent_color: string;
  gradient_start: string;
  gradient_end: string;
  is_active: boolean;
}

const AdminThemes = () => {
  const { user, loading, isAdmin } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [themes, setThemes] = useState<Theme[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [editingTheme, setEditingTheme] = useState<Theme | null>(null);

  useEffect(() => {
    if (!loading && !user) {
      navigate('/auth');
    }
  }, [user, loading, navigate]);

  useEffect(() => {
    if (user && isAdmin) {
      fetchThemes();
    }
  }, [user, isAdmin]);

  const fetchThemes = async () => {
    try {
      const { data, error } = await supabase
        .from('theme_settings')
        .select('*')
        .order('name');

      if (error) throw error;
      setThemes(data || []);
    } catch (error) {
      console.error('Error fetching themes:', error);
      toast({
        title: 'Error',
        description: 'Failed to load themes',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleActivateTheme = async (themeId: string) => {
    setIsSaving(true);
    try {
      // First, deactivate all themes
      await supabase
        .from('theme_settings')
        .update({ is_active: false })
        .neq('id', '00000000-0000-0000-0000-000000000000');

      // Then activate the selected theme
      const { error } = await supabase
        .from('theme_settings')
        .update({ is_active: true })
        .eq('id', themeId);

      if (error) throw error;

      toast({
        title: 'Theme activated',
        description: 'The theme has been activated successfully.',
      });

      fetchThemes();
    } catch (error) {
      console.error('Error activating theme:', error);
      toast({
        title: 'Error',
        description: 'Failed to activate theme',
        variant: 'destructive',
      });
    } finally {
      setIsSaving(false);
    }
  };

  const handleSaveTheme = async () => {
    if (!editingTheme) return;
    
    setIsSaving(true);
    try {
      const { error } = await supabase
        .from('theme_settings')
        .update({
          primary_color: editingTheme.primary_color,
          secondary_color: editingTheme.secondary_color,
          accent_color: editingTheme.accent_color,
          gradient_start: editingTheme.gradient_start,
          gradient_end: editingTheme.gradient_end,
        })
        .eq('id', editingTheme.id);

      if (error) throw error;

      toast({
        title: 'Theme saved',
        description: 'Theme colors have been updated.',
      });

      setEditingTheme(null);
      fetchThemes();
    } catch (error) {
      console.error('Error saving theme:', error);
      toast({
        title: 'Error',
        description: 'Failed to save theme',
        variant: 'destructive',
      });
    } finally {
      setIsSaving(false);
    }
  };

  const hslToHex = (hsl: string): string => {
    const parts = hsl.split(' ');
    const h = parseFloat(parts[0]) || 0;
    const s = parseFloat(parts[1]) / 100 || 0;
    const l = parseFloat(parts[2]) / 100 || 0;

    const c = (1 - Math.abs(2 * l - 1)) * s;
    const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
    const m = l - c / 2;

    let r = 0, g = 0, b = 0;

    if (0 <= h && h < 60) { r = c; g = x; b = 0; }
    else if (60 <= h && h < 120) { r = x; g = c; b = 0; }
    else if (120 <= h && h < 180) { r = 0; g = c; b = x; }
    else if (180 <= h && h < 240) { r = 0; g = x; b = c; }
    else if (240 <= h && h < 300) { r = x; g = 0; b = c; }
    else if (300 <= h && h < 360) { r = c; g = 0; b = x; }

    r = Math.round((r + m) * 255);
    g = Math.round((g + m) * 255);
    b = Math.round((b + m) * 255);

    return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
  };

  if (loading || isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-white" />
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center">
        <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-8">
          <p className="text-white text-center">You don't have permission to access this page.</p>
          <Link to="/admin" className="block mt-4">
            <Button className="w-full">Back to Dashboard</Button>
          </Link>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Header */}
      <header className="bg-white/10 backdrop-blur-sm border-b border-white/20">
        <div className="container mx-auto px-4 py-4 flex items-center space-x-4">
          <Link to="/admin">
            <Button variant="ghost" className="text-white hover:bg-white/10">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
          </Link>
          <div className="flex items-center space-x-3">
            <Palette className="w-6 h-6 text-purple-400" />
            <h1 className="text-xl font-bold text-white">Theme Management</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {themes.map((theme) => (
            <Card
              key={theme.id}
              className={`bg-white/10 backdrop-blur-sm border-2 transition-all ${
                theme.is_active ? 'border-green-500' : 'border-white/20'
              }`}
            >
              <CardHeader>
                <CardTitle className="text-white flex items-center justify-between">
                  <span>{theme.name}</span>
                  {theme.is_active && (
                    <span className="text-xs bg-green-500 text-white px-2 py-1 rounded-full flex items-center">
                      <Check className="w-3 h-3 mr-1" /> Active
                    </span>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Color Preview */}
                <div className="flex space-x-2">
                  <div
                    className="w-12 h-12 rounded-lg border border-white/30"
                    style={{ backgroundColor: hslToHex(theme.primary_color) }}
                    title="Primary"
                  />
                  <div
                    className="w-12 h-12 rounded-lg border border-white/30"
                    style={{ backgroundColor: hslToHex(theme.secondary_color) }}
                    title="Secondary"
                  />
                  <div
                    className="w-12 h-12 rounded-lg border border-white/30"
                    style={{ backgroundColor: hslToHex(theme.accent_color) }}
                    title="Accent"
                  />
                  <div
                    className="w-12 h-12 rounded-lg border border-white/30"
                    style={{
                      background: `linear-gradient(135deg, ${hslToHex(theme.gradient_start)}, ${hslToHex(theme.gradient_end)})`,
                    }}
                    title="Gradient"
                  />
                </div>

                {/* Edit Form */}
                {editingTheme?.id === theme.id ? (
                  <div className="space-y-3">
                    <div>
                      <Label className="text-gray-300 text-xs">Primary (H S% L%)</Label>
                      <Input
                        value={editingTheme.primary_color}
                        onChange={(e) =>
                          setEditingTheme({ ...editingTheme, primary_color: e.target.value })
                        }
                        className="bg-white/10 border-white/30 text-white text-sm"
                        placeholder="0 72% 51%"
                      />
                    </div>
                    <div>
                      <Label className="text-gray-300 text-xs">Secondary (H S% L%)</Label>
                      <Input
                        value={editingTheme.secondary_color}
                        onChange={(e) =>
                          setEditingTheme({ ...editingTheme, secondary_color: e.target.value })
                        }
                        className="bg-white/10 border-white/30 text-white text-sm"
                        placeholder="142 76% 36%"
                      />
                    </div>
                    <div>
                      <Label className="text-gray-300 text-xs">Accent (H S% L%)</Label>
                      <Input
                        value={editingTheme.accent_color}
                        onChange={(e) =>
                          setEditingTheme({ ...editingTheme, accent_color: e.target.value })
                        }
                        className="bg-white/10 border-white/30 text-white text-sm"
                        placeholder="45 93% 47%"
                      />
                    </div>
                    <div className="flex space-x-2">
                      <Button
                        onClick={handleSaveTheme}
                        disabled={isSaving}
                        className="flex-1 bg-green-600 hover:bg-green-700"
                      >
                        {isSaving ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Save'}
                      </Button>
                      <Button
                        onClick={() => setEditingTheme(null)}
                        variant="outline"
                        className="flex-1 border-white/30 text-white hover:bg-white/10"
                      >
                        Cancel
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="flex space-x-2">
                    <Button
                      onClick={() => setEditingTheme(theme)}
                      variant="outline"
                      className="flex-1 border-white/30 text-white hover:bg-white/10"
                    >
                      Edit Colors
                    </Button>
                    {!theme.is_active && (
                      <Button
                        onClick={() => handleActivateTheme(theme.id)}
                        disabled={isSaving}
                        className="flex-1 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
                      >
                        Activate
                      </Button>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default AdminThemes;
