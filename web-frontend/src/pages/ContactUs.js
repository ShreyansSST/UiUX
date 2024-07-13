import React from 'react';

const ContactUs = () => {
  return (
    <div className="relative bg-gray-100 overflow-hidden">
      <div className="relative px-6 lg:px-8">
        <div className="mx-auto max-w-screen-xl">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="w-full md:w-1/2 py-16">
              <div className="space-y-8">
                <div className="text-3xl font-semibold text-gray-900">
                  Get in Touch!
                </div>
                <p className="text-gray-600 text-base leading-relaxed">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                  eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                  voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
                  sequi nesciunt.
                </p>
                <div className="flex space-x-4">
                  <a
                    href="mailto:info@yourcompany.com"
                    className="inline-flex items-center px-4 py-2 text-base font-medium text-center text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:ring-4 focus:ring-blue-500 shadow-sm"
                  >
                    Email Us
                  </a>
                  <a
                    href="tel:+1234567890"
                    className="inline-flex items-center px-4 py-2 text-base font-medium text-center text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-500 shadow-sm"
                  >
                    Call Us
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-end">
              <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
                <form className="space-y-4">
                  <div className="flex flex-col">
                    <label htmlFor="name" className="text-sm font-medium text-gray-700">
                      Full Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="John Doe"
                      className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-200"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="johndoe@example.com"
                      className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-200"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="message" className="text-sm font-medium text-gray-700">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows="4"
                      placeholder="Your message"
                      className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-200"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center px-4 py-2 text-base font-medium text-center text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:ring-4 focus:ring-blue-500 shadow-sm"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
