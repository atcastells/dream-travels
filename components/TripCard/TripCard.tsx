import { Travel } from "@/features/travels/interfaces";

interface TripCardProps {
  onEdit: (travelId: string) => void;
  onDelete: (travelId: string) => void;
  onDetail: (travelId: string) => void;
  travel: Travel;
}

export const TripCard = ({
  travel,
  onDelete,
  onDetail,
  onEdit,
}: TripCardProps) => {
  return (
    <div className="flex flex-row h-60 bg-gray-100 rounded-r-lg">
      <div className="w-3/4 md:w-1/2 relative">
        <img
          src={travel.photo_url}
          alt={travel.title}
          className="object-cover h-full w-full rounded-l-lg"
        />
      </div>
      <div className="flex flex-col w-3/4 md:w-1/2 p-4">
        <h1 className="text-3xl mb-8">{travel.title}</h1>
        <p className="text-lg mb-4 line-clamp-3">
          Classic tour of Portugal's vibrant cities and cultural heritage,
          including Lisbon, Porto, Fatima and the flamboyant architecture of
          Sintra.
        </p>
        <div className="flex flex-row justify-between mb-4">
          <span
            onClick={() => onDetail(travel.id)}
            className="underline cursor-pointer"
          >
            See trip detail
          </span>
          <div className="flex gap-4">
            <span
              onClick={() => onEdit(travel.id)}
              className="underline cursor-pointer"
            >
              Edit
            </span>
            <span
              onClick={() => onDelete(travel.id)}
              className="underline text-red-400 cursor-pointer"
            >
              Delete
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
