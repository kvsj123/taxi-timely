import { DashboardLayout } from "@/components/layout/DashboardLayout";
import AddDriverForm from "@/components/drivers/AddDriverForm";

const AddDriver = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Add New Driver</h1>
          <p className="text-muted-foreground">
            Fill in the form below to add a new driver to the system.
          </p>
        </div>
        <div className="glass p-6 rounded-lg">
          <AddDriverForm />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AddDriver;