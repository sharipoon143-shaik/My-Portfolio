interface FooterProps {
  onOpenSection?: (section: string) => void;
}

export default function Footer({ onOpenSection: _onOpenSection }: FooterProps) {
  return (
    <footer className="w-full py-3.5 border-t border-slate-200/80 relative z-10 bg-[#F5F5F5]/90 backdrop-blur-lg">
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-center text-xs sm:text-sm">
        <p className="text-slate-500 text-center">
          &copy; {new Date().getFullYear()} Shek Haripoon. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
