import { useNavigate } from "react-router-dom";

import { MobileLayout } from "@/layouts/mobile";

interface NotificationItem {
  id: string;
  time: string;
  title: string;
  content: string;
  type: "ev" | "hvac" | "powerwall" | "price" | "solar" | "report";
  color: "red" | "green";
}

const notifications: NotificationItem[] = [
  {
    id: "1",
    time: "15:30",
    title: "EV充电提醒",
    content:
      "您的电动汽车将在下午4点开始充电，利用峰值前的低电价时段，预计充电费用$8.50。",
    type: "ev",
    color: "red",
  },
  {
    id: "2",
    time: "14:15",
    title: "HVAC预冷通知",
    content: "您的HVAC系统已开始预冷，以优化下午的用电负荷，预计节省$3.20。",
    type: "hvac",
    color: "green",
  },
  {
    id: "3",
    time: "13:45",
    title: "Powerwall放电计划",
    content:
      "AI代理已安排Powerwall在峰值时段（下午2-6点）放电，预计节省$12.30。",
    type: "powerwall",
    color: "red",
  }
];

export default function NotificationsPage() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const handleNotificationClick = (notification: NotificationItem) => {
    // 可以根据通知类型跳转到相应页面
    switch (notification.type) {
      case "ev":
        navigate("/device-details");
        break;
      case "report":
        navigate("/daily-savings");
        break;
      case "powerwall":
      case "hvac":
        navigate("/optimization-strategies");
        break;
      default:
        break;
    }
  };

  return (
    <MobileLayout
      showBackButton={true}
      showBottomNav={true}
      showHeader={true}
      title="通知中心"
      onBack={handleBack}
    >
      <main className="pr-6 pb-6 pl-6">
        {/* Notification Timeline */}
        <div className="relative">
          {/* Timeline Line - 渐变效果 */}
          <div className="absolute left-[10px] top-0 bottom-0 w-px bg-gradient-to-b from-gray-300 via-gray-400 to-gray-300" />

          {notifications.map((notification) => (
            <button 
              key={notification.id}
              className="relative flex items-start mb-6 cursor-pointer text-left w-full"
              onClick={() => handleNotificationClick(notification)}
            >
              {/* Timeline Dot - 精美样式 */}
              <div className="relative z-10 flex items-center justify-center w-5 h-5 rounded-full bg-white border-2 border-gray-300 shadow-sm mr-5 mt-2">
                <div 
                  className={`w-1.5 h-1.5 rounded-full ${
                    notification.color === "red" ? "bg-red-400" : "bg-green-400"
                  }`}
                />
              </div>

              {/* Notification Card */}
              <div className="flex-1 bg-gray-200 pt-[18px] pr-[18px] pb-[18px] pl-[18px] rounded-lg relative">
                {/* Time */}
                <div className="text-xs text-gray-500 mb-2">
                  {notification.time}
                </div>

                {/* Title */}
                <div className="text-sm font-medium text-gray-900 mb-2">
                  {notification.title}
                </div>

                {/* Content */}
                <div className="text-xs text-gray-600 leading-relaxed">
                  {notification.content}
                </div>

                {/* Status Indicator (right side dot) */}
                {/* <div
                  className={`absolute top-[18px] right-[18px] w-[8px] h-[8px] rounded-full ${
                    notification.color === "red" ? "bg-red-400" : "bg-green-400"
                  }`}
                /> */}
              </div>
            </button>
          ))}
        </div>
      </main>
    </MobileLayout>
  );
}
