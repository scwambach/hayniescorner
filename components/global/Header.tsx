import { useState } from 'react';
import { breakpoints } from '@styles';
import { Logo, Container, LinkObject } from '@components';

interface HeaderProps {
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

const Header = ({ items }: HeaderProps) => {
  const [activeIndex, setActiveIndex] = useState<number>();
  const [activeSubIndex, setActiveSubIndex] = useState<number>();
  return (
    <header className="header">
      <Container maxWidth={breakpoints.xxl}>
        <div className="flex justify-between items-center">
          <LinkObject url="/">
            <Logo classes="w-20" />
          </LinkObject>
          <nav className="navigation">
            <ul className="flex">
              {items.map((item, index) => {
                const { _key, link, subItems = [], classes } = item;
                return (
                  <li
                    className={`relative lg:ml-5 ${
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
                      classes={`nav-item${classes ? ` ${classes}` : ''}`}
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
