import ServicePage from '@/components/ServicePage';

export default function AjmanSetup() {
  return (
    <ServicePage
      title="Ajman Free Zone Business Setup"
      subtitle="Strategic Business Hub in Northern Emirates"
      description={[
        "Ajman Free Zone (AFZ) was established in 1988 and is headquartered in Ajman. It enjoys a strategic location on the Arabian Gulf, extending business avenues to eastern and western trade markets.",
        "AFZ is a pioneer in innovation with a fully digitized setup, providing growth opportunities to a diverse range of industries through cutting-edge technology and world-class infrastructure."
      ]}
      advantages={[
        "100% foreign ownership",
        "Exemption from corporate and personal income tax",
        "Lower prices for land and office rents",
        "Full repatriation of capital and profits",
        "Multi-currency corporate bank accounts",
        "24-Hour Business Support Services",
        "Customized business packages",
        "Proximity to Ajman port, Dubai, and Sharjah airports"
      ]}
    />
  );
}
