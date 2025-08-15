import { Button } from "@heroui/react";
import { useNavigate } from "react-router-dom";

import { MobileLayout } from "@/layouts/mobile";

const devices = [
  {
    id: 1,
    name: "Tesla Model Y",
    status: "已连接 · 电量 85%",
    icon: "fas fa-car",
    bgColor: "bg-gray-900",
  },
  {
    id: 2,
    name: "Powerwall",
    status: "已连接 · 储能 92%",
    icon: "fas fa-battery-three-quarters",
    bgColor: "bg-gray-900",
  },
  {
    id: 3,
    name: "Nest 恒温器",
    status: "已连接 · 22°C",
    icon: "fas fa-thermometer-half",
    bgColor: "bg-gray-900",
  },
];

export default function DeviceManagementPage() {
  const navigate = useNavigate();

  const handleDeviceClick = (deviceId: number) => {
    console.log("Navigate to device details:", deviceId);
    // Navigate to device details page
    navigate("/device-details");
  };

  const handleAddDevice = () => {
    console.log("Add new device");
  };

  const handleBack = () => {
    console.log("Navigate back");
  };

  return (
    <MobileLayout
      showBackButton={true}
      showBottomNav={true}
      showHeader={true}
      title="设备管理"
      onBack={handleBack}
    >
      {/* Main Content */}
      <main className="pr-6 pl-6">
        <div className="flex flex-col gap-1.5">
          {devices.map((device) => (
            <div
              key={device.id}
              className="bg-gray-200 flex justify-between items-center pt-[18px] pr-[18px] pb-[18px] pl-[18px] rounded-lg cursor-pointer"
              onClick={() => handleDeviceClick(device.id)}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`${device.bgColor} rounded-full flex justify-center items-center w-10 h-10`}
                >
                  <i className={`${device.icon} text-lg text-white`} />
                </div>
                <div>
                  <h3 className="text-[14px] font-medium text-gray-900">
                    {device.name}
                  </h3>
                  <p className="text-[12px] text-gray-500">{device.status}</p>
                </div>
              </div>
              <button className="bg-transparent flex justify-center items-center w-5 h-5">
                <i className="fas fa-chevron-right text-gray-400" />
              </button>
            </div>
          ))}
        </div>

        {/* Add Device Button */}
        <div className="flex flex-col gap-3 pr-6 pb-6 pl-6 mt-6">
          <Button
            className="flex justify-center items-center gap-3 pt-[18px] pr-[18px] pb-[18px] pl-[18px] rounded-md bg-gray-900 text-white"
            onPress={handleAddDevice}
          >
            <i className="fas fa-plus" />
            <span className="text-[14px] font-medium">添加新设备</span>
          </Button>
        </div>
      </main>
    </MobileLayout>
  );
}
