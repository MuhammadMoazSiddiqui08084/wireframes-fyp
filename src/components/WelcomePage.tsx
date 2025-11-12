import { GraduationCap, Users } from "lucide-react";

interface WelcomePageProps {
  onSelectUserType: (type: "student" | "visitor") => void;
}

export function WelcomePage({ onSelectUserType }: WelcomePageProps) {
  return (
    <div className="h-full bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full">
        {/* Header Wireframe */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 border-2 border-gray-400"></div>
            <h1 className="text-gray-900 text-lg">Campus Eye</h1>
          </div>
          <p className="text-gray-700 text-sm px-4">Welcome! Let us customize your navigation experience</p>
        </div>

        <div className="flex flex-col gap-4">
          {/* Student Card Wireframe */}
          <div className="border-2 border-gray-400 p-5 bg-white hover:border-gray-600 transition-colors">
            <button
              onClick={() => onSelectUserType("student")}
              className="w-full text-left"
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 border-2 border-gray-400 rounded-full flex items-center justify-center">
                  <GraduationCap className="w-8 h-8 text-gray-500" />
                </div>
              </div>
              
              <h2 className="text-center mb-3 text-gray-900">I'm a Student</h2>
              
              <ul className="space-y-2 mb-4 text-gray-700 text-xs">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-1.5 flex-shrink-0"></div>
                  <span>Access to class schedules and academic buildings</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-1.5 flex-shrink-0"></div>
                  <span>Save favorite locations and routes</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-1.5 flex-shrink-0"></div>
                  <span>Student-specific resources and services</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-1.5 flex-shrink-0"></div>
                  <span>Shortcuts to dining halls and dorms</span>
                </li>
              </ul>

              <div className="w-full h-10 border-2 border-gray-400 flex items-center justify-center hover:border-gray-600 transition-colors">
                <span className="text-gray-700 text-sm">Continue as Student</span>
              </div>
            </button>
          </div>

          {/* Visitor Card Wireframe */}
          <div className="border-2 border-gray-400 p-5 bg-white hover:border-gray-600 transition-colors">
            <button
              onClick={() => onSelectUserType("visitor")}
              className="w-full text-left"
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 border-2 border-gray-400 rounded-full flex items-center justify-center">
                  <Users className="w-8 h-8 text-gray-500" />
                </div>
              </div>
              
              <h2 className="text-center mb-3 text-gray-900">I'm a Visitor</h2>
              
              <ul className="space-y-2 mb-4 text-gray-700 text-xs">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-1.5 flex-shrink-0"></div>
                  <span>Guided campus tours and highlights</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-1.5 flex-shrink-0"></div>
                  <span>Parking and visitor information</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-1.5 flex-shrink-0"></div>
                  <span>Key administrative offices and services</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-1.5 flex-shrink-0"></div>
                  <span>Popular attractions and facilities</span>
                </li>
              </ul>

              <div className="w-full h-10 border-2 border-gray-400 flex items-center justify-center hover:border-gray-600 transition-colors">
                <span className="text-gray-700 text-sm">Continue as Visitor</span>
              </div>
            </button>
          </div>
        </div>

        <div className="text-center mt-6">
          <p className="text-gray-600 text-xs px-4">
            Don't worry, you can always change this later in settings
          </p>
        </div>
      </div>
    </div>
  );
}
