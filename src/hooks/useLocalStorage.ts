import { useState, useEffect } from 'react';

function useLocalStorage<T>(
  key: string,
  initialData: T
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [data, setData] = useState<T>(() => {
    const localData = localStorage.getItem(key);
    return localData ? JSON.parse(localData) : initialData;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(data));
  }, [key, data]);

  return [data, setData];
}

export default useLocalStorage;
