"use client"
import { FC } from 'react';
import MenuScroll from './menuScroll/MenuScroll';

interface NavBarProps {}

const NavBar: FC<NavBarProps> = () => (
  <div className="w-[100%] h-[15vh] bg-black text-white rounded-b-[32px] shadow-gray-100 shadow-lg">
    <nav className="w-[100%] h-[100%] flex justify-center items-center">
        <ul className="flex space-x-32">
            <li className=""><a href="./">Home</a></li>
            <li className=""><MenuScroll /></li>
            <li className=""><a href="./contac-us">Contact us</a></li>
        </ul>
    </nav>
  </div>
);

export default NavBar;