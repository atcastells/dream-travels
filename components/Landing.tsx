import { TripCreationModal } from "@/components/TripCreationModal/TripCreationModal";
import { TripDetailModal } from "@/components/TripDetailModal/TripDetailModal";
import {
  useCreateTravel,
  useDeleteTravel,
  useTravels,
  useUpdateTravel,
} from "@/features/travels/hooks";
import {
  Travel,
  TravelCreation,
  TravelStatus,
} from "@/features/travels/interfaces";
import { useState } from "react";
import { ButtonGroup } from "./ButtonGroup/ButtonGroup";
import { NavigationBar } from "./NavigationBar/NavigationBar";
import { SearchBar } from "./SearchBar/SearchBar";
import { TripCard } from "./TripCard/TripCard";
import { TripEditionModal } from "./TripEditionModal/TripEditionModal";

enum TripStatus {
  All = "All",
  Upcoming = "Upcoming",
  Completed = "Completed",
}

export const Landing = () => {
  const [filters, setFilters] = useState<Partial<Travel>>({});
  const [search, setSearch] = useState<string>("");
  const [isTripCreationModalOpen, setIsTripCreationModalOpen] =
    useState<boolean>(false);

  const [isTripDetailModalOpen, setIsTripDetailModalOpen] =
    useState<boolean>(false);

  const [isTripEditionModalOpen, setIsTripEditionModalOpen] =
    useState<boolean>(false);

  const [tripSelected, setTripSelected] = useState<Travel | undefined>();

  const { travels } = useTravels(filters);
  const { deleteTravel } = useDeleteTravel();
  const { updateTravel } = useUpdateTravel();
  const { createTravel } = useCreateTravel();

  const tripStatus = [
    TripStatus.All,
    TripStatus.Upcoming,
    TripStatus.Completed,
  ];

  const handleSearch = (search: string) => {
    setSearch(search);
  };

  const handleTripDetail = (id: string) => {
    setTripSelected(travels?.find((travel) => travel.id === id));
    setIsTripDetailModalOpen(true);
  };

  const handleTripEdit = (id: string) => {
    setTripSelected(travels?.find((travel) => travel.id === id));
    setIsTripEditionModalOpen(true);
  };

  const handleTripDelete = (id: string) => {
    deleteTravel(id);
  };

  const handleTripCreate = (trip: TravelCreation) => {
    createTravel(trip);
  };

  const handleCreateTripModal = () => {
    setIsTripCreationModalOpen(true);
  };

  const handleCloseTripDetail = () => {
    setIsTripDetailModalOpen(false);
    setTripSelected(undefined);
  };

  const handleCloseTripEdition = () => {
    setIsTripEditionModalOpen(false);
    setTripSelected(undefined);
  };

  return (
    <div>
      <TripCreationModal
        isOpen={isTripCreationModalOpen}
        onClose={() => setIsTripCreationModalOpen(false)}
        onTripCreation={(trip) => {
          handleTripCreate(trip);
          setIsTripCreationModalOpen(false);
        }}
      />
      {isTripDetailModalOpen && (
        <TripDetailModal
          isOpen={isTripDetailModalOpen}
          onClose={() => handleCloseTripDetail()}
          trip={tripSelected}
        />
      )}

      {isTripEditionModalOpen && tripSelected && (
        <TripEditionModal
          isOpen={isTripEditionModalOpen}
          onClose={() => handleCloseTripEdition()}
          onTripEdit={(trip) => {
            updateTravel(trip);
            handleCloseTripEdition;
          }}
          trip={tripSelected}
        />
      )}
      <NavigationBar onClickCreateTrip={handleCreateTripModal} />
      <div className="mt-12 flex justify-center items-center flex-col">
        <h1 className="font-normal text-3xl">The places you dream of</h1>
        <span className="font-normal text-xl">Let's live new adventures</span>
        <div className="mt-4">
          <SearchBar onSearch={handleSearch} />
          <ButtonGroup
            buttonText={tripStatus}
            onSelect={(index) => {
              if (index === 0) {
                setFilters({
                  ...filters,
                  status: undefined,
                });
              } else if (index === 1) {
                setFilters({ status: TravelStatus.TODO });
              } else if (index === 2) {
                setFilters({ status: TravelStatus.DONE });
              }
            }}
          />
        </div>
      </div>
      <div className="flex flex-wrap w-11/12 md:w-2/3 m-auto justify-center items-center">
        {travels
          ?.filter((travel) => {
            if (!search) {
              return true;
            }

            const introduction = travel.introduction
              ? travel.introduction.toLowerCase()
              : "";
            const title = travel.title ? travel.title.toLowerCase() : "";
            const description = travel.description
              ? travel.description.toLowerCase()
              : "";

            return (
              introduction.includes(search.toLowerCase()) ||
              title.includes(search.toLowerCase()) ||
              description.includes(search.toLowerCase())
            );
          })
          .map((travel, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center m-4"
            >
              <TripCard
                onDetail={handleTripDetail}
                onEdit={handleTripEdit}
                onDelete={handleTripDelete}
                travel={travel}
              />
            </div>
          ))}
      </div>
    </div>
  );
};
