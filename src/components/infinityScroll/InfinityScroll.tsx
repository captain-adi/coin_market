import { usegetCoinList } from "@/hooks/query";
import "./InfinityScroll.css";
import ScrollSkeleton from "@/skelton/ScrollSkeleton";

function InfinityScroll() {
  const { data, isLoading } = usegetCoinList();

  if (isLoading) return <ScrollSkeleton/>;
  if (!data || data.length === 0) return null;

 

  return (
    <div className="scroll-container">
  <div className="scroll-mask-wrapper">
    <div className="scroll-mask">
      <div className="scroll-wrapper auto-scroll">
        {[...data, ...data].map((coin, index) => (
          <div key={coin.id + index} className="coin-card">
            <img src={coin.image} alt={coin.name} className="coin-image" />
            <p className="coin-name">{coin.name}</p>
          </div>
        ))}
      </div>
    </div>

    {/* ✨ Left and right blur overlays */}
    <div className="fade-left"></div>
    <div className="fade-right"></div>
  </div>
</div>


  );
}

export default InfinityScroll;
