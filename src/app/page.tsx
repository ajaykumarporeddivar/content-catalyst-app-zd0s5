import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import clsx from 'clsx';
import tailwindMerge from 'tailwind-merge';

export const metadata = {
  title: 'Content Catalyst - Boost Your Content Creation',
  description: 'Create high-quality, engaging content consistently with Content Catalyst',
};

export default function Page() {
  return (
    <div className="max-w-7xl mx-auto p-4 md:p-6 lg:p-8">
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <StatsSection />
      <PricingSection />
      <CTASection />
      <FooterSection />
    </div>
  );
}

function HeroSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
      <div className="text-left">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
          Struggling to create engaging content?
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl">
          Content Catalyst helps social media managers and content creators produce high-quality, engaging content consistently.
        </p>
        <div className="flex flex-wrap gap-4 md:gap-6 lg:gap-8">
          <a
            href="/dashboard"
            className={clsx(
              'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded',
              'md:py-3 md:px-6 lg:py-4 lg:px-8'
            )}
          >
            Get Started Free →
          </a>
          <a
            href="/dashboard"
            className={clsx(
              'bg-gray-200 hover:bg-gray-300 text-gray-600 font-bold py-2 px-4 rounded',
              'md:py-3 md:px-6 lg:py-4 lg:px-8'
            )}
          >
            See Demo →
          </a>
        </div>
      </div>
      <div
        className={clsx(
          'bg-gray-100 rounded-lg p-4 md:p-6 lg:p-8 grid grid-cols-1',
          'md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8'
        )}
      >
        <div
          className={clsx(
            'bg-white rounded-lg shadow-lg p-4 md:p-6 lg:p-8',
            'flex justify-center items-center'
          )}
        >
          <div
            className={clsx(
              'bg-gray-200 rounded-lg p-4 md:p-6 lg:p-8',
              'flex flex-col justify-center items-center'
            )}
          >
            <h2 className="text-lg md:text-xl lg:text-2xl font-bold">
              Content Calendar
            </h2>
            <p className="text-sm md:text-base lg:text-lg">
              Plan and schedule content across multiple social media platforms.
            </p>
          </div>
        </div>
        <div
          className={clsx(
            'bg-white rounded-lg shadow-lg p-4 md:p-6 lg:p-8',
            'flex justify-center items-center'
          )}
        >
          <div
            className={clsx(
              'bg-gray-200 rounded-lg p-4 md:p-6 lg:p-8',
              'flex flex-col justify-center items-center'
            )}
          >
            <h2 className="text-lg md:text-xl lg:text-2xl font-bold">
              AI-Powered Content Generation
            </h2>
            <p className="text-sm md:text-base lg:text-lg">
              Create high-quality content with the power of AI.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FeaturesSection() {
  const features = [
    {
      icon: <ArrowRight />,
      title: 'Content Calendar',
      description:
        'Plan and schedule content across multiple social media platforms.',
    },
    {
      icon: <ArrowRight />,
      title: 'AI-Powered Content Generation',
      description: 'Create high-quality content with the power of AI.',
    },
    {
      icon: <ArrowRight />,
      title: 'Content Library',
      description: 'Store and organize existing content.',
    },
    {
      icon: <ArrowRight />,
      title: 'Collaboration Tools',
      description: 'Role-based access and collaboration features for teams.',
    },
    {
      icon: <ArrowRight />,
      title: 'Analytics and Insights',
      description: 'Get insights into your content\'s performance.',
    },
    {
      icon: <ArrowRight />,
      title: 'Content Optimization',
      description: 'Get recommendations for optimizing your content.',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
      {features.map((feature, index) => (
        <div key={index} className="text-left">
          {feature.icon}
          <h2 className="text-lg md:text-xl lg:text-2xl font-bold">
            {feature.title}
          </h2>
          <p className="text-sm md:text-base lg:text-lg">
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  );
}

function HowItWorksSection() {
  const steps = [
    {
      title: 'Step 1: Sign up for Content Catalyst',
      description:
        'Create an account and get started with Content Catalyst.',
    },
    {
      title: 'Step 2: Set up your content calendar',
      description:
        'Plan and schedule content across multiple social media platforms.',
    },
    {
      title: 'Step 3: Create high-quality content with AI',
      description: 'Use the power of AI to create engaging content.',
    },
    {
      title: 'Step 4: Analyze and optimize your content',
      description: 'Get insights into your content\'s performance and optimize it.',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
      {steps.map((step, index) => (
        <div key={index} className="text-left">
          <h2 className="text-lg md:text-xl lg:text-2xl font-bold">
            {step.title}
          </h2>
          <p className="text-sm md:text-base lg:text-lg">
            {step.description}
          </p>
        </div>
      ))}
    </div>
  );
}

function StatsSection() {
  const stats = [
    {
      title: '10,000+',
      description: 'Users have already joined Content Catalyst.',
    },
    {
      title: '99.9%',
      description: 'Uptime guarantee for our platform.',
    },
    {
      title: '4.5/5',
      description: 'Average rating from satisfied customers.',
    },
    {
      title: '24/7',
      description: 'Support available for all users.',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
      {stats.map((stat, index) => (
        <div key={index} className="text-left">
          <h2 className="text-lg md:text-xl lg:text-2xl font-bold">
            {stat.title}
          </h2>
          <p className="text-sm md:text-base lg:text-lg">
            {stat.description}
          </p>
        </div>
      ))}
    </div>
  );
}

function PricingSection() {
  const tiers = [
    {
      title: 'Free',
      features: [
        'Content Calendar',
        'AI-Powered Content Generation',
        'Content Library',
      ],
    },
    {
      title: 'Pro',
      price: '$49/mo',
      features: [
        'Content Calendar',
        'AI-Powered Content Generation',
        'Content Library',
        'Collaboration Tools',
        'Analytics and Insights',
      ],
    },
    {
      title: 'Enterprise',
      price: 'Custom',
      features: [
        'Content Calendar',
        'AI-Powered Content Generation',
        'Content Library',
        'Collaboration Tools',
        'Analytics and Insights',
        'Content Optimization',
      ],
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
      {tiers.map((tier, index) => (
        <div key={index} className="text-left">
          <h2 className="text-lg md:text-xl lg:text-2xl font-bold">
            {tier.title}
          </h2>
          {tier.price && <p className="text-sm md:text-base lg:text-lg">{tier.price}</p>}
          <ul className="list-disc pl-4 md:pl-6 lg:pl-8">
            {tier.features.map((feature, featureIndex) => (
              <li key={featureIndex} className="text-sm md:text-base lg:text-lg">
                {feature}
              </li>
            ))}
          </ul>
          {tier.title === 'Free' && (
            <a
              href="/dashboard"
              className={clsx(
                'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded',
                'md:py-3 md:px-6 lg:py-4 lg:px-8'
              )}
            >
              Start Free
            </a>
          )}
        </div>
      ))}
    </div>
  );
}

function CTASection() {
  return (
    <div className="text-center">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
        Launch Your Content Creation Journey Today
      </h2>
      <a
        href="/dashboard"
        className={clsx(
          'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded',
          'md:py-3 md:px-6 lg:py-4 lg:px-8'
        )}
      >
        Launch Your Dashboard →
      </a>
    </div>
  );
}

function FooterSection() {
  return (
    <div className="text-center">
      <h2 className="text-lg md:text-xl lg:text-2xl font-bold">
        Content Catalyst
      </h2>
      <p className="text-sm md:text-base lg:text-lg">
        Built with NEXUS OS
      </p>
      <ul className="list-none pl-0 md:pl-0 lg:pl-0 flex justify-center items-center">
        <li className="pr-4 md:pr-6 lg:pr-8">
          <a href="#" className="text-sm md:text-base lg:text-lg">
            Features
          </a>
        </li>
        <li className="pr-4 md:pr-6 lg:pr-8">
          <a href="#" className="text-sm md:text-base lg:text-lg">
            Pricing
          </a>
        </li>
        <li>
          <a href="#" className="text-sm md:text-base lg:text-lg">
            Dashboard
          </a>
        </li>
      </ul>
    </div>
  );
}