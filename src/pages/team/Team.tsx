
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import BottomNavigation from '../../components/layout/BottomNavigation';

export default function Team() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const teamStats = {
    // Commission Profits
    dailyCommission: 125.45,
    totalCommission: 2456.78,
    
    // Membership Recharge
    teamDailyDeposit: 8450.00,
    activeRecharge: 24680.50,
    
    // Member Registrations
    newMembersToday: 12,
    totalTeamMembers: 147,
    
    // Member Performance
    teamPerformance: 89.5,
    holdingTeam: 132
  };

  const referralLevels = [
    { level: 1, commission: '10%', members: 23, earnings: 456.78 },
    { level: 2, commission: '8%', members: 41, earnings: 345.67 },
    { level: 3, commission: '5%', members: 38, earnings: 234.56 },
    { level: 4, commission: '3%', members: 28, earnings: 123.45 },
    { level: 5, commission: '2%', members: 17, earnings: 89.32 }
  ];

  const recentReferrals = [
    { name: 'أحمد محمد', email: 'ahmed@email.com', date: '2024-01-15', status: 'Active', deposit: 500 },
    { name: 'سارة أحمد', email: 'sarah@email.com', date: '2024-01-14', status: 'Active', deposit: 1000 },
    { name: 'محمد علي', email: 'mike@email.com', date: '2024-01-13', status: 'Pending', deposit: 0 },
    { name: 'فاطمة خالد', email: 'fatima@email.com', date: '2024-01-12', status: 'Active', deposit: 750 }
  ];

  const copyReferralLink = () => {
    const referralLink = 'https://tradingbot.app/register?ref=TB123456';
    navigator.clipboard.writeText(referralLink).then(() => {
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
          تم نسخ رابط الدعوة بنجاح!
        </div>
      `;
      document.body.appendChild(notification);
      
      setTimeout(() => {
        if (notification.parentNode) {
          notification.parentNode.removeChild(notification);
        }
      }, 3000);
    }).catch(() => {
      prompt('انسخ رابط الدعوة:', 'https://tradingbot.app/register?ref=TB123456');
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-4">
        <div className="flex items-center">
          <button
            onClick={() => navigate('/dashboard')}
            className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3 cursor-pointer"
          >
            <i className="ri-arrow-left-line text-xl"></i>
          </button>
          <div>
            <h1 className="text-xl font-bold">قائمة الفريق</h1>
            <p className="text-sm opacity-90">إدارة فريقك والإحالات</p>
          </div>
        </div>
      </div>

      <div className="p-4">
        {/* Commission Profits Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 mb-6">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mr-3">
              <i className="ri-money-dollar-circle-line text-white"></i>
            </div>
            <h3 className="text-lg font-semibold text-gray-800">أرباح العمولة</h3>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-3 bg-green-50 rounded-lg">
              <p className="text-sm text-gray-600">العمولة اليومية</p>
              <p className="text-xl font-bold text-green-600">${teamStats.dailyCommission}</p>
            </div>
            <div className="text-center p-3 bg-blue-50 rounded-lg">
              <p className="text-sm text-gray-600">إجمالي العمولة</p>
              <p className="text-xl font-bold text-blue-600">${teamStats.totalCommission}</p>
            </div>
          </div>
        </div>

        {/* Membership Recharge Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 mb-6">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center mr-3">
              <i className="ri-wallet-line text-white"></i>
            </div>
            <h3 className="text-lg font-semibold text-gray-800">شحن العضوية</h3>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-3 bg-purple-50 rounded-lg">
              <p className="text-sm text-gray-600">إيداع الفريق اليومي</p>
              <p className="text-xl font-bold text-purple-600">${teamStats.teamDailyDeposit}</p>
            </div>
            <div className="text-center p-3 bg-orange-50 rounded-lg">
              <p className="text-sm text-gray-600">الشحن النشط</p>
              <p className="text-xl font-bold text-orange-600">${teamStats.activeRecharge}</p>
            </div>
          </div>
        </div>

        {/* Member Registrations Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 mb-6">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mr-3">
              <i className="ri-user-add-line text-white"></i>
            </div>
            <h3 className="text-lg font-semibold text-gray-800">تسجيل الأعضاء</h3>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-3 bg-indigo-50 rounded-lg">
              <p className="text-sm text-gray-600">أعضاء جدد اليوم</p>
              <p className="text-xl font-bold text-indigo-600">{teamStats.newMembersToday}</p>
            </div>
            <div className="text-center p-3 bg-teal-50 rounded-lg">
              <p className="text-sm text-gray-600">أعضاء الفريق</p>
              <p className="text-xl font-bold text-teal-600">{teamStats.totalTeamMembers}</p>
            </div>
          </div>
        </div>

        {/* Member Performance Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 mb-6">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center mr-3">
              <i className="ri-bar-chart-line text-white"></i>
            </div>
            <h3 className="text-lg font-semibold text-gray-800">أداء الأعضاء</h3>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-3 bg-amber-50 rounded-lg">
              <p className="text-sm text-gray-600">أداء الفريق</p>
              <p className="text-xl font-bold text-amber-600">{teamStats.teamPerformance}%</p>
            </div>
            <div className="text-center p-3 bg-pink-50 rounded-lg">
              <p className="text-sm text-gray-600">الفريق المحتفظ</p>
              <p className="text-xl font-bold text-pink-600">{teamStats.holdingTeam}</p>
            </div>
          </div>
        </div>

        {/* Referral Link */}
        <div className="bg-gradient-to-r from-green-500 to-teal-500 rounded-xl p-4 mb-6 text-white">
          <div className="flex items-center mb-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mr-3">
              <i className="ri-share-line text-xl"></i>
            </div>
            <div>
              <h3 className="font-semibold">رابط الإحالة الخاص بك</h3>
              <p className="text-sm opacity-90">شارك واكسب العمولات</p>
            </div>
          </div>
          <div className="bg-white/10 rounded-lg p-3 mb-3">
            <p className="text-sm font-mono break-all">https://tradingbot.app/register?ref=TB123456</p>
          </div>
          <button
            onClick={copyReferralLink}
            className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg font-medium transition-colors cursor-pointer whitespace-nowrap"
          >
            <i className="ri-file-copy-line mr-2"></i>نسخ الوصلة
          </button>
        </div>

        {/* Commission Structure */}
        <div className="bg-white rounded-xl p-4 mb-6 shadow-sm border border-gray-100">
          <h3 className="font-semibold text-gray-800 mb-4">هيكل العمولة</h3>
          <div className="space-y-3">
            {referralLevels.map((level) => (
              <div key={level.level} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-sm font-bold">{level.level}</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">المستوى {level.level}</p>
                    <p className="text-sm text-gray-600">{level.members} عضو</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-purple-600">{level.commission}</p>
                  <p className="text-sm text-gray-600">${level.earnings}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Referrals */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="p-4 border-b border-gray-100">
            <h3 className="font-semibold text-gray-800">الإحالات الأخيرة</h3>
          </div>
          <div className="divide-y divide-gray-100">
            {recentReferrals.map((referral, index) => (
              <div key={index} className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white font-bold text-sm">
                        {referral.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">{referral.name}</p>
                      <p className="text-sm text-gray-600">{referral.email}</p>
                      <p className="text-xs text-gray-500">{referral.date}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      referral.status === 'Active'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {referral.status === 'Active' ? 'نشط' : 'قيد الانتظار'}
                    </span>
                    {referral.deposit > 0 && (
                      <p className="text-sm font-semibold text-gray-800 mt-1">
                        ${referral.deposit} USDT
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
}
