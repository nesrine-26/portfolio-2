import {
  FaInstagram,
  FaFacebook,
  FaTelegram,
  FaGlobe,
  FaTwitter,
} from "react-icons/fa";

const socialIcons = {
  instagram: FaInstagram,
  facebook: FaFacebook,
  telegram: FaTelegram,
  twitter: FaTwitter,
  tweeter: FaTwitter,
  x: FaTwitter,
};

const socials = [
  { name: "instagram", url: "https://instagram.com/" },
  { name: "facebook", url: "https://facebook.com/" },
  { name: "telegram", url: "https://telegram.org/" },
  { name: "twitter", url: "https://twitter.com/" },
];

const Footer = () => {
  return (
    <footer id="contact">
      {/* top footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          
          {/* logo */}
          <div
            className="font-bold text-2xl sm:text-3xl"
            style={{ fontFamily: "outfit" }}
          >
            <a href="/">Nessrine</a>
          </div>

          {/* quote */}
          <div>
            <p className="text-sm sm:text-base text-secondary italic">
              "Creativity Knows no limit"
            </p>
          </div>

          {/* socials */}
          <div className="flex gap-3 flex-wrap">
            {socials.map((social, index) => {
              const key = social.name.toLowerCase();
              const Icon =
                socialIcons[key as keyof typeof socialIcons] || FaGlobe;

              return (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border bg-background border-secondary p-2 rounded-sm"
                >
                  <Icon size={24} />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* bottom footer */}
      <div className="bg-dark ">
        <p className="bg-green text-center text-background text-sm sm:text-base">
          All rights reserved to idea © 2026
        </p>
      </div>
    </footer>
  );
};

export default Footer;