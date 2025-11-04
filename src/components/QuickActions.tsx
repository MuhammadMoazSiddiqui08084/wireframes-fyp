import { Compass, Phone, Calendar, MessageCircle, Square } from "lucide-react";

const actions = [
  {
    id: "1",
    icon: <Compass className="w-5 h-5" />,
    title: "Campus Tour",
    subtitle: "Virtual walkthrough",
  },
  {
    id: "2",
    icon: <Phone className="w-5 h-5" />,
    title: "Emergency",
    subtitle: "24/7 support",
  },
  {
    id: "3",
    icon: <Calendar className="w-5 h-5" />,
    title: "Events",
    subtitle: "What's happening",
  },
  {
    id: "4",
    icon: <MessageCircle className="w-5 h-5" />,
    title: "Help Desk",
    subtitle: "Get assistance",
  },
];

export function QuickActions() {
  return (
    <section className="py-8 px-3 bg-gray-100 border-y-2 border-gray-400">
      <div className="w-full">
        <div className="mb-6">
          <h2 className="text-gray-900 mb-3">New to Campus?</h2>
          <p className="text-gray-700 text-xs mb-4">
            We've got you covered with quick access to essential services and support to help you get started.
          </p>

          <div className="grid grid-cols-2 gap-2">
            {actions.map((action) => (
              <button
                key={action.id}
                className="border-2 border-gray-400 bg-white p-3 flex flex-col items-start gap-2 hover:border-gray-600 transition-colors text-left"
              >
                <div className="text-gray-600 flex-shrink-0">
                  {action.icon}
                </div>
                <div className="flex-1">
                  <div className="text-gray-900 text-sm">{action.title}</div>
                  <div className="text-xs text-gray-600">{action.subtitle}</div>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="relative h-48 border-2 border-gray-400 bg-gray-200 flex items-center justify-center">
          <Square className="w-16 h-16 text-gray-400" />
          <span className="absolute bottom-2 text-gray-500 text-xs">[Image Placeholder]</span>
        </div>
      </div>
    </section>
  );
}
