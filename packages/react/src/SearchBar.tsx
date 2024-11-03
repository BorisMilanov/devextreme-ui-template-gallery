
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Workbook } from 'exceljs';
import 'devextreme/dist/css/dx.light.css'
import { useScreenSize } from './utils/media-query';
import { getTasks, getFilteredTasks } from 'dx-template-gallery-data';

import TaskFormDetails from './components/TaskFormDetails';
import FormPopup from './components/FormPopup';
import TaskListGrid from './components/TaskListGrid';
import LoadPanel from 'devextreme-react/load-panel';
import Button from 'devextreme-react/button';
import TextBox from 'devextreme-react/text-box';
import Tabs from 'devextreme-react/tabs';
import Toolbar, { Item } from 'devextreme-react/toolbar';
import { exportDataGrid as exportDataGridXSLX } from 'devextreme/excel_exporter';
import notify from 'devextreme/ui/notify';
import './planning-task-list.scss';

const listsData = ['List'];

export const SearchBar = () => {
  const gridRef = useRef(null);
  const [view, setView] = useState(listsData[0]);
  const [index, setIndex] = useState(0);
  const [gridData, setGridData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formTaskInitData, setFormTaskInitData] = useState({ ...newTaskDefaults });
  const [popupVisible, setPopupVisible] = useState(false);

  const { isXSmall } = useScreenSize();

  const isDataGrid = view === listsData[0];
  let newTaskData = { ...newTaskDefaults };

  const changePopupVisibility = useCallback((isVisible) => {
    setPopupVisible(isVisible);
  }, []);

  useEffect(() => {
    Promise.all([getTasks(), getFilteredTasks()])
      .then(([tasks, filteredTasks]) => {
        setGridData(tasks);
        setFilteredData(filteredTasks);
        setLoading(false);
      })
      .catch((error) => console.error('Error fetching tasks:', error));
  }, []);

  const onSaveClick = () => {
    notify(
      {
        message: `New task "${newTaskData.text}" saved`,
        position: { at: 'bottom center', my: 'bottom center' },
      },
      'success'
    );
    setFormTaskInitData({ ...newTaskDefaults });
  };

  const onDataChanged = useCallback((data) => {
    newTaskData = data;
  }, []);

  const onTabClick = useCallback((e) => {
    setView(e.itemData || '');
    setIndex(listsData.findIndex((d) => d === e.itemData));
  }, []);

  const onAddTaskClick = useCallback(() => {
    setFormTaskInitData({ ...newTaskDefaults });
    setPopupVisible(true);
  }, []);

  const refresh = useCallback(() => {
    if (isDataGrid && gridRef.current) {
      gridRef.current.instance.refresh();
    }
  }, [isDataGrid]);

  const showColumnChooser = useCallback(() => {
    if (gridRef.current) {
      gridRef.current.instance.showColumnChooser();
    }
  }, []);

  const exportToXSLX = useCallback(() => {
    const workbook = new Workbook();
    const worksheet = workbook.addWorksheet('Main sheet');

    exportDataGridXSLX({
      component: gridRef.current?.instance,
      worksheet,
      autoFilterEnabled: true,
    }).then(() => {
      workbook.xlsx.writeBuffer().then((buffer) => {
        saveAs(new Blob([buffer], { type: 'application/octet-stream' }), 'DataGrid.xlsx');
      });
    });
  }, []);

  const search = useCallback((e) => {
    gridRef.current?.instance.searchByText(e.component.option('text') || '');
  }, []);

  const getTabsWidth = useCallback(() => {
    return isXSmall ? 220 : 'auto';
  }, [isXSmall]);

  return (
    <div className="view-wrapper view-wrapper-task-list list-page">
      <Toolbar className="toolbar-common theme-dependent">
        <Item location="before">
          <span className="toolbar-header">Tasks</span>
        </Item>
        <Item location="before" widget="dxTabs">
          <Tabs
            dataSource={listsData}
            width={getTabsWidth()}
            selectedIndex={index}
            scrollByContent
            showNavButtons={false}
            onItemClick={onTabClick}
          />
        </Item>
        <Item location="after" widget="dxButton" locateInMenu="auto">
          <Button icon="plus" text="Add Task" type="default" stylingMode="contained" onClick={onAddTaskClick} />
        </Item>
        <Item location="after" widget="dxButton" showText="inMenu" locateInMenu="auto">
          <Button icon="refresh" text="Refresh" stylingMode="text" onClick={refresh} />
        </Item>
        <Item location="after" widget="dxButton" showText="inMenu" locateInMenu="auto" disabled={!isDataGrid}>
          <Button icon="columnchooser" text="Column Chooser" stylingMode="text" onClick={showColumnChooser} />
        </Item>
        <Item location="after" locateInMenu="auto">
          <div className="separator" />
        </Item>
        <Item location="after" widget="dxButton" showText="inMenu" locateInMenu="auto" disabled={!isDataGrid}>
          <Button icon="exportxlsx" text="Export To XSLX" stylingMode="text" onClick={exportToXSLX} />
        </Item>
        <Item location="after" widget="dxTextBox" locateInMenu="auto" disabled={!isDataGrid}>
          <TextBox mode="search" placeholder="Task Search" onInput={search} />
        </Item>
      </Toolbar>
      {loading && <LoadPanel container=".content" showPane={false} visible position={{ of: '.content' }} />}
      {!loading && isDataGrid && <TaskListGrid dataSource={gridData} ref={gridRef} />}
      <FormPopup title="New Task" visible={popupVisible} setVisible={changePopupVisibility} onSave={onSaveClick}>
        <TaskFormDetails subjectField data={formTaskInitData} editing onDataChanged={onDataChanged} />
      </FormPopup>
    </div>
  );
};
