import { MOCK_COLLABORATORS } from '../lib/data';

interface Props {
  collaborators: { id: string; contentId: string; userId: string; role: string }[];
}

const CollaborationTools = ({ collaborators }: Props) => {
  return (
    <div>
      <h2>Collaboration Tools</h2>
      <ul>
        {collaborators.map(collaborator => (
          <li key={collaborator.id}>
            {collaborator.userId} ({collaborator.role})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CollaborationTools;