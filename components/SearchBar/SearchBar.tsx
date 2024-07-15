import { DetailedHTMLProps, InputHTMLAttributes, useState } from "react";
import { Button } from "../Button/Button";

interface SearchBarProps {
  onSearch: (search: string) => void;
  inputProps?: DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
}

export const SearchBar = ({ onSearch, inputProps }: SearchBarProps) => {
  const [search, setSearch] = useState<string>("");

  return (
    <div className="flex rounded-full border border-gray-200 p-1">
      <input
        {...inputProps}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Search trips"
        className="rounded-full bg-white text-black px-2 outline-none"
      />

      <Button onClick={() => onSearch(search)} className="bg-black p-1">
        <span className="m-2 text-xs text-white">Search</span>
      </Button>
    </div>
  );
};
