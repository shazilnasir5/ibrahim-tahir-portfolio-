// Generates authentic-looking vector SVG certificate documents formatted as standard base64 data URIs
// Ensures each certificate displays Ibrahim Tahir Sindhu's name, official borders, signatures, and seals safely

export function generateCertificateSvg(
  title: string,
  issuer: string,
  date: string,
  recipientName: string = "Ibrahim Tahir Sindhu",
  category: string = "Certificate"
): string {
  // Encode special characters
  const safeTitle = title.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const safeIssuer = issuer.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const safeRecipient = recipientName.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const safeDate = date.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  // Unique suffix to prevent SVG element ID collision
  const idSuffix = Math.random().toString(36).substring(2, 8);
  const bgGradId = `bgGrad_${idSuffix}`;
  const goldGradId = `goldGrad_${idSuffix}`;
  const emeraldGradId = `emeraldGrad_${idSuffix}`;
  const shadowId = `shadow_${idSuffix}`;

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 550" width="800" height="550">
    <defs>
      <linearGradient id="${bgGradId}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FCFCFA"/>
        <stop offset="50%" stop-color="#F5F3ED"/>
        <stop offset="100%" stop-color="#EFECE6"/>
      </linearGradient>
      <linearGradient id="${goldGradId}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#D4AF37"/>
        <stop offset="30%" stop-color="#FFF2A1"/>
        <stop offset="70%" stop-color="#AA771C"/>
        <stop offset="100%" stop-color="#6B4F10"/>
      </linearGradient>
      <linearGradient id="${emeraldGradId}" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#059669"/>
        <stop offset="100%" stop-color="#047857"/>
      </linearGradient>
      <filter id="${shadowId}" x="-5%" y="-5%" width="110%" height="110%">
        <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#000000" flood-opacity="0.15"/>
      </filter>
    </defs>

    <!-- Base Card Background -->
    <rect x="0" y="0" width="800" height="550" rx="12" fill="url(#${bgGradId})"/>
    
    <!-- Outer Gold Border -->
    <rect x="18" y="18" width="764" height="514" rx="8" fill="none" stroke="url(#${goldGradId})" stroke-width="4"/>
    <rect x="26" y="26" width="748" height="498" rx="6" fill="none" stroke="#1E293B" stroke-width="1.5" stroke-opacity="0.4"/>
    
    <!-- Ornate Corner Accents -->
    <g stroke="url(#${goldGradId})" stroke-width="2" fill="none">
      <path d="M 32,48 L 48,32 L 64,48 L 48,64 Z"/>
      <path d="M 768,48 L 752,32 L 736,48 L 752,64 Z"/>
      <path d="M 32,502 L 48,486 L 64,502 L 48,518 Z"/>
      <path d="M 768,502 L 752,486 L 736,502 L 752,518 Z"/>
    </g>

    <!-- Top Watermark Stripe -->
    <path d="M 30,30 L 770,30 L 770,45 L 30,45 Z" fill="url(#${emeraldGradId})" opacity="0.85"/>
    
    <!-- Institution / Issuer Header -->
    <text x="400" y="85" text-anchor="middle" font-family="'Georgia', 'Times New Roman', serif" font-size="16" font-weight="bold" fill="#0F172A" letter-spacing="2">
      ${safeIssuer.toUpperCase()}
    </text>

    <!-- Main Title -->
    <text x="400" y="135" text-anchor="middle" font-family="'Georgia', 'Times New Roman', serif" font-size="28" font-weight="900" fill="#065F46" letter-spacing="1">
      CERTIFICATE OF APPRECIATION
    </text>
    
    <line x1="250" y1="150" x2="550" y2="150" stroke="url(#${goldGradId})" stroke-width="2"/>

    <!-- Subtitle -->
    <text x="400" y="185" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#475569" letter-spacing="1">
      THIS CERTIFICATE IS PROUDLY PRESENTED TO
    </text>

    <!-- Recipient Name -->
    <text x="400" y="235" text-anchor="middle" font-family="'Georgia', 'Times New Roman', serif" font-size="34" font-weight="bold" fill="#022C22" font-style="italic">
      ${safeRecipient}
    </text>
    <line x1="200" y1="250" x2="600" y2="250" stroke="#059669" stroke-width="1.5" stroke-dasharray="4 2"/>

    <!-- Description / Event Title -->
    <text x="400" y="290" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#334155">
      for outstanding active participation and contribution in
    </text>

    <!-- Certificate Course / Achievement Title -->
    <text x="400" y="330" text-anchor="middle" font-family="'Georgia', 'Times New Roman', serif" font-size="20" font-weight="bold" fill="#0F172A">
      ${safeTitle}
    </text>

    <!-- Gold Metallic Seal Stamp -->
    <g transform="translate(400, 420)" filter="url(#${shadowId})">
      <circle cx="0" cy="0" r="38" fill="url(#${goldGradId})"/>
      <circle cx="0" cy="0" r="32" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-dasharray="3 2"/>
      <text x="0" y="4" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="bold" fill="#3F2B00">
        OFFICIAL
      </text>
      <text x="0" y="14" text-anchor="middle" font-family="sans-serif" font-size="8" font-weight="bold" fill="#3F2B00">
        SEAL
      </text>
    </g>

    <!-- Date Section (Left) -->
    <g transform="translate(140, 440)">
      <line x1="0" y1="0" x2="160" y2="0" stroke="#64748B" stroke-width="1"/>
      <text x="80" y="18" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1E293B">
        ${safeDate}
      </text>
      <text x="80" y="32" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#64748B">
        DATE OF ISSUANCE
      </text>
    </g>

    <!-- Signature Section (Right) -->
    <g transform="translate(500, 440)">
      <path d="M 20,-15 Q 40,-35 80,-10 T 140,-20" stroke="#065F46" stroke-width="2" fill="none"/>
      <line x1="0" y1="0" x2="160" y2="0" stroke="#64748B" stroke-width="1"/>
      <text x="80" y="18" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1E293B">
        AUTHORIZED SIGNATURE
      </text>
      <text x="80" y="32" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#64748B">
        ${safeIssuer.substring(0, 28)}
      </text>
    </g>

  </svg>`;

  const base64Svg = typeof window !== 'undefined'
    ? window.btoa(unescape(encodeURIComponent(svg)))
    : Buffer.from(svg).toString('base64');

  return `data:image/svg+xml;base64,${base64Svg}`;
}

export function generateNigabCertificateSvg(): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 720" width="1000" height="720">
    <!-- White Certificate Background -->
    <rect x="0" y="0" width="1000" height="720" fill="#FFFFFF"/>
    
    <!-- Outer Decorative Green Vines Border -->
    <rect x="20" y="20" width="960" height="680" fill="none" stroke="#1C5235" stroke-width="3"/>
    <rect x="28" y="28" width="944" height="664" fill="none" stroke="#2D7A4F" stroke-width="1.5" stroke-dasharray="10 5"/>
    <rect x="36" y="36" width="928" height="648" fill="none" stroke="#1C5235" stroke-width="1"/>
    
    <!-- Corner Crest Emblems -->
    <g fill="#1C5235" opacity="0.9">
      <!-- Top Left -->
      <circle cx="50" cy="50" r="12"/>
      <circle cx="50" cy="50" r="8" fill="#FFFFFF"/>
      <circle cx="50" cy="50" r="5" fill="#1C5235"/>
      <!-- Top Right -->
      <circle cx="950" cy="50" r="12"/>
      <circle cx="950" cy="50" r="8" fill="#FFFFFF"/>
      <circle cx="950" cy="50" r="5" fill="#1C5235"/>
      <!-- Bottom Left -->
      <circle cx="50" cy="670" r="12"/>
      <circle cx="50" cy="670" r="8" fill="#FFFFFF"/>
      <circle cx="50" cy="670" r="5" fill="#1C5235"/>
      <!-- Bottom Right -->
      <circle cx="950" cy="670" r="12"/>
      <circle cx="950" cy="670" r="8" fill="#FFFFFF"/>
      <circle cx="950" cy="670" r="5" fill="#1C5235"/>
    </g>

    <!-- Top Header Title: Pakistan Agricultural Research Council -->
    <text x="500" y="95" text-anchor="middle" font-family="'Times New Roman', 'Georgia', serif" font-size="28" font-weight="bold" fill="#1C5235" letter-spacing="1">
      Pakistan Agricultural Research Council
    </text>

    <!-- Center Top Green Crest/Logo -->
    <g transform="translate(500, 145)">
      <circle cx="0" cy="0" r="26" fill="#F0FDF4" stroke="#1C5235" stroke-width="2"/>
      <polygon points="0,-16 12,10 -12,10" fill="#2D7A4F"/>
      <circle cx="0" cy="-2" r="6" fill="#D97706"/>
      <path d="M-10,12 Q0,20 10,12" fill="none" stroke="#1C5235" stroke-width="2"/>
    </g>

    <!-- Institution Names -->
    <text x="500" y="198" text-anchor="middle" font-family="'Times New Roman', 'Georgia', serif" font-size="21" font-weight="bold" fill="#2D3748">
      Agriculture Poly-technique Institute
    </text>
    <text x="500" y="222" text-anchor="middle" font-family="'Times New Roman', 'Georgia', serif" font-size="19" font-weight="bold" fill="#2D3748">
      National Agricultural Research Centre
    </text>
    <text x="500" y="244" text-anchor="middle" font-family="'Times New Roman', 'Georgia', serif" font-size="17" font-weight="bold" fill="#4A5568">
      Islamabad
    </text>

    <!-- Right Side Serial & Date -->
    <text x="880" y="220" text-anchor="end" font-family="'Times New Roman', serif" font-size="15" font-style="italic" font-weight="bold" fill="#2D3748">
      07<tspan font-size="11" dy="-5">th</tspan><tspan font-size="15" dy="5"> August 2026</tspan>
    </text>
    <text x="880" y="244" text-anchor="end" font-family="'Times New Roman', serif" font-size="15" font-weight="bold" fill="#2D3748">
      No: 20826
    </text>

    <!-- Cursive Award Phrase -->
    <text x="500" y="290" text-anchor="middle" font-family="'Brush Script MT', 'Georgia', cursive, serif" font-size="28" font-style="italic" fill="#1C5235">
      awards this certificate to
    </text>

    <!-- Recipient Name & Details -->
    <text x="500" y="332" text-anchor="middle" font-family="'Times New Roman', 'Georgia', serif" font-size="29" font-weight="bold" fill="#1A202C">
      Ibrahim Tahir Sindhu
    </text>

    <text x="500" y="358" text-anchor="middle" font-family="'Times New Roman', serif" font-size="15" font-style="italic" fill="#4A5568">
      (Reg. #SU91-BSBTM-F23-010)
    </text>

    <text x="500" y="380" text-anchor="middle" font-family="'Times New Roman', serif" font-size="16" font-style="italic" fill="#2D3748">
      Department of Biotechnology, Superior University Lahore
    </text>

    <!-- Completion Body Text -->
    <text x="500" y="418" text-anchor="middle" font-family="'Times New Roman', serif" font-size="16" font-style="italic" fill="#2D3748">
      On successful completion of Internship on
    </text>

    <text x="500" y="450" text-anchor="middle" font-family="'Times New Roman', 'Georgia', serif" font-size="21" font-weight="bold" fill="#1A202C">
      “Molecular Techniques Used in Nano Therapeutic Lab”
    </text>

    <text x="500" y="480" text-anchor="middle" font-family="'Times New Roman', serif" font-size="16" font-style="italic" fill="#2D3748">
      From 06<tspan font-size="11" dy="-4">th</tspan><tspan font-size="16" dy="4"> July to 07</tspan><tspan font-size="11" dy="-4">th</tspan><tspan font-size="16" dy="4"> August 2026</tspan>
    </text>

    <!-- Footer Institute Title -->
    <text x="500" y="532" text-anchor="middle" font-family="'Times New Roman', 'Georgia', serif" font-size="18" font-weight="bold" fill="#1A202C">
      National Institute for Genomic &amp; Advanced Biotechnology (NIGAB), NARC, Islamabad
    </text>

    <!-- Signatures Section -->
    <!-- Supervisor (Left) -->
    <g transform="translate(190, 615)">
      <path d="M -40,-15 C -20,-30 0,-10 25,-25 C 35,-15 15,-5 45,-20" stroke="#1A365D" stroke-width="2" fill="none"/>
      <text x="0" y="15" text-anchor="middle" font-family="'Times New Roman', serif" font-size="14" font-weight="bold" fill="#1A202C">
        Dr. Khansa Jamil
      </text>
      <text x="0" y="32" text-anchor="middle" font-family="'Times New Roman', serif" font-size="13" font-style="italic" fill="#4A5568">
        Supervisor/SO,NIGAB , NARC
      </text>
    </g>

    <!-- Director NIGAB (Center) -->
    <g transform="translate(500, 615)">
      <path d="M -50,-10 Q -20,-45 20,-15 T 60,-25" stroke="#1A365D" stroke-width="2" fill="none"/>
      <text x="0" y="15" text-anchor="middle" font-family="'Times New Roman', serif" font-size="14" font-weight="bold" fill="#1A202C">
        Dr. Shaukat Ali
      </text>
      <text x="0" y="32" text-anchor="middle" font-family="'Times New Roman', serif" font-size="13" font-style="italic" fill="#4A5568">
        Director, NIGAB, NARC
      </text>
    </g>

    <!-- Director API (Right) -->
    <g transform="translate(810, 615)">
      <path d="M -30,-20 L -10,-45 L 10,-10 L 30,-30" stroke="#1A365D" stroke-width="2.5" fill="none"/>
      <text x="0" y="15" text-anchor="middle" font-family="'Times New Roman', serif" font-size="14" font-weight="bold" fill="#1A202C">
        Nazakat Nawaz
      </text>
      <text x="0" y="32" text-anchor="middle" font-family="'Times New Roman', serif" font-size="13" font-style="italic" fill="#4A5568">
        Director (API), NARC
      </text>
    </g>
  </svg>`;

  const base64Svg = typeof window !== 'undefined'
    ? window.btoa(unescape(encodeURIComponent(svg)))
    : Buffer.from(svg).toString('base64');

  return `data:image/svg+xml;base64,${base64Svg}`;
}

export function generateCanliWorkshopCertificateSvg(): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 700" width="1000" height="700">
    <!-- Gradient Background -->
    <defs>
      <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#EBF4F6"/>
        <stop offset="50%" stop-color="#F4F9FA"/>
        <stop offset="100%" stop-color="#E2EEF0"/>
      </linearGradient>
      
      <!-- DNA Helix Ribbon Gradient -->
      <linearGradient id="dnaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#10B981"/>
        <stop offset="50%" stop-color="#059669"/>
        <stop offset="100%" stop-color="#047857"/>
      </linearGradient>
    </defs>

    <!-- Base Canvas -->
    <rect x="0" y="0" width="1000" height="700" fill="url(#bgGrad)"/>
    <rect x="15" y="15" width="970" height="670" fill="none" stroke="#0284C7" stroke-width="2" opacity="0.4"/>

    <!-- Top Left DNA Helix Illustration -->
    <g transform="translate(-40, -40) rotate(-25)">
      <!-- Strand 1 -->
      <path d="M 50,50 Q 120,150 50,250 T 50,450" fill="none" stroke="#059669" stroke-width="18" stroke-linecap="round"/>
      <!-- Strand 2 -->
      <path d="M 120,50 Q 50,150 120,250 T 120,450" fill="none" stroke="#10B981" stroke-width="18" stroke-linecap="round"/>
      <!-- Base Pairs -->
      <line x1="60" y1="80" x2="110" y2="80" stroke="#0284C7" stroke-width="6"/>
      <line x1="85" y1="110" x2="85" y2="110" stroke="#D97706" stroke-width="6"/>
      <line x1="60" y1="140" x2="110" y2="140" stroke="#059669" stroke-width="6"/>
      <line x1="55" y1="200" x2="115" y2="200" stroke="#0284C7" stroke-width="6"/>
      <line x1="60" y1="260" x2="110" y2="260" stroke="#D97706" stroke-width="6"/>
      <line x1="55" y1="320" x2="115" y2="320" stroke="#059669" stroke-width="6"/>
      <line x1="60" y1="380" x2="110" y2="380" stroke="#0284C7" stroke-width="6"/>
    </g>

    <!-- Bottom Right DNA Helix Illustration -->
    <g transform="translate(820, 420) rotate(25)">
      <!-- Strand 1 -->
      <path d="M 50,50 Q 120,150 50,250 T 50,450" fill="none" stroke="#059669" stroke-width="20" stroke-linecap="round"/>
      <!-- Strand 2 -->
      <path d="M 120,50 Q 50,150 120,250 T 120,450" fill="none" stroke="#10B981" stroke-width="20" stroke-linecap="round"/>
      <!-- Base Pairs -->
      <line x1="60" y1="80" x2="110" y2="80" stroke="#0284C7" stroke-width="7"/>
      <line x1="60" y1="140" x2="110" y2="140" stroke="#059669" stroke-width="7"/>
      <line x1="55" y1="200" x2="115" y2="200" stroke="#D97706" stroke-width="7"/>
      <line x1="60" y1="260" x2="110" y2="260" stroke="#0284C7" stroke-width="7"/>
      <line x1="55" y1="320" x2="115" y2="320" stroke="#059669" stroke-width="7"/>
    </g>

    <!-- Top Right Logos -->
    <!-- TML LABS Logo -->
    <g transform="translate(680, 50)">
      <circle cx="20" cy="20" r="18" fill="#10B981" opacity="0.2"/>
      <text x="20" y="26" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="900" fill="#059669">TML</text>
      <text x="44" y="16" font-family="Arial, sans-serif" font-size="11" font-weight="bold" fill="#0284C7">LABS</text>
      <text x="44" y="27" font-family="Arial, sans-serif" font-size="7" fill="#475569">Diagnostics &amp; Healthcare</text>
      <text x="44" y="34" font-family="Arial, sans-serif" font-size="7" fill="#475569">Network</text>
    </g>

    <!-- CIEHT Logo Seal -->
    <g transform="translate(880, 70)">
      <circle cx="0" cy="0" r="38" fill="#FFFFFF" stroke="#0284C7" stroke-width="3"/>
      <circle cx="0" cy="0" r="32" fill="none" stroke="#10B981" stroke-width="1.5"/>
      <text x="0" y="-12" text-anchor="middle" font-family="Arial, sans-serif" font-size="9" font-weight="bold" fill="#0F172A">CIEHT</text>
      <!-- Tube/Pen Symbol -->
      <polygon points="-5,12 5,12 8,-8 -8,-8" fill="#0284C7"/>
      <circle cx="0" cy="0" r="5" fill="#10B981"/>
      <text x="0" y="24" text-anchor="middle" font-family="Arial, sans-serif" font-size="6" font-weight="bold" fill="#0369A1">EMERGING HEALTH</text>
    </g>

    <!-- Certificate Body Content -->
    <!-- Intro Line -->
    <text x="500" y="185" text-anchor="middle" font-family="'Times New Roman', 'Georgia', serif" font-size="22" font-style="italic" fill="#1E293B">
      This certificate is presented to
    </text>

    <!-- Recipient Name -->
    <text x="500" y="235" text-anchor="middle" font-family="'Times New Roman', 'Georgia', serif" font-size="34" font-weight="bold" fill="#0F172A">
      Mr. Ibrahim Tahir Sindhu
    </text>

    <!-- Participation Line -->
    <text x="500" y="280" text-anchor="middle" font-family="'Times New Roman', 'Georgia', serif" font-size="20" font-style="italic" fill="#334155">
      for participating in
    </text>

    <!-- Workshop Batch Subtitle -->
    <text x="500" y="320" text-anchor="middle" font-family="'Times New Roman', 'Georgia', serif" font-size="22" font-weight="bold" fill="#1E293B">
      Hands-On Training Workshop (Batch 10)
    </text>

    <!-- Main Title -->
    <text x="500" y="362" text-anchor="middle" font-family="'Times New Roman', 'Georgia', serif" font-size="23" font-weight="900" fill="#0369A1" letter-spacing="0.5">
      BASIC MICROBIOLOGY TO MOLECULAR
    </text>
    <text x="500" y="392" text-anchor="middle" font-family="'Times New Roman', 'Georgia', serif" font-size="23" font-weight="900" fill="#0369A1" letter-spacing="0.5">
      BIOLOGY WORKSHOP
    </text>
    <!-- Underline decoration for title -->
    <line x1="280" y1="400" x2="720" y2="400" stroke="#0369A1" stroke-width="1.5"/>

    <!-- Date -->
    <text x="500" y="440" text-anchor="middle" font-family="'Times New Roman', 'Georgia', serif" font-size="20" font-weight="bold" fill="#0F172A">
      9<tspan font-size="14" dy="-6">th</tspan><tspan font-size="20" dy="6"> May 2026</tspan>
    </text>

    <!-- Organized by -->
    <text x="500" y="480" text-anchor="middle" font-family="'Times New Roman', 'Georgia', serif" font-size="19" font-style="italic" fill="#334155">
      Organized by:
    </text>

    <!-- Organizer 1 -->
    <text x="500" y="512" text-anchor="middle" font-family="'Times New Roman', 'Georgia', serif" font-size="18" font-weight="bold" fill="#0369A1" letter-spacing="0.5">
      CANLI INSTITUTE OF EMERGING HEALTH TECHNOLOGIES
    </text>

    <!-- Collaboration line -->
    <text x="500" y="535" text-anchor="middle" font-family="'Times New Roman', 'Georgia', serif" font-size="16" font-style="italic" fill="#475569">
      in collaboration with
    </text>

    <!-- Organizer 2 -->
    <text x="500" y="558" text-anchor="middle" font-family="'Times New Roman', 'Georgia', serif" font-size="18" font-weight="bold" fill="#0369A1" letter-spacing="0.5">
      TRUSTMED LAB
    </text>

    <!-- Signatures Row -->
    <!-- Left Signature: Director CANLI -->
    <g transform="translate(280, 610)">
      <!-- Signature graphic stroke -->
      <path d="M -50,-10 C -30,-30 -10,0 15,-20 C 30,-5 0,10 40,-15" stroke="#0369A1" stroke-width="2" fill="none"/>
      <text x="0" y="16" text-anchor="middle" font-family="'Times New Roman', serif" font-size="14" font-weight="bold" fill="#0F172A">
        DIRECTOR
      </text>
      <text x="0" y="32" text-anchor="middle" font-family="'Times New Roman', serif" font-size="11" font-weight="bold" fill="#334155">
        CANLI INSTITUTE OF EMERGING
      </text>
      <text x="0" y="45" text-anchor="middle" font-family="'Times New Roman', serif" font-size="11" font-weight="bold" fill="#334155">
        HEALTH TECHNOLOGIES
      </text>
    </g>

    <!-- Right Signature: CEO TRUSTMED LAB -->
    <g transform="translate(680, 610)">
      <!-- Signature graphic stroke -->
      <path d="M -40,-15 C -20,-35 10,-5 25,-25 C 40,-10 15,5 50,-18" stroke="#0369A1" stroke-width="2" fill="none"/>
      <text x="0" y="16" text-anchor="middle" font-family="'Times New Roman', serif" font-size="14" font-weight="bold" fill="#0F172A">
        CEO
      </text>
      <text x="0" y="32" text-anchor="middle" font-family="'Times New Roman', serif" font-size="11" font-weight="bold" fill="#334155">
        TRUSTMED LAB
      </text>
    </g>
  </svg>`;

  const base64Svg = typeof window !== 'undefined'
    ? window.btoa(unescape(encodeURIComponent(svg)))
    : Buffer.from(svg).toString('base64');

  return `data:image/svg+xml;base64,${base64Svg}`;
}

export function generateLanguageLabCertificateSvg(): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 750 1000" width="750" height="1000">
    <defs>
      <linearGradient id="llBgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FCFCF8"/>
        <stop offset="50%" stop-color="#F7F5EC"/>
        <stop offset="100%" stop-color="#EFEBDC"/>
      </linearGradient>
      <linearGradient id="llGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#C5A059"/>
        <stop offset="50%" stop-color="#E2C87A"/>
        <stop offset="100%" stop-color="#9E7830"/>
      </linearGradient>
    </defs>

    <!-- Base Canvas -->
    <rect x="0" y="0" width="750" height="1000" fill="url(#llBgGrad)"/>
    <rect x="15" y="15" width="720" height="970" fill="none" stroke="#D1C7A5" stroke-width="2"/>
    <rect x="22" y="22" width="706" height="956" fill="none" stroke="#B8A878" stroke-width="1" stroke-dasharray="6 3"/>

    <!-- Subtle Watermark Text -->
    <g opacity="0.06" font-family="sans-serif" font-size="10" fill="#1E3A8A">
      <text x="50" y="100">the language lab • institute of modern studies • the language lab</text>
      <text x="50" y="200">the language lab • institute of modern studies • the language lab</text>
      <text x="50" y="300">the language lab • institute of modern studies • the language lab</text>
      <text x="50" y="400">the language lab • institute of modern studies • the language lab</text>
      <text x="50" y="500">the language lab • institute of modern studies • the language lab</text>
      <text x="50" y="600">the language lab • institute of modern studies • the language lab</text>
      <text x="50" y="700">the language lab • institute of modern studies • the language lab</text>
      <text x="50" y="800">the language lab • institute of modern studies • the language lab</text>
    </g>

    <!-- Top Header Logo: The Language Lab -->
    <g transform="translate(375, 95)">
      <!-- 3D Blue Cube Icon -->
      <g transform="translate(-140, -22) scale(0.9)">
        <polygon points="20,0 40,12 20,24 0,12" fill="#3B82F6"/>
        <polygon points="0,12 20,24 20,48 0,36" fill="#1D4ED8"/>
        <polygon points="20,24 40,12 40,36 20,48" fill="#1E40AF"/>
      </g>
      <text x="-90" y="8" font-family="'Helvetica Neue', Arial, sans-serif" font-size="15" font-weight="300" fill="#1E3A8A" letter-spacing="1">THE</text>
      <text x="-50" y="12" font-family="'Helvetica Neue', Arial, sans-serif" font-size="34" font-weight="bold" fill="#1E3A8A">language</text>
      <text x="105" y="12" font-family="'Helvetica Neue', Arial, sans-serif" font-size="34" font-weight="bold" fill="#2563EB">lab</text>
      <text x="162" y="-12" font-family="sans-serif" font-size="10" fill="#1E3A8A">TM</text>
    </g>

    <!-- Sub Header -->
    <text x="375" y="150" text-anchor="middle" font-family="'Arial', sans-serif" font-size="14" font-weight="bold" fill="#1E3A8A" letter-spacing="3">
      INSTITUTE OF MODERN STUDIES
    </text>

    <!-- Title: COURSE COMPLETION CERTIFICATE -->
    <text x="375" y="210" text-anchor="middle" font-family="'Times New Roman', 'Georgia', serif" font-size="28" font-weight="bold" fill="#1E293B" letter-spacing="1">
      COURSE COMPLETION CERTIFICATE
    </text>

    <!-- Certify Phrase -->
    <text x="375" y="270" text-anchor="middle" font-family="'Georgia', serif" font-size="20" font-style="italic" fill="#334155">
      This is to certify that
    </text>

    <!-- Recipient Name -->
    <text x="375" y="325" text-anchor="middle" font-family="'Times New Roman', 'Georgia', serif" font-size="30" font-weight="bold" fill="#0F172A" letter-spacing="1">
      IBRAHIM TAHIR SINDHU
    </text>
    <line x1="180" y1="338" x2="570" y2="338" stroke="#1E293B" stroke-width="1.5"/>

    <!-- Course Completion Text -->
    <text x="375" y="385" text-anchor="middle" font-family="'Georgia', serif" font-size="19" font-style="italic" fill="#334155">
      has successfully completed a course of study
    </text>

    <!-- In Phrase -->
    <text x="375" y="420" text-anchor="middle" font-family="'Georgia', serif" font-size="18" font-style="italic" fill="#475569">
      in
    </text>

    <!-- Subject: ENGLISH LANGUAGE -->
    <text x="375" y="460" text-anchor="middle" font-family="'Times New Roman', 'Georgia', serif" font-size="26" font-weight="bold" fill="#0F172A" letter-spacing="2">
      ENGLISH LANGUAGE
    </text>

    <!-- Dates -->
    <text x="375" y="515" text-anchor="middle" font-family="'Georgia', serif" font-size="17" font-weight="bold" fill="#334155">
      from <tspan font-size="18" fill="#0F172A">SEPTEMBER 2022</tspan> to <tspan font-size="18" fill="#0F172A">DECEMBER 2022</tspan>
    </text>

    <!-- Sub line -->
    <text x="375" y="565" text-anchor="middle" font-family="'Georgia', serif" font-size="20" font-style="italic" fill="#334155">
      During the period, the student completed
    </text>

    <!-- Level -->
    <text x="375" y="615" text-anchor="middle" font-family="'Times New Roman', 'Georgia', serif" font-size="22" font-weight="bold" fill="#0F172A" letter-spacing="1">
      INTERMEDIATE LEVEL
    </text>

    <!-- Grade -->
    <text x="375" y="665" text-anchor="middle" font-family="'Georgia', serif" font-size="18" font-style="italic" fill="#334155">
      with <tspan font-size="26" font-weight="bold" font-style="normal" fill="#0F172A"> A </tspan> grade
    </text>
    <line x1="340" y1="675" x2="410" y2="675" stroke="#0F172A" stroke-width="1.5"/>

    <!-- Description -->
    <text x="375" y="720" text-anchor="middle" font-family="'Georgia', serif" font-size="17" font-style="italic" fill="#334155">
      The course covered Listening, Speaking, Reading and Writing skills.
    </text>

    <!-- Reg No -->
    <text x="375" y="770" text-anchor="middle" font-family="'Times New Roman', serif" font-size="16" font-weight="bold" fill="#0F172A">
      Reg No: <tspan font-size="16" font-style="italic" fill="#1E3A8A">IS/111-0922</tspan>
    </text>

    <!-- Bottom Left Gold Stamp / Seal -->
    <g transform="translate(130, 800)">
      <circle cx="0" cy="0" r="50" fill="url(#llGoldGrad)" stroke="#6B4F10" stroke-width="2"/>
      <circle cx="0" cy="0" r="42" fill="none" stroke="#FFFFFF" stroke-dasharray="3 2" stroke-width="1.5"/>
      <circle cx="0" cy="0" r="34" fill="#0F172A" opacity="0.85"/>
      <text x="0" y="-8" text-anchor="middle" font-family="sans-serif" font-size="8" font-weight="bold" fill="#E2C87A">THE LANGUAGE</text>
      <text x="0" y="4" text-anchor="middle" font-family="sans-serif" font-size="8" font-weight="bold" fill="#E2C87A">LAB</text>
      <text x="0" y="16" text-anchor="middle" font-family="sans-serif" font-size="6" fill="#FFFFFF">INSTITUTE OF MODERN STUDIES</text>
    </g>

    <!-- Signatures -->
    <!-- Left Signature: Instructor -->
    <g transform="translate(130, 915)">
      <path d="M -35,-15 C -20,-30 0,-5 20,-25 Q 35,-10 45,-20" stroke="#1E3A8A" stroke-width="2" fill="none"/>
      <text x="0" y="12" text-anchor="middle" font-family="'Georgia', serif" font-size="16" font-style="italic" font-weight="bold" fill="#0F172A">
        A. Qayyum
      </text>
      <text x="0" y="28" text-anchor="middle" font-family="'Georgia', serif" font-size="15" font-style="italic" fill="#475569">
        Instructor
      </text>
    </g>

    <!-- Right Signature: Principal -->
    <g transform="translate(620, 915)">
      <path d="M -40,-20 Q 0,-45 25,-10 T 60,-25" stroke="#1E3A8A" stroke-width="2.5" fill="none"/>
      <text x="10" y="28" text-anchor="middle" font-family="'Georgia', serif" font-size="16" font-style="italic" fill="#475569">
        Principal
      </text>
    </g>

    <!-- Bottom Footer Bar -->
    <rect x="0" y="960" width="750" height="40" fill="#84714F"/>
    <text x="375" y="985" text-anchor="middle" font-family="'Arial', sans-serif" font-size="13" font-weight="bold" fill="#FFFFFF" letter-spacing="0.5">
      41-B Lower Mall, Lahore. Tel 1: 042-3724 9748, www.tllpk.com
    </text>
  </svg>`;

  const base64Svg = typeof window !== 'undefined'
    ? window.btoa(unescape(encodeURIComponent(svg)))
    : Buffer.from(svg).toString('base64');

  return `data:image/svg+xml;base64,${base64Svg}`;
}

export function generateEntertechCertificateSvg(): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 700" width="1000" height="700">
    <!-- Base Background & Outer Border -->
    <rect x="0" y="0" width="1000" height="700" fill="#FFFFFF"/>
    <rect x="25" y="25" width="950" height="650" fill="none" stroke="#000000" stroke-width="2"/>

    <!-- Top Left Geometric Graphics (Green/Blue Abstract Shapes) -->
    <g transform="translate(25, 25)">
      <polygon points="0,0 260,0 150,90 0,180" fill="#15803D"/>
      <polygon points="0,0 220,0 120,70 0,130" fill="#22C55E"/>
      <polygon points="0,20 180,0 110,100 0,220" fill="#1E3A8A"/>
      <polygon points="0,80 130,10 70,120 0,190" fill="#0284C7"/>
      <polygon points="0,0 70,0 0,110" fill="#166534"/>
      <!-- Accent white lines -->
      <line x1="0" y1="0" x2="260" y2="0" stroke="#FFFFFF" stroke-width="3"/>
      <line x1="0" y1="0" x2="150" y2="90" stroke="#FFFFFF" stroke-width="2"/>
      <line x1="120" y1="70" x2="0" y2="130" stroke="#FFFFFF" stroke-width="2"/>
    </g>

    <!-- Main Title: CERTIFICATE OF APPRECIATION -->
    <text x="500" y="140" text-anchor="middle" font-family="'Times New Roman', Georgia, serif" font-size="46" font-weight="bold" fill="#0F172A" letter-spacing="3">
      CERTIFICATE
    </text>
    <text x="500" y="190" text-anchor="middle" font-family="'Times New Roman', Georgia, serif" font-size="24" font-weight="bold" fill="#1E293B" letter-spacing="2">
      OF APPRECIATION
    </text>

    <!-- PRESENTED TO -->
    <text x="500" y="250" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold" fill="#475569" letter-spacing="2">
      PRESENTED TO
    </text>

    <!-- Name -->
    <text x="500" y="315" text-anchor="middle" font-family="'Brush Script MT', 'Great Vibes', 'Georgia', cursive, serif" font-size="44" font-style="italic" fill="#000000">
      Ibrahim Tahir Sindhu
    </text>
    <line x1="270" y1="330" x2="730" y2="330" stroke="#000000" stroke-width="1.5"/>

    <!-- Course Description -->
    <text x="500" y="380" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="bold" fill="#1E293B">
      FOR SUCCESSFULLY COMPLETING THE YOUTH EMPOWERMENT AND
    </text>
    <text x="500" y="405" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="bold" fill="#1E293B">
      SUSTAINABILITY TRAINING PROGRAM, FOCUSED ON THE UNITED NATIONS
    </text>
    <text x="500" y="430" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="bold" fill="#1E293B">
      SUSTAINABLE DEVELOPMENT GOALS (SDGS) AND ENVIRONMENTAL LAB
    </text>
    <text x="500" y="455" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="bold" fill="#1E293B">
      PRACTICES, WITH HANDS ON EXPERIENCE.
    </text>

    <!-- Date -->
    <text x="500" y="515" text-anchor="middle" font-family="'Times New Roman', serif" font-size="16" font-weight="bold" fill="#0F172A">
      4<tspan font-size="11" dy="-6">TH</tspan><tspan font-size="16" dy="6"> NOVEMBER 2025</tspan>
    </text>

    <!-- Bottom Left Logo: ENTERTECH -->
    <g transform="translate(60, 590)">
      <!-- Green Flask Icon -->
      <path d="M 12,0 L 20,0 L 20,12 L 28,26 C 31,31 27,36 21,36 L 11,36 C 5,36 1,31 4,26 L 12,12 Z" fill="none" stroke="#16A34A" stroke-width="3"/>
      <path d="M 8,24 Q 16,20 24,24 L 23,30 Q 16,28 9,30 Z" fill="#22C55E"/>
      <text x="36" y="24" font-family="sans-serif" font-size="22" font-weight="900" fill="#0F172A" letter-spacing="-1">
        ENTER<tspan fill="#16A34A">TECH</tspan>
      </text>
      <text x="180" y="34" font-family="sans-serif" font-size="11" font-weight="bold" fill="#475569">
        Labs (Pvt) Ltd.
      </text>
    </g>

    <!-- Bottom Right Signature -->
    <g transform="translate(800, 570)">
      <path d="M -40,10 C -20,-20 0,-30 20,-10 C 30,0 20,-40 40,-20 T 60,10" fill="none" stroke="#000000" stroke-width="2.5"/>
      <line x1="-80" y1="20" x2="100" y2="20" stroke="#000000" stroke-width="1.5"/>
      <text x="10" y="38" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold" fill="#0F172A">
        DR WAQAS AHMED KHAN
      </text>
      <text x="10" y="55" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="bold" fill="#475569">
        CEO ENTERTECH
      </text>
    </g>
  </svg>`;

  const base64Svg = typeof window !== 'undefined'
    ? window.btoa(unescape(encodeURIComponent(svg)))
    : Buffer.from(svg).toString('base64');

  return `data:image/svg+xml;base64,${base64Svg}`;
}

export function generateHomeCharityCertificateSvg(): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 700" width="1000" height="700">
    <!-- Base Canvas -->
    <rect x="0" y="0" width="1000" height="700" fill="#FAF8F5"/>
    <rect x="25" y="25" width="950" height="650" fill="none" stroke="#8A6B3E" stroke-width="2"/>
    <rect x="32" y="32" width="936" height="636" fill="none" stroke="#D4AF37" stroke-width="1"/>

    <!-- Decorative Corner Filigree -->
    <!-- Top-Left Corner -->
    <g transform="translate(45, 45)" fill="#8A6B3E">
      <path d="M0,0 Q30,0 30,30 Q30,0 60,0 Q30,0 0,60 Q0,30 0,0 Z"/>
      <circle cx="15" cy="15" r="4"/>
      <circle cx="35" cy="10" r="3"/>
      <circle cx="10" cy="35" r="3"/>
    </g>
    <!-- Top-Right Corner -->
    <g transform="translate(955, 45) scale(-1, 1)" fill="#8A6B3E">
      <path d="M0,0 Q30,0 30,30 Q30,0 60,0 Q30,0 0,60 Q0,30 0,0 Z"/>
      <circle cx="15" cy="15" r="4"/>
    </g>
    <!-- Bottom-Left Corner -->
    <g transform="translate(45, 655) scale(1, -1)" fill="#8A6B3E">
      <path d="M0,0 Q30,0 30,30 Q30,0 60,0 Q30,0 0,60 Q0,30 0,0 Z"/>
      <circle cx="15" cy="15" r="4"/>
    </g>
    <!-- Bottom-Right Corner -->
    <g transform="translate(955, 655) scale(-1, -1)" fill="#8A6B3E">
      <path d="M0,0 Q30,0 30,30 Q30,0 60,0 Q30,0 0,60 Q0,30 0,0 Z"/>
      <circle cx="15" cy="15" r="4"/>
    </g>

    <!-- Header Organization Name -->
    <text x="500" y="115" text-anchor="middle" font-family="'Georgia', 'Times New Roman', serif" font-size="32" font-weight="bold" fill="#7C2D12" letter-spacing="1">
      Home Charity Trust
    </text>

    <!-- Title: CERTIFICATE -->
    <text x="500" y="180" text-anchor="middle" font-family="'Times New Roman', Georgia, serif" font-size="48" font-weight="bold" fill="#1C1917" letter-spacing="4">
      CERTIFICATE
    </text>

    <!-- Subtitle: OF APPRECIATION -->
    <text x="500" y="225" text-anchor="middle" font-family="'Georgia', serif" font-size="22" font-weight="bold" fill="#44403C" letter-spacing="3">
      OF APPRECIATION
    </text>

    <!-- Intro Body Line -->
    <text x="500" y="275" text-anchor="middle" font-family="'Georgia', serif" font-size="16" font-style="italic" fill="#57534E">
      At Home Charity Trust,
    </text>
    <text x="500" y="300" text-anchor="middle" font-family="'Georgia', serif" font-size="17" font-weight="500" fill="#292524">
      We would like to extend the highest appreciation, on behalf of our Organization to
    </text>

    <!-- Recipient Name -->
    <text x="500" y="365" text-anchor="middle" font-family="'Brush Script MT', 'Great Vibes', 'Georgia', cursive, serif" font-size="44" fill="#1C1917">
      Ibrahim Sindhu
    </text>
    <line x1="250" y1="380" x2="750" y2="380" stroke="#A8A29E" stroke-width="1"/>

    <!-- Volunteer Body Line -->
    <text x="500" y="430" text-anchor="middle" font-family="'Georgia', serif" font-size="18" font-weight="bold" fill="#292524">
      For her/his dedication and commitment as a volunteer in our
    </text>
    <text x="500" y="458" text-anchor="middle" font-family="'Georgia', serif" font-size="18" font-weight="bold" fill="#292524">
      Organization.
    </text>

    <!-- Bottom Left Organization Seal -->
    <g transform="translate(230, 570)">
      <circle cx="0" cy="0" r="42" fill="#FFFFFF" stroke="#0284C7" stroke-width="2"/>
      <!-- Family / People silhouette -->
      <path d="M -15,10 C -15,-5 -5,-5 -5,10 Z M 5,10 C 5,-8 15,-8 15,10 Z M -5,10 C -5,0 5,0 5,10 Z" fill="#E11D48"/>
      <circle cx="-10" cy="-10" r="5" fill="#E11D48"/>
      <circle cx="10" cy="-12" r="5" fill="#E11D48"/>
      <circle cx="0" cy="-6" r="4" fill="#E11D48"/>
      <text x="0" y="54" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="bold" fill="#0284C7">
        HOME Charity Trust (waqf)
      </text>
    </g>

    <!-- Bottom Center Gold Medal Ribbon -->
    <g transform="translate(500, 560)">
      <!-- Ribbons -->
      <polygon points="-12,20 -25,55 -10,48 0,55 -4,20" fill="#CA8A04"/>
      <polygon points="12,20 25,55 10,48 0,55 4,20" fill="#EAB308"/>
      <!-- Medal -->
      <circle cx="0" cy="0" r="32" fill="#EAB308" stroke="#CA8A04" stroke-width="3"/>
      <circle cx="0" cy="0" r="26" fill="#FDE047" stroke="#FEF08A" stroke-width="1.5"/>
      <circle cx="0" cy="0" r="20" fill="#EAB308"/>
    </g>

    <!-- Bottom Right Signature -->
    <g transform="translate(750, 550)">
      <path d="M -50,10 Q -20,-40 10,0 T 40,-30 T 70,0" fill="none" stroke="#1D4ED8" stroke-width="2.5"/>
      <line x1="-70" y1="20" x2="90" y2="20" stroke="#D6D3D1" stroke-width="1.5"/>
      <text x="10" y="42" text-anchor="middle" font-family="'Georgia', serif" font-size="15" font-weight="bold" fill="#1C1917">
        Chairperson of Home
      </text>
      <text x="10" y="60" text-anchor="middle" font-family="'Georgia', serif" font-size="15" font-weight="bold" fill="#1C1917">
        Charity Trust
      </text>
    </g>
  </svg>`;

  const base64Svg = typeof window !== 'undefined'
    ? window.btoa(unescape(encodeURIComponent(svg)))
    : Buffer.from(svg).toString('base64');

  return `data:image/svg+xml;base64,${base64Svg}`;
}

export function generateRasconCertificateSvg(): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 700" width="1000" height="700">
    <defs>
      <!-- Gradient for the sweeping cyan/sky-blue wave -->
      <linearGradient id="rasconCyanWave" x1="0%" y1="100%" x2="50%" y2="0%">
        <stop offset="0%" stop-color="#0284C7"/>
        <stop offset="40%" stop-color="#38BDF8"/>
        <stop offset="70%" stop-color="#7DD3FC"/>
        <stop offset="100%" stop-color="#BAE6FD"/>
      </linearGradient>
      <!-- Subtle top right aura -->
      <linearGradient id="rasconTopRight" x1="100%" y1="0%" x2="50%" y2="50%">
        <stop offset="0%" stop-color="#E0F2FE"/>
        <stop offset="100%" stop-color="#FFFFFF"/>
      </linearGradient>
      <!-- Gold badge gradient -->
      <linearGradient id="goldBadgeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#CA8A04"/>
        <stop offset="35%" stop-color="#FDE047"/>
        <stop offset="70%" stop-color="#EAB308"/>
        <stop offset="100%" stop-color="#A16207"/>
      </linearGradient>
    </defs>

    <!-- Base Canvas -->
    <rect x="0" y="0" width="1000" height="700" fill="#FFFFFF"/>
    <rect x="0" y="0" width="1000" height="700" fill="url(#rasconTopRight)"/>

    <!-- Left to Bottom Sweeping Cyan Curve (Smooth organic wave exactly as in 6th.jpeg) -->
    <path d="M 0,380 C 40,480 80,620 400,700 L 0,700 Z" fill="url(#rasconCyanWave)"/>
    <path d="M 0,420 C 30,510 50,650 280,700 L 0,700 Z" fill="#0284C7"/>
    <path d="M 0,520 C 15,580 30,660 160,700 L 0,700 Z" fill="#0369A1"/>

    <!-- Top Left Header: 3rd RASCON 2025 & Globe -->
    <g transform="translate(40, 40)">
      <!-- Stylized 3rd RASCON -->
      <text x="0" y="24" font-family="'Arial Black', 'Helvetica Neue', sans-serif" font-size="28" font-weight="900" fill="#0F172A" letter-spacing="-0.5">
        3<tspan font-size="16" dy="-10">rd</tspan><tspan font-size="28" dy="10">RASCON</tspan>
      </text>
      <!-- Tiny 2025 inside box -->
      <text x="175" y="14" font-family="sans-serif" font-size="11" font-weight="bold" fill="#0F172A">20</text>
      <text x="175" y="26" font-family="sans-serif" font-size="11" font-weight="bold" fill="#0F172A">25</text>
      <!-- Subtext -->
      <text x="10" y="40" font-family="sans-serif" font-size="9" font-weight="bold" fill="#334155">
        International Rehabilitation &amp;
      </text>
      <text x="10" y="52" font-family="sans-serif" font-size="9" font-weight="bold" fill="#334155">
        Allied Health Sciences
      </text>
      <text x="10" y="64" font-family="sans-serif" font-size="9" font-weight="bold" fill="#334155">
        Conference
      </text>
      <!-- Globe Icon -->
      <g transform="translate(210, 24)">
        <circle cx="0" cy="0" r="22" fill="#E0F2FE" stroke="#0284C7" stroke-width="1.5"/>
        <path d="M -15,-10 C -5,-20 10,-15 18,-5 C 10,15 -10,15 -15,-10 Z" fill="#EC4899"/>
        <path d="M -10,5 C 0,15 15,10 18,-5 C 5,-15 -5,-5 -10,5 Z" fill="#0284C7"/>
      </g>
    </g>

    <!-- Top Right Header: Superior University Logo -->
    <g transform="translate(930, 48)">
      <!-- Purple Sunburst Crest -->
      <circle cx="0" cy="0" r="24" fill="none" stroke="#68217A" stroke-width="2.5"/>
      <circle cx="0" cy="0" r="7" fill="#68217A"/>
      <!-- Radiating lines -->
      <path d="M -18,0 L 18,0 M 0,-18 L 0,18 M -13,-13 L 13,13 M -13,13 L 13,-13" stroke="#68217A" stroke-width="2"/>
      <text x="0" y="38" text-anchor="middle" font-family="'Times New Roman', serif" font-size="12" font-weight="bold" fill="#68217A">
        SUPERIOR
      </text>
      <text x="0" y="49" text-anchor="middle" font-family="'Times New Roman', serif" font-size="10" font-weight="bold" fill="#68217A">
        UNIVERSITY
      </text>
    </g>

    <!-- Center: CERTIFICATE OF PARTICIPATION -->
    <text x="510" y="165" text-anchor="middle" font-family="'Arial Black', 'Arial', sans-serif" font-size="46" font-weight="900" fill="#0F172A" letter-spacing="3">
      CERTIFICATE
    </text>
    <text x="510" y="202" text-anchor="middle" font-family="sans-serif" font-size="21" font-weight="bold" fill="#68217A" letter-spacing="3">
      OF PARTICIPATION
    </text>

    <!-- Subtitle: This certificate is proudly presented to -->
    <text x="510" y="242" text-anchor="middle" font-family="sans-serif" font-size="16" font-weight="500" fill="#334155">
      This certificate is proudly presented to
    </text>

    <!-- Recipient Name (Centered with underline) -->
    <text x="510" y="305" text-anchor="middle" font-family="'Times New Roman', Georgia, serif" font-size="32" font-weight="bold" fill="#0F172A">
      Ibrahim Tahir Sindhu
    </text>
    <line x1="280" y1="316" x2="740" y2="316" stroke="#0F172A" stroke-width="1.5"/>

    <!-- Text: in recognition of their Participation at -->
    <text x="510" y="356" text-anchor="middle" font-family="sans-serif" font-size="17" fill="#334155">
      in recognition of their <tspan font-weight="bold" fill="#0F172A">Participation at</tspan>
    </text>

    <!-- Main Conference Title -->
    <text x="510" y="396" text-anchor="middle" font-family="'Arial Black', 'Arial', sans-serif" font-size="24" font-weight="900" fill="#0F172A">
      3rd RASCON 2025 – National Chapter
    </text>

    <!-- Under theme details -->
    <text x="510" y="426" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold" fill="#475569">
      Under theme:
    </text>
    <text x="510" y="446" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="bold" fill="#0F172A">
      "Sustainable Rehabilitation and Allied Health Sciences:
    </text>
    <text x="510" y="465" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="bold" fill="#0F172A">
      AI, Ethics, and Multidisciplinary Innovations"
    </text>

    <!-- Date -->
    <text x="510" y="500" text-anchor="middle" font-family="sans-serif" font-size="16" font-weight="bold" fill="#0F172A">
      on 16th October 2025.
    </text>

    <!-- Gold CME+CPD Seal Badge (Bottom-Right, positioned over white canvas) -->
    <g transform="translate(845, 475)">
      <!-- Outer serrated/ribbed medal circle -->
      <circle cx="0" cy="0" r="44" fill="url(#goldBadgeGradient)" stroke="#854D0E" stroke-width="2"/>
      <circle cx="0" cy="0" r="37" fill="none" stroke="#FEF08A" stroke-width="1.5" stroke-dasharray="3 2"/>
      <text x="0" y="-8" text-anchor="middle" font-family="'Arial Black', sans-serif" font-size="19" font-weight="900" fill="#0F172A">6+6</text>
      <text x="0" y="9" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="bold" fill="#0F172A">CME+CPD</text>
      <text x="0" y="22" text-anchor="middle" font-family="sans-serif" font-size="8" font-weight="900" fill="#451A03" letter-spacing="0.5">CREDIT HOURS</text>
    </g>

    <!-- Signatures -->
    <g transform="translate(380, 560)">
      <!-- Sig 1 Path -->
      <path d="M -35,-15 Q -10,-40 15,-10 T 45,-20" stroke="#000000" stroke-width="2.5" fill="none"/>
      <line x1="-90" y1="0" x2="90" y2="0" stroke="#0F172A" stroke-width="1.5"/>
      <text x="0" y="16" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="bold" fill="#0F172A">Prof. Dr. Muhammad Naveed Babur</text>
      <text x="0" y="30" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#475569">Chairman - RASCON-25</text>
      <text x="0" y="42" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#475569">Dean - FAHS, Superior University, Lahore</text>
    </g>

    <g transform="translate(650, 560)">
      <!-- Sig 2 Path -->
      <path d="M -30,-20 Q 0,-45 25,-10 T 55,-25" stroke="#000000" stroke-width="2.5" fill="none"/>
      <line x1="-90" y1="0" x2="90" y2="0" stroke="#0F172A" stroke-width="1.5"/>
      <text x="0" y="16" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="bold" fill="#0F172A">Prof. Dr. Sumaira Rehman</text>
      <text x="0" y="30" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#475569">Patron - RASCON-25</text>
      <text x="0" y="42" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#475569">Rector - Superior University, Lahore</text>
    </g>

    <!-- Bottom Logos Footer Bar -->
    <g transform="translate(510, 665)" font-family="sans-serif" font-size="9" font-weight="bold" fill="#334155">
      <text x="-310" y="0">FACULTY OF ALLIED HEALTH SCIENCES</text>
      <text x="-105" y="0" font-size="14" font-weight="900" fill="#DC2626">ORIC</text>
      <text x="-15" y="0" font-size="13" font-weight="900" fill="#16A34A">ANCRD</text>
      <text x="70" y="0" font-size="13" font-weight="900" fill="#2563EB">ERC</text>
      <text x="145" y="0">WFNR</text>
      <text x="230" y="0">SUPERIOR FAHS</text>
    </g>
  </svg>`;

  const base64Svg = typeof window !== 'undefined'
    ? window.btoa(unescape(encodeURIComponent(svg)))
    : Buffer.from(svg).toString('base64');

  return `data:image/svg+xml;base64,${base64Svg}`;
}

export function generateEnvion26CertificateSvg(): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 700" width="1000" height="700">
    <defs>
      <!-- Gradient for top green curve banner -->
      <linearGradient id="env26GreenBanner" x1="0%" y1="0%" x2="100%" y2="80%">
        <stop offset="0%" stop-color="#1B5E20"/>
        <stop offset="45%" stop-color="#2E7D32"/>
        <stop offset="100%" stop-color="#388E3C"/>
      </linearGradient>
      <!-- Shadow filter -->
      <filter id="softDropShadow" x="-10%" y="-10%" width="130%" height="130%">
        <feDropShadow dx="2" dy="4" stdDeviation="4" flood-opacity="0.15"/>
      </filter>
    </defs>

    <!-- Base Canvas -->
    <rect x="0" y="0" width="1000" height="700" fill="#FFFFFF"/>

    <!-- Top Left Deep Green Sweeping Organic Header Banner -->
    <path d="M 0,0 L 720,0 C 580,75 420,135 240,165 C 120,185 0,225 0,225 Z" fill="url(#env26GreenBanner)"/>

    <!-- Top Left White Pill Badge with Superior University Logo & Crest -->
    <g transform="translate(105, 52)" filter="url(#softDropShadow)">
      <!-- Rounded Pill Badge -->
      <rect x="-85" y="-32" width="180" height="64" rx="32" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1"/>
      <!-- Purple Crest Inside Pill -->
      <g transform="translate(-52, 0)">
        <circle cx="0" cy="0" r="18" fill="none" stroke="#68217A" stroke-width="2"/>
        <circle cx="0" cy="0" r="5" fill="#68217A"/>
        <path d="M -14,0 L 14,0 M 0,-14 L 0,14 M -10,-10 L 10,10 M -10,10 L 10,-10" stroke="#68217A" stroke-width="1.5"/>
      </g>
      <!-- Superior University Text in Pill -->
      <text x="-25" y="-2" font-family="'Times New Roman', serif" font-size="14" font-weight="bold" fill="#68217A" letter-spacing="0.5">SUPERIOR</text>
      <text x="-25" y="14" font-family="'Times New Roman', serif" font-size="13" font-weight="bold" fill="#68217A" letter-spacing="0.5">UNIVERSITY</text>
    </g>

    <!-- Top Right Research Week Text -->
    <g transform="translate(970, 36)">
      <text x="0" y="0" text-anchor="end" font-family="'Arial Black', 'Helvetica Neue', sans-serif" font-size="20" font-weight="900" fill="#A3E635">
        Research
      </text>
      <text x="0" y="14" text-anchor="end" font-family="sans-serif" font-size="9" font-weight="bold" fill="#4ADE80">
        Artificial Intelligence Week
      </text>
      <text x="0" y="24" text-anchor="end" font-family="sans-serif" font-size="7.5" fill="#86EFAC">
        for Sustainable Future
      </text>
      <text x="0" y="38" text-anchor="end" font-family="sans-serif" font-size="11" font-weight="bold" fill="#14532D">
        15th - 24th April 2026
      </text>
    </g>

    <!-- Center Main Title: CERTIFICATE -->
    <text x="500" y="210" text-anchor="middle" font-family="'Arial Black', 'Trebuchet MS', sans-serif" font-size="52" font-weight="900" fill="#2D6A4F" letter-spacing="4">
      CERTIFICATE
    </text>

    <!-- Main Title: 3rd Envion-26 Graphic -->
    <g transform="translate(500, 290)">
      <!-- Stylized '3' with rd -->
      <text x="-210" y="30" font-family="'Arial Black', sans-serif" font-size="88" font-weight="900" fill="#38A169">3</text>
      <text x="-155" y="-12" font-family="'Brush Script MT', cursive, serif" font-size="28" font-style="italic" fill="#2D6A4F">rd</text>
      
      <!-- 'Envi' -->
      <text x="-125" y="25" font-family="'Arial Black', 'Impact', sans-serif" font-size="76" font-weight="900" fill="#234E52" letter-spacing="1">Envi</text>
      
      <!-- Globe in 'o' -->
      <g transform="translate(68, -2)">
        <circle cx="0" cy="0" r="28" fill="#E2FAD4" stroke="#2E7D32" stroke-width="2.5"/>
        <circle cx="0" cy="0" r="26" fill="#C8E6C9"/>
        <!-- Continents -->
        <path d="M -16,-12 C -8,-24 12,-20 18,-8 C 22,10 5,22 -14,18 C -22,12 -20,-2 -16,-12 Z" fill="#2E7D32"/>
        <path d="M -6,5 C 2,16 16,14 18,-2 C 10,-12 -2,-4 -6,5 Z" fill="#66BB6A"/>
        <!-- Seedling sprouting out of globe -->
        <path d="M 2,-26 Q 10,-38 22,-32 Q 16,-22 2,-26 Z" fill="#43A047"/>
        <path d="M 2,-26 Q -6,-36 -16,-30 Q -10,-20 2,-26 Z" fill="#66BB6A"/>
      </g>
      
      <!-- 'n-26' -->
      <text x="105" y="25" font-family="'Arial Black', 'Impact', sans-serif" font-size="76" font-weight="900" fill="#38A169" letter-spacing="1">n-26</text>
    </g>

    <!-- Subtitle: This certificate is presented to -->
    <text x="500" y="360" text-anchor="middle" font-family="sans-serif" font-size="18" font-weight="600" fill="#2D3748" letter-spacing="1">
      This certificate is presented to
    </text>

    <!-- Recipient Name (Artistic Brush / Script Calligraphy) -->
    <text x="500" y="420" text-anchor="middle" font-family="'Brush Script MT', 'Great Vibes', 'Allura', cursive" font-size="52" font-weight="bold" fill="#2D6A4F">
      Ibrahim Tahir Sindhu
    </text>
    <line x1="260" y1="432" x2="740" y2="432" stroke="#2D6A4F" stroke-width="2"/>

    <!-- Recognition Description -->
    <text x="500" y="475" text-anchor="middle" font-family="sans-serif" font-size="16" fill="#1A202C">
      In appreciation of your valuable <tspan font-weight="bold" fill="#000000">contribution to Envion-26</tspan> held on <tspan font-weight="bold" fill="#000000">22nd April</tspan>
    </text>
    <text x="500" y="500" text-anchor="middle" font-family="sans-serif" font-size="16" fill="#1A202C">
      <tspan font-weight="bold" fill="#000000">2026</tspan>, organized by the <tspan font-weight="500">Department of Biological Sciences, Superior University,</tspan>
    </text>
    <text x="500" y="525" text-anchor="middle" font-family="sans-serif" font-size="16" font-weight="500" fill="#1A202C">
      Lahore, Pakistan
    </text>

    <!-- Signature Block -->
    <g transform="translate(500, 582)">
      <!-- Signature line -->
      <path d="M -30,-12 Q 0,-32 25,-8 T 45,-18" stroke="#000000" stroke-width="2.5" fill="none"/>
      <line x1="-130" y1="0" x2="130" y2="0" stroke="#000000" stroke-width="1.5"/>
      <text x="0" y="16" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="bold" fill="#0F172A">Prof. Dr. Muhammad Naveed Babur</text>
      <text x="0" y="30" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="bold" fill="#4A5568">Dean</text>
      <text x="0" y="44" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#4A5568">Faculty of Allied Health Sciences/Faculty of</text>
      <text x="0" y="56" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#4A5568">Sciences</text>
    </g>

    <!-- Bottom Partner Logos and UN SDGs Badges -->
    <g transform="translate(110, 665)">
      <!-- Department Logo with DNA helix -->
      <g transform="translate(15, -12)">
        <path d="M -8,-15 C -2,-5 -2,5 -8,15 M 8,-15 C 2,-5 2,5 8,15 M -6,-8 L 6,-8 M -6,0 L 6,0 M -6,8 L 6,8" stroke="#1B5E20" stroke-width="1.5" fill="none"/>
        <text x="18" y="-4" font-family="sans-serif" font-size="8.5" font-weight="bold" fill="#1B5E20">Department of</text>
        <text x="18" y="6" font-family="sans-serif" font-size="9" font-weight="bold" fill="#1B5E20">Biological Sciences</text>
      </g>

      <!-- Faculty of Allied Health Sciences -->
      <g transform="translate(160, -12)">
        <text x="0" y="-3" font-family="sans-serif" font-size="8" font-weight="bold" fill="#4A5568">FACULTY OF</text>
        <text x="0" y="7" font-family="sans-serif" font-size="9" font-weight="bold" fill="#0F172A">ALLIED HEALTH</text>
        <text x="0" y="17" font-family="sans-serif" font-size="9" font-weight="bold" fill="#0F172A">SCIENCES</text>
      </g>

      <!-- ORIC & ANCRD -->
      <text x="290" y="-5" font-family="'Arial Black', sans-serif" font-size="18" font-weight="900" fill="#E53E3E">ORIC</text>
      <g transform="translate(370, -12)">
        <text x="0" y="4" font-family="'Arial Black', sans-serif" font-size="15" font-weight="900" fill="#2E7D32">ANCRD</text>
      </g>

      <!-- 3 UN SDG Icons (13 Climate Action, 15 Life on Land, 14 Life Below Water) -->
      <g transform="translate(480, -26)">
        <!-- SDG 13 -->
        <rect x="0" y="0" width="36" height="36" fill="#3F7E44" rx="2"/>
        <text x="5" y="12" font-family="'Arial Black', sans-serif" font-size="10" font-weight="900" fill="#FFFFFF">13</text>
        <text x="18" y="10" font-family="sans-serif" font-size="5" font-weight="bold" fill="#FFFFFF">CLIMATE</text>
        <text x="18" y="16" font-family="sans-serif" font-size="5" font-weight="bold" fill="#FFFFFF">ACTION</text>
        <circle cx="18" cy="26" r="6" fill="none" stroke="#FFFFFF" stroke-width="1.5"/>
      </g>

      <g transform="translate(525, -26)">
        <!-- SDG 15 -->
        <rect x="0" y="0" width="36" height="36" fill="#56C02B" rx="2"/>
        <text x="5" y="12" font-family="'Arial Black', sans-serif" font-size="10" font-weight="900" fill="#FFFFFF">15</text>
        <text x="18" y="10" font-family="sans-serif" font-size="5" font-weight="bold" fill="#FFFFFF">LIFE</text>
        <text x="18" y="16" font-family="sans-serif" font-size="5" font-weight="bold" fill="#FFFFFF">ON LAND</text>
        <path d="M 10,28 Q 18,20 26,28" stroke="#FFFFFF" stroke-width="1.5" fill="none"/>
      </g>

      <g transform="translate(570, -26)">
        <!-- SDG 14 -->
        <rect x="0" y="0" width="36" height="36" fill="#0A97D9" rx="2"/>
        <text x="5" y="12" font-family="'Arial Black', sans-serif" font-size="10" font-weight="900" fill="#FFFFFF">14</text>
        <text x="18" y="10" font-family="sans-serif" font-size="5" font-weight="bold" fill="#FFFFFF">LIFE</text>
        <text x="18" y="16" font-family="sans-serif" font-size="5" font-weight="bold" fill="#FFFFFF">BELOW WATER</text>
        <path d="M 8,26 Q 13,23 18,26 T 28,26" stroke="#FFFFFF" stroke-width="1.5" fill="none"/>
      </g>
    </g>
  </svg>`;

  const base64Svg = typeof window !== 'undefined'
    ? window.btoa(unescape(encodeURIComponent(svg)))
    : Buffer.from(svg).toString('base64');

  return `data:image/svg+xml;base64,${base64Svg}`;
}

export function generateEnvion24CertificateSvg(): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 700" width="1000" height="700">
    <defs>
      <!-- Radial gradient for Earth glow -->
      <radialGradient id="globeGlow" cx="50%" cy="50%" r="50%">
        <stop offset="60%" stop-color="#0284C7"/>
        <stop offset="90%" stop-color="#38BDF8"/>
        <stop offset="100%" stop-color="#FFFFFF" stop-opacity="0.1"/>
      </radialGradient>
      <!-- Foliage foliage splatter mask / gradient -->
      <linearGradient id="foliageGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#166534"/>
        <stop offset="50%" stop-color="#22C55E"/>
        <stop offset="100%" stop-color="#86EFAC"/>
      </linearGradient>
    </defs>

    <!-- Clean Crisp White Canvas -->
    <rect x="0" y="0" width="1000" height="700" fill="#FFFFFF"/>

    <!-- Left Triple Green Strip Borders (exactly as in 8th.jpeg) -->
    <rect x="20" y="0" width="16" height="700" fill="#15803D"/>
    <rect x="42" y="0" width="10" height="700" fill="#22C55E"/>
    <rect x="58" y="0" width="4" height="700" fill="#86EFAC"/>

    <!-- Bottom Full-Width Forest Green Base Bar -->
    <rect x="0" y="676" width="1000" height="24" fill="#15803D"/>

    <!-- Top Right Banner Elements: Envion-24, Research Week, Superior Crest -->
    <g transform="translate(960, 42)">
      <!-- Superior University Crest Logo -->
      <g transform="translate(-40, 16)">
        <circle cx="0" cy="0" r="22" fill="none" stroke="#68217A" stroke-width="2.5"/>
        <circle cx="0" cy="0" r="6" fill="#68217A"/>
        <path d="M -16,0 L 16,0 M 0,-16 L 0,16 M -12,-12 L 12,12 M -12,12 L 12,-12" stroke="#68217A" stroke-width="1.8"/>
        <text x="0" y="34" text-anchor="middle" font-family="'Times New Roman', serif" font-size="10" font-weight="bold" fill="#68217A">
          SUPERIOR
        </text>
        <text x="0" y="44" text-anchor="middle" font-family="'Times New Roman', serif" font-size="8.5" font-weight="bold" fill="#68217A">
          UNIVERSITY
        </text>
      </g>

      <!-- Research Week Box -->
      <g transform="translate(-180, 0)">
        <text x="0" y="0" text-anchor="end" font-family="'Arial Black', sans-serif" font-size="19" font-weight="900" fill="#65A30D">
          Research
        </text>
        <text x="0" y="13" text-anchor="end" font-family="sans-serif" font-size="9" font-weight="bold" fill="#166534">
          Climate Change Week
        </text>
        <text x="0" y="23" text-anchor="end" font-family="sans-serif" font-size="7.5" fill="#166534">
          Adaptability
        </text>
        <rect x="-115" y="27" width="115" height="13" fill="#000000" rx="2"/>
        <text x="-57" y="37" text-anchor="middle" font-family="sans-serif" font-size="7.5" font-weight="bold" fill="#FFFFFF">
          29th Oct - 08th Nov 2024
        </text>
      </g>

      <!-- Envion-24 Title Top Center/Right -->
      <g transform="translate(-320, 18)">
        <text x="0" y="0" text-anchor="end" font-family="'Arial Black', 'Impact', sans-serif" font-size="34" font-weight="900" fill="#15803D" letter-spacing="1">
          Envi<tspan fill="#65A30D">o</tspan>n-24
        </text>
      </g>
    </g>

    <!-- Certificate of PARTICIPATION awarded to -->
    <g transform="translate(90, 160)">
      <text x="0" y="0" font-family="sans-serif" font-size="20" font-weight="bold" fill="#0F172A">
        Certificate of
      </text>
      <text x="0" y="42" font-family="'Arial Black', 'Trebuchet MS', sans-serif" font-size="46" font-weight="900" fill="#0F172A" letter-spacing="2">
        PARTICIPATION
      </text>
      <text x="0" y="74" font-family="sans-serif" font-size="18" font-weight="bold" fill="#0F172A">
        awarded to
      </text>
    </g>

    <!-- Recipient Name (Exact Brush Calligraphy as in 8th.jpeg) -->
    <g transform="translate(90, 280)">
      <text x="0" y="0" font-family="'Brush Script MT', 'Great Vibes', 'Allura', cursive" font-size="52" font-weight="bold" fill="#0F172A">
        Ibrahim Tahir Sindhu
      </text>
      <line x1="0" y1="14" x2="480" y2="14" stroke="#0F172A" stroke-width="1.8"/>
    </g>

    <!-- Event Body Content -->
    <g transform="translate(90, 335)">
      <text x="0" y="0" font-family="sans-serif" font-size="17" fill="#1E293B">
        for attending
      </text>
      <text x="0" y="46" font-family="'Arial Black', 'Impact', sans-serif" font-size="44" font-weight="900" fill="#15803D" letter-spacing="1">
        Envion-24
      </text>
      <text x="0" y="85" font-family="sans-serif" font-size="17" fill="#1E293B">
        held on <tspan font-weight="bold" fill="#0F172A">6th - 7th November 2024</tspan>
      </text>
      <text x="0" y="122" font-family="'Arial Black', sans-serif" font-size="18" font-weight="900" fill="#0F172A">
        Organised by
      </text>
      <text x="0" y="146" font-family="sans-serif" font-size="16" fill="#334155">
        Faculty of Allied Health Sciences
      </text>
      <text x="0" y="168" font-family="sans-serif" font-size="16" fill="#334155">
        Faculty of Sciences
      </text>
    </g>

    <!-- Right Side: Beautiful Lush Botanical Globe Splash (Photorealistic artwork in 8th.jpeg) -->
    <g transform="translate(775, 410)">
      <!-- Botanical leaf / moss splash background -->
      <ellipse cx="-20" cy="20" rx="140" ry="110" fill="url(#foliageGrad)" opacity="0.3" transform="rotate(-15)"/>
      <ellipse cx="20" cy="-10" rx="120" ry="90" fill="#14532D" opacity="0.4" transform="rotate(25)"/>
      
      <!-- Vivid 3D Earth Globe with Atmosphere -->
      <circle cx="0" cy="0" r="105" fill="url(#globeGlow)"/>
      
      <!-- Detailed Oceans & Continents -->
      <circle cx="0" cy="0" r="100" fill="#0284C7"/>
      <!-- Americas / Continental Landmasses -->
      <path d="M -60,-65 C -30,-85 20,-75 45,-50 C 65,-20 80,20 60,60 C 40,85 -20,95 -60,65 C -90,40 -80,-30 -60,-65 Z" fill="#E2E8F0" opacity="0.9"/>
      <path d="M -45,-50 C -25,-65 15,-55 35,-35 C 50,-10 60,25 45,55 C 30,75 -15,80 -45,55 C -65,35 -60,-20 -45,-50 Z" fill="#22C55E"/>
      <path d="M -20,-20 C -5,-40 25,-30 30,-10 C 35,10 15,35 -5,30 C -20,25 -25,-5 -20,-20 Z" fill="#15803D"/>
      <!-- Cloud swirls -->
      <path d="M -80,-20 Q -40,-45 20,-30 T 80,-10" stroke="#FFFFFF" stroke-width="8" stroke-linecap="round" fill="none" opacity="0.6"/>
      <path d="M -60,30 Q 0,10 60,40" stroke="#FFFFFF" stroke-width="6" stroke-linecap="round" fill="none" opacity="0.5"/>

      <!-- Lush green moss & botanicals dripping underneath -->
      <path d="M -110,80 Q -60,110 0,95 Q 60,115 110,75 Q 70,130 -10,125 Q -80,120 -110,80 Z" fill="#166534"/>
      <circle cx="-50" cy="100" r="8" fill="#4ADE80"/>
      <circle cx="-20" cy="112" r="6" fill="#86EFAC"/>
      <circle cx="30" cy="108" r="9" fill="#22C55E"/>
      <circle cx="70" cy="95" r="7" fill="#4ADE80"/>
    </g>

    <!-- Signatures Section -->
    <g transform="translate(110, 605)">
      <!-- Sig 1: Prof. Dr. Sumaira Rehman -->
      <path d="M -20,-18 Q 5,-40 30,-10 T 60,-20" stroke="#000000" stroke-width="2.5" fill="none"/>
      <line x1="-30" y1="0" x2="130" y2="0" stroke="#0F172A" stroke-width="1.5"/>
      <text x="50" y="16" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="bold" fill="#0F172A">Prof. Dr. Sumaira Rehman</text>
      <text x="50" y="30" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#475569">Rector - Superior University</text>
    </g>

    <g transform="translate(340, 605)">
      <!-- Sig 2: Prof. Dr. Muhammad Naveed Babur -->
      <path d="M -20,-15 Q 5,-35 30,-8 T 60,-18" stroke="#000000" stroke-width="2.5" fill="none"/>
      <line x1="-30" y1="0" x2="150" y2="0" stroke="#0F172A" stroke-width="1.5"/>
      <text x="60" y="16" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="bold" fill="#0F172A">Prof. Dr. Muhammad Naveed Babur</text>
      <text x="60" y="30" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#475569">Dean - Faculty of Allied Health Sciences</text>
      <text x="60" y="42" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#475569">Superior University, Lahore</text>
    </g>

    <!-- Bottom Sponsors (Powered by : J.R FRAGRANCES, RAWAL FEED, HALEEB FOODS) -->
    <g transform="translate(535, 625)">
      <text x="0" y="0" font-family="sans-serif" font-size="11" font-weight="bold" fill="#334155">
        Powered by :
      </text>

      <!-- Sponsor 1: Event logo -->
      <g transform="translate(85, -5)">
        <rect x="-12" y="-12" width="24" height="24" fill="#3B82F6" rx="4"/>
        <circle cx="0" cy="0" r="7" fill="#EF4444"/>
      </g>

      <!-- Sponsor 2: J.R FRAGRANCES -->
      <g transform="translate(135, -5)">
        <text x="0" y="-2" font-family="'Arial Black', sans-serif" font-size="14" font-weight="900" fill="#0F172A">J.R</text>
        <text x="0" y="7" font-family="sans-serif" font-size="6" font-weight="bold" fill="#475569">FRAGRANCES</text>
      </g>

      <!-- Sponsor 3: RAWAL FEED -->
      <g transform="translate(230, -5)">
        <circle cx="-16" cy="0" r="10" fill="#EF4444"/>
        <text x="0" y="2" font-family="'Arial Black', sans-serif" font-size="9" font-weight="900" fill="#0F172A">RAWAL FEED</text>
      </g>

      <!-- Sponsor 4: HALEEB FOODS -->
      <g transform="translate(340, -5)">
        <rect x="-35" y="-12" width="70" height="22" fill="#1E3A8A" rx="4"/>
        <text x="0" y="2" text-anchor="middle" font-family="'Arial Black', sans-serif" font-size="10" font-weight="900" fill="#FFFFFF">HALEEB</text>
        <text x="0" y="8" text-anchor="middle" font-family="sans-serif" font-size="4.5" font-weight="bold" fill="#BFDBFE">FOODS</text>
      </g>
    </g>
  </svg>`;

  const base64Svg = typeof window !== 'undefined'
    ? window.btoa(unescape(encodeURIComponent(svg)))
    : Buffer.from(svg).toString('base64');

  return `data:image/svg+xml;base64,${base64Svg}`;
}

export function generateEcoLegalCertificateSvg(): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 700" width="1000" height="700">
    <defs>
      <radialGradient id="ecoBgGlow" cx="55%" cy="50%" r="60%">
        <stop offset="0%" stop-color="#1E4D3A"/>
        <stop offset="60%" stop-color="#143A2C"/>
        <stop offset="100%" stop-color="#0D281E"/>
      </radialGradient>
      <linearGradient id="pillGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#22C55E"/>
        <stop offset="50%" stop-color="#16A34A"/>
        <stop offset="100%" stop-color="#15803D"/>
      </linearGradient>
    </defs>

    <!-- Dark Deep Forest Green Background -->
    <rect x="0" y="0" width="1000" height="700" fill="url(#ecoBgGlow)"/>

    <!-- Subtle circuit / tree node background watermark in right center -->
    <g opacity="0.08" stroke="#FFFFFF" stroke-width="1.5" fill="none">
      <circle cx="620" cy="380" r="140"/>
      <circle cx="620" cy="380" r="80"/>
      <path d="M 620,240 L 620,520 M 480,380 L 760,380 M 520,280 L 720,480 M 520,480 L 720,280"/>
    </g>

    <!-- Top Left SLMCS Shield Badge -->
    <g transform="translate(75, 55)">
      <path d="M -30,-25 L 30,-25 L 30,5 C 30,28 0,42 0,42 C 0,42 -30,28 -30,5 Z" fill="#1B4D3E" stroke="#4ADE80" stroke-width="2"/>
      <path d="M -15,-10 L 0,-20 L 15,-10 L 15,10 C 15,18 0,25 0,25 C 0,25 -15,18 -15,10 Z" fill="#22C55E"/>
      <text x="0" y="-12" text-anchor="middle" font-family="sans-serif" font-size="8" font-weight="900" fill="#FFFFFF">SLMCS</text>
    </g>

    <!-- Top Right Green Leaf Badge -->
    <g transform="translate(930, 55)">
      <circle cx="0" cy="0" r="28" fill="#16A34A" stroke="#4ADE80" stroke-width="2"/>
      <path d="M -12,10 Q -10,-12 12,-12 Q 12,12 -12,10 Z" fill="#FFFFFF"/>
      <path d="M -8,8 Q 0,0 8,-8" stroke="#16A34A" stroke-width="1.5" fill="none"/>
    </g>

    <!-- Left Graphic: Giant Stylized Vertical '2025' on Green Capsule Banner -->
    <g transform="translate(180, 350)">
      <!-- Rounded Capsule Container -->
      <rect x="-105" y="-310" width="210" height="620" rx="45" fill="url(#pillGrad)" stroke="#4ADE80" stroke-width="2"/>
      
      <!-- Big Bold 2025 stacked letters -->
      <text x="0" y="-180" text-anchor="middle" font-family="'Arial Black', 'Impact', sans-serif" font-size="140" font-weight="900" fill="#FFFFFF" stroke="#0D281E" stroke-width="6" paint-order="stroke fill">2</text>
      <text x="0" y="-40" text-anchor="middle" font-family="'Arial Black', 'Impact', sans-serif" font-size="140" font-weight="900" fill="#FFFFFF" stroke="#0D281E" stroke-width="6" paint-order="stroke fill">0</text>
      <text x="0" y="100" text-anchor="middle" font-family="'Arial Black', 'Impact', sans-serif" font-size="140" font-weight="900" fill="#FFFFFF" stroke="#0D281E" stroke-width="6" paint-order="stroke fill">2</text>
      <text x="0" y="240" text-anchor="middle" font-family="'Arial Black', 'Impact', sans-serif" font-size="140" font-weight="900" fill="#FFFFFF" stroke="#0D281E" stroke-width="6" paint-order="stroke fill">5</text>

      <!-- Organic olive branches / leaves weaving across 2025 -->
      <g stroke="#143A2C" stroke-width="2" fill="#86EFAC">
        <path d="M 60,-220 Q 95,-160 120,-110" stroke="#86EFAC" stroke-width="3" fill="none"/>
        <ellipse cx="80" cy="-190" rx="14" ry="7" transform="rotate(35 80 -190)"/>
        <ellipse cx="105" cy="-160" rx="16" ry="8" transform="rotate(45 105 -160)"/>
        <ellipse cx="120" cy="-125" rx="14" ry="7" transform="rotate(55 120 -125)"/>
        <path d="M 50,0 Q 80,60 100,120" stroke="#86EFAC" stroke-width="3" fill="none"/>
        <ellipse cx="65" cy="30" rx="14" ry="7" transform="rotate(40 65 30)"/>
        <ellipse cx="85" cy="70" rx="16" ry="8" transform="rotate(50 85 70)"/>
        <path d="M -80,180 Q -110,230 -130,270" stroke="#86EFAC" stroke-width="3" fill="none"/>
        <ellipse cx="-95" cy="205" rx="16" ry="8" transform="rotate(-40 -95 205)"/>
        <ellipse cx="-115" cy="245" rx="18" ry="9" transform="rotate(-50 -115 245)"/>
      </g>
    </g>

    <!-- Certificate Headers -->
    <g transform="translate(630, 140)">
      <text x="0" y="0" text-anchor="middle" font-family="'Arial Black', 'Helvetica Neue', sans-serif" font-size="56" font-weight="900" fill="#FFFFFF" letter-spacing="2">
        Certificate
      </text>
      <text x="0" y="38" text-anchor="middle" font-family="'Arial Black', sans-serif" font-size="22" font-weight="900" fill="#FFFFFF" letter-spacing="3">
        OF PARTICIPATION
      </text>
      <text x="0" y="80" text-anchor="middle" font-family="sans-serif" font-size="17" font-weight="500" fill="#E2E8F0">
        Is Proudly Presented To
      </text>
    </g>

    <!-- Recipient Name: Ibrahim Sindhu -->
    <g transform="translate(630, 310)">
      <text x="0" y="0" text-anchor="middle" font-family="'Times New Roman', 'Georgia', serif" font-size="44" font-weight="bold" font-style="italic" fill="#FFFFFF" letter-spacing="1">
        Ibrahim Sindhu
      </text>
      <line x1="-220" y1="14" x2="220" y2="14" stroke="#FFFFFF" stroke-width="2"/>
    </g>

    <!-- Description Text -->
    <g transform="translate(630, 370)" font-family="sans-serif" font-size="16" fill="#F1F5F9" text-anchor="middle">
      <text x="0" y="0">
        For Participating in the <tspan font-weight="bold" fill="#FFFFFF">Eco Legal Nexus Workshop</tspan>
      </text>
      <text x="0" y="28">
        organised by the <tspan font-weight="bold" fill="#FFFFFF">Superior Law Moot Court Society</tspan> in
      </text>
      <text x="0" y="56">
        collaboration with <tspan font-weight="bold" fill="#FFFFFF">Superior Environmental Society</tspan> on
      </text>
      <text x="0" y="90" font-size="18" font-weight="bold" fill="#FFFFFF">
        30th September, 2025
      </text>
    </g>

    <!-- Signatures -->
    <g transform="translate(480, 585)">
      <path d="M -30,-15 Q 0,-35 25,-10 T 55,-20" stroke="#FFFFFF" stroke-width="2.5" fill="none"/>
      <line x1="-75" y1="0" x2="75" y2="0" stroke="#FFFFFF" stroke-width="1.5"/>
      <text x="0" y="18" text-anchor="middle" font-family="'Arial Black', sans-serif" font-size="13" font-weight="900" fill="#FFFFFF">SHARMEEN RAMZAN</text>
      <text x="0" y="32" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="bold" fill="#A7F3D0">PRESIDENT, SLMCS</text>
    </g>

    <g transform="translate(780, 585)">
      <path d="M -25,-18 Q 5,-40 30,-10 T 55,-25" stroke="#FFFFFF" stroke-width="2.5" fill="none"/>
      <line x1="-75" y1="0" x2="75" y2="0" stroke="#FFFFFF" stroke-width="1.5"/>
      <text x="0" y="18" text-anchor="middle" font-family="'Arial Black', sans-serif" font-size="13" font-weight="900" fill="#FFFFFF">YASAAL NADEEM</text>
      <text x="0" y="32" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="bold" fill="#A7F3D0">PRESIDENT, SSES</text>
    </g>
  </svg>`;

  const base64Svg = typeof window !== 'undefined'
    ? window.btoa(unescape(encodeURIComponent(svg)))
    : Buffer.from(svg).toString('base64');

  return `data:image/svg+xml;base64,${base64Svg}`;
}

export function generateAgricultureCareersCertificateSvg(): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 700" width="1000" height="700">
    <!-- Clean Crisp Canvas -->
    <rect x="0" y="0" width="1000" height="700" fill="#FFFFFF"/>

    <!-- Top Divider Line -->
    <line x1="0" y1="80" x2="1000" y2="80" stroke="#0F172A" stroke-width="4"/>

    <!-- Superior University Header Crest & Typography -->
    <g transform="translate(500, 48)">
      <g transform="translate(-160, 0)">
        <circle cx="0" cy="0" r="22" fill="none" stroke="#68217A" stroke-width="2.5"/>
        <circle cx="0" cy="0" r="6" fill="#68217A"/>
        <path d="M -16,0 L 16,0 M 0,-16 L 0,16 M -12,-12 L 12,12 M -12,12 L 12,-12" stroke="#68217A" stroke-width="2"/>
      </g>
      <text x="-120" y="8" font-family="'Times New Roman', serif" font-size="28" font-weight="bold" fill="#0F172A" letter-spacing="1">
        SUPERIOR UNIVERSITY
      </text>
    </g>

    <!-- Right Side Lab Photo / Illustration Background Container -->
    <g transform="translate(620, 84)">
      <!-- Lab backdrop / blurred equipment -->
      <rect x="0" y="0" width="380" height="616" fill="#0F172A"/>
      <rect x="0" y="0" width="380" height="616" fill="#0284C7" opacity="0.2"/>
      
      <!-- Computer monitor and green plant culture in background -->
      <rect x="30" y="180" width="160" height="120" rx="6" fill="#1E293B" stroke="#475569" stroke-width="2"/>
      <rect x="40" y="190" width="140" height="90" fill="#0284C7" opacity="0.6"/>
      <path d="M 60,250 Q 90,210 120,240 T 160,230" stroke="#38BDF8" stroke-width="2" fill="none"/>
      
      <!-- Green plant culture in lab rack behind -->
      <g transform="translate(240, 160)">
        <rect x="0" y="0" width="100" height="160" rx="4" fill="#064E3B" opacity="0.8"/>
        <circle cx="30" cy="50" r="14" fill="#10B981"/>
        <circle cx="70" cy="70" r="16" fill="#34D399"/>
        <circle cx="40" cy="110" r="18" fill="#059669"/>
      </g>

      <!-- Scientist in Lab Coat & Blue Nitrile Gloves holding Petri Dish (VEGAN label) -->
      <path d="M 280,616 L 380,480 L 320,360 L 260,400 Z" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="2"/>
      <path d="M 260,400 L 220,280 L 290,260 L 320,360 Z" fill="#3B82F6"/>
      
      <!-- Blue Glove Hand holding plate -->
      <g transform="translate(250, 260)">
        <path d="M -15,10 C -25,-10 -10,-40 10,-35 C 30,-30 25,10 5,20 Z" fill="#6366F1"/>
        <circle cx="10" cy="-30" r="38" fill="#B91C1C" stroke="#E2E8F0" stroke-width="4"/>
        <circle cx="10" cy="-30" r="33" fill="#991B1B"/>
        <path d="M 0,-40 Q 15,-50 25,-35 Q 25,-18 5,-20 Z" fill="#22C55E"/>
        <rect x="-8" y="-34" width="36" height="12" rx="6" fill="#15803D"/>
        <text x="10" y="-25" text-anchor="middle" font-family="sans-serif" font-size="7" font-weight="900" fill="#FFFFFF">VEGAN</text>
        <circle cx="10" cy="-30" r="38" fill="none" stroke="#FFFFFF" stroke-width="2" opacity="0.6"/>
      </g>

      <!-- Keyboard on lab desk -->
      <g transform="translate(50, 480)">
        <polygon points="0,60 180,60 150,15 20,15" fill="#334155" stroke="#475569" stroke-width="1.5"/>
        <line x1="25" y1="30" x2="145" y2="30" stroke="#94A3B8" stroke-width="3" stroke-dasharray="8 3"/>
        <line x1="20" y1="42" x2="155" y2="42" stroke="#94A3B8" stroke-width="3" stroke-dasharray="8 3"/>
        <line x1="15" y1="52" x2="165" y2="52" stroke="#94A3B8" stroke-width="3" stroke-dasharray="12 4"/>
      </g>
    </g>

    <!-- Left Main Certificate Content -->
    <g transform="translate(70, 160)">
      <text x="0" y="0" font-family="sans-serif" font-size="22" font-weight="bold" fill="#0F172A">
        Certificate of
      </text>
      <text x="0" y="46" font-family="'Arial Black', 'Trebuchet MS', sans-serif" font-size="44" font-weight="900" fill="#0F172A" letter-spacing="2">
        PARTICIPATION
      </text>
      <text x="0" y="82" font-family="sans-serif" font-size="18" font-weight="bold" fill="#0F172A">
        awarded to
      </text>
    </g>

    <!-- Recipient Name: Ibrahim Tahir Sindhu -->
    <g transform="translate(70, 290)">
      <text x="0" y="0" font-family="'Brush Script MT', 'Great Vibes', 'Allura', cursive" font-size="48" font-weight="bold" fill="#0F172A">
        Ibrahim Tahir Sindhu
      </text>
      <line x1="0" y1="12" x2="420" y2="12" stroke="#0F172A" stroke-width="2"/>
    </g>

    <!-- Workshop Details -->
    <g transform="translate(70, 345)">
      <text x="0" y="0" font-family="sans-serif" font-size="16" fill="#334155">
        for participating in a workshop titled
      </text>
      <text x="0" y="32" font-family="'Arial Black', sans-serif" font-size="22" font-weight="900" fill="#0F172A">
        Exploring Careers in Agriculture and
      </text>
      <text x="0" y="58" font-family="'Arial Black', sans-serif" font-size="22" font-weight="900" fill="#0F172A">
        Biological Science
      </text>
      
      <text x="0" y="98" font-family="'Arial Black', sans-serif" font-size="16" font-weight="900" fill="#0F172A">
        organised by
      </text>
      <text x="0" y="122" font-family="sans-serif" font-size="14.5" fill="#334155">
        Department of Agricultural Sciences in collaboration with Biological Sciences,
      </text>
      <text x="0" y="142" font-family="sans-serif" font-size="14.5" font-weight="bold" fill="#0F172A">
        Superior University Lahore.
      </text>
    </g>

    <!-- Signatures Row (3 Signatures) -->
    <g transform="translate(130, 600)">
      <path d="M -30,-15 Q 0,-35 25,-10 T 50,-20" stroke="#000000" stroke-width="2.5" fill="none"/>
      <line x1="-55" y1="0" x2="65" y2="0" stroke="#0F172A" stroke-width="1.5"/>
      <text x="5" y="16" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="bold" fill="#0F172A">Prof. Dr. Uqba Mahmood</text>
      <text x="5" y="28" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#475569">HoD - Department of Biological Sciences</text>
      <text x="5" y="39" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#475569">Superior University, Lahore</text>
    </g>

    <g transform="translate(290, 600)">
      <path d="M -25,-20 Q 5,-40 30,-15 T 60,-22" stroke="#0284C7" stroke-width="2.5" fill="none"/>
      <line x1="-45" y1="0" x2="65" y2="0" stroke="#0F172A" stroke-width="1.5"/>
      <text x="10" y="16" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="bold" fill="#0F172A">Dr. Ali Aslam</text>
      <text x="10" y="28" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#475569">HoD - Department of Agriculture</text>
      <text x="10" y="39" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#475569">Superior University, Lahore</text>
    </g>

    <g transform="translate(480, 600)">
      <path d="M -30,-15 Q 0,-35 25,-10 T 55,-20" stroke="#000000" stroke-width="2.5" fill="none"/>
      <line x1="-55" y1="0" x2="75" y2="0" stroke="#0F172A" stroke-width="1.5"/>
      <text x="10" y="16" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="bold" fill="#0F172A">Prof. Dr. Muhammad Naveed Babur</text>
      <text x="10" y="28" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#475569">Dean - Faculty of Allied Health Sciences</text>
      <text x="10" y="39" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#475569">Superior University, Lahore</text>
    </g>
  </svg>`;

  const base64Svg = typeof window !== 'undefined'
    ? window.btoa(unescape(encodeURIComponent(svg)))
    : Buffer.from(svg).toString('base64');

  return `data:image/svg+xml;base64,${base64Svg}`;
}

export function generateIpexCertificateSvg(): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 700" width="1000" height="700">
    <defs>
      <pattern id="guillocheWaves" width="1000" height="20" patternUnits="userSpaceOnUse">
        <path d="M 0,10 Q 250,0 500,10 T 1000,10" fill="none" stroke="#65A30D" stroke-width="0.8" opacity="0.35"/>
        <path d="M 0,15 Q 250,5 500,15 T 1000,15" fill="none" stroke="#CA8A04" stroke-width="0.5" opacity="0.25"/>
      </pattern>
    </defs>

    <!-- Base Canvas -->
    <rect x="0" y="0" width="1000" height="700" fill="#FFFFFF"/>
    
    <!-- Guilloche Wave Background -->
    <rect x="25" y="25" width="950" height="650" fill="url(#guillocheWaves)"/>

    <!-- Outer Blue & Inner Red Borders -->
    <rect x="10" y="10" width="980" height="680" fill="none" stroke="#1D4ED8" stroke-width="12"/>
    <rect x="24" y="24" width="952" height="652" fill="none" stroke="#DC2626" stroke-width="2"/>

    <!-- Top Left PPA Logo -->
    <g transform="translate(110, 80)">
      <rect x="-42" y="-42" width="84" height="84" rx="16" fill="#FFFFFF" stroke="#EA580C" stroke-width="2.5"/>
      <path d="M -18,-15 C -25,-30 0,-30 10,-20 C 20,-10 20,10 5,20 C -15,20 -20,0 -18,-15 Z" fill="#EA580C"/>
      <circle cx="-5" cy="-12" r="3" fill="#FFFFFF"/>
      <text x="0" y="32" text-anchor="middle" font-family="'Arial Black', sans-serif" font-size="20" font-weight="900" fill="#0F172A">ppa</text>
    </g>

    <!-- Top Center IPEX Logo -->
    <g transform="translate(500, 85)">
      <circle cx="-35" cy="-8" r="28" fill="#FFFFFF" stroke="#DC2626" stroke-width="2"/>
      <circle cx="-35" cy="-8" r="22" fill="#15803D"/>
      <text x="-35" y="-3" text-anchor="middle" font-family="'Arial Black', sans-serif" font-size="12" font-weight="900" fill="#FFFFFF">ppa</text>
      
      <rect x="-5" y="-26" width="95" height="36" rx="3" fill="#DC2626"/>
      <text x="42" y="-14" text-anchor="middle" font-family="sans-serif" font-size="6.5" font-weight="bold" fill="#FFFFFF">International</text>
      <text x="42" y="-4" text-anchor="middle" font-family="'Arial Black', sans-serif" font-size="9" font-weight="900" fill="#FFFFFF">Poultry Expo</text>
      <text x="42" y="6" text-anchor="middle" font-family="sans-serif" font-size="6.5" font-weight="bold" fill="#FACC15">October 23-24-25 2025</text>
      
      <rect x="90" y="-26" width="16" height="36" rx="2" fill="#CA8A04"/>
      <text x="98" y="-4" text-anchor="middle" font-family="'Arial Black', sans-serif" font-size="7" font-weight="900" fill="#FFFFFF" transform="rotate(90 98 -4)">IPEX</text>
    </g>

    <!-- Top Right 25th Silver Jubilee Shield Badge -->
    <g transform="translate(860, 80)">
      <path d="M -45,-30 L 45,-30 C 45,15 0,40 0,40 C 0,40 -45,15 -45,-30 Z" fill="#EA580C" stroke="#0F172A" stroke-width="2"/>
      <text x="0" y="-2" text-anchor="middle" font-family="'Arial Black', sans-serif" font-size="28" font-weight="900" fill="#FFFFFF">25<tspan font-size="14" dy="-12">th</tspan></text>
      <text x="0" y="16" text-anchor="middle" font-family="sans-serif" font-size="5.5" font-weight="bold" fill="#FFFFFF">SILVER JUBILEE OF INTERNATIONAL POULTRY EXPO</text>
    </g>

    <!-- Header Titles -->
    <g transform="translate(500, 165)" text-anchor="middle">
      <text x="0" y="0" font-family="'Times New Roman', Georgia, serif" font-size="26" font-weight="bold" fill="#0F172A" letter-spacing="1.5">
        PAKISTAN POULTRY ASSOCIATION
      </text>
      <text x="0" y="24" font-family="'Times New Roman', Georgia, serif" font-size="16" font-style="italic" fill="#334155">
        The Organizing Committee of the
      </text>
      <text x="0" y="60" font-family="'Times New Roman', Georgia, serif" font-size="34" font-weight="900" fill="#DC2626" letter-spacing="1">
        INTERNATIONAL POULTRY EXPO-2025
      </text>
      <text x="0" y="86" font-family="'Times New Roman', Georgia, serif" font-size="17" font-style="italic" fill="#334155">
        is Pleased to Present this
      </text>
    </g>

    <!-- Ornate Script: Certificate -->
    <text x="500" y="325" text-anchor="middle" font-family="'Brush Script MT', 'Great Vibes', 'Allura', cursive" font-size="74" font-weight="bold" fill="#9A3412">
      Certificate
    </text>

    <!-- Boxed OF PARTICIPATION -->
    <g transform="translate(500, 365)">
      <rect x="-115" y="-18" width="230" height="28" fill="#1E293B" rx="2"/>
      <text x="0" y="2" text-anchor="middle" font-family="'Arial Black', sans-serif" font-size="14" font-weight="900" fill="#FFFFFF" letter-spacing="1.5">
        OF PARTICIPATION
      </text>
    </g>

    <!-- Recipient Dr/Mr/Mrs Line -->
    <g transform="translate(500, 450)">
      <text x="-410" y="0" font-family="'Times New Roman', serif" font-size="22" font-weight="bold" fill="#0F172A">
        Dr/Mr/Mrs/
      </text>
      <text x="0" y="-2" text-anchor="middle" font-family="'Times New Roman', Georgia, serif" font-size="32" font-weight="bold" fill="#0F172A">
        Ibrahim Tahir Sindhu
      </text>
      <line x1="-300" y1="6" x2="410" y2="6" stroke="#0F172A" stroke-width="1.8"/>
    </g>

    <!-- Expo Description -->
    <g transform="translate(500, 505)" text-anchor="middle">
      <text x="0" y="0" font-family="'Times New Roman', Georgia, serif" font-size="19" fill="#1E293B">
        For the Participation in International Poultry Expo Held on
      </text>
      <text x="0" y="28" font-family="'Times New Roman', Georgia, serif" font-size="20" font-weight="bold" fill="#0F172A">
        23<tspan font-size="14" dy="-6">rd</tspan><tspan font-size="20" dy="6">, 24</tspan><tspan font-size="14" dy="-6">th</tspan><tspan font-size="20" dy="6">, 25</tspan><tspan font-size="14" dy="-6">th</tspan><tspan font-size="20" dy="6"> October 2025 at Lahore Expo Center</tspan>
      </text>
    </g>

    <!-- 3 Signatures Row -->
    <g transform="translate(230, 615)">
      <path d="M -30,-15 Q 0,-35 25,-10 T 50,-20" stroke="#000000" stroke-width="2" fill="none"/>
      <line x1="-80" y1="0" x2="80" y2="0" stroke="#0F172A" stroke-width="1.5"/>
      <text x="0" y="16" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold" fill="#0F172A">Malik Muhammad Sharif</text>
      <text x="0" y="30" text-anchor="middle" font-family="sans-serif" font-size="10.5" fill="#475569">Chairman IPEX-2025</text>
    </g>

    <g transform="translate(500, 615)">
      <path d="M -25,-25 Q 5,-45 30,-10 T 50,-25" stroke="#000000" stroke-width="2" fill="none"/>
      <line x1="-80" y1="0" x2="80" y2="0" stroke="#0F172A" stroke-width="1.5"/>
      <text x="0" y="16" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold" fill="#0F172A">Abdul Haye Mehta</text>
      <text x="0" y="30" text-anchor="middle" font-family="sans-serif" font-size="10.5" fill="#475569">Chief Organizer IPEX 2025</text>
    </g>

    <g transform="translate(770, 615)">
      <path d="M -20,-20 Q 10,-45 35,-15 T 55,-30" stroke="#000000" stroke-width="2" fill="none"/>
      <line x1="-80" y1="0" x2="80" y2="0" stroke="#0F172A" stroke-width="1.5"/>
      <text x="0" y="16" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold" fill="#0F172A">Shafiq Ahmad</text>
      <text x="0" y="30" text-anchor="middle" font-family="sans-serif" font-size="10.5" fill="#475569">Secretary IPEX 2025</text>
    </g>
  </svg>`;

  const base64Svg = typeof window !== 'undefined'
    ? window.btoa(unescape(encodeURIComponent(svg)))
    : Buffer.from(svg).toString('base64');

  return `data:image/svg+xml;base64,${base64Svg}`;
}

export function generateOecSvlCertificateSvg(): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 700" width="1000" height="700">
    <defs>
      <linearGradient id="goldMedalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FEF08A"/>
        <stop offset="30%" stop-color="#EAB308"/>
        <stop offset="70%" stop-color="#CA8A04"/>
        <stop offset="100%" stop-color="#854D0E"/>
      </linearGradient>
      <linearGradient id="ribbonGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#DC2626"/>
        <stop offset="50%" stop-color="#4338CA"/>
        <stop offset="100%" stop-color="#EAB308"/>
      </linearGradient>
    </defs>

    <!-- Canvas Background -->
    <rect x="0" y="0" width="1000" height="700" fill="#FFFFFF"/>

    <!-- Subtle Dotted Border Frame -->
    <rect x="25" y="25" width="950" height="650" fill="none" stroke="#64748B" stroke-width="1.5" stroke-dasharray="3 3"/>
    <rect x="28" y="28" width="944" height="644" fill="none" stroke="#94A3B8" stroke-width="0.8"/>
    <!-- Corner brackets -->
    <path d="M 20,40 L 20,20 L 40,20 M 960,20 L 980,20 L 980,40 M 20,660 L 20,680 L 40,680 M 960,680 L 980,680 L 980,660" stroke="#0F172A" stroke-width="2" fill="none"/>

    <!-- Star Watermarks / Patterns scattered in upper section -->
    <g stroke="#94A3B8" stroke-width="1" fill="none" opacity="0.65">
      <!-- Left side stars -->
      <polygon points="65,48 68,56 76,56 70,61 72,69 65,64 58,69 60,61 54,56 62,56"/>
      <polygon points="120,48 123,56 131,56 125,61 127,69 120,64 113,69 115,61 109,56 117,56"/>
      <polygon points="175,48 178,56 186,56 180,61 182,69 175,64 168,69 170,61 164,56 172,56"/>
      <polygon points="230,48 233,56 241,56 235,61 237,69 230,64 223,69 225,61 219,56 227,56"/>
      <polygon points="285,48 288,56 296,56 290,61 292,69 285,64 278,69 280,61 274,56 282,56"/>
      <polygon points="340,48 343,56 351,56 345,61 347,69 340,64 333,69 335,61 329,56 337,56"/>
      <polygon points="395,48 398,56 406,56 400,61 402,69 395,64 388,69 390,61 384,56 392,56"/>
      
      <polygon points="215,130 218,138 226,138 220,143 222,151 215,146 208,151 210,143 204,138 212,138"/>
      <polygon points="265,130 268,138 276,138 270,143 272,151 265,146 258,151 260,143 254,138 262,138"/>
      <polygon points="320,130 323,138 331,138 325,143 327,151 320,146 313,151 315,143 309,138 317,138"/>
      <polygon points="375,130 378,138 386,138 380,143 382,151 375,146 368,151 370,143 364,138 372,138"/>
      
      <polygon points="240,195 243,203 251,203 245,208 247,216 240,211 233,216 235,208 229,203 237,203"/>
      <polygon points="295,195 298,203 306,203 300,208 302,216 295,211 288,216 290,208 284,203 292,203"/>
      <polygon points="350,195 353,203 361,203 355,208 357,216 350,211 343,216 345,208 339,203 347,203"/>
      <polygon points="400,195 403,203 411,203 405,208 407,216 400,211 393,216 395,208 389,203 397,203"/>

      <!-- Right side stars -->
      <polygon points="605,48 608,56 616,56 610,61 612,69 605,64 598,69 600,61 594,56 602,56"/>
      <polygon points="660,48 663,56 671,56 665,61 667,69 660,64 653,69 655,61 649,56 657,56"/>
      <polygon points="720,48 723,56 731,56 725,61 727,69 720,64 713,69 715,61 709,56 717,56"/>
      <polygon points="780,48 783,56 791,56 785,61 787,69 780,64 773,69 775,61 769,56 777,56"/>
      <polygon points="840,48 843,56 851,56 845,61 847,69 840,64 833,69 835,61 829,56 837,56"/>
      <polygon points="900,48 903,56 911,56 905,61 907,69 900,64 893,69 895,61 889,56 897,56"/>

      <polygon points="630,130 633,138 641,138 635,143 637,151 630,146 623,151 625,143 619,138 627,138"/>
      <polygon points="685,130 688,138 696,138 690,143 692,151 685,146 678,151 680,143 674,138 682,138"/>
      <polygon points="740,130 743,138 751,138 745,143 747,151 740,146 733,151 735,143 729,138 737,138"/>
      <polygon points="795,130 798,138 806,138 800,143 802,151 795,146 788,151 790,143 784,138 792,138"/>

      <polygon points="600,195 603,203 611,203 605,208 607,216 600,211 593,216 595,208 589,203 597,203"/>
      <polygon points="655,195 658,203 666,203 660,208 662,216 655,211 648,216 650,208 644,203 652,203"/>
      <polygon points="710,195 713,203 721,203 715,208 717,216 710,211 703,216 705,208 699,203 707,203"/>
      <polygon points="765,195 768,203 776,203 770,208 772,216 765,211 758,216 760,208 754,203 762,203"/>
    </g>

    <!-- Top Left: OEC Office of Engagement & Co-Creation Logo -->
    <g transform="translate(130, 140)">
      <g transform="translate(-50, -35)">
        <text x="0" y="38" font-family="'Arial Black', sans-serif" font-size="44" font-weight="900" fill="#DC2626" letter-spacing="-2">O</text>
        <text x="35" y="38" font-family="'Arial Black', sans-serif" font-size="44" font-weight="900" fill="#EA580C" letter-spacing="-2">E</text>
        <text x="68" y="38" font-family="'Arial Black', sans-serif" font-size="44" font-weight="900" fill="#EAB308" letter-spacing="-2">C</text>
      </g>
      <text x="0" y="24" text-anchor="middle" font-family="sans-serif" font-size="7.5" font-weight="bold" fill="#0F172A" letter-spacing="0.5">
        OFFICE OF ENGAGEMENT
      </text>
      <text x="0" y="33" text-anchor="middle" font-family="sans-serif" font-size="7" font-weight="bold" fill="#0F172A" letter-spacing="0.5">
        AND CO-CREATION
      </text>
      <text x="0" y="42" text-anchor="middle" font-family="sans-serif" font-size="6.5" font-weight="bold" fill="#64748B" letter-spacing="0.5">
        SUPERIOR UNIVERSITY
      </text>
    </g>

    <!-- Top Center: Hanging Gold Medallion with Ribbon and SVL Emblem -->
    <g transform="translate(500, 75)">
      <!-- Ribbon Hanging Down from top frame -->
      <polygon points="-30,-75 30,-75 22,0 -22,0" fill="url(#ribbonGrad1)"/>
      <polygon points="-22,0 0,20 22,0" fill="#312E81"/>
      <!-- Gold Medal Outer & Inner Rings -->
      <circle cx="0" cy="45" r="48" fill="url(#goldMedalGrad)" stroke="#A16207" stroke-width="3"/>
      <circle cx="0" cy="45" r="42" fill="none" stroke="#FEF08A" stroke-width="1.5"/>
      <circle cx="0" cy="45" r="38" fill="#FACC15" opacity="0.4"/>
      <!-- SVL Logo on Medal -->
      <text x="0" y="52" text-anchor="middle" font-family="'Arial Black', sans-serif" font-size="22" font-weight="900" fill="#FFFFFF" stroke="#CA8A04" stroke-width="1" letter-spacing="1">
        SVL
      </text>
    </g>

    <!-- Top Right: Superior University Crest & Typography -->
    <g transform="translate(870, 155)">
      <circle cx="0" cy="-28" r="26" fill="none" stroke="#68217A" stroke-width="2.5"/>
      <circle cx="0" cy="-28" r="8" fill="#68217A"/>
      <path d="M -18,-28 L 18,-28 M 0,-46 L 0,-10 M -14,-42 L 14,-14 M -14,-14 L 14,-42" stroke="#68217A" stroke-width="2"/>
      <text x="0" y="16" text-anchor="middle" font-family="'Times New Roman', serif" font-size="16" font-weight="bold" fill="#0F172A" letter-spacing="0.5">
        SUPERIOR
      </text>
      <text x="0" y="32" text-anchor="middle" font-family="'Times New Roman', serif" font-size="15" font-weight="bold" fill="#0F172A" letter-spacing="0.5">
        UNIVERSITY
      </text>
    </g>

    <!-- Certificate Headers -->
    <g transform="translate(500, 245)" text-anchor="middle">
      <text x="0" y="0" font-family="'Times New Roman', Georgia, serif" font-size="52" font-weight="bold" fill="#0F172A" letter-spacing="4">
        CERTIFICATE
      </text>
      <text x="0" y="34" font-family="'Arial Black', sans-serif" font-size="19" font-weight="900" fill="#DC2626" letter-spacing="3.5">
        OF ACKNOWLEDGEMENT
      </text>
      <text x="0" y="70" font-family="sans-serif" font-size="17" font-weight="bold" fill="#0F172A">
        This certificate is proudly presented to
      </text>
    </g>

    <!-- Recipient: Ibrahim Tahir Sindhu with Bold Marker Style + Red Underline Banner -->
    <g transform="translate(500, 395)">
      <text x="0" y="0" text-anchor="middle" font-family="'Arial Black', 'Impact', sans-serif" font-size="46" font-weight="900" fill="#0F172A" letter-spacing="1">
        Ibrahim Tahir Sindhu
      </text>
      <!-- Double Coral Red Highlight Underline Block -->
      <rect x="-140" y="14" width="280" height="22" rx="3" fill="#EF4444" opacity="0.85" stroke="#0F172A" stroke-width="1.5"/>
      <line x1="-130" y1="25" x2="130" y2="25" stroke="#0F172A" stroke-width="1.5"/>
    </g>

    <!-- Description Text -->
    <g transform="translate(500, 480)" text-anchor="middle" font-family="sans-serif">
      <text x="0" y="0" font-size="18" font-weight="500" fill="#0F172A">
        for his/her valuable contribution as a <tspan font-weight="bold">SVL</tspan> of
      </text>
      <text x="0" y="28" font-size="19" font-weight="bold" fill="#7F1D1D">
        Department of Biological Sciences <tspan font-weight="500" fill="#0F172A">for</tspan> 2023 - 2024
      </text>
    </g>

    <!-- Bottom Right Signature -->
    <g transform="translate(800, 595)">
      <path d="M -30,-20 Q -5,-45 25,-10 T 55,-25" stroke="#000000" stroke-width="2.5" fill="none"/>
      <line x1="-80" y1="0" x2="80" y2="0" stroke="#0F172A" stroke-width="1.8"/>
      <text x="0" y="20" text-anchor="middle" font-family="sans-serif" font-size="16" font-weight="bold" fill="#0F172A">
        Dr. M. Ahmad Kahloon
      </text>
      <text x="0" y="36" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold" fill="#0F172A">
        Deputy Director
      </text>
      <text x="0" y="50" text-anchor="middle" font-family="sans-serif" font-size="11.5" fill="#475569">
        Office of Engagement &amp; Co-creation
      </text>
    </g>
  </svg>`;

  const base64Svg = typeof window !== 'undefined'
    ? window.btoa(unescape(encodeURIComponent(svg)))
    : Buffer.from(svg).toString('base64');

  return `data:image/svg+xml;base64,${base64Svg}`;
}

export function generateEnvion26AppreciationCertificateSvg(): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 700" width="1000" height="700">
    <defs>
      <linearGradient id="apprecGreenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0E7490"/>
        <stop offset="50%" stop-color="#047857"/>
        <stop offset="100%" stop-color="#064E3B"/>
      </linearGradient>
      <linearGradient id="cornerCyan" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#06B6D4"/>
        <stop offset="100%" stop-color="#0D9488"/>
      </linearGradient>
    </defs>

    <!-- Canvas -->
    <rect x="0" y="0" width="1000" height="700" fill="#FFFFFF"/>

    <!-- Dynamic Polygon Ribbon Borders (Top Left & Bottom Right) -->
    <!-- Top-Left Polygons -->
    <polygon points="0,0 260,0 120,140 0,80" fill="url(#apprecGreenGrad)"/>
    <polygon points="0,70 140,140 60,220 0,180" fill="url(#cornerCyan)" opacity="0.8"/>
    <polygon points="0,170 80,220 0,300" fill="#10B981" opacity="0.9"/>
    <polygon points="250,0 340,0 180,160 110,140" fill="#047857" opacity="0.4"/>

    <!-- Bottom-Right Polygons -->
    <polygon points="1000,700 740,700 880,560 1000,620" fill="url(#apprecGreenGrad)"/>
    <polygon points="1000,630 860,560 940,480 1000,520" fill="url(#cornerCyan)" opacity="0.8"/>
    <polygon points="1000,530 920,480 1000,400" fill="#10B981" opacity="0.9"/>

    <!-- Bottom-Left Small Accent -->
    <polygon points="0,700 90,620 0,550" fill="#22C55E"/>
    <polygon points="0,700 160,700 0,570" fill="#047857" opacity="0.6"/>

    <!-- Top Left: Superior University Crest & Typography -->
    <g transform="translate(170, 75)">
      <circle cx="0" cy="0" r="22" fill="none" stroke="#68217A" stroke-width="2.5"/>
      <circle cx="0" cy="0" r="6" fill="#68217A"/>
      <path d="M -16,0 L 16,0 M 0,-16 L 0,16 M -12,-12 L 12,12 M -12,12 L 12,-12" stroke="#68217A" stroke-width="2"/>
      <text x="35" y="-2" font-family="'Times New Roman', serif" font-size="19" font-weight="bold" fill="#68217A" letter-spacing="1">
        SUPERIOR
      </text>
      <text x="35" y="16" font-family="'Times New Roman', serif" font-size="19" font-weight="bold" fill="#68217A" letter-spacing="1">
        UNIVERSITY
      </text>
    </g>

    <!-- Top Right: Research Week AI Banner -->
    <g transform="translate(800, 75)" text-anchor="end">
      <text x="0" y="0" font-family="sans-serif" font-size="28" font-weight="900" fill="#EAB308" letter-spacing="1">
        Research<tspan font-size="18" fill="#84CC16"> Week</tspan>
      </text>
      <text x="0" y="16" font-family="sans-serif" font-size="9" font-weight="bold" fill="#334155">
        Artificial Intelligence for Sustainable Future
      </text>
      <text x="0" y="28" font-family="sans-serif" font-size="10" font-weight="bold" fill="#0F172A">
        15th - 24th April 2026
      </text>
    </g>

    <!-- Main Title -->
    <g transform="translate(500, 160)" text-anchor="middle">
      <text x="0" y="0" font-family="'Arial Black', 'Trebuchet MS', sans-serif" font-size="52" font-weight="900" fill="#0891B2" letter-spacing="3">
        CERTIFICATE
      </text>
      <text x="0" y="34" font-family="'Arial Black', sans-serif" font-size="20" font-weight="900" fill="#0F172A" letter-spacing="2">
        OF APPRECIATION
      </text>
    </g>

    <!-- 3rd Envion-26 Brand Logo & SDG Badges -->
    <g transform="translate(500, 248)">
      <g transform="translate(-130, 0)">
        <text x="-40" y="-12" font-family="'Brush Script MT', cursive" font-size="24" font-weight="bold" fill="#0891B2">3rd</text>
        <text x="-45" y="16" font-family="'Arial Black', sans-serif" font-size="44" font-weight="900" fill="#0891B2" letter-spacing="-1">3</text>
        <text x="-15" y="16" font-family="'Arial Black', sans-serif" font-size="44" font-weight="900" fill="#065F46" letter-spacing="-1">Envi</text>
        <!-- globe seedling in 'o' -->
        <circle cx="68" cy="4" r="14" fill="#10B981"/>
        <path d="M 68,-3 Q 76,-10 82,-3 Q 78,5 68,4 Z" fill="#FFFFFF"/>
        <text x="88" y="16" font-family="'Arial Black', sans-serif" font-size="44" font-weight="900" fill="#065F46" letter-spacing="-1">n-26</text>
      </g>
      <!-- SDG Badges 13, 15, 14 -->
      <g transform="translate(160, 0)">
        <!-- SDG 13 -->
        <rect x="-40" y="-18" width="34" height="34" rx="2" fill="#3F6A35"/>
        <text x="-23" y="-6" text-anchor="middle" font-family="sans-serif" font-size="7" font-weight="bold" fill="#FFFFFF">13</text>
        <circle cx="-23" cy="4" r="7" fill="#FFFFFF" opacity="0.8"/>
        <!-- SDG 15 -->
        <rect x="0" y="-18" width="34" height="34" rx="2" fill="#56C02B"/>
        <text x="17" y="-6" text-anchor="middle" font-family="sans-serif" font-size="7" font-weight="bold" fill="#FFFFFF">15</text>
        <path d="M 12,8 L 17,-2 L 22,8 Z" fill="#FFFFFF"/>
        <!-- SDG 14 -->
        <rect x="40" y="-18" width="34" height="34" rx="2" fill="#0A97D9"/>
        <text x="57" y="-6" text-anchor="middle" font-family="sans-serif" font-size="7" font-weight="bold" fill="#FFFFFF">14</text>
        <path d="M 46,6 Q 52,2 57,6 T 68,6" stroke="#FFFFFF" stroke-width="1.5" fill="none"/>
      </g>
    </g>

    <!-- Presentation Line -->
    <text x="500" y="295" text-anchor="middle" font-family="'Arial Black', sans-serif" font-size="14" font-weight="900" fill="#0F172A" letter-spacing="2">
      THIS CERTIFICATE IS PRESENTED TO
    </text>

    <!-- Recipient: Ibrahim Tahir Sindhu in Calligraphic Olive/Gold Script -->
    <g transform="translate(500, 360)">
      <text x="0" y="0" text-anchor="middle" font-family="'Brush Script MT', 'Great Vibes', 'Allura', cursive" font-size="54" font-weight="bold" fill="#A16207" letter-spacing="1">
        Ibrahim Tahir Sindhu
      </text>
      <line x1="-240" y1="12" x2="240" y2="12" stroke="#CA8A04" stroke-width="1.5"/>
    </g>

    <!-- Body Paragraph -->
    <g transform="translate(500, 415)" text-anchor="middle" font-family="sans-serif" font-size="15" fill="#1E293B">
      <text x="0" y="0">
        In recognition of outstanding efforts and dedication in organizing <tspan font-weight="bold">ENVION 26</tspan>,
      </text>
      <text x="0" y="24">
        held on <tspan font-weight="bold">April 22nd, 2026</tspan>, organized by the <tspan font-weight="bold">Department of Biological Sciences</tspan>,
      </text>
      <text x="0" y="46">
        <tspan font-weight="bold">Faculty of Sciences</tspan>. We sincerely appreciate your contribution and teamwork
      </text>
      <text x="0" y="68">
        in ensuring the success of <tspan font-weight="bold">ENVION 26</tspan>.
      </text>
    </g>

    <!-- Partner Logos (Bottom Left) -->
    <g transform="translate(180, 580)">
      <g transform="translate(-60, 0)">
        <path d="M -10,-10 Q 0,-20 10,-10 T -10,10" stroke="#059669" stroke-width="2" fill="none"/>
        <text x="16" y="-2" font-family="sans-serif" font-size="8.5" font-weight="bold" fill="#0F172A">Department of</text>
        <text x="16" y="8" font-family="sans-serif" font-size="8.5" font-weight="bold" fill="#059669">Biological Sciences</text>
      </g>
      <g transform="translate(80, 0)">
        <text x="0" y="-2" font-family="sans-serif" font-size="7.5" font-weight="bold" fill="#64748B">FACULTY OF</text>
        <text x="0" y="7" font-family="sans-serif" font-size="9" font-weight="900" fill="#7C3AED">ALLIED HEALTH</text>
        <text x="0" y="16" font-family="sans-serif" font-size="9" font-weight="900" fill="#7C3AED">SCIENCES</text>
      </g>
      <g transform="translate(195, 0)">
        <text x="0" y="8" font-family="'Arial Black', sans-serif" font-size="20" font-weight="900" fill="#EA580C" letter-spacing="1">ORIC</text>
      </g>
      <g transform="translate(275, 0)">
        <text x="0" y="8" font-family="'Arial Black', sans-serif" font-size="18" font-weight="900" fill="#059669" letter-spacing="1">ANCRD</text>
      </g>
    </g>

    <!-- Dean Signature (Bottom Right) -->
    <g transform="translate(770, 575)">
      <path d="M -35,-15 Q -5,-35 25,-10 T 55,-20" stroke="#000000" stroke-width="2.5" fill="none"/>
      <line x1="-85" y1="0" x2="85" y2="0" stroke="#0F172A" stroke-width="1.8"/>
      <text x="0" y="16" text-anchor="middle" font-family="sans-serif" font-size="13.5" font-weight="bold" fill="#0F172A">
        Prof. Dr. Muhammad Naveed Babur
      </text>
      <text x="0" y="30" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="bold" fill="#334155">
        Dean
      </text>
      <text x="0" y="44" text-anchor="middle" font-family="sans-serif" font-size="10.5" fill="#475569">
        Faculty of Allied Health Sciences/Faculty of Sciences
      </text>
    </g>
  </svg>`;

  const base64Svg = typeof window !== 'undefined'
    ? window.btoa(unescape(encodeURIComponent(svg)))
    : Buffer.from(svg).toString('base64');

  return `data:image/svg+xml;base64,${base64Svg}`;
}

export function generateEnvion26ParticipationCertificateSvg(): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 700" width="1000" height="700">
    <defs>
      <linearGradient id="partBlueGreenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0284C7"/>
        <stop offset="60%" stop-color="#0D9488"/>
        <stop offset="100%" stop-color="#059669"/>
      </linearGradient>
    </defs>

    <!-- Canvas -->
    <rect x="0" y="0" width="1000" height="700" fill="#FFFFFF"/>

    <!-- Elegant Green Outer Double Border -->
    <rect x="20" y="20" width="960" height="660" fill="none" stroke="#047857" stroke-width="2.5"/>
    <rect x="25" y="25" width="950" height="650" fill="none" stroke="#0D9488" stroke-width="0.8"/>

    <!-- Top Left Diagonal Geometric Accent Ribbons -->
    <polygon points="20,20 180,20 20,180" fill="#0D9488"/>
    <polygon points="20,90 140,20 230,20 20,230" fill="#0284C7" opacity="0.85"/>
    <polygon points="20,170 190,20 260,20 20,260" fill="#334155" opacity="0.3"/>

    <!-- Bottom Right Diagonal Geometric Accent Ribbons -->
    <polygon points="980,680 820,680 980,520" fill="#0D9488"/>
    <polygon points="980,610 860,680 770,680 980,470" fill="#0284C7" opacity="0.85"/>
    <polygon points="980,530 810,680 740,680 980,440" fill="#334155" opacity="0.3"/>

    <!-- Top Left: Superior University Crest & Typography -->
    <g transform="translate(240, 75)">
      <circle cx="0" cy="0" r="22" fill="none" stroke="#68217A" stroke-width="2.5"/>
      <circle cx="0" cy="0" r="6" fill="#68217A"/>
      <path d="M -16,0 L 16,0 M 0,-16 L 0,16 M -12,-12 L 12,12 M -12,12 L 12,-12" stroke="#68217A" stroke-width="2"/>
      <text x="35" y="-2" font-family="'Times New Roman', serif" font-size="19" font-weight="bold" fill="#68217A" letter-spacing="1">
        SUPERIOR
      </text>
      <text x="35" y="16" font-family="'Times New Roman', serif" font-size="19" font-weight="bold" fill="#68217A" letter-spacing="1">
        UNIVERSITY
      </text>
    </g>

    <!-- Top Right: Research Week AI Banner -->
    <g transform="translate(850, 75)" text-anchor="end">
      <text x="0" y="0" font-family="sans-serif" font-size="28" font-weight="900" fill="#EAB308" letter-spacing="1">
        Research<tspan font-size="18" fill="#84CC16"> Week</tspan>
      </text>
      <text x="0" y="16" font-family="sans-serif" font-size="9" font-weight="bold" fill="#334155">
        Artificial Intelligence for Sustainable Future
      </text>
      <text x="0" y="28" font-family="sans-serif" font-size="10" font-weight="bold" fill="#0F172A">
        15th - 24th April 2026
      </text>
    </g>

    <!-- Main Title -->
    <g transform="translate(500, 165)" text-anchor="middle">
      <text x="0" y="0" font-family="'Arial Black', 'Trebuchet MS', sans-serif" font-size="52" font-weight="900" fill="#1E293B" letter-spacing="3">
        CERTIFICATE
      </text>
      <text x="0" y="34" font-family="'Arial Black', sans-serif" font-size="20" font-weight="900" fill="#0F172A" letter-spacing="2">
        OF PARTICIPATION
      </text>
    </g>

    <!-- 3rd Envion-26 Brand Logo & SDG Badges -->
    <g transform="translate(500, 255)">
      <g transform="translate(-130, 0)">
        <text x="-40" y="-12" font-family="'Brush Script MT', cursive" font-size="24" font-weight="bold" fill="#0891B2">3rd</text>
        <text x="-45" y="16" font-family="'Arial Black', sans-serif" font-size="44" font-weight="900" fill="#0891B2" letter-spacing="-1">3</text>
        <text x="-15" y="16" font-family="'Arial Black', sans-serif" font-size="44" font-weight="900" fill="#065F46" letter-spacing="-1">Envi</text>
        <!-- globe seedling in 'o' -->
        <circle cx="68" cy="4" r="14" fill="#10B981"/>
        <path d="M 68,-3 Q 76,-10 82,-3 Q 78,5 68,4 Z" fill="#FFFFFF"/>
        <text x="88" y="16" font-family="'Arial Black', sans-serif" font-size="44" font-weight="900" fill="#065F46" letter-spacing="-1">n-26</text>
      </g>
      <!-- SDG Badges 13, 15, 14 -->
      <g transform="translate(160, 0)">
        <rect x="-40" y="-18" width="34" height="34" rx="2" fill="#3F6A35"/>
        <text x="-23" y="-6" text-anchor="middle" font-family="sans-serif" font-size="7" font-weight="bold" fill="#FFFFFF">13</text>
        <circle cx="-23" cy="4" r="7" fill="#FFFFFF" opacity="0.8"/>
        
        <rect x="0" y="-18" width="34" height="34" rx="2" fill="#56C02B"/>
        <text x="17" y="-6" text-anchor="middle" font-family="sans-serif" font-size="7" font-weight="bold" fill="#FFFFFF">15</text>
        <path d="M 12,8 L 17,-2 L 22,8 Z" fill="#FFFFFF"/>
        
        <rect x="40" y="-18" width="34" height="34" rx="2" fill="#0A97D9"/>
        <text x="57" y="-6" text-anchor="middle" font-family="sans-serif" font-size="7" font-weight="bold" fill="#FFFFFF">14</text>
        <path d="M 46,6 Q 52,2 57,6 T 68,6" stroke="#FFFFFF" stroke-width="1.5" fill="none"/>
      </g>
    </g>

    <!-- Presentation Line -->
    <text x="500" y="305" text-anchor="middle" font-family="sans-serif" font-size="16" font-weight="bold" fill="#0F172A">
      This certificate is proudly presented to:
    </text>

    <!-- Recipient: Ibrahim Tahir with side decorative lines -->
    <g transform="translate(500, 365)">
      <line x1="-220" y1="-8" x2="-110" y2="-8" stroke="#0284C7" stroke-width="1.5"/>
      <circle cx="-110" cy="-8" r="3" fill="#0284C7"/>
      <text x="0" y="0" text-anchor="middle" font-family="'Brush Script MT', 'Great Vibes', 'Allura', cursive" font-size="52" font-weight="bold" fill="#0284C7" letter-spacing="1">
        Ibrahim Tahir
      </text>
      <circle cx="110" cy="-8" r="3" fill="#0284C7"/>
      <line x1="110" y1="-8" x2="220" y2="-8" stroke="#0284C7" stroke-width="1.5"/>
    </g>

    <!-- Body Paragraph -->
    <g transform="translate(500, 420)" text-anchor="middle" font-family="sans-serif" font-size="15.5" fill="#1E293B">
      <text x="0" y="0">
        In recognition of your valued presence as a participant at
      </text>
      <text x="0" y="26">
        <tspan font-weight="bold">ENVION 26 on April 22nd, 2026</tspan>, organized by the <tspan font-weight="bold">Faculty of</tspan>
      </text>
      <text x="0" y="52">
        <tspan font-weight="bold">Sciences/Faculty of Allied Health Sciences</tspan>.
      </text>
    </g>

    <!-- Partner Logos (Bottom Left) -->
    <g transform="translate(180, 580)">
      <g transform="translate(-60, 0)">
        <path d="M -10,-10 Q 0,-20 10,-10 T -10,10" stroke="#059669" stroke-width="2" fill="none"/>
        <text x="16" y="-2" font-family="sans-serif" font-size="8.5" font-weight="bold" fill="#0F172A">Department of</text>
        <text x="16" y="8" font-family="sans-serif" font-size="8.5" font-weight="bold" fill="#059669">Biological Sciences</text>
      </g>
      <g transform="translate(80, 0)">
        <text x="0" y="-2" font-family="sans-serif" font-size="7.5" font-weight="bold" fill="#64748B">FACULTY OF</text>
        <text x="0" y="7" font-family="sans-serif" font-size="9" font-weight="900" fill="#7C3AED">ALLIED HEALTH</text>
        <text x="0" y="16" font-family="sans-serif" font-size="9" font-weight="900" fill="#7C3AED">SCIENCES</text>
      </g>
      <g transform="translate(195, 0)">
        <text x="0" y="8" font-family="'Arial Black', sans-serif" font-size="20" font-weight="900" fill="#EA580C" letter-spacing="1">ORIC</text>
      </g>
      <g transform="translate(275, 0)">
        <text x="0" y="8" font-family="'Arial Black', sans-serif" font-size="18" font-weight="900" fill="#059669" letter-spacing="1">ANCRD</text>
      </g>
    </g>

    <!-- Dean Signature (Bottom Right) -->
    <g transform="translate(770, 575)">
      <path d="M -35,-15 Q -5,-35 25,-10 T 55,-20" stroke="#000000" stroke-width="2.5" fill="none"/>
      <line x1="-85" y1="0" x2="85" y2="0" stroke="#0F172A" stroke-width="1.8"/>
      <text x="0" y="16" text-anchor="middle" font-family="sans-serif" font-size="13.5" font-weight="bold" fill="#0F172A">
        Prof. Dr. Muhammad Naveed Babur
      </text>
      <text x="0" y="30" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="bold" fill="#334155">
        Dean
      </text>
      <text x="0" y="44" text-anchor="middle" font-family="sans-serif" font-size="10.5" fill="#475569">
        Faculty of Allied Health Sciences/Faculty of Sciences
      </text>
    </g>
  </svg>`;

  const base64Svg = typeof window !== 'undefined'
    ? window.btoa(unescape(encodeURIComponent(svg)))
    : Buffer.from(svg).toString('base64');

  return `data:image/svg+xml;base64,${base64Svg}`;
}

export function generateEPosterBlogCertificateSvg(): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 700" width="1000" height="700">
    <defs>
      <linearGradient id="leafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#84CC16"/>
        <stop offset="100%" stop-color="#15803D"/>
      </linearGradient>
    </defs>

    <!-- Canvas Background in Soft Natural Sage Gray -->
    <rect x="0" y="0" width="1000" height="700" fill="#EBF0EC"/>

    <!-- Soft Watercolor Foliage Branches Background Elements -->
    <g opacity="0.45">
      <!-- Left side botanical leaves -->
      <g transform="translate(40, 320)">
        <path d="M 0,-180 Q 50,-100 80,0 T 30,200" stroke="#4B7A58" stroke-width="2.5" fill="none"/>
        <ellipse cx="60" cy="-140" rx="28" ry="16" transform="rotate(-30 60 -140)" fill="#65A30D" opacity="0.6"/>
        <ellipse cx="20" cy="-100" rx="26" ry="14" transform="rotate(40 20 -100)" fill="#16A34A" opacity="0.6"/>
        <ellipse cx="85" cy="-60" rx="30" ry="15" transform="rotate(-25 85 -60)" fill="#84CC16" opacity="0.6"/>
        <ellipse cx="40" cy="-20" rx="25" ry="14" transform="rotate(35 40 -20)" fill="#15803D" opacity="0.6"/>
        <ellipse cx="90" cy="30" rx="32" ry="16" transform="rotate(-35 90 30)" fill="#4ADE80" opacity="0.6"/>
        <ellipse cx="50" cy="80" rx="28" ry="15" transform="rotate(45 50 80)" fill="#16A34A" opacity="0.6"/>
        <ellipse cx="80" cy="140" rx="30" ry="16" transform="rotate(-20 80 140)" fill="#65A30D" opacity="0.6"/>
      </g>
      <g transform="translate(-20, 520)">
        <ellipse cx="80" cy="40" rx="45" ry="22" transform="rotate(-40 80 40)" fill="#84CC16" opacity="0.5"/>
        <ellipse cx="140" cy="70" rx="50" ry="25" transform="rotate(25 140 70)" fill="#15803D" opacity="0.5"/>
      </g>

      <!-- Right side botanical leaves -->
      <g transform="translate(940, 320)">
        <path d="M 0,-180 Q -50,-100 -80,0 T -30,200" stroke="#4B7A58" stroke-width="2.5" fill="none"/>
        <ellipse cx="-60" cy="-140" rx="28" ry="16" transform="rotate(30 -60 -140)" fill="#65A30D" opacity="0.6"/>
        <ellipse cx="-20" cy="-100" rx="26" ry="14" transform="rotate(-40 -20 -100)" fill="#16A34A" opacity="0.6"/>
        <ellipse cx="-85" cy="-60" rx="30" ry="15" transform="rotate(25 -85 -60)" fill="#84CC16" opacity="0.6"/>
        <ellipse cx="-40" cy="-20" rx="25" ry="14" transform="rotate(-35 -40 -20)" fill="#15803D" opacity="0.6"/>
        <ellipse cx="-90" cy="30" rx="32" ry="16" transform="rotate(35 -90 30)" fill="#4ADE80" opacity="0.6"/>
        <ellipse cx="-50" cy="80" rx="28" ry="15" transform="rotate(-45 -50 80)" fill="#16A34A" opacity="0.6"/>
        <ellipse cx="-80" cy="140" rx="30" ry="16" transform="rotate(20 -80 140)" fill="#65A30D" opacity="0.6"/>
      </g>
      <g transform="translate(980, 520)">
        <ellipse cx="-60" cy="40" rx="45" ry="22" transform="rotate(40 -60 40)" fill="#84CC16" opacity="0.5"/>
        <ellipse cx="-120" cy="70" rx="50" ry="25" transform="rotate(-25 -120 70)" fill="#15803D" opacity="0.5"/>
      </g>
    </g>

    <!-- Top Left: OEC Logo -->
    <g transform="translate(80, 55)">
      <g transform="translate(-10, 0)">
        <text x="0" y="32" font-family="'Arial Black', sans-serif" font-size="38" font-weight="900" fill="#DC2626" letter-spacing="-1">O</text>
        <text x="30" y="32" font-family="'Arial Black', sans-serif" font-size="38" font-weight="900" fill="#EA580C" letter-spacing="-1">E</text>
        <text x="58" y="32" font-family="'Arial Black', sans-serif" font-size="38" font-weight="900" fill="#EAB308" letter-spacing="-1">C</text>
      </g>
      <text x="40" y="44" text-anchor="middle" font-family="sans-serif" font-size="6.5" font-weight="bold" fill="#0F172A">
        OFFICE OF ENGAGEMENT
      </text>
      <text x="40" y="52" text-anchor="middle" font-family="sans-serif" font-size="6" font-weight="bold" fill="#0F172A">
        AND CO-CREATION
      </text>
      <text x="40" y="60" text-anchor="middle" font-family="sans-serif" font-size="5.5" fill="#475569">
        SUPERIOR UNIVERSITY
      </text>
    </g>

    <!-- Top Center: INTRA-UNIVERSITY E-POSTER & BLOG WRITTING -->
    <g transform="translate(500, 50)" text-anchor="middle">
      <text x="0" y="0" font-family="sans-serif" font-size="12" font-weight="bold" fill="#0F172A" letter-spacing="1">
        — INTRA - UNIVERSITY —
      </text>
      <g transform="translate(0, 24)">
        <text x="-25" y="0" font-family="'Arial Black', sans-serif" font-size="24" font-weight="900" fill="#064E3B" letter-spacing="0.5">
          E-POSTER
        </text>
        <!-- Leaf & Icon -->
        <circle cx="56" cy="-8" r="14" fill="#064E3B"/>
        <text x="56" y="-3" font-family="sans-serif" font-size="14" font-weight="bold" fill="#FFFFFF">&amp;</text>
        <path d="M 68,-18 Q 78,-24 82,-16 Q 78,-8 68,-14 Z" fill="#84CC16"/>
      </g>
      <text x="0" y="50" font-family="'Arial Black', sans-serif" font-size="25" font-weight="900" fill="#65A30D" letter-spacing="0.5">
        BLOG WRITTING
      </text>
    </g>

    <!-- Top Right: Superior University Crest -->
    <g transform="translate(880, 68)">
      <circle cx="-60" cy="0" r="22" fill="none" stroke="#68217A" stroke-width="2.2"/>
      <circle cx="-60" cy="0" r="6" fill="#68217A"/>
      <path d="M -76,0 L -44,0 M -60,-16 L -60,16 M -72,-12 L -48,12 M -72,12 L -48,-12" stroke="#68217A" stroke-width="1.8"/>
      <text x="-28" y="-2" font-family="'Times New Roman', serif" font-size="18" font-weight="bold" fill="#68217A" letter-spacing="0.5">
        SUPERIOR
      </text>
      <text x="-28" y="16" font-family="'Times New Roman', serif" font-size="18" font-weight="bold" fill="#68217A" letter-spacing="0.5">
        UNIVERSITY
      </text>
    </g>

    <!-- Main Title -->
    <g transform="translate(500, 195)" text-anchor="middle">
      <text x="0" y="0" font-family="'Arial Black', 'Trebuchet MS', sans-serif" font-size="44" font-weight="900" fill="#064E3B" letter-spacing="2">
        CERTIFICATE OF PARTICIPATION
      </text>
      <text x="0" y="44" font-family="'Georgia', serif" font-size="20" font-style="italic" fill="#0F172A">
        This certificate is proudly presented to
      </text>
    </g>

    <!-- Recipient: Ibrahim Tahir Sindhu in Flowing Calligraphy -->
    <g transform="translate(500, 330)">
      <text x="0" y="0" text-anchor="middle" font-family="'Brush Script MT', 'Great Vibes', 'Allura', cursive" font-size="62" font-weight="bold" fill="#0F172A">
        Ibrahim Tahir Sindhu
      </text>
      <!-- Signature Underline Bar: Dark green with Chartreuse block on right -->
      <line x1="-320" y1="18" x2="180" y2="18" stroke="#064E3B" stroke-width="4"/>
      <rect x="80" y="10" width="240" height="16" fill="#65A30D"/>
    </g>

    <!-- Body Description -->
    <g transform="translate(500, 400)" text-anchor="middle" font-family="'Georgia', serif" font-size="18" fill="#1E293B">
      <text x="0" y="0">
        In recognition of your valuable participation in the <tspan font-weight="bold" font-family="sans-serif">Intra University E- Poster &amp; Blog Writting</tspan>
      </text>
      <text x="0" y="30">
        competition organized on the occasion of <tspan font-weight="bold" font-family="sans-serif">Enviromental Day</tspan>
      </text>
    </g>

    <!-- Bottom Left Signature: Sadia Din -->
    <g transform="translate(150, 560)">
      <circle cx="10" cy="-20" r="28" fill="none" stroke="#64748B" stroke-width="1.2" opacity="0.7"/>
      <path d="M -15,-10 Q 5,-40 25,-10 T 45,-15" stroke="#0F172A" stroke-width="2" fill="none"/>
      <text x="5" y="-12" font-family="'Brush Script MT', cursive" font-size="18" fill="#0F172A">Sadia</text>
      <line x1="-70" y1="18" x2="160" y2="18" stroke="#064E3B" stroke-width="3"/>
      <text x="-70" y="42" font-family="'Arial Black', sans-serif" font-size="18" font-weight="900" fill="#0F172A">
        Sadia Din
      </text>
      <text x="-70" y="64" font-family="sans-serif" font-size="15" font-weight="500" fill="#334155">
        Advisor Sustainable Environment Society
      </text>
    </g>

    <!-- Bottom Right Badge: Sustainable Environment Society -->
    <g transform="translate(880, 615)">
      <circle cx="-50" cy="0" r="34" fill="#047857"/>
      <circle cx="-50" cy="0" r="30" fill="#064E3B"/>
      <!-- Sprouting leaves icon in circle -->
      <path d="M -56,12 C -65,-2 -45,-16 -40,-12 C -35,-8 -40,8 -56,12 Z" fill="#FFFFFF"/>
      <path d="M -54,12 C -42,4 -38,-4 -34,-2 C -30,0 -38,8 -54,12 Z" fill="#84CC16"/>
      <text x="-5" y="-6" font-family="sans-serif" font-size="12" font-weight="bold" fill="#0F172A">
        Sustainable
      </text>
      <text x="-5" y="8" font-family="sans-serif" font-size="12" font-weight="bold" fill="#0F172A">
        Environment
      </text>
      <text x="-5" y="22" font-family="sans-serif" font-size="12" font-weight="bold" fill="#0F172A">
        Society
      </text>
      <text x="-5" y="32" font-family="sans-serif" font-size="7.5" fill="#475569">
        SUPERIOR UNIVERSITY
      </text>
    </g>
  </svg>`;

  const base64Svg = typeof window !== 'undefined'
    ? window.btoa(unescape(encodeURIComponent(svg)))
    : Buffer.from(svg).toString('base64');

  return `data:image/svg+xml;base64,${base64Svg}`;
}

export function generateSportsCulturalAppreciationCertificateSvg(): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 700" width="1000" height="700">
    <defs>
      <linearGradient id="goldRibbonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FDE047"/>
        <stop offset="40%" stop-color="#CA8A04"/>
        <stop offset="80%" stop-color="#EAB308"/>
        <stop offset="100%" stop-color="#854D0E"/>
      </linearGradient>
    </defs>

    <!-- Canvas -->
    <rect x="0" y="0" width="1000" height="700" fill="#FFFFFF"/>

    <!-- Navy Outer Frame -->
    <rect x="0" y="0" width="1000" height="700" fill="none" stroke="#0A192F" stroke-width="28"/>

    <!-- Corner Geometric Luxury Gold Ribbon Frames (Left & Right) -->
    <!-- Left Bottom Gold Geometric Interlock -->
    <g transform="translate(14, 686)">
      <polygon points="0,0 0,-180 60,-120 60,-50 170,-50 120,0" fill="#0A192F"/>
      <polygon points="0,-160 0,-260 140,-120 140,-60 60,-60 60,-100" fill="url(#goldRibbonGrad)"/>
      <polygon points="0,-60 0,0 80,0 160,-80 120,-80" fill="url(#goldRibbonGrad)"/>
      <polygon points="60,-120 140,-120 200,-180 140,-180" fill="#0A192F"/>
      <polygon points="120,-60 180,-120 220,-120 160,-60" fill="url(#goldRibbonGrad)"/>
    </g>

    <!-- Right Bottom Gold Geometric Interlock -->
    <g transform="translate(986, 686) scale(-1, 1)">
      <polygon points="0,0 0,-180 60,-120 60,-50 170,-50 120,0" fill="#0A192F"/>
      <polygon points="0,-160 0,-260 140,-120 140,-60 60,-60 60,-100" fill="url(#goldRibbonGrad)"/>
      <polygon points="0,-60 0,0 80,0 160,-80 120,-80" fill="url(#goldRibbonGrad)"/>
      <polygon points="60,-120 140,-120 200,-180 140,-180" fill="#0A192F"/>
      <polygon points="120,-60 180,-120 220,-120 160,-60" fill="url(#goldRibbonGrad)"/>
    </g>

    <!-- Top Left: Superior University Crest & Typography -->
    <g transform="translate(75, 75)">
      <circle cx="0" cy="0" r="24" fill="none" stroke="#68217A" stroke-width="2.5"/>
      <circle cx="0" cy="0" r="6" fill="#68217A"/>
      <path d="M -18,0 L 18,0 M 0,-18 L 0,18 M -13,-13 L 13,13 M -13,13 L 13,-13" stroke="#68217A" stroke-width="2"/>
      <text x="36" y="-2" font-family="'Times New Roman', serif" font-size="19" font-weight="bold" fill="#68217A" letter-spacing="1">
        SUPERIOR
      </text>
      <text x="36" y="16" font-family="'Times New Roman', serif" font-size="19" font-weight="bold" fill="#68217A" letter-spacing="1">
        UNIVERSITY
      </text>
    </g>

    <!-- Top Right: Department of Biological Sciences with DNA double helix logo -->
    <g transform="translate(860, 75)">
      <g transform="translate(-75, 0)">
        <path d="M -12,-15 Q -4,-25 4,-15 T -12,15 T 4,25" stroke="#059669" stroke-width="2.5" fill="none"/>
        <circle cx="-4" cy="-15" r="2.5" fill="#0284C7"/>
        <circle cx="2" cy="0" r="2.5" fill="#0284C7"/>
        <circle cx="-4" cy="15" r="2.5" fill="#0284C7"/>
        <text x="18" y="-2" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#0F172A">
          Department of
        </text>
        <text x="18" y="10" font-family="sans-serif" font-size="11" font-weight="bold" fill="#059669">
          Biological Sciences
        </text>
        <text x="18" y="20" font-family="sans-serif" font-size="7.5" fill="#64748B">
          Superior University
        </text>
      </g>
    </g>

    <!-- Main Title -->
    <g transform="translate(500, 160)" text-anchor="middle">
      <text x="0" y="0" font-family="'Times New Roman', Georgia, serif" font-size="64" font-weight="bold" fill="#0A192F" letter-spacing="6">
        CERTIFICATE
      </text>
      <text x="0" y="60" font-family="'Brush Script MT', 'Great Vibes', 'Allura', cursive" font-size="54" font-style="italic" fill="#0A192F">
        Of Appreciation
      </text>
      <text x="0" y="105" font-family="'Georgia', serif" font-size="19" fill="#0F172A">
        This certificate is proudly presented to
      </text>
    </g>

    <!-- Recipient: Ibrahim Tahir Sindhu with horizontal rule -->
    <g transform="translate(500, 335)" text-anchor="middle">
      <text x="0" y="0" font-family="'Times New Roman', Georgia, serif" font-size="46" font-weight="bold" font-style="italic" fill="#0A192F" letter-spacing="1">
        Ibrahim Tahir Sindhu
      </text>
      <line x1="-350" y1="20" x2="350" y2="20" stroke="#0A192F" stroke-width="2"/>
    </g>

    <!-- Description Paragraph -->
    <g transform="translate(500, 395)" text-anchor="middle" font-family="'Georgia', serif" font-size="16.5" fill="#1E293B">
      <text x="0" y="0">
        In recognition of the student's active participation and valuable support to the
      </text>
      <text x="0" y="26">
        Department of Biological Sciences during the <tspan font-weight="bold" font-family="sans-serif">Sports and Cultural Festival</tspan>
      </text>
      <text x="0" y="52">
        organized by Superior University, Lahore, Pakistan, held on <tspan font-weight="bold" font-family="sans-serif">14th February 2026</tspan>,
      </text>
      <text x="0" y="78">
        honoring their dedication and promoting continued excellence.
      </text>
    </g>

    <!-- Bottom Center Signature: Prof. Dr. Uqba Mehmood -->
    <g transform="translate(500, 560)" text-anchor="middle">
      <path d="M -30,-15 Q -10,-45 20,-10 T 50,-20" stroke="#000000" stroke-width="2" fill="none"/>
      <text x="0" y="-12" font-family="'Brush Script MT', cursive" font-size="28" fill="#0F172A">Uqba</text>
      <line x1="-110" y1="12" x2="110" y2="12" stroke="#0F172A" stroke-width="1.5"/>
      <text x="0" y="32" font-family="sans-serif" font-size="16" font-weight="bold" fill="#0F172A">
        Prof. Dr. Uqba Mehmood
      </text>
      <text x="0" y="50" font-family="sans-serif" font-size="14" font-weight="bold" fill="#0F172A">
        HOD
      </text>
      <text x="0" y="68" font-family="sans-serif" font-size="14" fill="#334155">
        Department of Biological Sciences
      </text>
    </g>
  </svg>`;

  const base64Svg = typeof window !== 'undefined'
    ? window.btoa(unescape(encodeURIComponent(svg)))
    : Buffer.from(svg).toString('base64');

  return `data:image/svg+xml;base64,${base64Svg}`;
}

export function generateIpcPaintingCertificateSvg(): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 700" width="1000" height="700">
    <defs>
      <linearGradient id="ipcBg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FCFCFA"/>
        <stop offset="100%" stop-color="#F7F5F0"/>
      </linearGradient>
      <linearGradient id="paintSplash" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#9333EA"/>
        <stop offset="40%" stop-color="#DB2777"/>
        <stop offset="80%" stop-color="#06B6D4"/>
        <stop offset="100%" stop-color="#10B981"/>
      </linearGradient>
    </defs>

    <!-- Canvas -->
    <rect x="0" y="0" width="1000" height="700" fill="url(#ipcBg)"/>

    <!-- Dynamic Colorful Paint Splashes & Strokes on Right Side -->
    <g transform="translate(850, 360)">
      <!-- Magenta / Crimson Swoosh -->
      <path d="M -160,-240 C -80,-260 40,-180 80,-80 C 130,50 140,240 20,340 C 60,260 80,80 30,-30 C -20,-140 -90,-210 -160,-240 Z" fill="#9D174D" opacity="0.85"/>
      <path d="M -130,-220 C -60,-230 50,-150 90,-50 C 120,40 120,180 40,280 C 70,200 80,60 40,-20 C 0,-100 -60,-170 -130,-220 Z" fill="#BE185D" opacity="0.9"/>
      
      <!-- Cyan / Teal Splash Swirl -->
      <path d="M -180,-100 C -120,-110 -30,-40 20,60 C 60,140 70,260 -20,330 C 20,270 40,150 0,80 C -30,20 -100,-40 -180,-100 Z" fill="#0891B2" opacity="0.8"/>
      
      <!-- Emerald / Green Swoosh & Splatters -->
      <path d="M 0,-280 C 50,-260 120,-160 130,-40 C 140,60 130,200 90,320 C 110,210 120,70 100,-20 C 80,-120 30,-220 0,-280 Z" fill="#059669" opacity="0.85"/>

      <!-- Droplet splatters -->
      <circle cx="-140" cy="-60" r="14" fill="#06B6D4"/>
      <circle cx="-160" cy="-40" r="6" fill="#06B6D4"/>
      <circle cx="-110" cy="-30" r="4" fill="#06B6D4"/>
      <circle cx="-170" cy="-140" r="18" fill="#DB2777"/>
      <circle cx="-135" cy="-170" r="8" fill="#DB2777"/>
      <circle cx="20" cy="-210" r="22" fill="#10B981"/>
      <circle cx="45" cy="-185" r="7" fill="#10B981"/>
      <circle cx="-100" cy="80" r="12" fill="#0284C7"/>
      <circle cx="-70" cy="110" r="6" fill="#0284C7"/>
      <circle cx="-120" cy="140" r="4" fill="#0284C7"/>
    </g>

    <!-- Top Header: INTERNATIONAL PAINTING COMPETITION -->
    <g transform="translate(500, 85)" text-anchor="middle">
      <text x="0" y="0" font-family="'Times New Roman', serif" font-size="30" font-weight="bold" fill="#1E293B" letter-spacing="14">
        I N T E R N A T I O N A L
      </text>
      <text x="0" y="44" font-family="'Times New Roman', serif" font-size="28" font-weight="bold" fill="#1E293B" letter-spacing="11">
        P A I N T I N G   C O M P E T I T I O N
      </text>
    </g>

    <!-- Center IPC Emblem -->
    <g transform="translate(500, 240)">
      <!-- Outer colored swirl rings -->
      <circle cx="0" cy="0" r="78" fill="none" stroke="#67E8F9" stroke-width="2" stroke-dasharray="6,4"/>
      <circle cx="0" cy="0" r="74" fill="none" stroke="#F472B6" stroke-width="3" opacity="0.6"/>
      <circle cx="0" cy="0" r="68" fill="none" stroke="#38BDF8" stroke-width="2" opacity="0.8"/>
      
      <!-- Ring with text -->
      <circle cx="0" cy="0" r="62" fill="#E2E8F0" stroke="#0F172A" stroke-width="1.2"/>
      <circle cx="0" cy="0" r="48" fill="#B91C1C"/>
      
      <!-- Inner text IPC -->
      <text x="0" y="16" text-anchor="middle" font-family="'Times New Roman', serif" font-size="44" font-weight="bold" font-style="italic" fill="#FFFFFF">
        iPC
      </text>
      
      <!-- Circular curved text indicator around emblem -->
      <text x="0" y="-52" text-anchor="middle" font-family="sans-serif" font-size="6" font-weight="bold" fill="#1E293B" letter-spacing="4">
        INTERNATIONAL
      </text>
      <text x="0" y="58" text-anchor="middle" font-family="sans-serif" font-size="6" font-weight="bold" fill="#1E293B" letter-spacing="4">
        COMPETITION
      </text>
    </g>

    <!-- Ornate Scroll Filigree (Top of Certificate) -->
    <g transform="translate(500, 360)" stroke="#64748B" fill="none" stroke-width="1.5">
      <path d="M -180,0 Q -120,-18 -60,0 Q 0,-20 60,0 Q 120,-18 180,0"/>
      <path d="M -140,-6 Q -80,-24 -20,-6 Q 0,-18 20,-6 Q 80,-24 140,-6"/>
      <circle cx="-160" cy="-6" r="3" fill="#64748B"/>
      <circle cx="-80" cy="-12" r="3" fill="#64748B"/>
      <circle cx="0" cy="-14" r="4" fill="#64748B"/>
      <circle cx="80" cy="-12" r="3" fill="#64748B"/>
      <circle cx="160" cy="-6" r="3" fill="#64748B"/>
    </g>

    <!-- Main Word: CERTIFICATE -->
    <g transform="translate(500, 420)" text-anchor="middle">
      <text x="0" y="0" font-family="'Times New Roman', Georgia, serif" font-size="52" font-weight="bold" fill="#0F172A" letter-spacing="10">
        ··· CERTIFICATE ···
      </text>
    </g>

    <!-- Ornate Scroll Filigree (Bottom of Certificate) -->
    <g transform="translate(500, 445)" stroke="#64748B" fill="none" stroke-width="1.5">
      <path d="M -180,0 Q -120,18 -60,0 Q 0,20 60,0 Q 120,18 180,0"/>
      <circle cx="-160" cy="6" r="3" fill="#64748B"/>
      <circle cx="-80" cy="12" r="3" fill="#64748B"/>
      <circle cx="0" cy="14" r="4" fill="#64748B"/>
      <circle cx="80" cy="12" r="3" fill="#64748B"/>
      <circle cx="160" cy="6" r="3" fill="#64748B"/>
    </g>

    <!-- Subtitle: OF ACHIEVEMENT -->
    <g transform="translate(500, 485)" text-anchor="middle">
      <text x="0" y="0" font-family="'Times New Roman', serif" font-size="20" font-weight="bold" fill="#1E293B" letter-spacing="4">
        OF ACHIEVEMENT
      </text>
      <text x="0" y="24" font-family="sans-serif" font-size="14" fill="#475569" letter-spacing="2">
        THIS CERTIFICATE IS PROUDLY PRESENTED TO
      </text>
      <!-- Recipient name -->
      <text x="0" y="65" font-family="'Brush Script MT', 'Great Vibes', cursive" font-size="36" font-weight="bold" fill="#0F172A">
        Ibrahim Tahir Sindhu
      </text>
      <line x1="-280" y1="75" x2="280" y2="75" stroke="#94A3B8" stroke-width="1"/>
    </g>

    <!-- Bottom Left: Sponsored By Brunik & BLESSO -->
    <g transform="translate(80, 620)">
      <text x="70" y="-18" font-family="sans-serif" font-size="11" font-style="italic" font-weight="bold" fill="#334155">
        Sponsored By :
      </text>
      
      <!-- Brunik Chocolate Bar Logo -->
      <g transform="translate(10, 0)">
        <polygon points="-40,10 -15,-8 15,12 -10,30" fill="#451A03"/>
        <text x="-48" y="-12" font-family="sans-serif" font-size="7.5" font-style="italic" fill="#0F172A">An Amorous Bite</text>
        <text x="25" y="16" font-family="'Arial Black', sans-serif" font-size="26" font-weight="900" fill="#3B1C0B" letter-spacing="0.5">
          Brunik
        </text>
        <text x="25" y="27" font-family="sans-serif" font-size="7" font-weight="bold" fill="#78350F">
          Fruits &amp; Nuts Milk Chocolate
        </text>
      </g>

      <!-- Blesso Logo -->
      <g transform="translate(230, 16)">
        <text x="0" y="0" font-family="'Trebuchet MS', 'Arial Black', sans-serif" font-size="34" font-weight="900" fill="#E11D48" letter-spacing="2">
          BLESSO
        </text>
        <rect x="74" y="-8" width="10" height="10" fill="none" stroke="#E11D48" stroke-width="1"/>
      </g>
    </g>

    <!-- Bottom Right: Director Signature & IPC Stamp -->
    <g transform="translate(770, 615)">
      <!-- Official Stamp -->
      <g transform="translate(0, -35)">
        <circle cx="0" cy="0" r="42" fill="none" stroke="#818CF8" stroke-width="1.8" opacity="0.6"/>
        <circle cx="0" cy="0" r="38" fill="none" stroke="#818CF8" stroke-width="0.8" stroke-dasharray="3,2" opacity="0.6"/>
        <text x="0" y="8" text-anchor="middle" font-family="'Times New Roman', serif" font-size="28" font-weight="bold" font-style="italic" fill="#818CF8" opacity="0.6">
          IPC
        </text>
      </g>

      <!-- Signature Line & DIRECTOR text -->
      <path d="M -60,-20 Q -20,-50 15,-15 T 45,-30" stroke="#0F172A" stroke-width="2" fill="none"/>
      <line x1="-80" y1="0" x2="80" y2="0" stroke="#64748B" stroke-width="1.2"/>
      <text x="0" y="18" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="bold" fill="#0F172A" letter-spacing="2">
        DIRECTOR
      </text>
    </g>
  </svg>`;

  const base64Svg = typeof window !== 'undefined'
    ? window.btoa(unescape(encodeURIComponent(svg)))
    : Buffer.from(svg).toString('base64');

  return `data:image/svg+xml;base64,${base64Svg}`;
}

export function generateMgBioWebinarCertificateSvg(): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 700" width="1000" height="700">
    <!-- Clean Crisp Canvas -->
    <rect x="0" y="0" width="1000" height="700" fill="#FFFFFF"/>

    <!-- Navy Outer & Inner Double Frame -->
    <rect x="35" y="35" width="930" height="630" fill="none" stroke="#0A192F" stroke-width="8"/>
    <rect x="45" y="45" width="910" height="610" fill="none" stroke="#0A192F" stroke-width="1.5"/>

    <!-- Top Center: MGBio Logo & Typography -->
    <g transform="translate(500, 95)" text-anchor="middle">
      <!-- Stylized DNA Helix / Swirl Flame -->
      <g transform="translate(-80, -25)">
        <path d="M 0,-15 C 10,-5 10,15 0,25 C 15,15 15,-5 0,-15 Z" fill="#DC2626"/>
        <path d="M -6,-10 C 6,-2 6,12 -6,20 C 6,10 6,-2 -6,-10 Z" fill="#0284C7"/>
        <path d="M -12,-5 C 2,2 2,10 -12,15 C 0,8 0,0 -12,-5 Z" fill="#059669"/>
      </g>
      <text x="-5" y="5" text-anchor="start" font-family="'Arial Black', sans-serif" font-size="26" font-weight="900" fill="#0F172A">
        MGBio
      </text>
      <text x="-5" y="18" text-anchor="start" font-family="sans-serif" font-size="9" font-weight="bold" fill="#64748B">
        A Tech-Bio Company
      </text>
    </g>

    <!-- Main Title: Certificate of Participation -->
    <g transform="translate(500, 205)" text-anchor="middle">
      <text x="0" y="0" font-family="'Trebuchet MS', 'Arial Black', sans-serif" font-size="44" font-weight="900" fill="#DC2626" letter-spacing="0.5">
        Certificate of Participation
      </text>
      <text x="0" y="42" font-family="sans-serif" font-size="18" fill="#334155">
        This e-certificate is awarded to
      </text>
    </g>

    <!-- Recipient Name: Mr Ibrahim Tahir Sindhu -->
    <g transform="translate(500, 335)" text-anchor="middle">
      <text x="0" y="0" font-family="'Arial Black', sans-serif" font-size="46" font-weight="900" fill="#15803D" letter-spacing="0.5">
        Mr Ibrahim Tahir Sindhu
      </text>
    </g>

    <!-- Description Paragraph -->
    <g transform="translate(500, 400)" text-anchor="middle" font-family="sans-serif" font-size="17" fill="#0F172A">
      <text x="0" y="0">
        for attending the one-hour online webinar on <tspan font-weight="bold">“From Data to Manuscript:</tspan>
      </text>
      <text x="0" y="28">
        <tspan font-weight="bold">Navigating the Research Publication Journey”</tspan> organized by
      </text>
      <text x="0" y="56">
        <tspan font-weight="bold">MGBio: A Tech-Bio Company</tspan>, on <tspan font-weight="bold">22nd July, 2026</tspan>.
      </text>
    </g>

    <!-- Signatures and Verification Section -->
    <g transform="translate(85, 565)">
      <!-- Left: QR Code & Verification ID -->
      <g transform="translate(0, 0)">
        <!-- QR Pattern Graphic -->
        <rect x="0" y="-30" width="55" height="55" fill="#FFFFFF" stroke="#0F172A" stroke-width="2"/>
        <rect x="6" y="-24" width="16" height="16" fill="#0F172A"/>
        <rect x="9" y="-21" width="10" height="10" fill="#FFFFFF"/>
        <rect x="33" y="-24" width="16" height="16" fill="#0F172A"/>
        <rect x="36" y="-21" width="10" height="10" fill="#FFFFFF"/>
        <rect x="6" y="3" width="16" height="16" fill="#0F172A"/>
        <rect x="9" y="6" width="10" height="10" fill="#FFFFFF"/>
        <rect x="26" y="-12" width="6" height="18" fill="#0F172A"/>
        <rect x="34" y="5" width="14" height="14" fill="#0F172A"/>
        
        <text x="68" y="-10" font-family="sans-serif" font-size="12" font-weight="bold" fill="#DC2626">
          Verification ID:
        </text>
        <text x="68" y="10" font-family="sans-serif" font-size="13" font-weight="bold" fill="#15803D">
          FDTMWEB479
        </text>
      </g>

      <!-- Center-Right: Mr. Muhammad Ammar -->
      <g transform="translate(480, 0)" text-anchor="middle">
        <path d="M -40,-15 Q -10,-45 20,-10 T 50,-15" stroke="#000000" stroke-width="2" fill="none"/>
        <line x1="-90" y1="5" x2="90" y2="5" stroke="#0F172A" stroke-width="1.2"/>
        <text x="0" y="24" font-family="sans-serif" font-size="15" font-weight="bold" fill="#0F172A">
          Mr. Muhammad Ammar
        </text>
        <text x="0" y="42" font-family="sans-serif" font-size="12.5" fill="#475569">
          Managing Director, MGBio
        </text>
      </g>

      <!-- Right: Prof. Dr. Amjad Ali -->
      <g transform="translate(710, 0)" text-anchor="middle">
        <path d="M -35,-20 Q 5,-40 25,-15 T 45,-25" stroke="#000000" stroke-width="2" fill="none"/>
        <line x1="-80" y1="5" x2="80" y2="5" stroke="#0F172A" stroke-width="1.2"/>
        <text x="0" y="24" font-family="sans-serif" font-size="15" font-weight="bold" fill="#0F172A">
          Prof. Dr. Amjad Ali
        </text>
        <text x="0" y="42" font-family="sans-serif" font-size="12.5" fill="#475569">
          Founder/CEO, MGBio
        </text>
      </g>
    </g>

    <!-- Bottom Navy Footer Banner -->
    <rect x="35" y="635" width="930" height="30" fill="#0A192F"/>
    <text x="940" y="655" text-anchor="end" font-family="sans-serif" font-size="12" fill="#E2E8F0">
      For more info: www.mgbio.tech
    </text>
  </svg>`;

  const base64Svg = typeof window !== 'undefined'
    ? window.btoa(unescape(encodeURIComponent(svg)))
    : Buffer.from(svg).toString('base64');

  return `data:image/svg+xml;base64,${base64Svg}`;
}

export function generateHealthNexusBestInternCertificateSvg(): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 950" width="700" height="950">
    <defs>
      <linearGradient id="hnBg" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#082F24"/>
        <stop offset="25%" stop-color="#0B1B32"/>
        <stop offset="75%" stop-color="#081426"/>
        <stop offset="100%" stop-color="#030A14"/>
      </linearGradient>
      <linearGradient id="hnGold" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FEF08A"/>
        <stop offset="50%" stop-color="#D97706"/>
        <stop offset="100%" stop-color="#F59E0B"/>
      </linearGradient>
      <linearGradient id="hnRibbon" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#0F284E"/>
        <stop offset="50%" stop-color="#1E3A8A"/>
        <stop offset="100%" stop-color="#0F284E"/>
      </linearGradient>
      <clipPath id="avatarClip">
        <circle cx="350" cy="380" r="140"/>
      </clipPath>
    </defs>

    <!-- Deep Midnight Green-Navy Background -->
    <rect x="0" y="0" width="700" height="950" fill="url(#hnBg)"/>

    <!-- Green Botanical Foliage in Top Corners -->
    <!-- Top Left Leaves -->
    <g transform="translate(30, 20)">
      <path d="M 0,0 Q 50,40 100,20 Q 80,80 120,100" stroke="#15803D" stroke-width="3" fill="none" opacity="0.6"/>
      <ellipse cx="40" cy="15" rx="22" ry="11" transform="rotate(-30 40 15)" fill="#16A34A" opacity="0.75"/>
      <ellipse cx="80" cy="25" rx="24" ry="12" transform="rotate(25 80 25)" fill="#22C55E" opacity="0.75"/>
      <ellipse cx="70" cy="65" rx="26" ry="13" transform="rotate(-40 70 65)" fill="#15803D" opacity="0.75"/>
      <ellipse cx="110" cy="85" rx="24" ry="12" transform="rotate(35 110 85)" fill="#4ADE80" opacity="0.75"/>
    </g>

    <!-- Top Right Leaves -->
    <g transform="translate(670, 20) scale(-1, 1)">
      <path d="M 0,0 Q 50,40 100,20 Q 80,80 120,100" stroke="#15803D" stroke-width="3" fill="none" opacity="0.6"/>
      <ellipse cx="40" cy="15" rx="22" ry="11" transform="rotate(-30 40 15)" fill="#16A34A" opacity="0.75"/>
      <ellipse cx="80" cy="25" rx="24" ry="12" transform="rotate(25 80 25)" fill="#22C55E" opacity="0.75"/>
      <ellipse cx="70" cy="65" rx="26" ry="13" transform="rotate(-40 70 65)" fill="#15803D" opacity="0.75"/>
      <ellipse cx="110" cy="85" rx="24" ry="12" transform="rotate(35 110 85)" fill="#4ADE80" opacity="0.75"/>
    </g>

    <!-- Top Logos Bar -->
    <!-- Health Nexus (Left) -->
    <g transform="translate(260, 65)" text-anchor="middle">
      <rect x="-18" y="-22" width="36" height="36" rx="4" fill="#0A2540"/>
      <!-- Medical cross in green with serpent caduceus -->
      <path d="M -12,-5 L -5,-5 L -5,-12 L 5,-12 L 5,-5 L 12,-5 L 12,5 L 5,5 L 5,12 L -5,12 L -5,5 L -12,5 Z" fill="#15803D"/>
      <circle cx="0" cy="0" r="3" fill="#F59E0B"/>
      <text x="0" y="26" font-family="'Times New Roman', serif" font-size="12" font-weight="bold" fill="#E2E8F0" letter-spacing="1">
        HEALTH NEXUS
      </text>
    </g>

    <!-- Thrive 360 (Right) -->
    <g transform="translate(440, 65)" text-anchor="middle">
      <circle cx="0" cy="-4" r="18" fill="none" stroke="#0F766E" stroke-width="2.5"/>
      <circle cx="0" cy="-10" r="4" fill="#0F766E"/>
      <path d="M -8,4 Q 0,-4 8,4 Q 4,8 0,6 Q -4,8 -8,4 Z" fill="#10B981"/>
      <text x="0" y="24" font-family="'Trebuchet MS', sans-serif" font-size="14" font-weight="bold" fill="#E2E8F0" letter-spacing="1">
        THRIVE
      </text>
      <text x="0" y="36" font-family="sans-serif" font-size="11" font-weight="bold" fill="#2DD4BF">
        360°
      </text>
    </g>

    <!-- Header: Proud to Announce / OUR BEST INTERN -->
    <g transform="translate(350, 150)" text-anchor="middle">
      <line x1="-160" y1="-8" x2="-80" y2="-8" stroke="#10B981" stroke-width="1"/>
      <text x="0" y="0" font-family="'Brush Script MT', 'Great Vibes', cursive" font-size="34" fill="#A7F3D0">
        Proud to Announce
      </text>
      <line x1="80" y1="-8" x2="160" y2="-8" stroke="#10B981" stroke-width="1"/>

      <text x="0" y="46" font-family="'Times New Roman', Georgia, serif" font-size="44" font-weight="bold" fill="#FFFFFF" letter-spacing="3">
        OUR BEST INTERN
      </text>

      <!-- Little Gold Star -->
      <polygon points="0,58 3,66 11,66 5,71 7,79 0,74 -7,79 -5,71 -11,66 -3,66" fill="#F59E0B"/>
    </g>

    <!-- Center Laurel Wreath & Frame for Ibrahim Tahir Sindhu -->
    <g transform="translate(350, 390)">
      <!-- Left Laurel Leaves -->
      <g transform="translate(-155, 0)">
        <path d="M 0,-140 C -40,-60 -40,60 0,140" stroke="#CA8A04" stroke-width="2.5" fill="none"/>
        <ellipse cx="-15" cy="-120" rx="14" ry="7" transform="rotate(-30 -15 -120)" fill="url(#hnGold)"/>
        <ellipse cx="-28" cy="-80" rx="16" ry="8" transform="rotate(-20 -28 -80)" fill="url(#hnGold)"/>
        <ellipse cx="-32" cy="-40" rx="18" ry="9" transform="rotate(-10 -32 -40)" fill="url(#hnGold)"/>
        <ellipse cx="-35" cy="0" rx="18" ry="9" transform="rotate(0 -35 0)" fill="url(#hnGold)"/>
        <ellipse cx="-32" cy="40" rx="18" ry="9" transform="rotate(10 -32 40)" fill="url(#hnGold)"/>
        <ellipse cx="-28" cy="80" rx="16" ry="8" transform="rotate(20 -28 80)" fill="url(#hnGold)"/>
        <ellipse cx="-15" cy="120" rx="14" ry="7" transform="rotate(30 -15 120)" fill="url(#hnGold)"/>
      </g>

      <!-- Right Laurel Leaves -->
      <g transform="translate(155, 0) scale(-1, 1)">
        <path d="M 0,-140 C -40,-60 -40,60 0,140" stroke="#CA8A04" stroke-width="2.5" fill="none"/>
        <ellipse cx="-15" cy="-120" rx="14" ry="7" transform="rotate(-30 -15 -120)" fill="url(#hnGold)"/>
        <ellipse cx="-28" cy="-80" rx="16" ry="8" transform="rotate(-20 -28 -80)" fill="url(#hnGold)"/>
        <ellipse cx="-32" cy="-40" rx="18" ry="9" transform="rotate(-10 -32 -40)" fill="url(#hnGold)"/>
        <ellipse cx="-35" cy="0" rx="18" ry="9" transform="rotate(0 -35 0)" fill="url(#hnGold)"/>
        <ellipse cx="-32" cy="40" rx="18" ry="9" transform="rotate(10 -32 40)" fill="url(#hnGold)"/>
        <ellipse cx="-28" cy="80" rx="16" ry="8" transform="rotate(20 -28 80)" fill="url(#hnGold)"/>
        <ellipse cx="-15" cy="120" rx="14" ry="7" transform="rotate(30 -15 120)" fill="url(#hnGold)"/>
      </g>

      <!-- Circular Avatar Frame & Artwork -->
      <circle cx="0" cy="0" r="148" fill="none" stroke="url(#hnGold)" stroke-width="6"/>
      <circle cx="0" cy="0" r="142" fill="#E2E8F0"/>
      
      <!-- Ibrahim Illustration / Avatar Portrait with Glasses & Black T-Shirt -->
      <g clip-path="url(#avatarClip)" transform="translate(-350, -380)">
        <rect x="200" y="230" width="300" height="300" fill="#E2E8F0"/>
        
        <!-- Shoulders / Black Shirt -->
        <path d="M 230,480 C 250,420 300,410 350,410 C 400,410 450,420 470,480 Z" fill="#18181B"/>
        
        <!-- Give Rescue / Joy Planet graphic on shirt -->
        <circle cx="330" cy="445" r="16" fill="#38BDF8"/>
        <path d="M 324,440 Q 336,442 338,450" stroke="#16A34A" stroke-width="2" fill="none"/>
        <text x="350" y="440" font-family="sans-serif" font-size="9" font-weight="bold" fill="#FACC15">Give</text>
        <text x="350" y="450" font-family="sans-serif" font-size="8" font-weight="bold" fill="#22C55E">RESCUE</text>
        
        <!-- Neck -->
        <rect x="330" y="375" width="40" height="40" fill="#D97706" opacity="0.3"/>
        <path d="M 330,375 Q 350,395 370,375" fill="#D97706" opacity="0.4"/>
        
        <!-- Head / Face -->
        <ellipse cx="350" cy="335" rx="46" ry="52" fill="#FBBF24" opacity="0.3"/>
        <ellipse cx="350" cy="335" rx="45" ry="50" fill="#FDE68A"/>
        
        <!-- Hair & Beard -->
        <path d="M 305,320 C 300,280 320,270 350,270 C 380,270 400,280 395,320 C 380,285 320,285 305,320 Z" fill="#1C1917"/>
        <path d="M 312,330 C 310,380 330,395 350,395 C 370,395 390,380 388,330 C 380,375 320,375 312,330 Z" fill="#292524"/>
        
        <!-- Eyeglasses with Black Frames -->
        <rect x="318" y="322" width="26" height="18" rx="4" fill="none" stroke="#09090B" stroke-width="3"/>
        <rect x="356" y="322" width="26" height="18" rx="4" fill="none" stroke="#09090B" stroke-width="3"/>
        <line x1="344" y1="328" x2="356" y2="328" stroke="#09090B" stroke-width="3"/>
        
        <!-- Eyes & Smile -->
        <circle cx="331" cy="331" r="3" fill="#18181B"/>
        <circle cx="369" cy="331" r="3" fill="#18181B"/>
        <path d="M 342,358 Q 350,364 358,358" stroke="#18181B" stroke-width="2" fill="none"/>
      </g>
    </g>

    <!-- Ribbon Banner: IBRAHIM TAHIR SINDHU -->
    <g transform="translate(350, 560)">
      <!-- Ribbon Tails -->
      <polygon points="-240,0 -260,-22 -230,-22 -240,0 -230,22 -260,22" fill="#0C2340"/>
      <polygon points="240,0 260,-22 230,-22 240,0 230,22 260,22" fill="#0C2340"/>
      
      <!-- Central Banner -->
      <path d="M -230,-22 L 230,-22 Q 240,0 230,22 L -230,22 Q -240,0 -230,-22 Z" fill="url(#hnRibbon)" stroke="#F59E0B" stroke-width="2"/>
      
      <text x="0" y="7" text-anchor="middle" font-family="'Arial Black', sans-serif" font-size="20" font-weight="900" fill="#FEF08A" letter-spacing="1.5">
        ★ IBRAHIM TAHIR SINDHU ★
      </text>
    </g>

    <!-- Side Line Art (Brain with Heart & Heart with Leaf) -->
    <!-- Left: Brain with Heart -->
    <g transform="translate(85, 660)" stroke="#10B981" stroke-width="1.8" fill="none" opacity="0.8">
      <path d="M -15,15 C -25,0 -25,-25 0,-25 C 25,-25 25,0 15,15"/>
      <path d="M -10,-10 C -15,-5 -15,5 -5,10 C 5,5 5,-5 0,-10"/>
      <path d="M -4,0 Q 0,-6 4,0 Q 0,6 -4,0 Z" fill="#10B981"/>
    </g>

    <!-- Right: Heart with Leaf -->
    <g transform="translate(615, 660)" stroke="#10B981" stroke-width="1.8" fill="none" opacity="0.8">
      <path d="M 0,15 C -15,0 -20,-15 -10,-20 C 0,-20 0,-10 0,0 C 0,-10 0,-20 10,-20 C 20,-15 15,0 0,15 Z"/>
      <path d="M 5,-5 Q 15,-15 22,-8 Q 15,-2 5,-5 Z" fill="#10B981"/>
    </g>

    <!-- Recognition Description Paragraph -->
    <g transform="translate(350, 645)" text-anchor="middle" font-family="sans-serif" font-size="15.5" fill="#E2E8F0">
      <text x="0" y="0">
        Recognized for outstanding dedication, leadership,
      </text>
      <text x="0" y="24">
        and exceptional contribution towards promoting
      </text>
      <text x="0" y="48">
        mental health awareness and creating a positive impact
      </text>
      <text x="0" y="72">
        in communities.
      </text>
    </g>

    <!-- Pill Containers for Program Details -->
    <g transform="translate(350, 775)" text-anchor="middle">
      <!-- Container 1 -->
      <rect x="-240" y="0" width="480" height="34" rx="17" fill="#064E3B" stroke="#059669" stroke-width="1.5" opacity="0.85"/>
      <text x="0" y="22" font-family="'Arial Black', sans-serif" font-size="12" font-weight="900" fill="#FFFFFF" letter-spacing="1">
        MENTAL HEALTH ADVOCATE <tspan fill="#4ADE80">INTERNSHIP PROGRAM 2026</tspan>
      </text>

      <!-- Container 2 -->
      <rect x="-220" y="44" width="440" height="30" rx="15" fill="#064E3B" stroke="#059669" stroke-width="1.2" opacity="0.85"/>
      <text x="0" y="64" font-family="sans-serif" font-size="11.5" font-weight="bold" fill="#E2E8F0" letter-spacing="1">
        MENTAL HEALTH AWARENESS CAMPAIGN – <tspan fill="#2DD4BF">THRIVE360°</tspan>
      </text>
    </g>

    <!-- Footer: HEALTH NEXUS -->
    <g transform="translate(350, 895)" text-anchor="middle">
      <text x="0" y="0" font-family="'Times New Roman', Georgia, serif" font-size="22" font-weight="bold" fill="#FFFFFF" letter-spacing="3">
        HEALTH NEXUS
      </text>
      <line x1="-120" y1="12" x2="-60" y2="12" stroke="#10B981" stroke-width="1"/>
      <text x="0" y="16" font-family="sans-serif" font-size="12" fill="#94A3B8" letter-spacing="1.5">
        Understand. Support. Empower.
      </text>
      <line x1="60" y1="12" x2="120" y2="12" stroke="#10B981" stroke-width="1"/>
    </g>
  </svg>`;

  const base64Svg = typeof window !== 'undefined'
    ? window.btoa(unescape(encodeURIComponent(svg)))
    : Buffer.from(svg).toString('base64');

  return `data:image/svg+xml;base64,${base64Svg}`;
}



export function generateCadetCollegePaintingCertificateSvg(): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 700" width="1000" height="700">
    <defs>
      <linearGradient id="splashGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#1E3A8A"/>
        <stop offset="25%" stop-color="#DC2626"/>
        <stop offset="50%" stop-color="#F59E0B"/>
        <stop offset="75%" stop-color="#10B981"/>
        <stop offset="100%" stop-color="#0284C7"/>
      </linearGradient>
    </defs>

    <!-- Parchment Canvas -->
    <rect x="0" y="0" width="1000" height="700" fill="#FFFEFA"/>

    <!-- Subtle Outer Border with Gold Tone -->
    <rect x="20" y="20" width="960" height="660" fill="none" stroke="#D4AF37" stroke-width="1.5"/>
    <rect x="25" y="25" width="950" height="650" fill="none" stroke="#94A3B8" stroke-width="0.8"/>

    <!-- Corner Ornaments (Golden Filigree) -->
    <!-- Top Left Corner -->
    <g transform="translate(30, 30)" stroke="#B45309" fill="none" opacity="0.8">
      <path d="M 0,25 Q 15,15 25,0 Q 15,35 45,15 M 10,10 Q 30,5 35,25"/>
      <circle cx="15" cy="15" r="3" fill="#D97706"/>
    </g>
    <!-- Top Right Corner -->
    <g transform="translate(970, 30) scale(-1, 1)" stroke="#B45309" fill="none" opacity="0.8">
      <path d="M 0,25 Q 15,15 25,0 Q 15,35 45,15 M 10,10 Q 30,5 35,25"/>
      <circle cx="15" cy="15" r="3" fill="#D97706"/>
    </g>
    <!-- Bottom Left Corner -->
    <g transform="translate(30, 670) scale(1, -1)" stroke="#B45309" fill="none" opacity="0.8">
      <path d="M 0,25 Q 15,15 25,0 Q 15,35 45,15 M 10,10 Q 30,5 35,25"/>
      <circle cx="15" cy="15" r="3" fill="#D97706"/>
    </g>
    <!-- Bottom Right Corner -->
    <g transform="translate(970, 670) scale(-1, -1)" stroke="#B45309" fill="none" opacity="0.8">
      <path d="M 0,25 Q 15,15 25,0 Q 15,35 45,15 M 10,10 Q 30,5 35,25"/>
      <circle cx="15" cy="15" r="3" fill="#D97706"/>
    </g>

    <!-- Top Center: Dynamic Sports & Art Watercolor Splashes (Cricket Pads & Colorful Strokes) -->
    <g transform="translate(500, 110)">
      <!-- Artistic Splash background -->
      <path d="M -160,-20 Q -80,-80 0,-30 Q 80,-90 160,-20 Q 110,20 0,0 Q -110,30 -160,-20 Z" fill="url(#splashGrad)" opacity="0.35"/>
      <path d="M -120,-10 L -40,-45 L 30,-15 L 120,-35" stroke="#DC2626" stroke-width="8" opacity="0.7"/>
      <path d="M -90,5 L -10,-25 L 80,10" stroke="#F59E0B" stroke-width="6" opacity="0.8"/>
      <!-- Cricket Pads / Bats silhouette / Runner art -->
      <g stroke="#1E293B" stroke-width="2" fill="#FFFFFF">
        <path d="M 30,-90 L 50,-15 L 35,20 L 15,-60 Z"/>
        <path d="M 70,-80 L 85,-10 L 70,25 L 55,-55 Z"/>
        <line x1="20" y1="-60" x2="45" y2="-60"/>
        <line x1="25" y1="-40" x2="50" y2="-40"/>
        <line x1="60" y1="-50" x2="80" y2="-50"/>
        <line x1="65" y1="-30" x2="85" y2="-30"/>
      </g>
    </g>

    <!-- Top Left: Cadet College Choa Saiden Shah Chakwal Emblem -->
    <g transform="translate(150, 120)">
      <circle cx="0" cy="0" r="36" fill="#FFFFFF" stroke="#0F172A" stroke-width="2"/>
      <circle cx="0" cy="0" r="30" fill="none" stroke="#0F172A" stroke-width="1.2"/>
      <!-- College Gateway / Building silhouette -->
      <path d="M -14,14 L -14,-8 Q 0,-20 14,-8 L 14,14 Z" fill="none" stroke="#0F172A" stroke-width="1.8"/>
      <text x="0" y="26" text-anchor="middle" font-family="sans-serif" font-size="5.5" font-weight="bold" fill="#0F172A">
        CHAKWAL
      </text>
    </g>

    <!-- Top Right: Government of the Punjab Crescent & Star Crest -->
    <g transform="translate(850, 120)">
      <circle cx="0" cy="0" r="36" fill="#FFFFFF" stroke="#0F172A" stroke-width="2"/>
      <circle cx="0" cy="0" r="30" fill="none" stroke="#059669" stroke-width="1.5"/>
      <!-- Crescent & Star -->
      <path d="M 6,-10 A 14 14 0 1 0 6 12 A 11 11 0 1 1 6 -10 Z" fill="#059669"/>
      <polygon points="10,-6 12,-1 16,-1 13,2 14,7 10,4 6,7 7,2 4,-1 8,-1" fill="#059669"/>
      <text x="0" y="24" text-anchor="middle" font-family="sans-serif" font-size="7" font-weight="bold" fill="#0F172A">
        حکومت پنجاب
      </text>
    </g>

    <!-- Title: CADET COLLEGE CHOA SAIDEN SHAH CHAKWAL -->
    <g transform="translate(500, 220)" text-anchor="middle">
      <text x="0" y="0" font-family="'Arial Black', sans-serif" font-size="28" font-weight="900" fill="#1E3A8A" letter-spacing="1.5">
        CADET COLLEGE CHOA SAIDEN SHAH CHAKWAL
      </text>
    </g>

    <!-- Subtitle: Merit Certificate (Gothic/Old English Style) -->
    <g transform="translate(500, 280)" text-anchor="middle">
      <text x="0" y="0" font-family="'UnifrakturMaguntia', 'Cinzel Decorative', 'Georgia', serif" font-size="46" font-weight="bold" fill="#1E3A8A" letter-spacing="2">
        Merit Certificate
      </text>
    </g>

    <!-- Blue Ribbon Banner: ALL PAKISTAN ANNUAL PAINTING COMPETITION -->
    <g transform="translate(500, 335)">
      <!-- Left Ribbon Fin -->
      <polygon points="-400,0 -380,-18 -350,-18 -370,0 -350,18 -380,18" fill="#1E40AF"/>
      <circle cx="-370" cy="0" r="10" fill="#3B82F6"/>
      <!-- Right Ribbon Fin -->
      <polygon points="400,0 380,-18 350,-18 370,0 350,18 380,18" fill="#1E40AF"/>
      <circle cx="370" cy="0" r="10" fill="#3B82F6"/>
      <!-- Central Banner -->
      <rect x="-360" y="-18" width="720" height="36" rx="3" fill="#1E3A8A"/>
      <text x="0" y="7" text-anchor="middle" font-family="'Arial Black', sans-serif" font-size="18" font-weight="900" fill="#FFFFFF" letter-spacing="2">
        ALL PAKISTAN ANNUAL PAINTING COMPETITION
      </text>
    </g>

    <!-- Certificate Body Fill-In Content -->
    <g transform="translate(100, 420)" font-family="sans-serif" font-size="17" fill="#0F172A">
      <!-- Line 1 -->
      <text x="0" y="0">This is certified that</text>
      <text x="180" y="0" font-family="'Brush Script MT', 'Great Vibes', cursive" font-size="28" font-weight="bold" fill="#0F172A">Ibrahim Sindhu</text>
      <line x1="150" y1="4" x2="430" y2="4" stroke="#0F172A" stroke-width="1.2"/>
      <text x="440" y="0">Participated in annual All Pakistan Painting Competition</text>

      <!-- Line 2 -->
      <text x="0" y="55">From</text>
      <text x="90" y="55" font-family="'Brush Script MT', cursive" font-size="26" font-weight="bold" fill="#0F172A">Garrison Cadet College Kohat</text>
      <line x1="50" y1="59" x2="460" y2="59" stroke="#0F172A" stroke-width="1.2"/>
      <text x="480" y="55">On</text>
      <text x="530" y="55" font-family="'Brush Script MT', cursive" font-size="26" font-weight="bold" fill="#0F172A">26-09-2021</text>
      <line x1="510" y1="59" x2="800" y2="59" stroke="#0F172A" stroke-width="1.2"/>

      <!-- Line 3 -->
      <text x="0" y="110">Organized By Cadet College Choa Saiden Shah Chakwal on the Topic</text>
      <text x="480" y="110" font-family="'Brush Script MT', cursive" font-size="26" font-weight="bold" fill="#0F172A">Pakistan in the 21st Century</text>
      <line x1="470" y1="114" x2="800" y2="114" stroke="#0F172A" stroke-width="1.2"/>
    </g>

    <!-- Signatures -->
    <!-- Left: Convener -->
    <g transform="translate(260, 615)" text-anchor="middle">
      <path d="M -30,-15 Q 0,-35 25,-10" stroke="#000000" stroke-width="2" fill="none"/>
      <line x1="-80" y1="0" x2="80" y2="0" stroke="#0F172A" stroke-width="1.5"/>
      <text x="0" y="20" font-family="sans-serif" font-size="16" font-weight="bold" fill="#0F172A">
        Convener
      </text>
      <text x="0" y="36" font-family="sans-serif" font-size="12" fill="#334155">
        Cadet College Choa Saiden Shah Chakwal
      </text>
    </g>

    <!-- Right: Principal -->
    <g transform="translate(740, 615)" text-anchor="middle">
      <path d="M -30,-20 Q 5,-40 25,-15 T 45,-25" stroke="#000000" stroke-width="2" fill="none"/>
      <line x1="-80" y1="0" x2="80" y2="0" stroke="#0F172A" stroke-width="1.5"/>
      <text x="0" y="20" font-family="sans-serif" font-size="16" font-weight="bold" fill="#0F172A">
        Principal
      </text>
      <text x="0" y="36" font-family="sans-serif" font-size="12" fill="#334155">
        Cadet College Choa Saiden Shah Chakwal
      </text>
    </g>
  </svg>`;

  const base64Svg = typeof window !== 'undefined'
    ? window.btoa(unescape(encodeURIComponent(svg)))
    : Buffer.from(svg).toString('base64');

  return `data:image/svg+xml;base64,${base64Svg}`;
}





