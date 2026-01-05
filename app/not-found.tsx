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

export const metadata = {
  title: "404 - Not Found",
  description: "Page not found.",
};

export const dynamic = "force-static";

export default async function FourOhFour() {
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
          <h1 className="text-center leading-[1] font-display px-4 text-[10vw] tablet-md:text-8xl py-52 tablet-md:py-80">
            404
            <br />
            Not Found
          </h1>
          <Footer
            customIcon={siteData.site.footerLogo}
            socials={siteData.socials}
          />
        </main>
      </body>
    </html>
  );
}
