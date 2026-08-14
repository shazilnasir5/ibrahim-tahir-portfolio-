import { PortfolioData } from '../types';
import certBiotechGenomics from '../assets/images/cert_biotech_genomics_1786101545697.jpg';
import certCrisprLab from '../assets/images/cert_crispr_lab_1786101555727.jpg';
import certBioprocessExcellence from '../assets/images/cert_bioprocess_excellence_1786101581004.jpg';
import projectDnaSequencing from '../assets/images/project_dna_sequencing_1786101565923.jpg';
import certHealthNexusIntern from '../assets/images/health_nexus_best_intern_original.jpeg';
import ibrahimHeroPortrait from '../assets/images/IMG-20250729-WA0032.jpg';
import { generateCertificateSvg, generateNigabCertificateSvg, generateCanliWorkshopCertificateSvg, generateLanguageLabCertificateSvg, generateEntertechCertificateSvg, generateHomeCharityCertificateSvg, generateRasconCertificateSvg, generateEnvion26CertificateSvg, generateEnvion24CertificateSvg, generateEcoLegalCertificateSvg, generateAgricultureCareersCertificateSvg, generateIpexCertificateSvg, generateOecSvlCertificateSvg, generateEnvion26AppreciationCertificateSvg, generateEnvion26ParticipationCertificateSvg, generateEPosterBlogCertificateSvg, generateSportsCulturalAppreciationCertificateSvg, generateCadetCollegePaintingCertificateSvg, generateIpcPaintingCertificateSvg, generateMgBioWebinarCertificateSvg, generateHealthNexusBestInternCertificateSvg } from '../utils/certificateGenerator';

export const initialPortfolioData: PortfolioData = {
  name: "Ibrahim Tahir Sindhu",
  title: "Biotechnology Specialist & Research Scholar",
  degreeBadge: "BS Bio-Technology",
  shortBio: "Motivated Biotechnology student seeking an internship opportunity to apply academic knowledge, gain practical experience, and develop professional skills in a dynamic and growth-oriented environment.",
  fullBio: "Currently pursuing a Bachelor of Science in Bio-Technology at Superior University Lahore with an expected 3.0 CGPA. Possesses hands-on laboratory experience in DNA extraction, Gram staining, microscopic analysis, paper chromatography, and autoclave agar media preparation.",
  profilePictureUrl: ibrahimHeroPortrait,
  
  contact: {
    phone: "03314869611",
    displayPhone: "0331 4869611",
    email: "tahiribrahim326777@gmail.com",
    location: "House #10, Street #26, Arjun Street, Islamia Park Poounch Road, Lahore, 54500",
    mapUrl: "https://maps.google.com/?q=Lahore,Pakistan",
    availability: "Available for Biotechnology Internships & Research Projects"
  },
  
  socials: {
    github: "https://github.com/ibrahimsindhu",
    linkedin: "https://linkedin.com/in/ibrahim-tahir-sindhu",
    googleScholar: "https://scholar.google.com",
    researchGate: "https://researchgate.net",
    twitter: "https://twitter.com"
  },

  education: [
    {
      id: "edu-1",
      degree: "Bachelor of Science in Biotechnology",
      institution: "Superior University, Lahore",
      startYear: "2023",
      endYear: "Present",
      location: "Lahore, Pakistan",
      description: "Currently pursuing BS Biotechnology. Active researcher and Student Volunteer Leader (SVL 2023-2024) for the Department of Biological Sciences.",
      relevantSubjects: [
        "Molecular Techniques Used in Nano Therapeutic Lab",
        "Basic Microbiology & Molecular Biology",
        "Recombinant DNA Technology",
        "Environmental Science & SDGs",
        "Bioprocess & Media Preparation"
      ],
      honors: "Student Volunteer Leader (SVL) - Department of Biological Sciences"
    },
    {
      id: "edu-2",
      degree: "Intermediate (Pre-Medical)",
      institution: "Garrison Cadet College Kohat, KP",
      startYear: "2020",
      endYear: "2022",
      location: "Kohat, KP",
      description: "Completed Intermediate Pre-Medical with focus on Biology, Chemistry, and Physics.",
      relevantSubjects: [
        "Cell Biology & Physiology",
        "Organic & Inorganic Chemistry",
        "Physics",
        "Genetics Basics"
      ]
    },
    {
      id: "edu-3",
      degree: "Matriculation (Science)",
      institution: "Unique Group of Institution, Lahore",
      startYear: "2018",
      endYear: "2020",
      location: "Lahore, Pakistan",
      description: "Completed secondary school matriculation in Science subjects.",
      relevantSubjects: ["Biology", "Chemistry", "Physics", "Mathematics"]
    }
  ],

  certificates: [
    {
      id: "cert-1",
      title: "Molecular Techniques Used in Nano Therapeutic Lab",
      issuer: "National Institute for Genomics & Advanced Biotechnology (NIGAB), NARC, Islamabad",
      date: "06 July - 07 August 2026",
      imageUrl: generateNigabCertificateSvg(),
      description: "Completed internship training at National Institute for Genomic & Advanced Biotechnology (NIGAB), NARC, Islamabad on Molecular Techniques Used in Nano Therapeutic Lab (Reg. #SU91-BSBTM-F23-010).",
      category: "Genomics",
      credentialUrl: "#"
    },
    {
      id: "cert-2",
      title: "Basic Microbiology to Molecular Biology Workshop (Batch 10)",
      issuer: "CANLI Institute of Emerging Health Technologies & TrustMed Lab",
      date: "09 May 2026",
      imageUrl: generateCanliWorkshopCertificateSvg(),
      description: "Participated in hands-on training workshop on Basic Microbiology to Molecular Biology (Batch 10) organized by CANLI Institute of Emerging Health Technologies in collaboration with TrustMed Lab.",
      category: "Bio-Technology",
      credentialUrl: "#"
    },
    {
      id: "cert-3",
      title: "English Language Course Completion (Grade A)",
      issuer: "The Language Lab - Institute of Modern Studies",
      date: "Sept 2022 - Dec 2022",
      imageUrl: generateLanguageLabCertificateSvg(),
      description: "Completed Intermediate Level course in English Language with Grade 'A', covering Listening, Speaking, Reading, and Writing skills (Reg No: IS/111-0922).",
      category: "Award",
      credentialUrl: "#"
    },
    {
      id: "cert-4",
      title: "Youth Empowerment and Sustainability Training Program",
      issuer: "ENTERTECH Labs (Pvt) Ltd.",
      date: "04 November 2025",
      imageUrl: generateEntertechCertificateSvg(),
      description: "Certificate of Appreciation for completing training focused on UN Sustainable Development Goals (SDGs) and Environmental Lab Practices with hands-on experience.",
      category: "Research",
      credentialUrl: "#"
    },
    {
      id: "cert-5",
      title: "Certificate of Appreciation - Volunteer",
      issuer: "Home Charity Trust",
      date: "2024",
      imageUrl: generateHomeCharityCertificateSvg(),
      description: "Awarded Certificate of Appreciation for dedication and commitment as a volunteer in Home Charity Trust.",
      category: "Award",
      credentialUrl: "#"
    },
    {
      id: "cert-6",
      title: "3rd RASCON 2025 - National Chapter",
      issuer: "Superior University, Lahore (FAHS)",
      date: "16th October 2025",
      imageUrl: generateRasconCertificateSvg(),
      description: "Certificate of Participation at 3rd RASCON 2025 under theme 'Sustainable Rehabilitation and Allied Health Sciences: AI, Ethics, and Multidisciplinary Innovations' (6+6 CME+CPD Credit Hours).",
      category: "Research",
      credentialUrl: "#"
    },
    {
      id: "cert-7",
      title: "3rd Envion-26 - Research Week Contribution",
      issuer: "Department of Biological Sciences, Superior University",
      date: "22nd April 2026",
      imageUrl: generateEnvion26CertificateSvg(),
      description: "Certificate of Appreciation in appreciation of valuable contribution to Envion-26 during Research Week.",
      category: "Research",
      credentialUrl: "#"
    },
    {
      id: "cert-8",
      title: "Envion-24 - Climate Change Adaptability Week",
      issuer: "Faculty of Allied Health Sciences, Superior University",
      date: "6th - 7th November 2024",
      imageUrl: generateEnvion24CertificateSvg(),
      description: "Participated in Envion-24 organized during Research Climate Change Adaptability Week by Faculty of Allied Health Sciences & Faculty of Sciences.",
      category: "Research",
      credentialUrl: "#"
    },
    {
      id: "cert-9",
      title: "Eco Legal Nexus Workshop",
      issuer: "Superior Law Moot Court Society & Superior Environmental Society",
      date: "30th September 2025",
      imageUrl: generateEcoLegalCertificateSvg(),
      description: "Certificate of Participation for participating in the Eco Legal Nexus Workshop organised by Superior Law Moot Court Society in collaboration with Superior Environmental Society.",
      category: "Research",
      credentialUrl: "#"
    },
    {
      id: "cert-10",
      title: "Exploring Careers in Agriculture and Biological Science",
      issuer: "Department of Agricultural Sciences & Biological Sciences, Superior University",
      date: "2025",
      imageUrl: generateAgricultureCareersCertificateSvg(),
      description: "Certificate of Participation awarded for participating in the workshop titled Exploring Careers in Agriculture and Biological Science organised by Department of Agricultural Sciences in collaboration with Biological Sciences, Superior University Lahore.",
      category: "Bio-Technology",
      credentialUrl: "#"
    },
    {
      id: "cert-11",
      title: "International Poultry Expo-2025 (IPEX-2025)",
      issuer: "Pakistan Poultry Association (PPA)",
      date: "23rd, 24th, 25th October 2025",
      imageUrl: generateIpexCertificateSvg(),
      description: "Certificate of Participation for participating in the International Poultry Expo held on 23rd, 24th, 25th October 2025 at Lahore Expo Center.",
      category: "Bio-Technology",
      credentialUrl: "#"
    },
    {
      id: "cert-12",
      title: "Certificate of Acknowledgement - Student Volunteer Leader (SVL)",
      issuer: "Office of Engagement & Co-Creation, Superior University",
      date: "2023 - 2024",
      imageUrl: generateOecSvlCertificateSvg(),
      description: "Certificate of Acknowledgement presented for valuable contribution as a Student Volunteer Leader (SVL) of Department of Biological Sciences for 2023 - 2024.",
      category: "Award",
      credentialUrl: "#"
    },
    {
      id: "cert-13",
      title: "3rd Envion-26 - Certificate of Appreciation",
      issuer: "Department of Biological Sciences, Faculty of Sciences, Superior University",
      date: "22nd April 2026",
      imageUrl: generateEnvion26AppreciationCertificateSvg(),
      description: "Certificate of Appreciation presented in recognition of outstanding efforts and dedication in organizing ENVION 26 during Research Week (15th - 24th April 2026).",
      category: "Award",
      credentialUrl: "#"
    },
    {
      id: "cert-14",
      title: "3rd Envion-26 - Certificate of Participation",
      issuer: "Faculty of Sciences / Faculty of Allied Health Sciences, Superior University",
      date: "22nd April 2026",
      imageUrl: generateEnvion26ParticipationCertificateSvg(),
      description: "Certificate of Participation presented in recognition of valued presence as a participant at ENVION 26 during Research Week (15th - 24th April 2026).",
      category: "Research",
      credentialUrl: "#"
    },
    {
      id: "cert-15",
      title: "Intra-University E-Poster & Blog Writing Competition",
      issuer: "Office of Engagement & Co-Creation / Sustainable Environment Society, Superior University",
      date: "Environmental Day",
      imageUrl: generateEPosterBlogCertificateSvg(),
      description: "Certificate of Participation presented in recognition of valuable participation in the Intra University E-Poster & Blog Writing competition organized on the occasion of Environmental Day.",
      category: "Award",
      credentialUrl: "#"
    },
    {
      id: "cert-16",
      title: "Sports and Cultural Festival - Certificate of Appreciation",
      issuer: "Department of Biological Sciences, Superior University",
      date: "14th February 2026",
      imageUrl: generateSportsCulturalAppreciationCertificateSvg(),
      description: "Certificate of Appreciation presented in recognition of active participation and valuable support to the Department of Biological Sciences during the Sports and Cultural Festival held on 14th February 2026.",
      category: "Award",
      credentialUrl: "#"
    },
    {
      id: "cert-17",
      title: "All Pakistan Annual Painting Competition - Merit Certificate",
      issuer: "Cadet College Choa Saiden Shah Chakwal / GCC Kohat",
      date: "26th September 2021",
      imageUrl: generateCadetCollegePaintingCertificateSvg(),
      description: "Merit Certificate awarded for participation in the All Pakistan Annual Painting Competition on the topic 'Pakistan in the 21st Century' representing Garrison Cadet College Kohat.",
      category: "Award",
      credentialUrl: "#"
    },
    {
      id: "cert-18",
      title: "International Painting Competition - Certificate of Achievement",
      issuer: "IPC / Brunik & Blesso",
      date: "2022",
      imageUrl: generateIpcPaintingCertificateSvg(),
      description: "Certificate of Achievement proudly presented in the International Painting Competition sponsored by Brunik and Blesso.",
      category: "Award",
      credentialUrl: "#"
    },
    {
      id: "cert-19",
      title: "From Data to Manuscript: Research Publication Journey",
      issuer: "MGBio: A Tech-Bio Company",
      date: "22nd July 2026",
      imageUrl: generateMgBioWebinarCertificateSvg(),
      description: "Certificate of Participation awarded for attending the webinar 'From Data to Manuscript: Navigating the Research Publication Journey' organized by MGBio (Verification ID: FDTMWEB479).",
      category: "Research",
      credentialUrl: "#"
    },
    {
      id: "cert-20",
      title: "Our Best Intern - Mental Health Advocate Internship Program 2026",
      issuer: "Health Nexus & Thrive 360°",
      date: "2026",
      imageUrl: certHealthNexusIntern,
      description: "Recognized as 'Our Best Intern' for outstanding dedication, leadership, and exceptional contribution towards promoting mental health awareness and community impact.",
      category: "Award",
      credentialUrl: "#"
    }
  ],

  projects: [
    {
      id: "proj-nigab-1",
      title: "Molecular Techniques Used in Nano Therapeutic Lab",
      shortDescription: "Official research internship training conducted at National Institute for Genomics & Advanced Biotechnology (NIGAB), NARC Islamabad (Reg. #SU91-BSBTM-F23-010).",
      longDescription: "Conducted hands-on research and practical training at the National Institute for Genomics & Advanced Biotechnology (NIGAB), National Agricultural Research Centre (NARC), Park Road, Islamabad. Focused on formulating, evaluating, and documenting molecular protocols in nano-therapeutics and genomic workflows.",
      category: "Bio-Technology",
      tags: ["NIGAB NARC Islamabad", "Nano-Therapeutics", "Molecular Protocols", "Reg. #SU91-BSBTM-F23-010"],
      tools: ["Nano-Therapeutic Protocols", "DNA Extraction", "UV-Vis Spectrophotometry", "Microscopy Assays", "BSL Laboratory Safety"],
      year: "2026",
      imageUrl: generateNigabCertificateSvg(),
      highlights: [
        "Completed 1-month intensive research internship at National Institute for Genomics & Advanced Biotechnology (NIGAB), NARC Islamabad (06 July – 07 August 2026)",
        "Trained directly in Molecular Techniques Used in Nano Therapeutic Lab under Registration #SU91-BSBTM-F23-010",
        "Conducted nano-carrier integrity evaluations, molecular assays, and therapeutic stability optimization",
        "Operated advanced laboratory instrumentation including spectrophotometers, micro-centrifuges, and biosafety cabinets"
      ]
    },
    {
      id: "proj-nigab-2",
      title: "Genomic DNA Extraction & Molecular Diagnostics Workflow",
      shortDescription: "Standardized molecular genomics workflows for high-purity DNA isolation, microbial screening, and quantification at NIGAB.",
      longDescription: "Developed and executed standardized protocols for genomic DNA isolation, purity quantification, and molecular diagnostic characterization at the National Institute for Genomics & Advanced Biotechnology (NIGAB).",
      category: "Research",
      tags: ["Genomics", "DNA Extraction", "Molecular Diagnostics", "NIGAB Research"],
      tools: ["Genomic DNA Isolation", "Agarose Gel Electrophoresis", "PCR Amplification", "Nanodrop Purity Analysis"],
      year: "2026",
      imageUrl: generateNigabCertificateSvg(),
      highlights: [
        "Executed high-yield genomic DNA isolation protocols from diverse biological specimens",
        "Assessed DNA purity ratios (A260/A280) using UV-Vis spectrophotometry",
        "Performed agarose gel electrophoresis for fragment sizing and quality verification",
        "Maintained stringent documentation compliant with National Agricultural Research Centre laboratory guidelines"
      ]
    }
  ],

  skills: [
    {
      category: "Laboratory Skills",
      items: [
        "Basic hands-on experience in DNA extraction",
        "Performed Gram staining techniques for microbial analysis",
        "Microscopic examination of blood cells",
        "Conducted paper chromatography for compound separation",
        "Prepared agar media using autoclave sterilization techniques"
      ]
    },
    {
      category: "Leadership & Communication Skills",
      items: [
        "Led a team of 20 students in academic research / project activities",
        "Student Volunteer Leader (SVL) for Department of Biological Sciences",
        "Social Media Head of Superior Sustainable Environment Society (2025-2026)",
        "Home Tutor at Samnabad (83% average improvement in Biology, Chemistry, Physics)",
        "Ability to create structured and engaging lesson plans & formal documentation"
      ]
    },
    {
      category: "Software & General Abilities",
      items: [
        "Microsoft Word & Microsoft PowerPoint",
        "Report Writing & Formal Documentation",
        "Research Publication & Manuscript Workflows (MGBio Certified)"
      ]
    }
  ]
};
