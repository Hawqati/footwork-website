import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: { default: 'FOOTWORK | Dutch Football Performance Academy', template: '%s | FOOTWORK' },
  description: 'FOOTWORK in ’t Gooi: voetbal, kickboxing-inspired performance en fysieke ontwikkeling voor jonge voetballers.',
};

export default function RootLayout({ children }) {
  return <html lang="nl"><body><Header/><main>{children}</main><Footer/></body></html>;
}
