import { MapPin, Clock, Navigation } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

interface LocationCardProps {
  name: string;
  category: string;
  description: string;
  hours?: string;
  building?: string;
  distance?: string;
}

export function LocationCard({ name, category, description, hours, building, distance }: LocationCardProps) {
  return (
    <Card className="p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-lg">{name}</h3>
            <Badge variant="secondary" className="text-xs">
              {category}
            </Badge>
          </div>
          <p className="text-sm text-gray-600 mb-3">{description}</p>
        </div>
      </div>

      <div className="space-y-2 mb-4">
        {building && (
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <MapPin className="w-4 h-4" />
            <span>{building}</span>
          </div>
        )}
        {hours && (
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Clock className="w-4 h-4" />
            <span>{hours}</span>
          </div>
        )}
        {distance && (
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Navigation className="w-4 h-4" />
            <span>{distance}</span>
          </div>
        )}
      </div>

      <Button variant="outline" className="w-full">
        Get Directions
      </Button>
    </Card>
  );
}
