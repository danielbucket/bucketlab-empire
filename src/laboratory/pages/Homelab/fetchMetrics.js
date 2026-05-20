import { hardwareStats, firmwareStats, systemStats } from "./bucketlabStatusStub";
import { HOMELAB_URLS } from "../../../globals/global.urls";
const { hardware, firmware, system } = HOMELAB_URLS.homelab;

export const fetchHardware = async () => {
  return await fetch(hardware)
    .then((res) => {
      if (!res.ok) throw new Error("no hardware");
      return res.json();
    })
    .catch((e) => {
      return {
        error: true,
        message: e.message || "Failed to fetch hardware data",
      };
    });
};

export const fetchFirmware = async () => {
  return await fetch(firmware)
    .then((res) => {
      if (!res.ok) throw new Error("no firmware");
      return res.json();
    })
    .catch((e) => {
      return {
        error: true,
        message: e.message || "Failed to fetch firmware data"
      };
    });
};

export const fetchSystem = async () => {
  return await fetch(system)
    .then((res) => {
      if (!res.ok) throw new Error("no system");
      return res.json();
    })
    .catch((e) => {
      return {
        error: true,
        message: e.message || "Failed to fetch system data",
      };
    });
};

export const fetchAllStats = async () => {
  const [hardwareData, firmwareData, systemData] = await Promise.all([
    fetchHardware(),
    fetchFirmware(),
    fetchSystem(),
  ]);
  return {
    hardware: hardwareData,
    firmware: firmwareData,
    system: systemData,
  };
};
