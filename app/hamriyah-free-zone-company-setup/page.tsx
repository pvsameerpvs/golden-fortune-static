import ServicePage from '@/components/ServicePage';

export default function HamriyahSetup() {
  return (
    <ServicePage
      title="Hamriyah Free Zone Company Setup"
      subtitle="Primary Hub for Industry, Oil & Gas"
      description={[
        "Hamriyah Free Zone started in 1995 and offers infinite growth potential across various industries. It leverages state-of-the-art facilities like offices, warehouses, and executive suites.",
        "HFZA is the ideal investment destination for steel fabricators and the primary hub for oil and gas companies due to its favorable location and access to global markets."
      ]}
      advantages={[
        "Full repatriation of capital and profits",
        "Absence of import, export, and custom duty",
        "VAT advantages for eligible companies",
        "Full foreign ownership to expat investors",
        "Multi-currency corporate bank accounts",
        "Access to a 14-meter deep port and 7-meter inner harbor",
        "Onsite labor accommodation and customs facilities",
        "Flexible lease terms (long/short term)"
      ]}
      sections={[
        {
          title: "Available Licenses",
          list: [
            "Commercial License",
            "Service License",
            "Industrial License"
          ]
        }
      ]}
    />
  );
}
