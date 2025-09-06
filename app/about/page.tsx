import { Contact } from "lucide-react";
import Link from "next/link";

const AboutPage = () => {
  return (
    <div className="font-sans bg-white text-gray-800 min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden flex flex-col items-center justify-center text-center py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-gradient-to-br from-orange-500/10 via-amber-500/5 to-yellow-500/10 ">
        <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"></div>
        <div className="relative z-10 max-w-4xl mx-auto w-full">
          <div className="inline-flex items-center gap-2 bg-orange-50  text-orange-500  px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 shadow-lg">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-500  rounded-full animate-pulse"></span>
            <span className="hidden sm:inline">Powered by AI Technology</span>
            <span className="sm:hidden">AI Technology</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 text-gray-900  leading-tight">
            About{" "}
            <span className="bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
              ExpenseTracker AI
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
            Your intelligent companion for tracking expenses and managing your
            finances with cutting-edge AI-powered insights.
          </p>
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2 sm:px-0">
            <Link
              href="/sign-up"
              className="group relative overflow-hidden bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-500 hover:from-orange-700 hover:via-amber-600 hover:to-yellow-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold shadow-2xl hover:shadow-3xl transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <span className="relative z-10">Start Your Journey</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
            </Link>
            <Link
              href="/contact"
              className="group border-2 border-orange-500/20 dark:border-orange-400/20 text-orange-600  hover:text-black hover:bg-orange-200/60 px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold transition-all duration-200 backdrop-blur-sm"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-white/80  backdrop-blur-sm relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500"></div>
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-orange-50  text-orange-700  px-3 py-1 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            <span className="w-1.5 h-1.5 bg-orange-500 dark:bg-orange-400 rounded-full"></span>
            Our Mission
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 text-gray-900  px-2 sm:px-0">
            Transforming Financial Management with{" "}
            <span className="text-orange-600 dark:text-orange-400">AI</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600  leading-relaxed max-w-3xl mx-auto">
            At ExpenseTracker AI, we leverage cutting-edge artificial
            intelligence to revolutionize how individuals achieve financial
            wellness. Our AI analyzes your spending patterns to deliver
            personalized recommendations and actionable insights that lead to
            better budgeting and financial freedom.
          </p>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-orange-50 to-amber-50  p-6 rounded-2xl border border-orange-100 ">
              <div className="text-3xl font-bold text-orange-600 mb-2">
                10K+
              </div>
              <div className="text-gray-600  font-medium">Active Users</div>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-6 rounded-2xl border border-amber-100 ">
              <div className="text-3xl font-bold text-amber-600  mb-2">
                $2M+
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">
                Money Tracked
              </div>
            </div>
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-2xl border border-yellow-100">
              <div className="text-3xl font-bold text-yellow-600  mb-2">
                99%
              </div>
              <div className="text-gray-600 font-medium">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-8 bg-gradient-to-br from-gray-50 via-white to-orange-50 ">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-orange-50  text-orange-700 dark:text-orange-300 px-3 py-1 rounded-full text-sm font-medium mb-6">
              <span className="w-1.5 h-1.5 bg-orange-500  rounded-full"></span>
              Features
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 ">
              Why Choose{" "}
              <span className="text-orange-600 ">ExpenseTracker AI?</span>
            </h2>
            <p className="text-lg text-gray-600  max-w-2xl mx-auto">
              Discover the powerful features that make our AI-driven platform
              the smart choice for modern financial management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-200 hover:-translate-y-1">
              {/* Background Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>

              {/* Foreground Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-500 flex items-center justify-center mb-6 transition-colors duration-200">
                  <span className="text-black text-xl group-hover:text-white transition-colors duration-200">
                    🤖
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-4 text-black group-hover:text-white transition-colors duration-200">
                  AI-Powered Insights
                </h3>

                {/* Description */}
                <p className="text-gray-600 group-hover:text-white leading-relaxed transition-colors duration-200">
                  Get intelligent analysis of your spending patterns with
                  personalized AI recommendations and automated category
                  suggestions that learn from your behavior.
                </p>
              </div>
            </div>

            <div className="group relative bg-white/80  backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-100/50  hover:shadow-2xl transition-all duration-200 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 via-yellow-500 to-orange-500 rounded-xl flex items-center justify-center shadow-lg mb-6 text-black hover:text-white">
                  <span className="text-white text-xl">✨</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-black group-hover:text-white transition-colors duration-200">
                  Smart Categorization
                </h3>
                <p className="text-black group-hover:text-white transition-colors duration-200  leading-relaxed">
                  Let our AI automatically categorize your expenses with 99%
                  accuracy and provide tailored recommendations to enhance your
                  budget management effortlessly.
                </p>
              </div>
            </div>

            <div className="group relative bg-white/80  backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-100/50  hover:shadow-2xl transition-all duration-200 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 via-orange-500 to-amber-500 rounded-xl flex items-center justify-center shadow-lg mb-6">
                  <span className="text-white text-xl">📊</span>
                </div>
                <h3 className="text-xl font-bold mb-4  text-black group-hover:text-white transition-colors duration-200">
                  Intelligent Dashboard
                </h3>
                <p className=" leading-relaxed text-black group-hover:text-white transition-colors duration-200">
                  Experience a modern, AI-enhanced interface with real-time
                  insights, interactive financial analytics, and beautiful
                  visualizations that make sense of your data.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-8 bg-white/80  backdrop-blur-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-orange-500 to-amber-500 rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full blur-2xl"></div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-orange-50  text-orange-700  px-3 py-1 rounded-full text-sm font-medium mb-6">
              <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
              Our Story
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 ">
              Built for the{" "}
              <span className="text-orange-600 dark:text-orange-400">
                Future
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                ExpenseTracker AI was born from the vision of creating truly
                intelligent financial management tools. Our team of financial
                experts, data scientists, and technologists came together to
                solve a critical problem: making personal finance management
                smarter, more intuitive, and more effective.
              </p>
              <p className="text-lg text-gray-600  leading-relaxed">
                Since our launch, we&#39;ve helped thousands of users achieve
                better budgeting and improve their overall financial health
                through the power of artificial intelligence. Every feature is
                designed with user experience and financial wellness in mind.
              </p>
              <div className="flex items-center gap-4 pt-4">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-500 rounded-full border-2 border-white "></div>
                  <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-full border-2 border-white "></div>
                  <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full border-2 border-white "></div>
                </div>
                <div className="text-sm text-gray-600 ">
                  <div className="font-semibold">Trusted by 10,000+ users</div>
                  <div>Join our growing community</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 p-8 rounded-2xl border border-orange-100 dark:border-orange-800/50">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-orange-500 dark:bg-orange-400 rounded-full"></div>
                  <div className="text-gray-900 dark:text-gray-100 font-medium">
                    Founded in 2024
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-amber-500  rounded-full"></div>
                  <div className="text-white font-medium">
                    AI-First Approach
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-yellow-500  rounded-full"></div>
                  <div className="text-white  font-medium">Global Impact</div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <div className="text-white  font-medium">
                    User-Centric Design
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-8 bg-gradient-to-br from-gray-50 via-white to-orange-50  relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-orange-50  text-orange-700  px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-lg">
            <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
            Ready to Transform Your Finances?
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-gray-900 ">
            Take Control of Your{" "}
            <span className="bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
              Financial Future
            </span>
          </h2>

          <p className="text-xl md:text-2xl mb-10 text-gray-600  max-w-2xl mx-auto leading-relaxed">
            Join thousands of users who have already transformed their financial
            habits with ExpenseTracker AI. Start your journey towards smarter
            budgeting today.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              href="/sign-up"
              className="group relative overflow-hidden bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-500 hover:from-orange-700 hover:via-amber-600 hover:to-yellow-600 text-white px-8 py-4 rounded-2xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get Started Free
                <span className="text-lg">→</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
            </Link>

            <Link
              href="/contact"
              className="group border-2 border-orange-500/20 dark:border-orange-400/20 text-orange-600 dark:text-orange-400 hover:bg-orange-50  px-8 py-4 rounded-2xl font-semibold transition-all duration-200 backdrop-blur-sm flex items-center gap-2"
            >
              Contact Us
              <Contact />
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 dark:text-ornage-400 mb-2">
                Free
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                No credit card required
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-600 dark:text-amber-400 mb-2">
                24/7
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                AI-powered support
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-600 dark:text-yellow-400 mb-2">
                Instant
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                Setup in minutes
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
