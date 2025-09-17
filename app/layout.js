import './globals.css'; // Tailwind styles

export const metadata = {
  title: 'Next.js Chat App',
  description: 'A real-time chat app using Next.js & Firebase',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        {children}
      </body>
    </html>
  );
}
