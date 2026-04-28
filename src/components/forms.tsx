'use client';
import { useState } from 'react';
import { Input, Button } from '@/components/ui';
import { classNames } from 'clsx';
import { lucideCheck, lucideX } from 'lucide-react';
import { FilterState } from '@/lib/types';

export const CreateContentForm = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [type, setType] = useState('');
  const [success, setSuccess] = useState(false);
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('');
  const [dateRange, setDateRange] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!title || !body || !type) return;
    // Submit the form data to the API
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      setTitle('');
      setBody('');
      setType('');
    }, 2000);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleStatus = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStatus(e.target.value);
  };

  const handleDateRange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDateRange(e.target.value);
  };

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold">Create Content</h2>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label className="mb-2" htmlFor="title">
            Title
          </label>
          <Input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="flex flex-col mt-4">
          <label className="mb-2" htmlFor="body">
            Body
          </label>
          <Input
            id="body"
            type="text"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>
        <div className="flex flex-col mt-4">
          <label className="mb-2" htmlFor="type">
            Type
          </label>
          <select
            id="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full p-2 border border-gray-200 rounded"
          >
            <option value="">Select Type</option>
            <option value="article">Article</option>
            <option value="social-media-post">Social Media Post</option>
          </select>
        </div>
        <div className="flex justify-end mt-4">
          <Button type="submit" variant="primary">
            Create Content
          </Button>
        </div>
      </form>
      {success && (
        <div className="bg-green-100 border-l-4 border-green-500 p-4 mb-4">
          <lucideCheck className="text-green-500 w-6 h-6 mr-2" />
          Content created successfully!
        </div>
      )}
    </div>
  );
};

export const FilterBar = () => {
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('');
  const [dateRange, setDateRange] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleStatus = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStatus(e.target.value);
  };

  const handleDateRange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDateRange(e.target.value);
  };

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold">Filter Content</h2>
      <div className="flex flex-col">
        <label className="mb-2" htmlFor="search">
          Search
        </label>
        <Input
          id="search"
          type="text"
          value={search}
          onChange={handleSearch}
        />
      </div>
      <div className="flex flex-col mt-4">
        <label className="mb-2" htmlFor="status">
          Status
        </label>
        <select
          id="status"
          value={status}
          onChange={handleStatus}
          className="w-full p-2 border border-gray-200 rounded"
        >
          <option value="">Select Status</option>
          <option value="published">Published</option>
          <option value="draft">Draft</option>
        </select>
      </div>
      <div className="flex flex-col mt-4">
        <label className="mb-2" htmlFor="dateRange">
          Date Range
        </label>
        <Input
          id="dateRange"
          type="text"
          value={dateRange}
          onChange={handleDateRange}
        />
      </div>
    </div>
  );
};

export const ExportButton = () => {
  const handleExport = () => {
    // Generate CSV from mock data and trigger download
    const csvData = [
      ['Title', 'Body', 'Type'],
      ['Example Title', 'Example Body', 'Article'],
      ['Example Title 2', 'Example Body 2', 'Social Media Post'],
    ].map((row) => row.join(',')).join('\n');
    const csvBlob = new Blob([csvData], { type: 'text/csv' });
    const csvUrl = URL.createObjectURL(csvBlob);
    const csvLink = document.createElement('a');
    csvLink.href = csvUrl;
    csvLink.download = 'content.csv';
    csvLink.click();
  };

  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={handleExport}
    >
      Export as CSV
    </button>
  );
};

export type FilterState = {
  search: string;
  status: string;
  dateRange: string;
};