import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <nav
            data-testid="site-nav"
            className="relative z-30 max-w-7xl mx-auto px-6 lg:px-12 py-6 flex items-center justify-between"
        >
            <Link
                to="/"
                data-testid="nav-logo"
                className="flex items-center gap-2 group"
            >
                <span className="w-2.5 h-2.5 rounded-full bg-gold shadow-[0_0_18px_rgba(245,197,24,0.8)] group-hover:scale-125 transition-transform" />
                <span className="font-display text-xl tracking-tight">
                    Dot <span className="text-gold">Link</span>
                </span>
            </Link>
            <div className="hidden md:flex items-center gap-8 text-sm text-white/60">
                <a href="/#fonctionnalites" data-testid="nav-features" className="hover:text-white transition-colors">Fonctionnalités</a>
                <a href="/#mondes" data-testid="nav-worlds" className="hover:text-white transition-colors">Mondes</a>
                <a href="/#telecharger" data-testid="nav-download" className="hover:text-white transition-colors">Télécharger</a>
                <Link to="/support" data-testid="nav-support" className="hover:text-white transition-colors">Support</Link>
            </div>
            <a
                href="/#telecharger"
                data-testid="nav-cta"
                className="rounded-full bg-gold text-black text-sm font-semibold px-4 py-2 hover:bg-[#D4A915] transition-colors"
            >
                Bientôt
            </a>
        </nav>
    );
}
