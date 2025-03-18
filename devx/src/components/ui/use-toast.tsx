// src/components/ui/use-toast.tsx
import * as React from "react";
import {
  ToastProvider,
  ToastViewport,
  useToast as useShadToast,
} from "@/components/ui/toast";
import { cn } from "@/lib/utils";

export function useToast() {
  return useShadToast();
}

export function Toaster() {
  return (
    <ToastProvider>
      <ToastViewport
        className={cn("fixed bottom-4 right-4 z-50 w-auto max-w-xs")}
      />
    </ToastProvider>
  );
}
