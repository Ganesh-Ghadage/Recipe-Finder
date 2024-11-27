import { useRef, useEffect } from "react";

const useAbortController = (): [AbortController, () => AbortController] => {
  const abortControllerRef = useRef<AbortController | null>(null);
  
  const createAbortController = (): AbortController => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort(); // Abort any ongoing requests
    }
    const controller = new AbortController();
    abortControllerRef.current = controller;
    return controller;
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, []);

  return [abortControllerRef.current || new AbortController(), createAbortController];
};

export default useAbortController;
