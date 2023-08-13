"use client";
import Main from "@/components/Main";
import Preloader from "@/components/Preloader";
import { useEffect, useState } from "react";
export default function Loading() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, [setIsLoading]);

  return (
    <Main
      style={{
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      {isLoading && <Preloader />}
    </Main>
  );
}
