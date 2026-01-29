import ServicePage from '@/components/ServicePage';

export default function ValueAddedServices() {
  return (
    <ServicePage
      title="Value Added Services"
      subtitle="Comprehensive Corporate & Personal Support"
      heroImage="/images/freezone.png"
      description={[
        "Beyond business setup, Golden Legacy provides a comprehensive suite of high-end corporate and legacy planning services. We act as your single point of contact for all administrative, legal, and regulatory requirements in the UAE.",
        "From securing your family's future with legal Wills to managing complex PRO tasks and ensuring tax compliance (VAT & Corporate Tax), our team of experts provides a seamless, integrated approach to managing your corporate and personal lifecycle.",
        "Our value-added services are designed to remove the administrative burden from your shoulders, allowing you to focus entirely on scaling your business and enjoying the UAE lifestyle."
      ]}
      advantages={[
        "End-to-end management of all government and administrative tasks",
        "Expert legacy planning for both Muslim and Non-Muslim residents",
        "Strategic tax planning for the new UAE Corporate Tax regime",
        "Aviation-speed Golden Visa processing for eligible investors",
        "ISO certification advisory to boost corporate credibility",
        "Accurate legal translation and document attestation",
        "Professional bookkeeping and financial reporting",
        "Direct liaison with all UAE government departments"
      ]}
      sections={[
        {
          title: "Our Specialized Services",
          content: "We provide a diverse range of support services to ensure your business remains compliant and your personal assets are protected:",
          list: [
            "UAE Wills: Specialized drafting and registration for Muslims and Non-Muslims.",
            "Golden Visas: 10-year residency processing for investors and talented professionals.",
            "PRO Services: Labor, Immigration, and Economic Department liaison.",
            "VAT & Corporate Tax: Registration, filing, and strategic tax advice.",
            "ISO Certification: Guidance through the audit and certification process.",
            "Document Attestation: MOFA, Notary, and Embassy attestations.",
            "Legal Translation: Multi-language sworn translations for official use.",
            "Bookkeeping: Monthly financial monitoring and year-end reporting."
          ]
        },
        {
          title: "PRO & Government Liaison",
          content: "Our dedicated PRO team handles everything from trade license renewals to labor contract drafting and immigration clearances, ensuring your business never faces fines or administrative delays."
        }
      ]}
    />
  );
}
