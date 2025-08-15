import { useNavigate, useLocation } from "react-router-dom";

interface BottomNavProps {
  activeTab?: string;
  onTabChange?: (tab: string) => void;
}

const navItems = [
  { id: "home", icon: "fas fa-home", label: "首页", path: "/" },
  {
    id: "device-management",
    icon: "fas fa-cogs",
    label: "设备",
    path: "/device-management",
  },
  {
    id: "dashboard",
    icon: "fas fa-tachometer-alt",
    label: "仪表板",
    path: "/dashboard",
  },
  {
    id: "optimization-strategies",
    icon: "fas fa-lightbulb",
    label: "优化",
    path: "/optimization-strategies",
  },
  {
    id: "savings-report",
    icon: "fas fa-chart-bar",
    label: "报告",
    path: "/savings-report",
  },
  {
    id: "bill-upload",
    icon: "fas fa-file-invoice-dollar",
    label: "账单",
    path: "/bill-upload",
  },
  {
    id: "plan-advisor", 
    icon: "fas fa-chart-line",
    label: "计划",
    path: "/plan-advisor",
  },
  {
    id: "notifications",
    icon: "fas fa-bell",
    label: "通知",
    path: "/notifications",
  },
  {
    id: "simulation-preview",
    icon: "fas fa-play-circle",
    label: "模拟",
    path: "/simulation-preview",
  },
];

export function BottomNav({ activeTab, onTabChange }: BottomNavProps) {
  const navigate = useNavigate();
  const location = useLocation();

  // 自动检测当前激活的标签
  const currentActiveTab =
    activeTab ||
    navItems.find((item) => item.path === location.pathname)?.id ||
    "home";

  const handleTabClick = (item: (typeof navItems)[0]) => {
    navigate(item.path);
    onTabChange?.(item.id);
  };

  return (
    <nav className="bg-gray-100 grid grid-cols-9 gap-1 items-center pt-3 pr-2 pb-3 pl-2">
      {navItems.map((item) => (
        <div
          key={item.id}
          className="flex flex-col items-center cursor-pointer px-1"
          onClick={() => handleTabClick(item)}
        >
          <div className="bg-transparent flex justify-center items-center w-4 h-4 mb-0.5">
            <i
              className={`${item.icon} text-xs ${
                currentActiveTab === item.id ? "text-gray-900" : "text-gray-400"
              }`}
            />
          </div>
          <div
            className={`text-xs leading-tight text-center ${
              currentActiveTab === item.id ? "text-gray-900" : "text-gray-400"
            }`}
            style={{ fontSize: '10px' }}
          >
            {item.label}
          </div>
        </div>
      ))}
    </nav>
  );
}
