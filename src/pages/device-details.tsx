import { useState } from "react";
import { Button } from "@heroui/react";
import { useNavigate } from "react-router-dom";

import { MobileLayout } from "@/layouts/mobile";

export default function DeviceDetailsPage() {
  const navigate = useNavigate();
  const [readyTime, setReadyTime] = useState("7:00 AM");
  const [targetLevel, setTargetLevel] = useState("80%");

  const handleBack = () => {
    navigate("/device-management");
  };

  const handleOverrideCharge = () => {
    console.log("Override optimization and charge immediately");
  };

  const handleEditReadyTime = () => {
    console.log("Edit ready time");
  };

  const handleEditTargetLevel = () => {
    console.log("Edit target level");
  };

  return (
    <MobileLayout
      showBackButton={true}
      showBottomNav={true}
      showHeader={true}
      title="Tesla Model Y"
      onBack={handleBack}
    >
      <main className="pr-6 pl-6">
        {/* Current Status */}
        <div className="flex flex-col items-center pt-8 pb-8">
          <div className="mb-2 text-[40px] font-medium text-green-600">85%</div>
          <p className="text-[14px] text-gray-500">当前 SoC · 已插枪</p>
        </div>

        {/* Optimization Suggestion */}
        <div className="bg-gray-200 mb-6 pt-[18px] pr-[18px] pb-[18px] pl-[18px] rounded-lg">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-transparent flex justify-center items-center w-5 h-5">
              <i className="fas fa-lightbulb text-gray-900" />
            </div>
            <span className="text-[14px] font-medium text-gray-900">
              优化建议
            </span>
          </div>
          <p className="text-[12px] text-gray-500 leading-tight">
            计划于 00:00 低谷开始充电 · 预计成本 $3.50
          </p>
        </div>

        {/* Override Button */}
        <Button
          className="w-full mb-8 pt-[18px] pr-[18px] pb-[18px] pl-[18px] rounded-md bg-gray-900 text-white font-medium"
          onPress={handleOverrideCharge}
        >
          立即充电（覆盖优化）
        </Button>

        {/* Settings */}
        <div className="flex flex-col gap-1.5">
          <div className="bg-gray-200 flex justify-between items-center pt-[18px] pr-[18px] pb-[18px] pl-[18px] rounded-lg">
            <span className="text-[14px] text-gray-900">
              准备就绪时间：{readyTime}
            </span>
            <button
              className="text-[14px] font-medium text-gray-900"
              onClick={handleEditReadyTime}
            >
              编辑
            </button>
          </div>

          <div className="bg-gray-200 flex justify-between items-center pt-[18px] pr-[18px] pb-[18px] pl-[18px] rounded-lg">
            <span className="text-[14px] text-gray-900">
              目标电量水平：{targetLevel}
            </span>
            <button
              className="text-[14px] font-medium text-gray-900"
              onClick={handleEditTargetLevel}
            >
              编辑
            </button>
          </div>
        </div>
      </main>
    </MobileLayout>
  );
}
