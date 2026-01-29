import React, { createContext, useMemo, useState } from "react";
import { initialIssues } from "../data/issues";

export const IssuesContext = createContext(null);

export const IssuesProvider = ({ children }) => {
  const [issues, setIssues] = useState(initialIssues);

  const addIssue = (issue) => {
    setIssues((prev) => [{ ...issue }, ...prev]);
  };

  const updateIssue = (id, updates) => {
    setIssues((prev) =>
      prev.map((issue) => (issue.id === id ? { ...issue, ...updates } : issue))
    );
  };

  const value = useMemo(
    () => ({
      issues,
      addIssue,
      updateIssue,
    }),
    [issues]
  );

  return (
    <IssuesContext.Provider value={value}>
      {children}
    </IssuesContext.Provider>
  );
};
