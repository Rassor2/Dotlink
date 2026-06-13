import LegalLayout from "@/components/LegalLayout";

export default function Legal() {
    return (
        <LegalLayout
            testId="legal-page"
            eyebrow="Légal"
            title="Mentions légales"
            lastUpdated="Décembre 2025"
        >
            <h2>Éditeur de l'application</h2>
            <p>
                <strong>RelaxPlay One</strong><br />
                Studio indépendant de jeux mobiles<br />
                Adresse : [À compléter par l'éditeur]<br />
                E-mail : <a href="mailto:marre199@proton.me">marre199@proton.me</a>
            </p>

            <h2>Directeur de la publication</h2>
            <p>
                Le représentant légal de RelaxPlay One.
            </p>

            <h2>Application</h2>
            <p>
                <strong>Dot Link</strong> — Jeu de puzzle cosmique.<br />
                Version 1.0 · 5 mondes · 400 niveaux.<br />
                Disponible sur l'App Store d'Apple et sur Google Play.
            </p>

            <h2>Hébergement et infrastructure</h2>
            <p>
                Les services backend de Dot Link sont hébergés par des prestataires
                conformes aux standards de sécurité et de confidentialité. La
                distribution est assurée par Apple Inc. (App Store) et Google LLC
                (Google Play).
            </p>

            <h2>Paiements</h2>
            <p>
                Les paiements sont traités par Apple, Google et/ou <strong>Stripe Inc.</strong>
                conformément à leurs conditions d'utilisation respectives. Aucune
                donnée bancaire n'est stockée par RelaxPlay One.
            </p>

            <h2>Propriété intellectuelle</h2>
            <p>
                L'ensemble du contenu de l'Application et du présent site (textes,
                graphismes, logo, code, musique, design des cinq mondes Lumina,
                Aurora, Zenith, Eclipse, Void) est protégé par le droit d'auteur et
                appartient à RelaxPlay One. Toute reproduction, même partielle, est
                interdite sans autorisation écrite préalable.
            </p>

            <h2>Crédits</h2>
            <p>
                Conception, design et développement : RelaxPlay One.
            </p>

            <h2>Signaler un contenu</h2>
            <p>
                Si vous estimez qu'un contenu enfreint vos droits, contactez-nous à
                <a href="mailto:marre199@proton.me"> marre199@proton.me</a> en
                précisant la nature du contenu, sa localisation, et la preuve de vos
                droits. Nous traitons toute demande sérieuse sous 7 jours ouvrés.
            </p>

            <h2>Contact</h2>
            <p>
                <a href="mailto:marre199@proton.me">marre199@proton.me</a>
            </p>
        </LegalLayout>
    );
}
