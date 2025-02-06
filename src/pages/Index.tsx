import { Users, Car, Clock, DollarSign } from "lucide-react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { StatCard } from "@/components/dashboard/StatCard";

const Index = () => {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground mt-2">
            Welcome to Taxi Time management system
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="Active Drivers"
            value="24"
            icon={<Users className="h-6 w-6" />}
          />
          <StatCard
            title="Vehicles on Road"
            value="18"
            icon={<Car className="h-6 w-6" />}
          />
          <StatCard
            title="Active Shifts"
            value="12"
            icon={<Clock className="h-6 w-6" />}
          />
          <StatCard
            title="Today's Revenue"
            value="$2,845"
            icon={<DollarSign className="h-6 w-6" />}
          />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;