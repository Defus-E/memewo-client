import React from 'react';

import WorkItem, { WorkItemProps } from 'components/WorkItem/WorkItem';

import { IWorkItem } from 'types/work';

import { StyledWorkList } from './styles';

interface WorkListProps {
  works: IWorkItem[];
}

const WorkList: React.FC<WorkListProps & Omit<WorkItemProps, 'index' | 'work'>> = ({ works, ...childProps }) => {
  return (
    <StyledWorkList
      options={{
        itemSelector: '.work-list-item',
        gutter: 2,
      }}
    >
      {works.map((work, i) => (
        <WorkItem key={i} work={work} index={i} {...childProps} />
      ))}
    </StyledWorkList>
  );
};

export default WorkList;
