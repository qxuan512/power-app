
import { Card, CardBody, CardHeader } from '@heroui/react';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

export interface ApexBarChartData {
  label: string;
  value: number;
  highlighted?: boolean;
  color?: string;
}

export interface ApexBarChartProps {
  title?: string;
  data: ApexBarChartData[];
  unit?: string;
  className?: string;
  height?: number;
  subtitle?: string;
}

export function ApexBarChart({ 
  title, 
  data, 
  unit = '元/年', 
  className = '',
  height = 240,
  subtitle
}: ApexBarChartProps) {
  
  // 准备图表数据
  const categories = data.map(item => item.label);
  const seriesData = data.map(item => item.value);
  
  // 为每个条形设置颜色
  const colors = data.map(item => {
    if (item.highlighted) {
      return '#000000'; // 黑色突出显示
    }
    return item.color || '#ffffff'; // 默认白色或自定义颜色
  });

  const chartConfig: ApexOptions = {
    chart: {
      type: 'bar',
      height: height,
      toolbar: {
        show: false,
      },
      background: 'transparent',
    },

    dataLabels: {
      enabled: true,
      formatter: function (val: number) {
        return `$${val}/${unit.split('/')[1] || '年'}`;
      },
      style: {
        fontSize: '12px',
        fontWeight: '600',
        colors: ['#374151']
      },
      offsetY: -18,
    },
    colors: colors,
    plotOptions: {
      bar: {
        columnWidth: '60%',
        borderRadius: 4,
        dataLabels: {
          position: 'top',
        },
        distributed: true, // 每个条形使用不同颜色
      },
    },
    xaxis: {
      categories: categories,
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      labels: {
        style: {
          colors: '#374151',
          fontSize: '12px',
          fontFamily: 'inherit',
          fontWeight: '500',
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: '#6b7280',
          fontSize: '10px',
          fontFamily: 'inherit',
          fontWeight: '400',
        },
        formatter: function (val: number) {
          return `$${val}`;
        },
      },
    },
    grid: {
      show: true,
      borderColor: '#f3f4f6',
      strokeDashArray: 3,
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
      padding: {
        top: 0,
        right: 10,
        bottom: -10,
        left: 10,
      },
    },
    fill: {
      opacity: 1,
      type: 'solid',
    },
    tooltip: {
      theme: 'light',
      style: {
        fontSize: '12px',
        fontFamily: 'inherit',
      },
      y: {
        formatter: function (val: number) {
          return `$${val} ${unit}`;
        },
      },
      fixed: {
        enabled: true,
        position: 'topRight',
        offsetX: 0,
        offsetY: 0,
      },
    },
    legend: {
      show: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: data.map(item => {
        if (item.highlighted) {
          return '#000000';
        }
        return '#6b7280'; // 边框颜色
      }),
    },
  };

  const series = [
    {
      name: '费用',
      data: seriesData,
    },
  ];

  return (
    <div className={className}>
      <Card className="bg-gray-200 shadow-none">
        {title && (
          <CardHeader className="pb-0 pt-2">
            <div className="w-full">
              <h3 className="text-sm font-medium text-gray-900 text-center mb-1">
                {title}
              </h3>
              {subtitle && (
                <p className="text-xs text-gray-600 text-center">
                  {subtitle}
                </p>
              )}
            </div>
          </CardHeader>
        )}
        <CardBody className="pt-1 pb-2">
          <div className="px-2 pt-1 pb-1 rounded-lg">
            <Chart 
              options={chartConfig} 
              series={series} 
              type="bar" 
              height={height} 
            />
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default ApexBarChart;