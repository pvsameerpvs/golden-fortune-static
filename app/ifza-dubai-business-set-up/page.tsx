import ServicePage from '@/components/ServicePage';

export default function IFZASetup() {
  return (
    <ServicePage
      title="IFZA Dubai Business Set Up"
      subtitle="International Free Zone Authority (IFZA)"
      description={[
        "IFZA commenced operations in 2018 and has a strategic partnership with Dubai Silicon Oasis Authority (DSOA) to facilitate ease of doing business. Located in a dynamic hub, IFZA offers over 1,000 business activities.",
        "IFZA provides competitive packages and flexible solutions for all business setup requirements, offering 360-degree support from registration to office setup."
      ]}
      advantages={[
        "100% foreign ownership",
        "Multi-currency Corporate bank accounts",
        "No physical presence in UAE required to incorporate",
        "Absence of income and corporate tax",
        "Cost-effective and fast incorporation",
        "No physical office requirement options",
        "No need to present evidence of share capital",
        "Full repatriation of profits",
        "Ability to incorporate holding companies",
        "Zero foreign currency restrictions"
      ]}
      sections={[
        {
          title: "Legal Structures in IFZA",
          content: "Choose between:",
          list: [
            "Free Zone Company (FZCO) – Owned by individual shareholders",
            "Branch of a Foreign Company",
            "Branch of a UAE/Dubai Company"
          ]
        },
        {
          title: "Registration Process",
          content: "Four simple steps to setup:",
          list: [
            "Choosing a unique company name",
            "Selecting legal structure and shareholding",
            "Submitting application (Passport copy, White background photo)",
            "Obtaining digital signatures and approvals",
            "Paying registration fees"
          ]
        },
        {
          title: "Business Activities",
          content: "IFZA sectors include:",
          list: [
            "Trading (Import/Export, Distribution)",
            "Manufacturing (Food processing, Packaging)",
            "Services (Consulting, IT, Legal, Accounting)",
            "Logistics (Warehousing, Freight forwarding)",
            "Media and Entertainment",
            "Education and Training"
          ]
        }
      ]}
    />
  );
}
