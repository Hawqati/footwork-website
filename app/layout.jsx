import './globals.css';

export const metadata = {
  title: 'FOOTWORK | Dutch Football Performance Academy',
  description: 'Voetbal × kickboksen × performance voor jonge voetballers in ’t Gooi.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
      <body>{children}</body>
    </html>
  );
}
