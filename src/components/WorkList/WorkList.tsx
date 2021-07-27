import WorkItem from "components/WorkItem";
import { IWorkItem } from "types/work";
import React from 'react';

interface WorkListProps {
  works: IWorkItem[];
}

const WorkList: React.FC<WorkListProps> = ({ works }) => {
  return (
    <div className="grid-list D(f) Flw(w)" data-packery="{ &quot;itemSelector&quot;: &quot;.grid-list-item&quot;, &quot;gutter&quot;: 2 }">
      {works.map((work, i) => (
        <WorkItem key={i} work={work} index={i} />
      ))}
    </div>
  )
}

export default WorkList;
