"use client";
import { Log } from "@/lib/types";
import { useState, useEffect } from "react";

const useLog = () => {
  const [log, updateLog] = useState<Log[]>([]);

  useEffect(() => {
    console.log(log);
  }, [log]);

  const logPush = (newLog: Log) => {
    updateLog([...log, newLog]);
  };

  return { log, logPush };
};

export default useLog;
