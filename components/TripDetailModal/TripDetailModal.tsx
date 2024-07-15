import { useUpdateTravel } from "@/features/travels/hooks";
import { Travel, TravelStatus } from "@/features/travels/interfaces";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { CheckIcon, XMarkIcon } from "@heroicons/react/16/solid";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

interface TripDetailModalProps {
  isOpen: boolean;
  onClose: () => void;

  trip?: Travel;
}

export const TripDetailModal = ({
  isOpen,
  onClose,
  trip,
}: TripDetailModalProps) => {
  const { updateTravel } = useUpdateTravel();

  // 1. Create a state to manage the completion of the trip since the backend is not persisting the changes
  const [completedTravel, setCompletedTravel] = useState<boolean>(false);

  const handleTripCompletion = async () => {
    if (!trip) return;
    await updateTravel({
      ...trip,
      status: TravelStatus.DONE,
    });

    setCompletedTravel(true);
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <DialogBackdrop className="fixed inset-0 bg-black/30" />
      <div className="fixed inset-0 flex w-screen items-center justify-center">
        <DialogPanel className="max-w-lg bg-white  rounded-lg relative w-full overflow-scroll max-h-[90vh]">
          <img
            src={trip?.photo_url}
            alt={trip?.title}
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <div
            onClick={onClose}
            className="bg-black rounded-full absolute top-4 right-4 cursor-pointer"
          >
            <XMarkIcon className="h-4 w-4 m-1 text-white" />
          </div>
          <div className="p-8">
            <h1 className="text-3xl">{trip?.title}</h1>
            {trip?.status === TravelStatus.TODO && (
              <div
                onClick={() => handleTripCompletion()}
                className="flex flex-row items-center gap-2 my-2 cursor-pointer"
              >
                <CheckCircleIcon className="h-5 w-5 text-gray-500" />
                <span className="text-xs text-gray-500">Mark as completed</span>
              </div>
            )}

            {trip?.status === TravelStatus.DONE && (
              <div className="flex flex-row items-center gap-2 my-2 ">
                <div className="bg-green-500 rounded-full">
                  <CheckIcon className="h-4 w-4 text-white " />
                </div>
                <span className="text-xs text-gray-500">Complete</span>
              </div>
            )}

            <p className="text-sm text-black">{trip?.description}</p>
          </div>
          <div className="mx-8">
            {/* horizontal line */}
            <div className="border-t border-gray-200 w-full h-1 m-auto"></div>
          </div>
          <div className="pb-8 px-8">
            <h1 className="text-xl">Itinerary</h1>
            <div className="flex gap-2 flex-col ml-4">
              {trip?.itinerary.map((itinerary, index) => (
                <div
                  key={index}
                  className="flex flex-col  gap-2 my-2 justify-items-start items-start relative"
                >
                  <span className="text-sm text-black ">{`Day ${itinerary.day}: ${itinerary.location}`}</span>
                  <span className="text-xs text-gray-500">
                    {itinerary.description}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
};
