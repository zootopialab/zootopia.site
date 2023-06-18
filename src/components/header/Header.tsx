import React, { FunctionComponent, ReactElement, Fragment } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { classNames } from "../../utils/class-names";
import { UserIcon, TagIcon } from "@heroicons/react/solid";
import Image from "next/image";

const writeNavigation = [
  { name: "ImageUpload", href: "/login" },
  { name: "Dashboard", href: "/login" },
];

const userNavigation = [
  { name: "My page", href: "/login" },
  { name: "setting", href: "/login" },
];

const Header: FunctionComponent = (): ReactElement => {
  const router = useRouter();
  const current = router.pathname;

  return (
    <>
      <Disclosure as="header" className="z-10 border-b shadow-md">
        {() => (
          <>
            <div className="px-8 mx-auto divide-y divide-black">
              <div className="relative flex justify-between h-16">
                <div className="z-10 flex px-0">
                  <div className="flex items-center flex-shrink-0 cursor-pointer">
                    <Image
                      className="rounded-full cursor-pointer"
                      src="https://tistory3.daumcdn.net/tistory/571103/attach/c87f780fad0443338143eda499b54d37"
                      width={30}
                      height={30}
                      alt="Jiran"
                    />
                    <p className="ml-2">Jiran Together</p>
                  </div>
                </div>
                <div className="z-10 flex items-center gap-4">
                  {/* 게시한, 이미지 업로드 작업 */}
                  <Menu as="div" className="relative flex-shrink-0">
                    <div>
                      <Menu.Button
                        className="flex rounded-full"
                        aria-label="user profile"
                      >
                        <TagIcon className="w-7 h-7" />
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
                      <Menu.Items className="absolute right-0 w-48 py-1 mt-6 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-slate-800 dark:border-slate-600">
                        {writeNavigation.map((item) => (
                          <Menu.Item key={item.name}>
                            {() => (
                              <Link
                                className={classNames(
                                  item.href === current
                                    ? "text-secondary font-medium"
                                    : "text-gray-700",
                                  "block py-2 px-4 text-sm"
                                )}
                                href={item.href}
                              >
                                {item.name}
                              </Link>
                            )}
                          </Menu.Item>
                        ))}
                      </Menu.Items>
                    </Transition>
                  </Menu>

                  {/* Profile dropdown */}
                  <Menu as="div" className="relative flex-shrink-0">
                    <div>
                      <Menu.Button
                        className="flex rounded-full"
                        aria-label="user profile"
                      >
                        <UserIcon className="w-7 h-7" />
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
                      <Menu.Items className="absolute right-0 w-48 py-1 mt-6 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-slate-800 dark:border-slate-600">
                        {userNavigation.map((item) => (
                          <Menu.Item key={item.name}>
                            {() => (
                              <Link
                                className={classNames(
                                  item.href === current
                                    ? "text-secondary font-medium"
                                    : "text-gray-700",
                                  "block py-2 px-4 text-sm"
                                )}
                                href={item.href}
                              >
                                {item.name}
                              </Link>
                            )}
                          </Menu.Item>
                        ))}
                      </Menu.Items>
                    </Transition>
                  </Menu>
                  <div>
                    <Link href="/login">Login</Link>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </Disclosure>
    </>
  );
};

export default Header;
