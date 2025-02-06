import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, Clock } from "lucide-react";

const scheduleData = [
  {
    id: 1,
    driver: "John Doe",
    shift: "Morning",
    time: "6:00 AM - 2:00 PM",
    date: "2024-02-20",
  },
  {
    id: 2,
    driver: "Jane Smith",
    shift: "Evening",
    time: "2:00 PM - 10:00 PM",
    date: "2024-02-20",
  },
];

const Schedule = () => {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold">Schedule</h1>
          <p className="text-muted-foreground mt-2">Manage driver schedules</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {scheduleData.map((schedule) => (
            <Card key={schedule.id} className="p-6 glass">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold">{schedule.driver}</h3>
                  <div className="flex items-center gap-2 mt-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{schedule.date}</span>
                  </div>
                  <div className="flex items-center gap-2 mt-1 text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{schedule.time}</span>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full text-sm bg-primary/20 text-primary">
                  {schedule.shift}
                </span>
              </div>
              <div className="flex gap-2 mt-4">
                <Button variant="outline" className="w-full">
                  Edit
                </Button>
                <Button variant="destructive" className="w-full">
                  Cancel
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Schedule;