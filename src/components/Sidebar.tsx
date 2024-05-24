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
import { Bell, Briefcase, EarthLock, Inbox, MessageSquareShare, Settings, User } from "lucide-react";
export const Sidebar = () => {

  const menuList = [
    {
      group: "General",
      items: [
        {
          link: "/",
          text: "Pofile",
          icons:<User/>
        },
        {
          link: "/",
          text: "Billing",
          icons:<Briefcase />
        },
        {
          link: "/",
          text: "Inbox",
          icons:<Inbox />
        },
        {
          link: "/",
          text: "Notification",
          icons:<Bell />
        },
      ],
    },
    {
      group: "Settings",
      items: [
        {
          link: "/",
          text: "General Settings",
          icons:<Settings />,
        },
        {
          link: "/",
          text: "Privacy",
          icons:<EarthLock />
        },
        {
          link: "/",
          text: "Logs",
          icons:<MessageSquareShare />
        },
      ],
    },
  ];

  return (
    <div className="fixed flex flex-col gap-4 w-[250px] min-w-[250px] border-r min-h-screen p-4">
      <div className="">
        <UserItem />
      </div>
      <div className="grow">
        <Command style={{overflow: "visible"}}>
          <CommandList style={{overflow:"visible"}}>
            {menuList.map((menu: any, i: number) => (
              <CommandGroup key={i} heading={menu.group}>
                {menu.items.map((option: any, i: number) => (
                  <CommandItem key={i} 
                  className="flex gap-2 cursor-pointer">
                    {option.icons}
                    {option.text}
                    </CommandItem>
                ))}
              </CommandGroup>
            ))}
          </CommandList>
        </Command>
      </div>
    </div>
  );
};
