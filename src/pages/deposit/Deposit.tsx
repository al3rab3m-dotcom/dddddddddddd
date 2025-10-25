
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import BottomNavigation from '../../components/layout/BottomNavigation';

export default function Deposit() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [amount, setAmount] = useState('');
  const [selectedPlan, setSelectedPlan] = useState('arbitrage');
  const [depositAddress] = useState('0x742b4c0753E121C71F5B1C92c8c8C8C8c8c8c8c8');
  const [isMonitoring, setIsMonitoring] = useState(false);
  const [depositStatus, setDepositStatus] = useState('');
  const [pendingDeposits, setPendingDeposits] = useState([]);
  const [transactionHash, setTransactionHash] = useState('');

  const investmentPlans = [
    {
      id: 'arbitrage',
      name: t('arbitrageBot'),
      minDeposit: 20,
      maxDeposit: 499,
      dailyReturn: '2.3%',
      color: 'from-blue-500 to-blue-600',
      icon: 'ri-robot-line',
      image: 'https://readdy.ai/api/search-image?query=Professional%20automated%20trading%20robot%20with%20blue%20LED%20lights%20and%20digital%20screens%20displaying%20cryptocurrency%20arbitrage%20data%2C%20modern%20financial%20AI%20technology%20with%20holographic%20charts%20and%20market%20analysis%20interfaces%2C%20sleek%20blue%20and%20silver%20design&width=300&height=200&seq=arbitrage-robot-2&orientation=landscape'
    },
    {
      id: 'network',
      name: t('networkStrategy'),
      minDeposit: 500,
      maxDeposit: 2999,
      dailyReturn: '3.3%',
      color: 'from-purple-500 to-purple-600',
      icon: 'ri-network-line',
      image: 'https://readdy.ai/api/search-image?query=Advanced%20AI%20trading%20robot%20with%20purple%20neon%20accents%20and%20multiple%20network%20connection%20displays%2C%20sophisticated%20machine%20learning%20algorithms%20visualized%20through%20glowing%20neural%20network%20patterns%2C%20futuristic%20purple%20and%20black%20color%20scheme&width=300&height=200&seq=network-robot-2&orientation=landscape'
    },
    {
      id: 'smart',
      name: t('smartHoldings'),
      minDeposit: 3000,
      maxDeposit: 50000,
      dailyReturn: '4.3%',
      color: 'from-green-500 to-green-600',
      icon: 'ri-brain-line',
      image: 'https://readdy.ai/api/search-image?query=Cutting-edge%20smart%20trading%20robot%20with%20green%20holographic%20displays%20showing%20portfolio%20management%20data%2C%20advanced%20machine%20learning%20brain%20interface%20with%20glowing%20green%20circuits%20and%20cryptocurrency%20symbols%2C%20premium%20high-tech%20design&width=300&height=200&seq=smart-robot-2&orientation=landscape'
    }
  ];

  const selectedPlanData = investmentPlans.find(plan => plan.id === selectedPlan);

  // Auto-monitor deposits when amount is entered
  useEffect(() => {
    if (amount && parseFloat(amount) >= 20) {
      startDepositMonitoring();
    } else {
      stopDepositMonitoring();
    }
  }, [amount]);

  const startDepositMonitoring = () => {
    setIsMonitoring(true);
    setDepositStatus('Monitoring for deposits...');
    
    // Simulate blockchain monitoring
    const monitorInterval = setInterval(() => {
      // In real implementation, this would call BSC/BEP20 API
      checkForDeposits();
    }, 5000);

    // Store interval ID for cleanup
    return () => clearInterval(monitorInterval);
  };

  const stopDepositMonitoring = () => {
    setIsMonitoring(false);
    setDepositStatus('');
  };

  const checkForDeposits = async () => {
    try {
      // Simulate checking BSC blockchain for USDT transfers
      // In real implementation, use BSCScan API or Web3 provider
      const simulatedDeposit = Math.random() > 0.9; // 10% chance of simulated deposit
      
      if (simulatedDeposit && amount) {
        const depositAmount = parseFloat(amount);
        const txHash = generateTransactionHash();
        
        setTransactionHash(txHash);
        setDepositStatus('Deposit detected! Processing...');
        
        // Simulate confirmation process
        setTimeout(() => {
          processDeposit(depositAmount, txHash);
        }, 3000);
      }
    } catch (error) {
      console.error('Error checking deposits:', error);
      setDepositStatus('Error monitoring deposits. Please try again.');
    }
  };

  const processDeposit = (depositAmount, txHash) => {
    // Add to pending deposits
    const newDeposit = {
      id: Date.now(),
      amount: depositAmount,
      txHash: txHash,
      timestamp: new Date().toISOString(),
      status: 'confirmed',
      plan: selectedPlan
    };

    setPendingDeposits(prev => [...prev, newDeposit]);
    setDepositStatus(`Deposit of ${depositAmount} USDT confirmed!`);
    
    // Auto-navigate to dashboard after successful deposit
    setTimeout(() => {
      navigate('/dashboard', { 
        state: { 
          newDeposit: newDeposit,
          message: `Successfully deposited ${depositAmount} USDT to ${selectedPlanData?.name}`
        }
      });
    }, 2000);
  };

  const generateTransactionHash = () => {
    return '0x' + Array.from({length: 64}, () => Math.floor(Math.random() * 16).toString(16)).join('');
  };

  const copyAddress = () => {
    navigator.clipboard.writeText(depositAddress).then(() => {
      const notification = document.createElement('div');
      notification.innerHTML = `
        <div style="
          position: fixed;
          top: 20px;
          right: 20px;
          background: #10B981;
          color: white;
          padding: 12px 20px;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          z-index: 1000;
          font-family: system-ui;
          font-size: 14px;
          display: flex;
          align-items: center;
          gap: 8px;
        ">
          <i class="ri-check-line"></i>
          Address copied successfully!
        </div>
      `;
      document.body.appendChild(notification);
      
      setTimeout(() => {
        if (notification.parentNode) {
          notification.parentNode.removeChild(notification);
        }
      }, 3000);
    });
  };

  const handlePlanSelect = (planId) => {
    setSelectedPlan(planId);
  };

  const handleManualCheck = () => {
    setDepositStatus('Checking blockchain...');
    setTimeout(() => {
      checkForDeposits();
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white p-4">
        <div className="flex items-center">
          <button
            onClick={() => navigate('/dashboard')}
            className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3 cursor-pointer"
          >
            <i className="ri-arrow-left-line text-xl"></i>
          </button>
          <div>
            <h1 className="text-xl font-bold">Auto Deposit</h1>
            <p className="text-sm opacity-90">USDT BEP20 Network</p>
          </div>
        </div>
      </div>

      <div className="p-4">
        {/* Auto-Deposit Status */}
        {isMonitoring && (
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              </div>
              <h3 className="font-semibold text-blue-800">Auto-Deposit Active</h3>
            </div>
            <p className="text-sm text-blue-700 mb-2">{depositStatus}</p>
            {transactionHash && (
              <div className="bg-white rounded-lg p-2 mt-2">
                <p className="text-xs text-gray-600">Transaction Hash:</p>
                <p className="text-xs font-mono text-blue-600 break-all">{transactionHash}</p>
              </div>
            )}
          </div>
        )}

        {/* Pending Deposits */}
        {pendingDeposits.length > 0 && (
          <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                <i className="ri-check-line text-white text-sm"></i>
              </div>
              <h3 className="font-semibold text-green-800">Recent Deposits</h3>
            </div>
            <div className="space-y-2">
              {pendingDeposits.map((deposit) => (
                <div key={deposit.id} className="bg-white rounded-lg p-3 border border-green-200">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium text-green-800">{deposit.amount} USDT</p>
                      <p className="text-xs text-gray-600">{new Date(deposit.timestamp).toLocaleString()}</p>
                    </div>
                    <span className="px-2 py-1 bg-green-500 text-white text-xs rounded-full">
                      Confirmed
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Plan Selection */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Select Investment Plan</h2>
          <div className="space-y-3">
            {investmentPlans.map((plan) => (
              <button
                key={plan.id}
                onClick={() => handlePlanSelect(plan.id)}
                className={`w-full rounded-xl border-2 transition-all cursor-pointer overflow-hidden ${
                  selectedPlan === plan.id
                    ? 'border-green-500 bg-green-50'
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
              >
                <div className="flex">
                  <div className="relative w-24 h-20 flex-shrink-0">
                    <img
                      src={plan.image}
                      alt={`${plan.name} Robot`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20"></div>
                  </div>
                  
                  <div className="flex-1 p-4 flex items-center justify-between">
                    <div className="flex items-center">
                      <div className={`w-10 h-10 bg-gradient-to-r ${plan.color} rounded-full flex items-center justify-center mr-3`}>
                        <i className={`${plan.icon} text-white text-lg`}></i>
                      </div>
                      <div className="text-left">
                        <h3 className="font-semibold text-gray-800">{plan.name}</h3>
                        <p className="text-sm text-gray-600">Daily Return: {plan.dailyReturn}</p>
                        <p className="text-xs text-gray-500">{plan.minDeposit} - {plan.maxDeposit} USDT</p>
                      </div>
                    </div>
                    {selectedPlan === plan.id ? (
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                        <i className="ri-check-line text-white text-sm"></i>
                      </div>
                    ) : (
                      <div className="w-6 h-6 border-2 border-gray-300 rounded-full flex items-center justify-center">
                        <i className="ri-arrow-right-line text-gray-400 text-sm"></i>
                      </div>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Amount Input */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Deposit Amount</h2>
          <div className="bg-white rounded-xl p-4 border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-gray-600">Amount (USDT)</span>
              <span className="text-sm text-gray-600">
                Min: {selectedPlanData?.minDeposit} | Max: {selectedPlanData?.maxDeposit}
              </span>
            </div>
            <div className="relative">
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full text-2xl font-bold text-gray-800 bg-transparent outline-none"
                placeholder="0.00"
                min={selectedPlanData?.minDeposit}
                max={selectedPlanData?.maxDeposit}
              />
              <span className="absolute right-0 top-1/2 transform -translate-y-1/2 text-lg font-semibold text-gray-600">
                USDT
              </span>
            </div>
            <div className="flex space-x-2 mt-4">
              {[100, 500, 1000, 5000].map((preset) => (
                <button
                  key={preset}
                  onClick={() => setAmount(preset.toString())}
                  className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm transition-colors cursor-pointer whitespace-nowrap"
                >
                  {preset}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Expected Returns */}
        {amount && (
          <div className="mb-6">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4 border border-blue-200">
              <h3 className="font-semibold text-gray-800 mb-3">Expected Returns</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-600">Daily Profit</p>
                  <p className="font-bold text-green-600">
                    +{(parseFloat(amount) * parseFloat(selectedPlanData!.dailyReturn) / 100).toFixed(2)} USDT
                  </p>
                </div>
                <div>
                  <p className="text-gray-600">Monthly Profit</p>
                  <p className="font-bold text-green-600">
                    +{(parseFloat(amount) * parseFloat(selectedPlanData!.dailyReturn) / 100 * 30).toFixed(2)} USDT
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Auto-Deposit Address */}
        <div className="mb-6">
          <div className="bg-gradient-to-r from-orange-50 to-yellow-50 border border-orange-200 rounded-xl p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mr-3">
                  <i className="ri-flashlight-line text-white text-sm"></i>
                </div>
                <h3 className="font-semibold text-gray-800">Auto-Deposit Address</h3>
              </div>
              {isMonitoring && (
                <div className="flex items-center text-green-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></div>
                  <span className="text-xs font-medium">Monitoring</span>
                </div>
              )}
            </div>
            <div className="bg-white rounded-lg p-3 border-dashed border-2 border-orange-300">
              <p className="text-sm font-mono text-gray-800 break-all mb-2">
                {depositAddress}
              </p>
              <div className="flex space-x-2">
                <button 
                  onClick={copyAddress}
                  className="text-xs text-blue-600 hover:text-blue-700 font-medium cursor-pointer"
                >
                  <i className="ri-file-copy-line mr-1"></i>Copy Address
                </button>
                <button 
                  onClick={handleManualCheck}
                  className="text-xs text-green-600 hover:text-green-700 font-medium cursor-pointer"
                >
                  <i className="ri-refresh-line mr-1"></i>Check Now
                </button>
              </div>
            </div>
            <div className="mt-3 p-3 bg-blue-50 rounded-lg">
              <div className="flex items-start">
                <i className="ri-information-line text-blue-600 mr-2 mt-0.5"></i>
                <div className="text-xs text-blue-700">
                  <p className="font-medium mb-1">Auto-Deposit Instructions:</p>
                  <ul className="space-y-1">
                    <li>• Send exact amount to the address above</li>
                    <li>• System automatically detects BEP20 USDT transfers</li>
                    <li>• Deposits are credited within 1-3 confirmations</li>
                    <li>• No manual confirmation required</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Network & Security Info */}
        <div className="mb-6">
          <div className="bg-gray-50 rounded-xl p-4">
            <h3 className="font-semibold text-gray-800 mb-3 flex items-center">
              <i className="ri-shield-check-line text-green-600 mr-2"></i>
              Network & Security
            </h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="space-y-2">
                <div className="flex items-center">
                  <i className="ri-check-line text-green-600 mr-2"></i>
                  <span className="text-gray-700">BEP20 Network</span>
                </div>
                <div className="flex items-center">
                  <i className="ri-check-line text-green-600 mr-2"></i>
                  <span className="text-gray-700">Auto-Detection</span>
                </div>
                <div className="flex items-center">
                  <i className="ri-check-line text-green-600 mr-2"></i>
                  <span className="text-gray-700">Real-time Monitoring</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center">
                  <i className="ri-check-line text-green-600 mr-2"></i>
                  <span className="text-gray-700">Instant Processing</span>
                </div>
                <div className="flex items-center">
                  <i className="ri-check-line text-green-600 mr-2"></i>
                  <span className="text-gray-700">Secure Transactions</span>
                </div>
                <div className="flex items-center">
                  <i className="ri-check-line text-green-600 mr-2"></i>
                  <span className="text-gray-700">24/7 Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Terms */}
        <div className="mb-6">
          <div className="bg-gray-50 rounded-xl p-4">
            <h3 className="font-semibold text-gray-800 mb-2">Important Terms</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Minimum deposit: 20 USDT</li>
              <li>• Auto-detection requires 1-3 block confirmations</li>
              <li>• Only BEP20 network supported for auto-deposits</li>
              <li>• Deposits from other networks require manual processing</li>
              <li>• System monitors deposits 24/7 automatically</li>
              <li>• Investment starts immediately after confirmation</li>
            </ul>
          </div>
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
}
