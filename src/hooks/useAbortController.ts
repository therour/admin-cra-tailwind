import { useEffect, useRef } from "react";

export default function useAbortController() {
  const abortController = useRef<AbortController | null>(null);
  useEffect(() => {
    return () => {
      abortController.current?.abort();
    };
  }, []);

  return {
    get instance() {
      return abortController.current;
    },
    createSignal() {
      abortController.current = new AbortController();
      return abortController.current.signal;
    },
  };
}
