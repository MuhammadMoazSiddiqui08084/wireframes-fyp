import { Navigation, Clock, Bookmark, Search, MapPin, Star } from "lucide-react";

const features = [
  {
    id: "1",
    icon: <Navigation className="w-8 h-8" />,
    title: "Turn-by-Turn Directions",
    description: "Get precise walking directions from your current location to any campus destination.",
  },
  {
    id: "2",
    icon: <Search className="w-8 h-8" />,
    title: "Smart Search",
    description: "Quickly find buildings, departments, facilities, or services with intelligent search.",
  },
  {
    id: "3",
    icon: <Clock className="w-8 h-8" />,
    title: "Real-Time Hours",
    description: "Check operating hours for all campus facilities and plan your visits accordingly.",
  },
  {
    id: "4",
    icon: <Bookmark className="w-8 h-8" />,
    title: "Save Favorites",
    description: "Bookmark frequently visited locations for quick access whenever you need them.",
  },
  {
    id: "5",
    icon: <MapPin className="w-8 h-8" />,
    title: "Interactive Maps",
    description: "Explore detailed floor plans and outdoor maps with points of interest highlighted.",
  },
  {
    id: "6",
    icon: <Star className="w-8 h-8" />,
    title: "Location Reviews",
    description: "Read reviews and ratings from other students to discover the best spots on campus.",
  },
];

export function Features() {
  return (
    <section className="py-8 px-3 bg-white">
      <div className="w-full">
        <div className="text-center mb-6">
          <h2 className="mb-2 text-gray-900">Everything You Need to Navigate Campus</h2>
          <p className="text-gray-600 text-xs">
            Powerful features designed to make your campus experience smoother and more enjoyable
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {features.map((feature) => (
            <div key={feature.id} className="text-center border-2 border-gray-400 p-4 bg-white">
              <div className="inline-flex items-center justify-center w-12 h-12 border-2 border-gray-400 rounded-full mb-3">
                <div className="text-gray-600 [&>svg]:w-5 [&>svg]:h-5">{feature.icon}</div>
              </div>
              <h3 className="text-gray-900 mb-1.5 text-sm">{feature.title}</h3>
              <p className="text-xs text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
