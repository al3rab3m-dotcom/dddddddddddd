import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import LanguageSelector from '../../components/base/LanguageSelector';

export default function Register() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    // Simulate registration - in real app, register with backend
    localStorage.setItem('isLoggedIn', 'true');
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-teal-900 to-blue-900 flex items-center justify-center p-4"
         style={{
           backgroundImage: `url('https://readdy.ai/api/search-image?query=Professional%20cryptocurrency%20trading%20registration%20background%20with%20modern%20blockchain%20network%20visualization%20green%20teal%20blue%20gradient%20colors%20abstract%20digital%20patterns%20representing%20automated%20investment%20systems%20and%20smart%20contracts%20futuristic%20financial%20technology&width=1920&height=1080&seq=register-bg&orientation=landscape')`,
           backgroundSize: 'cover',
           backgroundPosition: 'center'
         }}>
      <div className="absolute inset-0 bg-black/50"></div>
      
      <div className="relative z-10 w-full max-w-md">
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8">
          <div className="flex justify-between items-center mb-8">
            <div className="text-center flex-1">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-teal-600 rounded-full flex items-center justify-center">
                  <i className="ri-robot-line text-white text-xl"></i>
                </div>
                <h1 className="text-2xl font-bold text-gray-800 ml-3" style={{fontFamily: 'Pacifico, serif'}}>TradingBot</h1>
              </div>
              <h2 className="text-xl font-semibold text-gray-800">{t('createAccount')}</h2>
            </div>
            <LanguageSelector />
          </div>

          <form onSubmit={handleRegister} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('email')}
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                  <i className="ri-mail-line text-gray-400"></i>
                </div>
                <input
                  type="email"
                  required
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('password')}
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                  <i className="ri-lock-line text-gray-400"></i>
                </div>
                <input
                  type="password"
                  required
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('confirmPassword')}
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                  <i className="ri-lock-line text-gray-400"></i>
                </div>
                <input
                  type="password"
                  required
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                  placeholder="••••••••"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-green-600 to-teal-600 text-white py-3 rounded-lg font-semibold hover:from-green-700 hover:to-teal-700 transition-all duration-300 cursor-pointer whitespace-nowrap"
            >
              {t('register')}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              {t('alreadyHaveAccount')}{' '}
              <button
                onClick={() => navigate('/login')}
                className="text-green-600 hover:text-green-700 font-semibold cursor-pointer"
              >
                {t('login')}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}