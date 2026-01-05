import { Footer } from "@/components/global/Footer";
import { Header } from "@/components/global/Header";
import { siteQuery } from "@/queries";
import "@/styles/globals.css";
import "@/styles/main.scss";
import { client } from "@/utils/client";

export interface GlobalProps {
  site: {
    title?: string;
    footerLogo?: string;
    mainLogo?: string;
    customIcon?: string;
    mainLogoImage?: any;
    footerLogoImage?: any;
    siteDescription?: string;
    siteTitle?: string;
    mainEmail?: string;
  };
  navigation?: {
    _key: string;
    url: string;
    copy: string;
  }[];
  socials?: {
    _id: string;
    url: string;
    icon: string;
  }[];
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const siteData: GlobalProps = await client.fetch(siteQuery);
  return (
    <html>
      <body>
        <main className="text-white">
          <Header
            logo={siteData.site.mainLogo}
            navigation={siteData.navigation}
            siteTitle={siteData.site.siteTitle}
          />
          {children}
          <Footer
            customIcon={siteData.site.footerLogo}
            socials={siteData.socials}
          />
        </main>
      </body>
    </html>
  );
}
