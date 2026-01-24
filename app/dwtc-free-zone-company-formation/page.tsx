import ServicePage from '@/components/ServicePage';

export default function DWTCSetup() {
  return (
    <ServicePage
      title="DWTC Free Zone Company Formation"
      subtitle="Dubai World Trade Center Free Zone"
      heroImage="/images/freezone.png"
      description={[
        "The Dubai World Trade Center (DWTC) is a cosmopolitan center established in 1979 in the heart of Dubai, near DIFC and Burj Khalifa. It spans over 1.3 million sq. feet and is the ideal platform for global networking.",
        "DWTC provides unparalleled growth opportunities, allowing businesses to operate under an independent free zone license while being in the center of the city's business hub."
      ]}
      advantages={[
        "Leverage a strong global business network",
        "Flexible onshore and free zone license options",
        "Multi-currency corporate bank accounts",
        "Central location in the heart of Dubai's business district",
        "Excellent event and exhibition facilities",
        "Hassle-free branch licensing"
      ]}
    />
  );
}
