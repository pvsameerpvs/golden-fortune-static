import ServicePage from '@/components/ServicePage';

export default function SAIFSetup() {
  return (
    <ServicePage
      title="SAIF Zone Business Setup"
      subtitle="Sharjah Airport International Free Zone"
      heroImage="/images/freezone.png"
      description={[
        "SAIF Zone was launched in 1995 and has licensed more than 8,000 companies from 165 countries. It is known for its unmatched strategic location and record-breaking license issuance on the same day.",
        "SAIF Zone is well connected with Sharjah International Airport, major highways, and seaports, offering a tax-friendly destination for fast-track entrepreneurs."
      ]}
      advantages={[
        "Exemption from corporate and personal tax",
        "Single-window approach for all administrative services",
        "License issued on the same day",
        "Multi-currency corporate bank accounts",
        "Licenses for Trading, Services, and Industrial segments",
        "On-site inspection for rapid clearance of goods"
      ]}
    />
  );
}
