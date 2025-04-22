import { Link, useLocation } from 'react-router-dom';
import { 
  AiFillHome,
  AiFillMedicineBox,
  AiFillHeart,
  AiFillAlert,
  AiOutlineTeam,
  AiFillBell,
  AiFillSetting
} from 'react-icons/ai';

function Navbar() {
  const location = useLocation();
  
  const navItems = [
    { path: '/', icon: AiFillHome, label: 'Início' },
    { path: '/medicamentos', icon: AiFillMedicineBox, label: 'Medicamentos' },
    { path: '/saude', icon: AiFillHeart, label: 'Saúde' },
    { path: '/familiares', icon: AiOutlineTeam, label: 'Familiares' },
    { path: '/notificacoes', icon: AiFillBell, label: 'Notificações' },
    { path: '/configuracoes', icon: AiFillSetting, label: 'Configurações' }
  ];

  return (
    <nav className="w-72 bg-white shadow-lg p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-primary">SeniorCare</h1>
      </div>
      <div className="space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center p-4 rounded-lg text-lg transition-colors ${
                isActive 
                  ? 'bg-primary text-white' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Icon className="text-2xl mr-3" />
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

export default Navbar;