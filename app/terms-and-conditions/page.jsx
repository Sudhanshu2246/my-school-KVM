import TermsContent from '@/components/TermsAndConditions/TermsContent';

export const metadata = {
  title: 'Terms and Conditions - Kamla Bal Vidya Mandir',
  description: 'Terms and conditions for students and parents of Kamla Bal Vidya Mandir.',
};

export default function TermsAndConditions() {
  return (
    <main className="min-h-screen bg-gray-50 py-16">
      <TermsContent />
    </main>
  );
}