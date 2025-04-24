'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'jotai';
import React, { PropsWithChildren } from 'react';
import { ToastContainer } from 'react-toastify';

export default function Providers({ children }: PropsWithChildren) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ToastContainer autoClose={2000} />
      <Provider>{children}</Provider>
    </QueryClientProvider>
  );
}
