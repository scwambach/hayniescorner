import { createContext, useEffect, useState } from 'react';

interface LayoutProps {
  children: any | any[];
  content?: any;
  global?: any;
  preview?: boolean;
}

type ContextProps = {
  menus?: any;
  contact?: any;
  site?: any;
  socials?: any;
  menuOpen?: any;
  setMenuOpen?: any;
  windowWidth?: number;
  hasWindow: boolean;
};

export const MainContext = createContext<ContextProps | null>(null);

const Layout = ({ children }: LayoutProps) => {
  const [windowWidth, setWindowWidth] = useState(null);
  const [hasWindow, setHasWindow] = useState(false);

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    window.addEventListener('resize', () => {
      setWindowWidth(window.innerWidth);
    });

    if (typeof window !== 'undefined') {
      setHasWindow(true);
    }
  }, []);

  return (
    <MainContext.Provider
      value={{
        windowWidth,
        hasWindow,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export { Layout };
export default Layout;
