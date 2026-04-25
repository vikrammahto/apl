'use client';

import { useCallback, useEffect, useState } from 'react';
import {
  type AppStorage,
  createInitialAppStorage,
  readAppStorage,
  writeAppStorage,
} from '@/lib/storage';

export function useAppStorage() {
  const [storage, setStorage] = useState<AppStorage>(createInitialAppStorage);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    function syncStorage() {
      setStorage(readAppStorage());
      setIsReady(true);
    }

    syncStorage();
    window.addEventListener('storage', syncStorage);
    window.addEventListener('mindful-storage-change', syncStorage);

    return () => {
      window.removeEventListener('storage', syncStorage);
      window.removeEventListener('mindful-storage-change', syncStorage);
    };
  }, []);

  const updateStorage = useCallback(
    (updater: AppStorage | ((currentStorage: AppStorage) => AppStorage)) => {
      const nextStorage =
        typeof updater === 'function' ? updater(readAppStorage()) : updater;

      writeAppStorage(nextStorage);
      setStorage(nextStorage);
    },
    [],
  );

  return { storage, updateStorage, isReady };
}
