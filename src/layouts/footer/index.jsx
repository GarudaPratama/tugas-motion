import { ArrowUp } from 'lucide-react';
import logo from '/logo.svg';
import ContentContainer from '@/components/ContentContainer';
import { handleSmoothScroll } from '@/utils/functions';
import { menus } from '@/menus';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className='bg-[#0c1836] text-white py-10 border-t border-slate-800'>
      <ContentContainer isRelative={false}>
        <div className='flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-slate-800'>
          
          <div className='flex items-center gap-3'>
            <img
              src={logo}
              alt='Sandbox'
              className='h-8 w-auto brightness-0 invert'
            />
          </div>

          <div className='flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400'>
            {menus.map((m) => (
              <a
                key={m.id}
                href={m.path}
                onClick={(e) => handleSmoothScroll(e, m.path)}
                className='hover:text-main transition'>
                {m.name}
              </a>
            ))}
          </div>

          <button
            onClick={scrollToTop}
            className='flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs text-slate-200 cursor-pointer transition'>
            <span>Atas</span>
            <ArrowUp size={14} />
          </button>
        </div>

        <div className='pt-6 text-center text-xs text-slate-500'>
          © {new Date().getFullYear()} Sandbox. Hak Cipta Dilindungi.
        </div>
      </ContentContainer>
    </footer>
  );
}

export default Footer;
