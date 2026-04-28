'use client';

import { DEMO_USER, MOCK_CONTENT, RECENT_ACTIVITY, STATS } from '@/lib/data';
import { StatCard, Card, CardHeader, CardTitle, CardContent, Badge, Avatar } from '@/components/ui';
import { clsx } from 'clsx';
import { tailwindMerge } from 'tailwind-merge';

const Page = () => {
  const greeting = `Good morning, ${DEMO_USER.name}`;
  const date = new Date().toLocaleDateString();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{greeting} - {date}</h1>
      <div className="grid grid-cols-4 gap-4 mt-4">
        {STATS.map((stat) => (
          <StatCard key={stat.label} label={stat.label} value={stat.value} />
        ))}
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="col-span-2 lg:col-span-3">
          <Card>
            <CardHeader>
              <CardTitle>Content Library</CardTitle>
            </CardHeader>
            <CardContent>
              <table className="w-full table-auto">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-2">Title</th>
                    <th className="px-4 py-2">Type</th>
                    <th className="px-4 py-2">Status</th>
                    <th className="px-4 py-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {MOCK_CONTENT.map((content) => (
                    <tr key={content.id} className={clsx({ 'bg-gray-100': content.id % 2 === 0 })}>
                      <td className="px-4 py-2">{content.title}</td>
                      <td className="px-4 py-2">{content.type}</td>
                      <td className="px-4 py-2">
                        <Badge variant="success" size="sm">
                          {content.status}
                        </Badge>
                      </td>
                      <td className="px-4 py-2">
                        <button className="btn btn-sm btn-primary">View</button>
                        <button className="btn btn-sm btn-primary">Edit</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>
        </div>
        <div className="col-span-1 lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <ul>
                {RECENT_ACTIVITY.map((activity) => (
                  <li key={activity.id} className="flex items-center py-2">
                    <Avatar initials={activity.user.initials} />
                    <span className="ml-2">{activity.action}</span>
                    <span className="ml-2 text-gray-500">{activity.timeAgo}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4 mt-4">
        <button className="btn btn-primary">New Contract</button>
        <button className="btn btn-primary">Send Invoice</button>
        <button className="btn btn-primary">Create Content</button>
        <button className="btn btn-primary">View Reports</button>
      </div>
    </div>
  );
};

export default Page;