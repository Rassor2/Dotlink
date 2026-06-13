import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function LegalLayout({ title, eyebrow, lastUpdated, children, testId }) {
    return (
        <div className="relative min-h-screen" data-testid={testId}>
            <Nav />
            <main className="relative z-10 max-w-3xl mx-auto px-6 lg:px-12 py-16 sm:py-24">
                <Link
                    to="/"
                    data-testid="back-home"
                    className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-gold transition-colors mb-10"
                >
                    <ArrowLeft className="w-4 h-4" /> Retour à l'accueil
                </Link>
                <p className="eyebrow mb-4">{eyebrow}</p>
                <h1 className="font-display text-4xl sm:text-5xl md:text-6xl tracking-tight leading-[1.05] mb-6">
                    {title}
                </h1>
                {lastUpdated && (
                    <p className="text-sm text-white/40 mb-12">
                        Dernière mise à jour : {lastUpdated}
                    </p>
                )}
                <article className="prose-legal text-white/75 text-base leading-relaxed space-y-6
                    [&_h2]:font-display [&_h2]:text-2xl [&_h2]:sm:text-3xl [&_h2]:text-white [&_h2]:mt-12 [&_h2]:mb-4
                    [&_h3]:font-sans [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-white [&_h3]:mt-8 [&_h3]:mb-3
                    [&_p]:leading-relaxed
                    [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2
                    [&_a]:text-gold [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-white
                    [&_strong]:text-white">
                    {children}
                </article>
            </main>
            <Footer />
        </div>
    );
}
