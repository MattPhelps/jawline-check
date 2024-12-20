export default function TermsPage() {
    return (
      <div className="container mx-auto px-4 py-8 lg:px-8 lg:py-16">
        <h1 className="text-4xl font-bold mb-6">Terms and Conditions</h1>
        <p className="mb-4 text-lg">
          Welcome to Roastify! By accessing or using our service, you agree to be bound by these Terms and Conditions.
          If you disagree with any part of these terms, please discontinue use of our service.
        </p>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. General</h2>
          <p className="mb-2">
            Roastify is an AI-powered application intended for entertainment purposes only. Any use of the service
            for inappropriate or harmful activities is strictly prohibited.
          </p>
          <p>
            By using Roastify, you acknowledge that our AI-generated content may be humorous but can sometimes be
            misinterpreted. Use the service responsibly.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. User Responsibilities</h2>
          <p className="mb-2">
            Users must ensure they have the right to upload images and content. By submitting any material, you
            confirm that you own the necessary rights or have obtained permission from the owner.
          </p>
          <p>
            Users must not use the service to promote hate speech, discrimination, or any form of harassment.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Limitation of Liability</h2>
          <p className="mb-2">
            Roastify is provided "as is" without warranties of any kind. We do not guarantee the accuracy or reliability
            of the AI-generated content. Users accept full responsibility for their use of the service.
          </p>
          <p>
            Roastify will not be held liable for any damages resulting from the use or misuse of the service.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Changes to Terms</h2>
          <p>
            We reserve the right to update these Terms and Conditions at any time. Changes will be effective
            immediately upon posting. Continued use of Roastify constitutes your acceptance of the revised terms.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4">5. Contact Us</h2>
          <p>
            If you have any questions or concerns about these Terms and Conditions, please contact us at{" "}
            <a href="mailto:support@roastify.com" className="text-blue-500 hover:underline">support@roastify.com</a>.
          </p>
        </section>
      </div>
    );
  }
  