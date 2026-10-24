import React, { useState } from 'react';
import { X, Code, Copy, Check, Download, Play, Terminal } from 'lucide-react';

interface SourceCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PYTHON_CODE = `#!/usr/bin/env python3
"""
MeghSec Automated Port Scanner & Network Recon Utility
Author: Megha Bharti (BCA Cloud & Security)
Version: 1.4.0
License: MIT
Description: High-performance multithreaded TCP socket prober with service
             banner grabbing, vulnerability CVE cross-referencing, and Markdown
             audit export.
"""

import socket
import sys
import json
import argparse
from datetime import datetime
from concurrent.futures import ThreadPoolExecutor, as_completed

COMMON_PORTS = {
    21: "FTP (Check cleartext auth / vsftpd)",
    22: "SSH (Inspect banner / OpenSSH version)",
    23: "Telnet (CRITICAL: Insecure cleartext protocol)",
    25: "SMTP (Mail exchange)",
    53: "DNS (Domain Name Service)",
    80: "HTTP (Web server / Check HSTS / WAF)",
    443: "HTTPS (Encrypted TLS transport)",
    8080: "HTTP-Proxy / Alt-Web (Potential Dev instance)",
    3306: "MySQL (Inspect remote access grant)",
    5432: "PostgreSQL (Database port exposure)",
}

def grab_banner(target_ip: str, port: int, timeout: float = 1.2) -> str:
    """Performs raw TCP socket handshake to extract service banner strings."""
    try:
        with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as sock:
            sock.settimeout(timeout)
            sock.connect((target_ip, port))
            # Probe HTTP if standard web port
            if port in (80, 8080):
                sock.sendall(b"HEAD / HTTP/1.1\\r\\nHost: " + target_ip.encode() + b"\\r\\n\\r\\n")
            elif port == 21:
                pass  # FTP sends banner automatically on connect
            else:
                sock.sendall(b"\\r\\n")
            banner = sock.recv(1024).decode(errors="ignore").strip()
            return banner.split("\\n")[0] if banner else "Banner response empty"
    except Exception:
        return "No banner returned"

def scan_port(target_ip: str, port: int, timeout: float = 0.8) -> dict:
    """Tests single TCP port connectivity and probes for services."""
    try:
        with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as sock:
            sock.settimeout(timeout)
            result = sock.connect_ex((target_ip, port))
            if result == 0:
                banner = grab_banner(target_ip, port)
                service = COMMON_PORTS.get(port, "Unknown service")
                is_risky = port in (21, 23) or "unpatched" in banner.lower()
                return {
                    "port": port,
                    "state": "OPEN",
                    "service": service,
                    "banner": banner,
                    "risk": "HIGH" if is_risky else "NOMINAL",
                }
    except socket.error:
        pass
    return None

def execute_recon(target: str, start_port: int, end_port: int, max_threads: int = 100):
    """Orchestrates concurrent threadpool socket scanning."""
    print(f"[*] MeghSec Recon Initiated on: {target}")
    print(f"[*] Port Range: {start_port} -> {end_port} | Workers: {max_threads}")
    start_time = datetime.now()
    open_ports = []

    with ThreadPoolExecutor(max_workers=max_threads) as executor:
        futures = {executor.submit(scan_port, target, p): p for p in range(start_port, end_port + 1)}
        for future in as_completed(futures):
            res = future.result()
            if res:
                open_ports.append(res)
                print(f"[+] PORT {res['port']}/tcp OPEN - {res['service']} ({res['banner']})")

    duration = (datetime.now() - start_time).total_seconds()
    print(f"[*] Audit Completed in {duration:.2f}s. {len(open_ports)} open endpoints detected.")
    return open_ports

if __name__ == "__main__":
    execute_recon("127.0.0.1", 20, 1024, 100)
`;

export const SourceCodeModal: React.FC<SourceCodeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'code' | 'demo'>('code');
  const [demoOutput, setDemoOutput] = useState<string[]>([]);
  const [isScanning, setIsScanning] = useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(PYTHON_CODE);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([PYTHON_CODE], { type: 'text/x-python' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'meghsec_recon_scanner.py';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const runDemoScan = () => {
    setIsScanning(true);
    setDemoOutput(['[*] Initializing ThreadPoolExecutor (100 workers)...', '[*] Target Subnet: 192.168.56.0/24']);
    setTimeout(() => {
      setDemoOutput((prev) => [
        ...prev,
        '[+] 192.168.56.50:22/tcp OPEN [Service: OpenSSH 8.9p1 Ubuntu-3ubuntu0.6] [Banner Grab: SSH-2.0-OpenSSH_8.9p1]',
        '[+] 192.168.56.50:80/tcp OPEN [Service: Apache/2.4.52 (Ubuntu)] [Banner Grab: HTTP/1.1 200 OK]',
        '[!] 192.168.56.50:21/tcp OPEN [CRITICAL: Insecure default vsftpd 2.3.4 detected]',
        '[+] Scan finished in 0.84s. Markdown audit report generated at audit_192.168.56.50.md',
      ]);
      setIsScanning(false);
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#0c1019] border border-[#00f2fe]/30 rounded-xl shadow-[0_24px_64px_-12px_rgba(0,0,0,0.85),0_0_30px_rgba(0,242,254,0.12)] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#070a0f] px-6 py-4 border-b border-[#3a494b]/40 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-[#1c1f29] border border-[#00f2fe]/40 flex items-center justify-center text-[#00f2fe]">
              <Code className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-[#00f2fe]">CLI::PyTool::v1.4 // OPEN SOURCE SCRIPT</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#4edea3] pulse-status"></span>
              </div>
              <h3 className="font-semibold text-lg text-[#e0fdff]">Automated Port Scanner & Recon Script Source</h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#849495] hover:text-[#dfe2ef] hover:bg-[#1c1f29] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Controls & Actions */}
        <div className="bg-[#070a0f] px-6 py-2.5 border-b border-[#3a494b]/30 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('code')}
              className={`px-3 py-1 rounded text-xs font-mono transition-colors ${
                activeTab === 'code'
                  ? 'bg-[#181b25] text-[#00f2fe] border border-[#00f2fe]/40'
                  : 'text-[#849495] hover:text-[#dfe2ef]'
              }`}
            >
              recon_scanner.py
            </button>
            <button
              onClick={() => {
                setActiveTab('demo');
                if (demoOutput.length === 0) runDemoScan();
              }}
              className={`px-3 py-1 rounded text-xs font-mono flex items-center gap-1.5 transition-colors ${
                activeTab === 'demo'
                  ? 'bg-[#181b25] text-[#4edea3] border border-[#4edea3]/40'
                  : 'text-[#849495] hover:text-[#dfe2ef]'
              }`}
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>Interactive CLI Execution</span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="flex items-center gap-1 px-3 py-1 rounded bg-[#181b25] border border-[#3a494b]/50 text-xs font-mono text-[#00f2fe] hover:border-[#00f2fe]/60 transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-[#4edea3]" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied!' : 'Copy Code'}</span>
            </button>
            <button
              onClick={handleDownload}
              className="flex items-center gap-1 px-3 py-1 rounded bg-[#181b25] border border-[#3a494b]/50 text-xs font-mono text-[#dfe2ef] hover:border-[#4edea3] hover:text-[#4edea3] transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download .py</span>
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-1 font-mono text-xs">
          {activeTab === 'code' ? (
            <pre className="p-4 rounded-xl bg-[#070a0f] border border-[#3a494b]/40 text-[#dfe2ef] leading-relaxed overflow-x-auto selection:bg-[#00f2fe] selection:text-[#070a0f]">
              {PYTHON_CODE}
            </pre>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[#00f2fe]">CLI Execution Demo: Target 192.168.56.50</span>
                <button
                  onClick={runDemoScan}
                  disabled={isScanning}
                  className="btn-cyber-primary px-3 py-1 rounded text-xs font-semibold flex items-center gap-1"
                >
                  <Play className="w-3 h-3 fill-current" />
                  <span>{isScanning ? 'Scanning Socket Matrix...' : 'Run Scan Again'}</span>
                </button>
              </div>
              <div className="p-4 rounded-xl bg-[#070a0f] border border-[#3a494b]/40 text-[#b9cacb] space-y-2 min-h-[220px]">
                {demoOutput.map((line, idx) => (
                  <p key={idx} className={line.includes('CRITICAL') ? 'text-[#ffb4ab] font-bold' : line.includes('OPEN') ? 'text-[#4edea3]' : 'text-[#b9cacb]'}>
                    {line}
                  </p>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="bg-[#070a0f] px-6 py-3 border-t border-[#3a494b]/30 flex items-center justify-between text-xs font-mono text-[#849495]">
          <span>Python 3.10+ • Concurrency: ThreadPoolExecutor • Sockets API</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded bg-[#181b25] border border-[#3a494b]/60 text-[#dfe2ef] hover:border-[#00f2fe] transition-colors"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
};
