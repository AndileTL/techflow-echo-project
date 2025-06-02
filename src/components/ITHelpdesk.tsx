
import { ExternalLink, Headphones, MessageCircle, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ITHelpdesk = () => {
  const openHelpdeskPortal = () => {
    window.open('https://techflowzim.atlassian.net/servicedesk/customer/portal/1', '_blank');
  };

  return (
    <section id="it-helpdesk" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-800 to-blue-800 bg-clip-text text-transparent mb-4">
            IT Helpdesk Support
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Get immediate assistance with our comprehensive IT support portal. Create tickets, track requests, and get expert help 24/7.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Portal Access Card */}
          <Card className="bg-white shadow-xl border-purple-200 hover:shadow-2xl transition-all duration-300">
            <CardHeader className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-t-lg">
              <CardTitle className="flex items-center space-x-3">
                <Headphones size={24} />
                <span>Service Desk Portal</span>
              </CardTitle>
              <CardDescription className="text-purple-100">
                Access our comprehensive IT support system
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3 text-gray-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Create and track support tickets</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>24/7 technical assistance</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Priority-based ticket management</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Knowledge base and resources</span>
                </div>
              </div>
              
              <Button 
                onClick={openHelpdeskPortal}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-3"
              >
                <ExternalLink className="mr-2" size={18} />
                Open IT Helpdesk Portal
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information Card */}
          <Card className="bg-white shadow-xl border-blue-200 hover:shadow-2xl transition-all duration-300">
            <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-lg">
              <CardTitle className="flex items-center space-x-3">
                <MessageCircle size={24} />
                <span>Direct Support</span>
              </CardTitle>
              <CardDescription className="text-blue-100">
                Multiple ways to reach our support team
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                  <Phone className="text-purple-600" size={20} />
                  <div>
                    <p className="font-semibold text-gray-800">Emergency Support</p>
                    <p className="text-gray-600">+2638677211025</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                  <Mail className="text-blue-600" size={20} />
                  <div>
                    <p className="font-semibold text-gray-800">Support Email</p>
                    <p className="text-gray-600">support@techflow.co.zw</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-100 to-blue-100 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Support Hours</h4>
                  <p className="text-sm text-gray-600">
                    24/7 Emergency Support<br/>
                    Business Hours: Monday - Friday, 8AM - 6PM CAT<br/>
                    Weekend Support: Available for critical issues
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Information */}
        <div className="mt-12 text-center">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-3xl mx-auto border border-purple-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Need Help Getting Started?</h3>
            <p className="text-gray-600 mb-6">
              Our TechFlow AI Assistant can help guide you to the right support resources and even help you create support tickets. 
              Chat with our AI for instant assistance or use the portal above for comprehensive support services.
            </p>
            <div className="flex justify-center space-x-4">
              <Button 
                variant="outline" 
                className="border-purple-300 text-purple-600 hover:bg-purple-50"
              >
                Chat with AI Assistant
              </Button>
              <Button 
                onClick={openHelpdeskPortal}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
              >
                Go to Portal
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ITHelpdesk;
