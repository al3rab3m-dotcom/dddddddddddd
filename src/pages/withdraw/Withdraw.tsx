import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import BottomNavigation from '../../components/layout/BottomNavigation';

export default function Withdraw() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [amount, setAmount] = useState('');
  const [address, setAddress] = useState('');
  const [availableBalance] = useState(1250.75);

  const handleWithdraw = () => {
    const numAmount = parseFloat(amount);
    if (!numAmount || numAmount < 10) {
      alert('Minimum withdrawal is 10 USDT');
      return;
    }
    if (numAmount > availableBalance) {
      alert('Insufficient balance');
      return;
    }
    if (!address) {
      alert('Please enter withdrawal address');
      return;
    }

    const fee = numAmount * 0.04;
    const receiveAmount = numAmount - fee;
    
    alert(`Withdrawal request submitted!\nAmount: ${numAmount} USDT\nFee: ${fee.toFixed(2)} USDT\nYou will receive: ${receiveAmount.toFixed(2)} USDT`);
    navigate('/dashboard');
  };

  const withdrawalFee = amount ? (parseFloat(amount) * 0.04).toFixed(2) : '0.00';
  const receiveAmount = amount ? (parseFloat(amount) - parseFloat(withdrawalFee)).toFixed(2) : '0.00';

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-600 to-pink-600 text-white p-4">
        <div className="flex items-center">
          <button
            onClick={() => navigate('/dashboard')}
            className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3 cursor-pointer"
          >
            <i className="ri-arrow-left-line text-xl"></i>
          </button>
          <div>
            <h1 className="text-xl font-bold">{t('withdraw')}</h1>
            <p className="text-sm opacity-90">USDT BEP20 Network</p>
          </div>
        </div>
      </div>

      <div className="p-4">
        {/* Balance Info */}
        <div className="bg-white rounded-xl p-4 mb-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Available Balance</p>
              <p className="text-2xl font-bold text-gray-800">{availableBalance.toFixed(2)} USDT</p>
            </div>
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
              <i className="ri-wallet-line text-white text-xl"></i>
            </div>
          </div>
        </div>

        {/* Withdrawal Form */}
        <div className="space-y-6">
          {/* Amount Input */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Withdrawal Amount</h2>
            <div className="bg-white rounded-xl p-4 border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-gray-600">Amount (USDT)</span>
                <span className="text-sm text-gray-600">Min: 10 USDT</span>
              </div>
              <div className="relative">
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full text-2xl font-bold text-gray-800 bg-transparent outline-none"
                  placeholder="0.00"
                  min="10"
                  max={availableBalance}
                />
                <span className="absolute right-0 top-1/2 transform -translate-y-1/2 text-lg font-semibold text-gray-600">
                  USDT
                </span>
              </div>
              <div className="flex space-x-2 mt-4">
                {[50, 100, 500, availableBalance].map((preset, index) => (
                  <button
                    key={index}
                    onClick={() => setAmount(preset.toString())}
                    className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm transition-colors cursor-pointer whitespace-nowrap"
                  >
                    {index === 3 ? 'All' : preset}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Address Input */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Withdrawal Address</h2>
            <div className="bg-white rounded-xl p-4 border border-gray-200">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                  <i className="ri-wallet-3-line text-gray-400"></i>
                </div>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
                  placeholder="Enter USDT BEP20 wallet address"
                />
              </div>
              <p className="text-xs text-gray-600 mt-2">
                ⚠️ Only BEP20 network addresses supported. Wrong network will result in loss of funds.
              </p>
            </div>
          </div>

          {/* Fee Calculation */}
          {amount && (
            <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-4 border border-orange-200">
              <h3 className="font-semibold text-gray-800 mb-3">Withdrawal Summary</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Withdrawal Amount:</span>
                  <span className="font-semibold">{amount} USDT</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Network Fee (4%):</span>
                  <span className="font-semibold text-red-600">-{withdrawalFee} USDT</span>
                </div>
                <div className="border-t border-gray-200 pt-2 flex justify-between">
                  <span className="font-semibold text-gray-800">You will receive:</span>
                  <span className="font-bold text-green-600">{receiveAmount} USDT</span>
                </div>
              </div>
            </div>
          )}

          {/* Withdrawal Terms */}
          <div className="bg-yellow-50 rounded-xl p-4 border border-yellow-200">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center mr-3">
                <i className="ri-information-line text-white text-sm"></i>
              </div>
              <h3 className="font-semibold text-gray-800">Withdrawal Terms</h3>
            </div>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Minimum withdrawal: 10 USDT</li>
              <li>• Network fee: 4% (USDT BEP20)</li>
              <li>• Withdrawals within 24h of deposit: Additional 10% handling fee</li>
              <li>• Processing time: 7:00 AM - 5:30 PM UTC (within 10 minutes)</li>
              <li>• Withdrawals outside business hours will be processed next day</li>
            </ul>
          </div>

          {/* Confirm Button */}
          <button
            onClick={handleWithdraw}
            disabled={!amount || !address}
            className="w-full bg-gradient-to-r from-red-600 to-pink-600 text-white py-4 rounded-xl font-semibold hover:from-red-700 hover:to-pink-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer whitespace-nowrap"
          >
            Confirm Withdrawal
          </button>
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
}