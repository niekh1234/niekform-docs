import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Logo from '../components/App/Logo';
import Link from '@docusaurus/Link';

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Open source headless for builder - ${siteConfig.title}`}
      description="Welcome to NiekForm, a next generation open-source form builder for developers that can integrate everywhere."
    >
      <main className="px-4 py-16">
        <section className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <Logo size={32}></Logo>
            <h3 className="font-bold">Manage your forms like a boss.</h3>
            <p className="max-w-lg text-sm text-gray-600 dark:text-gray-200 md:text-base">
              NiekForm is a next generation open-source form builder for developers that can
              integrate everywhere.
            </p>

            <div className="flex flex-col w-full mt-2 space-y-2 md:w-auto md:flex-row md:space-y-0 md:space-x-4">
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
          <video
            className="object-contain mt-8"
            width="100%"
            height="100%"
            src="https://user-images.githubusercontent.com/34717999/217865581-75a38fb4-0881-4ad9-81a0-3beb00243b12.mp4"
            controls
          ></video>
        </section>
      </main>
    </Layout>
  );
}
