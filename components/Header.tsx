import { Button } from "./ui/button";
import biaLogo from 'figma:asset/79639420526bce17e30bf0862efe2991962ada54.png';

export default function Header() {
  return (
    <header className="fixed top-4 z-50 w-full">
      <div className="mx-auto max-w-[69rem] px-6">
        <div className="backdrop-blur-[8px] backdrop-filter bg-[#1a1a1a]/80 border border-white/[0.08] rounded-xl">
          <div className="px-6 lg:px-8">
            <div className="flex h-14 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex items-center">
                <img 
                  src={biaLogo} 
                  alt="BIA Logo" 
                  className="h-5 w-auto"
                />
              </div>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-7">
              <a 
                href="#features" 
                className="text-sm text-[#9ca3af] hover:text-[#d1d5db] transition-colors duration-150"
              >
                Features
              </a>
              <a 
                href="#solutions" 
                className="text-sm text-[#9ca3af] hover:text-[#d1d5db] transition-colors duration-150"
              >
                Solutions
              </a>
              <a 
                href="#pricing" 
                className="text-sm text-[#9ca3af] hover:text-[#d1d5db] transition-colors duration-150"
              >
                Pricing
              </a>
              <a 
                href="#about" 
                className="text-sm text-[#9ca3af] hover:text-[#d1d5db] transition-colors duration-150"
              >
                About
              </a>
            </nav>

            {/* Auth Actions */}
            <div className="flex items-center space-x-3">
              <a 
                href="#login" 
                className="hidden md:block text-sm text-[#9ca3af] hover:text-[#d1d5db] transition-colors duration-150"
              >
                Log in
              </a>
              <Button 
                className="bg-[#08ddbc] border border-[#1f8984] text-[#14151d] hover:bg-[#17ffdb] transition-colors duration-150 px-3 py-1.5 h-8 text-sm rounded-md"
              >
                Empezar
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 text-[#9ca3af] hover:text-[#d1d5db]">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}