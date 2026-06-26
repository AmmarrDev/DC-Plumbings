import { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Phone, Menu, X } from "lucide-react";
import { business, navLinks } from "../data/siteData";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur shadow-[0_2px_20px_rgba(10,15,26,0.08)]"
          : "bg-white"
      }`}
    >
      <div className="container-px mx-auto flex h-[76px] max-w-7xl items-center justify-between">
        <Link to="/" className="flex items-center gap-2 shrink-0" onClick={() => setOpen(false)}>
          <img
            src="/images/logo/logo-final.png"
            alt="DC Plumbing Solutions"
            className="h-14 w-auto sm:h-16"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-9">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `relative font-display text-[15px] tracking-wide uppercase pb-1 transition-colors ${
                  isActive
                    ? "text-navy-900 after:absolute after:left-0 after:right-0 after:-bottom-[3px] after:h-[2px] after:bg-brand-blue"
                    : "text-steel-600 hover:text-navy-900"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href={business.phoneHref}
            className="flex items-center gap-2 font-mono text-sm font-semibold text-navy-900"
          >
            <Phone size={16} className="text-brand-blue" />
            {business.phone}
          </a>
          <Link
            to="/contact"
            className="rounded-md bg-blue-gradient px-5 py-2.5 font-display text-sm uppercase tracking-wide text-white shadow-md transition-transform hover:scale-[1.03]"
          >
            Book a Free Estimate
          </Link>
        </div>

        <button
          className="lg:hidden p-2 text-navy-900"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-steel-200 bg-white px-5 pb-6 pt-2">
          <nav className="flex flex-col">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `border-b border-steel-100 py-3.5 font-display text-base uppercase tracking-wide ${
                    isActive ? "text-brand-blue" : "text-navy-900"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
          <a
            href={business.phoneHref}
            className="mt-4 flex items-center justify-center gap-2 rounded-md border border-steel-300 py-3 font-mono text-sm font-semibold text-navy-900"
          >
            <Phone size={16} className="text-brand-blue" />
            {business.phone}
          </a>
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-3 flex items-center justify-center rounded-md bg-blue-gradient py-3 font-display text-sm uppercase tracking-wide text-white shadow-md"
          >
            Book a Free Estimate
          </Link>
        </div>
      )}
    </header>
  );
}
