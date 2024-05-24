"use client";

import { BellIcon } from "lucide-react";
import { CommandDemo } from "./Command";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

export default function Header() {
  const [notification, setNotification] = useState<any>([
    {
      text: "This is a notification",
      date: "03-9-2024",
      read: true,
    },
    {
      text: "This is another notification",
      date: "03-10-2024",
      read: false,
    },
  ]);

  return (
    <div className="grid grid-cols-2 gap-4 p-4 border-b mb-3">
      <CommandDemo />
      <div className="flex items-center justify-end">
        <DropdownMenu>
          <DropdownMenuTrigger>
            {" "}
            <Button className="relative" variant="outline" size="icon">
              <div
                className={`h-3 absolute -top-2 -right-2 w-3 rounded-full my-1 ${
                  notification.find((x: any) => x.read === true)
                    ? "bg-green-500"
                    : "bg-neutral-400"
                }`}
              ></div>
              <BellIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {notification.map((item: any, key: number) => (
              <DropdownMenuItem
                key={key}
                className="p-1 cursor-pointer
               hover:bg-neutral-50 transition flex items-start gap-2"
              >
                <div
                  className={`h-3 w-3 rounded-full my-1 ${
                    !item.read ? "bg-green-500" : "bg-neutral-400"
                  }`}
                ></div>

                <p>{item.text}</p>
                <p>{item.date}</p>
                <span>{item.read ? "Read" : "Unread"}</span>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
