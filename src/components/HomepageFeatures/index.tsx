import React from 'react';

const features = [
  {
    title: 'Notifications',
    description:
      'Easily get notified when a form is submitted, you only have to provide some SMTP credentials.',
    icon: (
      <svg
        aria-hidden="true"
        fill="none"
        stroke="currentColor"
        className="flex-none w-full h-full text-emerald-400"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: 'Easy integration',
    description:
      'Just copy and paste the HTML snippet and you are ready to go. No need to install anything. Works with React out of the box.',
    icon: (
      <svg
        className="flex-none w-full h-full text-emerald-400"
        aria-hidden="true"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: 'Own everything',
    description:
      'Infinite forms, infinite submissions, infinite storage. You own everything. Welcome to open source.',
    icon: (
      <svg
        className="flex-none w-full h-full text-emerald-400"
        aria-hidden="true"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

const HomepageFeatures = (): JSX.Element => {
  return (
    <section className="py-24 sm:py-32">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="max-w-2xl mx-auto lg:text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-emerald-400">
            Features
          </h2>
          <p className="text-3xl font-bold tracking-tight sm:text-4xl">With all the essentials</p>
          <p className="text-base leading-6 md:leading-8 md:text-lg text-zinc-500 dark:text-zinc-300">
            Notifications, spam protection and more. We're working on more features but in the
            meantime you can already use NiekForm for your projects.
          </p>
        </div>
        <div className="max-w-2xl mx-auto mt-16 sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className="flex flex-col">
                <dt className="flex items-center text-base font-semibold leading-7 gap-x-3">
                  <div className="w-10 h-10 p-2 rounded bg-emerald-50">{feature.icon}</div>
                  <span>{feature.title}</span>
                </dt>
                <dd className="!mx-0 flex flex-col flex-auto mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-300">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default HomepageFeatures;
