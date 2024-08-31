import React from 'react';
import Navbar from './components/Navbar';
import './globals.css';

export const metadata = {
  title: 'My Portfolio',
  description: 'Welcome to my personal portfolio website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
