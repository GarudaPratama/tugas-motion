'use client';

import { ChevronDown } from 'lucide-react';
import { useLenis } from 'lenis/react'; // 👈 1. Impor useLenis
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Menubar, MenubarMenu, MenubarTrigger } from '@/components/ui/menubar';
import { menus } from '@/menus';

function MenuList({ className, mode = 'light' }) {
  const isDarkMode = mode === 'dark';
  const textColor = isDarkMode ? 'text-white' : 'text-[#112352]';
  
  const lenis = useLenis(); // 👈 2. Ambil instance Lenis

  // 👈 3. Fungsi Handler Scroll via Lenis
  const handleScroll = (e, path) => {
    if (path && path.includes('#')) {
      e.preventDefault();
      const targetId = '#' + path.split('#')[1]; // Ambil nama ID (misal: #layanan)
      
      if (lenis) {
        lenis.scrollTo(targetId, {
          offset: -80, // Offset 80px agar section tidak tertutup Navbar fixed
          duration: 1.5,
        });
      }
    }
  };

  return (
    <section className={`flex items-center gap-1 ${className} ${mode}`}>
      {menus.map((menu) =>
        menu.children && menu.children.length > 0 ? (
          <DropdownMenu key={menu.id}>
            <DropdownMenuTrigger asChild>
              <span
                className={`group opacity-95 text-base font-medium px-3 flex items-center cursor-pointer ${textColor}`}>
                {menu.name}
                <ChevronDown
                  className={`ml-2 h-3 w-3 transition-transform ${textColor}`}
                />
              </span>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <div
                className={`w-62.5 flex flex-col p-4 rounded-lg shadow-lg ${
                  isDarkMode
                    ? 'bg-slate-800 text-white'
                    : 'bg-white text-[#112352]'
                }`}>
                {menu.children.map((child) => (
                  <a
                    key={child.id}
                    href={child.path || '#'}
                    onClick={(e) => handleScroll(e, child.path)} // 👈 4. Pasang handler di child menu
                    className={`flex items-center gap-2 p-2 rounded-md transition-colors duration-200 text-base ${
                      isDarkMode
                        ? 'hover:bg-slate-700 text-white'
                        : 'hover:bg-gray-100 text-[#112352]'
                    }`}>
                    <span className='font-medium text-base'>{child.name}</span>
                  </a>
                ))}
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Menubar
            key={menu.id}
            className='bg-transparent border-none shadow-none'>
            <a
              href={menu.path || '#'}
              onClick={(e) => handleScroll(e, menu.path)} // 👈 5. Pasang handler di main menu
              className={`opacity-95 ${textColor}`}>
              <MenubarMenu>
                <MenubarTrigger className='bg-transparent cursor-pointer'>
                  <span className={`font-medium text-base ${textColor}`}>
                    {menu.name}
                  </span>
                </MenubarTrigger>
              </MenubarMenu>
            </a>
          </Menubar>
        ),
      )}
    </section>
  );
}

export default MenuList;