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
        className="size-6 p-1 hover:bg-slate-100 rounded-lg duration-200"
      />
      {isOpen && (
        <div className="absolute flex drop-shadow-sm flex-col gap-1 w-28 left-[-10px] top-12 bg-white border rounded-lg p-2">
          {type === "own" ? (
            <>
              <span className="hover:bg-slate-100 duration-200 py-1 rounded-lg">
                <PostBtn action="edit" id={id} />
              </span>
              <span className="hover:bg-slate-100 duration-200 py-1 rounded-lg">
                <PostBtn action="delete" id={id} />
              </span>
            </>
          ) : (
            <>
              <span className="hover:bg-slate-100 duration-200 py-1 rounded-lg">
                신고하기
              </span>
              <span className="hover:bg-slate-100 duration-200 py-1 rounded-lg">
                쪽지하기
              </span>
            </>
          )}
        </div>
      )}
    </div>
  );
}
