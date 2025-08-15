import { useState } from "react";
import { Button } from "@heroui/react";
import { PieChart } from '@mui/x-charts/PieChart';

import { MobileLayout } from "@/layouts/mobile";

export default function BillUploadPage() {
  const [activeUploadTab, setActiveUploadTab] = useState("ocr");

  // 用电量分析数据
  const usageData = [
    {
      id: 'managed',
      value: 680,
      label: '已管理部分',
      color: '#86efac' // 绿色
    },
    {
      id: 'unknown', 
      value: 320,
      label: '未知部分',
      color: '#fca5a5' // 红色
    }
  ];

  const handleBack = () => {
    console.log("Navigate back");
  };

  const handleFileSelect = () => {
    console.log("Select file for upload");
  };

  return (
    <MobileLayout
      showBackButton={true}
      showBottomNav={true}
      showHeader={true}
      title="账单上传"
      onBack={handleBack}
    >
      {/* Main Content */}
      <main className="pr-6 pb-6 pl-6">
        {/* Upload Type Tabs */}
        <div className="bg-gray-200 mb-1.5 rounded-lg p-1.5">
          <div className="flex gap-0">
            <div
              className={`flex justify-center items-center grow h-9 cursor-pointer rounded-lg ${
                activeUploadTab === "ocr" ? "bg-white" : ""
              }`}
              onClick={() => setActiveUploadTab("ocr")}
            >
              <div
                className={`text-sm font-medium ${
                  activeUploadTab === "ocr" ? "text-gray-900" : "text-gray-400"
                }`}
              >
                OCR 上传
              </div>
            </div>
            <div
              className={`flex justify-center items-center grow h-9 cursor-pointer rounded-lg ${
                activeUploadTab === "manual" ? "bg-white" : ""
              }`}
              onClick={() => setActiveUploadTab("manual")}
            >
              <div
                className={`text-sm font-medium ${
                  activeUploadTab === "manual"
                    ? "text-gray-900"
                    : "text-gray-400"
                }`}
              >
                手动输入
              </div>
            </div>
          </div>
        </div>

        {/* File Upload Area */}
        <div className="bg-gray-200 mb-1.5 pt-[18px] pr-[18px] pb-[18px] pl-[18px] rounded-lg">
          <div className="flex flex-col justify-center items-center pt-12 pb-12">
            <div className="bg-transparent flex justify-center items-center w-12 h-12 mb-4">
              <i className="fas fa-cloud-upload text-[32px] text-gray-400" />
            </div>
            <div className="text-sm mb-2 font-medium text-gray-900">
              上传电费账单
            </div>
            <div className="text-xs text-center mb-6 text-gray-400">
              <span>支持 JPG、PNG、PDF 格式</span>
              <br />
              <span>文件大小不超过 10MB</span>
            </div>
            <Button
              className="text-sm pt-3 pr-6 pb-3 pl-6 rounded-lg font-medium bg-gray-900 text-white"
              onPress={handleFileSelect}
            >
              选择文件
            </Button>
          </div>
        </div>

        {/* Usage Analysis */}
        <div className="bg-gray-200 pt-[18px] pr-[18px] pb-[18px] pl-[18px] rounded-lg">
          <div className="text-sm mb-4 font-medium text-gray-900">
            用电量分析
          </div>

          {/* MUI Donut Chart */}
          <div className="flex justify-center mb-4 relative">
            <PieChart
              series={[
                {
                  data: usageData,
                  innerRadius: 40,
                  outerRadius: 80,
                  arcLabel: 'value',
                  arcLabelMinAngle: 35,
                }
              ]}
              width={200}
              height={200}
              colors={['#86efac', '#fca5a5']}
              slots={{
                legend: () => null
              }}
            />
            {/* Center Text Overlay */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <div className="text-lg font-bold text-gray-900">1000</div>
              <div className="text-xs text-gray-600">kWh</div>
            </div>
          </div>

          {/* Data Summary */}
          <div className="space-y-2 mb-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-400 rounded-full mr-2" />
                <span className="text-sm text-gray-700">已管理部分</span>
              </div>
              <span className="text-sm font-medium text-gray-900">
                680 kWh (68%)
              </span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-red-300 rounded-full mr-2" />
                <span className="text-sm text-gray-700">未知部分</span>
              </div>
              <span className="text-sm font-medium text-gray-900">
                320 kWh (32%)
              </span>
            </div>
          </div>
        </div>
      </main>
    </MobileLayout>
  );
}
