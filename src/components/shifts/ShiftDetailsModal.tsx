import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ShiftDetailsModalProps {
  shift: any;
  isOpen: boolean;
  onClose: () => void;
}

export const ShiftDetailsModal = ({ shift, isOpen, onClose }: ShiftDetailsModalProps) => {
  if (!shift) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Détails du Shift</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold">Chauffeur</h4>
              <p>{shift.driver}</p>
            </div>
            <div>
              <h4 className="font-semibold">Date</h4>
              <p>{shift.date}</p>
            </div>
            <div>
              <h4 className="font-semibold">Horaires</h4>
              <p>
                {shift.startTime} - {shift.endTime}
              </p>
            </div>
            <div>
              <h4 className="font-semibold">Revenus</h4>
              <p className="text-green-500">{shift.revenue}€</p>
            </div>
            <div>
              <h4 className="font-semibold">Kilomètres</h4>
              <p>{shift.details.totalKm} km</p>
            </div>
            <div>
              <h4 className="font-semibold">Coût Carburant</h4>
              <p>{shift.details.fuelCost}€</p>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Répartition par Plateforme</h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Uber</span>
                <span>{shift.details.platformBreakdown.uber}€</span>
              </div>
              <div className="flex justify-between">
                <span>Bolt</span>
                <span>{shift.details.platformBreakdown.bolt}€</span>
              </div>
              <div className="flex justify-between">
                <span>Heetch</span>
                <span>{shift.details.platformBreakdown.heetch}€</span>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};