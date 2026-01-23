import ServicePage from '@/components/ServicePage';

export default function MeydanSetup() {
  return (
    <ServicePage
      title="Meydan Free Zone"
      subtitle="Thriving Commercial Free Zone in Dubai"
      description={[
        "Meydan Free Zone is one of the most thriving commercial free zones in the UAE. It offers a premium business environment with a focus on entrepreneurship and innovation.",
        "Meydan Free Zone companies are typically established as Limited Liability Companies in a Free Zone (FZ-LLC) and can have a minimum of one shareholder."
      ]}
      advantages={[
        "100% foreign ownership guaranteed",
        "Exempt from all corporate taxes in the UAE",
        "No filing, accounting, or reporting requirements",
        "No minimum paid-up capital requirement",
        "Strategic world time zone (GMT+4)",
        "Simplified application process",
        "Ability to have multiple shareholders",
        "Person in charge/Manager required for each company"
      ]}
      sections={[
        {
          title: "Setup Journey Explained",
          content: "Your Meydan Free Zone business setup in three simple steps:",
          list: [
            "STEP 1: Submit Application with completed KYC",
            "STEP 2: Security & Government Approvals",
            "STEP 3: Business license issued by Meydan FZ"
          ]
        }
      ]}
    />
  );
}
