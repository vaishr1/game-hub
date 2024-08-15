import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import genres from "../data/genres";
import useData from "./useData";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => useData<Genre>("/genres");

// const useGenres = () => ({ data: genres, isLoading: false, err: null });

export default useGenres;
