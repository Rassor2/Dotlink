import LegalLayout from "@/components/LegalLayout";

export default function Privacy() {
    return (
        <LegalLayout
            testId="privacy-page"
            eyebrow="Légal"
            title="Politique de confidentialité"
            lastUpdated="Décembre 2025"
        >
            <p>
                La présente politique décrit la manière dont <strong>RelaxPlay One</strong>
                (« nous », « notre ») collecte, utilise et protège les informations des
                utilisateurs (« vous ») de l'application mobile <strong>Dot Link</strong>
                (« l'Application »).
            </p>
            <p>
                En téléchargeant ou utilisant Dot Link, vous acceptez les pratiques décrites
                ci-dessous. Cette politique est conforme au Règlement Général sur la
                Protection des Données (RGPD), au California Consumer Privacy Act (CCPA),
                ainsi qu'aux exigences de l'App Store d'Apple et de Google Play.
            </p>

            <h2>1. Données que nous collectons</h2>
            <h3>Données fournies par l'utilisateur</h3>
            <ul>
                <li><strong>Pseudonyme</strong> : le nom que vous choisissez d'afficher dans le classement.</li>
                <li><strong>Adresse e-mail</strong> : uniquement si vous nous contactez via marre199@proton.me.</li>
            </ul>
            <h3>Données collectées automatiquement</h3>
            <ul>
                <li><strong>Identifiant utilisateur anonyme</strong> (ex. ca3e3f88) généré localement pour suivre votre progression.</li>
                <li><strong>Progression de jeu</strong> : niveaux complétés, étoiles obtenues, pièces virtuelles, skins équipés.</li>
                <li><strong>Données techniques</strong> : modèle d'appareil, version du système d'exploitation, version de l'application, langue, journaux de plantage anonymisés.</li>
                <li><strong>Identifiants publicitaires</strong> (IDFA / AAID) : uniquement après votre consentement explicite, pour la diffusion de publicités récompensées.</li>
            </ul>

            <h2>2. Finalités du traitement</h2>
            <ul>
                <li>Faire fonctionner l'Application et sauvegarder votre progression.</li>
                <li>Afficher le classement Top 100 Tisseurs.</li>
                <li>Diffuser des publicités récompensées (avec votre consentement).</li>
                <li>Améliorer l'expérience (analytique anonyme, correction de bugs).</li>
                <li>Répondre à vos demandes de support.</li>
            </ul>

            <h2>3. Base légale</h2>
            <p>
                Le traitement repose sur (i) l'exécution du contrat (fournir l'Application),
                (ii) votre consentement (publicités personnalisées, analytique), et
                (iii) notre intérêt légitime (sécurité, amélioration du service).
            </p>

            <h2>4. Partage avec des tiers</h2>
            <p>Nous ne vendons jamais vos données. Nous pouvons partager des données limitées avec :</p>
            <ul>
                <li><strong>Apple App Store / Google Play</strong> pour la facturation et la distribution.</li>
                <li><strong>Stripe</strong> pour le traitement sécurisé des paiements (le cas échéant).</li>
                <li><strong>Régies publicitaires</strong> (avec consentement) pour les pubs récompensées.</li>
                <li><strong>Services analytiques</strong> anonymisés (crash reports).</li>
            </ul>

            <h2>5. Conservation des données</h2>
            <p>
                Votre progression est conservée tant que vous utilisez l'Application.
                Vous pouvez supprimer toutes vos données à tout moment depuis le menu
                Paramètres ou en nous contactant.
            </p>

            <h2>6. Vos droits (RGPD / CCPA)</h2>
            <ul>
                <li>Droit d'accès, de rectification et d'effacement de vos données.</li>
                <li>Droit à la portabilité.</li>
                <li>Droit d'opposition au traitement.</li>
                <li>Droit de retirer votre consentement à tout moment.</li>
                <li>Droit d'introduire une réclamation auprès de la CNIL.</li>
            </ul>
            <p>
                Pour exercer ces droits, écrivez à <a href="mailto:marre199@proton.me">marre199@proton.me</a>.
                Nous répondons sous 30 jours.
            </p>

            <h2>7. Enfants</h2>
            <p>
                Dot Link n'est pas destiné aux enfants de moins de 13 ans. Nous ne
                collectons pas sciemment de données personnelles d'enfants. Si vous
                pensez que tel est le cas, contactez-nous pour suppression immédiate.
            </p>

            <h2>8. Sécurité</h2>
            <p>
                Nous utilisons des mesures techniques et organisationnelles raisonnables
                (chiffrement en transit, contrôle d'accès) pour protéger vos données.
                Aucune méthode n'est cependant 100% sécurisée.
            </p>

            <h2>9. Modifications</h2>
            <p>
                Cette politique peut évoluer. La date de dernière mise à jour figure
                en haut. En cas de modification substantielle, nous vous en informerons
                dans l'Application.
            </p>

            <h2>10. Contact</h2>
            <p>
                Responsable du traitement : <strong>RelaxPlay One</strong><br />
                E-mail : <a href="mailto:marre199@proton.me">marre199@proton.me</a>
            </p>
        </LegalLayout>
    );
}
