import { useEffect, useRef } from "react";

export const useAutoResize = (value: string) => {
  const ref = useRef<HTMLTextAreaElement>(null);

  useEffect(
    (value: string) => {
      const element = ref.current;

      if (!element) {
        return;
      }

      element.style.height = "auto";
      element.style.height = `${element.scrollHeight}px`;
    },
    [value]
  );

  return ref;
};
