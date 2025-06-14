import React from 'react';
import { BiLogoFlutter } from 'react-icons/bi';
import { FaTwitter, FaYoutube, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => (
  <div className="mt-15">
    <footer className="footer bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] text-white p-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Branding */}
        <div className="text-center md:text-left">
          <BiLogoFlutter size={28} className="mx-auto md:mx-0" />
          <span className="font-bold text-xl">Roomies</span>
          <p className="mt-2">&copy; {new Date().getFullYear()} Roomies. All rights reserved.</p>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-2">Contact Us</h4>
          <p>Email: <a href="mailto:support@roomies.com" className="underline">support@roomies.com</a></p>
          <p>Phone: <a href="tel:+8801234567890" className="underline">+88 012 3456 7890</a></p>
          <p>Address: Mymensingh Sadar Upazila, Bangladesh</p>
        </div>

        {/* Legal */}
        <div>
          <h4 className="font-semibold mb-2">Legal</h4>
          <ul className="space-y-1">
            <li><a href="/terms" className="underline">Terms & Conditions</a></li>
            <li><a href="/privacy" className="underline">Privacy Policy</a></li>
            <li><a href="/cookies" className="underline">Cookie Policy</a></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="font-semibold mb-2">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer"><FaTwitter size={24} /></a>
            <a href="https://youtube.com/yourprofile" target="_blank" rel="noopener noreferrer"><FaYoutube size={24} /></a>
            <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer"><FaFacebookF size={24} /></a>
            <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer"><FaInstagram size={24} /></a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer"><FaLinkedinIn size={24} /></a>
          </div>
        </div>
      </div>
    </footer>
  </div>
);

export default Footer;
