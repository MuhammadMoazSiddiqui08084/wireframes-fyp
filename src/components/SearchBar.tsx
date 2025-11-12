import { Search, Camera, X } from "lucide-react";
import { useState, useRef } from "react";

export function SearchBar() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="bg-white border-b-2 border-gray-400 px-4 py-4">
      {/* Search Bar Wireframe */}
      <div className="relative">
        <div className="flex flex-col gap-2">
          <div className="h-11 border-2 border-gray-400 bg-white flex items-center px-3">
            <Search className="w-4 h-4 text-gray-400 mr-2" />
            <span className="text-gray-400 text-xs truncate flex-1">Search for buildings...</span>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              capture="environment"
              onChange={handleImageSelect}
              className="hidden"
              id="search-image-input"
            />
            <label
              htmlFor="search-image-input"
              className="cursor-pointer w-8 h-8 border-2 border-gray-400 bg-gray-100 flex items-center justify-center hover:border-gray-600 transition-colors ml-2"
            >
              <Camera className="w-4 h-4 text-gray-600" />
            </label>
          </div>

          {/* Image Preview */}
          {selectedImage && (
            <div className="border-2 border-gray-400 p-2 bg-gray-50">
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 border-2 border-gray-400 bg-white overflow-hidden flex-shrink-0">
                  <img src={selectedImage} alt="Selected" className="w-full h-full object-cover grayscale" />
                </div>
                <span className="text-xs text-gray-700 flex-1">Photo captured</span>
                <button
                  onClick={handleRemoveImage}
                  className="w-6 h-6 border-2 border-gray-400 bg-white flex items-center justify-center hover:border-gray-600 transition-colors"
                >
                  <X className="w-3 h-3 text-gray-600" />
                </button>
              </div>
            </div>
          )}

          <div className="h-10 border-2 border-gray-400 bg-gray-300 flex items-center justify-center">
            <span className="text-gray-700 text-sm">Search</span>
          </div>
        </div>
      </div>
    </div>
  );
}