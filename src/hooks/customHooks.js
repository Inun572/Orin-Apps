import { useEffect, useState } from 'react';

const useDocumentTitle = (title) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
};

const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialValue;
  });
  const setItem = (value) => {
    setValue(value);
    localStorage.setItem(key, JSON.stringify(value));
  };

  return [value, setItem];
};

export { useDocumentTitle, useLocalStorage };
