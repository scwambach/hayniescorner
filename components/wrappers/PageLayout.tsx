import { Layout, Seo, Header, Footer } from '@components';

interface PageLayoutProps {
  children: any | any[];
  content?: any;
  global?: any;
  preview?: boolean;
}

const PageLayout = ({ children, content, global }: PageLayoutProps) => {
  const seoProps = {
    content,
    global,
  };

  const menuItems = global.menus.filter((m) => m.title === 'Main Menu')[0]
    .items;

  return (
    <Layout>
      <main className="bg-white">
        <Seo {...seoProps} />
        <Header items={menuItems} />
        {children}
        <Footer />
      </main>
    </Layout>
  );
};

export { PageLayout };
export default PageLayout;
