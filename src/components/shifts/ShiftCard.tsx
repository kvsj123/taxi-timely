import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, DollarSign } from "lucide-react";

interface ShiftCardProps {
  shift: {
    id: number;
    driver: string;
    startTime: string;
    endTime: string;
    revenue: number;
    trips: number;
    status: string;
    date: string;
    details: {
      totalKm: number;
      fuelCost: number;
      platformBreakdown: {
        uber: number;
        bolt: number;
        heetch: number;
      };
    };
  };
  onViewDetails: (shift: any) => void;
}

export const ShiftCard = ({ shift, onViewDetails }: ShiftCardProps) => {
  return (
    <Card className="p-6">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xl font-semibold">{shift.driver}</h3>
          <div className="flex items-center gap-2 mt-2 text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>
              {shift.startTime} - {shift.endTime}
            </span>
          </div>
          <div className="flex items-center gap-2 mt-1">
            <DollarSign className="h-4 w-4 text-green-500" />
            <span className="text-green-500">{shift.revenue}€</span>
          </div>
        </div>
        <div className="text-right">
          <span
            className={`px-3 py-1 rounded-full text-sm ${
              shift.status === "En cours"
                ? "bg-blue-500/20 text-blue-500"
                : "bg-green-500/20 text-green-500"
            }`}
          >
            {shift.status}
          </span>
          <div className="mt-2 text-muted-foreground">
            {shift.trips} courses
          </div>
        </div>
      </div>
      <div className="mt-4">
        <Button
          variant="outline"
          className="w-full"
          onClick={() => onViewDetails(shift)}
        >
          Voir Détails
        </Button>
      </div>
    </Card>
  );
};