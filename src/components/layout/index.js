/* eslint-disable @next/next/no-img-element */
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { Fragment } from "react";
import Cetak from "../../../public/cetak.svg";
import Download from "../../../public/download.svg";
import History from "../../../public/history.svg";
import Perkuliahan from "../../../public/perkuliahan.svg";
import Logo from "../../../public/sisfo.png";
import TugasAkhir from "../../../public/tugasakhir.svg";
const navigation = [
  { name: "Perkuliahan", icon: Perkuliahan, href: "#", current: false },
  { name: "Download", icon: Download, href: "#", current: false },
  { name: "History Perkuliahan", icon: History, href: "#", current: false },
  { name: "Tugas Akhir", icon: TugasAkhir, href: "#", current: false },
  { name: "Cetak", icon: Cetak, href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Layout({ children }) {
  return (
    <>
      <Disclosure as="nav" className="bg-slate-50 border-b-2 border-[#F4954F]">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center gap-2">
                    <Image width={30} src={Logo} alt={"#"} />
                    <h1 className="text-xl font-bold text-[#6E5D50]">
                      Sisfo-Feb
                    </h1>
                  </div>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      {navigation.map((e, i) => (
                        <div key={i} className={"flex gap-[2px]"}>
                          <Image src={e.icon} alt={"#"} />
                          <a
                            key={e.name}
                            href={e.href}
                            className={classNames(
                              e.current
                                ? "bg-gray-900 text-white"
                                : "text-[#6E5D50] hover:bg-[#EE4B0B] hover:text-white font-bold",
                              "px-3 py-2 rounded-md text-sm font-medium"
                            )}
                            aria-current={e.current ? "page" : undefined}
                          >
                            {e.name}
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://scontent-sin6-3.xx.fbcdn.net/v/t39.30808-6/318955127_1619120191880844_6036713440562724685_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=M6z91y3naXEAX_U3Kx2&_nc_ht=scontent-sin6-3.xx&oh=00_AfCihcjpPu_IHaFvsmj-u50fo5MotGu972M2IH3ZzwVwAQ&oe=63CC0483"
                          alt=""
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Edit Akun
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Pengaturan
                            </a>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pt-2 pb-3">
                {navigation.map((e, i) => (
                  <div key={i} className="flex gap-[2px]">
                    <Image src={e.icon} alt={"#"} />
                    <Disclosure.Button
                      as="a"
                      href={e.href}
                      className={classNames(
                        e.current
                          ? "bg-gray-900 text-white"
                          : "text-[#6E5D50] hover:bg-[#EE4B0B] hover:text-white font-bold",
                        "px-3 py-2 rounded-md text-sm font-medium"
                      )}
                      aria-current={e.current ? "page" : undefined}
                    >
                      {e.name}
                    </Disclosure.Button>
                  </div>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      {children}
    </>
  );
}
