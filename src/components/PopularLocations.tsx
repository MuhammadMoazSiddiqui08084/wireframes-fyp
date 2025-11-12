import { MapPin, Navigation } from "lucide-react";

const popularLocations = [
  {
    id: "1",
    name: "Central Library",
    category: "Library",
  },
  {
    id: "2",
    name: "Student Union",
    category: "Student Life",
  },
  {
    id: "3",
    name: "Main Cafeteria",
    category: "Dining",
  },
  {
    id: "4",
    name: "Registrar's Office",
    category: "Administration",
  },
  {
    id: "5",
    name: "Recreation Center",
    category: "Recreation",
  },
  {
    id: "6",
    name: "Campus Health Center",
    category: "Health",
  },
];

export function PopularLocations() {
  return (
    <section className="py-8 px-3 bg-white">
      <div className="w-full">
        <div className="text-center mb-6">
          <h2 className="mb-2 text-gray-900">Popular Locations</h2>
          <p className="text-gray-600 text-xs">
            The most visited places on campus - perfect starting points for new students
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2">
          {popularLocations.map((location) => (
            <div key={location.id} className="border-2 border-gray-400 p-3 bg-white hover:border-gray-600 transition-colors">
              {/* Icon */}
              <div className="w-6 h-6 border-2 border-gray-400 mb-2 flex items-center justify-center">
                <MapPin className="w-3 h-3 text-gray-500" />
              </div>
              
              {/* Title */}
              <h3 className="text-gray-900 mb-1 text-sm">{location.name}</h3>
              
              {/* Category */}
              <div className="text-xs text-gray-500 mb-2">{location.category}</div>
              
              {/* Button */}
              <button className="h-8 w-full border-2 border-gray-400 flex items-center justify-center gap-1.5 hover:border-gray-600 transition-colors">
                <Navigation className="w-3 h-3 text-gray-600" />
                <span className="text-xs text-gray-700">Directions</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}