import "./style.scss";
import { useNavHeightContext } from "page/laylout";

const CoursePage = () => {
    const navHeight = useNavHeightContext();

    return (
    <div className="docs-page">
        <section className="docs-title section flex col relative py-10 pt-8">
                <div className="header-space" style={{minHeight: navHeight+32}} />
            <div className="container flex-1 flex col w-full gap-2 text-center">
                <h1>Privacy Policy</h1>
            </div>
            <div className="background-img gradient"></div>
        </section>
        <section className="docs-content section flex col relative py-15">
            <div className="container flex-1 flex col w-full gap-2">

<h3>GraxiDesign Privacy Policy</h3>

<p>This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make a purchase from www.graxidesign.com (the &ldquo;Site&rdquo;).</p>

<h3>PERSONAL INFORMATION WE COLLECT</h3>

<p>When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device. Additionally, as you browse the Site, we collect information about the individual web pages or products that you view, what websites or search terms referred you to the Site, and information about how you interact with the Site. We refer to this automatically-collected information as &ldquo;Device Information.&rdquo;</p>

<p>We collect Device Information using the following technologies:</p>

<ul>
	<li>&ldquo;Cookies&rdquo; are data files that are placed on your device or computer and often include an anonymous unique identifier. For more information about cookies, and how to disable cookies, visit http://www.allaboutcookies.org.</li>
	<li>&ldquo;Log files&rdquo; track actions occurring on the Site, and collect data including your IP address, browser type, Internet service provider, referring/exit pages, and date/time stamps.</li>
	<li>&ldquo;Web beacons,&rdquo; &ldquo;tags,&rdquo; and &ldquo;pixels&rdquo; are electronic files used to record information about how you browse the Site.</li>
</ul>

<p>[[INSERT DESCRIPTIONS OF OTHER TYPES OF TRACKING TECHNOLOGIES USED]]</p>

<p>Additionally when you make a purchase or attempt to make a purchase through the Site, we collect certain information from you, including your name, billing address, shipping address, payment information (including credit card numbers [[INSERT ANY OTHER PAYMENT TYPES ACCEPTED]]), email address, and phone number. We refer to this information as &ldquo;Order Information.&rdquo;</p>

<p>[[INSERT ANY OTHER INFORMATION YOU COLLECT: OFFLINE DATA, PURCHASED MARKETING DATA/LISTS]]</p>

<p>When we talk about &ldquo;Personal Information&rdquo; in this Privacy Policy, we are talking both about Device Information and Order Information.</p>

<h3>HOW DO WE USE YOUR PERSONAL INFORMATION?</h3>

<p>We use the Order Information that we collect generally to fulfill any orders placed through the Site (including processing your payment information, arranging for shipping, and providing you with invoices and/or order confirmations). Additionally, we use this Order Information to:&nbsp;Communicate with you; Screen our orders for potential risk or fraud; and&nbsp; When in line with the preferences you have shared with us, provide you with information or advertising relating to our products or services.</p>

<p>[[INSERT OTHER USES OF ORDER INFORMATION]]</p>

<p>We use the Device Information that we collect to help us screen for potential risk and fraud (in particular, your IP address), and more generally to improve and optimize our Site (for example, by generating analytics about how our customers browse and interact with the Site, and to assess the success of our marketing and advertising campaigns).</p>

<p>[[INSERT OTHER USES OF DEVICE INFORMATION, INCLUDING: ADVERTISING/RETARGETING]]</p>

<h3>SHARING YOUR PERSONAL INFORMATION</h3>

<p>We share your Personal Information with third parties to help us use your Personal Information, as described above. For example, we use Shopify to power our online store--you can read more about how Shopify uses your Personal Information here: https://www.shopify.com/legal/privacy. We also use Google Analytics to help us understand how our customers use the Site--you can read more about how Google uses your Personal Information here: https://www.google.com/intl/en/policies/privacy/. You can also opt-out of Google Analytics here: https://tools.google.com/dlpage/gaoptout.</p>

<p>Finally, we may also share your Personal Information to comply with applicable laws and regulations, to respond to a subpoena, search warrant or other lawful request for information we receive, or to otherwise protect our rights.</p>

<p>[[INCLUDE IF USING REMARKETING OR TARGETED ADVERTISING]]</p>

<h3>BEHAVIOURAL ADVERTISING</h3>

<p>As described above, we use your Personal Information to provide you with targeted advertisements or marketing communications we believe may be of interest to you. For more information about how targeted advertising works, you can visit the Network Advertising Initiative&rsquo;s (&ldquo;NAI&rdquo;) educational page at http://www.networkadvertising.org/understanding-online-advertising/how-does-it-work.</p>

<p>You can opt out of targeted advertising by:<br />
[[<br />
INCLUDE OPT-OUT LINKS FROM WHICHEVER SERVICES BEING USED.<br />
COMMON LINKS INCLUDE:<br />
FACEBOOK - https://www.facebook.com/settings/?tab=ads<br />
GOOGLE - https://www.google.com/settings/ads/anonymous<br />
BING - https://advertise.bingads.microsoft.com/en-us/resources/policies/personalized-ads<br />
]]<br />
Additionally, you can opt out of some of these services by visiting the Digital Advertising Alliance&rsquo;s opt-out portal at: http://optout.aboutads.info/.</p>

<h3>DO NOT TRACK</h3>

<p>Please note that we do not alter our Site&rsquo;s data collection and use practices when we see a Do Not Track signal from your browser.</p>

<p>[[INCLUDE IF LOCATED IN OR IF STORE HAS CUSTOMERS IN EUROPE]]</p>

<h3>YOUR RIGHTS</h3>

<p>If you are a European resident, you have the right to access personal information we hold about you and to ask that your personal information be corrected, updated, or deleted. If you would like to exercise this right, please contact us through the contact information below.<br />
Additionally, if you are a European resident we note that we are processing your information in order to fulfill contracts we might have with you (for example if you make an order through the Site), or otherwise to pursue our legitimate business interests listed above. Additionally, please note that your information will be transferred outside of Europe, including to Canada and the United States.</p>

<h3>DATA RETENTION</h3>

<p>When you place an order through the Site, we will maintain your Order Information for our records unless and until you ask us to delete this information.</p>

<p>[[INSERT IF AGE RESTRICTION IS REQUIRED]]</p>

<h3>MINORS</h3>

<p>The Site is not intended for individuals under the age of [[INSERT AGE]].</p>

<h3>CHANGES</h3>

<p>We may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal or regulatory reasons.</p>

<h3>CONTACT US</h3>

<p>For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e-mail at graxidesign@gmail.com or by mail using the details provided below:</p>

<p>50E, thiruvalluvar nagar,<br />
Vellakovil, Tirupur District,<br />
Tamil nadu, India -&nbsp;638111</p>

            </div>
            <section className="py-8"></section>
        </section>
    </div>
    );
};
export default CoursePage;