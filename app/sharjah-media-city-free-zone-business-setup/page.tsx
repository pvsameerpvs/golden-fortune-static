import ServicePage from '@/components/ServicePage';

export default function ShamsSetup() {
  return (
    <ServicePage
      title="Sharjah Media City Free Zone Business Setup"
      subtitle="Shams Media & Innovation Hub"
      description={[
        "Sharjah Media City (Shams) was established in 2017 to accelerate the growth of creative and media businesses. It provides groundbreaking services and types of entities like FZC, FZE, and branch offices.",
        "Shams is located just 5 minutes from Sharjah International Airport and 15 minutes from Dubai International Airport, making it highly accessible."
      ]}
      advantages={[
        "100% foreign ownership",
        "Diverse range of activities on one license",
        "No mandatory physical presence required to incorporate",
        "100% repatriation of capital and profits",
        "Multi-currency corporate bank accounts",
        "Quick and simple online registration",
        "Deposits not required by Shams",
        "Allows up to 6 visas on a shared desk facility",
        "Exemption from corporate and personal tax",
        "Limited liability for companies"
      ]}
      sections={[
        {
          title: "Creative Catalyst",
          content: "Shams is becoming a world-class media hub, offering innovative solutions for entrepreneurs in the media and creative industries."
        }
      ]}
    />
  );
}
