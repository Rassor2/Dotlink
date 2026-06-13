import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import StoreBadges from "@/components/StoreBadges";
import { Sparkles, Trophy, Gem, Layers, Star, ArrowRight } from "lucide-react";

const WORLDS = [
    { key: "lumina", name: "Lumina", subtitle: "L'aube cosmique", color: "#86EFAC", desc: "Le premier souffle de lumière. Des constellations douces, parfaites pour apprendre à tisser." },
    { key: "aurora", name: "Aurora", subtitle: "Le voile boréal", color: "#10B981", desc: "Des rideaux émeraude ondulent dans le vide. Chaque trait devient une vague." },
    { key: "zenith", name: "Zenith", subtitle: "Le pic solaire", color: "#F5C518", desc: "L'apogée. La chaleur d'une étoile au sommet de sa puissance. Le doré pur." },
    { key: "eclipse", name: "Eclipse", subtitle: "L'ombre dévorante", color: "#EA580C", desc: "La lumière vacille. Les voies se cachent dans la pénombre incandescente." },
    { key: "void", name: "Void", subtitle: "L'abîme étoilé", color: "#D946EF", desc: "Le dernier monde. Là où les Tisseurs déposent leur ultime lumière." },
];

const FEATURES = [
    { icon: Layers, title: "5 mondes, 400 niveaux", desc: "De Lumina à Void, une progression sculptée pour des heures de jeu contemplatif." },
    { icon: Sparkles, title: "Skins cosmiques", desc: "Plateaux Obsidienne, Voile Aurora, Solaris, Nébuleuse, Vide profond. Personnalise chaque trait." },
    { icon: Trophy, title: "Classement mondial", desc: "Top 100 Tisseurs. Compare tes étoiles et tes niveaux complétés à ceux du monde entier." },
    { icon: Gem, title: "Pièces & boutique", desc: "Gagne, dépense, équipe. Une économie douce qui respecte ton temps." },
];

export default function Home() {
    return (
        <div className="relative min-h-screen" data-testid="home-page">
            <Nav />

            {/* HERO */}
            <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-12 pb-32 sm:pt-20 sm:pb-40">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-7" data-testid="hero-content">
                        <p className="eyebrow mb-6 animate-fade-up" data-testid="hero-eyebrow">Un voyage cosmique</p>
                        <h1
                            data-testid="hero-title"
                            className="font-display font-bold text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tighter leading-[0.9] animate-fade-up"
                            style={{ animationDelay: "0.1s" }}
                        >
                            Dot <span className="text-gold text-glow-gold">Link</span>
                        </h1>
                        <p
                            data-testid="hero-tagline"
                            className="mt-8 text-lg sm:text-xl text-white/70 max-w-xl leading-relaxed animate-fade-up"
                            style={{ animationDelay: "0.25s" }}
                        >
                            Relie les étoiles. Trace la voie. Remplis l'infini.
                            <br />
                            <span className="text-white/40">Un puzzle minimaliste à travers cinq mondes.</span>
                        </p>
                        <div className="mt-12 animate-fade-up" style={{ animationDelay: "0.4s" }}>
                            <StoreBadges size="large" />
                            <p className="mt-5 text-xs text-white/40 tracking-[0.2em] uppercase">
                                Sortie prochaine · iOS & Android
                            </p>
                        </div>
                    </div>

                    {/* Visual cosmic orb */}
                    <div className="lg:col-span-5 flex justify-center" data-testid="hero-visual">
                        <div className="relative w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] animate-fade-up" style={{ animationDelay: "0.5s" }}>
                            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gold/30 via-gold/5 to-transparent blur-3xl animate-pulse-glow" />
                            <div className="absolute inset-8 rounded-full border border-gold/20 animate-float-slow" />
                            <div className="absolute inset-16 rounded-full border border-gold/10" />
                            <div className="absolute inset-24 rounded-full border border-white/10" />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-gold shadow-[0_0_40px_rgba(245,197,24,0.9)]" />
                            <div className="absolute top-[20%] left-[30%] w-1.5 h-1.5 rounded-full bg-white/80 animate-twinkle" />
                            <div className="absolute top-[70%] left-[65%] w-1.5 h-1.5 rounded-full bg-gold animate-twinkle" style={{ animationDelay: "1s" }} />
                            <div className="absolute top-[35%] left-[75%] w-1 h-1 rounded-full bg-void animate-twinkle" style={{ animationDelay: "2s" }} />
                            <div className="absolute top-[60%] left-[20%] w-1 h-1 rounded-full bg-lumina animate-twinkle" style={{ animationDelay: "1.5s" }} />
                        </div>
                    </div>
                </div>

                {/* Stats strip */}
                <div className="mt-24 grid grid-cols-3 gap-4 max-w-3xl border-y border-white/10 py-8">
                    <div data-testid="stat-worlds">
                        <p className="font-display text-4xl sm:text-5xl text-gold">5</p>
                        <p className="text-xs tracking-[0.2em] uppercase text-white/40 mt-1">Mondes</p>
                    </div>
                    <div data-testid="stat-levels">
                        <p className="font-display text-4xl sm:text-5xl text-gold">400</p>
                        <p className="text-xs tracking-[0.2em] uppercase text-white/40 mt-1">Niveaux</p>
                    </div>
                    <div data-testid="stat-skins">
                        <p className="font-display text-4xl sm:text-5xl text-gold">12+</p>
                        <p className="text-xs tracking-[0.2em] uppercase text-white/40 mt-1">Skins</p>
                    </div>
                </div>
            </section>

            {/* FEATURES */}
            <section id="fonctionnalites" className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-24 sm:py-32" data-testid="features-section">
                <div className="max-w-2xl mb-16">
                    <p className="eyebrow mb-4">Ce qui t'attend</p>
                    <h2 className="font-display text-4xl sm:text-5xl md:text-6xl tracking-tight leading-[1.05]">
                        Un puzzle minimaliste, <span className="text-gold italic">cosmique</span>.
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {FEATURES.map((f, i) => (
                        <div
                            key={f.title}
                            data-testid={`feature-${i}`}
                            className="group relative bg-[#050505] border border-white/5 rounded-3xl p-8 hover:border-gold/30 transition-all overflow-hidden"
                        >
                            <div className="absolute -top-20 -right-20 w-48 h-48 rounded-full bg-gold/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                            <f.icon className="w-7 h-7 text-gold mb-6" strokeWidth={1.5} />
                            <h3 className="font-display text-2xl mb-3">{f.title}</h3>
                            <p className="text-white/60 leading-relaxed">{f.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* WORLDS */}
            <section id="mondes" className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-24 sm:py-32" data-testid="worlds-section">
                <div className="max-w-2xl mb-16">
                    <p className="eyebrow mb-4">Cinq mondes</p>
                    <h2 className="font-display text-4xl sm:text-5xl md:text-6xl tracking-tight leading-[1.05]">
                        De l'aube à l'<span className="text-gold italic">abîme</span>.
                    </h2>
                    <p className="mt-6 text-white/60 text-lg leading-relaxed">
                        Chaque monde est un état d'âme. Une couleur, une mécanique,
                        une histoire racontée en silence par les constellations que tu relies.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {WORLDS.map((w, i) => (
                        <div
                            key={w.key}
                            data-testid={`world-${w.key}`}
                            className={`relative group bg-[#050505] border border-white/5 rounded-3xl p-8 hover:border-white/15 transition-all overflow-hidden ${i === 2 ? "lg:col-span-2 lg:row-span-1" : ""}`}
                        >
                            <div
                                className="absolute -top-24 -right-24 w-56 h-56 rounded-full blur-3xl opacity-30 group-hover:opacity-60 transition-opacity"
                                style={{ backgroundColor: w.color }}
                            />
                            <div
                                className="relative w-12 h-12 rounded-full mb-6 shadow-2xl"
                                style={{
                                    backgroundColor: w.color,
                                    boxShadow: `0 0 30px ${w.color}66`
                                }}
                            />
                            <h3 className="font-display text-3xl mb-1">{w.name}</h3>
                            <p className="text-sm italic text-white/50 mb-4">{w.subtitle}</p>
                            <p className="text-white/60 leading-relaxed">{w.desc}</p>
                            <div className="mt-6 flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-white/40">
                                <Star className="w-3 h-3" fill="currentColor" /> 80 niveaux
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* DOWNLOAD CTA */}
            <section id="telecharger" className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-24 sm:py-32" data-testid="download-section">
                <div className="relative bg-[#050505] border border-white/10 rounded-3xl px-8 py-16 sm:p-20 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-void/5 pointer-events-none" />
                    <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-gold/10 blur-3xl pointer-events-none" />

                    <div className="relative max-w-2xl">
                        <p className="eyebrow mb-4">Bientôt disponible</p>
                        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl tracking-tight leading-[1.05]">
                            Prêt à tisser <span className="text-gold italic">l'univers</span> ?
                        </h2>
                        <p className="mt-6 text-white/60 text-lg leading-relaxed">
                            Dot Link arrive prochainement sur iOS et Android.
                            Les Tisseurs d'Étoiles t'attendent.
                        </p>
                        <div className="mt-10">
                            <StoreBadges size="large" />
                        </div>
                        <a
                            href="mailto:marre199@proton.me?subject=Notify%20me%20%E2%80%94%20Dot%20Link"
                            data-testid="notify-cta"
                            className="mt-8 inline-flex items-center gap-2 text-sm text-white/60 hover:text-gold transition-colors"
                        >
                            Être prévenu de la sortie <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
