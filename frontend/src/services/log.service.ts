import axios from "axios";

import type { Log } from "@/interfaces/log.interface";

class LogService {
  static async getLogs({ page = 1 }: { page: number }) {
    const { data } = await axios.get<{ data: Log[]; totalPage: number }>(
      `http://localhost:8080/api/log/read.php?page=${page}`
    );

    return data;
  }

  static async searchLogs({ search }: { search: string }) {
    const { data } = await axios.get<{ data: Log[] }>(
      `http://localhost:8080/api/log/search.php?search=${search}`
    );

    return data;
  }
}

export default LogService;
