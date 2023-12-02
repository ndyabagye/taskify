import { Footer } from "./_components/footer";
import { Navbar } from "./_components/navbar";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full bg-gradient-to-b from-fuchsia-100 to-pink-200">
      {/* navbar */}
      <Navbar />
      <main className="pt-40 pb-20 bg-gradient-to-b from-fuchsia-100 to-pink-200">
        {children}
      </main>
      {/* footer */}
      <Footer />
    </div>
  );
};

export default MarketingLayout;
