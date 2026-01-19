import { useEffect } from "react";

export const useDocumentTitle = (title?: string) => {
  useEffect(() => {
    const ogTitle = document.title;

    document.title = `${title}`;

    return () => {
      document.title = ogTitle;
    };
  }, [title]);
};
