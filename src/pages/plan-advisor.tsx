import { MobileLayout } from '@/layouts/mobile';
import { Button } from '@heroui/react';
import { useNavigate } from 'react-router-dom';
import ApexBarChart from '@/components/apex-bar-chart';

export default function PlanAdvisorPage() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const handleSwitchPlan = () => {
    navigate('/roi-results');
  };

  return (
    <MobileLayout
      title="电价计划顾问"
      showHeader={true}
      showBackButton={true}
      showBottomNav={true}
      onBack={handleBack}
    >
      <main className="pr-6 pb-6 pl-6">

        {/* 推荐替代计划 */}
        <section className="bg-gray-200 mb-6 pt-[18px] pr-[18px] pb-[18px] pl-[18px] rounded-lg">
          <div className="text-sm mb-4 font-medium text-gray-900">推荐替代计划</div>

          <button type="button" className="w-full text-left bg-white pt-6 pr-6 pb-6 pl-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
            <div className="flex justify-between items-center">
              <div className="flex-1">
                <div className="text-lg font-semibold text-gray-900 mb-1">EV2-A</div>
                <div className="text-xs text-gray-500">适合用户的优化方案</div>
              </div>
              <div className="text-right ml-4">
                <div className="text-2xl font-bold text-green-500 mb-1">+$250</div>
                <div className="text-xs text-gray-400 font-medium">预计每年可多节省</div>
              </div>
            </div>
            
          </button>
        </section>

        {/* 电价评价年费用对比 */}
        <ApexBarChart
          title="电价计划年费用对比(示意)"
          data={[
            {
              label: "当前",
              value: 700,
              color: "#6b7280"
            },
            {
              label: "方案A",
              value: 800,
              highlighted: true,
              color: "#10b981"
            },
            {
              label: "方案B", 
              value: 900,
              color: "#d1d5db"
            }
          ]}
          // unit="元/年"
          height={220}
          className="mb-6"
        />

        {/* 计划详情 */}
        <button className="flex items-center justify-between w-full p-3 bg-gray-500/10 border border-gray-500/20 rounded-lg hover:bg-gray-600/20 transition-colors duration-200">
            <span className="text-sm text-gray-400 font-medium">查看费率结构与细节</span>
            <i className="fas fa-arrow-right text-sm text-gray-400" />
          </button>

        {/* CTA */}
        <div className="pt-4 pb-4">
          <Button 
            className="text-base w-full h-12 rounded-xl font-semibold bg-gray-900 text-white" 
            onPress={handleSwitchPlan}
          >
            立即切换计划
          </Button>
        </div>
      </main>
    </MobileLayout>
  );
}