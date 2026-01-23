import ServicePage from '@/components/ServicePage';

export default function DMCCSetup() {
  return (
    <ServicePage
      title="DMCC Free Zone Company Setup"
      subtitle="Dubai Multi Commodities Center"
      description={[
        "Established in 2002, DMCC is strategically located on Sheikh Zayed Road. It has been awarded 'Global Free Zone of the Year' for five consecutive years by the Financial Times.",
        "DMCC is the most prestigious Free Zone in Dubai, offering world-class infrastructure and unrivaled growth potential for commodities and general trading businesses."
      ]}
      advantages={[
        "100% foreign ownership",
        "0% corporate and personal income tax",
        "Multi-currency corporate bank accounts",
        "No physical presence required for incorporation",
        "Full repatriation of capital and profits",
        "Strategic location connecting Abu Dhabi and Dubai",
        "State-of-the-art office solutions",
        "Diverse business activities spanning all sectors",
        "Zero foreign currency restrictions",
        "No minimum paid-up capital requirement for many licenses"
      ]}
      sections={[
        {
          title: "Ideal Destination for Investors",
          content: "DMCC provides a world-class business environment with access to global markets and a thriving community of international enterprises."
        }
      ]}
    />
  );
}
