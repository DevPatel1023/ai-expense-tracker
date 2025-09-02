import { Brain } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative flex justify-between overflow-hidden bg-gradient-to-br from-orange-50 via-amber to-yellow-50 border-t border-gray-100/50 ">
      {/* Gradient accent line */}
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Tagline */}
          <div className="text-center ">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-500 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white text-lg">
                  <Brain className="h-5 w-5 text-primary-foreground" />
                </span>
              </div>
              <h2 className="text-xl font-bold bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
                ExpenseTracker AI
              </h2>
            </div>
            <p className="text-gray-600 leading-relaxed max-w-sm">
              Intelligent financial management powered by AI. Track your
              expenses, manage your budget, and gain insights into your spending
              patterns.
            </p>
          </div>

          {/* Navigation Links */}

          <div className="text-center ">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              Quick Links
            </h3>
            <div className="flex flex-col items-center space-y-3">
              <Link
                href="/"
                className="group inline-flex items-center gap-2 text-gray-600  hover:text-orange-600  text-sm font-medium transition-colors duration-200"
              >
                <span className="w-1.5 h-1.5 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                Home
              </Link>
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 text-gray-600 hover:text-orange-600 text-sm font-medium transition-colors duration-200"
              >
                <span className="w-1.5 h-1.5 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                About
              </Link>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 text-gray-600 hover:text-orange-600 text-sm font-medium transition-colors duration-200"
              >
                <span className="w-1.5 h-1.5 bg-orange-500 dark:bg-orange-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                Contact
              </Link>
            </div>
          </div>

          {/* Features */}
          <div className="flex flex-col items-center text-center">
            <h3 className="text-lg font-semibold text-gray-900 items-center  mb-4">
              Features
            </h3>
            <div className="flex items-center">
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-600  text-sm">
                <div className="w-5 h-5  rounded-md flex items-center justify-center shadow-sm">
                  <span className="text-white text-xs">🤖</span>
                </div>
                AI-Powered Insights
              </div>
              <div className="flex items-center gap-3 text-gray-600 text-sm">
                <div className="w-5 h-5 rounded-md flex items-center justify-center shadow-sm">
                  <span className="text-white text-xs">✨</span>
                </div>
                Smart Categorization
              </div>
              <div className="flex items-center gap-3 text-gray-600  text-sm">
                <div className="w-5 h-5 rounded-md flex items-center justify-center shadow-sm">
                  <span className="text-orange text-xs">📊</span>
                </div>
                Analytics Dashboard
              </div>
            </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent mb-8"></div>

        {/* Copyright and Social */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-gray-600  text-sm">
              © {new Date().getFullYear()} ExpenseTracker AI. All rights
              reserved.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-medium">
              <span className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse"></span>
              Made by Dev
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
