
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import BottomNavigation from '../../components/layout/BottomNavigation';
import LanguageSelector from '../../components/base/LanguageSelector';

export default function Dashboard() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [balance] = useState(1250.75);
  const [totalEarnings] = useState(456.32);
  const [activeInvestments] = useState(3);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/login');
  };

  const cryptocurrencies = [
    {
      name: 'Bitcoin',
      symbol: 'BTC',
      price: '$67,234.56',
      change: '+2.34%',
      changeType: 'positive',
      icon: '₿',
      color: 'from-orange-500 to-orange-600'
    },
    {
      name: 'Ethereum',
      symbol: 'ETH',
      price: '$3,845.92',
      change: '+1.87%',
      changeType: 'positive',
      icon: 'Ξ',
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: 'Tether',
      symbol: 'USDT',
      price: '$1.00',
      change: '+0.01%',
      changeType: 'positive',
      icon: '₮',
      color: 'from-green-500 to-green-600'
    },
    {
      name: 'BNB',
      symbol: 'BNB',
      price: '$645.23',
      change: '-0.56%',
      changeType: 'negative',
      icon: 'B',
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      name: 'Solana',
      symbol: 'SOL',
      price: '$198.76',
      change: '+4.12%',
      changeType: 'positive',
      icon: 'S',
      color: 'from-purple-500 to-purple-600'
    },
    {
      name: 'Cardano',
      symbol: 'ADA',
      price: '$0.87',
      change: '+2.91%',
      changeType: 'positive',
      icon: 'A',
      color: 'from-indigo-500 to-indigo-600'
    }
  ];

  const quickActions = [
    {
      name: t('deposit'),
      icon: 'ri-add-circle-line',
      color: 'bg-green-500',
      path: '/deposit'
    },
    {
      name: t('withdraw'),
      icon: 'ri-subtract-line',
      color: 'bg-red-500',
      path: '/withdraw'
    },
    {
      name: t('team'),
      icon: 'ri-team-line',
      color: 'bg-blue-500',
      path: '/team'
    },
    {
      name: t('teamInvite'),
      icon: 'ri-user-add-line',
      color: 'bg-purple-500',
      path: '/team-invite'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mr-3">
              <i className="ri-robot-line text-xl"></i>
            </div>
            <div>
              <h1 className="text-xl font-bold" style={{fontFamily: 'Pacifico, serif'}}>TradingBot</h1>
              <p className="text-sm opacity-90">Smart Trading Platform</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <LanguageSelector />
            <button
              onClick={handleLogout}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-colors cursor-pointer"
            >
              <i className="ri-logout-circle-line"></i>
            </button>
          </div>
        </div>

        {/* Balance Cards */}
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center">
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
              <i className="ri-wallet-line"></i>
            </div>
            <p className="text-xs opacity-80">{t('balance')}</p>
            <p className="text-lg font-bold">${balance.toFixed(2)}</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center">
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
              <i className="ri-coins-line"></i>
            </div>
            <p className="text-xs opacity-80">{t('totalEarnings')}</p>
            <p className="text-lg font-bold">${totalEarnings.toFixed(2)}</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center">
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
              <i className="ri-pie-chart-line"></i>
            </div>
            <p className="text-xs opacity-80">{t('activeInvestments')}</p>
            <p className="text-lg font-bold">{activeInvestments}</p>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 gap-3">
          {quickActions.map((action, index) => (
            <button
              key={index}
              onClick={() => navigate(action.path)}
              className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-all cursor-pointer"
            >
              <div className={`w-12 h-12 ${action.color} rounded-full flex items-center justify-center mx-auto mb-3`}>
                <i className={`${action.icon} text-white text-xl`}></i>
              </div>
              <p className="text-sm font-medium text-gray-800 text-center">{action.name}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Cryptocurrency Prices */}
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Cryptocurrency Prices</h2>
        <div className="space-y-3">
          {cryptocurrencies.map((crypto, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className={`w-12 h-12 bg-gradient-to-r ${crypto.color} rounded-full flex items-center justify-center mr-4`}>
                    <span className="text-white text-lg font-bold">{crypto.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">{crypto.name}</h3>
                    <p className="text-sm text-gray-600">{crypto.symbol}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-gray-800">{crypto.price}</p>
                  <p className={`text-sm font-medium ${
                    crypto.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {crypto.change}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Support Buttons */}
      <div className="p-4 pb-8">
        <div className="grid grid-cols-2 gap-3">
          <button className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-xl font-medium transition-colors cursor-pointer whitespace-nowrap">
            <i className="ri-customer-service-line mr-2"></i>
            {t('customerService')}
          </button>
          <button className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-xl font-medium transition-colors cursor-pointer whitespace-nowrap">
            <i className="ri-group-line mr-2"></i>
            {t('officialGroup')}
          </button>
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
}
