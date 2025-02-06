import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Clock, DollarSign } from "lucide-react";

const shiftsData = [
  {
    id: 1,
    driver: "John Doe",
    startTime: "6:00 AM",
    endTime: "2:00 PM",
    revenue: 350,
    trips: 12,
    status: "In Progress",
  },
  {
    id: 2,
    driver: "Jane Smith",
    startTime: "2:00 PM",
    endTime: "10:00 PM",
    revenue: 420,
    trips: 15,
    status: "Completed",
  },
];

const Shifts = () => {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold">Shifts</h1>
          <p className="text-muted-foreground mt-2">Monitor active shifts</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {shiftsData.map((shift) => (
            <Card key={shift.id} className="p-6 glass">
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
                    <span className="text-green-500">${shift.revenue}</span>
                  </div>
                </div>
                <div className="text-right">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      shift.status === "In Progress"
                        ? "bg-blue-500/20 text-blue-500"
                        : "bg-green-500/20 text-green-500"
                    }`}
                  >
                    {shift.status}
                  </span>
                  <div className="mt-2 text-muted-foreground">
                    {shift.trips} trips
                  </div>
                </div>
              </div>
              <div className="flex gap-2 mt-4">
                <Button variant="outline" className="w-full">
                  View Details
                </Button>
                {shift.status === "In Progress" && (
                  <Button variant="default" className="w-full">
                    End Shift
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Shifts;