import { Search } from "lucide-react";

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-gray-100 border-b-2 border-gray-400 py-8">
      {/* Pattern Background */}
      <div className="absolute inset-0" style={{
        backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(0,0,0,.05) 20px, rgba(0,0,0,.05) 40px)`
      }}></div>

      {/* Content */}
      <div className="relative px-4">
        <div className="w-full text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-6 h-6 border-2 border-gray-500"></div>
            <span className="text-gray-700 text-sm">Campus Navigator</span>
          </div>
          
          <h1 className="text-gray-900 mb-3 text-xl">Find Your Way Around Campus</h1>
          <p className="text-gray-700 mb-6 text-xs px-2">
            Navigate buildings, facilities, and important locations with ease. Perfect for new students and visitors.
          </p>

          {/* Search Bar Wireframe */}
          <div className="relative mb-6">
            <div className="flex flex-col gap-2">
              <div className="h-11 border-2 border-gray-400 bg-white flex items-center px-3">
                <Search className="w-4 h-4 text-gray-400 mr-2" />
                <span className="text-gray-400 text-xs truncate">Search for buildings...</span>
              </div>
              <div className="h-10 border-2 border-gray-400 bg-gray-300 flex items-center justify-center">
                <span className="text-gray-700 text-sm">Search</span>
              </div>
            </div>
          </div>

          {/* Quick Stats Wireframe */}
          <div className="grid grid-cols-3 gap-3">
            <div className="border-2 border-gray-400 p-3 bg-white">
              <div className="text-gray-900 mb-1">2+</div>
              <div className="text-xs text-gray-600">Buildings</div>
            </div>
            <div className="border-2 border-gray-400 p-3 bg-white">
              <div className="text-gray-900 mb-1">2</div>
              <div className="text-xs text-gray-600">Departments</div>
            </div>
            <div className="border-2 border-gray-400 p-3 bg-white">
              <div className="text-gray-900 mb-1">100+</div>
              <div className="text-xs text-gray-600">Locations</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
