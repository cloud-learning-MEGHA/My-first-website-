import React, { useState } from 'react';
import { X, Network, ShieldAlert, Cpu, Terminal, AlertTriangle, Check, RefreshCw } from 'lucide-react';

interface TopologyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TopologyModal: React.FC<TopologyModalProps> = ({ isOpen, onClose }) => {
  const [selectedNode, setSelectedNode] = useState<string>('snort');
  const [simulationActive, setSimulationActive] = useState<boolean>(false);
  const [alerts, setAlerts] = useState<string[]>([
    '[1:1000001:1] PROTOCOL-ICMP PING [Classification: Misc activity] [Priority: 3] {ICMP} 192.168.56.10 -> 192.168.56.50',
    '[1:1000002:1] SCAN-NMAP SYN stealth probe detected [Priority: 2] {TCP} 192.168.56.10:48212 -> 192.168.56.50:80',
    '[1:1000003:1] ATTACK-RESPONSES 403 Forbidden directory brute force [Priority: 1] {TCP} 192.168.56.50:80 -> 192.168.56.10:48212',
  ]);

  if (!isOpen) return null;

  const triggerProbe = () => {
    setSimulationActive(true);
    setTimeout(() => {
      const newAlert = `[1:100000${Math.floor(Math.random() * 9 + 4)}:1] ET SCAN Potential SSH brute-force probe [Priority: 1] {TCP} 192.168.56.10:${Math.floor(Math.random() * 20000 + 40000)} -> 192.168.56.50:22`;
      setAlerts((prev) => [newAlert, ...prev]);
      setSimulationActive(false);
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#0c1019] border border-[#4edea3]/30 rounded-xl shadow-[0_24px_64px_-12px_rgba(0,0,0,0.85),0_0_30px_rgba(78,222,163,0.12)] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#070a0f] px-6 py-4 border-b border-[#3a494b]/40 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-[#1c1f29] border border-[#4edea3]/40 flex items-center justify-center text-[#4edea3]">
              <Network className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-[#4edea3]">SOC::VNet::192.168.56.0/24 // AIR-GAPPED HOMELAB</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#4edea3] pulse-status"></span>
              </div>
              <h3 className="font-semibold text-lg text-[#e0fdff]">Virtual SOC / Network Defense Lab Topology</h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#849495] hover:text-[#dfe2ef] hover:bg-[#1c1f29] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-[#dfe2ef] text-sm">
          {/* Interactive Topology Graph Representation */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-mono text-xs text-[#4edea3] uppercase tracking-wider">
                VirtualBox Host-Only Segment (Click node to inspect config)
              </h4>
              <button
                onClick={triggerProbe}
                disabled={simulationActive}
                className="flex items-center gap-1.5 px-3 py-1 rounded bg-[#181b25] border border-[#4edea3]/40 text-xs font-mono text-[#4edea3] hover:bg-[#4edea3]/10 transition-colors"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${simulationActive ? 'animate-spin' : ''}`} />
                <span>Simulate Probe Injection</span>
              </button>
            </div>

            <div className="p-5 rounded-xl bg-[#070a0f] border border-[#3a494b]/40 grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Node 1: Kali Linux (Attacker VM) */}
              <div 
                onClick={() => setSelectedNode('kali')}
                className={`p-4 rounded-lg cursor-pointer transition-all border ${
                  selectedNode === 'kali' 
                    ? 'bg-[#181b25] border-[#ffb4ab] shadow-[0_0_15px_rgba(255,180,171,0.2)]' 
                    : 'bg-[#10141f] border-[#3a494b]/40 hover:border-[#ffb4ab]/50'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="w-2 h-2 rounded-full bg-[#ffb4ab]"></span>
                  <span className="font-mono text-[11px] text-[#849495]">VLAN 10</span>
                </div>
                <div className="flex items-center gap-2 mb-1">
                  <Terminal className="w-4 h-4 text-[#ffb4ab]" />
                  <span className="font-bold text-xs text-[#e0fdff]">Kali Linux (Attacker)</span>
                </div>
                <p className="font-mono text-xs text-[#ffb4ab]">192.168.56.10</p>
                <p className="text-[11px] text-[#b9cacb] mt-2">Equipped with Nmap, Gobuster, Metasploit, Hydra</p>
              </div>

              {/* Node 2: Snort IDS & PfSense (Security Boundary) */}
              <div 
                onClick={() => setSelectedNode('snort')}
                className={`p-4 rounded-lg cursor-pointer transition-all border ${
                  selectedNode === 'snort' 
                    ? 'bg-[#181b25] border-[#4edea3] shadow-[0_0_15px_rgba(78,222,163,0.25)]' 
                    : 'bg-[#10141f] border-[#3a494b]/40 hover:border-[#4edea3]/50'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="w-2 h-2 rounded-full bg-[#4edea3] pulse-status"></span>
                  <span className="font-mono text-[11px] text-[#4edea3]">SPAN / MIRROR PORT</span>
                </div>
                <div className="flex items-center gap-2 mb-1">
                  <ShieldAlert className="w-4 h-4 text-[#4edea3]" />
                  <span className="font-bold text-xs text-[#e0fdff]">Snort IDS & Wireshark</span>
                </div>
                <p className="font-mono text-xs text-[#4edea3]">192.168.56.1 (Promiscuous)</p>
                <p className="text-[11px] text-[#b9cacb] mt-2">Real-time deep packet inspection & alert logging</p>
              </div>

              {/* Node 3: Ubuntu Target (Honeypot / Web Server) */}
              <div 
                onClick={() => setSelectedNode('ubuntu')}
                className={`p-4 rounded-lg cursor-pointer transition-all border ${
                  selectedNode === 'ubuntu' 
                    ? 'bg-[#181b25] border-[#00f2fe] shadow-[0_0_15px_rgba(0,242,254,0.2)]' 
                    : 'bg-[#10141f] border-[#3a494b]/40 hover:border-[#00f2fe]/50'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="w-2 h-2 rounded-full bg-[#00f2fe]"></span>
                  <span className="font-mono text-[11px] text-[#849495]">VLAN 20 (DMZ)</span>
                </div>
                <div className="flex items-center gap-2 mb-1">
                  <Cpu className="w-4 h-4 text-[#00f2fe]" />
                  <span className="font-bold text-xs text-[#e0fdff]">Ubuntu Server (Target)</span>
                </div>
                <p className="font-mono text-xs text-[#00f2fe]">192.168.56.50</p>
                <p className="text-[11px] text-[#b9cacb] mt-2">DVWA, Apache2, MySQL, SSH honeypot endpoints</p>
              </div>
            </div>
          </div>

          {/* Node Detail Box */}
          <div className="p-4 rounded-xl bg-[#070a0f] border border-[#3a494b]/30 space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-[#4edea3] uppercase">
                Active Node Telemetry: {selectedNode.toUpperCase()}
              </span>
              <span className="font-mono text-[11px] text-[#849495]">Status: Listening</span>
            </div>

            {selectedNode === 'snort' && (
              <div className="space-y-2 text-xs">
                <p className="text-[#dfe2ef]">
                  <strong>Snort Configuration:</strong> Bound to virtual interface <code className="text-[#4edea3]">vboxnet0</code> in promiscuous mode. Loaded community ruleset plus custom local rules for detecting port sweeps.
                </p>
                <div className="p-3 bg-[#0c1019] rounded font-mono text-[11px] text-[#4edea3] border border-[#3a494b]/40">
                  alert tcp $EXTERNAL_NET any -&gt; $HOME_NET 22 (msg:"LOCAL SSH Brute Force attempt"; flags:S; threshold:type both, track by_src, count 5, seconds 30; sid:1000004; rev:1;)
                </div>
              </div>
            )}

            {selectedNode === 'kali' && (
              <div className="space-y-2 text-xs">
                <p className="text-[#dfe2ef]">
                  <strong>Attack Simulation Workflow:</strong> Initiates low-rate SYN stealth scans (<code className="text-[#ffb4ab]">nmap -sS -T2</code>) and protocol dissection to test detection latency against Snort signatures.
                </p>
                <div className="p-3 bg-[#0c1019] rounded font-mono text-[11px] text-[#ffb4ab] border border-[#3a494b]/40">
                  $ nmap -sS -p 21,22,80,443 -Pn 192.168.56.50 --packet-trace
                </div>
              </div>
            )}

            {selectedNode === 'ubuntu' && (
              <div className="space-y-2 text-xs">
                <p className="text-[#dfe2ef]">
                  <strong>Target Hardening Matrix:</strong> Monitored using <code className="text-[#00f2fe]">fail2ban</code>, UFW iptables state tracking, and centralized Syslog forwarding into Wireshark capture storage.
                </p>
                <div className="p-3 bg-[#0c1019] rounded font-mono text-[11px] text-[#00f2fe] border border-[#3a494b]/40">
                  $ sudo ufw default deny incoming &amp;&amp; sudo ufw allow from 192.168.56.0/24 to any port 443
                </div>
              </div>
            )}
          </div>

          {/* Live Snort Alert Stream */}
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono text-xs text-[#e0fdff]">
              <AlertTriangle className="w-4 h-4 text-[#f59e0b]" />
              <span>Live Snort Alert Log Stream (/var/log/snort/alert):</span>
            </div>
            <div className="p-3 rounded-lg bg-[#070a0f] border border-[#3a494b]/40 font-mono text-[11px] text-[#b9cacb] space-y-1.5 max-h-36 overflow-y-auto">
              {alerts.map((alert, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <span className="text-[#4edea3] shrink-0">&gt;</span>
                  <span className={alert.includes('Priority: 1') ? 'text-[#ffb4ab]' : alert.includes('Priority: 2') ? 'text-[#f59e0b]' : 'text-[#b9cacb]'}>
                    {alert}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-[#070a0f] px-6 py-3 border-t border-[#3a494b]/30 flex items-center justify-between">
          <span className="font-mono text-xs text-[#849495]">VNet Subnet: 192.168.56.0/24 (Air-Gapped)</span>
          <button
            onClick={onClose}
            className="btn-cyber-primary px-4 py-1.5 rounded text-xs font-semibold"
          >
            Close Topology
          </button>
        </div>
      </div>
    </div>
  );
};
