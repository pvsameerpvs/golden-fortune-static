import ServicePage from '@/components/ServicePage';

export default function DAFZASetup() {
  return (
    <ServicePage
      title="Business Setup in DAFZA"
      subtitle="Dubai Airport Free Zone (DAFZA)"
      description={[
        "DAFZA was established in 1996 next to Dubai International Airport, the world's busiest. It home to 1,800 companies and 15,000 professionals, offering unrivaled connectivity to Europe, India, and the Far East.",
        "With world-class infrastructure and a business-oriented regulatory environment, DAFZA provides options for offices, warehouses, cold storage, and a dedicated logistics center."
      ]}
      advantages={[
        "100% foreign company ownership",
        "Full repatriation of capital and profits",
        "No restriction on currency and employment",
        "Absence of corporate and income tax",
        "Multi-currency corporate bank accounts",
        "Exemption from VAT",
        "Smart services platform for administration",
        "Access to meeting rooms, auditorium and training facilities",
        "Dual DED license options available"
      ]}
    />
  );
}
