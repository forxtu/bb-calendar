import { useState, useEffect, MutableRefObject } from "react";

type UseClickOutside = {
  isActive: boolean;
};

type OnClickOutside = (e: MouseEvent) => void;

function useClickOutside<T>(
  ref: MutableRefObject<T & HTMLElement>,
  onClickOutside: OnClickOutside
): UseClickOutside {
  const [isActive, setActive] = useState(false);

  const mousedown = (e: MouseEvent): void => {
    const { current } = ref;
    const el = e.target;

    if (!(current && el instanceof Node && current.contains(el))) {
      setActive(true);
      onClickOutside(e);
    }
  };

  const mouseup = (e: MouseEvent): void => {
    const { current } = ref;
    const el = e.target;

    if (!(current && el instanceof Node && current.contains(el))) {
      setActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", mousedown);
    document.addEventListener("mouseup", mouseup);

    return () => {
      document.removeEventListener("mousedown", mousedown);
      document.removeEventListener("mouseup", mouseup);
    };
  }, []);

  return { isActive };
}

export default useClickOutside;
