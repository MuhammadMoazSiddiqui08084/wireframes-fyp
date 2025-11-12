import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { CategoryGrid } from "./components/CategoryGrid";
import { PopularLocations } from "./components/PopularLocations";
import { InteractiveMap } from "./components/InteractiveMap";
import { Features } from "./components/Features";
import { QuickActions } from "./components/QuickActions";
import { Footer } from "./components/Footer";
import { WelcomePage } from "./components/WelcomePage";

type UserType = "student" | "visitor" | null;

export default function App() {
  const [userType, setUserType] = useState<UserType>(null);

  //Check if user has already selected their type
  useEffect(() => {
    const savedUserType = localStorage.getItem("userType") as UserType;
    if (savedUserType) {
      setUserType(savedUserType);
    }
  }, []);

  const handleSelectUserType = (type: "student" | "visitor") => {
    setUserType(type);
    localStorage.setItem("userType", type);
  };

  // Show welcome page if user hasn't selected their type
  if (!userType) {
    return (
      <div className="min-h-screen bg-gray-200 flex items-center justify-center p-4">
        {/* Mobile Phone Frame */}
        <div className="w-full max-w-[390px] h-[844px] bg-gray-900 rounded-[3rem] p-3 shadow-2xl">
          <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
            <WelcomePage onSelectUserType={handleSelectUserType} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center p-4">
      {/* Mobile Phone Frame */}
      <div className="w-full max-w-[390px] h-[844px] bg-gray-900 rounded-[3rem] p-3 shadow-2xl">
        <div className="w-full h-full bg-white rounded-[2.5rem] overflow-y-auto overflow-x-hidden">
          <Header />
          <Hero />
          <InteractiveMap />
          <CategoryGrid />
          <PopularLocations />
          <Features />
          <QuickActions />
          <Footer />
        </div>
      </div>
    </div>
  );
}
