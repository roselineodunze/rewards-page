import React from "react";
import { Item, ItemContent, ItemMedia, ItemTitle } from "@/components/ui/item";
import { NavLink } from "react-router-dom";

const SidebarLinks = ({ item }) => {
  const Icon = item.icon;

  return (
    <NavLink
      to={item.link}
      end
      className={({ isActive }) =>
        `
        block hover:bg-purple-200 rounded-xl
        ${isActive ? "bg-purple-200" : ""}
      `
      }
    >
      <Item size="md" className="px-5 h-12 lg:h-14 flex gap-3 lg:gap-7">
        <ItemMedia>
          <Icon className="text-xl" />
        </ItemMedia>

        <ItemContent className="min-w-0">
          <ItemTitle className="text-xl truncate">
            {item.name}
          </ItemTitle>
        </ItemContent>
      </Item>
    </NavLink>
  );
};

export default SidebarLinks;

