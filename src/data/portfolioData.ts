export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  description: string;
  skills: string[];
  footerLeft: string;
  footerRight: string;
  accentColor: string;
}

export interface ProjectLab {
  id: string;
  envTag: string;
  envSubtag: string;
  badge: string;
  title: string;
  categoryTitle: string;
  categoryIcon: string;
  description: string;
  highlights: {
    label: string;
    value: string;
    color: string;
  }[];
  tags: string[];
  actionLabel: string;
  statusBadge: string;
  statusColor: string;
  type: 'architecture' | 'topology' | 'source';
}

export interface CertificationMilestone {
  id: string;
  title: string;
  status: string;
  statusColor: string;
  description: string;
  progress?: number;
  completed?: boolean;
}

export interface PlatformProfile {
  id: string;
  abbr: string;
  name: string;
  subtitle: string;
  url: string;
  badgeColor: string;
}

export const PORTFOLIO_DATA = {
  profile: {
    name: "Megha Bharti",
    handle: "MeghSec",
    title: "Securing Cloud Infrastructures & Exploring Cyber Frontiers",
    rolePill: "BCA 1st Year | Cloud & Security Enthusiast",
    bio: "Hi, I'm Megha Bharti. A first-year BCA student passionate about Cloud Architecture, Network Defense, and Threat Analysis. Building homelabs and defending systems one packet at a time.",
    email: "megha.bharti.cloudsec@gmail.com",
    pgpFingerprint: "8FA4 3C21 99B8 E250 49AA 010F MeghSec-2025",
    pgpPublicKey: `-----BEGIN PGP PUBLIC KEY BLOCK-----
Version: OpenPGP.js v5.11.0
Comment: MeghSec Primary Endpoint Verification Key

mQGNBF+dFZEBDAC5u9tP34aH3uF+BvE72H5vX7k0pLkD8aD0bZ9lC6dK8e3F
+eKxV1pQsGzV6D9v7fW4aG2L8rF9cE4mP8sA3wB1xY5cE9bZ1vX7mK0pLkD8
aD0bZ9lC6dK8e3F+eKxV1pQsGzV6D9v7fW4aG2L8rF9cE4mP8sA3wB1xY5cE
9bZ1vX7mK0pLkD8aD0bZ9lC6dK8e3F+eKxV1pQsGzV6D9v7fW4aG2L8rF9cE
4mP8sA3wB1xY5cE9bZ1vX7mK0pLkD8aD0bZ9lC6dK8e3F+eKxV1pQsGzV6D9
v7fW4aG2L8rF9cE4mP8sA3wB1xY5cE9bZ1vX7mK0pLkD8aD0bZ9lC6dK8e3F
=Jk89
-----END PGP PUBLIC KEY BLOCK-----`,
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    twitter: "https://x.com",
    telemetry: {
      awsTrack: "Cloud Practitioner Track",
      socOps: "Network Recon & IDS",
    },
    metrics: [
      {
        value: "12+",
        label: "ACTIVE LABS",
        description: "Hands-on Homelabs Configured & Documented",
        icon: "lan",
        color: "text-[#00f2fe]",
      },
      {
        value: "Top 15%",
        label: "THM RANK",
        description: "TryHackMe Badges & Offensive/Defensive Rooms",
        icon: "military_tech",
        color: "text-[#4edea3]",
      },
      {
        value: "8+",
        label: "PROD RUNTIMES",
        description: "Cloud Deployments on AWS & Cloudflare Edge",
        icon: "cloud",
        color: "text-[#00f2fe]",
      },
      {
        value: "2027/28",
        label: "ACADEMIC",
        description: "Expected Graduation: BCA (Cloud & Security)",
        icon: "school",
        color: "text-[#c0c1ff]",
      },
    ],
  },

  skills: [
    {
      id: "cloud-infra",
      title: "Cloud Infrastructure",
      icon: "cloud_done",
      description: "Hardened multi-tenant hosting, storage partitioning, and perimeter routing architecture.",
      skills: [
        "AWS S3 & CloudFront",
        "AWS IAM Policies",
        "VPC Subnetting",
        "Cloudflare Zero Trust",
        "Serverless Static Hosting",
      ],
      footerLeft: "Primary Focus",
      footerRight: "Level: Advanced Apprentice",
      accentColor: "#00f2fe",
    },
    {
      id: "cyber-defense",
      title: "Cybersecurity & Defense",
      icon: "security",
      description: "Protocol inspection, signature rule auditing, and surface vulnerability mitigation.",
      skills: [
        "Nmap Scanning",
        "Wireshark Analysis",
        "Linux Hardening",
        "OWASP Top 10",
        "Snort IDS Basics",
      ],
      footerLeft: "SOC Lab Tested",
      footerRight: "Level: Intermediate",
      accentColor: "#4edea3",
    },
    {
      id: "scripting-systems",
      title: "Scripting & Systems",
      icon: "terminal",
      description: "Automating threat discovery and building terminal-driven diagnostic tooling.",
      skills: [
        "Kali / Ubuntu Server",
        "Bash Automation",
        "Python 3 (Sockets)",
        "SQL Essentials",
        "C / C++ Basics",
      ],
      footerLeft: "POSIX Native",
      footerRight: "Level: Intermediate",
      accentColor: "#c0c1ff",
    },
    {
      id: "devops-tooling",
      title: "DevOps & Tooling",
      icon: "settings_suggest",
      description: "Local virtualization hypervisors, container primitives, and CI/CD triggers.",
      skills: [
        "Git & GitHub Actions",
        "Docker Fundamentals",
        "VirtualBox & VMware",
        "Postman REST API",
        "UFW / iptables",
      ],
      footerLeft: "Homelab Stack",
      footerRight: "Level: Practical Hands-On",
      accentColor: "#00f2fe",
    },
  ] as SkillCategory[],

  projects: [
    {
      id: "cloud-static-portfolio",
      envTag: "AWS::us-east-1 // S3+CDN",
      envSubtag: "Prod Enforced",
      badge: "INFRASTRUCTURE ARCHITECTURE",
      categoryTitle: "INFRASTRUCTURE ARCHITECTURE",
      categoryIcon: "shield",
      title: "Secure Cloud Static Portfolio",
      description:
        "Production-grade static web architecture deployed on Amazon S3 with an encrypted origin access control (OAC) CloudFront distribution. Implements custom AWS WAF rate-limiting rules, automated SSL/TLS termination, and continuous zero-downtime deployment pipelines via GitHub Actions.",
      highlights: [
        { label: "TLS Security:", value: "Strict TLS 1.3 / HSTS", color: "text-[#4edea3]" },
        { label: "WAF Protection:", value: "Rate Limit 100 req/5m", color: "text-[#00f2fe]" },
        { label: "CI/CD:", value: "GitHub Actions Auto-Sync", color: "text-[#dfe2ef]" },
      ],
      tags: ["AWS S3", "CloudFront", "AWS WAF", "Route 53", "GitHub Actions"],
      actionLabel: "View Architecture Spec",
      statusBadge: "● 100% Uptime",
      statusColor: "text-[#4edea3]",
      type: "architecture",
    },
    {
      id: "virtual-soc-lab",
      envTag: "SOC::VNet::192.168.56.0/24",
      envSubtag: "Air-Gapped Segment",
      badge: "NETWORK DEFENSE & IDS",
      categoryTitle: "NETWORK DEFENSE & IDS",
      categoryIcon: "hub",
      title: "Virtual SOC / Home Network Lab",
      description:
        "An isolated host-only virtualization environment configured across VirtualBox and VMware to simulate attacker-defender network workflows. Deployed Snort IDS with custom rule alerts to intercept simulated reconnaissance probes and inspect packet payloads inside Wireshark.",
      highlights: [
        { label: "IDS Engine:", value: "Snort Community Rules", color: "text-[#4edea3]" },
        { label: "Packet Capture:", value: "Wireshark PCAP Filter", color: "text-[#00f2fe]" },
        { label: "Isolation:", value: "VLAN Segmented Subnets", color: "text-[#dfe2ef]" },
      ],
      tags: ["Wireshark", "Snort", "Kali Linux", "VirtualBox", "Network Defense"],
      actionLabel: "View Lab Topology",
      statusBadge: "Documentation Live",
      statusColor: "text-[#849495]",
      type: "topology",
    },
    {
      id: "python-recon-scanner",
      envTag: "CLI::PyTool::v1.4",
      envSubtag: "Open Source",
      badge: "AUTOMATION & RECON",
      categoryTitle: "AUTOMATION & RECON",
      categoryIcon: "code",
      title: "Automated Port Scanner & Recon Script",
      description:
        "A multithreaded Python utility engineered to rapidly evaluate TCP socket connectivity across target IP subnets. Automates service banner extraction, detects insecure default services (Telnet, cleartext FTP, unpatched HTTP), and auto-generates Markdown vulnerability audit reports.",
      highlights: [
        { label: "Concurrency:", value: "ThreadPoolExecutor (100w)", color: "text-[#4edea3]" },
        { label: "Banner Grab:", value: "RAW Socket Handshake", color: "text-[#00f2fe]" },
        { label: "Export:", value: "Auto Markdown & JSON", color: "text-[#dfe2ef]" },
      ],
      tags: ["Python 3", "Socket API", "Multi-threading", "Network Recon", "CVE Mapping"],
      actionLabel: "Inspect Repository Source",
      statusBadge: "MIT License",
      statusColor: "text-[#4edea3]",
      type: "source",
    },
  ] as ProjectLab[],

  milestones: [
    {
      id: "aws-clf",
      title: "AWS Certified Cloud Practitioner (CLF-C02)",
      status: "In Progress (75%)",
      statusColor: "text-[#4edea3] border-[#4edea3]/30",
      description:
        "Comprehensive mastery of AWS global infrastructure, core compute/storage/database paradigms, security token IAM policies, and cloud cost management.",
      progress: 75,
    },
    {
      id: "sec-plus",
      title: "CompTIA Security+ (SY0-701)",
      status: "Target: Q3 2025",
      statusColor: "text-[#00f2fe] border-[#00f2fe]/30",
      description:
        "Preparing foundational knowledge in enterprise vulnerability assessment, threat landscape vectors, cryptographic standards, and incidence response mitigation frameworks.",
    },
    {
      id: "thm-cert",
      title: "TryHackMe: Pre-Security & Cyber Defense 101",
      status: "Completed",
      statusColor: "text-[#4edea3] border-[#4edea3]/30",
      description:
        "Completed comprehensive modules covering Network Fundamentals, Linux CLI Navigation, Web Application Security basics, and Log Analysis.",
      completed: true,
    },
  ] as CertificationMilestone[],

  platforms: [
    {
      id: "thm",
      abbr: "THM",
      name: "TryHackMe",
      subtitle: "Top 15% Global • Pre-Security Path",
      url: "https://tryhackme.com",
      badgeColor: "text-[#4edea3]",
    },
    {
      id: "htb",
      abbr: "HTB",
      name: "Hack The Box",
      subtitle: "Starting Point Tier 1 & Tier 2",
      url: "https://hackthebox.com",
      badgeColor: "text-[#00f2fe]",
    },
    {
      id: "lc",
      abbr: "LC",
      name: "LeetCode (Python & C)",
      subtitle: "Data Structures & Systems Algorithms",
      url: "https://leetcode.com",
      badgeColor: "text-[#c0c1ff]",
    },
  ] as PlatformProfile[],

  resumeData: {
    name: "Megha Bharti",
    handle: "MeghSec",
    contact: "megha.bharti.cloudsec@gmail.com",
    education: "Bachelor of Computer Applications (BCA) - Cloud Computing & Cybersecurity (2024 - 2027/28)",
    summary:
      "First-year BCA student with a deep focus on defensive cloud architecture, virtual SOC operations, and threat hunting. Hands-on experience configuring AWS infrastructure, Snort IDS networks, Linux hardening, and socket-level automation in Python.",
    coreCompetencies: [
      "Cloud Infrastructure: AWS S3, CloudFront, Route 53, AWS WAF, IAM Least Privilege, VPC Subnetting",
      "Network Security: Wireshark Packet Inspection, Snort IDS Community Rules, Nmap Port Auditing, Linux iptables/UFW",
      "Programming & Automation: Python 3 (Sockets, Concurrency), Bash Scripting, Linux POSIX API, C Systems Programming",
      "Virtualization & Tooling: VirtualBox, VMware Workstation, Docker Containers, Git & GitHub Actions CI/CD",
    ],
  },
};
