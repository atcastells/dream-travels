import { Itinerary } from "@/features/travels/interfaces";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import { TextArea } from "../TextArea/TextArea";

interface ItineraryInputProps {
  itinerary: Itinerary;
  numberOfDays: number;
  index: number;
  onChange: (itinerary: Itinerary, index: number) => void;
}

export const ItineraryInput = ({
  itinerary,
  numberOfDays,
  index,
  onChange,
}: ItineraryInputProps) => {
  return (
    <div className="flex flex-col w-full gap-2 items-end bg-gray-100 rounded-lg p-2">
      <div className="flex flex-row w-full gap-2">
        <Menu>
          <Button className="border border-gray-300 w-20 bg-white flex flex-row justify-center items-center">
            <MenuButton
              as="div"
              className={
                "flex flex-row items-center justify-between w-full p-2"
              }
            >
              <span
                className={classNames("font-normal text-xs", {
                  "text-gray-400": !itinerary.day,
                  "text-black": itinerary.day,
                })}
              >
                {itinerary.day ? itinerary.day : "Day"}
              </span>
              <ChevronDownIcon className="h-3 w-3" />{" "}
            </MenuButton>
          </Button>
          <MenuItems anchor="bottom">
            <div className="flex flex-col w-24 mt-1 bg-white border border-gray-200 rounded-lg">
              {Array.from({ length: numberOfDays }, (_, i) => (
                <MenuItem
                  as={"div"}
                  className="p-2 text-sm cursor-pointer hover:bg-gray-100"
                  onClick={() => onChange({ ...itinerary, day: i + 1 }, index)}
                  key={i}
                >{`${i + 1}`}</MenuItem>
              ))}
            </div>
          </MenuItems>
        </Menu>
        <div className="w-3/4">
          <Input
            name="location"
            id={`location-${index}`}
            value={itinerary.location}
            onChange={(e) =>
              onChange({ ...itinerary, location: e.target.value }, index)
            }
            placeholder="Location"
            className="p-1"
            containerProps={{ className: "flex-1 " }}
          />
        </div>
      </div>
      <div className="w-3/4 flex mr-6">
        <TextArea
          name="description"
          id={`description-${index}`}
          value={itinerary.description}
          onChange={(e) =>
            onChange({ ...itinerary, description: e.target.value }, index)
          }
          placeholder="Description"
          className="p-1"
          containerProps={{ className: "flex-1 " }}
        />
      </div>
    </div>
  );
};
