import { Transition, Dialog } from "@headlessui/react";
import React, { Fragment } from "react";
import { useDialog } from "./useDialog";

const SidebarLayout = () => {
  const { isSidebarOpen, content } = useDialog();
  return (
    <>
      <Transition.Root show={isSidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed z-30 overflow-hidden"
          onClose={() => {
            //Dialog에서 Close할 수 있게함
          }}
          static={true}
        >
          <div className="absolute inset-0 overflow-hidden">
            <Dialog.Overlay className="absolute inset-0" />

            <div className="fixed inset-y-0 right-0 flex max-w-full pl-10 pointer-events-none sm:pl-16">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <div className="w-screen max-w-lg pointer-events-auto">
                  {content}sss
                </div>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default SidebarLayout;
