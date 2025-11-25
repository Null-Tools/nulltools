import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Footer } from '@/components/footer'

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background text-text-primary">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="mb-8">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors mb-6"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-nothing text-text-primary mb-4 tracking-wider">
            TERMS OF SERVICE
          </h1>
          <p className="text-text-secondary">
            Last Updated: 2025-11-23
          </p>
        </div>

        <div className="prose prose-invert max-w-none">
          <div className="space-y-8 text-text-secondary leading-relaxed">
            <section>
              <h2 className="text-2xl font-nothing text-text-primary mb-4 tracking-wide">1. Agreement to Terms</h2>
              <p className="mb-4">
                Thank you for choosing Null Tools. These Terms of Service ("Terms") establish the legal framework governing your access to and use of our platform, including our websites (nulltools.xyz, nulldrop.xyz, nullmails.xyz, nullvault.xyz), mobile applications, APIs, and all associated software and services including Null Drop, Null Mails, Null Vault, and other Null Tools products (collectively referred to as the "Services"). Null Tools operates and provides these Services. Throughout these Terms, references to "we," "our," "us," or "Null Tools" mean Null Tools.
              </p>
              <p className="mb-4">
                By creating an account or accessing our Services, you confirm that you accept and will comply with these Terms. When registering or using the Services on behalf of a company or organization, you represent that you have the legal authority to bind that entity to these Terms. In such cases, references to "you" and "your" apply to both you personally and the organization you represent.
              </p>
              <p className="mb-4">
                Our Services are available only to individuals who are at least 13 years old. Users under 13 are prohibited from creating accounts or using our Services. If you are between 13 and the age of majority in your jurisdiction (typically 18), you must obtain parental or guardian consent before using our Services. Parents or guardians who consent to their child's use of our Services agree to be bound by these Terms regarding their child's account.
              </p>
              <p className="mb-4">
                Your decision to purchase or use our Services is based solely on features and functionality currently available. We do not guarantee the delivery of any future features, and your use is not dependent on any public statements we may make about potential future developments.
              </p>
              <p className="mb-4">
                Should you have a separate written agreement with Null Tools that covers specific Services, the terms of that agreement will take precedence over any conflicting provisions in these Terms for those specific Services.
              </p>
              <p className="mb-4 p-4 bg-card/50 border border-border rounded-lg">
                <strong>IMPORTANT ARBITRATION NOTICE:</strong> Unless otherwise specified in the arbitration section below, any disputes between you and Null Tools must be resolved through mandatory binding arbitration. By agreeing to these Terms, you waive your right to participate in class-action lawsuits or class-wide arbitration proceedings.
              </p>
              <p className="mb-4">
                By accessing, downloading, installing, or otherwise using our Services or any materials provided with them, you acknowledge that you have read, understood, and agree to be legally bound by these Terms. If you do not agree with any part of these Terms, you must immediately cease all use of our Services.
              </p>
              <p>
                Some features within our Services may have additional terms, guidelines, or rules that apply specifically to those features. These additional terms will be displayed in connection with the relevant features. When such additional terms conflict with these general Terms, the feature-specific terms will govern for those particular features only. In all other circumstances, these Terms apply.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-nothing text-text-primary mb-4 tracking-wide">2. Account Registration and Management</h2>
              <p className="mb-4">
                To access and use our Services, you must create a user account through Null Pass, our unified authentication system (referred to as a "Customer Account"). Null Pass enables you to use a single account across all Null applications, including Null Drop, Null Mails, and Null Vault. When you create an account with Null Pass, you are creating an account that can be used across the entire Null ecosystem.
              </p>
              <p className="mb-4">
                During registration, you commit to providing truthful, accurate, and current information, and you agree to promptly update your account information whenever changes occur. You may grant access to other individuals ("Authorized Users") to use the Services under your account, but you bear full responsibility for all actions taken by these Authorized Users. Both you and your Authorized Users must maintain the confidentiality of all login credentials and access codes. You are responsible for all activities that occur under your account, regardless of whether you authorized them. You must immediately notify us if you discover any unauthorized access to your account or suspect any security breach.
              </p>
              <p className="mb-4 p-4 bg-card/50 border border-border rounded-lg">
                <strong>Important:</strong> Your Null Pass account is shared across all Null applications. If you delete your Null Pass account, your account and all associated data will be permanently deleted from all Null applications, including Null Drop, Null Mails, and Null Vault. This action cannot be undone.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-nothing text-text-primary mb-4 tracking-wide">3. User-Generated Content</h2>
              <p className="mb-4">
                Our Services enable you to upload, store, host, transmit, share, publish, and display various types of digital content, including documents, text files, software, audio recordings, music files, photographs, video files, images, and other digital materials. All content that you upload or create through our Services is collectively referred to as "User Content." This includes files uploaded to Null Drop, emails generated through Null Mails, payment transactions processed through Null Vault, and any other content created or stored through Null Tools products.
              </p>
              <p className="mb-4">
                You bear complete responsibility for all User Content that you create, upload, or transmit through any Null Tools product, including its creation, accuracy, legality, and any consequences of its use. You assume all risks related to your User Content, including potential intellectual property disputes or other legal claims. When registering on behalf of an organization, you also accept responsibility for all User Content created by your Authorized Users and for their actions while using our Services. By storing User Content with Null Tools, you warrant that you possess all necessary rights, licenses, and permissions to store, use, and share that content, and that doing so does not infringe upon any third-party rights, violate any licenses you have granted to others, breach any applicable laws or regulations, or conflict with these Terms. Our Services provide you with tools to share your User Content with others, and you have full control over what you share and with whom. You are responsible for implementing appropriate security measures to protect your account and User Content, including proper configuration of our Services and, when applicable, using encryption to prevent unauthorized access. Exercise caution when deciding what content to share publicly.
              </p>
              <p className="mb-4">
                You must promptly remove any User Content that violates these Terms, including when we request such removal. While we do not actively monitor all User Content uploaded, downloaded, or shared through our Services, we reserve the right, at our sole discretion, to review, remove, or disable access to any User Content, and to suspend or terminate your account if we determine that your use of our Services or your User Content violates these Terms, applicable laws, or regulations. This includes, but is not limited to, content that infringes copyrights, is clearly unlawful, contains malware, or facilitates the distribution of malicious software. We assume no responsibility or liability for any User Content stored on our platform by you or any other user. Please note that once User Content is deleted, it may be permanently irretrievable.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-nothing text-text-primary mb-4 tracking-wide">4. Intellectual Property Rights</h2>
              <p className="mb-4">
                When you submit, post, or upload User Content to or through our Services, you grant Null Tools a worldwide, royalty-free, non-exclusive license to use, reproduce, adapt, modify, translate, publish, publicly perform, publicly display, and distribute that User Content. This license is granted solely for the purpose of enabling Null Tools to provide, maintain, and improve the Services for you.
              </p>
              <p className="mb-4">
                Aside from the license granted above, Null Tools does not claim any ownership rights in your User Content. You retain all rights, title, and interest in the User Content you create, upload, submit, post, transmit, share, or display through our Services, including all intellectual property rights (whether registered or unregistered, and regardless of where those rights exist). You are solely responsible for protecting and enforcing your intellectual property rights in your User Content, and Null Tools has no obligation to assist you in doing so.
              </p>
              <p>
                All rights, title, and interest in and to the Services themselves, including all software, technology, designs, text, graphics, pictures, and other materials provided by Null Tools (collectively, "Null Tools Content"), are owned by Null Tools (or its licensors) and are protected by copyright, trademark, patent, trade secret, and other intellectual property laws. These Terms do not grant you any right to use Null Tools' trademarks, service marks, logos, domain names, or other distinctive brand features, except as may be permitted by applicable law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-nothing text-text-primary mb-4 tracking-wide">5. Permitted Use and Restrictions</h2>
              <p className="mb-4">
                Subject to your compliance with these Terms, Null Tools grants you a personal, worldwide, non-transferable, non-sublicensable, non-exclusive, revocable license to access and use the Services solely for your personal or internal business purposes in accordance with these Terms.
              </p>
              <p className="mb-4">The following activities are strictly prohibited:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li>Copying, modifying, creating derivative works from, reverse engineering, disassembling, decompiling, or attempting to extract the source code of the Services or any portion thereof;</li>
                <li>Attempting to disable, bypass, or circumvent any security features, access controls, or technical limitations of the Services;</li>
                <li>Interfering with, disrupting, or attempting to disrupt the operation of the Services or any servers or networks connected to the Services;</li>
                <li>Renting, leasing, lending, selling, reselling, sublicensing, or otherwise commercializing any portion of the Services or providing access to the Services to third parties;</li>
                <li>Using the Services in any manner designed to circumvent payment obligations, usage limits, or quotas;</li>
                <li>Using the Services for the purpose of filing intellectual property infringement claims against Null Tools or developing competing products or services;</li>
                <li>Using automated systems, bots, scrapers, crawlers, or similar tools to access, collect, or extract data from the Services without our express written permission.</li>
              </ul>
              <p className="mb-4">You agree not to use the Services to upload, transmit, distribute, or otherwise make available any User Content that:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li>Encourages, promotes, or facilitates violence, illegal activities, or harmful conduct;</li>
                <li>Infringes upon or violates any intellectual property rights, including copyrights, patents, trademarks, trade secrets, or rights of publicity or privacy belonging to any third party or Null Tools;</li>
                <li>Contains false, misleading, or deceptive information, or impersonates any person or entity, or misrepresents your affiliation with any person or entity;</li>
                <li>Contains content that is harassing, abusive, threatening, defamatory, libelous, obscene, pornographic, or otherwise objectionable or unlawful;</li>
                <li>Is harmful to minors or exploits minors in any way;</li>
                <li>Contains viruses, malware, Trojan horses, worms, time bombs, or other harmful code that could damage, interfere with, or compromise systems, data, or personal information;</li>
                <li>Violates any applicable local, state, national, or international law, regulation, or ordinance, including laws governing export control, unfair competition, anti-discrimination, or false advertising.</li>
              </ul>
              <p>
                If you are prohibited from receiving services under the laws of the United States or any other applicable jurisdiction, you may not use our Services. You confirm that you are at least 13 years of age, as our Services are not intended for children under 13.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-nothing text-text-primary mb-4 tracking-wide">6. Subscription and Payment Terms</h2>
              <p>
                Our Services are available on a free tier with certain usage limitations. Usage beyond these free tier limits may require a paid subscription. For detailed information about our pricing, subscription plans, payment methods, and billing terms, please refer to our pricing page or contact our support team.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-nothing text-text-primary mb-4 tracking-wide">7. Privacy and Data Protection</h2>
              <p className="mb-4">
                Your privacy is important to us. Our collection, use, and protection of your personal information and User Content are governed by our Privacy Policy, available at{' '}
                <Link href="/privacy" className="text-text-primary hover:underline">
                  /privacy
                </Link>
                . By using our Services, you consent to the practices described in our Privacy Policy.
              </p>
              <p>
                You are responsible for ensuring that your use of our Services and any User Content you create complies with all applicable data protection and privacy laws, including specialized regulations such as FERPA, COPPA, HIPAA, GDPR, or other similar laws that may apply to your specific use case. Null Tools is not responsible for your compliance with such laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-nothing text-text-primary mb-4 tracking-wide">8. Service Modifications and Account Termination</h2>
              <p className="mb-4">
                We continuously work to improve and enhance our Services. As part of this ongoing development, we may modify, update, or change the features, functionality, or appearance of our Services at any time, with or without prior notice. These changes may include updates to our fee structure, payment policies, security enhancements, new features, automatic software updates, and other improvements. All such changes will apply to all users and all versions of the Services. Any new features added to our Services will be subject to these Terms unless we specify otherwise.
              </p>
              <p className="mb-4">
                You may cancel your account and terminate your use of the Services at any time through your account settings. Please note that account cancellation does not entitle you to any refunds for fees already paid.
              </p>
              <p className="mb-4">
                We reserve the right, in our sole discretion and without prior notice, to suspend, restrict, or terminate your account or your access to any or all of our Services at any time, for any reason or no reason, including but not limited to violations of these Terms, illegal activity, or abuse of our Services. We will not be liable to you or any third party for any such suspension, restriction, or termination.
              </p>
              <p>
                Before your account is terminated for any reason, you are solely responsible for backing up and exporting any User Content you wish to retain. If we terminate your account for reasons other than your violation of these Terms, we will make reasonable efforts to provide you with an opportunity to retrieve your User Content, subject to our data retention policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-nothing text-text-primary mb-4 tracking-wide">9. Experimental and Beta Features</h2>
              <p>
                From time to time, we may release new features, products, or services that are still in development, testing, or evaluation phases. These may be labeled as "alpha," "beta," "preview," "early access," "experimental," or similar designations. These experimental features may be less stable, reliable, or feature-complete than our standard Services. Use of these experimental features is entirely voluntary and at your own risk. They are provided "as is" and may contain errors, bugs, or other issues that could result in data loss, system failures, or other problems. We make these features available to gather user feedback and improve our Services. By using experimental features, you agree that we may contact you to collect feedback about your experience.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-nothing text-text-primary mb-4 tracking-wide">10. Updates to These Terms</h2>
              <p>
                We may revise, update, or modify these Terms from time to time. We will post the updated Terms on this page and update the "Last Updated" date. These changes may become effective immediately upon posting, and we are not obligated to provide individual notice of changes. It is your responsibility to periodically review these Terms to stay informed of any updates. Your continued use of our Services after any changes to these Terms constitutes your acceptance of the revised Terms. If you do not agree to any changes, you must stop using our Services immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-nothing text-text-primary mb-4 tracking-wide">11. Service Availability and Warranties</h2>
              <p className="mb-4 p-4 bg-card/50 border border-border rounded-lg">
                THE SERVICES ARE PROVIDED TO YOU "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. YOUR USE OF THE SERVICES IS AT YOUR SOLE RISK.
              </p>
              <p className="mb-4">
                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, NULL TOOLS, ITS AFFILIATES, SUBSIDIARIES, AND LICENSORS EXPRESSLY DISCLAIM ALL WARRANTIES, WHETHER EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, AND ANY WARRANTIES ARISING FROM COURSE OF DEALING OR USAGE OF TRADE. NULL TOOLS DOES NOT WARRANT THAT: (A) THE SERVICES WILL MEET YOUR SPECIFIC REQUIREMENTS OR EXPECTATIONS, (B) THE SERVICES WILL BE UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE, (C) THE RESULTS OBTAINED FROM USING THE SERVICES WILL BE ACCURATE, RELIABLE, OR USEFUL, OR (D) ANY ERRORS OR DEFECTS IN THE SERVICES WILL BE CORRECTED.
              </p>
              <p>
                NOTWITHSTANDING THE FOREGOING, NOTHING IN THESE TERMS SHALL EXCLUDE OR LIMIT ANY WARRANTIES OR LIABILITIES THAT CANNOT BE EXCLUDED OR LIMITED UNDER APPLICABLE LAW, INCLUDING CONSUMER PROTECTION LAWS THAT MAY APPLY IN YOUR JURISDICTION.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-nothing text-text-primary mb-4 tracking-wide">12. Limitation of Our Liability</h2>
              <p className="mb-4">
                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, NULL TOOLS, ITS AFFILIATES, SUBSIDIARIES, LICENSORS, AND THEIR RESPECTIVE OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, PUNITIVE, OR EXEMPLARY DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, LOSS OF DATA, LOSS OF GOODWILL, LOSS OF BUSINESS OPPORTUNITIES, OR OTHER INTANGIBLE LOSSES, ARISING OUT OF OR RELATING TO YOUR USE OF OR INABILITY TO USE THE SERVICES, REGARDLESS OF THE THEORY OF LIABILITY (WHETHER IN CONTRACT, TORT, STRICT LIABILITY, OR OTHERWISE) AND EVEN IF NULL TOOLS HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
              </p>
              <p className="mb-4">
                THESE LIMITATIONS SHALL APPLY REGARDLESS OF WHETHER NULL TOOLS HAS BEEN ADVISED OF OR SHOULD HAVE BEEN AWARE OF THE POSSIBILITY OF SUCH DAMAGES, AND NOTWITHSTANDING THE FAILURE OF THE ESSENTIAL PURPOSE OF ANY LIMITED REMEDY.
              </p>
              <p>
                SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF INCIDENTAL OR CONSEQUENTIAL DAMAGES, SO THE ABOVE LIMITATIONS MAY NOT APPLY TO YOU. IN NO EVENT SHALL NULL TOOLS' TOTAL AGGREGATE LIABILITY TO YOU FOR ALL CLAIMS, DAMAGES, LOSSES, AND CAUSES OF ACTION (WHETHER IN CONTRACT, TORT, INCLUDING NEGLIGENCE, OR OTHERWISE) EXCEED THE GREATER OF: (A) THE AMOUNT YOU HAVE PAID TO NULL TOOLS FOR THE SERVICES IN THE TWELVE (12) MONTHS IMMEDIATELY PRECEDING THE EVENT GIVING RISE TO THE LIABILITY, OR (B) ONE HUNDRED U.S. DOLLARS ($100.00).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-nothing text-text-primary mb-4 tracking-wide">13. Your Indemnification Obligations</h2>
              <p>
                You agree to defend, indemnify, and hold harmless Null Tools, its parent companies, subsidiaries, affiliates, officers, directors, employees, contractors, agents, licensors, suppliers, and partners (collectively, the "Null Tools Parties") from and against any and all claims, demands, liabilities, damages, losses, costs, and expenses, including reasonable attorneys' fees, arising out of or relating to: (a) your breach or violation of these Terms, (b) your use or misuse of the Services, (c) your violation of any applicable laws, rules, or regulations in connection with your use of the Services, or (d) any User Content you upload, transmit, or distribute through the Services, including any claims that such User Content infringes upon or violates the rights of any third party.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-nothing text-text-primary mb-4 tracking-wide">14. Copyright Infringement and DMCA</h2>
              <p className="mb-4">
                We respect intellectual property rights and expect our users to do the same. In compliance with the Digital Millennium Copyright Act ("DMCA"), we have established procedures for addressing claims of copyright infringement. If you believe that content available through our Services infringes your copyright, please provide our designated Copyright Agent with a written notice containing the following information:
              </p>
              <ol className="list-decimal list-inside space-y-2 ml-4 mb-4">
                <li>A clear identification of the copyrighted work you claim has been infringed. If multiple works are involved, provide a representative list.</li>
                <li>A description of the material you claim is infringing, including sufficient detail (such as URLs or file locations) to allow us to locate the material.</li>
                <li>Your contact information, including your name, mailing address, telephone number, and email address. If you are acting on behalf of a company, include your company affiliation.</li>
                <li>A statement that you have a good faith belief that the disputed use is not authorized by the copyright owner, its agent, or the law.</li>
                <li>A statement, made under penalty of perjury, that the information in your notice is accurate and that you are the copyright owner or authorized to act on behalf of the copyright owner.</li>
                <li>Your physical or electronic signature.</li>
              </ol>
              <p className="mb-4">Please send your DMCA notice to our Copyright Agent:</p>
              <p className="ml-4 p-4 bg-card/50 border border-border rounded-lg">
                Copyright Agent<br />
                Null Tools<br />
                Email: <a href="mailto:legal@nulltools.xyz" className="text-text-primary hover:underline">legal@nulltools.xyz</a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-nothing text-text-primary mb-4 tracking-wide">15. Third-Party Services and Content</h2>
              <p className="mb-4">
                Our Services may include links to, integrate with, or provide access to third-party websites, services, applications, content, or resources (collectively, "Third-Party Services"). Your use of any Third-Party Services is at your own risk and subject to the terms and conditions of those third parties. We do not endorse, control, or assume responsibility for any Third-Party Services.
              </p>
              <p>
                You acknowledge that: (a) we are not responsible for the availability, accuracy, or content of any Third-Party Services, (b) we have no liability to you or any third party for any harm, loss, or damage arising from your use of or reliance on Third-Party Services, and (c) we make no representations or warranties regarding Third-Party Services and do not guarantee that we will continue to provide access to any particular Third-Party Services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-nothing text-text-primary mb-4 tracking-wide">16. User Feedback and Suggestions</h2>
              <p>
                We welcome your feedback, suggestions, comments, and ideas about how to improve our Services. If you choose to provide us with feedback, you acknowledge and agree that: (a) your feedback is provided voluntarily and without any expectation of compensation, (b) we are under no obligation to use, implement, or respond to your feedback, (c) we may use, modify, and incorporate your feedback into our Services without any obligation to you, (d) your feedback is not confidential, and we may disclose it to anyone for any purpose, and (e) your feedback does not contain any terms that would require us to grant you any rights or impose any obligations on us with respect to products or services that incorporate your feedback.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-nothing text-text-primary mb-4 tracking-wide">17. Dispute Resolution and Arbitration</h2>
              <p className="mb-4">
                This section contains important information about how disputes between you and Null Tools will be resolved. Please read it carefully.
              </p>
              <p className="mb-4">
                These Terms are governed by the laws of Poland, without regard to its conflict of law principles. Except as set forth below, any dispute, controversy, or claim arising out of or relating to these Terms or your use of the Services shall be resolved exclusively through binding arbitration in accordance with Polish arbitration law. The arbitration shall be conducted in Poland by a single arbitrator appointed in accordance with applicable arbitration rules. The following exceptions apply: (a) small claims court actions (where the amount in controversy is within the jurisdictional limits of small claims court) may be brought in the court located in the jurisdiction of your billing address, and (b) either party may seek injunctive or other equitable relief in any court of competent jurisdiction to protect intellectual property rights or to prevent irreparable harm.
              </p>
              <p className="mb-4">
                YOU AND NULL TOOLS AGREE THAT ANY DISPUTE RESOLUTION PROCEEDING, WHETHER IN ARBITRATION OR COURT, WILL BE CONDUCTED ONLY ON AN INDIVIDUAL BASIS AND NOT AS A CLASS, CONSOLIDATED, OR REPRESENTATIVE ACTION. YOU EXPRESSLY WAIVE ANY RIGHT TO PARTICIPATE IN A CLASS ACTION OR REPRESENTATIVE PROCEEDING. You also agree that any legal action against Null Tools must be commenced within one (1) year after the cause of action arises, or such action is permanently barred.
              </p>
              <p>
                You have the right to opt out of this binding arbitration requirement by sending a written opt-out notice to legal@nulltools.xyz within thirty (30) days of first accepting these Terms. Your opt-out notice must include your full legal name and a clear statement of your intent to opt out of binding arbitration. If you do not opt out within this timeframe, you will be bound by the arbitration provisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-nothing text-text-primary mb-4 tracking-wide">18. General Provisions</h2>
              <p className="mb-4">
                These Terms, together with our Privacy Policy, constitute the complete and exclusive agreement between you and Null Tools regarding the Services and supersede all prior or contemporaneous agreements, understandings, or communications, whether written or oral, relating to the subject matter of these Terms. These Terms may only be modified: (a) by a written agreement signed by both parties, or (b) by our posting of revised Terms on this page.
              </p>
              <p className="mb-4">
                If any provision of these Terms is found to be invalid, illegal, or unenforceable by a court of competent jurisdiction, that provision shall be modified to the minimum extent necessary to make it valid and enforceable, or if modification is not possible, it shall be severed from these Terms. The invalidity of any provision shall not affect the validity and enforceability of the remaining provisions.
              </p>
              <p className="mb-4">
                Our failure to enforce any right or provision of these Terms shall not constitute a waiver of such right or provision. Any waiver must be in writing and signed by us, and it will only apply to the specific instance for which it is given. You may not assign, transfer, or delegate these Terms or any of your rights or obligations hereunder, in whole or in part, without our prior written consent. We may assign these Terms or any of our rights or obligations hereunder without your consent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-nothing text-text-primary mb-4 tracking-wide">19. Contact Information</h2>
              <p className="mb-4">
                If you have questions, concerns, or complaints about these Terms or our Services, or if you need to submit a legal notice or claim, please contact us at:
              </p>
              <p className="ml-4 p-4 bg-card/50 border border-border rounded-lg">
                Null Tools<br />  
                Email: <a href="mailto:legal@nulltools.xyz" className="text-text-primary hover:underline">legal@nulltools.xyz</a><br />
                Email: <a href="mailto:contact@nulltools.xyz" className="text-text-primary hover:underline">contact@nulltools.xyz</a>
              </p>
              <p className="mt-4">
                When contacting us, please provide a clear description of your question, concern, or complaint, and specify which aspects of our Services your inquiry relates to. This will help us respond to you more effectively.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}