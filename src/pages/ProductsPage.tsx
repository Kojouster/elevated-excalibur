import { motion, AnimatePresence, useSpring } from "framer-motion";
import { useState, useRef } from "react";
import { ArrowRight, Shield, Crosshair, Rocket, X, ChevronLeft, ChevronRight, Filter, Radar, Truck, Eye, ChevronDown } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import BackToTop from "@/components/BackToTop";
import PageHeader from "@/components/PageHeader";
import productVlra from "@/assets/product-vlra-mr24-hero.jpg";
import productMtlb from "@/assets/product-mt-lb-hero.jpg";
import productZsu from "@/assets/product-zsu-hero.jpg";
import productMangust from "@/assets/product-mangust-hero.jpg";
import productBtr70 from "@/assets/product-btr70td-hero.jpg";
import productBrdm from "@/assets/product-brdm2p-hero.jpg";
import productXb30 from "@/assets/product-xb30-hero.jpg";

interface SpecSection {
  title: string;
  rows: [string, string][];
}

interface ProductVariant {
  name: string;
  subtitle: string;
  description: string;
  quickSpecs: string[];
  specSections: SpecSection[];
  advantages?: string[];
  options?: string[];
}

interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  icon: typeof Shield;
  subtitle: string;
  description: string;
  quickSpecs: string[];
  specSections: SpecSection[];
  advantages?: string[];
  options?: string[];
  gallery: string[];
  comparisonTable?: { header: string[]; rows: string[][] };
  variants?: ProductVariant[];
}

const categories = ["All", "Armoured Vehicles", "Rocket Launchers", "Air Defence", "Combat Modules", "Reconnaissance"];

const useProducts = (): Product[] => {
  const { t } = useLanguage();
  return [
  {
    id: 1,
    name: "BTR MANGUST",
    category: "Armoured Vehicles",
    image: productMangust,
    icon: Shield,
    subtitle: t("productsPage.mangustSubtitle"),
    description: t("productsPage.mangustDescription"),
    quickSpecs: ["6×6 Drive", "370 HP", "Level 3A Mine Protection"],
    gallery: [productMangust, productXb30],
    specSections: [
      {
        title: "General",
        rows: [
          ["Dimensions (L×W×H)", "7,302 × 2,636 × 2,447 mm"],
          ["Ground Clearance", "585 mm"],
          ["Maximum Power", "370 HP"],
          ["Cruising Range", "800 km"],
          ["Maximum Speed", "100 km/h"],
        ],
      },
      {
        title: "Power Unit",
        rows: [
          ["Engine Type", "4-stroke, inline 6-cylinder diesel"],
          ["Maximum Torque", "1,260 N·m at 1,200 rpm"],
          ["Displacement", "7.2 L"],
          ["Fuel Injection System", "Common Rail"],
          ["Oil Cooler", "Equipped"],
          ["Cold Start Range", "−25 to +49 °C"],
          ["Emission Level", "Not certified"],
        ],
      },
      {
        title: "Transmission & Running Gear",
        rows: [
          ["Transmission Type", "Automatic"],
          ["Forward Gears", "6"],
          ["Reverse Gear", "1"],
          ["Lock-up Torque Converter", "Equipped"],
          ["Hydraulic Retarder", "Equipped"],
          ["Front Axle", "Steering"],
          ["Center Axle", "Steering"],
          ["Rear Axle", "Fixed"],
          ["Inter-wheel Differential Lock", "Equipped"],
        ],
      },
      {
        title: "Protection",
        rows: [
          ["Crew Protection Standard", "Level 1"],
          ["5.56mm × 45 NATO SS109", "900 m/s"],
          ["5.56mm × 45 M193", "937 m/s"],
          ["7.62mm × 51 NATO Ball", "833 m/s"],
          ["7.62mm × 39 API BZ", "690 m/s"],
          ["7.62mm × 54R B32 API BP32 Dragunov", "854 m/s"],
          ["20mm FSP", "770 m/s"],
          ["12.7 × 99mm M33 Ball (200 m)", "MIL-STD-662F"],
          ["Exclusion", "7.62mm × 51 AP WC"],
        ],
      },
      {
        title: "Mine Protection",
        rows: [
          ["Standard Level", "3A / 2B"],
        ],
      },
      {
        title: "Braking System",
        rows: [
          ["Type", "Pneumatic Oleo system"],
          ["Circuits", "2 independent"],
          ["Service Brakes", "6 disc brakes"],
          ["ABS", "6S/6M (with deactivation option)"],
          ["Compressor", "Twin-cylinder, 720 cm³"],
          ["Parking Brake", "Pneumatic"],
          ["Gradeability (braking on slope)", "60%"],
        ],
      },
      {
        title: "Wheels & Tires",
        rows: [
          ["Tire Size", "14.00 R20"],
          ["Central Tire Inflation System (CTIS)", "Equipped"],
          ["Run-flat System", "Equipped"],
          ["Spare Wheel", "Optional (with handling system)"],
        ],
      },
      {
        title: "Cabin & Crew",
        rows: [
          ["Front Doors", "2"],
          ["Rear Doors / Ramp", "Double"],
          ["Roof Hatches", "3"],
          ["Locks", "Reinforced security level"],
          ["Additional Rear Windows", "Optional"],
          ["Provision for Combat Module", "Yes"],
          ["Adjustable Seats", "2 units, 3-point seat belts"],
          ["Central Display", "Driving parameter monitoring"],
          ["Transmission Control", "Equipped"],
          ["ABS Control", "Equipped"],
          ["CTIS Control", "Equipped"],
          ["Blackout Lights", "Equipped"],
        ],
      },
      {
        title: "Chassis",
        rows: [
          ["Body Type", "Monocoque"],
          ["Fuel Tanks", "1 unit"],
          ["Fuel Tank Capacity", "300 L"],
          ["Primary Fuel Filter", "Equipped"],
          ["Amphibious System", "Optional"],
        ],
      },
    ],
  },
  {
    id: 2,
    name: "BTR-70TD",
    category: "Armoured Vehicles",
    image: productBtr70,
    icon: Shield,
    subtitle: t("productsPage.btr70Subtitle"),
    description: t("productsPage.btr70Description"),
    quickSpecs: ["12,500 kg GVW", "DEUTZ 7.2L", "Amphibious"],
    gallery: [productBtr70],
    specSections: [
      {
        title: "General",
        rows: [
          ["GVW", "12,500 kg"],
          ["Dimensions (L×W×H)", "7.55 × 2.8 × 2.320 m"],
          ["Ground Clearance", "0.47 m"],
        ],
      },
      {
        title: "Engine",
        rows: [
          ["Type", "DEUTZ, diesel, turbocharged"],
          ["Engine Displacement", "7.2 L"],
          ["Torque", "1,050 Nm at 1,400 RPM"],
          ["Fuel Tank Capacity", "300 L"],
        ],
      },
      {
        title: "Transmission",
        rows: [
          ["Option 1", "Eaton, 8-gear, manual, fully synchronised, low shift"],
          ["Option 2", "Allison, 6-gear, automatic"],
          ["Clutch", "One disk, dry, diaphragm type"],
        ],
      },
      {
        title: "Armament",
        rows: [
          ["Primary", "14.5 mm HMG KPVT — 500 rounds"],
          ["Secondary", "7.62 mm MG PKT — 2,000 rounds"],
          ["Sight", "PP-61AM"],
        ],
      },
      {
        title: "Obstacles",
        rows: [
          ["Slope", "30°"],
          ["Roll", "25°"],
          ["Trench", "2 m"],
          ["Wall", "0.5 m"],
          ["Fording", "Amphibious"],
        ],
      },
    ],
    options: t("productsPage.btr70Options") as unknown as string[],
  },
  {
    id: 3,
    name: "BRDM-2P",
    category: "Reconnaissance",
    image: productBrdm,
    icon: Eye,
    subtitle: t("productsPage.brdmSubtitle"),
    description: t("productsPage.brdmDescription"),
    quickSpecs: ["DEUTZ 4.76L", "Amphibious", "Twin MG Turret"],
    gallery: [productBrdm],
    specSections: [
      {
        title: "General",
        rows: [
          ["Dimensions (L×W×H)", "5.75 × 2.35 × 2.37 m"],
          ["Ground Clearance", "0.315 m"],
        ],
      },
      {
        title: "Engine",
        rows: [
          ["Type", "DEUTZ BF4M1013FC, four-stroke diesel with turbocharging"],
          ["Engine Displacement", "4.76 L"],
          ["Torque", "577 Nm"],
          ["Fuel Tank Capacity", "280 L (2 × 140 L)"],
        ],
      },
      {
        title: "Transmission",
        rows: [
          ["Type", "ZF 6S 705 TO, 6-speed, manual"],
          ["Clutch", "M & S, dry, single-disk"],
        ],
      },
      {
        title: "Armament",
        rows: [
          ["Mount", "Turret-mounted, twin machine gun setup"],
          ["Primary", "14.5 mm KPVT — 500 rounds"],
          ["Secondary", "7.62 mm PKT — 2,000 rounds"],
          ["Sight", "PP-61AM"],
        ],
      },
      {
        title: "Performance",
        rows: [
          ["Slope", "30°"],
          ["Roll", "25°"],
          ["Trench", "1.1 m"],
          ["Wall", "0.5 m"],
          ["Fording", "Amphibious"],
        ],
      },
    ],
    options: t("productsPage.brdmOptions") as unknown as string[],
  },
  {
    id: 4,
    name: "MT-LB",
    category: "Armoured Vehicles",
    image: productMtlb,
    icon: Truck,
    subtitle: t("productsPage.mtlbSubtitle"),
    description: t("productsPage.mtlbDescription"),
    quickSpecs: ["11,300 kg", "240 HP", "Amphibious Tracked"],
    gallery: [productMtlb],
    specSections: [
      {
        title: "General",
        rows: [
          ["GVW", "11,300 kg"],
          ["Max Power", "240 HP"],
          ["Cruising Range", "500 km"],
          ["Ground Clearance", "0.415 m"],
        ],
      },
      {
        title: "Engine",
        rows: [
          ["Type", "Four-stroke YaMZ-238V diesel, turbocharged"],
        ],
      },
      {
        title: "Armament",
        rows: [
          ["Machine Gun", "7.62 mm PKM-B — 500 rounds"],
        ],
      },
      {
        title: "Radio",
        rows: [
          ["System 1", "Motorola DM-4601"],
          ["System 2", "R-173"],
        ],
      },
      {
        title: "Obstacles",
        rows: [
          ["Slope", "35°"],
          ["Roll", "25°"],
          ["Trench", "1.5 m"],
          ["Wall", "0.5 m"],
          ["Fording", "Amphibious"],
        ],
      },
    ],
    options: t("productsPage.mtlbOptions") as unknown as string[],
  },
  {
    id: 5,
    name: "VLRA MR-24",
    category: "Rocket Launchers",
    image: productVlra,
    icon: Rocket,
    subtitle: t("productsPage.vlraSubtitle"),
    description: t("productsPage.vlraDescription"),
    quickSpecs: ["122mm / 24 Tubes", "5–40 km Range", "110 km/h"],
    gallery: [productVlra],
    specSections: [
      {
        title: "MLRS Launcher",
        rows: [
          ["Caliber", "122 mm"],
          ["Number of Guides", "24 pcs"],
          ["Firing Range (min)", "5 km"],
          ["Firing Range (max)", "40 km"],
          ["Combat Crew", "3 persons"],
          ["Time Until Start of Fire", "1 min 40 sec"],
          ["Full Volley Time", "10–12 sec"],
          ["Time to Leave Positions After Volley", "1 min 15 sec"],
          ["Vertical Guidance Angles", "0° – 55°"],
          ["Horizontal Rotation Angles", "Left 0°–90°, Right 0°–90°"],
          ["Drive System", "Hydraulic (electromechanical)"],
          ["Drive Control System", "Standard, from cabin and remote control 100 m"],
          ["Fire Control System", "From cabin and with remote electric control"],
        ],
      },
      {
        title: "Running Gear",
        rows: [
          ["Outrigger System", "Mechanical jacks"],
          ["Sighting System", "Mechanical sight Сб 00-19"],
          ["ZIP-O Kit", "Included"],
        ],
      },
      {
        title: "Chassis",
        rows: [
          ["Wheel Formula", "4×4"],
          ["Wheelbase", "4,300 mm"],
          ["Length", "7,230 mm"],
          ["Width", "2,200 mm"],
          ["Height (laden)", "2,450 mm"],
          ["Transfer Case", "Permanent 4×4, 2-speed, pneumatic control"],
          ["Differential", "Locking, gear ratio 1:2.08"],
          ["Axles", "Hub reduction, planetary, gear ratio 6.000"],
          ["Steering", "Left-hand, hydraulic power assist"],
          ["Suspension", "Parabolic multi-leaf springs, oil-pneumatic shock absorbers"],
          ["Brakes", "Dual-circuit oil-pneumatic, disc on all wheels, switchable ABS"],
          ["Parking Brake", "Pneumatic, on transfer case"],
          ["Trailer Brake", "Dual-line, ISO standard"],
          ["Tires", "365/80 R20 off-road"],
          ["Rims", "Standard steel, optional aluminum with CTIS + Runflat"],
          ["Turning Radius", "7,500 mm"],
          ["Approach Angle", "40.6°"],
          ["Departure Angle", "29.6°"],
          ["Ramp Angle", "32.6°"],
          ["Ground Clearance (laden)", "490 mm"],
        ],
      },
      {
        title: "Design Features",
        rows: [
          ["Fuel Tank Capacity", "340 L (2 × 170 L)"],
          ["Platform Design", "Corrosion-resistant steel floor"],
          ["Storage Spaces", "Under-platform boxes (2), spare wheel on the side"],
          ["Seats", "Adjustable with 3-point safety belts"],
        ],
      },
      {
        title: "Power Unit",
        rows: [
          ["Engine Type", "Diesel, without ECU (TDN), 4.76 L, inline 4-cylinder"],
          ["Engine Power", "175 HP (129 kW) at 2,300 rpm"],
          ["Torque", "700 N·m at 1,400 rpm"],
          ["Emissions", "Euro 2"],
          ["Air Compressor", "225 cm³"],
          ["Transmission", "Manual, 6 forward / 1 reverse gear"],
        ],
      },
      {
        title: "Electrical Appliances",
        rows: [
          ["Electrical System", "24 V, alternator 55 A / 28 V"],
          ["Batteries", "2 × 12 V, 125 Ah, 300 A"],
          ["Controls", "CTIS, ABS, fuel selector, differential lock, transfer case"],
          ["Lighting", "Front/rear headlights, blackout lights"],
          ["Winch (optional)", "Front, 6,800 daN, 35 m steel cable, 10 m remote control"],
          ["Instrument Panel", "Steel with central display (fuel, gear, speed, distance, engine data, warnings)"],
        ],
      },
      {
        title: "Performance Characteristics",
        rows: [
          ["Gradient (max)", "60%"],
          ["Side Slope", "30%"],
          ["Trench", "0.8 m"],
          ["Vertical Obstacle", "0.4 m"],
          ["Fording Depth", "0.9 m"],
          ["GVW (without ammunition)", "7,000 kg"],
          ["GVW (with ammunition)", "9,000 kg"],
          ["Max Front Axle Load", "5,000 kg"],
          ["Max Rear Axle Load", "7,000 kg"],
          ["Max Speed", "110 km/h"],
          ["Range on Road", "1,400 km"],
          ["Towing Capacity", "5,000 kg"],
        ],
      },
    ],
  },
  {
    id: 6,
    name: "ZSU 23-4M-A1",
    category: "Air Defence",
    image: productZsu,
    icon: Radar,
    subtitle: t("productsPage.zsuSubtitle"),
    description: t("productsPage.zsuDescription"),
    quickSpecs: ["3D X-band Radar", "25 km Detection", "Up to 20 Targets"],
    gallery: [productZsu],
    specSections: [
      {
        title: "Modernization Stages",
        rows: [
          ["Stage 1", "Dismantling of old systems and devices"],
          ["Stage 2", "Installation of new systems and units"],
          ["Stage 3", "Repair/replacement of necessary systems and units"],
          ["Stage 4", "Testing and tuning of the modernized ZSU-23-4M-A1"],
        ],
      },
    ],
    advantages: [
      "Increase the detection range of aerial targets up to 30 km",
      "Sector of simultaneous view: 16° × 16° (azimuth 360°, elevation −4° to +85°)",
      "Simultaneous determination of three coordinates (azimuth, range, height) and radial velocity",
      "Detection, tracking and firing of small-scale targets (UAVs and cruise missiles)",
      "Possibility of choosing the most dangerous target",
      "High noise immunity",
      "Real-time location (coordinates) determination of the upgraded ZSU-23-4M",
      "Improved crew comfort (climate control system)",
      "Built-in electronic simulator for crew training",
      "Increased accuracy of target coordinate measurement",
      "Target classification capability",
      "Increased range and probability of hitting the target",
    ],
    comparisonTable: {
      header: ["Characteristics", "Before Modernization", "After Modernization"],
      rows: [
        ["Type of radar", "Analog two-coordinate", "3D X-band digital radar + radial speed"],
        ["Detection range (tactical fighter), km", "12", "25"],
        ["Detection range (UAV), km", "—", "4–9 (depends on UAV type)"],
        ["Max target tracking range, km", "10", "20"],
        ["Min target tracking height, m", "100", "From 0"],
        ["Target processing time, sec", "18", "0.2"],
        ["Number of tracking targets", "1", "Up to 20"],
        ["Speed of tracking targets, m/s", "Up to 450", "Up to 700"],
        ["Strike probability of air target", "0.07–0.18", "0.35–0.4"],
        ["Navigation system", "TNQ (tank navigation)", "TNQ, GPS, GLONASS (open codes)"],
        ["Ballistic calculator", "Analog", "Digital"],
        ["External target data (automated)", "—", "Yes"],
      ],
    },
  },
  {
    id: 7,
    name: "XB-30",
    category: "Combat Modules",
    image: productXb30,
    icon: Crosshair,
    subtitle: "Remote Weapon Station with 30mm Cannon",
    description: "Advanced unmanned turret featuring a 30×173mm GTS-30/N automatic cannon, 7.62mm FN Herstal coaxial MG, and 902V Tucha smoke grenades. Integrated stabilized optoelectronic suite with thermal imaging and eye-safe laser rangefinder.",
    quickSpecs: ["30×173mm Cannon", "Thermal Imaging", "6 km LRF"],
    gallery: [productXb30],
    specSections: [
      {
        title: "Armament",
        rows: [
          ["Main Gun", "30×173 mm Automatic Cannon GTS-30/N"],
          ["Coaxial MG", "7.62×51 mm FN HERSTAL machine gun"],
          ["Smoke Grenades", "902V 'Tucha' system (6 mortars, 3 per side)"],
        ],
      },
      {
        title: "Weapon Control System",
        rows: [
          ["Stabilizer", "Digital, electromechanical, 2-axis"],
          ["Drives", "Vertical and horizontal actuators with electromagnetic travel locks"],
          ["Control Units", "Equipped"],
          ["Operator Monitor", "Video monitor"],
          ["Operator Console", "Equipped"],
        ],
      },
      {
        title: "Thermal Imaging Channel (ONYX)",
        rows: [
          ["Sensor Resolution", "640 × 512 pixels"],
          ["Wavelength Range", "8–12 µm"],
          ["Type", "Uncooled microbolometer"],
          ["Field of View (FOV)", "4.4° × 3.5°"],
          ["Capability", "Observation through fog, smoke; day and night operation"],
        ],
      },
      {
        title: "Laser Rangefinder (LRF)",
        rows: [
          ["Wavelength", "λ — 1.535 µm (eye-safe)"],
          ["Laser Class", "1"],
          ["Beam Divergence", "≤ 1 × 1 mrad"],
          ["Measurement Frequency", "1–5 Hz"],
          ["Max Range", "6 km"],
          ["Tank Detection", "4.5 km (target 2.3 × 2.3 m)"],
          ["Stealth", "Undetectable by MWIR (3–5 µm) and LWIR (8–12 µm) thermal imagers"],
        ],
      },
      {
        title: "Day Channel",
        rows: [
          ["Narrow FOV", "2.2° (horizontal) × 1.65° (vertical)"],
          ["Wide FOV", "8.0° (horizontal) × 6.0° (vertical)"],
          ["Sensor Type", "CMOS, 1.3\" sensor"],
          ["Resolution", "720 × 576 pixels"],
          ["Detection (man)", "8 km"],
          ["Recognition (tank)", "2.2 km"],
        ],
      },
    ],
    variants: [
      {
        name: "GTS-30/N",
        subtitle: "Remote Weapon Station with 30×173mm GTS-30/N Cannon",
        description: "Advanced unmanned turret featuring a 30×173mm GTS-30/N automatic cannon, 7.62mm FN Herstal coaxial MG, and 902V Tucha smoke grenades. Integrated stabilized optoelectronic suite with thermal imaging and eye-safe laser rangefinder.",
        quickSpecs: ["30×173mm Cannon", "Thermal Imaging", "6 km LRF"],
        specSections: [
          {
            title: "Armament",
            rows: [
              ["Main Gun", "30×173 mm Automatic Cannon GTS-30/N"],
              ["Coaxial MG", "7.62×51 mm FN HERSTAL machine gun"],
              ["Smoke Grenades", "902V 'Tucha' system (6 mortars, 3 per side)"],
            ],
          },
          {
            title: "Weapon Control System",
            rows: [
              ["Stabilizer", "Digital, electromechanical, 2-axis"],
              ["Drives", "Vertical and horizontal actuators with electromagnetic travel locks"],
              ["Control Units", "Equipped"],
              ["Operator Monitor", "Video monitor"],
              ["Operator Console", "Equipped"],
            ],
          },
          {
            title: "Thermal Imaging Channel (ONYX)",
            rows: [
              ["Sensor Resolution", "640 × 512 pixels"],
              ["Wavelength Range", "8–12 µm"],
              ["Type", "Uncooled microbolometer"],
              ["Field of View (FOV)", "4.4° × 3.5°"],
              ["Capability", "Observation through fog, smoke; day and night operation"],
            ],
          },
          {
            title: "Laser Rangefinder (LRF)",
            rows: [
              ["Wavelength", "λ — 1.535 µm (eye-safe)"],
              ["Laser Class", "1"],
              ["Beam Divergence", "≤ 1 × 1 mrad"],
              ["Measurement Frequency", "1–5 Hz"],
              ["Max Range", "6 km"],
              ["Tank Detection", "4.5 km (target 2.3 × 2.3 m)"],
              ["Stealth", "Undetectable by MWIR (3–5 µm) and LWIR (8–12 µm) thermal imagers"],
            ],
          },
          {
            title: "Day Channel",
            rows: [
              ["Narrow FOV", "2.2° (horizontal) × 1.65° (vertical)"],
              ["Wide FOV", "8.0° (horizontal) × 6.0° (vertical)"],
              ["Sensor Type", "CMOS, 1.3\" sensor"],
              ["Resolution", "720 × 576 pixels"],
              ["Detection (man)", "8 km"],
              ["Recognition (tank)", "2.2 km"],
            ],
          },
        ],
      },
      {
        name: "2A42",
        subtitle: "Remote Weapon Station with 30mm 2A42 Automatic Cannon",
        description: "Combat module armed with a 30mm 2A42 automatic cannon, 7.62mm PKT coaxial machine gun, and 902V Tucha smoke grenade launcher system. Features digital electromechanical 2-axis stabilizer, ONYX uncooled thermal imager, and eye-safe laser rangefinder.",
        quickSpecs: ["30mm 2A42 Cannon", "475 rds Loaded", "ONYX Thermal"],
        specSections: [
          {
            title: "Armament",
            rows: [
              ["Main Gun", "30 mm Automatic Cannon 2A42"],
              ["Coaxial MG", "7.62 mm PKT machine gun"],
              ["Smoke Grenades", "902V 'Tucha' system (6 mortars, 3 per side)"],
              ["30mm Ammo (loaded)", "475 rounds"],
              ["7.62mm Ammo (loaded)", "2,100 rounds (350 loaded)"],
            ],
          },
          {
            title: "Weapon Control System",
            rows: [
              ["Stabilizer", "Digital, electromechanical, 2-axis"],
              ["Drives", "Vertical and horizontal actuators with electromagnetic travel locks"],
              ["Control Units", "Equipped"],
              ["Operator Monitor", "Video monitor"],
              ["Operator Console", "Equipped"],
            ],
          },
          {
            title: "Observation & Targeting",
            rows: [
              ["Optoelectronic Module", "Wide-angle and narrow-angle cameras"],
              ["Thermal Imager", "Uncooled"],
              ["Laser Rangefinder", "Equipped"],
            ],
          },
          {
            title: "Thermal Imaging Channel (ONYX)",
            rows: [
              ["Sensor Resolution", "640 × 512 pixels"],
              ["Wavelength Range", "8–12 µm"],
              ["Type", "Uncooled microbolometer"],
              ["Field of View (FOV)", "4.4° × 3.5°"],
              ["Capability", "Observation through fog, smoke; day and night operation"],
            ],
          },
          {
            title: "Laser Rangefinder (LRF)",
            rows: [
              ["Wavelength", "λ — 1.535 µm"],
              ["Laser Class", "1"],
              ["Beam Divergence", "≤ 1 × 1 mrad"],
              ["Measurement Frequency", "1–5 Hz"],
              ["Stealth", "Undetectable by MWIR (3–5 µm) and LWIR (8–12 µm) thermal imagers"],
            ],
          },
          {
            title: "Day Channel",
            rows: [
              ["Narrow FOV", "2.2° (horizontal) × 1.65° (vertical)"],
              ["Wide FOV", "8.0° (horizontal) × 6.0° (vertical)"],
              ["Sensor Type", "CMOS, 1.3\" sensor"],
              ["Resolution", "720 × 576 pixels"],
              ["Detection (man)", "8 km"],
              ["Recognition (tank)", "2.2 km"],
            ],
          },
        ],
      },
    ],
  },
  ];
};

/* ──── TiltCard ──── */
const TiltCard = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const rotateX = useSpring(0, { stiffness: 200, damping: 20 });
  const rotateY = useSpring(0, { stiffness: 200, damping: 20 });
  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    rotateX.set(((e.clientY - rect.top) / rect.height - 0.5) * -6);
    rotateY.set(((e.clientX - rect.left) / rect.width - 0.5) * 6);
  };
  return (
    <motion.div ref={ref} onMouseMove={handleMouse} onMouseLeave={() => { rotateX.set(0); rotateY.set(0); }}
      style={{ rotateX, rotateY, transformPerspective: 800 }} className={className}>
      {children}
    </motion.div>
  );
};

/* ──── Collapsible Spec Section ──── */
const SpecBlock = ({ section, index }: { section: SpecSection; index: number }) => {
  const [open, setOpen] = useState(index < 2);
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.04 }}
      className="border border-border overflow-hidden">
      <button onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-3.5 bg-background hover:bg-primary/5 transition-colors">
        <span className="font-heading text-xs tracking-[0.2em] uppercase text-foreground font-bold">{section.title}</span>
        <ChevronDown className={`w-4 h-4 text-primary transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}>
            <div className="divide-y divide-border/50">
              {section.rows.map(([label, value], ri) => (
                <div key={ri} className={`flex items-start px-5 py-2.5 text-sm ${ri % 2 === 0 ? "bg-card" : "bg-background"}`}>
                  <span className="w-2/5 text-muted-foreground flex-shrink-0 text-xs tracking-wider">{label}</span>
                  <span className="text-foreground font-medium text-xs">{value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

/* ──── Product Modal ──── */
const ProductModal = ({ product, onClose }: { product: Product; onClose: () => void }) => {
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [activeVariant, setActiveVariant] = useState(0);
  const Icon = product.icon;
  const { t } = useLanguage();

  // Use variant data if available, otherwise use base product data
  const hasVariants = product.variants && product.variants.length > 0;
  const currentData = hasVariants ? product.variants![activeVariant] : product;

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] bg-background/90 backdrop-blur-md flex items-start justify-center overflow-y-auto py-20 px-4"
      onClick={onClose}>
      <motion.div initial={{ opacity: 0, y: 40, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.95 }} transition={{ duration: 0.4 }}
        onClick={(e) => e.stopPropagation()} className="w-full max-w-5xl bg-card border border-border relative">

        <button onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-background/80 border border-border hover:border-primary text-foreground hover:text-primary transition-colors">
          <X className="w-5 h-5" />
        </button>

        {/* Gallery */}
        <div className="relative aspect-[16/9] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.img key={galleryIndex} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              src={product.gallery[galleryIndex]} alt={product.name} className="w-full h-full object-cover" />
          </AnimatePresence>
          {product.gallery.length > 1 && (
            <>
              <button onClick={() => setGalleryIndex((p) => (p - 1 + product.gallery.length) % product.gallery.length)}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-background/80 border border-border hover:border-primary text-foreground hover:text-primary transition-colors">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button onClick={() => setGalleryIndex((p) => (p + 1) % product.gallery.length)}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-background/80 border border-border hover:border-primary text-foreground hover:text-primary transition-colors">
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-card to-transparent" />
        </div>

        <div className="p-8 lg:p-12">
          {/* Header */}
          <div className="flex items-center gap-3 mb-2">
            <Icon className="w-6 h-6 text-primary" />
            <span className="text-primary text-xs tracking-[0.3em] uppercase">{product.category}</span>
          </div>
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-1">{product.name}</h2>

          {/* Variant Switcher */}
          {hasVariants && (
            <div className="flex items-center gap-2 my-5">
              <span className="text-muted-foreground text-xs tracking-wider uppercase mr-2">Variant:</span>
              {product.variants!.map((v, i) => (
                <button
                  key={v.name}
                  onClick={() => setActiveVariant(i)}
                  className={`px-5 py-2.5 text-xs font-heading tracking-wider uppercase transition-all duration-300 border ${
                    activeVariant === i
                      ? "bg-primary text-primary-foreground border-primary"
                      : "border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
                  }`}
                >
                  {v.name}
                </button>
              ))}
            </div>
          )}

          <p className="text-primary/70 text-sm tracking-wider mb-4">{currentData.subtitle}</p>
          <p className="text-muted-foreground text-base leading-relaxed mb-10 max-w-3xl">{currentData.description}</p>

          <h3 className="font-heading text-sm font-bold text-foreground tracking-wider uppercase mb-4">
            {t("productsPage.technicalSpecs")}
          </h3>
          <div className="space-y-1 mb-10">
            {currentData.specSections.map((sec, i) => (
              <SpecBlock key={`${activeVariant}-${sec.title}`} section={sec} index={i} />
            ))}
          </div>

          {/* Comparison Table (ZSU) */}
          {product.comparisonTable && (
            <>
              <h3 className="font-heading text-sm font-bold text-foreground tracking-wider uppercase mb-4">
                {t("productsPage.comparisonTitle")}
              </h3>
              <div className="overflow-x-auto mb-10 border border-border">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-primary/10">
                      {product.comparisonTable.header.map((h, i) => (
                        <th key={i} className="px-4 py-3 text-left text-xs tracking-wider uppercase font-heading text-foreground font-bold">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {product.comparisonTable.rows.map((row, ri) => (
                      <tr key={ri} className={ri % 2 === 0 ? "bg-card" : "bg-background"}>
                        {row.map((cell, ci) => (
                          <td key={ci} className={`px-4 py-2.5 text-xs ${ci === 0 ? "text-muted-foreground" : ci === 2 ? "text-primary font-medium" : "text-foreground"}`}>
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}

          {/* Advantages */}
          {product.advantages && product.advantages.length > 0 && (
            <>
              <h3 className="font-heading text-sm font-bold text-foreground tracking-wider uppercase mb-4">
                {t("productsPage.advantagesTitle")}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-10">
                {product.advantages.map((a, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.03 }} className="flex items-start gap-3 py-2">
                    <div className="w-1.5 h-1.5 bg-primary flex-shrink-0 mt-1.5" />
                    <span className="text-muted-foreground text-sm">{a}</span>
                  </motion.div>
                ))}
              </div>
            </>
          )}

          {/* Options */}
          {product.options && product.options.length > 0 && (
            <>
              <h3 className="font-heading text-sm font-bold text-foreground tracking-wider uppercase mb-4">
                {t("productsPage.optionsTitle")}
              </h3>
              <div className="space-y-2 mb-6">
                {product.options.map((o, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.03 }} className="flex items-start gap-3 py-1">
                    <div className="w-1.5 h-1.5 bg-primary/60 flex-shrink-0 mt-1.5" />
                    <span className="text-muted-foreground text-sm">{o}</span>
                  </motion.div>
                ))}
              </div>
            </>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

/* ──── Page ──── */
const ProductsPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const products = useProducts();
  const filtered = activeCategory === "All" ? products : products.filter((p) => p.category === activeCategory);
  const { t } = useLanguage();

  const categoryLabels: Record<string, string> = {
    "All": t("productsPage.all"),
    "Armoured Vehicles": t("productsPage.armouredVehicles"),
    "Rocket Launchers": t("productsPage.rocketLaunchers"),
    "Air Defence": t("productsPage.airDefence"),
    "Combat Modules": t("productsPage.combatModules"),
    "Reconnaissance": t("productsPage.reconnaissance"),
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHeader subtitle={t("productsPage.subtitle")} title={t("productsPage.title")} titleAccent={t("productsPage.titleAccent")}
        description={t("productsPage.description")} />

      <section className="py-20 lg:py-28 bg-background bg-noise">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Filter Bar */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 mb-12 overflow-x-auto pb-4">
            <Filter className="w-4 h-4 text-muted-foreground flex-shrink-0" />
            {categories.map((cat) => (
              <button key={cat} onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 font-heading text-xs tracking-wider uppercase whitespace-nowrap transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground"
                    : "border border-border text-muted-foreground hover:border-primary/30 hover:text-foreground"
                }`}>
                {categoryLabels[cat] || cat}
              </button>
            ))}
          </motion.div>

          <p className="text-muted-foreground text-xs tracking-wider uppercase mb-8">
            {t("productsPage.showing")} {filtered.length} {t("productsPage.of")} {products.length} {t("productsPage.products")}
          </p>

          {/* Products Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((product, index) => {
                const Icon = product.icon;
                return (
                  <motion.div key={product.id} layout
                    initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.3, delay: index * 0.05 }}
                    onClick={() => setSelectedProduct(product)}>
                    <TiltCard className="group cursor-pointer bg-card border border-border hover:border-primary/40 hover:shadow-[0_0_30px_-10px_hsl(var(--primary)/0.2)] transition-all duration-500 overflow-hidden h-full">
                      <div className="aspect-[16/10] overflow-hidden relative">
                        <img src={product.image} alt={product.name} loading="lazy" width={1024} height={640}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                        <div className="absolute top-3 right-3 w-10 h-10 bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center group-hover:border-primary/50 transition-all">
                          <Icon className="w-4 h-4 text-primary" />
                        </div>
                      </div>
                      <div className="p-6">
                        <p className="text-primary text-xs tracking-[0.3em] uppercase mb-1">{product.category}</p>
                        <h3 className="font-heading text-xl font-bold text-foreground mb-1">{product.name}</h3>
                        <p className="text-primary/60 text-xs tracking-wider mb-3">{product.subtitle}</p>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">{product.description}</p>
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {product.quickSpecs.map((s) => (
                            <span key={s} className="px-2 py-1 border border-border text-[10px] tracking-wider text-muted-foreground group-hover:border-primary/30 transition-colors">
                              {s}
                            </span>
                          ))}
                        </div>
                        <span className="inline-flex items-center gap-2 text-primary text-sm tracking-wider uppercase font-body group-hover:gap-3 transition-all">
                          {t("productsPage.viewFullSpecs")} <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </TiltCard>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {selectedProduct && <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />}
      </AnimatePresence>

      <FooterSection />
      <BackToTop />
    </div>
  );
};

export default ProductsPage;
