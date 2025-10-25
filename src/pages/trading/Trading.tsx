import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import BottomNavigation from '../../components/layout/BottomNavigation';

export default function Trading() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('plans');

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
      navigate('/login');
    }
  }, [navigate]);

  const investmentPlans = [
    {
      name: t('arbitrageBot'),
      minDeposit: '20 USDT',
      maxDeposit: '499 USDT',
      dailyReturn: '2.3%',
      color: 'from-blue-500 to-blue-600',
      icon: 'ri-robot-line',
      description: 'Automated arbitrage trading across multiple exchanges',
      features: ['24/7 Trading', 'Low Risk', 'Stable Returns'],
      image: 'https://readdy.ai/api/search-image?query=Professional%20automated%20trading%20robot%20with%20blue%20LED%20lights%20and%20digital%20screens%20displaying%20cryptocurrency%20arbitrage%20data%2C%20modern%20financial%20AI%20technology%20with%20holographic%20charts%20and%20market%20analysis%20interfaces%2C%20sleek%20blue%20and%20silver%20design&width=400&height=250&seq=arbitrage-robot-1&orientation=landscape'
    },
    {
      name: t('networkStrategy'),
      minDeposit: '500 USDT',
      maxDeposit: '2,999 USDT',
      dailyReturn: '3.3%',
      color: 'from-purple-500 to-purple-600',
      icon: 'ri-network-line',
      description: 'Advanced network analysis and strategic positioning',
      features: ['AI Powered', 'Medium Risk', 'Higher Returns'],
      image: 'https://readdy.ai/api/search-image?query=Advanced%20AI%20trading%20robot%20with%20purple%20neon%20accents%20and%20multiple%20network%20connection%20displays%2C%20sophisticated%20machine%20learning%20algorithms%20visualized%20through%20glowing%20neural%20network%20patterns%2C%20futuristic%20purple%20and%20black%20color%20scheme&width=400&height=250&seq=network-robot-1&orientation=landscape'
    },
    {
      name: t('smartHoldings'),
      minDeposit: '3,000 USDT',
      maxDeposit: '50,000 USDT',
      dailyReturn: '4.3%',
      color: 'from-green-500 to-green-600',
      icon: 'ri-brain-line',
      description: 'Smart portfolio management with machine learning',
      features: ['ML Algorithm', 'Premium', 'Maximum Returns'],
      image: 'https://readdy.ai/api/search-image?query=Cutting-edge%20smart%20trading%20robot%20with%20green%20holographic%20displays%20showing%20portfolio%20management%20data%2C%20advanced%20machine%20learning%20brain%20interface%20with%20glowing%20green%20circuits%20and%20cryptocurrency%20symbols%2C%20premium%20high-tech%20design&width=400&height=250&seq=smart-robot-1&orientation=landscape'
    }
  ];

  const activeInvestments = [
    {
      plan: 'Arbitrage Bot 1',
      amount: '500 USDT',
      dailyEarnings: '11.50 USDT',
      totalEarned: '230.00 USDT',
      daysActive: 20,
      status: 'active',
      color: 'from-blue-500 to-blue-600'
    },
    {
      plan: 'Network Strategy 2',
      amount: '1000 USDT',
      dailyEarnings: '33.00 USDT',
      totalEarned: '165.00 USDT',
      daysActive: 5,
      status: 'active',
      color: 'from-purple-500 to-purple-600'
    },
    {
      plan: 'Smart Holdings 3',
      amount: '3000 USDT',
      dailyEarnings: '129.00 USDT',
      totalEarned: '387.00 USDT',
      daysActive: 3,
      status: 'paused',
      color: 'from-green-500 to-green-600'
    }
  ];

  const handleInvest = (planName: string) => {
    navigate('/deposit');
  };

  const toggleInvestment = (index: number) => {
    // Simulate pause/resume functionality
    console.log(`Toggling investment ${index}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mr-3">
              <i className="ri-line-chart-line text-xl"></i>
            </div>
            <div>
              <h1 className="text-xl font-bold">{t('trading')}</h1>
              <p className="text-sm opacity-90">Smart Investment Strategies</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white border-b border-gray-200">
        <div className="flex">
          <button
            onClick={() => setActiveTab('plans')}
            className={`flex-1 py-4 px-6 text-center font-medium transition-colors cursor-pointer whitespace-nowrap ${
              activeTab === 'plans'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            Investment Plans
          </button>
          <button
            onClick={() => setActiveTab('active')}
            className={`flex-1 py-4 px-6 text-center font-medium transition-colors cursor-pointer whitespace-nowrap ${
              activeTab === 'active'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            My Investments
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {activeTab === 'plans' && (
          <div className="space-y-4">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                  <i className="ri-information-line text-white text-sm"></i>
                </div>
                <h3 className="font-semibold text-blue-800">Trading Information</h3>
              </div>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• All plans can be paused and restarted anytime</li>
                <li>• Capital and profits are guaranteed</li>
                <li>• Free withdrawal at any time</li>
                <li>• Automated trading with smart robots</li>
              </ul>
            </div>

            {investmentPlans.map((plan, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                {/* Robot Image Section */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={plan.image}
                    alt={`${plan.name} Trading Robot`}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className={`absolute top-4 left-4 bg-gradient-to-r ${plan.color} px-3 py-1 rounded-full`}>
                    <span className="text-white text-sm font-medium">{plan.name}</span>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                      <i
                        className={`${plan.icon} text-xl`}
                        style={{
                          color: plan.color.includes('blue')
                            ? '#3B82F6'
                            : plan.color.includes('purple')
                            ? '#8B5CF6'
                            : '#10B981'
                        }}
                      ></i>
                    </div>
                  </div>
                </div>

                <div className={`bg-gradient-to-r ${plan.color} p-4 text-white`}>
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <p className="text-sm opacity-90">{plan.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 text-sm">
                    {plan.features.map((feature, idx) => (
                      <span key={idx} className="bg-white/20 px-2 py-1 rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-4">
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="text-center">
                      <p className="text-xs text-gray-600">Daily Return</p>
                      <p className="text-lg font-bold text-green-600">{plan.dailyReturn}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xs text-gray-600">Min Deposit</p>
                      <p className="text-sm font-semibold">{plan.minDeposit}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xs text-gray-600">Max Deposit</p>
                      <p className="text-sm font-semibold">{plan.maxDeposit}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleInvest(plan.name)}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all cursor-pointer whitespace-nowrap"
                  >
                    Invest Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'active' && (
          <div className="space-y-4">
            {activeInvestments.length === 0 ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-pie-chart-line text-2xl text-gray-400"></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-600 mb-2">No Active Investments</h3>
                <p className="text-gray-500 mb-4">Start investing to see your active plans here</p>
                <button
                  onClick={() => setActiveTab('plans')}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap"
                >
                  View Investment Plans
                </button>
              </div>
            ) : (
              <>
                {activeInvestments.map((investment, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className={`bg-gradient-to-r ${investment.color} p-4 text-white`}>
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-bold text-lg">{investment.plan}</h3>
                          <p className="text-sm opacity-90">Amount: {investment.amount}</p>
                        </div>
                        <div className="text-right">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-medium ${
                              investment.status === 'active' ? 'bg-green-500/20 text-green-100' : 'bg-yellow-500/20 text-yellow-100'
                            }`}
                          >
                            {investment.status === 'active' ? 'Active' : 'Paused'}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                          <p className="text-xs text-gray-600">Daily Earnings</p>
                          <p className="text-lg font-bold text-green-600">{investment.dailyEarnings}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-600">Total Earned</p>
                          <p className="text-lg font-bold text-blue-600">{investment.totalEarned}</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm text-gray-600">
                          Days Active: <span className="font-semibold">{investment.daysActive}</span>
                        </span>
                      </div>
                      <div className="flex space-x-2">
                        <button
                          onClick={() => toggleInvestment(index)}
                          className={`flex-1 py-2 px-4 rounded-lg font-medium transition-colors cursor-pointer whitespace-nowrap ${
                            investment.status === 'active' ? 'bg-yellow-500 hover:bg-yellow-600 text-white' : 'bg-green-500 hover:bg-green-600 text-white'
                          }`}
                        >
                          {investment.status === 'active' ? 'Pause' : 'Resume'}
                        </button>
                        <button className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg font-medium transition-colors cursor-pointer whitespace-nowrap">
                          Withdraw
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        )}
      </div>

      <BottomNavigation />
    </div>
  );
}
