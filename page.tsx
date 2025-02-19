import Image from "next/image"
import Link from "next/link"
import { Menu } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-rose-100 p-4">
        <nav className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-rose-800">
            A Love That Was Never Mine
          </Link>
          <div className="md:hidden">
            <Menu className="h-6 w-6 text-rose-800" />
          </div>
          <ul className="hidden md:flex space-x-4">
            <li>
              <Link href="#about-book" className="text-rose-800 hover:text-rose-600">
                About the Book
              </Link>
            </li>
            <li>
              <Link href="#about-author" className="text-rose-800 hover:text-rose-600">
                About the Author
              </Link>
            </li>
            <li>
              <Link href="#buy" className="text-rose-800 hover:text-rose-600">
                Buy Now
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="flex-grow">
        <section className="bg-rose-50 py-20">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-rose-800 mb-4">A Love That Was Never Mine</h1>
            <p className="text-xl md:text-2xl text-rose-600 mb-8">by Mohit Singh</p>
            <Link
              href="#buy"
              className="bg-rose-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-rose-600 transition duration-300"
            >
              Get Your Copy Now
            </Link>
          </div>
        </section>

        <section id="about-book" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-rose-800 mb-8 text-center">About the Book</h2>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <Image
                  src="/placeholder.svg?height=400&width=300"
                  width={300}
                  height={400}
                  alt="Book Cover"
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-1/2">
                <p className="text-lg text-gray-700 mb-4">
                  What if the person you loved the most was never yours to begin with?

A Love That Was Never Mine is a raw, heart-wrenching journey of one-sided love, unspoken words, and the kind of devotion that lingers long after the person is gone. This is not a typical love story—it’s a confession, a collection of memories too deep to fade, a love that never needed to be returned to feel real.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  He fell for her—completely, endlessly, knowing she could never be his. He prayed, he hoped, he stayed, even when the world told him to move on. But love doesn’t always come with a happy ending. Sometimes, it’s about learning to hold on while letting go, about carrying someone in your heart even when they walk away.
                </p>
                <p className="text-lg text-gray-700">
                  If you’ve ever loved someone who didn’t love you back, if you’ve ever held onto a dream that was never meant to be, this book will feel like a mirror to your soul. Filled with poetry, letters, and moments that will break and heal you at the same time, A Love That Was Never Mine is for everyone who has ever whispered a prayer for the one person they couldn’t have.

Because some loves don’t fade. They echo forever.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="about-author" className="py-16 bg-rose-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-rose-800 mb-8 text-center">About the Author</h2>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  width={300}
                  height={300}
                  alt="Mohit Singh"
                  className="rounded-full shadow-lg"
                />
              </div>
              <div className="md:w-2/3">
                <p className="text-lg text-gray-700 mb-4">
                  Author Bio – Mohit Singh

By day, Mohit Singh is an engineer, weaving logic into automation frameworks, ensuring precision in a world driven by technology. But when the sun sets, his world transforms—his evenings resonate with the strums of his guitar, his voice filling the air with melodies, and his heart pouring into the words that now form his debut book, A Love That Was Never Mine.

A Software Development Engineer in Test (SDET) with 2+ years of experience, Mohit has mastered the art of automation testing, working with tools like Selenium, Protractor, Cucumber BDD, Appium, and Postman. Having contributed to industry giants like Cradlewise Inc. and Genpact, his professional world revolves around precision, efficiency, and perfection—qualities that starkly contrast the raw, imperfect beauty of the love he writes about.

But beyond the structured codes and automated scripts, there exists a man whose heart beats in lyrics, whose nights are filled with whispered prayers, and whose story is one of silent longing. His debut book is not just a collection of words—it’s an offering, a deeply personal journey of one-sided love, lost moments, and the kind of devotion that lingers even when the person is long gone.
          </p>
                <p className="text-lg text-gray-700">
                  
“I never believed, but now I do. Not in gods, but in prayers for you.”
That’s the essence of Mohit’s writing—faith born from longing, love that asks for nothing yet gives everything. In A Love That Was Never Mine, he bares his soul, painting emotions that many have felt but few have dared to voice. It is a book for those who have loved in silence, for the ones who have carried someone in their hearts even when they knew they would never be theirs.

Through the strings of his guitar, through the rhythm of his songs, and now through the ink on these pages, Mohit Singh immortalizes a love that was never his—but in some ways, will always be.      
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="buy" className="py-16 bg-rose-100">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-rose-800 mb-8">Get Your Copy Today</h2>
            <p className="text-xl text-gray-700 mb-8">
              Experience the emotional journey of "A Love That Was Never Mine" and discover the beauty in unspoken
              feelings.
            </p>
            <Link
              href="#"
              className="bg-rose-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-rose-600 transition duration-300"
            >
              Buy Now
            </Link>
          </div>
        </section>
      </main>

      <footer className="bg-rose-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Mohit Singh. All rights reserved.</p>
          <div className="mt-4">
            <Link href="#" className="text-rose-200 hover:text-white mx-2">
              Privacy Policy
            </Link>
            <Link href="#" className="text-rose-200 hover:text-white mx-2">
              Terms of Service
            </Link>
            <Link href="#" className="text-rose-200 hover:text-white mx-2">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

