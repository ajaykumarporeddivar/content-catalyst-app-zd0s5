'use client';
import { useState, useEffect } from 'react';
import { localStorage } from 'local-storage';

export const useLocalStorage = <T>(key: string, initial: T): [T, (v: T) => void] => {
  const [value, setValue] = useState<T>(() => {
    try {
      const storedValue = localStorage.getItem(key);
      return storedValue ? JSON.parse(storedValue) : initial;
    } catch (error) {
      return initial;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
};

export const useFilter = <T>(items: T[], fields: (keyof T)[]): { filtered: T[]; search: string; setSearch: (v: string) => void; status: string; setStatus: (v: string) => void } => {
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('');

  const filteredItems = items.filter((item) => {
    let match = true;
    for (const field of fields) {
      if (`${item[field]}`.toLowerCase().indexOf(search.toLowerCase()) === -1) {
        match = false;
        break;
      }
    }
    return match;
  });

  return { filtered: filteredItems, search, setSearch, status, setStatus };
};

export const useModal = () => {
  const [open, setOpen] = useState(false);
  const [close, setClose] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setClose(true);
    setTimeout(() => {
      setClose(false);
    }, 200);
  };

  const handleSetActiveItem = (item: any) => {
    setActiveItem(item);
  };

  return { open, close, isOpen: open && !close, activeItem, setActiveItem: handleSetActiveItem, open: handleOpen, close: handleClose };
};

export const useDemoToast = () => {
  const [toast, setToast] = useState('');
  const [showToast, setShowToast] = useState(false);

  const handleShowToast = (message: string, type: string) => {
    setToast(message);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 2000);
  };

  return { toast, showToast: handleShowToast };
};