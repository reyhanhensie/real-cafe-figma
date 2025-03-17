import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "../components/ui/navigation-menu";

import { ChevronRight, Search, ShoppingBag, User } from "lucide-react";
import React from "react";

export default function ShopList() {
  // Navigation menu items data
  const navItems = [
    { name: "Home", href: "#", active: true },
    { name: "Menu", href: "#", active: false },
    { name: "Blog", href: "#", active: false },
    { name: "Pages", href: "#", active: false },
    { name: "About", href: "#", active: false },
    { name: "Shop", href: "#", active: false },
    { name: "Contact", href: "#", active: false },
  ];

  return (
    <div className="relative h-[410px] w-full bg-[url(/unsplash-4ycv3ky1zzu.png)] bg-cover bg-center">
      {/* Header Navigation */}
      <div className="absolute left-0 top-0 h-[90px] w-full bg-black-ododod">
        <div className="relative mx-auto flex h-8 w-[1320px] items-center justify-between py-[29px]">
          {/* Logo */}
          <div className="font-heading-5-24 text-2xl font-bold leading-8 tracking-normal">
            <span className="text-white">Food</span>
            <span className="text-[#ff9f0d]">tuck</span>
          </div>

          {/* Main Navigation */}
          <NavigationMenu className="mx-auto">
            <NavigationMenuList className="flex space-x-6">
              {navItems.map((item) => (
                <NavigationMenuItem key={item.name}>
                  <NavigationMenuLink
                    className={`text-base leading-6 ${item.active ? "font-bold text-primary-color" : "font-normal text-white"}`}
                    href={item.href}
                  >
                    {item.name}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6 p-0 text-white"
            >
              <Search className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6 p-0 text-white"
            >
              <User className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6 p-0 text-white"
            >
              <ShoppingBag className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>

      {/* Page Title and Breadcrumbs */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="font-headingt-2-48 text-5xl font-bold leading-[56px] text-fffffff">
          Our Shop
        </h1>

        <div className="mt-5 flex items-center justify-center space-x-2">
          <span className="font-normal text-xl leading-7 text-fffffff">
            Home
          </span>
          <ChevronRight className="h-4 w-4 text-fffffff" />
          <span className="font-normal text-xl leading-7 text-primary-color">
            Shop
          </span>
        </div>
      </div>
    </div>
  );
}