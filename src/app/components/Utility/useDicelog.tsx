"use client";
import { Log } from "@/lib/types";
import { useState, useEffect } from "react";

const useLog = () => {
  const [log, updateLog] = useState<Log[]>([]);

  const logPush = (newLog: Log) => {
    console.log(newLog);
    updateLog((prev) => {
      return [...prev, newLog];
    });
  };

  return { log, logPush };
};

export default useLog;
