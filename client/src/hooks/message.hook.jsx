import { useCallback } from "react";

export const useMessage = () => {
  const showMessage = useCallback((text) => {
    if (window.M && text) {
      window.M.toast({ html: text });
    }
  }, []);

  return showMessage;
};
