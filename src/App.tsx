import { DemoUser } from '../lib/data';
import { Analytics } from '../lib/types';

const App = () => {
  return (
    <div>
      <h1>Content Catalyst</h1>
      <p>Welcome, {DemoUser.email}!</p>
      <p>Total Content: {100}</p>
      <p> Growth Rate: 10%</p>
      <p>Monthly Engagement: 1000</p>
      <p>Active Users: 500</p>
    </div>
  );
};

export default App;