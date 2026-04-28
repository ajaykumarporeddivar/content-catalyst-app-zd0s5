'use client';

import { useEffect, useState } from 'react';
import { AiOutlineClockCircle } from 'lucide-react';
import { clsx } from 'clsx';
import { tailwindMerge } from 'tailwind-merge';
import { allContent } from '@/lib/data';

const features = ['Content Calendar', 'AI-Powered Content Generation', 'Content Library'];

const Page = () => {
  const [slug, setSlug] = useState('');
  const [selectedFeature, setSelectedFeature] = useState('');

  useEffect(() => {
    const path = window.location.pathname.split('/');
    setSlug(path.pop() as string);
    setSelectedFeature(features.find((feature) => feature.toLowerCase().replace(' ', '-') === slug));
  }, []);

  const renderFeatureView = () => {
    switch (selectedFeature) {
      case 'Content Calendar':
        return <ContentCalendarView />;
      case 'AI-Powered Content Generation':
        return <AIPoweredContentView />;
      case 'Content Library':
        return <ContentLibraryView />;
      default:
        return <AllFeaturesView />;
    }
  };

  return (
    <div className={clsx('p-4', 'md:p-6', 'lg:p-8')}>
      {renderFeatureView()}
    </div>
  );
};

const ContentCalendarView = () => {
  const [filter, setFilter] = useState('');
  const filteredContent = allContent.filter((content) => content.title.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div className={clsx('flex', 'flex-col', 'items-center', 'justify-center')}>
      <h1 className={clsx('text-2xl', 'font-bold', 'mb-4')}>Content Calendar</h1>
      <input
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Filter by title"
        className={clsx('w-full', 'p-2', 'mb-4', 'border', 'border-gray-300', 'rounded')}
      />
      <table className={clsx('w-full', 'text-left', 'border', 'border-gray-300', 'rounded')}>
        <thead>
          <tr>
            <th className={clsx('p-2', 'border-b', 'border-gray-300')}>Title</th>
            <th className={clsx('p-2', 'border-b', 'border-gray-300')}>Date</th>
          </tr>
        </thead>
        <tbody>
          {filteredContent.map((content) => (
            <tr key={content.id}>
              <td className={clsx('p-2', 'border-b', 'border-gray-300')}>{content.title}</td>
              <td className={clsx('p-2', 'border-b', 'border-gray-300')}>{content.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const AIPoweredContentView = () => {
  const [input, setInput] = useState('');
  const [generatedContent, setGeneratedContent] = useState('');

  const handleGenerateContent = () => {
    // This is a placeholder for AI-powered content generation
    setGeneratedContent(`Generated content based on ${input}`);
  };

  return (
    <div className={clsx('flex', 'flex-col', 'items-center', 'justify-center')}>
      <h1 className={clsx('text-2xl', 'font-bold', 'mb-4')}>AI-Powered Content Generation</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a prompt"
        className={clsx('w-full', 'p-2', 'mb-4', 'border', 'border-gray-300', 'rounded')}
      />
      <button
        onClick={handleGenerateContent}
        className={clsx('p-2', 'bg-blue-500', 'text-white', 'rounded', 'mb-4')}
      >
        Generate Content
      </button>
      <p className={clsx('w-full', 'p-2', 'border', 'border-gray-300', 'rounded')}>{generatedContent}</p>
    </div>
  );
};

const ContentLibraryView = () => {
  const [selectedContent, setSelectedContent] = useState('');

  return (
    <div className={clsx('flex', 'flex-col', 'items-center', 'justify-center')}>
      <h1 className={clsx('text-2xl', 'font-bold', 'mb-4')}>Content Library</h1>
      <ul>
        {allContent.map((content) => (
          <li key={content.id}>
            <button
              onClick={() => setSelectedContent(content.title)}
              className={clsx('p-2', 'bg-blue-500', 'text-white', 'rounded', 'mb-2')}
            >
              {content.title}
            </button>
          </li>
        ))}
      </ul>
      {selectedContent && (
        <p className={clsx('w-full', 'p-2', 'border', 'border-gray-300', 'rounded')}>{selectedContent}</p>
      )}
    </div>
  );
};

const AllFeaturesView = () => {
  return (
    <div className={clsx('grid', 'grid-cols-1', 'md:grid-cols-2', 'lg:grid-cols-3', 'gap-4')}>
      {features.map((feature) => (
        <div key={feature} className={clsx('p-4', 'bg-white', 'border', 'border-gray-300', 'rounded')}>
          <h2 className={clsx('text-lg', 'font-bold', 'mb-2')}>{feature}</h2>
          <p className={clsx('text-sm', 'text-gray-600')}>{`This is the ${feature} feature.`}</p>
          <button
            className={clsx('p-2', 'bg-blue-500', 'text-white', 'rounded', 'mt-4')}
            onClick={() => window.location.pathname = `/dashboard/${feature.toLowerCase().replace(' ', '-')}`}
          >
            View
          </button>
        </div>
      ))}
    </div>
  );
};

export default Page;