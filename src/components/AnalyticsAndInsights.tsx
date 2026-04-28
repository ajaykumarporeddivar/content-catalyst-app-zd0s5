import { MOCK_ANALYTICS } from '../lib/data';

interface Props {
  analytics: { id: string; contentId: string; engagement: number; reach: number; clicks: number }[];
}

const AnalyticsAndInsights = ({ analytics }: Props) => {
  return (
    <div>
      <h2>Analytics and Insights</h2>
      <ul>
        {analytics.map(analytic => (
          <li key={analytic.id}>
            {analytic.contentId} - Engagement: {analytic.engagement}, Reach: {analytic.reach}, Clicks: {analytic.clicks}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AnalyticsAndInsights;