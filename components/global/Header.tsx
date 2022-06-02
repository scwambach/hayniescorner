import { useState } from 'react';
import { breakpoints } from '@styles';
import { Container, LinkObject } from '@components';

interface HeaderProps {
  logo?: any;
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

const Header = ({ items, logo }: HeaderProps) => {
  const [activeIndex, setActiveIndex] = useState<number>();
  const [activeSubIndex, setActiveSubIndex] = useState<number>();
  return (
    <header className="header text-white fixed top-0 left-0 w-full z-10">
      <Container maxWidth={breakpoints.xxl}>
        <div className="flex justify-between items-start">
          <LinkObject url="/">
            <div className="flex my-4 items-center">
              <span
                style={{}}
                dangerouslySetInnerHTML={{
                  __html: logo,
                }}
              />
              <span className="my-2 ml-5 mt-small tracking-logo">
                <span className="font-bold uppercase text-logoBold">
                  Haynie's Corner
                </span>
                <br />
                <div className="font-medium uppercase text-logo">
                  Arts District
                </div>
              </span>
            </div>
          </LinkObject>
          <nav className="navigation">
            <ul className="flex text-navItem uppercase font-bold tracking-nav">
              {items.map((item, index) => {
                const { _key, link, subItems = [], classes } = item;
                return (
                  <li
                    className={`relative ${
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
                      classes={`nav-item relative block text-center${
                        classes ? ` ${classes}` : ''
                      }`}
                    />
                    {subItems.length > 0 && (
                      <ul className="subNav absolute top-full bg-white min-w-max right-0 z-10">
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
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export { Header };
export default Header;
