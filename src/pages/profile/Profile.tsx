
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import BottomNavigation from '../../components/layout/BottomNavigation';

export default function Profile() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [showTransactions, setShowTransactions] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  // Team data
  const teamData = {
    totalMembers: 147,
    newMembersToday: 12,
    totalCommission: 2456.78,
    dailyCommission: 125.45
  };

  // Recent transactions
  const transactions = [
    { type: 'Deposit', amount: '+500 USDT', date: '2024-01-15', status: 'Completed' },
    { type: 'Withdrawal', amount: '-230 USDT', date: '2024-01-14', status: 'Completed' },
    { type: 'Commission', amount: '+45.50 USDT', date: '2024-01-13', status: 'Completed' },
    { type: 'Profit', amount: '+11.50 USDT', date: '2024-01-12', status: 'Completed' },
    { type: 'Deposit', amount: '+1000 USDT', date: '2024-01-11', status: 'Completed' }
  ];

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4">
        <div className="flex items-center">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mr-4">
            <i className="ri-user-line text-2xl"></i>
          </div>
          <div>
            <h1 className="text-xl font-bold">My Profile</h1>
            <p className="text-sm opacity-90">user@example.com</p>
          </div>
        </div>
      </div>

      <div className="p-4">
        {/* Team Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 mb-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                <i className="ri-team-line text-white"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Team</h3>
            </div>
            <button
              onClick={() => navigate('/team')}
              className="text-blue-600 hover:text-blue-700 cursor-pointer"
            >
              <i className="ri-arrow-right-line"></i>
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-3 bg-purple-50 rounded-lg">
              <p className="text-2xl font-bold text-purple-600">{teamData.totalMembers}</p>
              <p className="text-sm text-gray-600">Total Members</p>
            </div>
            <div className="text-center p-3 bg-green-50 rounded-lg">
              <p className="text-2xl font-bold text-green-600">${teamData.totalCommission}</p>
              <p className="text-sm text-gray-600">Total Commission</p>
            </div>
          </div>
        </div>

        {/* Settings */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 mb-4">
          <button
            onClick={() => setShowSettings(!showSettings)}
            className="w-full p-4 flex items-center justify-between cursor-pointer"
          >
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gray-500 rounded-full flex items-center justify-center mr-3">
                <i className="ri-settings-line text-white"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Settings</h3>
            </div>
            <i className={`ri-arrow-${showSettings ? 'up' : 'down'}-s-line text-gray-400`}></i>
          </button>
          
          {showSettings && (
            <div className="border-t border-gray-100">
              <div className="p-4 space-y-3">
                <button className="w-full flex items-center p-3 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <i className="ri-wallet-line text-blue-600 text-sm"></i>
                  </div>
                  <span className="text-gray-700">Wallet Linking</span>
                </button>
                <button className="w-full flex items-center p-3 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                    <i className="ri-lock-line text-orange-600 text-sm"></i>
                  </div>
                  <span className="text-gray-700">Transaction Password</span>
                </button>
                <button className="w-full flex items-center p-3 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                    <i className="ri-key-line text-purple-600 text-sm"></i>
                  </div>
                  <span className="text-gray-700">Change Password</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* All Transactions */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 mb-4">
          <button
            onClick={() => setShowTransactions(!showTransactions)}
            className="w-full p-4 flex items-center justify-between cursor-pointer"
          >
            <div className="flex items-center">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mr-3">
                <i className="ri-history-line text-white"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-800">All Transactions</h3>
            </div>
            <i className={`ri-arrow-${showTransactions ? 'up' : 'down'}-s-line text-gray-400`}></i>
          </button>
          
          {showTransactions && (
            <div className="border-t border-gray-100">
              <div className="divide-y divide-gray-100">
                {transactions.map((transaction, index) => (
                  <div key={index} className="p-4 flex items-center justify-between">
                    <div className="flex items-center">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${
                        transaction.type === 'Deposit' ? 'bg-green-100' :
                        transaction.type === 'Withdrawal' ? 'bg-red-100' :
                        transaction.type === 'Commission' ? 'bg-purple-100' :
                        'bg-blue-100'
                      }`}>
                        <i className={`${
                          transaction.type === 'Deposit' ? 'ri-arrow-down-line text-green-600' :
                          transaction.type === 'Withdrawal' ? 'ri-arrow-up-line text-red-600' :
                          transaction.type === 'Commission' ? 'ri-team-line text-purple-600' :
                          'ri-money-dollar-circle-line text-blue-600'
                        } text-sm`}></i>
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">{transaction.type}</p>
                        <p className="text-sm text-gray-600">{transaction.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className={`font-semibold ${
                        transaction.amount.startsWith('+') ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {transaction.amount}
                      </p>
                      <p className="text-xs text-gray-500">{transaction.status}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Customer Service & Official Group */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <button className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex flex-col items-center cursor-pointer hover:bg-gray-50 transition-colors">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-2">
              <i className="ri-customer-service-line text-white text-xl"></i>
            </div>
            <span className="text-sm font-medium text-gray-800">Customer Service</span>
          </button>
          
          <button className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex flex-col items-center cursor-pointer hover:bg-gray-50 transition-colors">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-2">
              <i className="ri-group-line text-white text-xl"></i>
            </div>
            <span className="text-sm font-medium text-gray-800">Official Group</span>
          </button>
        </div>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="w-full bg-red-500 hover:bg-red-600 text-white py-4 rounded-xl font-semibold transition-colors cursor-pointer whitespace-nowrap"
        >
          <i className="ri-logout-box-line mr-2"></i>Account Logout
        </button>
      </div>

      <BottomNavigation />
    </div>
  );
}
