import { useMemo } from 'react';

export function useToast() {
  return useMemo(
    () => ({
      showMessage: (message: string) => {
        console.error(message);
        const el = document.createElement('div');
        el.innerText = message;
        document.body.appendChild(el);
        setTimeout(() => el.remove(), 3000);
      },
      showError: (error: any) => {
        console.error(error);
        const el = document.createElement('div');
        el.innerText = String(error);
        document.body.appendChild(el);
        setTimeout(() => el.remove(), 3000);
      },
    }),
    []
  );
}
