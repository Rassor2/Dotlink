import LegalLayout from "@/components/LegalLayout";

export default function Terms() {
    return (
        <LegalLayout
            testId="terms-page"
            eyebrow="Légal"
            title="Conditions générales d'utilisation"
            lastUpdated="Décembre 2025"
        >
            <p>
                Les présentes Conditions Générales d'Utilisation (« CGU ») régissent
                l'utilisation de l'application <strong>Dot Link</strong> éditée par
                <strong> RelaxPlay One</strong>. En téléchargeant ou en utilisant
                l'Application, vous acceptez sans réserve les présentes CGU.
            </p>

            <h2>1. Objet</h2>
            <p>
                Dot Link est un jeu de puzzle minimaliste où le joueur relie des points
                à travers cinq mondes (Lumina, Aurora, Zenith, Eclipse, Void) répartis
                sur 400 niveaux. L'Application est distribuée gratuitement avec des
                achats intégrés optionnels.
            </p>

            <h2>2. Acceptation et capacité juridique</h2>
            <p>
                L'utilisateur déclare être majeur ou avoir obtenu l'autorisation de son
                représentant légal. Toute utilisation par un mineur est sous la
                responsabilité du titulaire de l'autorité parentale.
            </p>

            <h2>3. Compte et identifiant</h2>
            <p>
                Aucun compte avec mot de passe n'est requis. Un identifiant local
                anonyme est généré à la première ouverture. Vous êtes responsable de
                la confidentialité de votre appareil.
            </p>

            <h2>4. Achats intégrés et abonnements</h2>
            <p>
                Certains contenus (skins, packs de pièces) sont payants. Les paiements
                sont traités exclusivement par <strong>Apple App Store</strong>,
                <strong> Google Play</strong> ou <strong>Stripe</strong>, conformément
                à leurs propres conditions.
            </p>
            <ul>
                <li>Les prix sont affichés TTC en dollars US ou dans la devise locale.</li>
                <li>Les transactions sont définitives sous réserve de notre Politique de remboursement.</li>
                <li>Aucun contenu acheté ne peut être converti en monnaie réelle.</li>
            </ul>

            <h2>5. Monnaie virtuelle</h2>
            <p>
                Les pièces affichées dans le jeu sont une monnaie virtuelle sans aucune
                valeur monétaire en dehors de l'Application. Elles ne sont ni
                échangeables, ni remboursables (sauf cas légaux), ni transférables.
            </p>

            <h2>6. Publicités</h2>
            <p>
                L'Application affiche des publicités récompensées optionnelles
                (« pubs ») permettant d'obtenir des pièces ou de débloquer des skins.
                Vous pouvez les désactiver via les achats supprimant la publicité,
                lorsque disponibles.
            </p>

            <h2>7. Utilisation autorisée</h2>
            <p>Vous vous engagez à ne pas :</p>
            <ul>
                <li>Modifier, désassembler ou contourner les mesures techniques de protection.</li>
                <li>Tricher, utiliser des bots ou exploiter des failles pour fausser le classement.</li>
                <li>Utiliser l'Application à des fins illicites ou portant atteinte aux droits de tiers.</li>
                <li>Utiliser des pseudonymes injurieux, racistes, sexuels, diffamatoires ou trompeurs.</li>
            </ul>

            <h2>8. Propriété intellectuelle</h2>
            <p>
                L'Application, son code, ses graphismes, sa musique, ses textes et ses
                marques restent la propriété exclusive de RelaxPlay One. Aucune
                reproduction n'est autorisée sans accord écrit.
            </p>

            <h2>9. Limitation de responsabilité</h2>
            <p>
                L'Application est fournie « telle quelle ». Dans la limite autorisée
                par la loi, RelaxPlay One ne peut être tenu responsable des
                dommages indirects, perte de données ou perte de pièces virtuelles.
            </p>

            <h2>10. Résiliation</h2>
            <p>
                Vous pouvez cesser d'utiliser l'Application et la désinstaller à tout
                moment. Nous nous réservons le droit de suspendre l'accès en cas de
                manquement aux présentes CGU.
            </p>

            <h2>11. Droit applicable</h2>
            <p>
                Les présentes CGU sont soumises au droit français. Tout litige relève
                des tribunaux compétents du ressort du siège de l'éditeur, sous
                réserve des dispositions impératives protégeant le consommateur.
            </p>

            <h2>12. Contact</h2>
            <p>
                Pour toute question : <a href="mailto:marre199@proton.me">marre199@proton.me</a>
            </p>
        </LegalLayout>
    );
}
