"use client";

import { SettingsModal } from "@/components/modals/settings-modal";
import { useEffect, useState } from "react";

// centralize modal components and avoid hydration error
export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  // avoid hydration error
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <SettingsModal />
    </>
  );
};
