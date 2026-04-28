import { MOCK_CONTENT } from '../lib/data';

interface Props {
  content: { id: string; title: string }[];
}

const ContentCalendar = ({ content }: Props) => {
  return (
    <div>
      <h2>Content Calendar</h2>
      <ul>
        {content.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ContentCalendar;