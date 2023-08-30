import React, { createContext, useContext, useState } from 'react';
import { IIssue } from '../types/issue';
import useFetch from '../hooks/useFetch';
import { getIssues } from '../api/request';
import useIntersect from '../hooks/useIntersect';

interface IssuesContextType {
  issues: IIssue[];
  loading: boolean;
  error: Error | null | undefined;
  targetRef: React.RefObject<HTMLDivElement>;
  // addIssues: (newIssues: IIssue[]) => void;
  // page: number;
  // setPage: React.Dispatch<React.SetStateAction<number>>;
}

const IssuesContext = createContext<IssuesContextType | undefined>(undefined);

export const IssuesProvider = ({ children }: { children: React.ReactNode }) => {
  const { data, loading, error } = useFetch<IIssue[], Error>(getIssues);
  const [issues, setIssues] = useState<IIssue[]>(data || []);
  const [page, setPage] = useState(1);

  const addIssues = (newIssues: IIssue[]) => {
    setIssues((prevIssues) => [...prevIssues, ...newIssues]);
  };

  // TODO: Throttling 적용(해야되나?)
  const targetRef = useIntersect(
    async (entry, observer) => {
      try {
        if (!loading && !error) {
          setPage((prevPage) => prevPage + 1);
          console.log('PAGE ! PAGE ! ', page);
          const newData = await getIssues({ params: { page } });
          addIssues(newData as IIssue[]);
        }
      } catch (error) {
        console.error('An error occurred:', error);
      }
    },
    // { rootMargin: '100px' },
    { threshold: 0.5 },
  );

  return (
    <IssuesContext.Provider value={{ issues, loading, error, targetRef }}>
      {children}
    </IssuesContext.Provider>
  );
};

export const useIssuesContext = () => {
  const context = useContext(IssuesContext);
  if (!context) {
    throw new Error('useIssues must be used within an IssuesProvider');
  }
  return context;
};
