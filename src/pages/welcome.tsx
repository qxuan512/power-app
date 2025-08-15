import { useState } from "react";
import { Button, Input } from "@heroui/react";
import { useNavigate } from "react-router-dom";

import { MobileLayout } from "@/layouts/mobile";

const devices = ["EV", "Powerwall", "Nest", "Solar"];

export default function WelcomePage() {
  const navigate = useNavigate();
  const [zipCode, setZipCode] = useState("");
  const [selectedDevices, setSelectedDevices] = useState<string[]>([]);

  const toggleDevice = (device: string) => {
    setSelectedDevices((prev) =>
      prev.includes(device)
        ? prev.filter((d) => d !== device)
        : [...prev, device],
    );
  };

  const handleCalculate = () => {
    // Navigate to ROI results page
    console.log("Calculate savings for:", { zipCode, selectedDevices });
    navigate("/roi-results");
  };

  return (
    <MobileLayout showBottomNav={true} showHeader={true} title="智能节能计算器">
      <main className="pt-8 pr-6 pl-6">
        <div className="mb-8">
          <h1 className="mb-3 text-[30px] font-medium text-gray-900 leading-tight">
            您每年能省多少钱？
          </h1>
          <p className="text-sm text-gray-500 leading-tight">
            输入您的信息，我们立即计算您的能源优化潜力。
          </p>
        </div>

        <div className="mb-8">
          <label className="text-sm block mb-3 font-medium text-gray-900">
            您的邮政编码
          </label>
          <Input
            classNames={{
              input: "text-sm",
              inputWrapper: "bg-gray-200 border-none h-12 rounded-md",
            }}
            placeholder="例如 94043"
            type="text"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
          />
        </div>

        <div className="mb-12">
          <label className="text-sm block mb-3 font-medium text-gray-900">
            选择您拥有的设备
          </label>
          <div className="flex flex-wrap gap-1.5">
            {devices.map((device) => (
              <Button
                key={device}
                className={`text-sm font-medium rounded-md ${
                  selectedDevices.includes(device)
                    ? "bg-gray-900 text-white"
                    : "bg-gray-200 text-gray-900"
                }`}
                color={selectedDevices.includes(device) ? "primary" : "default"}
                size="sm"
                variant={selectedDevices.includes(device) ? "solid" : "flat"}
                onPress={() => toggleDevice(device)}
              >
                {device}
              </Button>
            ))}
          </div>
        </div>
      </main>

      <div className="flex flex-col mt-6">
        <div className="pr-6 pb-6 pl-6">
          <Button
            className="text-sm flex justify-center items-center w-full h-14 rounded-md font-medium bg-gray-900 text-white"
            onPress={handleCalculate}
          >
            计算我的节省额
          </Button>
        </div>
      </div>
    </MobileLayout>
  );
}
