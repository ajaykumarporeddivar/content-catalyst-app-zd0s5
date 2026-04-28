import { MOCK_CONTENT } from '../lib/data';

const Home = () => {
  return (
    <div>
      <h1>Content Calendar</h1>
      <ul>
        {MOCK_CONTENT.map(content => (
          <li key={content.id}>{content.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;