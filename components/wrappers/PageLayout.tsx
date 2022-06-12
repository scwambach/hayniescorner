import { PageBanner, Layout, Seo, Header, Footer } from '@components';

interface PageLayoutProps {
  children: any | any[];
  content?: any;
  global?: any;
  preview?: boolean;
  subPage?: { banner: any; color: string };
}

const PageLayout = ({
  children,
  content,
  global,
  subPage,
}: PageLayoutProps) => {
  const seoProps = {
    content,
    global,
  };

  const menuItems = global.menus.filter((m) => m.title === 'Main Menu')[0]
    .items;

  return (
    <Layout>
      <main className={`bg-black${subPage ? ' pt-headerHeight' : ''}`}>
        <Seo {...seoProps} />
        <Header
          items={menuItems}
          subPage={subPage}
          iconImage={global.site.mainLogoImage}
          customIcon={
            global.site.mainLogo
              ? global.site.mainLogo.customStyleCode.code
              : null
          }
        />
        {subPage && (
          <PageBanner {...subPage.banner} backgroundColor={subPage.color} />
        )}
        {children}
        <Footer
          socials={global.socials}
          iconImage={global.site.footerLogoImage}
          customIcon={
            global.site.footerLogo
              ? global.site.footerLogo.customStyleCode.code
              : null
          }
        />
      </main>
    </Layout>
  );
};

export { PageLayout };
export default PageLayout;
