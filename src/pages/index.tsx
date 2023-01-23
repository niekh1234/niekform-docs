import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Logo from '../components/App/Logo';
import Link from '@docusaurus/Link';

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <main className="px-4 py-16">
        <section>
          <div className="flex flex-col items-center text-center">
            <Logo size={32}></Logo>
            <h3 className="font-bold">Manage your forms like a boss.</h3>
            <p className="max-w-lg text-sm text-gray-600 dark:text-gray-200 md:text-base">
              NiekForm is a next generation open-source form builder for developers that can
              integrate everywhere.
            </p>

            <Link
              href="/docs/intro"
              className="px-6 py-2 mt-2 text-lg text-white border-none rounded md:py-3 md:px-8 bg-emerald-500 hover:no-underline hover:text-white hover:bg-emerald-400"
            >
              Get started
            </Link>
          </div>
          <video
            className="object-contain mt-8"
            width="100%"
            height="100%"
            src="https://user-images.githubusercontent.com/34717999/212096259-0508b13c-b9bf-409b-a1fa-3941a8fc2faf.mov"
            controls
          ></video>
        </section>
      </main>
    </Layout>
  );
}
