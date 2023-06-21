import { useEffect } from "react";

export const useScrollToBottom = (callback: () => void): void => {
  useEffect(() => {
    const handleScroll = (): void => {
      const { scrollTop, clientHeight, scrollHeight } =
        document.documentElement;
      if (scrollTop + clientHeight === scrollHeight) {
        callback();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [callback]);
};

export default useScrollToBottom;
