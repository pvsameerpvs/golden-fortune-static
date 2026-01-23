import ServicePage from '@/components/ServicePage';

export default function RAKEZSetup() {
  return (
    <ServicePage
      title="RAKEZ Company Formation"
      subtitle="Business Setup in Ras Al Khaimah Economic Zone"
      description={[
        "RAKEZ was established in 2000 to develop customer-oriented business solutions. It provides 100% foreign ownership and is home to thousands of enterprises, including many Fortune 500 companies.",
        "RAKEZ is a business powerhouse connected to global markets in the Middle East, North Africa, Europe, and Asia, offering unlimited space for industrial expansion."
      ]}
      advantages={[
        "Exemption from corporate and personal income tax",
        "100% foreign ownership and profit repatriation",
        "Exemption from customs duty on re-exported goods",
        "Cost-effective Flexi facilities and warehouses",
        "Multi-currency corporate bank accounts",
        "Access to seaports and airports",
        "Customer-centric and holistic approach",
        "Safe and responsible business environment"
      ]}
    />
  );
}
