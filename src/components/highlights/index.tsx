import { Card, CardContent, CardTitle } from "../ui/card";

interface IHighLights {
  title: string;
  value: Array<{
    name: string;
    value: {
      price: string;
      change?: string | number;
    };
  }>;
}

function HighLights({ title, value }: IHighLights) {
  return (
    <Card className="w-1/2">
      <CardTitle>{title}</CardTitle>
      <CardContent>
        {value.map((item, index) => (
          <div key={index} className="flex justify-between items-center">
            <span className="text-muted-foreground font-bold">{item.name}</span>
            <div>
              <span className="font-bold">{item.value.price}</span>
              <span>{item.value.change}</span>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

export default HighLights;
