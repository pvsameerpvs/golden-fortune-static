import ServicePage from '@/components/ServicePage';

export default function SPCSetup() {
  return (
    <ServicePage
      title="SPC Free Zone Business Setup"
      subtitle="Sharjah Publishing City Free Zone"
      heroImage="/images/freezone.png"
      description={[
        "Sharjah Publishing City (SPC) Free Zone is the world's first publishing and printing free zone. It provides a unique ecosystem for publishers, printers, and entrepreneurs in the creative and media sectors.",
        "Strategically located in Sharjah, SPC offers a highly business-friendly environment with rapid company incorporation, flexible office solutions, and a wide range of business activities spanning publishing, trading, and consulting."
      ]}
      advantages={[
        "100% foreign ownership",
        "0% corporate and personal income tax",
        "Dual-license options (Free Zone and Mainland)",
        "Over 1,500 business activities available",
        "Fast-track company formation within 2 hours",
        "Up to 20 visas on a single license",
        "High-quality infrastructure and modern office spaces",
        "Direct access to Sharjah International Airport",
        "No requirement for paid-up share capital",
        "Seamless corporate bank account assistance"
      ]}
      sections={[
        {
          title: "The Creative Advantage",
          content: "SPC Free Zone is designed to eliminate the hurdles of business setup, offering a 'one-stop-shop' experience for creative professionals and global entrepreneurs alike."
        }
      ]}
    />
  );
}
