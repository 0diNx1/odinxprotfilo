// ---- Edit your content here ----
const projects = [
  {name:"VLAN & OSPF Network Design", meta:"Cisco IOS · Packet Tracer · VLAN · OSPF · IPv4",
   desc:"A Cisco lab with VLAN 10 and 20, 802.1Q trunking, Router-on-a-Stick sub-interfaces and point-to-point links running OSPF Area 0. I checked routing and connectivity, fixed the problems I hit along the way, and wrote up the topology, IP plan, configs and tests.",
   links:[["write-up","https://github.com/0diNx1/net-001.git"]], ph:""},
  {name:"Advanced IPv4 Subnet Calculator", meta:"JavaScript · IPv4 · Subnetting",
   desc:"A subnet calculator for working out networks, masks and host ranges.",
   links:[["code","https://github.com/0diNx1/subnet-calculator"]]},
  {name:"Web2APK Pro", meta:"HTML · CSS · JavaScript · Android",
   desc:"Turns a plain HTML/CSS/JavaScript project (no framework, no build step) into an installable Android APK.",
   links:[["code","https://github.com/0diNx1/web2apk-pro"]]},
  {name:"EvilADB", meta:"Bash · ADB · Android",
   desc:"A Bash CLI for managing Android devices over ADB, made for authorized security testing and learning.",
   links:[["code","https://github.com/0diNx1/EvilADB"]]}
];
const certs = [
  {title:"Introduction to Cybersecurity", by:"Cisco Networking Academy", date:"30 Mar 2026", links:[["certificate (pdf)","assets/certs/cisco-intro-to-cybersecurity.pdf"]]},
  {title:"CORE", by:"Hackviser", date:"25 sep 2026", links:[["verify","https://hackviser.com/verify?id=HV-CORE-13974BSF"]]},
  {title:"HackAdvisor Certified", by:"HackAdvisor", date:" 18 May 2026", links:[["verify","https://labs.hackadvisor.io/en/cert/20ead683-c1e7-4e5a-8f4c-43d7f07d8a77"]]},
  {title:"Advent of Cyber 2024", by:"TryHackMe", date:"31 Dec 2024", links:[["certificate (pdf)","assets/certs/tryhackme-advent-of-cyber-2024.pdf"]], note:"Issued under my TryHackMe display name, ENJAMUL."}
];
const ctf = [
  {event:"07CTF", year:"2025", result:"66", notes:"solved 20 chall"},
  {event:"BDSec CTF 2025", year:"2025", result:"116", notes:"solved 30+ chall"}
];
const articles = [
  {title:"A Massive Problem — Privilege Escalation via Mass Assignment", date:"Jun 6, 2026", url:"https://0xodinx.medium.com/a-massive-problem-privilege-escalation-via-mass-assignment-475c4b0ba1f6"},
  {title:"Database Credentials Theft -Network Forensics-KnightCTF-2026", date:"Feb 5, 2026", url:"https://0xodinx.medium.com/database-credentials-theft-network-forensics-knightctf-2026-8d2e0dc05bfc"},
  {title:"Database Credentials Theft -Network Forensics-KnightCTF-2026", date:"Feb 5, 2026", url:"https://0xodinx.medium.com/database-credentials-theft-network-forensics-knightctf-2026-8d2e0dc05bfc"}

];
// ---- Rendering ----
const e = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const ph = s => /\[edit\]/.test(s) ? `<span class="ph">${e(s)}</span>` : e(s);
const a = ([t,u]) => `<a href="${e(u)}"${u.startsWith("http")?' target="_blank" rel="noopener"':""}>${e(t)}</a>`;
const $ = id => document.getElementById(id);

$("projectList").innerHTML = projects.map(p => `<li><h3>${e(p.name)}</h3><div class="meta">${e(p.meta)}</div><p>${e(p.desc)}</p><div>${p.links.map(a).join("")}</div>${p.ph?`<p class="ph">${e(p.ph)}</p>`:""}</li>`).join("");
$("certList").innerHTML = certs.map(c => `<li><h3>${e(c.title)}</h3><div class="meta">${e(c.by)} · ${ph(c.date)}</div>${c.note?`<p>${e(c.note)}</p>`:""}<div>${c.links.map(a).join("")}</div></li>`).join("");
$("ctfRows").innerHTML = ctf.map(r => `<tr><td>${ph(r.event)}</td><td>${ph(r.year)}</td><td>${ph(r.result)}</td><td>${ph(r.notes)}</td></tr>`).join("");
$("articleList").innerHTML = articles.map(r => `<li><a href="${e(r.url)}" target="_blank" rel="noopener">${ph(r.title)}</a> <span class="meta">${ph(r.date)}</span></li>`).join("");
$("yr").textContent = new Date().getFullYear();

// Dhaka local time
const tick = () => { $("clock").textContent = new Date().toLocaleTimeString("en-GB",{timeZone:"Asia/Dhaka",hour:"2-digit",minute:"2-digit"}) + " local time"; };
tick(); setInterval(tick, 30000);

// highlight current section in nav
const links = [...document.querySelectorAll("#nav a")];
const io = new IntersectionObserver(es => es.forEach(x => { if (x.isIntersecting) links.forEach(l => l.classList.toggle("on", l.getAttribute("href") === "#" + x.target.id)); }), {rootMargin:"-30% 0px -60% 0px"});
document.querySelectorAll("main section").forEach(s => io.observe(s));
