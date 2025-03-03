import { Mail, Instagram, Linkedin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          {/* Left Section - Contact */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-4xl font-bold mb-6">Have a question? Get in touch.</h3>
            <p className="mb-8 text-lg max-w-xl">
              Thank you for visiting our website! If you have any questions or queries, drop us a message, and we'll get back to you promptly. Your time is valuable to us!
            </p>
            <div className="space-y-4">
              <ContactItem icon={<Mail size={24} />} text="codenexsrm@gmail.com" />
              <ContactItem icon={<Instagram size={24} />} text="@codenexsrm" />
            </div>
          </div>

          {/* Middle Section - Logo and Description */}
          <div className="mb-8 md:mb-0">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-transparent flex items-center justify-center">
                <img src="/logo.png" alt="Logo" className="w-12 h-12 rounded-full object-cover" />
              </div>
              <div>
                <h3 className="text-3xl font-bold">Codenex on</h3>
                <h3 className="text-3xl font-bold">campus</h3>
              </div>
            </div>
            <p className="max-w-xs text-gray-300">
              Codenex, a tech club of SRM, is a dynamic hub for innovation and collaboration. Redefining the boundaries of technology, we empower students to build, learn, and lead, fostering a community where ideas transcend limits.
            </p>
          </div>

          {/* Right Section - Links and Socials */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {/* Quick Links */}
            <FooterLinks title="Quick Links" links={[
              { name: "Home", href: "#home" },
              { name: "About", href: "#about" },
              { name: "Timeline", href: "#timeline" },
              { name: "Tracks", href: "#tracks" }
            ]} />

            {/* Codenex Socials */}
            <FooterLinks title="Codenex socials" links={[
              { icon: <Linkedin size={20} />, name: "@codenexsrm", href: "#" },
              { icon: <Instagram size={20} />, name: "@codenexsrm", href: "#" },
              { icon: <Mail size={20} />, name: "codenexsrm@gmail.com", href: "#" },
              { icon: <Phone size={20} />, name: "+91 92876 52739", href: "#" }
            ]} />
          </div>
        </div>
      </div>
    </footer>
  );
};

// Reusable Contact Item Component
const ContactItem = ({ icon, text }) => (
  <div className="flex items-center gap-4">
    <div className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-md">{icon}</div>
    <span className="text-xl">{text}</span>
  </div>
);

// Reusable Footer Links Component
const FooterLinks = ({ title, links }) => (
  <div>
    <h4 className="text-2xl font-bold mb-6">{title}</h4>
    <ul className="space-y-4">
      {links.map((link, index) => (
        <li key={index} className="flex items-center gap-4">
          {link.icon && (
            <div className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-md">
              {link.icon}
            </div>
          )}
          <a href={link.href} className="text-xl hover:text-cyan-400 transition-colors">{link.name}</a>
        </li>
      ))}
    </ul>
  </div>
);

export default Footer;
