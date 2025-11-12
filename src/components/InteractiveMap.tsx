import { Navigation2, X, ZoomIn, ZoomOut, Maximize2, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Search } from "lucide-react";
interface MapLocation {
  id: string;
  name: string;
  x: number;
  y: number;
}

const mapLocations: MapLocation[] = [
  { id: "1", name: "Main Library", x: 30, y: 40 },
  { id: "2", name: "Student Center", x: 50, y: 30 },
  { id: "3", name: "Science Building", x: 70, y: 50 },
  { id: "4", name: "Cafeteria", x: 45, y: 60 },
  { id: "5", name: "Admin Building", x: 60, y: 25 },
  { id: "6", name: "Sports Complex", x: 25, y: 70 },
  { id: "7", name: "Engineering Building", x: 40, y: 45 },
  { id: "8", name: "Arts Center", x: 65, y: 65 },
  { id: "9", name: "Campus Store", x: 55, y: 50 },
  { id: "10", name: "Parking Lot A", x: 15, y: 25 },
];

export function InteractiveMap() {
  const [selectedLocation, setSelectedLocation] = useState<MapLocation | null>(null);
  const [fromLocation, setFromLocation] = useState<string>("");
  const [toLocation, setToLocation] = useState<string>("");
  const [showRoute, setShowRoute] = useState(false);

  const handleGetDirections = () => {
    if (fromLocation && toLocation) {
      setShowRoute(true);
    }
  };

  const handleClearRoute = () => {
    setFromLocation("");
    setToLocation("");
    setShowRoute(false);
  };

  const fromLocationData = mapLocations.find((loc) => loc.id === fromLocation);
  const toLocationData = mapLocations.find((loc) => loc.id === toLocation);

  return (
    <section className="py-8 px-3 bg-gray-50">
      <div className="w-full">
        <div className="text-center mb-6">
          <h2 className="mb-2 text-gray-900">Interactive Campus Map</h2>
          <p className="text-gray-600 text-xs">
            Click on any location to learn more or set your start and end points for turn-by-turn directions
          </p>
        </div>

        {/* Location Input Form */}
        <div className="border-2 border-gray-400 p-5 mb-6 bg-white rounded-xl shadow-sm">
          <div className="flex flex-col gap-3">
            <div className="space-y-1.5">
              <label className="text-xs text-gray-700 font-medium">
                From (Current Location)
              </label>
              <div className="relative">
                <select
                  value={fromLocation}
                  onChange={(e) => setFromLocation(e.target.value)}
                  className="w-full h-10 border-2 border-gray-400 px-3 text-xs appearance-none bg-white text-gray-700 rounded focus:outline-none focus:border-gray-600"
                >
                  <option value="">Select starting point...</option>
                  {mapLocations.map((loc) => (
                    <option key={loc.id} value={loc.id}>
                      {loc.name}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400 pointer-events-none" />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs text-gray-700 font-medium">
                To (Destination)
              </label>
              <div className="relative">
                <select
                  value={toLocation}
                  onChange={(e) => setToLocation(e.target.value)}
                  className="w-full h-10 border-2 border-gray-400 px-3 text-xs appearance-none bg-white text-gray-700 rounded focus:outline-none focus:border-gray-600"
                >
                  <option value="">Select destination...</option>
                  {mapLocations.map((loc) => (
                    <option key={loc.id} value={loc.id}>
                      {loc.name}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400 pointer-events-none" />
              </div>
            </div>

            <div className="flex gap-2">
              <button
                onClick={handleGetDirections}
                className="flex-1 h-10 border-2 border-gray-400 flex items-center justify-center gap-2 rounded hover:border-gray-600 hover:bg-gray-50 transition-all"
              >
                <Navigation2 className="w-3.5 h-3.5 text-gray-600" />
                <span className="text-gray-700 text-xs">Get Directions</span>
              </button>
              {showRoute && (
                <button
                  onClick={handleClearRoute}
                  className="w-10 h-10 border-2 border-gray-400 flex items-center justify-center rounded hover:border-gray-600 hover:bg-gray-50 transition-all"
                >
                  <X className="w-3.5 h-3.5 text-gray-600" />
                </button>
              )}
            </div>
          </div>

          {showRoute && fromLocationData && toLocationData && (
            <div className="mt-4 p-3 border-2 border-gray-400 bg-gray-50 rounded">
              <div className="flex items-center gap-2 mb-1.5">
                <Navigation2 className="w-4 h-4 text-gray-600" />
                <span className="text-gray-900 text-sm font-medium">Route Information</span>
              </div>
              <p className="text-xs text-gray-700">
                Showing route from <strong>{fromLocationData.name}</strong> to{" "}
                <strong>{toLocationData.name}</strong>
              </p>
              <p className="text-xs text-gray-600 mt-1">
                Estimated walking time: 5–8 minutes
              </p>
            </div>
          )}
        </div>

        {/* Map Section */}
        <div className="relative bg-white border-2 border-gray-400 rounded-xl shadow-sm overflow-hidden mb-10">
          {/* Map Controls */}
          <div className="absolute top-2 right-2 flex flex-col gap-1.5 z-10">
            {[ZoomIn, ZoomOut, Maximize2].map((Icon, i) => (
              <button
                key={i}
                className="w-8 h-8 border-2 border-gray-400 bg-white flex items-center justify-center rounded hover:border-gray-600 hover:bg-gray-50 transition-all"
              >
                <Icon className="w-4 h-4 text-gray-600" />
              </button>
            ))}
          </div>

          {/* Map Area */}
          <div className="relative aspect-[4/3] bg-gray-50">
            {/* Grid */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "linear-gradient(#e5e7eb 1px, transparent 1px), linear-gradient(90deg, #e5e7eb 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            ></div>

            {/* Decorative paths */}
            <svg className="absolute inset-0 w-full h-full opacity-50">
              <path
                d="M 50 100 Q 200 150 300 100"
                stroke="#9ca3af"
                strokeWidth="1"
                fill="none"
                strokeDasharray="3,3"
              />
              <path
                d="M 100 50 L 250 200"
                stroke="#9ca3af"
                strokeWidth="1"
                fill="none"
                strokeDasharray="3,3"
              />
            </svg>

            {/* Route Line */}
            {showRoute && fromLocationData && toLocationData && (
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
                <line
                  x1={`${fromLocationData.x}%`}
                  y1={`${fromLocationData.y}%`}
                  x2={`${toLocationData.x}%`}
                  y2={`${toLocationData.y}%`}
                  stroke="#4b5563"
                  strokeWidth="2"
                  strokeDasharray="6,3"
                />
              </svg>
            )}

            {/* Location Pins */}
            {mapLocations.map((location) => {
              const isStartPoint = showRoute && location.id === fromLocation;
              const isEndPoint = showRoute && location.id === toLocation;

              return (
                <button
                  key={location.id}
                  onClick={() => setSelectedLocation(location)}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 group z-20"
                  style={{ left: `${location.x}%`, top: `${location.y}%` }}
                >
                  <div className="relative">
                    <div
                      className={`w-4 h-4 border-2 rounded-full transition-all ${
                        isStartPoint || isEndPoint
                          ? "border-gray-700 bg-gray-500"
                          : selectedLocation?.id === location.id
                          ? "border-gray-600 bg-gray-300"
                          : "border-gray-500 bg-white"
                      }`}
                    ></div>
                    <div className="absolute top-full mt-1 bg-gray-800 text-white px-2 py-0.5 text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded">
                      {location.name}
                    </div>
                  </div>
                </button>
              );
            })}

            {/* Buildings + Trees */}
            <div className="absolute bottom-6 left-[20%] w-10 h-12 border-2 border-gray-400 bg-gray-200 flex items-end justify-center pb-0.5 rounded">
              <span className="text-xs text-gray-500">BLDG</span>
            </div>
            <div className="absolute bottom-6 left-[45%] w-12 h-14 border-2 border-gray-400 bg-gray-200 flex items-end justify-center pb-0.5 rounded">
              <span className="text-xs text-gray-500">BLDG</span>
            </div>
            <div className="absolute bottom-6 right-[20%] w-14 h-16 border-2 border-gray-400 bg-gray-200 flex items-end justify-center pb-0.5 rounded">
              <span className="text-xs text-gray-500">BLDG</span>
            </div>

            {/* Trees */}
            {[
              { top: "20%", left: "15%" },
              { top: "30%", left: "18%" },
              { top: "60%", right: "20%" },
              { top: "65%", right: "17%" },
            ].map((pos, i) => (
              <div
                key={i}
                className="absolute w-3 h-3 border-2 border-gray-400 rounded-full bg-gray-300"
                style={pos}
              ></div>
            ))}
          </div>

          {/* Selected Location Info */}
          {selectedLocation && (
            <div className="p-3 border-t-2 border-gray-400 bg-gray-50 rounded-b-xl">
              <div className="flex items-center justify-between gap-2">
                <div className="flex-1 min-w-0">
                  <h3 className="text-gray-900 mb-0.5 text-sm font-medium">
                    {selectedLocation.name}
                  </h3>
                  <p className="text-xs text-gray-600">
                    Click "Get Directions" to navigate here
                  </p>
                </div>
                <button className="h-8 px-3 border-2 border-gray-400 flex items-center justify-center rounded hover:border-gray-600 hover:bg-gray-50 transition-all">
                  <span className="text-xs text-gray-700">View</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* ⬇️ Added gap & visual separation before search content */}
        <div className="h-6"></div>

        {/* Search & Stats Section */}
        <div className="relative px-4">
          <div className="w-full text-center">
            {/* Search Bar */}
            <div className="relative mb-6">
              <div className="flex flex-col gap-2">
                <div className="h-11 border-2 border-gray-400 bg-white flex items-center px-3 rounded shadow-sm">
                  <Search className="w-4 h-4 text-gray-400 mr-2" />
                  <span className="text-gray-400 text-xs truncate">
                    Search for buildings...
                  </span>
                </div>
                <div className="h-10 border-2 border-gray-400 bg-gray-300 flex items-center justify-center rounded hover:bg-gray-200 transition">
                  <span className="text-gray-700 text-sm font-medium">
                    Search
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-3">
              <div className="border-2 border-gray-400 p-3 bg-white rounded shadow-sm">
                <div className="text-gray-900 mb-1 text-sm font-medium">2+</div>
                <div className="text-xs text-gray-600">Buildings</div>
              </div>
              <div className="border-2 border-gray-400 p-3 bg-white rounded shadow-sm">
                <div className="text-gray-900 mb-1 text-sm font-medium">2</div>
                <div className="text-xs text-gray-600">Departments</div>
              </div>
              <div className="border-2 border-gray-400 p-3 bg-white rounded shadow-sm">
                <div className="text-gray-900 mb-1 text-sm font-medium">
                  100+
                </div>
                <div className="text-xs text-gray-600">Locations</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
