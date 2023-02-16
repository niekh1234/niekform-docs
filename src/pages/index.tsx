import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Logo from '../components/App/Logo';
import Link from '@docusaurus/Link';
import HomepageFeatures from '../components/HomepageFeatures';

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`Open source headless form builder for developers - ${siteConfig.title}`}
      description="Welcome to NiekForm, a next generation open-source form builder for developers that can integrate everywhere."
    >
      <main className="px-4 py-16">
        <section className="max-w-5xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <Logo size={32}></Logo>
            <div className="px-4 py-2 mt-8 text-xs font-bold rounded-full bg-emerald-50 dark:bg-zinc-700">
              We just released{' '}
              <a href="https://github.com/niekh1234/niekform/releases/tag/v0.2.0">v0.2.0</a> 🎉
            </div>
            <h1 className="max-w-xl mt-2 text-4xl font-black leading-tight lg:text-5xl xl:text-6xl">
              A solid headless form builder, but open source 🤯
            </h1>
            <h2 className="max-w-lg text-sm text-gray-600 dark:text-gray-200 md:text-base">
              NiekForm is a next generation open-source form builder for developers that can
              integrate everywhere.
            </h2>

            <div className="flex flex-col w-full mt-6 space-y-2 md:mt-12 md:w-auto md:flex-row md:space-y-0 md:space-x-4">
              <Link
                href="/docs/intro"
                className="px-6 py-2 text-lg text-white border-none rounded md:w-auto md:py-3 md:px-8 bg-emerald-500 hover:no-underline hover:text-white hover:bg-emerald-400"
              >
                Get started
              </Link>

              <Link
                href="https://demo.niekform.com"
                className="px-6 py-2 text-lg text-gray-600 rounded dark:text-white md:py-3 md:px-8 hover:text-white hover:no-underline hover:bg-emerald-400"
              >
                View demo
              </Link>
            </div>
          </div>
          <div className="p-4 mt-16 bg-gray-300 border-2 rounded dark:bg-zinc-700 border-zinc-300">
            <video
              className="object-contain shadow-xl"
              width="100%"
              height="100%"
              src="https://user-images.githubusercontent.com/34717999/217865581-75a38fb4-0881-4ad9-81a0-3beb00243b12.mp4"
              controls
            ></video>
          </div>
        </section>

        <HomepageFeatures></HomepageFeatures>

        <section className="">
          <div className="pb-24 mx-auto max-w-7xl sm:px-6 sm:pb-32 lg:px-8">
            <div className="relative px-6 py-16 overflow-hidden text-center shadow-2xl md:py-24 bg-zinc-900 isolate sm:rounded-3xl sm:px-16">
              <h2 className="max-w-2xl mx-auto text-4xl font-bold tracking-tight text-white">
                Ready to go?
              </h2>
              <p className="max-w-xl mx-auto mt-6 text-lg leading-8 text-gray-300">
                Head over to our documentation and we'll guide you into setting up your very own
                NiekForm instance. Need help? Join our Discord server!
              </p>
              <div className="flex flex-col items-center justify-center mt-10 space-y-4 md:space-y-0 md:flex-row gap-x-6">
                <Link
                  href="/docs/intro"
                  className="w-full md:w-auto hover:no-underline rounded-md bg-white px-3.5 py-1.5 text-base font-semibold leading-7 text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Get started
                </Link>
                <Link
                  href="https://demo.niekform.com"
                  className="text-base font-semibold leading-7 text-white hover:no-underline hover:text-white"
                >
                  Check out the demo <span aria-hidden="true">→</span>
                </Link>
              </div>
              <svg
                viewBox="0 0 1024 1024"
                className="absolute top-1/2 left-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
                aria-hidden="true"
              >
                <circle
                  cx={512}
                  cy={512}
                  r={512}
                  fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)"
                  fillOpacity="0.7"
                />
                <defs>
                  <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                    <stop stopColor="#047857" />
                    <stop offset={1} stopColor="#4ade80" />
                  </radialGradient>
                </defs>
              </svg>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
