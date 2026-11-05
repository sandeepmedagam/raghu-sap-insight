import { useEffect, useRef, useState } from "react";
import { Menu, Search, X } from "lucide-react";
import logoImg from "@/assets/sapsecurityexpert-black.png";
import { LINKS } from "@/data/raghu";

const NAV_LINKS = [
  { label: "Expertise", href: "#expertise" },
  { label: "Books", href: "#books" },
  { label: "SecOps", href: "#secops" },
  { label: "Insights", href: "#research" },
  { label: "About", href: "#about" },
];

const SEARCH_ITEMS = [
  { label: "SAP Security & Architecture", href: "#expertise", category: "Expertise" },
  { label: "SAP GRC & Access Control", href: "#expertise", category: "GRC" },
  { label: "Audit & Risk Assessments", href: "#audit", category: "Audit" },
  { label: "Books & SAP PRESS Publications", href: "#books", category: "Publications" },
  { label: "Professional Credentials", href: "#certifications", category: "Credentials" },
  { label: "SAP SecOps", href: "#secops", category: "SecOps" },
  { label: "Research & Automation Stories", href: "#research", category: "Research" },
  { label: "Articles & Recommendations", href: "#articles", category: "Insights" },
  { label: "Podcasts & Interviews", href: "#podcasts", category: "Media" },
  { label: "Speaking & Events", href: "#speaking", category: "Speaking" },
  { label: "Raghu’s Viewpoint", href: "#viewpoint", category: "Viewpoint" },
  { label: "Connect with Raghu", href: "#connect", category: "Contact" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    document.body.style.overflow = menuOpen || searchOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen, searchOpen]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        setSearchOpen(false);
      }
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setSearchOpen((current) => !current);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (searchOpen) searchInputRef.current?.focus();
    else setSearchQuery("");
  }, [searchOpen]);

  const navigate = () => {
    setMenuOpen(false);
    setSearchOpen(false);
  };

  const query = searchQuery.trim().toLowerCase();
  const results = query
    ? SEARCH_ITEMS.filter(
        (item) =>
          item.label.toLowerCase().includes(query) || item.category.toLowerCase().includes(query),
      )
    : SEARCH_ITEMS.slice(0, 6);

  return (
    <>
      <header className="site-header sticky top-0 z-50 border-b border-border/80 bg-background/95 backdrop-blur-md">
        <div className="site-header-inner mx-auto flex h-[82px] max-w-[2800px] items-center justify-between gap-8 px-5 md:px-8">
          <a href="#overview" onClick={navigate} aria-label="SAP Security Expert home" className="shrink-0">
            <img src={logoImg} alt="SAP Security Expert" className="h-11 w-auto object-contain" />
          </a>

          <nav aria-label="Primary" className="hidden items-center gap-6 xl:flex">
            {NAV_LINKS.map((item) => (
              <a key={item.href} href={item.href} className="site-nav-link">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              aria-label="Search this profile"
              title="Search (⌘K / Ctrl+K)"
              className="header-search inline-flex h-10 w-10 items-center justify-center text-text-primary transition-colors hover:text-signal"
            >
              <Search className="h-6 w-6" aria-hidden="true" />
            </button>
            <a href={LINKS.sapCommunity} className="header-secondary hidden md:inline-flex" onClick={navigate} target="_blank" rel="noopener noreferrer">
              SAP Profile
            </a>
            <a href="#connect" className="header-cta hidden sm:inline-flex" onClick={navigate}>
              Connect
            </a>
            <button
              type="button"
              aria-label={menuOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((current) => !current)}
              className="header-menu-button inline-flex h-10 w-10 items-center justify-center border border-border text-primary xl:hidden"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav aria-label="Mobile" className="border-t border-border bg-background px-5 py-3 xl:hidden">
            {NAV_LINKS.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={navigate}
                className="flex items-center justify-between border-b border-border-light py-3.5 text-[16px] text-text-primary last:border-0"
              >
                <span>{item.label}</span>
                <span className="font-mono text-[11px] text-text-muted">0{index + 1}</span>
              </a>
            ))}
            <a href="#connect" onClick={navigate} className="header-cta mt-4 w-full">
              Connect with Raghu
            </a>
          </nav>
        )}
      </header>

      {searchOpen && (
        <div className="fixed inset-0 z-[120] flex items-start justify-center px-4 pt-[12vh]">
          <button
            type="button"
            aria-label="Close search"
            className="absolute inset-0 cursor-default bg-[#10263f]/50"
            onClick={() => setSearchOpen(false)}
          />
          <div className="relative w-full max-w-xl border border-border bg-background p-5 shadow-2xl md:p-7">
            <div className="flex items-center gap-3 border-b border-border pb-4">
              <Search className="h-5 w-5 text-text-muted" aria-hidden="true" />
              <input
                ref={searchInputRef}
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search this profile"
                className="min-w-0 flex-1 bg-transparent text-[16px] text-text-primary outline-none placeholder:text-text-muted"
              />
              <button
                type="button"
                aria-label="Close search"
                onClick={() => setSearchOpen(false)}
                className="p-1 text-text-muted hover:text-primary"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="mt-3 max-h-[55vh] overflow-y-auto">
              {results.length ? (
                results.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={navigate}
                    className="flex items-center justify-between gap-4 border-b border-border-light py-3 text-[14px] text-text-primary transition-colors last:border-0 hover:text-primary"
                  >
                    <span>{item.label}</span>
                    <span className="shrink-0 text-[12px] text-text-muted">{item.category}</span>
                  </a>
                ))
              ) : (
                <p className="py-8 text-center text-sm text-text-muted">No results</p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
