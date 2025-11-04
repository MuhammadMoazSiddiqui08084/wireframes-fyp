import { Building2, GraduationCap, Utensils, Book, Heart, Bike, Coffee, Users } from "lucide-react";

interface Category {
  id: string;
  name: string;
  icon: React.ReactNode;
  count: number;
}

const categories: Category[] = [
  { id: "1", name: "Academic", icon: <GraduationCap className="w-6 h-6" />, count: 25 },
  { id: "2", name: "Dining", icon: <Utensils className="w-6 h-6" />, count: 12 },
  { id: "3", name: "Libraries", icon: <Book className="w-6 h-6" />, count: 5 },
  { id: "4", name: "Health", icon: <Heart className="w-6 h-6" />, count: 3 },
  { id: "5", name: "Recreation", icon: <Bike className="w-6 h-6" />, count: 8 },
  { id: "6", name: "Student Life", icon: <Users className="w-6 h-6" />, count: 15 },
  { id: "7", name: "Cafes", icon: <Coffee className="w-6 h-6" />, count: 7 },
  { id: "8", name: "Administration", icon: <Building2 className="w-6 h-6" />, count: 10 },
];

export function CategoryGrid() {
  return (
    <section className="py-8 px-3 bg-gray-50">
      <div className="w-full">
        <div className="text-center mb-6">
          <h2 className="mb-2 text-gray-900">Explore by Category</h2>
          <p className="text-gray-600 text-xs">
            Find what you're looking for quickly by browsing our organized categories
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              className="p-3 bg-white border-2 border-gray-400 text-left hover:border-gray-600 transition-colors"
            >
              <div className="w-9 h-9 border-2 border-gray-400 flex items-center justify-center mb-2">
                <div className="text-gray-600 [&>svg]:w-4 [&>svg]:h-4">{category.icon}</div>
              </div>
              <h3 className="text-gray-900 mb-0.5 text-sm">{category.name}</h3>
              <p className="text-xs text-gray-600">{category.count} locations</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
