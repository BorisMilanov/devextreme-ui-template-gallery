import React, { forwardRef } from 'react';
import DataGrid, { Column, Editing } from 'devextreme-react/data-grid';

interface TaskListGridProps {
  dataSource: any[];
}

const TaskListGrid = forwardRef<DataGrid, TaskListGridProps>(({ dataSource }, ref) => {
  return (
    <DataGrid
      ref={ref}
      dataSource={dataSource}
      showBorders
      columnAutoWidth
      allowColumnReordering
      allowColumnResizing
    >
      <Editing mode="cell" allowUpdating allowDeleting />
      <Column dataField="text" caption="Task" />
      <Column dataField="status" caption="Status" />
      <Column dataField="priority" caption="Priority" />
      <Column dataField="dueDate" caption="Due Date" dataType="date" />
    </DataGrid>
  );
});

export default TaskListGrid;
