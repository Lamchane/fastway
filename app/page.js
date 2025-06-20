import React from "react";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import Link from "next/link";
import Blurtexture from "./components/blurtexture";
export default function Home() {
  return (
    <section className="overflow-hidden">
      {/* Navbar */}

      <nav className="border-blue-600 bg-gradient-to-r from-blue-600 via-blue-900 to-blue-400">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image
              src="/assets/images/logo.png"
              className="h-10"
              alt="fastway_logo"
            />
            {/* <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Fastway
            </span> */}
          </Link>
        </div>
      </nav>

      {/* end navbar */}
      <section>
        {/* <Blurtexture />
         */}
        {/* <Blurtexture className={"rotate-180"} /> */}
        <div className="p-2 md:py-12 mx-auto max-w-7xl">
          <h2 className="text-5xl font-semibold text-primary text-center">
            Become Our <span className="text-red-700">Customers</span>
          </h2>
          <p className="py-2 text-center text-gray-600 max-w-2xl mx-auto">
            We offer dependable, secure, and convenient services through our
            unique pick&ndash;up and delivery model. Our efficient delivery
            system guarantees same&ndash;day delivery right to your doorstep.
          </p>

          <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="w-full h-[300px] md:h-[600px] overflow-hidden rounded-xl">
              <Image
                src="/assets/images/c1.jpg"
                width={640}
                height={960}
                alt="Contact illustration"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div>
              <form
                action="https://formsubmit.co/info@fastwaycourier.in"
                method="POST"
                className="space-y-8 py-4"
              >
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="name@gmail.com"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900"
                  >
                    Phone number
                  </label>
                  <input
                    type="number"
                    id="phone"
                    name="phone"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="phone number"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="Let us know how we can help you"
                    required
                  />
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900"
                  >
                    Your message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-600 dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Leave a message..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-red-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Send message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="p-4 bg-gradient-to-r from-blue-600 via-blue-900 to-blue-400 text-white">
        <div className="p-4 pt-12 flex flex-col md:flex-row justify-between gap-8 flex-wrap">
          {/* Left: About + Socials */}
          <div>
            <div>
              <Image
                src="/assets/images/logo.png"
                className="h-14 w-40"
                alt="fastway_logo"
              />
            </div>
            <p className="py-2 text-sm">
              Our services ensure prompt, safe, and <br />
              seamless deliveries tailored to your needs.
            </p>
            <div className="py-4 flex space-x-2">
              <div className="p-2 h-8 w-8 bg-rose-600 flex justify-center items-center">
                <Link
                  target="_blank"
                  href="https://www.instagram.com/fastwaycouriersofficial/?igsh=Y3JmNTVmanNoazNk#"
                >
                  <FaInstagram size={20} color="white" />
                </Link>
              </div>
              <div className="p-2 h-8 w-8 bg-blue-700 flex justify-center items-center">
                <Link
                  target="_blank"
                  href="https://www.facebook.com/fastwaycouriersofficial/"
                >
                  <FaFacebookF size={20} color="white" />
                </Link>
              </div>
              <div className="p-2 h-8 w-8 bg-red-700 flex justify-center items-center">
                <FaYoutube size={20} color="white" />
              </div>
            </div>
          </div>

          {/* Right: Contact Info */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Contact Us</h2>

            <div className="p-2 border border-accent w-full max-w-sm">
              <div className="flex space-x-2">
                <div className="p-2 h-8 w-8 bg-red-700 flex justify-center items-center rounded-sm">
                  <IoCallOutline size={20} color="white" />
                </div>
                <div>
                  <h2 className="font-semibold">Call Us</h2>
                  <Link href="tel:+916026802908" className="text-sm">
                    +91 6026802908
                  </Link>
                </div>
              </div>
            </div>

            <div className="p-2 border border-accent w-full max-w-sm">
              <div className="flex space-x-2">
                <div className="p-2 h-8 w-8 bg-red-700 flex justify-center items-center rounded-sm">
                  <MdOutlineEmail size={20} color="white" />
                </div>
                <div>
                  <h2 className="font-semibold">Email Us</h2>
                  <Link
                    href="mailto:info@fastwaycourier.in"
                    className="text-sm"
                  >
                    info@fastwaycourier.in
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="py-4 text-center text-sm">
          © All Copyright & Reserved by &ndash;
          <Link target="_blank" href="https://linktr.ee/GoVisible">
            Govisible
          </Link>
        </div>
      </footer>
    </section>
  );
}
