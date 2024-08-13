"use client";

import { DotsVerticalIcon } from "@radix-ui/react-icons";
import { useState, useRef, useEffect } from "react";
import PostBtn from "./button/post-btn";

interface DropdownProps {
  type: "own" | "other";
  id?: string;
  className: string;
}

export default function Dropdown({ type, id, className }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={className} ref={dropdownRef}>
      <DotsVerticalIcon
        onClick={handleDropdown}
        className={
          `size-6 p-1 rounded-lg duration-200` +
          (isOpen ? " bg-blue-50/70" : " hover:bg-blue-50/70")
        }
      />
      {isOpen && (
        <div
          className="absolute flex shadow-[0px_10px_15px_-10px_rgba(0,0,0,0.1)] flex-col gap-1 w-32 left-0
         top-7 bg-white border rounded-lg px-2 py-2.5"
        >
          {type === "own" ? (
            <>
              <span className="hover:bg-blue-50/70 duration-200 py-1.5 rounded-lg">
                <PostBtn action="edit" id={id} />
              </span>
              <span className="hover:bg-blue-50/70 duration-200 py-1.5 rounded-lg">
                <PostBtn action="delete" id={id} />
              </span>
            </>
          ) : (
            <>
              <span className="hover:bg-blue-50/70 duration-200 py-1.5 rounded-lg">
                <PostBtn action="message" id={id} />
              </span>
              <span className="hover:bg-blue-50/70 duration-200 py-1.5 rounded-lg">
                <PostBtn action="report" id={id} />
              </span>
            </>
          )}
        </div>
      )}
    </div>
  );
}
