import { useNavigate } from "react-router-dom";

import { MobileLayout } from "@/layouts/mobile";

export default function DailySavingsPage() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/savings-report");
  };

  return (
    <MobileLayout
      showBackButton={true}
      showBottomNav={true}
      showHeader={true}
      title="每日节省详情"
      onBack={handleBack}
    >
      <main className="pr-6 pb-6 pl-6">
        {/* How We Save Money */}
        <div className="bg-gray-200 mb-1.5 pt-[18px] pr-[18px] pb-[18px] pl-[18px] rounded-lg">
          <div className="text-sm font-medium text-gray-900">
            我们如何为你省钱
          </div>
        </div>

        {/* Savings Receipt */}
        <div className="bg-gray-200 pt-[18px] pr-[18px] pb-[18px] pl-[18px] rounded-lg receipt-border">
          <div className="text-sm text-center mb-4 text-gray-500">
            — 费用节省收据（示意） —
          </div>

          {/* EV Smart Charging */}
          <div className="mb-4">
            <div className="text-sm mb-2 font-medium text-gray-900">
              EV 智能充电（00:00–03:00）
            </div>
            <div className="text-xs mb-1 text-gray-500">
              10 kWh × ($0.55 - $0.15) = $4.00
            </div>
            <div className="text-xs text-gray-400">
              基准价：$0.55/kWh | 实际价：$0.15/kWh
            </div>
          </div>

          {/* HVAC Pre-cooling */}
          <div className="mb-4">
            <div className="text-sm mb-2 font-medium text-gray-900">
              HVAC 预冷（14:00–16:00）
            </div>
            <div className="text-xs mb-1 text-gray-500">
              减少高峰运行 1 小时 = $0.50
            </div>
            <div className="text-xs text-gray-400">保持舒适温度范围内</div>
          </div>

          {/* Total */}
          <div className="text-sm text-center pt-3 border-t border-dashed border-gray-500 text-gray-500">
            <div className="mb-1 font-medium">合计：$4.50</div>
            <div className="text-xs text-gray-400">
              （以上为线框示意，非真实计算）
            </div>
          </div>
        </div>
      </main>
    </MobileLayout>
  );
}
