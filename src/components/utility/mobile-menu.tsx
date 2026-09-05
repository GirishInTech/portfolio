import { Dispatch, Fragment, SetStateAction } from "react";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";

import { Dialog, Transition } from "@headlessui/react";

import ThemeSwitch from "@/components/utility/theme-switch";
import { type NavbarProps } from "@/layout/navbar";
import { classNames } from "@/utility/classNames";

export interface MobileMenuProps extends NavbarProps {
  openMenu: boolean;
  setOpenMenu: Dispatch<SetStateAction<boolean>>;
}

export default function MobileMenu({
  openMenu,
  routes,
  setOpenMenu,
}: MobileMenuProps) {
  const pathName = usePathname();
  const router = useRouter();

  const handleClick = (href: string) => {
    setOpenMenu(false);
    router.push(href);
  };

  return (
    <Transition show={openMenu} as={Fragment}>
      <Dialog as="div" className="z-50" onClose={setOpenMenu}>
        <div className="fixed inset-0 flex items-center justify-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 bottom-full"
            enterTo="opacity-100 bottom-[15%]"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 bottom-[15%]"
            leaveTo="opacity-0 bottom-full"
          >
            <Dialog.Panel className="dream-card pointer-events-none absolute flex max-h-[85dvh] min-h-[60%] w-[calc(100%-1.5rem)] flex-col items-center justify-center overflow-y-auto rounded-[2rem] px-6 py-10 text-accent shadow-xl md:px-10 md:py-16">
              <div className="pointer-events-auto flex w-full max-w-xs flex-col items-center gap-2 text-center sm:gap-4">
                {routes.map((link, i) => (
                  <button
                    key={i}
                    className="touch-target group relative flex w-full items-center justify-center py-2 text-2xl font-medium sm:text-3xl"
                    onClick={() => handleClick(link.href)}
                  >
                    <span
                      className={classNames(
                        pathName === link.href ? "w-full" : "w-0",
                        "absolute -bottom-1 left-0 h-1 rounded-lg bg-accent transition-[width] duration-300 group-hover:w-full",
                      )}
                    ></span>
                    {link.title}
                  </button>
                ))}
                <ThemeSwitch setClose={setOpenMenu} />
              </div>
              <div className="absolute bottom-0 py-6">Girish Yandigeri</div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
