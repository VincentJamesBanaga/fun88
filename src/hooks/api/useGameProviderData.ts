import { useEffect, useState } from "react";

// Schema
import { ProviderItem } from "@/schema/provider";

// API
import { getGameProviderList } from "@/api/game/gameApi";
import { PROVIDER_LIST } from "@/api/data";

// Hooks
import { useAppDispatch, useAppSelector } from "@/lib/hook";
import { setCacheGameProvider } from "@/lib/slices/globalSlice";

const useGameProviderData = () => {
  const dispatch = useAppDispatch();
  const {
    cacheData: { gameProvider },
  } = useAppSelector((state) => state.globalSlice);

  const [data, setData] = useState<ProviderItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const fetchedData = await getGameProviderList();
        dispatch(setCacheGameProvider(true));
        setData(fetchedData);
        setLoading(false);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Unknown error occurred");
        }
        setLoading(false);
      }
    };

    if (gameProvider) {
      setData(PROVIDER_LIST);
      return;
    }

    loadData();
  }, []);

  return { data, loading, error };
};

export default useGameProviderData;
