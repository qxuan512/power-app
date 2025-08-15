import React from 'react';

interface FlowData {
  from: string;
  to: string;
  value: string;
  active: boolean;
}

interface EnergyFlowChartProps {
  centerNode?: {
    label: string;
    className?: string;
  };
  nodes?: {
    top?: { label: string; className?: string };
    right?: { label: string; className?: string };
    bottom?: { label: string; className?: string };
    left?: { label: string; className?: string };
  };
  flows?: FlowData[];
  className?: string;
}

const EnergyFlowChart: React.FC<EnergyFlowChartProps> = ({
  centerNode = { label: '中心', className: 'text-gray-700' },
  nodes = {
    top: { label: '上', className: 'text-blue-600' },
    right: { label: '右', className: 'text-blue-600' },
    bottom: { label: '下', className: 'text-blue-600' },
    left: { label: '左', className: 'text-blue-600' }
  },
  flows = [],
  className = ''
}) => {
  const getFlowForPath = (from: string, to: string) => {
    return flows.find(flow => 
      (flow.from === from && flow.to === to) || 
      (flow.from === to && flow.to === from)
    );
  };

  const getFlowValue = (from: string, to: string) => {
    const flow = getFlowForPath(from, to);
    return flow?.value || '';
  };



  return (
    <div className={`bg-gray-200 pt-[18px] pr-[18px] pb-[18px] pl-[18px] rounded-lg ${className}`}>
      <div className="relative rounded-lg overflow-hidden mx-auto bg-transparent" style={{ width: '320px', height: '200px' }}>
        {/* 中心节点矩形 - 缩放后的位置和尺寸 */}
        <div 
          className="absolute border-2 border-blue-500 text-center font-sans text-sm z-[2] shadow-sm rounded-md bg-transparent"
          style={{ 
            left: '135px', 
            top: '87px',
            width: '50px',
            height: '26px',
            lineHeight: '26px'
          }}
        >
          <span className={centerNode.className || 'text-gray-700'}>
            {centerNode.label}
          </span>
        </div>

        {/* 四周节点圆形 - 缩放后的位置和尺寸 */}
        {nodes.top && (
          <div 
            className="absolute border-2 border-blue-500 rounded-full text-center font-sans text-xs z-[2] shadow-sm bg-transparent"
            style={{ 
              left: '145px', 
              top: '25px',
              width: '30px',
              height: '30px',
              lineHeight: '30px'
            }}
          >
            <span className={nodes.top.className || 'text-blue-600'}>
              {nodes.top.label}
            </span>
          </div>
        )}

        {nodes.right && (
          <div 
            className="absolute border-2 border-blue-500 rounded-full text-center font-sans text-xs z-[2] shadow-sm bg-transparent"
            style={{ 
              left: '230px', 
              top: '85px',
              width: '30px',
              height: '30px',
              lineHeight: '30px'
            }}
          >
            <span className={nodes.right.className || 'text-blue-600'}>
              {nodes.right.label}
            </span>
          </div>
        )}

        {nodes.bottom && (
          <div 
            className="absolute border-2 border-blue-500 rounded-full text-center font-sans text-xs z-[2] shadow-sm bg-transparent"
            style={{ 
              left: '145px', 
              top: '145px',
              width: '30px',
              height: '30px',
              lineHeight: '30px'
            }}
          >
            <span className={nodes.bottom.className || 'text-blue-600'}>
              {nodes.bottom.label}
            </span>
          </div>
        )}

        {nodes.left && (
          <div 
            className="absolute border-2 border-blue-500 rounded-full text-center font-sans text-xs z-[2] shadow-sm bg-transparent"
            style={{ 
              left: '60px', 
              top: '85px',
              width: '30px',
              height: '30px',
              lineHeight: '30px'
            }}
          >
            <span className={nodes.left.className || 'text-blue-600'}>
              {nodes.left.label}
            </span>
          </div>
        )}

        {/* SVG箭头 - 缩放后的路径 */}
        <svg 
          width="320" 
          height="200" 
          className="absolute top-0 left-0 z-[1] pointer-events-none"
        >
          <defs>
            <marker id="arrowhead" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto" markerUnits="strokeWidth">
              <polygon points="0 1, 7 4, 0 7" fill="#4a90e2"/>
            </marker>
          </defs>
          
          {/* 太阳到中心 */}
          <path d="M160,55 Q160,70 160,87" stroke="#4a90e2" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />
          
          {/* 中心到右 (家到EV) */}
          <path d="M185,100 Q220,100 230,100" stroke="#4a90e2" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />
          
          {/* 中心到下 (家到电网) */}
          <path d="M160,113 Q160,135 160,145" stroke="#4a90e2" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />
          
          {/* 左到中心 (电池到家) */}
          <path d="M90,100 Q115,100 135,100" stroke="#4a90e2" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />

          {/* 显示能源流数值 */}
          {getFlowValue('top', 'center') && (
            <text x="175" y="75" className="text-xs fill-blue-600" fontFamily="sans-serif">
              {getFlowValue('top', 'center')}
            </text>
          )}
          {getFlowValue('center', 'right') && (
            <text x="207" y="95" className="text-xs fill-blue-600" fontFamily="sans-serif">
              {getFlowValue('center', 'right')}
            </text>
          )}
          {getFlowValue('center', 'bottom') && (
            <text x="175" y="130" className="text-xs fill-blue-600" fontFamily="sans-serif">
              {getFlowValue('center', 'bottom')}
            </text>
          )}
          {getFlowValue('left', 'center') && (
            <text x="113" y="95" className="text-xs fill-blue-600" fontFamily="sans-serif">
              {getFlowValue('left', 'center')}
            </text>
          )}
        </svg>
      </div>
    </div>
  );
};

export default EnergyFlowChart;