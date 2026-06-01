import { Container } from "@/components/modules/Container";

export async function generateMetadata() {
  return {
    title: "FF Map - Haynie's Corner Arts District",
    description: "View the FF Map of Haynie's Corner Arts District",
    openGraph: {
      title: "FF Map - Haynie's Corner Arts District",
      description: "View the FF Map of Haynie's Corner Arts District",
    },
  };
}

export default function MapPage() {
  return (
    <Container>
      <div className="map-viewer">
        <div className="pdf-container">
          <object
            data="/FF MAP.pdf"
            type="application/pdf"
            width="100%"
            height="800px"
            aria-label="FF Map PDF"
          >
            <p>
              Your browser does not support PDF viewing.{" "}
              <a href="/FF MAP.pdf" download>
                Download the PDF
              </a>{" "}
              instead.
            </p>
          </object>
        </div>
      </div>
    </Container>
  );
}
