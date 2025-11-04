import { MapPin, Mail, Phone, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-200 border-t-2 border-gray-400 py-6 px-3">
      <div className="w-full">
        <div className="flex flex-col gap-6 mb-6">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-5 h-5 border-2 border-gray-600"></div>
              <span className="text-gray-900 text-sm">Campus Navigator</span>
            </div>
            <p className="text-xs text-gray-700">
              Making campus navigation easy and intuitive for students and visitors.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gray-900 mb-2 text-sm">Quick Links</h3>
            <ul className="space-y-1.5 text-xs">
              <li><a href="#" className="text-gray-700 hover:text-gray-900">Campus Map</a></li>
              <li><a href="#" className="text-gray-700 hover:text-gray-900">Buildings</a></li>
              <li><a href="#" className="text-gray-700 hover:text-gray-900">Departments</a></li>
              <li><a href="#" className="text-gray-700 hover:text-gray-900">Events</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-gray-900 mb-2 text-sm">Resources</h3>
            <ul className="space-y-1.5 text-xs">
              <li><a href="#" className="text-gray-700 hover:text-gray-900">New Student Guide</a></li>
              <li><a href="#" className="text-gray-700 hover:text-gray-900">Campus Tour</a></li>
              <li><a href="#" className="text-gray-700 hover:text-gray-900">FAQs</a></li>
              <li><a href="#" className="text-gray-700 hover:text-gray-900">Support</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-gray-900 mb-2 text-sm">Contact Us</h3>
            <ul className="space-y-1.5 text-xs mb-3">
              <li className="flex items-center gap-2 text-gray-700">
                <Mail className="w-3 h-3" />
                <span>info@university.edu</span>
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <Phone className="w-3 h-3" />
                <span>(555) 123-4567</span>
              </li>
            </ul>
            <div className="flex gap-2">
              <a href="#" className="w-7 h-7 border-2 border-gray-500 rounded-full flex items-center justify-center hover:border-gray-700 transition-colors">
                <Facebook className="w-3.5 h-3.5 text-gray-600" />
              </a>
              <a href="#" className="w-7 h-7 border-2 border-gray-500 rounded-full flex items-center justify-center hover:border-gray-700 transition-colors">
                <Twitter className="w-3.5 h-3.5 text-gray-600" />
              </a>
              <a href="#" className="w-7 h-7 border-2 border-gray-500 rounded-full flex items-center justify-center hover:border-gray-700 transition-colors">
                <Instagram className="w-3.5 h-3.5 text-gray-600" />
              </a>
              <a href="#" className="w-7 h-7 border-2 border-gray-500 rounded-full flex items-center justify-center hover:border-gray-700 transition-colors">
                <Youtube className="w-3.5 h-3.5 text-gray-600" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t-2 border-gray-400 text-center">
          <p className="text-xs text-gray-600">&copy; 2025 Campus Navigator. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
