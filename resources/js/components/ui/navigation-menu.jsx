import React from "react";

export function NavigationMenu({ children, className }) {
  return <nav className={`flex space-x-4 ${className}`}>{children}</nav>;
}

export function NavigationMenuList({ children }) {
  return <ul className="flex space-x-4">{children}</ul>;
}

export function NavigationMenuItem({ children }) {
  return <li className="list-none">{children}</li>;
}

export function NavigationMenuLink({ href, children }) {
  return (
    <a href={href} className="text-white hover:text-yellow-400 transition">
      {children}
    </a>
  );
}
