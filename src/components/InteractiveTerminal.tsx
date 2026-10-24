import React, { useState, useRef, useEffect } from 'react';
import { Lock, Terminal as TerminalIcon, Play, RotateCcw } from 'lucide-react';

interface CommandHistoryItem {
  id: string;
  command: string;
  output: React.ReactNode;
}

export const InteractiveTerminal: React.FC = () => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<CommandHistoryItem[]>([
    {
      id: 'init-1',
      command: 'nmap -sV -sC 10.0.4.15',
      output: (
        <p className="text-[#b9cacb] text-xs pl-4 mt-0.5 leading-relaxed font-mono">
          PORT 443/tcp OPEN ssl/https | <span className="text-[#4edea3] font-medium">Hardened TLS 1.3</span>
          <br />
          <span className="opacity-60">|_ ssl-cert: Subject: commonName=*.meghsec.internal</span>
        </p>
      ),
    },
    {
      id: 'init-2',
      command: 'aws s3 sync ./dist s3://meghsec-prod --acl private',
      output: (
        <p className="text-[#b9cacb] text-xs pl-4 mt-0.5 leading-relaxed font-mono">
          upload: ./index.html to s3://meghsec-prod/index.html
          <br />
          <span className="text-[#6ffbbe] font-medium">CloudFront Invalidation: IN_PROGRESS (200 OK)</span>
        </p>
      ),
    },
    {
      id: 'init-3',
      command: 'status --defense-mode active',
      output: (
        <div className="pl-4 mt-1 space-y-0.5 text-xs font-mono">
          <p className="text-[#4edea3] font-medium">[✓] WAF Active</p>
          <p className="text-[#4edea3] font-medium">[✓] Zero Trust Perimeter Armed</p>
          <p className="text-[#00f2fe] font-medium">[✓] Threat Score: 0/100 (Safe)</p>
        </div>
      ),
    },
  ]);

  const [activePromisc, setActivePromisc] = useState(true);
  const [packetCount, setPacketCount] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setPacketCount((prev) => (prev + 1) % 100);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const handleRunCommand = (cmd: string) => {
    const trimmed = cmd.trim();
    if (!trimmed) return;

    const lower = trimmed.toLowerCase();
    let resultNode: React.ReactNode = null;

    if (lower === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    } else if (lower === 'help') {
      resultNode = (
        <div className="pl-4 text-xs font-mono text-[#b9cacb] space-y-1 my-1">
          <p className="text-[#00f2fe]">Available MeghSec Diagnostic Commands:</p>
          <p><span className="text-[#4edea3]">status</span> - Display defensive perimeter posture</p>
          <p><span className="text-[#4edea3]">nmap</span> - Simulate network recon against target</p>
          <p><span className="text-[#4edea3]">aws</span> - Check cloud deployment pipeline</p>
          <p><span className="text-[#4edea3]">whoami</span> - Identity dossier of Megha Bharti</p>
          <p><span className="text-[#4edea3]">skills</span> - View active security competencies</p>
          <p><span className="text-[#4edea3]">ping</span> - ICMP echo test against gateway</p>
          <p><span className="text-[#4edea3]">clear</span> - Reset terminal output stream</p>
        </div>
      );
    } else if (lower.includes('status')) {
      resultNode = (
        <div className="pl-4 mt-1 space-y-0.5 text-xs font-mono">
          <p className="text-[#4edea3] font-medium">[✓] WAF Active - Global Edge Enforced</p>
          <p className="text-[#4edea3] font-medium">[✓] Zero Trust Perimeter Armed (Cloudflare Access)</p>
          <p className="text-[#00f2fe] font-medium">[✓] Threat Score: 0/100 (All systems nominal)</p>
          <p className="text-[#b9cacb] text-[11px]">Audit Timestamp: {new Date().toISOString()}</p>
        </div>
      );
    } else if (lower.includes('whoami')) {
      resultNode = (
        <div className="pl-4 mt-1 text-xs font-mono text-[#dfe2ef] space-y-1">
          <p><span className="text-[#00f2fe]">OPERATOR:</span> Megha Bharti // MeghSec</p>
          <p><span className="text-[#00f2fe]">SPECIALIZATION:</span> Cloud Architecture & Cybersecurity Defense</p>
          <p><span className="text-[#00f2fe]">ENROLLMENT:</span> BCA Class of 2027/28 (1st Year)</p>
          <p><span className="text-[#00f2fe]">PARADIGM:</span> "Assume Breach" • Zero Trust • Defense-in-Depth</p>
        </div>
      );
    } else if (lower.includes('nmap')) {
      resultNode = (
        <div className="pl-4 text-xs font-mono text-[#b9cacb] space-y-0.5 mt-0.5">
          <p className="text-[#00f2fe]">Starting Nmap 7.94 ( https://nmap.org ) at {new Date().toLocaleTimeString()}</p>
          <p>Nmap scan report for gateway.meghsec.internal (10.0.4.15)</p>
          <p>Host is up (0.00042s latency).</p>
          <p>PORT 443/tcp OPEN ssl/https | <span className="text-[#4edea3]">Hardened TLS 1.3 / HSTS</span></p>
          <p className="text-secondary opacity-80">PORT 22/tcp FILTERED ssh (Key-only VPN perimeter)</p>
        </div>
      );
    } else if (lower.includes('aws')) {
      resultNode = (
        <div className="pl-4 text-xs font-mono text-[#b9cacb] space-y-0.5 mt-0.5">
          <p className="text-[#00f2fe]">$ aws s3 sync ./dist s3://meghsec-prod --acl private</p>
          <p>upload: ./index.html to s3://meghsec-prod/index.html [100%]</p>
          <p className="text-[#6ffbbe]">CloudFront Invalidation: IN_PROGRESS (200 OK)</p>
          <p className="text-[#4edea3]">WAF WebACL: MeghSec-RateLimit-Rule attached (Active)</p>
        </div>
      );
    } else if (lower.includes('skills')) {
      resultNode = (
        <div className="pl-4 text-xs font-mono text-[#b9cacb] space-y-1 mt-0.5">
          <p className="text-[#00f2fe]">STACK AUDIT:</p>
          <p>• Cloud: AWS S3, CloudFront, WAF, Route 53, IAM Least-Privilege</p>
          <p>• Security: Nmap, Wireshark, Snort IDS, Linux Hardening, OWASP Top 10</p>
          <p>• Systems: Python Sockets, Bash, Kali Linux, C/C++ primitives</p>
        </div>
      );
    } else if (lower.includes('ping')) {
      resultNode = (
        <div className="pl-4 text-xs font-mono text-[#b9cacb] space-y-0.5 mt-0.5">
          <p>PING 10.0.4.15 (10.0.4.15): 56 data bytes</p>
          <p>64 bytes from 10.0.4.15: icmp_seq=0 ttl=64 time=0.284 ms</p>
          <p>64 bytes from 10.0.4.15: icmp_seq=1 ttl=64 time=0.219 ms</p>
          <p className="text-[#4edea3]">--- 10.0.4.15 ping statistics: 0% packet loss, min/avg/max = 0.219/0.251/0.284 ms ---</p>
        </div>
      );
    } else {
      resultNode = (
        <div className="pl-4 text-xs font-mono text-[#ffb4ab] mt-0.5">
          zsh: command not found: {trimmed}. Type <span className="text-[#00f2fe] underline cursor-pointer" onClick={() => handleRunCommand('help')}>help</span> for options.
        </div>
      );
    }

    setHistory((prev) => [
      ...prev,
      {
        id: `cmd-${Date.now()}-${Math.random()}`,
        command: trimmed,
        output: resultNode,
      },
    ]);
    setInputVal('');
    setTimeout(() => {
      terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleRunCommand(inputVal);
    }
  };

  return (
    <div className="rounded-xl overflow-hidden border border-[#00f2fe]/20 shadow-[0_16px_48px_-8px_rgba(0,0,0,0.85),0_0_20px_rgba(0,242,254,0.08)] bg-[#0a0e17] transition-all duration-300 hover:border-[#00f2fe]/40">
      {/* Terminal Header */}
      <div className="bg-[#070a0f] px-4 py-3 border-b border-[#3a494b]/30 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#ffb4ab] inline-block opacity-80 cursor-pointer" title="Close" onClick={() => setHistory([])}></span>
          <span className="w-3 h-3 rounded-full bg-[#f59e0b] inline-block opacity-80 cursor-pointer" title="Minimize"></span>
          <span className="w-3 h-3 rounded-full bg-[#4edea3] inline-block opacity-80 cursor-pointer" title="Expand"></span>
        </div>
        <div className="flex items-center gap-2">
          <TerminalIcon className="w-3.5 h-3.5 text-[#00f2fe]" />
          <span className="font-mono text-[13px] text-[#b9cacb] opacity-80">megha@meghsec-cloud:~$</span>
        </div>
        <div className="flex items-center gap-2">
          <Lock className="w-3.5 h-3.5 text-[#849495]" />
        </div>
      </div>

      {/* Terminal Body */}
      <div 
        className="p-4 font-mono text-[13px] leading-relaxed bg-[#0a0e17]/95 text-[#dfe2ef] space-y-3 max-h-[380px] overflow-y-auto select-text cursor-text"
        onClick={() => inputRef.current?.focus()}
      >
        {history.map((item) => (
          <div key={item.id} className="space-y-0.5">
            <div className="flex items-center gap-2 text-xs md:text-sm">
              <span className="text-[#4edea3] font-bold">$</span>
              <span className="text-[#00f2fe] font-mono">{item.command}</span>
            </div>
            {item.output}
          </div>
        ))}

        {/* Live Active Shell Line with Interactive Input */}
        <div className="pt-1 border-t border-[#3a494b]/20 space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-[#4edea3] font-bold">$</span>
            {activePromisc ? (
              <div className="flex items-center gap-1.5 flex-1">
                <span className="text-[#e0fdff] font-mono text-xs md:text-[13px]">
                  monitoring --interface eth0 --promisc
                </span>
                <span className="w-2 h-4 bg-[#00f2fe] terminal-cursor inline-block"></span>
              </div>
            ) : null}
          </div>

          {/* Interactive Shell Input Box */}
          <div className="flex items-center gap-2 pt-1">
            <span className="text-[#4edea3] font-bold text-xs">meghsec&gt;</span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="type 'help', 'nmap', 'status'..."
              className="bg-transparent border-none outline-none font-mono text-xs text-[#00f2fe] flex-1 placeholder:text-[#849495]/40"
            />
            {inputVal && (
              <button
                type="button"
                onClick={() => handleRunCommand(inputVal)}
                className="text-[11px] font-mono text-[#0a0e17] bg-[#00f2fe] px-2 py-0.5 rounded hover:bg-[#6ff6ff] transition-colors flex items-center gap-1"
              >
                <Play className="w-2.5 h-2.5 fill-current" />
                Run
              </button>
            )}
          </div>
        </div>
        <div ref={terminalEndRef} />
      </div>

      {/* Terminal Quick Command Action Bar */}
      <div className="bg-[#070a0f]/90 px-4 py-2 border-t border-[#3a494b]/30 flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-[#849495]">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-[#b9cacb] opacity-60">Presets:</span>
          {['status', 'nmap', 'aws', 'whoami', 'clear'].map((cmd) => (
            <button
              key={cmd}
              onClick={(e) => {
                e.stopPropagation();
                handleRunCommand(cmd);
              }}
              className="px-2 py-0.5 rounded bg-[#181b25] border border-[#3a494b]/50 text-[#dfe2ef] hover:border-[#00f2fe]/60 hover:text-[#00f2fe] transition-all cursor-pointer"
            >
              ${cmd}
            </button>
          ))}
        </div>
        <button
          onClick={() => {
            setHistory([
              {
                id: 'init-1',
                command: 'nmap -sV -sC 10.0.4.15',
                output: (
                  <p className="text-[#b9cacb] text-xs pl-4 mt-0.5 leading-relaxed font-mono">
                    PORT 443/tcp OPEN ssl/https | <span className="text-[#4edea3] font-medium">Hardened TLS 1.3</span>
                    <br />
                    <span className="opacity-60">|_ ssl-cert: Subject: commonName=*.meghsec.internal</span>
                  </p>
                ),
              },
              {
                id: 'init-2',
                command: 'aws s3 sync ./dist s3://meghsec-prod --acl private',
                output: (
                  <p className="text-[#b9cacb] text-xs pl-4 mt-0.5 leading-relaxed font-mono">
                    upload: ./index.html to s3://meghsec-prod/index.html
                    <br />
                    <span className="text-[#6ffbbe] font-medium">CloudFront Invalidation: IN_PROGRESS (200 OK)</span>
                  </p>
                ),
              },
              {
                id: 'init-3',
                command: 'status --defense-mode active',
                output: (
                  <div className="pl-4 mt-1 space-y-0.5 text-xs font-mono">
                    <p className="text-[#4edea3] font-medium">[✓] WAF Active</p>
                    <p className="text-[#4edea3] font-medium">[✓] Zero Trust Perimeter Armed</p>
                    <p className="text-[#00f2fe] font-medium">[✓] Threat Score: 0/100 (Safe)</p>
                  </div>
                ),
              },
            ]);
          }}
          title="Reset default output"
          className="flex items-center gap-1 hover:text-[#00f2fe] transition-colors"
        >
          <RotateCcw className="w-3 h-3" />
          <span>Reset</span>
        </button>
      </div>

      {/* Terminal Sub-bar */}
      <div className="bg-[#070a0f] px-4 py-2 border-t border-[#3a494b]/20 flex items-center justify-between font-mono text-[11px] text-[#849495]">
        <span>Kernel: Linux 6.8.0-kali</span>
        <span className="text-[#4edea3] flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#4edea3] pulse-status"></span>
          <span>{packetCount} Packets Captured • 0 Dropped</span>
        </span>
      </div>
    </div>
  );
};
