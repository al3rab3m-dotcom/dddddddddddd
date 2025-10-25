
import { useNavigate } from 'react-router-dom';
import BottomNavigation from '../../components/layout/BottomNavigation';

export default function Home() {
  const navigate = useNavigate();

  const features = [
    {
      title: 'Automated Trading',
      description: 'AI-powered bots execute trades 24/7 for optimal returns',
      icon: 'ri-robot-line',
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Smart Analytics',
      description: 'Advanced market analysis and real-time insights',
      icon: 'ri-line-chart-line',
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Secure Platform',
      description: 'Bank-level security with encrypted transactions',
      icon: 'ri-shield-check-line',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white">
        <div className="p-6 pt-12 pb-16">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-robot-line text-3xl"></i>
            </div>
            <h1 className="text-3xl font-bold mb-3" style={{fontFamily: 'Pacifico, serif'}}>
              TradingBot
            </h1>
            <p className="text-lg opacity-90 mb-6">
              Smart Trading Platform
            </p>
            <p className="text-sm opacity-80 max-w-md mx-auto leading-relaxed">
              Experience the future of automated cryptocurrency trading with our AI-powered platform. 
              Maximize your profits with intelligent trading strategies.
            </p>
          </div>

          <div className="flex justify-center space-x-4">
            <button
              onClick={() => navigate('/dashboard')}
              className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap"
            >
              Get Started
            </button>
            <button
              onClick={() => navigate('/trading')}
              className="border-2 border-white/30 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/10 transition-colors cursor-pointer whitespace-nowrap"
            >
              View Plans
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="p-6">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-3">Why Choose TradingBot?</h2>
          <p className="text-gray-600">Advanced features for professional trading</p>
        </div>

        <div className="space-y-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className={`bg-gradient-to-r ${feature.color} p-6 text-white`}>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                    <i className={`${feature.icon} text-xl`}></i>
                  </div>
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                </div>
                <p className="text-white/90 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="p-6">
        <div className="bg-gradient-to-r from-green-500 to-teal-600 rounded-2xl p-6 text-white">
          <h3 className="text-xl font-bold text-center mb-6">Platform Statistics</h3>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                <i className="ri-group-line text-xl"></i>
              </div>
              <p className="text-2xl font-bold">15,000+</p>
              <p className="text-sm opacity-90">Active Users</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                <i className="ri-coins-line text-xl"></i>
              </div>
              <p className="text-2xl font-bold">$2.5M+</p>
              <p className="text-sm opacity-90">Total Earnings</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                <i className="ri-trophy-line text-xl"></i>
              </div>
              <p className="text-2xl font-bold">98.7%</p>
              <p className="text-sm opacity-90">Success Rate</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="p-6 pb-8">
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-6 text-white text-center">
          <h3 className="text-xl font-bold mb-3">Start Trading Today</h3>
          <p className="text-sm opacity-90 mb-6 max-w-sm mx-auto">
            Join thousands of successful traders and start earning with our AI-powered trading bots
          </p>
          <button
            onClick={() => navigate('/register')}
            className="bg-white text-purple-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap"
          >
            Create Account
          </button>
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
}
