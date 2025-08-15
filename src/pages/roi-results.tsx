import { useState } from "react";
import { Button, Select, SelectItem } from "@heroui/react";
import { useNavigate } from "react-router-dom";

import { MobileLayout } from "@/layouts/mobile";

const plans = [
  { key: "E-TOU-C", label: "E-TOU-C" },
  { key: "EV2-A", label: "EV2-A" },
];

const savingSources = [
  {
    icon: "🚗",
    title: "智能EV充电优化",
    amount: "+$720",
    // description: "在电价最低时充电，避开高峰期费用",
  },
  {
    icon: "❄️",
    title: "HVAC热能转移",
    amount: "+$540",
    // description: "预冷预热房屋，减少高峰期能源使用",
  },
  {
    icon: "🔋",
    title: "电池套利",
    amount: "+$390",
    // description: "低价时储电，高价时用电，最大化收益",
  },
];

export default function ROIResultsPage() {
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState("E-TOU-C");

  const handleStartSaving = () => {
    // Navigate to dashboard
    console.log("Start saving process");
    navigate("/dashboard");
  };

  const handleBack = () => {
    // Navigate back to welcome page
    navigate("/");
  };

  return (
    <MobileLayout
      showBackButton={true}
      showBottomNav={true}
      showHeader={true}
      title="预估结果"
      onBack={handleBack}
    >
      <main className="pt-8 pr-6 pl-6">
        {/* Main ROI Display */}
        <div className="text-center mb-8">
          <div className="mb-3 text-[40px] font-medium text-gray-900 leading-tight">
            $1,650
          </div>
          <p className="text-sm text-gray-500 leading-tight">
            预计年度节省（示意）
          </p>
        </div>

        {/* Utility Company and Plan Selection */}
        <div className="mb-8">
          <div className="mb-3">
            <p className="text-sm text-gray-900 mb-3 leading-tight">
              检测到电力公司：PG&E
            </p>
          </div>
          <label className="text-sm block mb-3 font-medium text-gray-900">
            选择套餐
          </label>
          <Select
            classNames={{
              trigger: "bg-gray-200 border-none h-12 rounded-md",
              value: "text-sm text-gray-900",
            }}
            selectedKeys={[selectedPlan]}
            onSelectionChange={(keys) =>
              setSelectedPlan(Array.from(keys)[0] as string)
            }
          >
            {plans.map((plan) => (
              <SelectItem key={plan.key}>{plan.label}</SelectItem>
            ))}
          </Select>
        </div>

        {/* Savings Sources */}
        <div className="mb-8">
          {/* <h2 className="text-xl mb-6 font-medium text-gray-900">节省来源</h2> */}
          <div className="flex flex-col gap-1.5">
            {savingSources.map((source, index) => (
              <div
                key={index}
                className="bg-gray-200 pt-[18px] pr-[18px] pb-[18px] pl-[18px] rounded-lg"
              >
                <div className="flex justify-between items-center mb-0">
                  <div className="flex items-center">
                    <span className="text-lg mr-3">{source.icon}</span>
                    <h3 className="text-sm font-medium text-gray-900">
                      {source.title}
                    </h3>
                  </div>
                  <span className="text-sm font-medium text-gray-900">
                    {source.amount}/年
                  </span>
                </div>
                {/* <p className="text-xs text-gray-500 leading-tight">
                  {source.description}
                </p> */}
              </div>
            ))}
          </div>
        </div>
      </main>

      <div className="flex flex-col mt-6">
        <div className="pr-6 pb-6 pl-6">
          <Button
            className="text-sm flex justify-center items-center w-full h-14 rounded-md font-medium bg-gray-900 text-white"
            onPress={handleStartSaving}
          >
            立即开始节省
          </Button>
        </div>
      </div>
    </MobileLayout>
  );
}
