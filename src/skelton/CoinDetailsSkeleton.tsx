import { Skeleton } from "@/components/ui/skeleton";

function CoinDetailsSkeleton() {
  return (
    <div className="container  mx-auto w-screen h-screen p-4 flex gap-3">
      {/* Left Section */}
      <div className="w-1/2 h-full rounded-2xl shadow-xl p-4 flex flex-col gap-4">
        
        <Skeleton className="h-full w-full rounded-md" />
        <Skeleton className="h-full w-full rounded-md" />
      </div>

  
      <div className="w-full h-full rounded-2xl shadow-xl p-4 flex flex-col gap-4">
        {/* Top Part */}
        <div className="flex flex-col gap-4 flex-1">
          <Skeleton className="h-10 w-1/3 rounded-md" />
          <Skeleton className="h-74 w-full rounded-xl" />
          <div className="flex gap-4">
            <Skeleton className="h-10 w-24 rounded-lg" />
            <Skeleton className="h-10 w-24 rounded-lg" />
          </div>
        </div>

        {/* Bottom Part */}
        <div className="flex flex-col gap-3 flex-1">
          <Skeleton className="h-6 w-full rounded-md" />
          <Skeleton className="h-6 w-5/6 rounded-md" />
          <Skeleton className="h-6 w-3/4 rounded-md" />
          <Skeleton className="h-6 w-1/2 rounded-md" />
        </div>
        <div className="flex flex-col gap-3 flex-1">
          <Skeleton className="h-6 w-full rounded-md" />
          <Skeleton className="h-6 w-5/6 rounded-md" />
          <Skeleton className="h-6 w-3/4 rounded-md" />
          <Skeleton className="h-6 w-1/2 rounded-md" />
        </div>
      </div>
    </div>
  );
}

export default CoinDetailsSkeleton;
