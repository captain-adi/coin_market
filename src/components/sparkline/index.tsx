import { LineChart, Line, ResponsiveContainer } from 'recharts';

interface SparklineRendererProps {
  value?: number[];
}

const SparklineRenderer = ({ value = [] }: SparklineRendererProps) => {
  if (!value.length) return <div>--</div>;

  // Normalize values between 0 and 1 for a smoother chart
  const min = Math.min(...value);
  const max = Math.max(...value);
  const range = max - min || 1; // prevent division by 0

  const normalizedData = value.map((price, index) => ({
    index,
    price: (price - min) / range, // normalize
  }));

  const isUpTrend = value[0] < value[value.length - 1];
  const lineColor = isUpTrend ? "#4caf50" : "#f44336";

  return (
    <div style={{ width: 120, height: 40 }}>
      <ResponsiveContainer>
        <LineChart
          data={normalizedData}
          margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
        >
          <Line
            type="monotone"
            dataKey="price"
            stroke={lineColor}
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SparklineRenderer;
    