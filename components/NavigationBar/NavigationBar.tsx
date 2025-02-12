import Image from "next/image";
import { Button } from "../Button/Button";

interface NavigationBarProps {
  onClickCreateTrip: () => void;
}

export const NavigationBar = ({ onClickCreateTrip }: NavigationBarProps) => {
  return (
    <div className="rounded-3xl p-4 mx-4 my-8 bg-black h-20 text-white flex justify-between">
      <Image src="/logo.png" alt="logo" width={48} height={48} />
      <Button className="text-black bg-white" onClick={onClickCreateTrip}>
        <span className="m-4">Create new trip</span>
      </Button>
    </div>
  );
};
