import { Skeleton } from "@/components/ui/skeleton";

function ScrollSkeleton() {
  return (
    <div className="container mx-auto p-4">
      <div className="scroll-container">
        <div className="flex gap-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="coin-card h-48 flex-shrink-0">
              <Skeleton className="w-12 h-12 rounded-full mb-2 mx-auto" />
              <Skeleton className="w-20 h-4 mb-1" />
              <Skeleton className="w-16 h-3" />
            </div>
          ))}
        </div>
      </div>
     
    </div>
  );
}

export default ScrollSkeleton;
