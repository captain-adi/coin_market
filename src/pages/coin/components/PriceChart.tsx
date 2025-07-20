import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

import { format } from "date-fns";




function PriceChart({ data }: { data: { time: string; price: number }[] }) {
  if (!data || data.length === 0) {
    return (
      <div className="h-[250px] w-full border-2 rounded-md flex items-center justify-center text-muted-foreground">
        --
      </div>
    );
  }

  const prices = data.map((d) => d.price);
  const min = Math.min(...prices);
  const max = Math.max(...prices);
  const isUpTrend = prices[0] < prices[prices.length - 1];
  const lineColor = isUpTrend ? "#4caf50" : "#f44336";

  return (
    <div className="h-[500px] w-full border-2 rounded-md bg-background">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 10 }}>
          <XAxis
            dataKey="time"
            tick={{ fontSize: 12 }}
            minTickGap={20}
            tickFormatter={(str) => {
              try {
                return format(new Date(str), "d MMM");
              } catch {
                return str;
              }
            }}
          />
          <YAxis
            dataKey="price"
            tick={{ fontSize: 12 }}
            width={70}
            domain={[min, max]}
            tickFormatter={(v) => `$${v.toLocaleString(undefined, { maximumFractionDigits: 2 })}`}
          />
          <Tooltip
            content={({ active, payload, label }) => {
              if (active && payload && payload.length) {
                const price = payload[0].value;
                return (
                  <div style={{ border: '1px solid #eeeeee42', padding: 8, borderRadius: 4 }}>
                    <div><strong>Date:</strong> {label}</div>
                    <div><strong>Price:</strong> ${price?.toLocaleString(undefined, { maximumFractionDigits: 2 })}</div>
                  </div>
                );
              }
              return null;
            }}
          />
          <Line
            type="monotone"
            dataKey="price"
            stroke={lineColor}
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 5, stroke: lineColor, strokeWidth: 2, fill: '#fff' }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default PriceChart;
