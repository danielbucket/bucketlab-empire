import React, { useEffect, useState, useRef } from "react";

/**
 * Homelab.jsx
 * React page showcasing the hardware and firmware side of the BucketLabIO project.
 *
 * Expected backend endpoints (examples):
 *  - GET  /api/homelab/hardware   -> { device, model, memoryGB, os, storage: { totalGB, usedGB }, ip }
 *  - GET  /api/homelab/firmware   -> { systemFirmware, bootloader, devices: [{ name, type, fwVersion }] }
 *  - GET  /api/homelab/system     -> { cpuLoad, cpuTempC, ramUsedGB, ramTotalGB, uptime }
 *  - POST /api/homelab/firmware/update  -> { ok, message }
 *  - POST /api/homelab/reboot            -> { ok }
 *
 * This file is intentionally UI-focused and contains conservative calls to these endpoints.
 * Adapt endpoint paths and JSON shapes to your backend.
 */

export default function Homelab() {
  const [hardware, setHardware] = useState({
    device: "Raspberry Pi 5",
    model: "Raspberry Pi 5 (16GB)",
    memoryGB: 16,
    os: "Ubuntu Server",
    osVersion: "unknown",
    storage: { totalGB: 1000, usedGB: 0, mount: "/" },
    ip: "0.0.0.0",
  });
  const [firmware, setFirmware] = useState({
    systemFirmware: "unknown",
    bootloader: "unknown",
    devices: [],
  });
  const [system, setSystem] = useState({
    cpuLoad: 0,
    cpuTempC: 0,
    ramUsedGB: 0,
    ramTotalGB: 16,
    uptime: "unknown",
  });
  const [statusMessage, setStatusMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const liveRef = useRef(null);

  async function fetchHardware() {
    try {
      const res = await fetch("/api/homelab/hardware");
      if (!res.ok) throw new Error("no hardware");
      const json = await res.json();
      setHardware((h) => ({ ...h, ...json }));
    } catch (e) {
      // fallback defaults are already set
      console.warn("fetchHardware:", e);
    }
  }

  async function fetchFirmware() {
    try {
      const res = await fetch("/api/homelab/firmware");
      if (!res.ok) throw new Error("no firmware");
      const json = await res.json();
      setFirmware(json);
    } catch (e) {
      console.warn("fetchFirmware:", e);
    }
  }

  async function fetchSystem() {
    try {
      const res = await fetch("/api/homelab/system");
      if (!res.ok) throw new Error("no system");
      const json = await res.json();
      setSystem(json);
    } catch (e) {
      console.warn("fetchSystem:", e);
    }
  }

  useEffect(() => {
    // initial load
    fetchHardware();
    fetchFirmware();
    fetchSystem();

    // live system updates every 5s
    liveRef.current = setInterval(fetchSystem, 5000);
    return () => clearInterval(liveRef.current);
  }, []);

  async function handleCheckFirmware() {
    setLoading(true);
    setStatusMessage("Checking firmware updates...");
    try {
      const res = await fetch("/api/homelab/firmware/update", {
        method: "POST",
      });
      const json = await res.json();
      setStatusMessage(json.message || "Firmware check complete");
      // refresh firmware info after update
      await fetchFirmware();
    } catch (e) {
      setStatusMessage("Firmware update failed");
      console.warn(e);
    } finally {
      setLoading(false);
    }
  }

  async function handleReboot() {
    if (!window.confirm("Reboot the Raspberry Pi 5 now?")) return;
    setLoading(true);
    setStatusMessage("Sending reboot command...");
    try {
      await fetch("/api/homelab/reboot", { method: "POST" });
      setStatusMessage("Reboot scheduled. Device will be temporarily unavailable.");
    } catch (e) {
      setStatusMessage("Failed to send reboot command.");
    } finally {
      setLoading(false);
    }
  }

  // small presentational helpers
  function pct(used, total) {
    if (!total) return "0%";
    return `${Math.round((used / total) * 100)}%`;
  }

  const containerStyle = {
    fontFamily: "Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
    padding: 20,
    maxWidth: 980,
    margin: "0 auto",
    color: "#111",
  };

  const cardStyle = {
    border: "1px solid #e6e9ee",
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    background: "#fff",
  };

  const gridStyle = { display: "grid", gridTemplateColumns: "1fr 340px", gap: 12 };

  return (
    <div style={containerStyle}>
      <header style={{ marginBottom: 18 }}>
        <h1 style={{ margin: 0 }}>BucketLabIO — Homelab</h1>
        <div style={{ color: "#5b6b77", marginTop: 6 }}>
          Hardware + firmware overview for the BucketLabIO controller running on a local homelab Pi.
        </div>
      </header>

      <div style={gridStyle}>
        <main>
          <section style={cardStyle}>
            <h2 style={{ marginTop: 0 }}>System Summary</h2>
            <div>
              <strong>Device:</strong> {hardware.device} — {hardware.model}
            </div>
            <div>
              <strong>Memory:</strong> {hardware.memoryGB} GB
            </div>
            <div>
              <strong>OS:</strong> {hardware.os} {hardware.osVersion || ""}
            </div>
            <div>
              <strong>Storage:</strong> {hardware.storage.usedGB} / {hardware.storage.totalGB} GB (
              {pct(hardware.storage.usedGB, hardware.storage.totalGB)})
            </div>
            <div>
              <strong>IP:</strong> {hardware.ip}
            </div>
            <div style={{ marginTop: 12 }}>
              <button onClick={fetchHardware} style={{ marginRight: 8 }}>
                Refresh
              </button>
              <button onClick={handleReboot} disabled={loading} style={{ background: "#f44336", color: "#fff" }}>
                Reboot Device
              </button>
            </div>
          </section>

          <section style={cardStyle}>
            <h2 style={{ marginTop: 0 }}>Firmware</h2>
            <div>
              <strong>System firmware:</strong> {firmware.systemFirmware}
            </div>
            <div>
              <strong>Bootloader:</strong> {firmware.bootloader}
            </div>

            <div style={{ marginTop: 10 }}>
              <strong>Attached devices</strong>
              {firmware.devices && firmware.devices.length ? (
                <ul style={{ marginTop: 6 }}>
                  {firmware.devices.map((d, i) => (
                    <li key={i}>
                      {d.name} ({d.type}) — fw {d.fwVersion}
                    </li>
                  ))}
                </ul>
              ) : (
                <div style={{ color: "#666", marginTop: 6 }}>No attached devices reported.</div>
              )}
            </div>

            <div style={{ marginTop: 12 }}>
              <button onClick={fetchFirmware} style={{ marginRight: 8 }}>
                Refresh firmware info
              </button>
              <button onClick={handleCheckFirmware} disabled={loading}>
                {loading ? "Checking..." : "Check for firmware updates"}
              </button>
            </div>
          </section>

          <section style={cardStyle}>
            <h2 style={{ marginTop: 0 }}>Storage & Boot</h2>
            <div>
              This BucketLabIO instance runs on a 1TB SSD attached to the Raspberry Pi 5 (16GB). Monitor usage
              here and keep a buffer for experimental logs and firmware artifacts.
            </div>
            <div style={{ marginTop: 8 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{ flex: 1, height: 12, background: "#eee", borderRadius: 6 }}>
                  <div
                    style={{
                      width: pct(hardware.storage.usedGB, hardware.storage.totalGB),
                      height: "100%",
                      background: "#1976d2",
                      borderRadius: 6,
                    }}
                  />
                </div>
                <div style={{ minWidth: 60, textAlign: "right", color: "#333" }}>
                  {pct(hardware.storage.usedGB, hardware.storage.totalGB)}
                </div>
              </div>
            </div>
          </section>

          <section style={cardStyle}>
            <h2 style={{ marginTop: 0 }}>Notes / Commands</h2>
            <div style={{ color: "#333", marginBottom: 8 }}>
              Quick commands you might run on the Pi (run via SSH or server-side tooling):
            </div>
            <pre style={{ background: "#0f1720", color: "#dbeafe", padding: 12, borderRadius: 6, overflowX: "auto" }}>
{`# check system
uname -a
lsblk
df -h

# check memory and temps
free -h
vcgencmd measure_temp  # if available for your board

# update firmware artifacts endpoint
curl -X POST http://<pi-ip>/api/homelab/firmware/update
`}
            </pre>
          </section>
        </main>

        <aside>
          <section style={cardStyle}>
            <h3 style={{ marginTop: 0 }}>Live System</h3>
            <div>
              <strong>CPU Load:</strong> {system.cpuLoad} %
            </div>
            <div>
              <strong>CPU Temp:</strong> {system.cpuTempC} °C
            </div>
            <div>
              <strong>RAM:</strong> {system.ramUsedGB} / {system.ramTotalGB} GB
            </div>
            <div>
              <strong>Uptime:</strong> {system.uptime}
            </div>
            <div style={{ marginTop: 10 }}>
              <button onClick={fetchSystem}>Refresh</button>
            </div>
          </section>

          <section style={cardStyle}>
            <h3 style={{ marginTop: 0 }}>Status</h3>
            <div style={{ color: "#333" }}>{statusMessage || "Idle"}</div>
          </section>

          <section style={cardStyle}>
            <h3 style={{ marginTop: 0 }}>Project</h3>
            <div>
              BucketLabIO running on a Pi5 (16GB) with Ubuntu Server and a 1TB SSD — suitable for persistent
              data capture, local firmware hosting, and connected lab devices (MCUs, sensors, etc.).
            </div>
          </section>
        </aside>
      </div>
    </div>
  );
}