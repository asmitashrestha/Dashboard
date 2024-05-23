"use client";

import { UserItem } from "@/components/UserItem";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "./ui/command";
export const Sidebar = () => {
  const menuList = [
    {
      group: "General",
      items: [
        {
          link: "/",
          text: "Pofile",
        },
        {
          link: "/",
          text: "Billing",
        },
        {
          link: "/",
          text: "Inbox",
        },
        {
          link: "/",
          text: "Notification",
        },
      ],
    },
    {
      group: "Settings",
      items: [
        {
          link: "/",
          text: "General Settings",
        },
        {
          link: "/",
          text: "Privacy",
        },
        {
          link: "/",
          text: "Logs",
        },
      ],
    },
  ];
  return (
    <div className="flex flex-col gap-4 w-[250px] min-w-[250px] border-r min-h-screen p-4">
      <div className="">
        <UserItem />
      </div>
      <div className="grow">
        <Command>
          <CommandList>
            {menuList.map((menu: any, i: number) => (
              <CommandGroup key={i} heading={menu.group}>
                {menu.items.map((option: any, i: number) => (
                  <CommandItem key={i}>{option.text}</CommandItem>
                ))}
              </CommandGroup>
            ))}
          </CommandList>
        </Command>
      </div>
    </div>
  );
};
