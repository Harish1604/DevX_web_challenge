// components/ui/use-toast.ts
import { useState, useCallback } from 'react';

type ToastType = 'success' | 'error' | 'info';

interface Toast {
  id: string;
  type: ToastType;
  message: string;
}

export const useToast = () => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  // Function to add a toast
  const addToast = useCallback((message: string, type: ToastType) => {
    const newToast = {
      id: Date.now().toString(), // Unique ID based on timestamp
      type,
      message
    };
    setToasts((prevToasts) => [...prevToasts, newToast]);

    // Remove toast after 5 seconds
    setTimeout(() => {
      setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== newToast.id));
    }, 5000);
  }, []);

  // Function to remove a toast manually (optional)
  const removeToast = useCallback((id: string) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  }, []);

  return {
    toasts,
    addToast,
    removeToast,
  };
};
