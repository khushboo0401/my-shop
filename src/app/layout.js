import './globals.css';
import { ReduxProvider } from '@/providers/ReduxProvider';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'My Shop',
  description: 'An e-commerce store built with Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <Navbar />
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
