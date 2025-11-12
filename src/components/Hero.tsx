export function Hero() {
  return (
    <div className="relative overflow-hidden bg-gray-100 border-b-2 border-gray-400 py-8">
      {/* Pattern Background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(0,0,0,.05) 20px, rgba(0,0,0,.05) 40px)`
        }}
      ></div>

      {/* Centered Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-md mx-auto">
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="w-6 h-6 border-2 border-gray-500"></div>
          <span className="text-gray-700 text-sm">Campus Eye</span>
        </div>

        <h1 className="text-gray-900 mb-3 text-xl">Find Your Way Around Campus</h1>
        <p className="text-gray-700 mb-6 text-xs px-2">
          Navigate buildings, facilities, and important locations with ease. Perfect for new students and visitors.
        </p>
      </div>
    </div>
  );
}
