import '@progress/kendo-theme-material/dist/all.css';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import type { GridDataStateChangeEvent } from '@progress/kendo-react-grid';
import { process } from '@progress/kendo-data-query';
import type { State } from '@progress/kendo-data-query';
import type { LogSummary } from './models';
import { useState } from 'react';

interface LogSummaryListProps {
  data: LogSummary[];
}

export const LogSummaryList = ({ data }: LogSummaryListProps) => {
  const [dataState, setDataState] = useState<State>({ skip: 0, take: 10 });
  const [result, setResult] = useState(process(data, dataState));

  const handleDataStateChange = (event: GridDataStateChangeEvent) => {
    setDataState(event.dataState);
    setResult(process(data, event.dataState));
  };

  return (
    <Grid
      size="small"
      style={{ height: 600 }}
      data={result}
      filterable={true}
      pageable={true}
      onDataStateChange={handleDataStateChange}
      total={result.total}
      {...dataState}
    >
      <Column field="id" title="Id" />
      <Column field="application" title="Application" />
      <Column field="invocationId" title="Invocation Id" />
      <Column field="eventId" title="Event Id" />
      <Column field="createdOn" title="Created On" />
    </Grid>
  );
};
