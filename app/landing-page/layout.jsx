// app/landing-page/layout.js
import Navbar from '../../components/Navbar';
import RootLayout from '../layout'; // Importer le layout global

export default function LandingPageLayout({ children }) {
  return (
    <RootLayout showSidebar={false}>
      <Navbar />
      <main>{children}</main>
    </RootLayout>
  );
}
