import { LineChart } from '@mui/x-charts/LineChart';

import { MobileLayout } from "@/layouts/mobile";
import EnergyFlowChart from "@/components/energy-flow-chart";

// 能源流图组件
const EnergyFlowDiagram: React.FC = () => {
  const flowData = [
    { from: 'top', to: 'center', value: '3.8kW', active: true },
    { from: 'left', to: 'center', value: '1.0kW', active: true },
    { from: 'center', to: 'bottom', value: '-0.3kW', active: false },
    { from: 'center', to: 'right', value: '0.8kW', active: true }
  ];

  return (
    <EnergyFlowChart 
      centerNode={{ label: '家', className: 'text-gray-700' }}
      nodes={{
        top: { label: '太阳', className: 'text-yellow-600' },
        right: { label: 'EV', className: 'text-purple-600' },
        bottom: { label: '电网', className: 'text-blue-600' },
        left: { label: '电池', className: 'text-green-600' }
      }}
      flows={flowData}
      className="mb-1.5"
    />
  );
};

// SOC Chart Component
const SOCChart: React.FC = () => {
  const data = [75, 45, 60, 85, 70];
  const xAxisData = ['0', '8', '16', '21', '24'];

  return (
    <div className="bg-gray-200 pt-[18px] pr-[18px] pb-[18px] pl-[18px] rounded-lg mb-1.5">
      <div className="text-sm mb-4 font-medium text-gray-900">Powerwall SoC 预测</div>
      <div className="w-[320px] h-[160px]">
        <LineChart
          xAxis={[{ 
            data: xAxisData,
            scaleType: 'point',
            tickLabelStyle: { fontSize: 10, fill: '#7d7d7d' }
          }]}
          yAxis={[{
            min: 0,
            max: 100,
            tickLabelStyle: { fontSize: 10, fill: '#7d7d7d' },
            valueFormatter: (value: number) => `${value}%`
          }]}
          series={[{
            data: data,
            color: '#86c3bc',
            curve: 'linear'
          }]}
          width={320}
          height={160}
          margin={{ left: -15, right: 20, top: 10, bottom: 20 }}
          grid={{ vertical: false, horizontal: true }}
        />
      </div>
    </div>
  );
};

// Bill Preview Component
const BillPreview: React.FC = () => (
  <div className="bg-gray-200 pt-[18px] pr-[18px] pb-[18px] pl-[18px] rounded-lg">
    <div className="text-sm mb-4 font-medium text-gray-900">账单预演</div>
    
    
    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-700">峰时用电 2.1 kWh</span>
        <span className="text-sm font-semibold text-gray-900">$6.72</span>
      </div>
      
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-700">谷时用电 8.3 kWh</span>
        <span className="text-sm font-semibold text-gray-900">$12.45</span>
      </div>
      
      <div className="h-px bg-gray-400"></div>
      
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-gray-900">预计总费用</span>
        <span className="text-lg font-bold text-gray-900">$19.17</span>
      </div>
      
      <div className="flex justify-between items-center pt-2">
        <span className="text-sm text-gray-700">与未优化对比节省</span>
        <span className="text-sm font-semibold text-green-600">$8.50</span>
      </div>
    </div>
  </div>
);

export default function SimulationPreviewPage() {
  return (
    <MobileLayout 
      title="模拟与预演"
      showHeader={true}
      showBackButton={true}
      showBottomNav={true}
    >
      <div className="px-6 pb-6">
        <EnergyFlowDiagram />
        <SOCChart />
        <BillPreview />
      </div>
    </MobileLayout>
  );
}
