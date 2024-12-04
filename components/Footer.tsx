import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import Logo from "./Logo";
import { quickLinks, socials, support } from "@/constants";
import { Icon } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-5 lg:px-20">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          {/* Branding */}
          <div className="flex flex-col  gap-4">
            <Logo />
            <p className="text-sm text-gray-400">
              Your trusted partner for comprehensive healthcare solutions. We
              focus on delivering exceptional care and wellness for everyone.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col items-center lg:flex-row gap-8">
            <div className="flex flex-col gap-2 items-center lg:items-start w-[150px]">
              <h3 className="text-lg font-semibold">Quick Links</h3>
              {quickLinks.map((item) => (
                <p
                  key={item}
                  className="text-sm hover:text-green-500 cursor-pointer"
                >
                  {item}
                </p>
              ))}
            </div>
            <div className="flex flex-col items-center lg:items-start gap-2 w-[150px]">
              <h3 className="text-lg font-semibold">Support</h3>
              {support.map((item) => (
                <p key={item} className="text-sm hover:text-green-500">
                  {item}
                </p>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <p className="text-sm text-gray-400">
              123 Health Street, Wellness City, USA
            </p>
            <p className="text-sm text-gray-400">Phone: +1 234 567 890</p>
            <p className="text-sm text-gray-400">Email: support@ufirst.com</p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} UFirst. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 lg:mt-0">
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <div key={social.social}>
                  <Link href="/" className="text-gray-400 hover:text-green-500">
                    <Icon className="size-6" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
