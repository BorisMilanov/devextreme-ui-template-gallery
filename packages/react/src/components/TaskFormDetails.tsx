import React from 'react';
import TextBox from 'devextreme-react/text-box';
import SelectBox from 'devextreme-react/select-box';
// Import the articles query hook
import { useGetArticlesQuery } from '../newsApiSlice';

// Define status and priority options
const statusOptions = ['Not Started', 'In Progress', 'Completed'];
const priorityOptions = ['Low', 'Medium', 'High'];

// Define the props for the TaskFormDetails component
interface TaskFormDetailsProps {
  data: {
    text: string;
    status: 'Not Started' | 'In Progress' | 'Completed';
    priority: 'Low' | 'Medium' | 'High';
    dueDate: string;
  };
  onDataChanged: (updatedData: any) => void;
}

const TaskFormDetails: React.FC<TaskFormDetailsProps> = ({ data, onDataChanged }) => {
  // Use the articles query if needed
  const { data: articlesData, error, isLoading } = useGetArticlesQuery('your-search-term');

  if (isLoading) return <div>Loading articles...</div>;
  if (error) return <div>Error fetching articles</div>;

  return (
    <div className="task-form">
      <TextBox
        value={data.text}
        placeholder="Task Name"
        onValueChanged={(e) => onDataChanged({ ...data, text: e.value })}
      />
      <SelectBox
        items={statusOptions}
        value={data.status}
        placeholder="Status"
        onValueChanged={(e) => onDataChanged({ ...data, status: e.value })}
      />
      <SelectBox
        items={priorityOptions}
        value={data.priority}
        placeholder="Priority"
        onValueChanged={(e) => onDataChanged({ ...data, priority: e.value })}
      />
      <TextBox
        value={data.dueDate}
        placeholder="Due Date"
        onValueChanged={(e) => onDataChanged({ ...data, dueDate: e.value })}
      />
    </div>
  );
};

export default TaskFormDetails;