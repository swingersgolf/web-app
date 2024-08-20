import LogoButton from "@components/buttons/LogoButton";
import Footer from "@components/Footer";
import Page from "@components/Page";

const Privacy = () => {
    return (
        <Page id="privacy">
            <div id="privacy-container">
                <div className="flex flex-row justify-between items-center h-20 w-full"><LogoButton/></div>
                <div id="privacy-content" className="flex flex-col items-start justify-start gap-y-12 py-12">
                    <div id="privacy-policy">
                        <h1>Privacy Policy</h1>
                        <h2>Introduction</h2>
                        <h3>What data do we collect?</h3>
                        <p>Swingers collects the following data:</p>
                        <ul>
                            <li>Personal identification information (Name, email address, phone number, etc.)</li>
                            <li>Location information</li>
                            <li>Device information</li>
                            <li>Usage data</li>
                        </ul>
                        <h3>How do we collect your data?</h3>
                        <p>You directly provide Swingers with most of the data we collect. We collect data and process data when you:</p>
                        <ul>
                            <li>Register online or place an order for any of our products or services.</li>
                            <li>Voluntarily complete a customer survey or provide feedback on any of our message boards or via email.</li>
                            <li>Use or view our website via your browser’s cookies.</li>
                        </ul>
                        <h3>How will we use your data?</h3>
                        <p>Swingers collects your data so that we can:</p>
                        <ul>
                            <li>Process your order and manage your account.</li>
                            <li>Email you with special offers on other products and services we think you might like.</li>
                        </ul>
                        <h2>How do we store your data?</h2>
                        <p>Swingers securely stores your data at [enter location and describe security precautions taken].</p>
                        <h2>Marketing</h2>
                        <p>Swingers would like to send you information about products and services of ours that we think you might like, as well as those of our partner companies.</p>
                        <h2>What are your data protection rights?</h2>
                        <p>Swingers would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:</p>
                    </div>
                    <div id="terms-and-conditions">
                        <h1>Terms and Conditions</h1>
                        <h2>Introduction</h2>
                        <h3>Intellectual Property Rights</h3>
                        <h3>Restrictions</h3>
                        <p>You are specifically restricted from all of the following:</p>
                        <ul>
                            <li>publishing any Website material in any other media;</li>
                            <li>selling, sublicensing and/or otherwise commercializing any Website material;</li>
                            <li>publicly performing and/or showing any Website material;</li>
                            <li>using this Website in any way that is or may be damaging to this Website;</li>
                            <li>using this Website in any way that impacts user access to this Website;</li>
                            <li>using this Website contrary to applicable laws and regulations, or in any way may cause harm to the Website, or to any person or business entity;</li>
                            <li>engaging in any data mining, data harvesting, data extracting or any other similar activity in relation to this Website;</li>
                            <li>using this Website to engage in any advertising or marketing.</li>
                        </ul>
                        <h3>Your Content</h3>
                        <p>In these Website Standard Terms and Conditions, “Your Content” shall mean any audio, video text, images or other material you choose to display on this Website. By displaying Your Content, you grant Swingers a non-exclusive, worldwide irrevocable, sub licensable license to use, reproduce, adapt, publish, translate and distribute it in any and all media.</p>
                        <h3>No warranties</h3>
                        <p>This Website is provided “as is,” with all faults, and Swingers makes no express or implied representations or warranties, of any kind related to this Website or the materials contained on this Website. Additionally, nothing contained on this Website shall be construed as providing consult or advice to you.</p>
                        <h3>Limitation of liability</h3>
                        <p>In no event shall Swingers, nor any of its officers, directors and employees, be held liable for anything arising out of or in any way connected with your use of this Website whether such liability is under contract. Swingers, including its officers, directors and employees shall not be held liable for any indirect, consequential or special liability arising out of or in any way related to your use of this Website.</p>
                        <h3>Indemnification</h3>
                        <p>You hereby indemnify to the fullest extent Swingers from and against any and all liabilities, costs, demands, causes of action, damages and expenses (including reasonable attorney’s fees) arising out of or in any way related to your breach of any of the provisions of these Terms.</p>
                        <h3>Severability</h3>
                        <p>If any provision of these Terms is found to be unenforceable or invalid under any applicable law, such unenforceability or invalidity shall not render these Terms unenforceable or invalid as a whole, and such provisions shall be deleted without affecting the remaining provisions herein.</p>
                        <h3>Variation of Terms</h3>
                        <p>Swingers is permitted to revise these Terms at any time as it sees fit, and by using this Website you are expected to review these Terms on a regular basis.</p>
                        <h3>Assignment</h3>
                        <p>The Swingers is allowed to assign, transfer, and subcontract its rights and/or obligations under these Terms without any notification. However, you are not allowed to assign, transfer, or subcontract any of your rights and/or obligations under these Terms.</p>
                        <h3>Entire Agreement</h3>
                        <p>These Terms constitute the entire agreement between Swingers and you in relation to your use of this Website, and supersede all prior agreements and understandings.</p>
                        <h3>Governing Law & Jurisdiction</h3>
                        <p>These Terms will be governed by and interpreted in accordance with the laws of the State of us, and you submit to the non-exclusive jurisdiction of the state and federal courts located in us for the resolution of any disputes.</p>
                    </div>
                </div>
            </div>
            <Footer/>
        </Page>
    )
}

export default Privacy;
