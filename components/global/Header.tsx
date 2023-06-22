import { useEffect, useState } from 'react';
import { breakpoints } from '@styles';
import { Container, LinkObject, ImageIcon, ImageProps } from '@components';
import { Wiffle } from '@components/svg';

interface HeaderProps {
  iconImage?: ImageProps;
  customIcon?: string;
  subPage?: any;
  items: {
    _key: string;
    classes: string;
    link: {
      anchor: boolean;
      copy: string;
      newTab: boolean;
      url: string;
    };
    subItems: {
      _key: string;
      anchor: boolean;
      copy: string;
      newTab: boolean;
      classes: string;
      url: string;
    }[];
  }[];
}

const Header = ({ items, iconImage, customIcon, subPage }: HeaderProps) => {
  const [activeIndex, setActiveIndex] = useState<number>();
  const [activeSubIndex, setActiveSubIndex] = useState<number>();
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [scrollingDown, setScrollingDown] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      if (window.oldScroll < window.scrollY && window.scrollY > 100) {
        setScrollingDown(true);
      } else if (window.scrollY < 100) {
        setScrollingDown(false);
      }

      window.oldScroll = window.scrollY;
    };
  }, []);

  // check if today is past this date 10/24/2023
  const today = new Date();
  const date = new Date('10/24/2023');
  const isPast = today > date;

  return (
    <header
      className={`header text-white transition-all ease-in-out fixed ${
        subPage || scrollingDown ? 'bg-black ' : ''
      }top-0 left-0 w-full z-30`}
    >
      <Container maxWidth={breakpoints.xxl}>
        <div className="flex justify-between items-start">
          <LinkObject url="/">
            <div className="flex my-1 md:my-4 items-center">
              <ImageIcon iconImage={iconImage} customIcon={customIcon} />
              <span className="my-2 ml-5 mt-ten tracking-logo logo-copy-container">
                <span className="font-bold uppercase text-logoBold">
                  Haynie&apos;s Corner
                </span>
                <br />
                <div className="font-medium uppercase text-logo">
                  Arts District
                </div>
              </span>
            </div>
          </LinkObject>
          <nav className="navigation lg:mr-twenty">
            <button
              name="Menu Toggle"
              className={`toggle block w-10 mr-0 ml-auto my-6 md:my-8 lg:hidden ${
                menuOpen ? 'open' : 'close'
              }`}
              onClick={() => {
                setMenuOpen(!menuOpen);
              }}
            >
              <span className="bar block bg-white h-1 w-full" />
              <span className="bar block bg-white mt-five h-1 w-full" />
              <span className="bar block bg-white mt-five h-1 w-full" />
            </button>
            <ul
              className={`lg:flex text-navItem uppercase font-bold tracking-nav ${
                menuOpen ? 'open' : 'close'
              }`}
            >
              {items.map((item, index) => {
                const { _key, link, subItems = [], classes } = item;
                return (
                  <li
                    className={`relative transition-all ease-in-out opacity-0 lg:opacity-100 lg:ml-navItem ${
                      subItems.length > 0 ? 'hasSub' : ''
                    }${
                      subItems.length > 0 && activeIndex === index
                        ? ' open'
                        : ''
                    }${activeSubIndex === index ? ' sub-open' : ''}`}
                    key={_key}
                    onMouseLeave={() => {
                      setActiveIndex(null);
                    }}
                  >
                    <LinkObject
                      {...link}
                      setActiveIndex={setActiveIndex}
                      index={index}
                      classes={`nav-item relative block p-5 lg:p-0 lg:py-thirty lg:min-w-menuItem text-center${
                        classes ? ` ${classes}` : ''
                      }`}
                    />
                    {subItems.length > 0 && (
                      <ul className="subNav hidden absolute top-full bg-white min-w-max right-0 z-10">
                        {subItems.map((subItem) => (
                          <li key={subItem._key}>
                            <LinkObject
                              {...subItem}
                              classes={`block py-2 px-5 lg:hover:bg-color2 sub-nav-item${
                                subItem.classes ? ` ${subItem.classes}` : ''
                              }`}
                              setActiveIndex={setActiveSubIndex}
                              index={index}
                            />
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              })}
              {!isPast && (
                <li
                  className={`relative block lg:hidden transition-all ease-in-out opacity-0 lg:opacity-100 lg:ml-navItem `}
                  onMouseLeave={() => {
                    setActiveIndex(null);
                  }}
                >
                  <LinkObject
                    classes={`nav-item relative block p-5 lg:p-0 lg:py-thirty lg:min-w-menuItem text-center`}
                    setActiveIndex={setActiveIndex}
                    copy="Wiffle Ball"
                    url="/wiffle-ball"
                  />
                </li>
              )}
            </ul>
            {!isPast && (
              <LinkObject
                classes="wiffle-icon hidden lg:block absolute top-2 xxxl:top-3 right-2 xxxl:right-7"
                url="/wiffle-ball"
              >
                <Wiffle size={30} />
                <span className="caption w-16 text-xs absolute top-full left-1/2 -translate-x-1/2 bg-white text-black text-center p-[1px] mt-1 rounded-[5px]">
                  Wiffle Ball
                </span>
              </LinkObject>
            )}
          </nav>
        </div>
      </Container>
    </header>
  );
};

export { Header };
export default Header;
