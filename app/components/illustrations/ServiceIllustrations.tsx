/* ─── Service Illustrations — inline SVG, no external dependencies ─── */

export function ProcessEngineeringIllustration() {
  return (
    <svg viewBox="0 0 320 110" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Vessels */}
      <rect x="20" y="25" width="40" height="60" rx="6" fill="#e8f0f8" stroke="#b8cfe0" strokeWidth="1.5"/>
      <rect x="140" y="15" width="40" height="70" rx="6" fill="#e8f0f8" stroke="#b8cfe0" strokeWidth="1.5"/>
      <rect x="260" y="30" width="40" height="50" rx="6" fill="#e8f0f8" stroke="#b8cfe0" strokeWidth="1.5"/>
      {/* Connecting pipes */}
      <line x1="60" y1="55" x2="140" y2="50" stroke="#7ec8e3" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="180" y1="50" x2="260" y2="55" stroke="#7ec8e3" strokeWidth="2.5" strokeLinecap="round"/>
      {/* Flow arrows */}
      <polyline points="105,47 115,50 105,53" stroke="#7ec8e3" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      <polyline points="225,52 235,55 225,58" stroke="#7ec8e3" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      {/* Labels */}
      <rect x="22" y="27" width="36" height="10" rx="3" fill="#0b2545" opacity="0.08"/>
      <rect x="142" y="17" width="36" height="10" rx="3" fill="#0b2545" opacity="0.08"/>
      <rect x="262" y="32" width="36" height="10" rx="3" fill="#0b2545" opacity="0.08"/>
      {/* Pipe stubs top */}
      <rect x="36" y="15" width="8" height="12" rx="2" fill="#b8cfe0"/>
      <rect x="156" y="5" width="8" height="12" rx="2" fill="#b8cfe0"/>
      <rect x="276" y="20" width="8" height="12" rx="2" fill="#b8cfe0"/>
      {/* Pipe stubs bottom */}
      <rect x="36" y="83" width="8" height="12" rx="2" fill="#b8cfe0"/>
      <rect x="156" y="83" width="8" height="12" rx="2" fill="#b8cfe0"/>
      <rect x="276" y="78" width="8" height="12" rx="2" fill="#b8cfe0"/>
    </svg>
  );
}

export function CivilStructuralIllustration() {
  return (
    <svg viewBox="0 0 320 110" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Ground */}
      <line x1="20" y1="95" x2="300" y2="95" stroke="#d0dae4" strokeWidth="2"/>
      {/* Columns */}
      <rect x="50" y="30" width="14" height="66" rx="2" fill="#c8d8e8" stroke="#a0bacf" strokeWidth="1.5"/>
      <rect x="153" y="20" width="14" height="76" rx="2" fill="#c8d8e8" stroke="#a0bacf" strokeWidth="1.5"/>
      <rect x="256" y="30" width="14" height="66" rx="2" fill="#c8d8e8" stroke="#a0bacf" strokeWidth="1.5"/>
      {/* Top beam */}
      <rect x="44" y="22" width="232" height="12" rx="3" fill="#0b2545" opacity="0.15" stroke="#7a9bb5" strokeWidth="1.5"/>
      {/* Cross bracing */}
      <line x1="64" y1="34" x2="153" y2="94" stroke="#7ec8e3" strokeWidth="1.5" strokeDasharray="4 3"/>
      <line x1="153" y1="34" x2="64" y2="94" stroke="#7ec8e3" strokeWidth="1.5" strokeDasharray="4 3"/>
      <line x1="167" y1="34" x2="256" y2="94" stroke="#7ec8e3" strokeWidth="1.5" strokeDasharray="4 3"/>
      <line x1="256" y1="34" x2="167" y2="94" stroke="#7ec8e3" strokeWidth="1.5" strokeDasharray="4 3"/>
      {/* Base plates */}
      <rect x="44" y="92" width="26" height="6" rx="1" fill="#a0bacf"/>
      <rect x="147" y="92" width="26" height="6" rx="1" fill="#a0bacf"/>
      <rect x="250" y="92" width="26" height="6" rx="1" fill="#a0bacf"/>
    </svg>
  );
}

export function MechanicalEngineeringIllustration() {
  return (
    <svg viewBox="0 0 320 110" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Main vessel / heat exchanger body */}
      <rect x="60" y="25" width="200" height="60" rx="8" fill="#e8f0f8" stroke="#a0bacf" strokeWidth="1.5"/>
      {/* Tube sheets */}
      <rect x="60" y="25" width="20" height="60" rx="4" fill="#c8d8e8" stroke="#a0bacf" strokeWidth="1.5"/>
      <rect x="240" y="25" width="20" height="60" rx="4" fill="#c8d8e8" stroke="#a0bacf" strokeWidth="1.5"/>
      {/* Internal tubes */}
      <line x1="80" y1="42" x2="240" y2="42" stroke="#7ec8e3" strokeWidth="2"/>
      <line x1="80" y1="55" x2="240" y2="55" stroke="#7ec8e3" strokeWidth="2"/>
      <line x1="80" y1="68" x2="240" y2="68" stroke="#7ec8e3" strokeWidth="2"/>
      {/* Nozzles */}
      <rect x="30" y="48" width="32" height="14" rx="3" fill="#b8cfe0" stroke="#a0bacf" strokeWidth="1.5"/>
      <rect x="258" y="48" width="32" height="14" rx="3" fill="#b8cfe0" stroke="#a0bacf" strokeWidth="1.5"/>
      {/* Shell nozzles */}
      <rect x="138" y="8" width="14" height="20" rx="3" fill="#b8cfe0" stroke="#a0bacf" strokeWidth="1.5"/>
      <rect x="168" y="82" width="14" height="20" rx="3" fill="#b8cfe0" stroke="#a0bacf" strokeWidth="1.5"/>
      {/* Flow arrows */}
      <polyline points="22,55 30,55" stroke="#1b4f72" strokeWidth="2" strokeLinecap="round"/>
      <polyline points="290,55 298,55" stroke="#1b4f72" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

export function PipingEngineeringIllustration() {
  return (
    <svg viewBox="0 0 320 110" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Main horizontal pipe */}
      <rect x="20" y="46" width="180" height="18" rx="4" fill="#ddeaf5" stroke="#7ec8e3" strokeWidth="1.5"/>
      {/* Vertical riser */}
      <rect x="118" y="10" width="18" height="56" rx="4" fill="#ddeaf5" stroke="#7ec8e3" strokeWidth="1.5"/>
      {/* Elbow */}
      <rect x="200" y="46" width="18" height="54" rx="4" fill="#ddeaf5" stroke="#7ec8e3" strokeWidth="1.5"/>
      {/* Branch pipe */}
      <rect x="200" y="60" width="80" height="18" rx="4" fill="#ddeaf5" stroke="#7ec8e3" strokeWidth="1.5"/>
      {/* Valves */}
      <rect x="60" y="44" width="16" height="22" rx="3" fill="#0b2545" opacity="0.2"/>
      <rect x="58" y="42" width="20" height="6" rx="2" fill="#0b2545" opacity="0.3"/>
      <rect x="60" y="56" width="16" height="12" rx="2" fill="#0b2545" opacity="0.15"/>
      {/* Second valve */}
      <rect x="240" y="58" width="16" height="22" rx="3" fill="#0b2545" opacity="0.2"/>
      <rect x="238" y="56" width="20" height="6" rx="2" fill="#0b2545" opacity="0.3"/>
      {/* Flange indicators */}
      <rect x="20" y="43" width="6" height="24" rx="1" fill="#a0bacf"/>
      <rect x="194" y="43" width="6" height="24" rx="1" fill="#a0bacf"/>
      <rect x="276" y="57" width="6" height="24" rx="1" fill="#a0bacf"/>
      {/* Dimension line */}
      <line x1="20" y1="100" x2="198" y2="100" stroke="#b8cfe0" strokeWidth="1" strokeDasharray="3 2"/>
      <line x1="20" y1="97" x2="20" y2="103" stroke="#b8cfe0" strokeWidth="1"/>
      <line x1="198" y1="97" x2="198" y2="103" stroke="#b8cfe0" strokeWidth="1"/>
    </svg>
  );
}

export function ElectricalInstrumentationIllustration() {
  return (
    <svg viewBox="0 0 320 110" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Panel box */}
      <rect x="40" y="20" width="100" height="70" rx="6" fill="#e8f0f8" stroke="#a0bacf" strokeWidth="1.5"/>
      {/* Panel items */}
      <rect x="52" y="32" width="30" height="16" rx="3" fill="#0b2545" opacity="0.12"/>
      <rect x="90" y="32" width="30" height="16" rx="3" fill="#0b2545" opacity="0.12"/>
      <rect x="52" y="56" width="30" height="16" rx="3" fill="#7ec8e3" opacity="0.4"/>
      <rect x="90" y="56" width="30" height="16" rx="3" fill="#7ec8e3" opacity="0.25"/>
      {/* Cable trays */}
      <rect x="140" y="50" width="80" height="10" rx="2" fill="#c8d8e8" stroke="#a0bacf" strokeWidth="1"/>
      <line x1="150" y1="50" x2="150" y2="60" stroke="#a0bacf" strokeWidth="1"/>
      <line x1="160" y1="50" x2="160" y2="60" stroke="#a0bacf" strokeWidth="1"/>
      <line x1="170" y1="50" x2="170" y2="60" stroke="#a0bacf" strokeWidth="1"/>
      <line x1="180" y1="50" x2="180" y2="60" stroke="#a0bacf" strokeWidth="1"/>
      <line x1="190" y1="50" x2="190" y2="60" stroke="#a0bacf" strokeWidth="1"/>
      <line x1="200" y1="50" x2="200" y2="60" stroke="#a0bacf" strokeWidth="1"/>
      {/* Instrument circles */}
      <circle cx="250" cy="35" r="16" fill="#e8f0f8" stroke="#7ec8e3" strokeWidth="1.5"/>
      <circle cx="250" cy="35" r="8" fill="#7ec8e3" opacity="0.2"/>
      <circle cx="290" cy="65" r="16" fill="#e8f0f8" stroke="#7ec8e3" strokeWidth="1.5"/>
      <circle cx="290" cy="65" r="8" fill="#7ec8e3" opacity="0.2"/>
      {/* Connection lines */}
      <line x1="220" y1="55" x2="236" y2="42" stroke="#b8cfe0" strokeWidth="1.5" strokeDasharray="3 2"/>
      <line x1="220" y1="57" x2="276" y2="67" stroke="#b8cfe0" strokeWidth="1.5" strokeDasharray="3 2"/>
    </svg>
  );
}
