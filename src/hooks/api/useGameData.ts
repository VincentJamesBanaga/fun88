import { useEffect, useState } from "react";

// Schema
import { GameItem } from "@/schema/game";

// API
import { getGameList } from "@/api/game/gameApi";
import { GAME_LIST } from "@/api/data";

// Hooks
import { useAppDispatch, useAppSelector } from "@/lib/hook";
import { setCacheGameList } from "@/lib/slices/globalSlice";

const useGameData = () => {
  const dispatch = useAppDispatch();
  const {
    cacheData: { gameList },
  } = useAppSelector((state) => state.globalSlice);

  const [data, setData] = useState<GameItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const fetchedData = await getGameList();
        dispatch(setCacheGameList(true));
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

    if (gameList) {
      setData(GAME_LIST);
      return;
    }
    loadData();
  }, []);

  return { data, loading, error };
};

export default useGameData;
