import { useState, useCallback, useEffect } from "react";
import { StepsValues } from "src/components/Charts/Charts.model";
import { parseError } from "src/errors/parseError";
import {
  getWeeklySteps,
  getMonthlySteps,
} from "src/firebase/services/Activity";

const useStepChart = () => {
  const [period, setPeriod] = useState(true);
  const [target, setTarget] = useState(12000);
  const [data, setData] = useState<StepsValues[] | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState("");

  const monthlyPeriod = useCallback(() => setPeriod(false), []);
  const weeklyPeriod = useCallback(() => setPeriod(true), []);

  const fetchData = useCallback(async () => {
    try {
      if (period) {
        const data = (await getWeeklySteps()).data();
        setData(data?.weeklyData);
      } else {
        const data = (await getMonthlySteps()).data();
        setData(data?.monthlyData);
      }
    } catch (error) {
      setIsError(parseError(error));
    } finally {
      setIsLoading(false);
    }
  }, [period]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const hookVariables = {
    monthlyPeriod: monthlyPeriod,
    weeklyPeriod: weeklyPeriod,
    period: period,
    target: target,
    data: data,
    isLoading: isLoading,
    isError: isError,
  };

  return hookVariables;
};

export default useStepChart;
