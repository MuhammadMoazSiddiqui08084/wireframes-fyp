import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const events = [
  {
    id: 1,
    title: "Campus Tour - New Students",
    time: "10:00 AM",
    location: "Main Entrance"
  },
  {
    id: 2,
    title: "Orientation Day",
    time: "2:00 PM",
    location: "Student Center"
  },
  {
    id: 3,
    title: "Library Workshop",
    time: "4:00 PM",
    location: "Central Library"
  },
  {
    id: 4,
    title: "Career Fair",
    time: "9:00 AM",
    location: "Sports Complex"
  }
];

export function EventsBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % events.length);
    }, 3000); // Change event every 3 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + events.length) % events.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % events.length);
  };

  const currentEvent = events[currentIndex];

  return (
    <div className="bg-gray-300 border-y-2 border-gray-400 py-3 px-4">
      <div className="flex items-center justify-between gap-3">
        {/* Previous Button */}
        <button
          onClick={goToPrevious}
          className="shrink-0 w-8 h-8 flex items-center justify-center border-2 border-gray-500 bg-white hover:bg-gray-100 transition-colors"
          aria-label="Previous event"
        >
          <ChevronLeft className="w-5 h-5 text-gray-700" />
        </button>

        {/* Event Content */}
        <div className="flex-1 min-w-0">
          <div className="text-center">
            <div className="border-2 border-gray-500 bg-white px-4 py-2">
              <div className="text-gray-900 truncate mb-1">
                {currentEvent.title}
              </div>
              <div className="flex items-center justify-center gap-4 text-gray-600">
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 border-2 border-gray-500 bg-gray-200" />
                  <span className="text-sm">{currentEvent.time}</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 border-2 border-gray-500 bg-gray-200" />
                  <span className="text-sm truncate">{currentEvent.location}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Next Button */}
        <button
          onClick={goToNext}
          className="shrink-0 w-8 h-8 flex items-center justify-center border-2 border-gray-500 bg-white hover:bg-gray-100 transition-colors"
          aria-label="Next event"
        >
          <ChevronRight className="w-5 h-5 text-gray-700" />
        </button>
      </div>

      {/* Indicator Dots */}
      <div className="flex items-center justify-center gap-2 mt-2">
        {events.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentIndex(index);
              setIsAutoPlaying(false);
            }}
            className={`w-2 h-2 border border-gray-500 transition-colors ${
              index === currentIndex ? "bg-gray-700" : "bg-gray-300"
            }`}
            aria-label={`Go to event ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
