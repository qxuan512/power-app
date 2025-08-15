import { useNavigate } from "react-router-dom";

import { MobileLayout } from "@/layouts/mobile";
import EnergyFlowChart from "@/components/energy-flow-chart";

export default function DashboardPage() {
  const navigate = useNavigate();

  const handleNotificationClick = () => {
    navigate("/notifications");
  };

    const headerAction = (
    <button 
      className="fas fa-bell text-gray-500 cursor-pointer hover:text-gray-700 bg-transparent border-none" 
      onClick={handleNotificationClick}
      aria-label="打开通知中心"
    />
  );

  return (
    <MobileLayout
      headerAction={headerAction}
      showBottomNav={true}
      showHeader={true}
      title="智能节能仪表板"
    >
      <main className="pr-6 pb-6 pl-6">
        {/* Monthly Savings Card */}
        <div className="bg-gray-200 pt-[18px] pr-[18px] pb-[18px] pl-[18px] rounded-lg mb-1.5">
          <div className="text-xs mb-1 text-gray-500">本月节省</div>
          <div className="text-2xl mb-1 font-medium text-gray-900">$85.50</div>
          <div className="text-xs text-gray-400">
            昨日 +$4.50（点击查看详情）
          </div>
        </div>

        {/* AI Agent Status Card */}
        <div className="bg-gray-200 pt-[18px] pr-[18px] pb-[18px] pl-[18px] rounded-lg mb-1.5">
          <div className="flex items-center mb-3">
            <div className="bg-transparent flex justify-center items-center w-5 h-5 mr-3">
              <i className="fas fa-robot text-gray-900" />
            </div>
            <div className="text-sm font-medium text-gray-900">
              AI 代理人状态
            </div>
          </div>
          <div className="text-xs text-gray-500 leading-tight">
            正在监控电网峰值时段（下午2-6点）。已启动预冷系统降低用电负荷，Powerwall
            电池准备放电。当前电价 $0.32/kWh，预计在峰值时段节省 $12.30。
          </div>
        </div>

        {/* Real-time Energy Flow Card */}
        <EnergyFlowChart 
          centerNode={{ label: '家', className: 'text-gray-700' }}
          nodes={{
            top: { label: '太阳', className: 'text-yellow-600' },
            right: { label: 'EV', className: 'text-purple-600' },
            bottom: { label: '电网', className: 'text-blue-600' },
            left: { label: '电池', className: 'text-green-600' }
          }}
          flows={[
            { from: 'top', to: 'center', value: '0.8kW', active: true },
            { from: 'left', to: 'center', value: '1.2kW', active: true },
            { from: 'center', to: 'bottom', value: '0kW', active: false },
            { from: 'center', to: 'right', value: '0kW', active: false }
          ]}
          className="mb-1.5"
        />

        {/* 24-hour Timeline Card */}
        <div className="bg-gray-200 pt-[18px] pr-[18px] pb-[18px] pl-[18px] rounded-lg">
          <div className="text-sm mb-4 font-medium text-gray-900">
            24小时能源时间线
          </div>

          {/* Enhanced Timeline Chart */}
          <div className="w-full">
            <svg className="w-full h-32" viewBox="0 0 320 120" xmlns="http://www.w3.org/2000/svg">
              <defs>
                {/* 定义箭头标记 */}
                <marker id="timelineArrow" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="#333" />
                </marker>
                {/* 峰段时间背景渐变 */}
                <linearGradient id="peakTimeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#fecaca" stopOpacity="0.3"/>
                  <stop offset="100%" stopColor="#fecaca" stopOpacity="0.1"/>
                </linearGradient>
              </defs>

              {/* 时间轴背景 */}
              <rect x="10" y="10" width="300" height="100" rx="8" ry="8" fill="none" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="4 3"/>

              {/* 主时间线 */}
              <line x1="30" y1="80" x2="290" y2="80" stroke="#374151" strokeWidth="2"/>

              {/* 时间刻度线和标签 */}
              <line x1="30" y1="75" x2="30" y2="85" stroke="#374151" strokeWidth="2"/>
              <text x="26" y="97" fontSize="10" fontFamily="monospace" fill="#6b7280">0h</text>

              <line x1="95" y1="75" x2="95" y2="85" stroke="#374151" strokeWidth="2"/>
              <text x="91" y="97" fontSize="10" fontFamily="monospace" fill="#6b7280">6h</text>

              <line x1="160" y1="75" x2="160" y2="85" stroke="#374151" strokeWidth="2"/>
              <text x="156" y="97" fontSize="10" fontFamily="monospace" fill="#6b7280">12h</text>

              <line x1="225" y1="75" x2="225" y2="85" stroke="#374151" strokeWidth="2"/>
              <text x="221" y="97" fontSize="10" fontFamily="monospace" fill="#6b7280">18h</text>

              <line x1="290" y1="75" x2="290" y2="85" stroke="#374151" strokeWidth="2"/>
              <text x="286" y="97" fontSize="10" fontFamily="monospace" fill="#6b7280">24h</text>

              {/* 峰段时间高亮区域 (14:00-18:00) */}
              <rect x="203" y="20" width="54" height="65" fill="url(#peakTimeGradient)" stroke="#f87171" strokeWidth="1" strokeDasharray="2 2"/>
              <text x="207" y="16" fontSize="9" fontFamily="monospace" fill="#dc2626">峰段</text>

              {/* 事件标记点 */}
              {/* 预冷 (13:00) */}
              <circle cx="192" cy="65" r="4" fill="#3b82f6" stroke="white" strokeWidth="2"/>
              <line x1="192" y1="40" x2="192" y2="61" stroke="#3b82f6" strokeWidth="1"/>
              <text x="172" y="36" fontSize="9" fontFamily="monospace" fill="#1d4ed8">预冷</text>

              {/* PW放电 (14:00) */}
              <circle cx="214" cy="65" r="4" fill="#10b981" stroke="white" strokeWidth="2"/>
              <line x1="214" y1="40" x2="214" y2="61" stroke="#10b981" strokeWidth="1"/>
              <text x="184" y="28" fontSize="9" fontFamily="monospace" fill="#059669">PW放电</text>

              {/* EV充电 (22:00) */}
              <circle cx="279" cy="65" r="4" fill="#f59e0b" stroke="white" strokeWidth="2"/>
              <line x1="279" y1="40" x2="279" y2="61" stroke="#f59e0b" strokeWidth="1"/>
              <text x="253" y="36" fontSize="9" fontFamily="monospace" fill="#d97706">EV充电</text>

              {/* 能源需求曲线 */}
              <polyline 
                points="30,75 50,72 70,70 95,68 120,65 140,62 160,60 180,58 200,65 225,70 250,68 270,65 290,63"
                fill="none" 
                stroke="#6366f1" 
                strokeWidth="2"
                opacity="0.7"
              />
            </svg>
          </div>

          {/* 时间轴说明 */}
          <div className="mt-4 space-y-2">
            <div className="flex justify-between items-center text-xs">
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-blue-500 mr-1"></div>
                  <span className="text-gray-600">预冷</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-green-500 mr-1"></div>
                  <span className="text-gray-600">电池放电</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-yellow-500 mr-1"></div>
                  <span className="text-gray-600">EV充电</span>
                </div>
              </div>
            </div>
            
            <div className="flex justify-between items-center">
              <div className="text-xs text-gray-500">峰值时段 (2PM-6PM)</div>
              <div className="text-xs text-red-400 font-medium">$0.32/kWh</div>
            </div>
            
            <div className="flex justify-between items-center">
              <div className="text-xs text-gray-500">谷值时段 (10PM-6AM)</div>
              <div className="text-xs text-green-500 font-medium">$0.12/kWh</div>
            </div>
          </div>
        </div>
      </main>
    </MobileLayout>
  );
}
