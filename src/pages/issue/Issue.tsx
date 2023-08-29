import React, { useEffect, useState } from 'react';
import IssueCard from '../../components/issue/IssueCard';
import { fakeGetIssue } from '../../api/request';
import { IIssue } from '../../types/issue';
import AdCard from '../../components/ad/AdCard';

export default function Issue() {
  const [issues, setIssues] = useState<IIssue[]>([]);

  useEffect(() => {
    (async () => {
      const data = await fakeGetIssue();
      if (data) {
        setIssues(data);
      }
    })();
  }, []);

  return (
    <div>
      {issues &&
        issues.map((issue, index) => (
          <>
            <IssueCard issue={issue} />
            {(index + 1) % 4 === 0 && <AdCard />}
          </>
        ))}
    </div>
  );
}
