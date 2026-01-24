import ServicePage from '@/components/ServicePage';

export default function JAFZASetup() {
  return (
    <ServicePage
      title="JAFZA Company Formation"
      subtitle="Business Setup in Jebel Ali Free Zone"
      heroImage="/images/freezone.png"
      description={[
        "Jebel Ali Free Zone is one of the oldest trade zones in Dubai, operating since 1985. It is home to 8,000 companies, including many Global Fortune 500 enterprises, and contributes 24% of Dubai's GDP.",
        "JAFZA is a haven for a thriving smart business community, offering infinite growth opportunities to businesses that operate both locally and globally."
      ]}
      advantages={[
        "100% foreign ownership",
        "Exemption from corporate tax for 50 years (renewable)",
        "No restriction on capital repatriation",
        "Absence of import and re-export tax",
        "No personal income tax",
        "Multi-currency corporate bank accounts",
        "Multiple activities allowed on one license",
        "Onsite customs solutions",
        "Ability to mortgage premises"
      ]}
    />
  );
}
