import { FC } from 'react';
import Link from "next/link";

interface NavBarTopicsProps {
    children?: React.ReactNode
}

const NavBarTopics: FC<NavBarTopicsProps> = ({children}) => (
    <div className="w-[100%] h-[100vh] border-t border-r border-b bg-black text-white rounded-r-[32px] shadow-cyan-500 shadow-2xl">
      <div className="h-[15%] border-b rounded-tr-[32px] flex justify-center items-center">
        <nav className="h-[100%]">
          <ul className="h-[100%] grid content-evenly">
            <li className="text-center"><Link href="/">Home</Link></li>
            <li><Link href="/contac-us">Contac us</Link></li>
          </ul>
        </nav>
      </div>
  
      <div className="w-[100%] h-[70%] flex justify-center items-center">
        <nav className="h-[100%]">
          <ul className="h-[100%] grid content-around">
            {children}
          </ul>
        </nav>
      </div>
    </div>
  );

export default NavBarTopics;