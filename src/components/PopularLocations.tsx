import { MapPin, Clock, Building } from "lucide-react";

const popularLocations = [
  {
    id: "1",
    name: "Central Library",
    category: "Library",
    description: "Main campus library with extensive study areas, computer labs, and resource centers.",
    hours: "Mon-Fri: 7AM-11PM",
    building: "Building A, Floor 1-4",
    distance: "0.3 miles from main entrance",
  },
  {
    id: "2",
    name: "Student Union",
    category: "Student Life",
    description: "Hub for student activities, events, club meetings, and social gatherings.",
    hours: "Mon-Sun: 8AM-10PM",
    building: "Building C, Central Campus",
    distance: "0.2 miles from main entrance",
  },
  {
    id: "3",
    name: "Main Cafeteria",
    category: "Dining",
    description: "Largest dining facility offering diverse meal options and dining plans.",
    hours: "Daily: 7AM-9PM",
    building: "Building D, Floor 1",
    distance: "0.4 miles from main entrance",
  },
  {
    id: "4",
    name: "Registrar's Office",
    category: "Administration",
    description: "Handle enrollment, transcripts, course registration, and academic records.",
    hours: "Mon-Fri: 9AM-5PM",
    building: "Admin Building, Floor 2",
    distance: "0.1 miles from main entrance",
  },
  {
    id: "5",
    name: "Recreation Center",
    category: "Recreation",
    description: "State-of-the-art fitness center with pool, courts, and wellness programs.",
    hours: "Mon-Fri: 6AM-11PM",
    building: "Sports Complex, West Campus",
    distance: "0.6 miles from main entrance",
  },
  {
    id: "6",
    name: "Campus Health Center",
    category: "Health",
    description: "Medical services, counseling, and wellness support for all students.",
    hours: "Mon-Fri: 8AM-6PM",
    building: "Health Building, North Campus",
    distance: "0.5 miles from main entrance",
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

        <div className="flex flex-col gap-3">
          {popularLocations.map((location) => (
            <div key={location.id} className="border-2 border-gray-400 p-4 bg-white hover:border-gray-600 transition-colors">
              {/* Icon */}
              <div className="w-8 h-8 border-2 border-gray-400 mb-3 flex items-center justify-center">
                <MapPin className="w-4 h-4 text-gray-500" />
              </div>
              
              {/* Title */}
              <h3 className="text-gray-900 mb-0.5">{location.name}</h3>
              
              {/* Category */}
              <div className="text-xs text-gray-500 mb-2">{location.category}</div>
              
              {/* Description */}
              <p className="text-xs text-gray-700 mb-3">
                {location.description}
              </p>
              
              {/* Info items */}
              <div className="space-y-1.5 mb-3 text-xs text-gray-600">
                <div className="flex items-center gap-2">
                  <Clock className="w-3 h-3 text-gray-500 flex-shrink-0" />
                  <span>{location.hours}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Building className="w-3 h-3 text-gray-500 flex-shrink-0" />
                  <span>{location.building}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3 h-3 text-gray-500 flex-shrink-0" />
                  <span>{location.distance}</span>
                </div>
              </div>
              
              {/* Button */}
              <div className="h-9 w-full border-2 border-gray-400 flex items-center justify-center hover:border-gray-600 transition-colors cursor-pointer">
                <span className="text-xs text-gray-700">View Details</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
