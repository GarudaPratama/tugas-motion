import ContentContainer from '@/components/ContentContainer';
import logo from '/logo.svg';
import MenuList from './menu-list';

function Navbar() {
  return (
    <nav className='w-full h-17.5 md:h-20 bg-white sticky top-0 z-50'>
      <ContentContainer className='flex items-center justify-between h-17.5 md:h-20'>
        <section className={`gap-2 items-center cursor-pointer`}>
          <img
            src={logo}
            alt={'logo-sandbox'}
            className='w-auto h-8.75 md:h-12'
            width={155}
            height={31}
          />
        </section>

        <section>
          <MenuList className='hidden lg:flex items-center' />
        </section>
      </ContentContainer>
    </nav>
  );
}

export default Navbar;
