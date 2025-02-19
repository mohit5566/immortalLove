import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <header className="flex flex-col items-center justify-center text-center py-20 px-5">
        <h1 className="text-4xl font-bold mb-4">A Love That Was Never Mine</h1>
        <p className="text-lg text-gray-700 max-w-xl">A heart-wrenching journey of love, loss, and the devotion that lingers even after someone is gone.</p>
        <div className="mt-6">
          <Button asChild>
            <a href="https://www.amazon.com" target="_blank">Buy Now</a>
          </Button>
        </div>
      </header>

      {/* Book Cover Image */}
      <div className="flex justify-center">
        <Image src="/book-cover.jpg" alt="Book Cover" width={300} height={450} className="rounded-lg shadow-lg" />
      </div>

      {/* Book Description Section */}
      <section className="py-20 px-5 text-center">
        <h2 className="text-3xl font-semibold mb-4">About the Book</h2>
        <p className="max-w-3xl mx-auto text-gray-700">Some loves are not meant to be stories with endings—they are echoes, carried across time, written in the spaces between what was and what will never be. This book is a tribute to those who have loved in silence, held on when they knew they should let go, and carried someone in their heart long after they were gone.</p>
      </section>

      {/* Author Bio Section */}
      <section className="py-20 px-5 bg-gray-200 text-center">
        <h2 className="text-3xl font-semibold mb-4">Meet the Author</h2>
        <p className="max-w-3xl mx-auto text-gray-700">Mohit Singh is an engineer by day, a singer and guitarist by evening, and now, an author. Through the rhythm of his music and the ink of his words, he immortalizes a love that was never his—but in some ways, will always be.</p>
      </section>

      {/* Contact & Social Media Links */}
      <footer className="py-10 px-5 text-center bg-gray-900 text-white">
        <h3 className="text-lg font-semibold">Stay Connected</h3>
        <div className="mt-4 space-x-4">
          <a href="https://www.instagram.com" target="_blank" className="hover:underline">Instagram</a>
          <a href="https://www.twitter.com" target="_blank" className="hover:underline">Twitter</a>
          <a href="mailto:author@example.com" className="hover:underline">Email</a>
        </div>
      </footer>
    </div>
  );
}
