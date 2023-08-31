import React, { MutableRefObject, createContext, useContext, useRef, useState } from 'react';
import { IIssue } from '../types/issue';
import useFetch from '../hooks/useFetch';
import { getIssues } from '../api/request';

interface IssuesContextType {
  issues: IIssue[];
  loading: boolean;
  error: Error | null | undefined;
  addIssues: (newIssues: IIssue[]) => void;
  page: MutableRefObject<number>;
  callback: () => Promise<IIssue[]>;
}
const IssuesContext = createContext<IssuesContextType | undefined>(undefined);

export const IssuesProvider = ({ children }: { children: React.ReactNode }) => {
  const callback = async () => {
    return await getIssues(page.current);
  };

  const { data, loading, error } = useFetch<IIssue[], Error>(callback);
  const [issues, setIssues] = useState<IIssue[]>(data || []);
  const page = useRef(0);

  const addIssues = (newIssues: IIssue[]) => {
    setIssues([...issues, ...newIssues]);
  };

  return (
    <IssuesContext.Provider value={{ issues, loading, error, addIssues, page, callback }}>
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
