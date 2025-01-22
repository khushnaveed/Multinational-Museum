/* eslint-disable no-unused-vars */
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import React, { useState } from "react";

const navigation = [
  { name: "Exhibitions", href: "/exhibitions", current: false },
  { name: "News", href: "/news", current: false },
  { name: "Booking", href: "/booking", current: false },
  { name: "Logo", href: "/", current: false, isLogo: true },
  { name: "Events", href: "/events", current: false },
  { name: "Gallery", href: "/gallery", current: false },
  { name: "Contact Us", href: "/contactus", current: false },
];

const galleryItems = [
  { name: "Artwork", href: "/artwork" },
  { name: "Documentaries", href: "/documentaries" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [activeTab, setActiveTab] = useState("");

  const handleTabClick = (name) => {
    setActiveTab(name);
  };

  return (
    <Disclosure as="nav" className=" sticky top-0 z-50 backdrop-blur-md ">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative  flex h-16 items-center justify-between">
          {/* Mobile menu button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block size-6 group-data-[open]:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden size-6 group-data-[open]:block"
              />
            </DisclosureButton>
          </div>

          {/* Centered Logo and Name */}
          <div className="flex flex-1 items-center justify-center sm:hidden  ml-6">
            <a
              href="/"
              className="flex items-center text-gray-200 text-lg font-semibold ml-6 "
            >
              Meuseum Website
            </a>
          </div>

          {/* Logo on the Right */}
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <a href="/" className="flex items-center">
              <img src="/Logo.png" alt="Website Logo" className="h-10 w-auto" />
            </a>
          </div>

          {/* Desktop navigation */}
          <div className="flex flex-1 items-center justify-center ">
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex justify-center space-x-4">
                {navigation.map((item) =>
                  item.isLogo ? (
                    <div
                      key={item.name}
                      className="flex shrink-0 items-center mx-4"
                    >
                      <a href={item.href}>
                        <img
                          alt="Your Company"
                          src="/Logo.png"
                          className="h-12 w-auto"
                        />
                      </a>
                    </div>
                  ) : item.name === "Gallery" ? (
                    <Menu as="div" key={item.name} className="relative">
                      <MenuButton className="text-white hover:bg-gray-700 hover:text-white inline-flex items-center rounded-md px-3 py-2 text-lg font-medium">
                        {item.name}
                        <ChevronDownIcon
                          className="ml-2 h-4 w-4 text-white group-hover:text-white"
                          aria-hidden="true"
                        />
                      </MenuButton>
                      <MenuItems className="absolute left-0 z-10 mt-2 w-48 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        {galleryItems.map((subItem) => (
                          <MenuItem key={subItem.name}>
                            {({ active }) => (
                              <a
                                href={subItem.href}
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "block px-4 py-2 text-lg"
                                )}
                              >
                                {subItem.name}
                              </a>
                            )}
                          </MenuItem>
                        ))}
                      </MenuItems>
                    </Menu>
                  ) : (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => handleTabClick(item.name)}
                      className={classNames(
                        activeTab === item.name
                          ? "bg-gray-900 text-white" // Active tab
                          : "text-white hover:bg-gray-700 hover:text-white", // Default tab
                        "rounded-md px-3 py-2 text-lg font-medium"
                      )}
                    >
                      {item.name}
                    </Link>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile navigation */}
      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation
            .filter((item) => item.name !== "Logo") // Exclude the logo from the menu
            .map((item) =>
              item.name === "Gallery" ? (
                <Disclosure as="div" key={item.name}>
                  <DisclosureButton className="flex w-full items-center justify-between rounded-md px-3 py-2 text-lg font-medium text-white hover:bg-gray-700 hover:text-white">
                    {item.name}
                    <ChevronDownIcon
                      className="ml-2 h-4 w-4 text-white"
                      aria-hidden="true"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="ml-4 space-y-1">
                    {galleryItems.map((subItem) => (
                      <a
                        key={subItem.name}
                        href={subItem.href}
                        className="block rounded-md px-3 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
                      >
                        {subItem.name}
                      </a>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
              ) : (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  onClick={() => handleTabClick(item.name)}
                  className={classNames(
                    activeTab === item.name
                      ? "bg-gray-900 text-white"
                      : "text-white hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-lg font-medium"
                  )}
                >
                  {item.name}
                </DisclosureButton>
              )
            )}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
