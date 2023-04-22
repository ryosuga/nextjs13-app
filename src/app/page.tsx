import Image from 'next/image'


export default function Home() {
  return (
<>
    <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
            <header className="mb-8 flex items-center justify-between py-4 md:mb-12 md:py-8 xl:mb-16">

                <a href="/" className="text-black-800 inline-flex items-center gap-2.5 text-2xl font-bold md:text-3xl"
                    aria-label="logo">
                    <svg width="95" height="94" viewBox="0 0 95 94" className="h-auto w-6 text-indigo-500"
                        fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M96 0V47L48 94H0V47L48 0H96Z" />
                    </svg>

                    Flowrift
                </a>
                <nav className="hidden gap-12 lg:flex">
                    <a href="#" className="text-lg font-semibold text-indigo-500">Home</a>
                    <a href="#"
                        className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">Features</a>
                    <a href="#"
                        className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">Pricing</a>
                    <a href="#"
                        className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">About</a>
                </nav>
                <a href="#"
                    className="hidden rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:inline-block">Contact
                    Sales</a>

                <button type="button"
                    className="inline-flex items-center gap-2 rounded-lg bg-gray-200 px-2.5 py-2 text-sm font-semibold text-gray-500 ring-indigo-300 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd"
                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                            clip-rule="evenodd" />
                    </svg>

                    Menu
                </button>
            </header>

            <section className="mb-8 flex flex-col justify-between gap-6 sm:gap-10 md:mb-16 md:gap-16 lg:flex-row">
                <div className="flex flex-col justify-center sm:text-center lg:py-12 lg:text-left xl:w-5/12">
                    <p className="mb-4 font-semibold text-indigo-500 md:mb-6 md:text-lg xl:text-xl">Very proud to introduce
                    </p>

                    <h1 className="text-black-800 mb-8 text-4xl font-bold sm:text-5xl md:mb-12 md:text-6xl">Revolutionary
                        way to build the web</h1>

                    <div className="flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-start">
                        <a href="#"
                            className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">Start
                            now</a>

                        <a href="#"
                            className="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base">Take
                            tour</a>
                    </div>
                </div>
                <div className="h-48 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:h-96 xl:w-5/12">
                    <img src="https://images.unsplash.com/photo-1618556450991-2f1af64e8191?auto=format&q=75&fit=crop&w=1000"
                        loading="lazy" alt="Photo by Fakurian Design"
                        className="h-full w-full object-cover object-center" />
                </div>
            </section>

            <section className="flex flex-col items-center justify-between gap-10 border-t pt-8 lg:flex-row lg:gap-8">
                <div className="-mx-6 grid grid-cols-2 gap-4 md:-mx-8 md:flex md:divide-x">
                    <div className="px-6 md:px-8">
                        <span
                            className="block text-center text-lg font-bold text-indigo-500 md:text-left md:text-xl">200</span>
                        <span
                            className="block text-center text-sm font-semibold text-gray-800 md:text-left md:text-base">People</span>
                    </div>

                    <div className="px-6 md:px-8">
                        <span
                            className="block text-center text-lg font-bold text-indigo-500 md:text-left md:text-xl">500+</span>
                        <span
                            className="block text-center text-sm font-semibold text-gray-800 md:text-left md:text-base">Projects</span>
                    </div>

                    <div className="px-6 md:px-8">
                        <span
                            className="block text-center text-lg font-bold text-indigo-500 md:text-left md:text-xl">250+</span>
                        <span
                            className="block text-center text-sm font-semibold text-gray-800 md:text-left md:text-base">Customers</span>
                    </div>

                    <div className="px-6 md:px-8">
                        <span className="block text-center text-lg font-bold text-indigo-500 md:text-left md:text-xl">A
                            couple</span>
                        <span
                            className="block text-center text-sm font-semibold text-gray-800 md:text-left md:text-base">Coffee
                            breaks</span>
                    </div>
                </div>
                <div className="flex items-center justify-center gap-4 lg:justify-start">
                    <span
                        className="text-sm font-semibold uppercase tracking-widest text-gray-400 sm:text-base">Social</span>
                    <span className="h-px w-12 bg-gray-200"></span>

                    <div className="flex gap-4">
                        <a href="#" target="_blank"
                            className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
                            <svg className="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                        </a>

                        <a href="#" target="_blank"
                            className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
                            <svg className="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                            </svg>
                        </a>

                        <a href="#" target="_blank"
                            className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
                            <svg className="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                        </a>

                        <a href="#" target="_blank"
                            className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
                            <svg className="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    </div>
    <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
            <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
                <div>
                    <div className="h-64 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto">
                        <img src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=600&h=750"
                            loading="lazy" alt="Photo by Martin Sanchez"
                            className="h-full w-full object-cover object-center" />
                    </div>
                </div>

                <div className="md:pt-8">
                    <p className="text-center font-bold text-indigo-500 md:text-left">Who we are</p>

                    <h1 className="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6 md:text-left">Our
                        competitive advantage</h1>

                    <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
                        This is a section of some simple filler text, also known as placeholder text. It shares some
                        characteristics of a real written text but is random or otherwise generated. It may be used to
                        display a sample of fonts or generate text for testing. Filler text is dummy text which has no
                        meaning however looks very similar to real text.<br /><br />

                        This is a section of some simple filler text, also known as placeholder text. It shares some
                        characteristics of a real written text but is <a href="#"
                            className="text-indigo-500 underline transition duration-100 hover:text-indigo-600 active:text-indigo-700">random</a>
                        or otherwise generated. It may be used to display a sample of fonts or generate text for
                        testing. Filler text is dummy text which has no meaning however looks very similar to real text.
                    </p>

                    <h2 className="mb-2 text-center text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4 md:text-left">
                        About us</h2>

                    <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">This is a section of some simple filler text, also
                        known as placeholder text. It shares some characteristics of a real written text but is random
                        or otherwise generated. It may be used to display a sample of fonts or generate text for
                        testing. Filler text is dummy text which has no meaning however looks very similar to real text.
                    </p>
                </div>
            </div>
        </div>
    </div>
    <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
            <div className="mb-10 md:mb-16">
                <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Frequently asked
                    questions</h2>

                <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">This is a section of some simple
                    filler text, also known as placeholder text. It shares some characteristics of a real written text
                    but is random or otherwise generated.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 md:gap-8">
                <div className="rounded-lg bg-gray-100 p-5">
                    <div className="mb-4 flex items-center justify-between gap-4 border-b pb-4">
                        <h3 className="font-semibold text-indigo-500 sm:text-lg md:text-xl">How does the product work?</h3>

                        <span
                            className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-300 text-gray-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20"
                                fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                                    clip-rule="evenodd" />
                            </svg>
                        </span>
                    </div>

                    <p className="text-gray-500">This is a section of some simple filler text, also known as placeholder
                        text. It shares some characteristics of a real written text but is random or otherwise
                        generated.</p>
                </div>
                <div className="rounded-lg bg-gray-100 p-5">
                    <div className="mb-4 flex items-center justify-between gap-4 border-b pb-4">
                        <h3 className="font-semibold text-indigo-500 sm:text-lg md:text-xl">What are the features?</h3>

                        <span
                            className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-300 text-gray-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20"
                                fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                                    clip-rule="evenodd" />
                            </svg>
                        </span>
                    </div>

                    <p className="text-gray-500">This is a section of some simple filler text, also known as placeholder
                        text. It shares some characteristics of a real written text but is random or otherwise
                        generated.</p>
                </div>
                <div className="rounded-lg bg-gray-100 p-5">
                    <div className="mb-4 flex items-center justify-between gap-4 border-b pb-4">
                        <h3 className="font-semibold text-indigo-500 sm:text-lg md:text-xl">What about integrations?</h3>

                        <span
                            className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-300 text-gray-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20"
                                fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                                    clip-rule="evenodd" />
                            </svg>
                        </span>
                    </div>

                    <p className="text-gray-500">This is a section of some simple filler text, also known as placeholder
                        text. It shares some characteristics of a real written text but is random or otherwise
                        generated.</p>
                </div>
                <div className="rounded-lg bg-gray-100 p-5">
                    <div className="mb-4 flex items-center justify-between gap-4 border-b pb-4">
                        <h3 className="font-semibold text-indigo-500 sm:text-lg md:text-xl">Is support available?</h3>

                        <span
                            className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-300 text-gray-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20"
                                fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                                    clip-rule="evenodd" />
                            </svg>
                        </span>
                    </div>

                    <p className="text-gray-500">This is a section of some simple filler text, also known as placeholder
                        text. It shares some characteristics of a real written text but is random or otherwise
                        generated.</p>
                </div>
            </div>
        </div>
    </div>
    <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
            <div className="mb-10 md:mb-16">
                <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Blog</h2>

                <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">This is a section of some
                    simple filler text, also known as placeholder text. It shares some characteristics of a real
                    written text but is random or otherwise generated.</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8">
                <a href="#"
                    className="group relative flex h-48 flex-col overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-64 xl:h-96">
                    <img src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600"
                        loading="lazy" alt="Photo by Minh Pham"
                        className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                    <div
                        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent md:via-transparent">
                    </div>

                    <div className="relative mt-auto p-4">
                        <span className="block text-sm text-gray-200">July 19, 2021</span>
                        <h2 className="mb-2 text-xl font-semibold text-white transition duration-100">New trends in Tech
                        </h2>

                        <span className="font-semibold text-indigo-300">Read more</span>
                    </div>
                </a>
                <a href="#"
                    className="group relative flex h-48 flex-col overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-64 xl:h-96">
                    <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&q=75&fit=crop&w=600"
                        loading="lazy" alt="Photo by Lorenzo Herrera"
                        className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                    <div
                        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent md:via-transparent">
                    </div>

                    <div className="relative mt-auto p-4">
                        <span className="block text-sm text-gray-200">April 07, 2021</span>
                        <h2 className="mb-2 text-xl font-semibold text-white transition duration-100">Working with
                            legacy stacks</h2>

                        <span className="font-semibold text-indigo-300">Read more</span>
                    </div>
                </a>
                <a href="#"
                    className="group relative flex h-48 flex-col overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-64 xl:h-96">
                    <img src="https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?auto=format&q=75&fit=crop&w=600"
                        loading="lazy" alt="Photo by Magicle"
                        className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                    <div
                        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent md:via-transparent">
                    </div>

                    <div className="relative mt-auto p-4">
                        <span className="block text-sm text-gray-200">March 15, 2021</span>
                        <h2 className="mb-2 text-xl font-semibold text-white transition duration-100">10 best
                            smartphones for devs</h2>

                        <span className="font-semibold text-indigo-300">Read more</span>
                    </div>
                </a>
                <a href="#"
                    className="group relative flex h-48 flex-col overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-64 xl:h-96">
                    <img src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=600"
                        loading="lazy" alt="Photo by Martin Sanchez"
                        className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                    <div
                        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent md:via-transparent">
                    </div>

                    <div className="relative mt-auto p-4">
                        <span className="block text-sm text-gray-200">January 27, 2021</span>
                        <h2 className="mb-2 text-xl font-semibold text-white transition duration-100">8 High performance
                            Notebooks</h2>

                        <span className="font-semibold text-indigo-300">Read more</span>
                    </div>
                </a>
            </div>
        </div>
    </div>
    <div className="bg-gray-900">
        <footer className="mx-auto max-w-screen-2xl px-4 md:px-8">
            <div className="mb-16 grid grid-cols-2 gap-12 pt-10 md:grid-cols-4 lg:grid-cols-6 lg:gap-8 lg:pt-12">
                <div className="col-span-full lg:col-span-2">
                    <div className="mb-4 lg:-mt-2">
                        <a href="/" className="inline-flex items-center gap-2 text-xl font-bold text-gray-100 md:text-2xl"
                            aria-label="logo">
                            <svg width="95" height="94" viewBox="0 0 95 94" className="h-auto w-5 text-indigo-500"
                                fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M96 0V47L48 94H0V47L48 0H96Z" />
                            </svg>

                            Flowrift
                        </a>
                    </div>
                    <p className="mb-6 text-gray-400 sm:pr-8">Filler text is dummy text which has no meaning however
                        looks
                        very similar to real text.</p>
                    <div className="flex gap-4">
                        <a href="#" target="_blank"
                            className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
                            <svg className="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                        </a>

                        <a href="#" target="_blank"
                            className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
                            <svg className="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                            </svg>
                        </a>

                        <a href="#" target="_blank"
                            className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
                            <svg className="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                        </a>

                        <a href="#" target="_blank"
                            className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
                            <svg className="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div>
                    <div className="mb-4 font-bold uppercase tracking-widest text-gray-100">Products</div>

                    <nav className="flex flex-col gap-4">
                        <div>
                            <a href="#"
                                className="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Overview</a>
                        </div>

                        <div>
                            <a href="#"
                                className="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Solutions</a>
                        </div>

                        <div>
                            <a href="#"
                                className="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Pricing</a>
                        </div>

                        <div>
                            <a href="#"
                                className="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Customers</a>
                        </div>
                    </nav>
                </div>
                <div>
                    <div className="mb-4 font-bold uppercase tracking-widest text-gray-100">Company</div>

                    <nav className="flex flex-col gap-4">
                        <div>
                            <a href="#"
                                className="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600">About</a>
                        </div>

                        <div>
                            <a href="#"
                                className="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Investor
                                Relations</a>
                        </div>

                        <div>
                            <a href="#"
                                className="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Jobs</a>
                        </div>

                        <div>
                            <a href="#"
                                className="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Press</a>
                        </div>

                        <div>
                            <a href="#"
                                className="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Blog</a>
                        </div>
                    </nav>
                </div>
                <div>
                    <div className="mb-4 font-bold uppercase tracking-widest text-gray-100">Support</div>

                    <nav className="flex flex-col gap-4">
                        <div>
                            <a href="#"
                                className="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Contact</a>
                        </div>

                        <div>
                            <a href="#"
                                className="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Documentation</a>
                        </div>

                        <div>
                            <a href="#"
                                className="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Chat</a>
                        </div>

                        <div>
                            <a href="#"
                                className="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600">FAQ</a>
                        </div>
                    </nav>
                </div>
                <div>
                    <div className="mb-4 font-bold uppercase tracking-widest text-gray-100">Legal</div>

                    <nav className="flex flex-col gap-4">
                        <div>
                            <a href="#"
                                className="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Terms
                                of Service</a>
                        </div>

                        <div>
                            <a href="#"
                                className="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Privacy
                                Policy</a>
                        </div>

                        <div>
                            <a href="#"
                                className="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Cookie
                                settings</a>
                        </div>
                    </nav>
                </div>
            </div>

            <div className="border-t border-gray-800 py-8 text-center text-sm text-gray-400">© 2023 - Present Flowrift.
                All rights reserved.</div>
        </footer>
    </div>
    </>
  )
}
