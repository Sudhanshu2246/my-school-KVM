import PrivacyContent from '@/components/PrivacyPolicy/PrivacyContent';

export const metadata = {
  title: 'Privacy Policy - Kamla Bal Vidya Mandir',
  description: 'Our privacy policy explains how we collect, use, and protect your information.',
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-gray-50 py-16">
      <PrivacyContent />
    </main>
  );
}