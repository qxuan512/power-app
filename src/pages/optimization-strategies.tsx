import { useState } from "react";
import { Switch } from "@heroui/react";

import { MobileLayout } from "@/layouts/mobile";



const strategyDetails = [
  "EV 23:00 开始充电，05:00 完成",
  "HVAC 15:00 预冷，对应16–21高峰",
  "Powerwall 17–21 放电供家庭负载",
];

// 移除自定义步骤图标组件，因为不再需要

export default function OptimizationStrategiesPage() {
  const [autoOptimization, setAutoOptimization] = useState(true);

  const handleBack = () => {
    console.log("Navigate back");
  };

  return (
    <MobileLayout
      showBackButton={true}
      showBottomNav={true}
      showHeader={true}
      title="优化策略"
      onBack={handleBack}
    >
      {/* Main Content */}
      <main className="pr-6 pb-6 pl-6">
        {/* Auto Optimization Toggle */}
        <div className="bg-gray-200 mb-1.5 pt-[18px] pr-[18px] pb-[18px] pl-[18px] rounded-lg">
          <div className="flex justify-between items-center">
            <div className="text-sm font-medium text-gray-900">自动优化</div>
            <div className="flex items-center">
              <span className="text-xs mr-2 text-gray-500">
                {autoOptimization ? "ON" : "OFF"}
              </span>
              <Switch
                classNames={{
                  wrapper: "bg-gray-900",
                  thumb: "bg-white",
                }}
                isSelected={autoOptimization}
                size="sm"
                onValueChange={setAutoOptimization}
              />
            </div>
          </div>
        </div>

        {/* Enhanced Timeline Chart */}
        <div className="bg-gray-200 mb-1.5 pt-[18px] pr-[18px] pb-[18px] pl-[18px] rounded-lg">
          {/* <div className="text-sm mb-4 font-medium text-gray-900">
            今日计划时间轴
          </div> */}

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

        {/* Strategy Details with Custom Timeline */}
        <div className="bg-gray-200 pt-[18px] pr-[18px] pb-[18px] pl-[18px] rounded-lg">
          <div className="text-sm mb-5 font-medium text-gray-900">
            今日策略详情
          </div>
          
          <div className="relative">
            {/* 时间轴线条 - 精确通过节点中心 */}
            <div className="absolute left-[10px] top-0 bottom-0 w-px bg-gradient-to-b from-gray-300 via-gray-400 to-gray-300"></div>
            
            <div className="space-y-5">
              {strategyDetails.map((detail, index) => (
                <div key={index} className="relative flex items-center gap-5">
                  {/* 时间轴点 - 确保与垂直线精确对齐 */}
                  <div className="relative z-10 flex items-center justify-center w-5 h-5 rounded-full bg-white border-2 border-gray-300 shadow-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                  </div>
                  
                  {/* 策略内容 - 与节点中心对齐 */}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-800 leading-relaxed font-normal">
                      {detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </MobileLayout>
  );
}
