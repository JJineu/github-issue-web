import React, { Dispatch, SetStateAction, createContext, useContext, useState } from 'react';
import { IIssue } from '../types/issue';

interface IssuesContextType {
  issues: IIssue[];
  addIssues: (newIssues: IIssue[]) => void;
  page: number;
  setPage: Dispatch<React.SetStateAction<number>>;
  setIssues: Dispatch<SetStateAction<IIssue[]>>;
}
const IssuesContext = createContext<IssuesContextType | undefined>(undefined);

export const IssuesProvider = ({ children }: { children: React.ReactNode }) => {
  const [issues, setIssues] = useState<IIssue[]>([]);
  const [page, setPage] = useState(1);

  const addIssues = (newIssues: IIssue[]) => {
    setIssues([...issues, ...newIssues]);
  };

  return (
    <IssuesContext.Provider value={{ issues, addIssues, setIssues, page, setPage }}>
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
