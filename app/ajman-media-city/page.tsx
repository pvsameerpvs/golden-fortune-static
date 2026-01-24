import ServicePage from '@/components/ServicePage';

export default function AjmanMediaCity() {
  return (
    <ServicePage
      title="Ajman Media City Free Zone"
      subtitle="Global Hub for Media & Creativity"
      heroImage="/images/freezone.png"
      description={[
        "Launched in 2018, Ajman Media City Free Zone is a dependable and professional environment that fosters the growth of media businesses. It allows companies to choose from a vast portfolio of 8 flexible packages.",
        "It serves as a creative platform for professionals seeking a modern environment with minimal bureaucracy and maximum efficiency."
      ]}
      advantages={[
        "100% foreign ownership",
        "100% repatriation of capital and profits",
        "No corporate or personal income tax",
        "Multi-currency corporate bank accounts",
        "Multiple business activities under one license",
        "Fastrack license issuance process",
        "Options for setup without a visa"
      ]}
    />
  );
}
