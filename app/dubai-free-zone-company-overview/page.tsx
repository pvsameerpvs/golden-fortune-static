import ServicePage from '@/components/ServicePage';

export default function FreeZoneOverview() {
  return (
    <ServicePage
      title="UAE Free Zone Company Formation"
      subtitle="Overview of Free Trade Zones in the UAE"
      description={[
        "Free Trade Zones are areas in the UAE that are entitled to certain tax, customs, and imports regime. Each Free Zone caters to a particular commercial category and offers 100% ownership to entrepreneurs.",
        "An FZE (Free Zone Establishment) or FZC (Free Zone Company) is a limited liability entity governed by the rules of the specific Free Zone. With more than 40 Free Zones, the UAE has become an ideal business hub for foreign investors.",
        "You are free to open offices in any of the UAE free zones across Dubai, Abu Dhabi, Sharjah, Fujairah, Ras Al Khaimah, and Umm Al Quwain."
      ]}
      advantages={[
        "100% Foreign Ownership",
        "Multi-currency Corporate bank accounts",
        "100% Repatriation of Capital and Profits",
        "100% Corporate and Personal Income Tax Exemption",
        "Absence of currency restrictions",
        "Wide range of licensable activities",
        "Abundant and inexpensive energy",
        "Modern communication and logistic infrastructure",
        "Excellent support services for SMEs and start-ups",
        "Robust labor and immigration procedures"
      ]}
      sections={[
        {
          title: "Setup Requirements",
          content: "You have the option to set up:",
          list: [
            "Free Zone Establishment (FZE) – Single shareholder",
            "Free Zone Company (FZC) – Two or more shareholders",
            "Branch or Representative Office of an existing Parent Company"
          ]
        },
        {
          title: "Strategic Hubs",
          content: "We provide services across all major Free Zones including IFZA, DMCC, SHAMS, DAFZA, JAFZA, and more."
        }
      ]}
    />
  );
}
