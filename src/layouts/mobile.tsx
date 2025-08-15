import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { BottomNav } from "@/components/bottom-nav";

interface MobileLayoutProps {
  children: React.ReactNode;
  title?: string;
  showHeader?: boolean;
  showStatusBar?: boolean;
  showBottomIndicator?: boolean;
  showBottomNav?: boolean;
  showBackButton?: boolean;
  headerAction?: React.ReactNode;
  onBack?: () => void;
}

export function MobileLayout({
  children,
  title,
  showHeader = false,
  showStatusBar = true,
  showBottomIndicator = true,
  showBottomNav = false,
  showBackButton = false,
  headerAction,
  onBack,
}: MobileLayoutProps) {
  const navigate = useNavigate();

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      navigate(-1);
    }
  };

  return (
    <div className="flex relative flex-col w-[390px] min-h-screen mx-auto bg-gray-100 font-system">
      {/* Status Bar - Fixed */}
      {showStatusBar && (
        <div className="text-sm flex justify-between items-center h-11 pr-6 pl-6 font-medium text-gray-900 bg-gray-100 flex-shrink-0">
          <div className="time">9:41</div>
          <div className="text-xs flex gap-1.5">
            <i className="fas fa-signal" />
            <i className="fas fa-wifi" />
            <i className="fas fa-battery-three-quarters" />
          </div>
        </div>
      )}

      {/* Header - Fixed */}
      {showHeader && title && (
        <header className="flex justify-between items-center h-14 pr-6 pl-6 bg-gray-100 py-1.5 flex-shrink-0">
          <div className="flex items-center flex-1">
            {showBackButton && (
              <button
                className="bg-transparent flex justify-center items-center w-6 h-6 mr-3 text-gray-900 hover:text-gray-600"
                onClick={handleBack}
              >
                <i className="fas fa-arrow-left text-lg" />
              </button>
            )}
            <div className="text-xl font-medium text-gray-900">{title}</div>
          </div>
          {headerAction && (
            <div className="bg-transparent flex justify-center items-center w-5 h-5">
              {headerAction}
            </div>
          )}
        </header>
      )}

      {/* Main Content - Scrollable */}
      <div className="flex-1 overflow-y-auto bg-gray-100">
        {children}
      </div>

      {/* Bottom Navigation - Fixed */}
      {showBottomNav && (
        <div className="flex-shrink-0">
          <BottomNav />
        </div>
      )}

      {/* Bottom Home Indicator - Fixed */}
      {showBottomIndicator && !showBottomNav && (
        <div className="flex justify-center items-center h-[34px] bg-gray-100 flex-shrink-0">
          <div className="w-[134px] h-[5px] rounded-full bg-gray-500" />
        </div>
      )}
    </div>
  );
}
