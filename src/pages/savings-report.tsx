import { useNavigate } from "react-router-dom";
import { ApexBarChart } from "@/components/apex-bar-chart";

import { MobileLayout } from "@/layouts/mobile";

export default function SavingsReportPage() {
  const navigate = useNavigate();

  // 节省来源分析数据
  const savingsSourceData = [
    {
      label: 'EV',
      value: 35.20,
      color: '#10b981'
    },
    {
      label: 'HVAC',
      value: 28.50,
      color: '#3b82f6'
    },
    {
      label: 'Powerwall',
      value: 21.80,
      color: '#8b5cf6'
    }
  ];

  const handleBack = () => {
    console.log("Navigate back");
  };

  const handleShare = () => {
    console.log("Share report");
  };

  const handleLearnMore = () => {
    console.log("Learn more about AI suggestions");
    navigate("/daily-savings");
  };

  const headerAction = (
    <i
      className="fas fa-share text-gray-500 cursor-pointer"
      onClick={handleShare}
    />
  );

  return (
    <MobileLayout
      headerAction={headerAction}
      showBackButton={true}
      showBottomNav={true}
      showHeader={true}
      title="节省报告"
      onBack={handleBack}
    >
      {/* Main Content */}
      <main className="pr-6 pb-6 pl-6">
        {/* Time Range Selector */}
        <div className="bg-gray-200 mb-2 pt-[18px] pr-[18px] pb-[18px] pl-[18px] rounded-lg">
          <div className="flex justify-between items-center">
            <div className="text-sm font-medium text-gray-900">时间范围</div>
            <div className="flex items-center gap-2">
              <div className="text-sm font-medium text-gray-900">本月</div>
              <div className="bg-transparent flex justify-center items-center w-5 h-5">
                <i className="fas fa-chevron-down text-gray-500" />
              </div>
            </div>
          </div>
        </div>

        {/* Total Savings */}
        <div className="bg-gray-200 mb-2 pt-[18px] pr-[18px] pb-[18px] pl-[18px] rounded-lg">
          <div className="text-xs mb-1 text-gray-500">总节省（本月）</div>
          <div className="text-2xl mb-1 font-medium text-gray-900">$85.50</div>
          <div className="text-xs text-green-400">比上月增长 15.2%</div>
        </div>

        {/* Savings Sources Chart */}
        <div className="bg-gray-200 mb-2 pt-[18px] pr-[18px] pb-[18px] pl-[18px] rounded-lg">
          <div className="text-sm mb-6 font-medium text-gray-900">
            节省来源分析
          </div>
          
          {/* Apex Bar Chart */}
          <ApexBarChart
            data={savingsSourceData}
            unit="$/月"
            height={280}
            className="mb-0"
          />


        </div>

        {/* AI Suggestions */}
        <div className="bg-gray-900 pt-[18px] pr-[18px] pb-[18px] pl-[18px] rounded-lg">
          <div className="flex items-center mb-3">
            <div className="bg-transparent flex justify-center items-center w-5 h-5 mr-3">
              <i className="fas fa-lightbulb text-green-400" />
            </div>
            <div className="text-sm font-medium text-white">AI 洞察</div>
          </div>
          <div className="text-xs text-white leading-tight">
            建议切换到 EV2-A 电价计划，预计每年可多省
            $250。根据您的用电模式分析，夜间充电时段可节省 40% 电费。
          </div>
          <div
            className="flex items-center mt-3 cursor-pointer"
            onClick={handleLearnMore}
          >
            <div className="text-xs mr-2 text-green-400">了解详情</div>
            <div className="bg-transparent flex justify-center items-center w-3 h-3">
              <i className="fas fa-arrow-right text-xs text-green-400" />
            </div>
          </div>
        </div>
      </main>
    </MobileLayout>
  );
}
