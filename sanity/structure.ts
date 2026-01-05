import type { StructureResolver } from "sanity/structure";
import AiOutlineHome from "@meronex/icons/ai/AiOutlineHome";
import FdPageCopy from "@meronex/icons/fd/FdPageCopy";
import FaQuestion from "@meronex/icons/fa/FaQuestion";
import MdEventNote from "@meronex/icons/md/MdEventNote";
import MdStoreMallDirectory from "@meronex/icons/md/MdStoreMallDirectory";
import EnHand from "@meronex/icons/en/EnHand";
import AiOutlineMail from "@meronex/icons/ai/AiOutlineMail";
import FaPaintBrush from "@meronex/icons/fa/FaPaintBrush";
import FaRegClipboard from "@meronex/icons/fa/FaRegClipboard";
import FaRegHandPaper from "@meronex/icons/fa/FaRegHandPaper";
import AiOutlineStar from "@meronex/icons/ai/AiOutlineStar";
import BsGear from "@meronex/icons/bs/BsGear";
import AiFillCompass from "@meronex/icons/ai/AiFillCompass";
import BiShareAlt from "@meronex/icons/bi/BiShareAlt";
import EnGlobe from "@meronex/icons/en/EnGlobe";
import OiImage from "@meronex/icons/oi/OiImage";
import GrResources from "@meronex/icons/gr/GrResources";
import FaStar from "@meronex/icons/fa/FaStar";
import { FaRegStar } from "@meronex/icons/fa";
import { AiOutlineBlock } from "@meronex/icons/ai";
import BsFillPeopleFill from "@meronex/icons/bs/BsFillPeopleFill";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Pages")
        .child(
          S.list()
            .title("Pages")
            .items([
              S.listItem()
                .title("Home Page")
                .child(
                  S.document()
                    .schemaType("homePage")
                    .title("Home Page")
                    .documentId("homePage")
                )
                .icon(AiOutlineHome),
              S.listItem()
                .title("Arts Page")
                .child(
                  S.document()
                    .schemaType("artsPage")
                    .title("Arts Page")
                    .documentId("artsPage")
                )
                .icon(FaPaintBrush),
              S.listItem()
                .title("Businesses Page")
                .child(
                  S.document()
                    .schemaType("businessesPage")
                    .title("Businesses Page")
                    .documentId("businessesPage")
                )
                .icon(MdStoreMallDirectory),
              S.listItem()
                .title("Events Page")
                .child(
                  S.document()
                    .schemaType("eventsPage")
                    .title("Events Page")
                    .documentId("eventsPage")
                )
                .icon(MdEventNote),
              S.listItem()
                .title("About Page")
                .child(
                  S.document()
                    .schemaType("aboutPage")
                    .title("About Page")
                    .documentId("aboutPage")
                )
                .icon(FaQuestion),
              S.listItem()
                .title("HCADA Page")
                .child(
                  S.document()
                    .schemaType("hcadaPage")
                    .title("HCADA Page")
                    .documentId("hcadaPage")
                )
                .icon(FaRegClipboard),
              S.listItem()
                .title("Volunteer Page")
                .child(
                  S.document()
                    .schemaType("volunteerPage")
                    .title("Volunteer Page")
                    .documentId("volunteerPage")
                )
                .icon(EnHand),
              S.listItem()
                .title("Sponsorship Page")
                .child(
                  S.document()
                    .schemaType("volunteerPage")
                    .title("Sponsorship Page")
                    .documentId("sponsorshipPage")
                )
                .icon(FaRegHandPaper),
              S.listItem()
                .title("Contact Page")
                .child(
                  S.document()
                    .schemaType("contactPage")
                    .title("Contact Page")
                    .documentId("contactPage")
                )
                .icon(AiOutlineMail),
            ])
        )
        .icon(FdPageCopy),
      S.listItem()
        .title("Businesses")
        .child(
          S.list()
            .title("Businesses")
            .items([
              // ************** Businesses
              S.listItem()
                .title("Businesses")
                .child(S.documentTypeList("business").title("Businesses"))
                .icon(MdStoreMallDirectory),
              S.divider(),
              // ************** Types
              S.listItem()
                .title("Types")
                .child(S.documentTypeList("businessCategory").title("Types"))
                .icon(AiOutlineStar),
            ])
        )
        .icon(MdStoreMallDirectory),
      S.listItem()
        .title("Events")
        .schemaType("event")
        .child(S.documentTypeList("event"))
        .icon(MdEventNote),
      S.listItem()
        .title("Resources")
        .child(
          S.list()
            .title("Resources")
            .items([
              // ************** People
              S.listItem()
                .title("People")
                .child(S.documentTypeList("person").title("People"))
                .icon(BsFillPeopleFill),
              // ************** Tesimonials
              // S.listItem()
              //   .title('Tesimonials')
              //   .child(S.documentTypeList('testimonial').title('Tesimonials'))
              //   .icon(ZoChatBubbleDots),
              // ************** Features
              S.listItem()
                .title("Features")
                .schemaType("feature")
                .child(S.documentTypeList("feature"))
                .icon(FaStar),
              S.listItem()
                .title("Icon Items")
                .schemaType("iconItem")
                .child(S.documentTypeList("iconItem"))
                .icon(FaRegStar),
              S.listItem()
                .title("Heading Blocks")
                .schemaType("headingBlock")
                .child(S.documentTypeList("headingBlock"))
                .icon(AiOutlineBlock),
              // ************** SVGs
              S.listItem()
                .title("SVG Library")
                .child(S.documentTypeList("svg").title("SVG Library"))
                .icon(OiImage),
            ])
        )
        .icon(GrResources),

      S.listItem()
        .title("Global Settings")
        .child(
          S.list()
            .title("Global Settings")
            .items([
              // ************** Site Settings
              S.listItem()
                .title("Site Settings")
                .child(
                  S.document()
                    .schemaType("globalSettings")
                    .documentId("globalSettings")
                )
                .icon(BsGear),
              // ************** Navigation
              S.listItem()
                .title("Navigation")
                .child(S.documentTypeList("navMenu").title("Navigation"))
                .icon(AiFillCompass),
              // ************** Socials
              S.listItem()
                .title("Socials")
                .child(S.documentTypeList("social").title("Socials"))
                .icon(BiShareAlt),
            ])
        )
        .icon(EnGlobe),
    ]);
