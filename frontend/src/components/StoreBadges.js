import { Apple, Play } from "lucide-react";

export default function StoreBadges({ size = "default" }) {
    const sz = size === "large" ? "min-w-[210px] px-7 py-4" : "min-w-[190px] px-6 py-3.5";
    return (
        <div className="flex flex-col sm:flex-row gap-3" data-testid="store-badges">
            <div
                data-testid="badge-app-store"
                className={`group relative ${sz} rounded-2xl bg-[#050505] border border-white/15 hover:border-gold/60 transition-all overflow-hidden cursor-not-allowed`}
                aria-disabled="true"
                title="Bientôt disponible sur l'App Store"
            >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex items-center gap-3 relative">
                    <Apple className="w-8 h-8 text-white" strokeWidth={1.5} />
                    <div className="flex flex-col items-start text-left">
                        <span className="text-[10px] tracking-[0.2em] text-gold uppercase">Bientôt</span>
                        <span className="text-base font-medium leading-tight">App Store</span>
                    </div>
                </div>
            </div>
            <div
                data-testid="badge-google-play"
                className={`group relative ${sz} rounded-2xl bg-[#050505] border border-white/15 hover:border-gold/60 transition-all overflow-hidden cursor-not-allowed`}
                aria-disabled="true"
                title="Bientôt disponible sur Google Play"
            >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex items-center gap-3 relative">
                    <Play className="w-7 h-7 text-white fill-white" strokeWidth={1.5} />
                    <div className="flex flex-col items-start text-left">
                        <span className="text-[10px] tracking-[0.2em] text-gold uppercase">Bientôt</span>
                        <span className="text-base font-medium leading-tight">Google Play</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
