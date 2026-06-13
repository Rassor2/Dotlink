import LegalLayout from "@/components/LegalLayout";

export default function Refund() {
    return (
        <LegalLayout
            testId="refund-page"
            eyebrow="Légal"
            title="Politique de remboursement"
            lastUpdated="Décembre 2025"
        >
            <p>
                Cette politique décrit les conditions de remboursement applicables
                aux achats effectués dans l'application <strong>Dot Link</strong>
                éditée par <strong>RelaxPlay One</strong>.
            </p>

            <h2>1. Achats via l'App Store (iOS)</h2>
            <p>
                Tous les achats réalisés sur l'App Store sont gérés par Apple Inc.
                Les demandes de remboursement doivent être adressées directement à
                Apple via :
            </p>
            <ul>
                <li>
                    <a href="https://reportaproblem.apple.com" target="_blank" rel="noreferrer">
                        reportaproblem.apple.com
                    </a>
                </li>
                <li>L'historique d'achat dans votre compte Apple ID.</li>
            </ul>
            <p>
                Apple applique sa propre politique de remboursement. RelaxPlay One
                n'a pas la possibilité d'émettre ou de refuser un remboursement
                directement pour les achats iOS.
            </p>

            <h2>2. Achats via Google Play (Android)</h2>
            <p>
                Les achats réalisés sur Google Play sont gérés par Google LLC. Vous
                pouvez demander un remboursement dans les 48 heures suivant l'achat
                directement depuis Google Play, ou contacter Google Support :
            </p>
            <ul>
                <li>
                    <a href="https://support.google.com/googleplay/answer/2479637" target="_blank" rel="noreferrer">
                        support.google.com/googleplay
                    </a>
                </li>
            </ul>
            <p>
                Au-delà de 48 heures, vous pouvez nous contacter et nous étudierons
                votre demande au cas par cas.
            </p>

            <h2>3. Achats via Stripe (paiement web)</h2>
            <p>
                Si votre achat a été réalisé via Stripe (page web de paiement), vous
                bénéficiez d'un droit de rétractation de <strong>14 jours</strong>
                à compter de la transaction, conformément au droit européen de la
                consommation, <strong>sauf</strong> si le contenu numérique a déjà été
                délivré et consommé après votre consentement exprès.
            </p>
            <p>
                Pour exercer ce droit, envoyez un e-mail à
                <a href="mailto:marre199@proton.me"> marre199@proton.me</a> en
                précisant :
            </p>
            <ul>
                <li>Votre identifiant joueur (visible dans Profil → ID).</li>
                <li>La date et le montant de la transaction.</li>
                <li>Le moyen de paiement utilisé.</li>
            </ul>

            <h2>4. Cas exceptionnels</h2>
            <p>Nous pouvons accorder un remboursement en cas de :</p>
            <ul>
                <li>Erreur technique nous incombant ayant empêché la délivrance du contenu.</li>
                <li>Double facturation prouvée.</li>
                <li>Achat accidentel par un mineur sans autorisation parentale.</li>
            </ul>

            <h2>5. Cas exclus du remboursement</h2>
            <ul>
                <li>Contenu numérique entièrement consommé (skins équipés, pièces dépensées).</li>
                <li>Insatisfaction subjective concernant la difficulté ou le contenu du jeu.</li>
                <li>Suppression accidentelle de l'application après usage.</li>
                <li>Pertes liées à une réinitialisation manuelle des données du jeu.</li>
            </ul>

            <h2>6. Monnaie virtuelle</h2>
            <p>
                Les pièces virtuelles n'ont aucune valeur monétaire en dehors de
                l'Application et ne peuvent en aucun cas être converties ou
                échangées contre de la monnaie réelle.
            </p>

            <h2>7. Délai de traitement</h2>
            <p>
                Les demandes éligibles sont traitées sous <strong>14 jours ouvrés</strong>.
                Le remboursement est effectué via le moyen de paiement initialement
                utilisé.
            </p>

            <h2>8. Contact</h2>
            <p>
                Toute demande de remboursement ou question peut être adressée à :
                <a href="mailto:marre199@proton.me"> marre199@proton.me</a>
            </p>
        </LegalLayout>
    );
}
