import { useEffect, useState } from 'react';
import Page from '../../shared/components/Page';
import PageTitle from '../../shared/components/PageTitle';
import { LogSummaryList } from './LogSummaryList';
import type { LogSummary } from './models';
import logData from '../../data/log-query-highlevel-output.json';

const LogsPage: React.FC = () => {
  const [logSummaryList, setLogSummaryList] = useState<LogSummary[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let cancelled = false;
    const doGetLogSummaryList = async () => {
      if (!cancelled) {
        setLogSummaryList(logData);
        setLoading(false);
      }
    };
    doGetLogSummaryList();
    return () => {
      cancelled = true;
    };
  }, [logSummaryList]);

  return (
    <Page>
      <PageTitle>Logs</PageTitle>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <LogSummaryList data={logSummaryList}></LogSummaryList>
      )}
      <div></div>
    </Page>
  );
};

export default LogsPage;
