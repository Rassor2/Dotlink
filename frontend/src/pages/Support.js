import LegalLayout from "@/components/LegalLayout";

export default function Support() {
    return (
        <LegalLayout
            testId="support-page"
            eyebrow="Aide"
            title="Support & contact"
        >
            <p>
                Une question, un bug, une suggestion ? L'équipe de RelaxPlay One
                est à ton écoute.
            </p>

            <h2>Nous contacter</h2>
            <p>
                Écris-nous à <a href="mailto:marre199@proton.me">marre199@proton.me</a>.
                Nous répondons généralement sous 48 heures ouvrées.
            </p>
            <p>
                Pour accélérer le traitement, merci d'indiquer :
            </p>
            <ul>
                <li>Ton pseudonyme et ton identifiant joueur (Profil → ID).</li>
                <li>Ton appareil et la version de ton système (iOS / Android).</li>
                <li>Une description claire du problème ou de la demande.</li>
                <li>Si possible, une capture d'écran.</li>
            </ul>

            <h2>FAQ rapide</h2>
            <h3>Comment changer mon pseudonyme ?</h3>
            <p>
                Va dans Classement, puis appuie sur « Modifier mon nom ».
            </p>
            <h3>J'ai perdu ma progression</h3>
            <p>
                Ta progression est liée à ton appareil. Contacte-nous avec ton ID
                joueur — nous étudierons une restauration au cas par cas.
            </p>
            <h3>Un achat n'a pas été crédité</h3>
            <p>
                Vérifie d'abord ton historique App Store ou Google Play. Si le
                paiement est passé mais le contenu absent, écris-nous avec la
                preuve d'achat.
            </p>
            <h3>Demande de remboursement</h3>
            <p>
                Consulte notre <a href="/remboursement">Politique de remboursement</a>.
            </p>
        </LegalLayout>
    );
}
