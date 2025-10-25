import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';

export default function BottomNavigation() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    {
      key: 'home',
      icon: 'ri-home-line',
      activeIcon: 'ri-home-fill',
      label: t('home'),
      path: '/dashboard'
    },
    {
      key: 'trading',
      icon: 'ri-line-chart-line',
      activeIcon: 'ri-line-chart-fill',
      label: t('trading'),
      path: '/trading'
    },
    {
      key: 'profile',
      icon: 'ri-user-line',
      activeIcon: 'ri-user-fill',
      label: t('profile'),
      path: '/profile'
    }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
      <div className="flex items-center justify-around py-2">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <button
              key={item.key}
              onClick={() => navigate(item.path)}
              className={`flex flex-col items-center py-2 px-4 transition-colors cursor-pointer ${
                isActive ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              <div className="w-6 h-6 flex items-center justify-center mb-1">
                <i className={`${isActive ? item.activeIcon : item.icon} text-xl`}></i>
              </div>
              <span className="text-xs font-medium">{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}