import { FC } from "react";
import { useDropDown } from "@/src/hooks/useDropDown";
import Link from "next/link";

interface MenuScrollProps {}

const MenuScroll: FC<MenuScrollProps> = () => {
  const {dropDown, setDropDown} = useDropDown(false);

  const toggleMenu = () => {
    setDropDown(!dropDown)
  };

  return (
    <div className="relative inline-block text-left">
      <div>
      <button
        type="button"
        className= "inline-flex w-full justify-center gap-x-1.5 rounded-md text-white transition-all"
        id="menu-button"
        aria-expanded={dropDown}
        aria-haspopup="true"
        onClick={toggleMenu}>
          Numerical Methods
          <svg
            className={`-mr-1 h-5 w-5 text-gray-400 transition-transform mt-[1px] ${
            dropDown ? 'rotate-180' : ''
            }`}
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true">
              <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
          </svg>          
        </button>
      </div>

      {dropDown && (
        <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1" role="none">
            <div className="border-b">
            <Link href="/methods">
              <p
                className="text-gray-700 block px-4 py-2 text-sm"
                role="menuitem"
                tabIndex={-1}
                id="menu-item-0"
              >
                General
              </p>
            </Link>
            </div>
            <Link href="/methods/topic-1/error">
              <p className="text-gray-700 block px-10 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-1">
                Numerical solution
              </p>
            </Link>

            <Link href="/methods/topic-2/gauss-seidel">
              <p className="text-gray-700 block px-10 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-1">
                System of equations
              </p>
            </Link>

            <Link href="/methods/topic-3/newton-interpolation">
              <p className="text-gray-700 block px-10 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-1">
                Interpolation
              </p>
            </Link>

            <Link href="/methods/topic-4/trapezium">
              <p className="text-gray-700 block px-10 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-1">
                Numerical integration
              </p>
            </Link>

            <Link href="/methods/topic-5/euler">
              <p className="text-gray-700 block px-10 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-1">
                Differential Equations
              </p>
            </Link>

          </div>
        </div>
      )}
    </div>
  );
};

export default MenuScroll;