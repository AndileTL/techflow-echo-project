import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { Loader2, ArrowLeft, MessageSquare, Mail, Phone, Building, Calendar, Trash2, Download, Search } from 'lucide-react';
import { format } from 'date-fns';

interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  company: string | null;
  service: string | null;
  message: string;
  status: string;
  created_at: string;
  customer_type?: string | null;
  customer_status?: string | null;
  source?: string | null;
  services?: string[] | null;
}

const AdminContacts = () => {
  const { user, loading, isAdmin } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [contacts, setContacts] = useState<ContactSubmission[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [updatingId, setUpdatingId] = useState<string | null>(null);
  const [search, setSearch] = useState('');
  const [sourceFilter, setSourceFilter] = useState<string>('all');
  const [statusFilter, setStatusFilter] = useState<string>('all');

  useEffect(() => {
    if (!loading && !user) {
      navigate('/auth');
    }
  }, [user, loading, navigate]);

  useEffect(() => {
    if (user && isAdmin) {
      fetchContacts();
    }
  }, [user, isAdmin]);

  const fetchContacts = async () => {
    try {
      const { data, error } = await supabase
        .from('contact_submissions')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setContacts(data || []);
    } catch (error) {
      console.error('Error fetching contacts:', error);
      toast({
        title: 'Error',
        description: 'Failed to load contact submissions',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleStatusChange = async (id: string, newStatus: string) => {
    setUpdatingId(id);
    try {
      const { error } = await supabase
        .from('contact_submissions')
        .update({ status: newStatus })
        .eq('id', id);

      if (error) throw error;

      setContacts(contacts.map(c => c.id === id ? { ...c, status: newStatus } : c));

      toast({
        title: 'Status updated',
        description: `Contact status changed to ${newStatus}`,
      });
    } catch (error) {
      console.error('Error updating status:', error);
      toast({
        title: 'Error',
        description: 'Failed to update status',
        variant: 'destructive',
      });
    } finally {
      setUpdatingId(null);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this submission?')) return;

    setUpdatingId(id);
    try {
      const { error } = await supabase
        .from('contact_submissions')
        .delete()
        .eq('id', id);

      if (error) throw error;

      setContacts(contacts.filter(c => c.id !== id));

      toast({
        title: 'Deleted',
        description: 'Contact submission has been deleted',
      });
    } catch (error) {
      console.error('Error deleting contact:', error);
      toast({
        title: 'Error',
        description: 'Failed to delete submission',
        variant: 'destructive',
      });
    } finally {
      setUpdatingId(null);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new':
        return 'bg-blue-500';
      case 'in_progress':
      case 'contacted':
        return 'bg-yellow-500';
      case 'won':
        return 'bg-emerald-500';
      case 'completed':
        return 'bg-green-500';
      case 'closed':
      case 'archived':
        return 'bg-gray-500';
      default:
        return 'bg-gray-500';
    }
  };

  const filtered = contacts.filter((c) => {
    if (sourceFilter !== 'all' && (c.source || 'contact_form') !== sourceFilter) return false;
    if (statusFilter !== 'all' && c.status !== statusFilter) return false;
    if (search) {
      const s = search.toLowerCase();
      if (!c.name.toLowerCase().includes(s) && !c.email.toLowerCase().includes(s) && !(c.company || '').toLowerCase().includes(s)) return false;
    }
    return true;
  });

  const exportCSV = () => {
    const headers = ['Date','Source','Customer Type','Status','Name','Company','Email','Phone','Services','Message','Lead Status'];
    const rows = filtered.map((c) => [
      format(new Date(c.created_at), 'yyyy-MM-dd HH:mm'),
      c.source || 'contact_form',
      c.customer_type || '',
      c.customer_status || '',
      c.name, c.company || '', c.email, c.phone || '',
      (c.services || []).join(' | '),
      (c.message || '').replace(/\n/g, ' '),
      c.status,
    ]);
    const csv = [headers, ...rows].map((r) => r.map((v) => `"${String(v).replace(/"/g, '""')}"`).join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = `techflow-leads-${Date.now()}.csv`; a.click();
    URL.revokeObjectURL(url);
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
            <MessageSquare className="w-6 h-6 text-blue-400" />
            <h1 className="text-xl font-bold text-white">Lead Management</h1>
            <Badge variant="secondary">{filtered.length} / {contacts.length}</Badge>
          </div>
          <div className="ml-auto">
            <Button onClick={exportCSV} size="sm" variant="secondary"><Download className="w-4 h-4 mr-1" />Export CSV</Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Filters */}
        <div className="mb-6 grid gap-3 sm:grid-cols-[1fr_auto_auto]">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            <Input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search name, email, company..."
              className="pl-9 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
            />
          </div>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-44 bg-white/10 border-white/20 text-white"><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All statuses</SelectItem>
              <SelectItem value="new">New</SelectItem>
              <SelectItem value="contacted">Contacted</SelectItem>
              <SelectItem value="in_progress">In Progress</SelectItem>
              <SelectItem value="won">Won</SelectItem>
              <SelectItem value="closed">Closed</SelectItem>
            </SelectContent>
          </Select>
          <Tabs value={sourceFilter} onValueChange={setSourceFilter}>
            <TabsList className="bg-white/10">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="contact_form">Contact</TabsTrigger>
              <TabsTrigger value="consultation">Consultation</TabsTrigger>
              <TabsTrigger value="whatsapp_flow">WhatsApp</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {filtered.length === 0 ? (
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-12 text-center">
              <MessageSquare className="w-16 h-16 text-gray-500 mx-auto mb-4" />
              <p className="text-gray-400 text-lg">No leads match your filters</p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-4">
            {filtered.map((contact) => (
              <Card key={contact.id} className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-white flex items-center space-x-2">
                        <span>{contact.name}</span>
                        <Badge className={getStatusColor(contact.status)}>{contact.status}</Badge>
                        {contact.source && contact.source !== 'contact_form' && (
                          <Badge variant="outline" className="text-xs text-white border-white/30">{contact.source.replace('_', ' ')}</Badge>
                        )}
                        {contact.customer_type && (
                          <Badge variant="outline" className="text-xs text-white border-white/30">{contact.customer_type}</Badge>
                        )}
                      </CardTitle>
                      <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-400">
                        <span className="flex items-center">
                          <Mail className="w-4 h-4 mr-1" />
                          {contact.email}
                        </span>
                        {contact.phone && (
                          <span className="flex items-center">
                            <Phone className="w-4 h-4 mr-1" />
                            {contact.phone}
                          </span>
                        )}
                        {contact.company && (
                          <span className="flex items-center">
                            <Building className="w-4 h-4 mr-1" />
                            {contact.company}
                          </span>
                        )}
                        <span className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {format(new Date(contact.created_at), 'MMM d, yyyy h:mm a')}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Select
                        value={contact.status}
                        onValueChange={(value) => handleStatusChange(contact.id, value)}
                        disabled={updatingId === contact.id}
                      >
                        <SelectTrigger className="w-32 bg-white/10 border-white/30 text-white">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="new">New</SelectItem>
                          <SelectItem value="contacted">Contacted</SelectItem>
                          <SelectItem value="in_progress">In Progress</SelectItem>
                          <SelectItem value="won">Won</SelectItem>
                          <SelectItem value="closed">Closed</SelectItem>
                        </SelectContent>
                      </Select>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleDelete(contact.id)}
                        disabled={updatingId === contact.id}
                        className="text-red-400 hover:text-red-300 hover:bg-red-500/20"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  {contact.services && contact.services.length > 0 && (
                    <div className="flex flex-wrap gap-1 mb-2">
                      {contact.services.map((s) => (
                        <Badge key={s} variant="outline" className="text-xs text-purple-200 border-purple-400/40">{s}</Badge>
                      ))}
                    </div>
                  )}
                  {contact.service && (
                    <p className="text-sm text-purple-300 mb-2">
                      <strong>Service:</strong> {contact.service}
                    </p>
                  )}
                  <p className="text-gray-300 whitespace-pre-wrap">{contact.message}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminContacts;
