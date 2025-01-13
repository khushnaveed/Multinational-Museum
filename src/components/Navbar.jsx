import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

const navigation = [
  { name: 'Exhibitions', href: '/exhibitions', current: false },
  { name: 'News', href: '/news', current: false },
  { name: 'Booking', href: '/booking', current: false },
  { name: 'Logo', href: '/', current: false, isLogo: true }, // Inserted logo as a navigation item
  { name: 'Events', href: '/events', current: false },
  { name: 'Gallery', href: '/gallery', current: false },
  { name: 'Contact Us', href: '/contactus', current: false },
]

const galleryItems = [
  { name: 'Artwork', href: '/artwork' },
  { name: 'Documentaries', href: '/documentaries' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) =>
                  item.isLogo ? (
                    <div key={item.name} className="flex shrink-0 items-center mx-4">
                      <a href={item.href}>
                        <img
                          alt="Your Company"
                          src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
                          className="h-8 w-auto"
                        />
                      </a>
                    </div>
                  ) : item.name === 'Gallery' ? (
                    <Menu as="div" key={item.name} className="relative">
                      <MenuButton
                        className={classNames(
                          item.current
                            ? 'bg-gray-900 text-white'
                            : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'inline-flex items-center rounded-md px-3 py-2 text-sm font-medium'
                        )}
                      >
                        {item.name}
                        <ChevronDownIcon
                          className="ml-2 h-4 w-4 text-gray-400 group-hover:text-white"
                          aria-hidden="true"
                        />
                      </MenuButton>
                      <MenuItems className="absolute left-0 z-10 mt-2 w-48 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        {galleryItems.map((subItem) => (
                          <MenuItem 
                          key={subItem.name}>
                            {({ active }) => (
                              <a
                                href={subItem.href}
                                className={classNames(
                                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                  'block px-4 py-2 text-sm'
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
                      aria-current={item.current ? 'page' : undefined}
                      className={classNames(
                        item.current
                          ? 'bg-gray-900 text-white'
                          : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'rounded-md px-3 py-2 text-sm font-medium'
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

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) =>
            item.isLogo ? (
              <div key={item.name} className="flex justify-center py-2">
                <a href={item.href}>
                  <img
                    alt="Your Company"
                    src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
                    className="h-8 w-auto"
                  />
                </a>
              </div>
            ) : item.name === 'Gallery' ? (
              <div key={item.name}>
                <DisclosureButton
                  as="div"
                  className={classNames(
                    item.current
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                >
                  {item.name}
                  <ChevronDownIcon className="ml-2 h-4 w-4 inline-block text-gray-400" aria-hidden="true" />
                </DisclosureButton>
                <div className="ml-4 space-y-1">
                  {galleryItems.map((subItem) => (
                    <DisclosureButton
                      key={subItem.name}
                      as="a"
                      href={subItem.href}
                      className="block rounded-md px-3 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
                    >
                      {subItem.name}
                    </DisclosureButton>
                  ))}
                </div>
              </div>
            ) : (
              <DisclosureButton
                key={item.name}
                as="a"
                href={item.href}
                aria-current={item.current ? 'page' : undefined}
                className={classNames(
                  item.current
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                  'block rounded-md px-3 py-2 text-base font-medium'
                )}
              >
                {item.name}
              </DisclosureButton>
            )
          )}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
