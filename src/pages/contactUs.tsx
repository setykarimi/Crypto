import ContactUsForm from "@/components/common/form";
import AboutUs from "@pagesComp/contactUs/aboutUs";
import ContactUsBanner from "@pagesComp/contactUs/banner";

export default function ContactUsPage() {
  return (
    <>
      <ContactUsBanner />
      <AboutUs />
      <ContactUsForm />
    </>
  );
}
