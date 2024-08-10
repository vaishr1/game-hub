import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface Game {
  id: number;
  name: string;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const GameGrid = () => {
  const [games, setGames] = useState([]);
  const [err, setErr] = useState("");

  useEffect(() => {
    apiClient.get("/games").then((res) => setGames());
  });
  return <div>GameGrid</div>;
};

export default GameGrid;
