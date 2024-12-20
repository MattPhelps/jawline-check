export const metadata = {
    title: "Privacy Policy - Roastify",
    description:
      "Learn how we collect, use, and protect your personal information at Roastify.",
  };
  
  export default function PrivacyPolicy() {
    return (
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
        <p className="text-lg mb-4">
          Welcome to Roastify! Your privacy is important to us. This Privacy
          Policy explains how we collect, use, and protect your information.
        </p>
  
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
          <p className="mb-2">
            We may collect the following types of information:
          </p>
          <ul className="list-disc pl-6">
            <li>Personal details like your name and email address.</li>
            <li>
              Images or other content that you upload to use our services.
            </li>
            <li>
              Analytical data, such as usage patterns and browser information.
            </li>
          </ul>
        </section>
  
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
          <p>
            We use your information for purposes such as:
          </p>
          <ul className="list-disc pl-6">
            <li>Providing and improving our services.</li>
            <li>
              Personalizing your experience, including delivering customized AI
              roasts.
            </li>
            <li>Analyzing usage trends to improve our platform.</li>
          </ul>
        </section>
  
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
          <p>
            You have the right to:
          </p>
          <ul className="list-disc pl-6">
            <li>Access the personal information we hold about you.</li>
            <li>
              Request correction or deletion of your personal information.
            </li>
            <li>Opt-out of data collection and analytics tracking.</li>
          </ul>
        </section>
  
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
          <p>
            We implement robust measures to protect your data, including
            encryption and secure storage methods. However, no online platform can
            guarantee complete security.
          </p>
        </section>
  
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. The latest
            version will always be available on this page.
          </p>
        </section>
  
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us
            at{" "}
            <a href="mailto:support@roastify.com" className="text-blue-500">
              support@roastify.com
            </a>
            .
          </p>
        </section>
      </div>
    );
  }
  