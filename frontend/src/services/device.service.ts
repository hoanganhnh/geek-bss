import axios from "axios";

import type { Device } from "@/interfaces/device.interface";

class DeviceService {
  static async getDevices() {
    const { data } = await axios.get(
      "http://localhost:8080/api/device/read.php"
    );

    return data.data as Device[];
  }

  static async createDevice(createDeviceDto: { name: string; ip: string }) {
    const { data } = await axios.post(
      "http://localhost:8080/api/device/create.php",
      { ...createDeviceDto }
    );

    return data;
  }
}

export default DeviceService;
