import ecuImg from "@/assets/demo/ecu.png";
import exhaustImg from "@/assets/demo/exhaust.png";
import intercoolerImg from "@/assets/demo/intercooler.png";
import coiloversImg from "@/assets/demo/coilovers.png";
import armsImg from "@/assets/demo/arms.png";
import brakesImg from "@/assets/demo/brakes.png";

export type ProductCategory = "Motor" | "Șasiu" | "Frâne";

export interface Product {
  id: string;
  cat: ProductCategory;
  name: string;
  desc: string;
  long: string;
  specs: string[];
  priceNum: number;
  img: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "ecu",
    cat: "Motor",
    name: "Remapare ECU Stage 2",
    desc: "Calibrare dyno personalizată — putere, răspuns și alimentare curată pe benzină de pompă.",
    long: "O calibrare dezvoltată pe banc și verificată pe dyno, adaptată exact hardware-ului și combustibilului tău. Optimizăm aprinderea, presiunea și alimentarea pentru un mid-range mai puternic, răspuns mai ascuțit al accelerației și putere sigură, repetabilă pe benzină de pompă.",
    specs: [
      "+62 whp / +80 Nm tipic",
      "Sigur pe benzină 95/98",
      "Dyno live + suport remote",
      "Flash OBD, complet reversibil",
    ],
    priceNum: 690,
    img: ecuImg,
  },
  {
    id: "exhaust",
    cat: "Motor",
    name: "Evacuare Turbo-Back",
    desc: "Sistem inox 3\" cu sport cat. Flux maxim, fără drone în cabină.",
    long: "Sistem complet turbo-back din oțel inoxidabil T304, mandrel-bent pentru flux maxim și echipat cu sport cat high-flow. Acustică acordată: ton decisiv sub sarcină, fără drone la croazieră.",
    specs: [
      "Inox T304 3\"",
      "Sport cat 200-cpsi",
      "Mandrel-bent, TIG-welded",
      "Fitment bolt-on direct",
    ],
    priceNum: 1150,
    img: exhaustImg,
  },
  {
    id: "intercooler",
    cat: "Motor",
    name: "Kit Intercooler",
    desc: "Nucleu bar-and-plate și end-tank-uri turnate pentru temperaturi stabile pe admisie.",
    long: "Nucleu bar-and-plate de mare capacitate cu end-tank-uri turnate, care menține temperaturile pe admisie stabile la trageri repetate. Elimină heat-soak-ul ca puterea să rămână constantă pe circuit și la rulări consecutive.",
    specs: [
      "Nucleu bar & plate",
      "End-tank-uri din aliaj turnat",
      "IAT stabile sub sarcină",
      "Kit complet direct-fit",
    ],
    priceNum: 780,
    img: intercoolerImg,
  },
  {
    id: "coilovers",
    cat: "Șasiu",
    name: "Suspensie Coilover",
    desc: "Amortizare pe 32 trepte, înălțime reglabilă. Interval stradă–circuit.",
    long: "Coilover-e mono-tube cu amortizare pe 32 trepte și reglaj independent de înălțime. Comportament compus pe drum, care trece la control plat și sigur al caroseriei pe circuit.",
    specs: [
      "Amortizare 32 trepte",
      "Înălțime reglabilă",
      "Design mono-tube",
      "Interval stradă → circuit",
    ],
    priceNum: 1490,
    img: coiloversImg,
  },
  {
    id: "arms",
    cat: "Șasiu",
    name: "Brațe Control Reglabile",
    desc: "Brațe cu rulmenți sferici pentru corecție precisă de camber și caster.",
    long: "Brațe de control cu rulmenți sferici care restaurează geometria corectă pe mașini coborâte și deblochează reglajul precis de camber și caster. Intrare mai ascuțită în viraj și setări de aliniere predictibile.",
    specs: [
      "Rulmenți sferici",
      "Reglaj camber + caster",
      "Lungime reglabilă",
      "Hardware track-rated",
    ],
    priceNum: 520,
    img: armsImg,
  },
  {
    id: "brakes",
    cat: "Frâne",
    name: "Kit Frâne Mărite",
    desc: "Etriere pe 6 pistoane, discuri flotante din 2 piese, furtunuri împletite.",
    long: "Kit big brake pe 6 pistoane cu discuri flotante din 2 piese și furtunuri împletite pentru frânare puternică, fără fade. Pedală mai bună și capacitate termică pentru stradă agresivă și circuit.",
    specs: [
      "Etriere pe 6 pistoane",
      "Discuri 380mm din 2 piese",
      "Furtunuri inox împletite",
      "Opțiuni plăcuțe track",
    ],
    priceNum: 2200,
    img: brakesImg,
  },
];

export const PRODUCT_FILTERS = ["Toate", "Motor", "Șasiu", "Frâne"] as const;

export type ProductFilter = (typeof PRODUCT_FILTERS)[number];

export function formatMoney(n: number): string {
  return "€" + n.toLocaleString("en-US");
}
