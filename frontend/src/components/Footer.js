import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer
            data-testid="site-footer"
            className="relative z-10 border-t border-white/5 bg-black mt-32"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="w-2.5 h-2.5 rounded-full bg-gold shadow-[0_0_18px_rgba(245,197,24,0.8)]" />
                            <span className="font-display text-2xl">Dot <span className="text-gold">Link</span></span>
                        </div>
                        <p className="text-white/50 text-sm max-w-md leading-relaxed">
                            Un voyage cosmique. Relie les étoiles, trace la voie,
                            remplis l'infini. 5 mondes, 400 niveaux à explorer.
                        </p>
                        <p className="mt-6 text-xs text-white/30 tracking-[0.2em] uppercase">
                            Édité par RelaxPlay One
                        </p>
                        <a
                            href="mailto:marre199@proton.me"
                            data-testid="footer-contact-email"
                            className="text-sm text-white/60 hover:text-gold transition-colors"
                        >
                            marre199@proton.me
                        </a>
                    </div>

                    <div>
                        <h4 className="eyebrow mb-4">Légal</h4>
                        <ul className="space-y-3 text-sm text-white/60">
                            <li><Link to="/confidentialite" data-testid="footer-link-privacy" className="hover:text-gold transition-colors">Politique de confidentialité</Link></li>
                            <li><Link to="/cgu" data-testid="footer-link-terms" className="hover:text-gold transition-colors">CGU</Link></li>
                            <li><Link to="/mentions-legales" data-testid="footer-link-legal" className="hover:text-gold transition-colors">Mentions légales</Link></li>
                            <li><Link to="/remboursement" data-testid="footer-link-refund" className="hover:text-gold transition-colors">Politique de remboursement</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="eyebrow mb-4">Aide</h4>
                        <ul className="space-y-3 text-sm text-white/60">
                            <li><Link to="/support" data-testid="footer-link-support" className="hover:text-gold transition-colors">Support</Link></li>
                            <li><a href="mailto:marre199@proton.me" className="hover:text-gold transition-colors">Nous contacter</a></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-14 pt-8 border-t border-white/5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                    <p className="text-xs text-white/30">
                        © {new Date().getFullYear()} RelaxPlay One — Tous droits réservés.
                    </p>
                    <p className="text-xs text-white/30 tracking-[0.2em] uppercase">
                        v1.0 · Lumina → Aurora → Zenith → Eclipse → Void
                    </p>
                </div>
            </div>
        </footer>
    );
}
