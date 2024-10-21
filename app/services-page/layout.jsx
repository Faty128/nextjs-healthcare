import Navbar from '../../components/Navbar';
import RootLayout from '../layout';

export default function ServicesPageLayout({ children }) {
  return (
    <RootLayout showSidebar={false}>
      <Navbar />
      <main>{children}</main>
    </RootLayout>
  );
}
