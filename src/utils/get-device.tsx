import { useEffect, useState, useRef } from "react";

export function getDevice(args: "tablet-landscape" | null): string {
  let windowWidth: number = 0;
  if (typeof window !== "undefined") {
    windowWidth =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;
  }

  if (windowWidth <= 767) {
    return "mobile";
  } else if (windowWidth <= 1023) {
    return "tablet";
  } else if (args === "tablet-landscape" && windowWidth <= 1024) {
    return "tablet";
  } else if (windowWidth <= 1536) {
    return "desktop";
  }
  return "desktop-large";
}

/*
    useDevice() - Hook to get the device type
*/

export function useDevice(args: "tablet-landscape" | null = null) {
  const [device, setDevice] = useState("");
  const [currentDevice, setCurrentDevice]: any = useState(null);

  const timer: any = useRef(false);

  useEffect(() => {
    setDevice(getDevice(args));
  }, [args]);

  useEffect(() => {
    const onResize = () => {
      clearTimeout(timer.current);
      timer.current = setTimeout(() => {
        setDevice(getDevice(args));
      }, 300);
    };

    window.addEventListener("resize", onResize);

    return () => window.removeEventListener("resize", onResize);
  }, [setDevice, args]);

  useEffect(() => {
    if (device !== currentDevice) {
      setCurrentDevice(device);
    }
  }, [device, currentDevice]);

  return currentDevice;
}
