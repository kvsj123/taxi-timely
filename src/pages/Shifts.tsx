import { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Clock, DollarSign, Search, Calendar } from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const shiftsData = [
  {
    id: 1,
    driver: "Jean Dupont",
    startTime: "6:00",
    endTime: "14:00",
    revenue: 350,
    trips: 12,
    status: "En cours",
    date: "2024-03-20",
    details: {
      totalKm: 245,
      fuelCost: 45,
      platformBreakdown: {
        uber: 150,
        bolt: 120,
        heetch: 80
      }
    }
  },
  {
    id: 2,
    driver: "Marie Martin",
    startTime: "14:00",
    endTime: "22:00",
    revenue: 420,
    trips: 15,
    status: "Terminé",
    date: "2024-03-20",
    details: {
      totalKm: 280,
      fuelCost: 50,
      platformBreakdown: {
        uber: 200,
        bolt: 140,
        heetch: 80
      }
    }
  },
  {
    id: 3,
    driver: "Alice Dupuis",
    startTime: "8:00",
    endTime: "16:00",
    revenue: 300,
    trips: 10,
    status: "En cours",
    date: "2024-03-21",
    details: {
      totalKm: 200,
      fuelCost: 40,
      platformBreakdown: {
        uber: 100,
        bolt: 100,
        heetch: 50
      }
    }
  },
  {
    id: 4,
    driver: "Bob Martin",
    startTime: "10:00",
    endTime: "18:00",
    revenue: 500,
    trips: 20,
    status: "Terminé",
    date: "2024-03-21",
    details: {
      totalKm: 300,
      fuelCost: 60,
      platformBreakdown: {
        uber: 250,
        bolt: 150,
        heetch: 100
      }
    }
  },
  {
    id: 5,
    driver: "Claire Bernard",
    startTime: "12:00",
    endTime: "20:00",
    revenue: 450,
    trips: 18,
    status: "En cours",
    date: "2024-03-22",
    details: {
      totalKm: 260,
      fuelCost: 55,
      platformBreakdown: {
        uber: 180,
        bolt: 120,
        heetch: 90
      }
    }
  },
  {
    id: 6,
    driver: "David Lefevre",
    startTime: "9:00",
    endTime: "17:00",
    revenue: 400,
    trips: 15,
    status: "Terminé",
    date: "2024-03-22",
    details: {
      totalKm: 220,
      fuelCost: 50,
      platformBreakdown: {
        uber: 160,
        bolt: 130,
        heetch: 70
      }
    }
  },
  {
    id: 7,
    driver: "Eva Moreau",
    startTime: "7:00",
    endTime: "15:00",
    revenue: 370,
    trips: 14,
    status: "En cours",
    date: "2024-03-23",
    details: {
      totalKm: 210,
      fuelCost: 45,
      platformBreakdown: {
        uber: 140,
        bolt: 110,
        heetch: 60
      }
    }
  },
  {
    id: 8,
    driver: "Franck Dubois",
    startTime: "11:00",
    endTime: "19:00",
    revenue: 480,
    trips: 19,
    status: "Terminé",
    date: "2024-03-23",
    details: {
      totalKm: 290,
      fuelCost: 65,
      platformBreakdown: {
        uber: 220,
        bolt: 150,
        heetch: 90
      }
    }
  },
  {
    id: 9,
    driver: "Gina Petit",
    startTime: "13:00",
    endTime: "21:00",
    revenue: 390,
    trips: 16,
    status: "En cours",
    date: "2024-03-24",
    details: {
      totalKm: 230,
      fuelCost: 50,
      platformBreakdown: {
        uber: 170,
        bolt: 120,
        heetch: 80
      }
    }
  },
  {
    id: 10,
    driver: "Hugo Martin",
    startTime: "15:00",
    endTime: "23:00",
    revenue: 410,
    trips: 17,
    status: "Terminé",
    date: "2024-03-24",
    details: {
      totalKm: 250,
      fuelCost: 55,
      platformBreakdown: {
        uber: 190,
        bolt: 130,
        heetch: 90
      }
    }
  }
];

const Shifts = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedShift, setSelectedShift] = useState<any>(null);
  const shiftsPerPage = 9;

  const filteredShifts = shiftsData.filter((shift) => {
    const matchesSearch = shift.driver
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesDate = !selectedDate || shift.date === selectedDate;
    return matchesSearch && matchesDate;
  });

  const indexOfLastShift = currentPage * shiftsPerPage;
  const indexOfFirstShift = indexOfLastShift - shiftsPerPage;
  const currentShifts = filteredShifts.slice(indexOfFirstShift, indexOfLastShift);
  const totalPages = Math.ceil(filteredShifts.length / shiftsPerPage);

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold">Shifts</h1>
          <p className="text-muted-foreground mt-2">
            Surveillez les shifts actifs
          </p>
        </div>

        <div className="flex gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Rechercher par nom de chauffeur..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="w-48"
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {currentShifts.map((shift) => (
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
              <div className="flex gap-2 mt-4">
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => setSelectedShift(shift)}
                >
                  Voir Détails
                </Button>
                {shift.status === "En cours" && (
                  <Button variant="default" className="w-full">
                    Terminer le Shift
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>

        {totalPages > 1 && (
          <Pagination className="mt-8">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                />
              </PaginationItem>
              {[...Array(totalPages)].map((_, i) => (
                <PaginationItem key={i + 1}>
                  <PaginationLink
                    onClick={() => setCurrentPage(i + 1)}
                    isActive={currentPage === i + 1}
                  >
                    {i + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem>
                <PaginationNext
                  onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                  className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        )}

        <Dialog open={!!selectedShift} onOpenChange={() => setSelectedShift(null)}>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Détails du Shift</DialogTitle>
            </DialogHeader>
            {selectedShift && (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold">Chauffeur</h4>
                    <p>{selectedShift.driver}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Date</h4>
                    <p>{selectedShift.date}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Horaires</h4>
                    <p>{selectedShift.startTime} - {selectedShift.endTime}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Revenus</h4>
                    <p className="text-green-500">{selectedShift.revenue}€</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Kilomètres</h4>
                    <p>{selectedShift.details.totalKm} km</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Coût Carburant</h4>
                    <p>{selectedShift.details.fuelCost}€</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Répartition par Platform</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Uber</span>
                      <span>{selectedShift.details.platformBreakdown.uber}€</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Bolt</span>
                      <span>{selectedShift.details.platformBreakdown.bolt}€</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Heetch</span>
                      <span>{selectedShift.details.platformBreakdown.heetch}€</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </DashboardLayout>
  );
};

export default Shifts;
