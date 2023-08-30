import React, { createContext, useContext, useState } from 'react';
import { IIssue } from '../types/issue';
import useFetch from '../hooks/useFetch';
import { getIssues } from '../api/request';

interface IssuesContextType {
  issues: IIssue[];
  addIssues: (newIssues: IIssue[]) => void;
  loading: boolean;
  error: Error | null | undefined;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const IssuesContext = createContext<IssuesContextType | undefined>(undefined);

export const IssuesProvider = ({ children }: { children: React.ReactNode }) => {
  const { data, loading, error } = useFetch<IIssue[], Error>(getIssues);
  const [issues, setIssues] = useState<IIssue[]>(data || []);
  const [page, setPage] = useState(1);

  const addIssues = (newIssues: IIssue[]) => {
    setIssues((prevIssues) => [...prevIssues, ...newIssues]);
  };

  return (
    <IssuesContext.Provider value={{ issues, addIssues, loading, error, page, setPage }}>
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
