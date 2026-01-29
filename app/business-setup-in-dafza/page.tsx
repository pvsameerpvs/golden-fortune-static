import ServicePage from '@/components/ServicePage';

export default function DAFZASetup() {
  return (
    <ServicePage
      title="Business Setup in DAFZA"
      subtitle="Dubai Airport Free Zone (DAFZA)"
      heroImage="/images/freezone.png"
      description={[
        "Established in 1996, Dubai Airport Freezone (DAFZA) is one of the most prestigious and advanced free zones in the UAE. Strategically located next to Dubai International Airport—the world's busiest hub for international travel—DAFZA provides unrivaled connectivity to markets across Europe, the Indian Subcontinent, and the Far East.",
        "Home to over 1,800 international companies and 15,000 professionals, DAFZA offers a business-oriented regulatory environment with world-class infrastructure. It is designed to facilitate the rapid movement of goods and services, making it the ideal choice for companies in the aviation, electronics, and luxury logistics sectors.",
        "With a focus on innovation, DAFZA provides a range of workspace solutions including premium offices, smart warehouses, and specialized cold storage facilities, all backed by a dedicated logistics center and streamlined administrative services."
      ]}
      advantages={[
        "100% foreign company ownership and control",
        "Full repatriation of capital and profits",
        "0% Corporate and Personal Income tax",
        "Strategic proximity to Dubai International Airport (DXB)",
        "Exemption from all import and export duties",
        "Multi-currency corporate bank account eligibility",
        "24/7 dedicated customs services and rapid cargo clearance",
        "Dual DED licensing options (allowing business in mainland)",
        "World-class telecommunications and data infrastructure",
        "Smart services platform for all governmental and administrative tasks"
      ]}
      sections={[
        {
          title: "Infrastructure & Logistics",
          content: "DAFZA offers specialized high-tech facilities including Light Industrial Units (LIUs) for assembly and packaging, and cold storage for pharmaceutical and perishable goods.",
          list: [
            "Smart Offices: Fully furnished and serviced workspaces.",
            "Warehousing: High-end storage facilities with 24/7 access.",
            "On-site Customs: Expedited clearance for air cargo.",
            "Business Center: Access to boardrooms and conference facilities."
          ]
        }
      ]}
    />
  );
}
