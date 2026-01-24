import ServicePage from '@/components/ServicePage';

export default function DubaiMediaCity() {
  return (
    <ServicePage
      title="Dubai Media City Business Set Up"
      subtitle="The Hub of Media and Content Production"
      heroImage="/images/freezone.png"
      description={[
        "Dubai Media City (DMC) started in 2001 and is home to over 1,500 companies and 25,000 employees. It hosts several Fortune 500 companies and welcomes professionals from across the globe.",
        "DMC offers state-of-the-art infrastructure ideal for media companies producing top-notch content, having transformed the media business landscape in the region."
      ]}
      advantages={[
        "100% foreign ownership",
        "0% corporate and other taxes",
        "No local sponsor required",
        "Multi-currency corporate bank accounts",
        "Residence and work permits for professionals",
        "Robust business setup process",
        "Strategic location in the heart of Dubai"
      ]}
      sections={[
        {
          title: "Available Licenses",
          content: "DMC issues licenses in various areas including:",
          list: [
            "Broadcasting",
            "Consulting",
            "Electronic Media and Media Support",
            "Film Distribution, Management, and Production",
            "Information Agencies",
            "Media and Marketing Services",
            "Music & Entertainment",
            "Publishing",
            "Web Design and Management"
          ]
        }
      ]}
    />
  );
}
