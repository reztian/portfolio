import Image from "next/image";

const PortfolioPage = () => {
  return (
    <div className="flex flex-col">
      {/* Image Container */}
      <div className="h-1/2 relative">
        <Image src="/hero.png" alt="" fill />
      </div>
      {/* Text Container */}
      <div className="h-1/2"></div>
    </div>
  );
};

export default PortfolioPage;
