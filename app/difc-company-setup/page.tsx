import ServicePage from '@/components/ServicePage';

export default function DIFCSetup() {
  return (
    <ServicePage
      title="DIFC Company Setup"
      subtitle="Dubai International Financial Centre"
      heroImage="/images/freezone.png"
      description={[
        "The Dubai International Financial Centre (DIFC) is the leading global financial hub in the Middle East, Africa, and South Asia (MEASA) region. It features an independent, internationally recognized regulator and a judicial system based on English Common Law.",
        "DIFC is home to the world's leading financial institutions, wealth management firms, and fintech startups. It provides a world-class platform for businesses seek to access the region's vast wealth and investment opportunities."
      ]}
      advantages={[
        "100% foreign ownership",
        "0% tax on corporate income and profits for 50 years",
        "Common Law judicial system (DIFC Courts)",
        "Internationally recognized regulatory environment (DFSA)",
        "No restrictions on foreign exchange or capital repatriation",
        "Global financial connectivity and networking opportunities",
        "State-of-the-art infrastructure and premium office spaces",
        "Access to a deep pool of skilled financial professionals",
        "Diverse legal structures (LLCs, Branches, Partnerships)",
        "Premier lifestyle and retail destination"
      ]}
      sections={[
        {
          title: "A Global Standard",
          content: "Setting up in DIFC positions your business at the center of the region's financial ecosystem, offering unparalleled prestige and regulatory security."
        }
      ]}
    />
  );
}
