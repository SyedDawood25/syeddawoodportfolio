"use client";

import React, { useCallback, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { connections } from "@/constants";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";

interface ContactDropDownProps {
  trigger: React.ReactNode;
  items: Array<string>;
  icons?: Array<React.ReactNode>;
}

export const ContactDropDown = ({
  trigger,
  items,
  icons,
}: ContactDropDownProps) => {
  const [showToast, setShowToast] = useState(false);

  const handleClick = useCallback((id: string) => {
    navigator.clipboard.writeText(
      id.toLowerCase() === "email"
        ? connections.email
        : id.toLowerCase() === "phone"
        ? connections.phone
        : ""
    );

    setShowToast(true);
    setTimeout(() => setShowToast(false), 1500);
  }, []);

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>{trigger}</DropdownMenuTrigger>
        {showToast && (
          <h3 className="text-sm text-gray-500 ml-4">Copied to Clipboard!</h3>
        )}
        <DropdownMenuContent className="w-44 bg-[#0c1821]">
          <DropdownMenuGroup>
            {items.map((item, index) => (
              <Link
                target={
                  item.toLowerCase() === "linkedin" ||
                  item.toLowerCase() === "github"
                    ? "_blank"
                    : ""
                }
                href={
                  item.toLowerCase() === "linkedin"
                    ? connections.linkedin
                    : item.toLowerCase() === "github"
                    ? connections.github
                    : "/"
                }
              >
                <DropdownMenuItem
                  onClick={() => handleClick(item)}
                  className="flex items-center justify-between text-white hover:text-[#0c1821]"
                >
                  <h3 className="text-sm font-light">{item}</h3>
                  <span>{icons && icons[index]}</span>
                </DropdownMenuItem>
              </Link>
            ))}
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
