import { Link } from "react-router-dom";

const footerSections = [
  {
    heading: "Get to Know Us",
    links: [
      { label: "About", to: "/about" },
      { label: "Careers", to: "/careers" },
    ],
  },
  {
    heading: "Connect with Us",
    links: [
      {
        label: "LinkedIn",
        to: "https://www.linkedin.com/in/shivansh-lavaniya-012145293/",
        external: true,
      },
      {
        label: "GitHub",
        to: "https://github.com/Shivansh170",
        external: true,
      },
    ],
  },
  {
    heading: "Help",
    links: [
      { label: "Contact Us", to: "/contact" },
      { label: "FAQ", to: "/faq" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", to: "/privacy-policy" },
      { label: "Terms of Service", to: "/terms" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="w-full bg-black/90">
      <div className="grid w-[80%] mx-auto grid-cols-4">
        {footerSections.map((section) => (
          <div
            key={section.heading}
            className="flex flex-col gap-2 p-4 text-white"
          >
            <h1 className="text-xl font-bold">{section.heading}</h1>

            {section.links.map((link) =>
              link.external ? (
                <a
                  key={link.label}
                  href={link.to}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                </a>
              ) : (
                <Link key={link.label} to={link.to}>
                  {link.label}
                </Link>
              ),
            )}
          </div>
        ))}
      </div>
    </footer>
  );
}
