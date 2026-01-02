import {
  Home,
  Layers,
  Shield,
  Briefcase,
  User,
  BadgeCheck,
  Mail,
  Phone,
  Target,
  Compass,
  MapPin,
  Search,
  ShieldCheck,
  ScanSearch,
  Eye,
  Gavel,
  CheckCircle2,
  Network,
  Layers3,
  Lock,
  Lightbulb,
  Workflow,
  Telescope,
  ZoomIn,
  ClipboardList,
  Users,
  Building2,
  AlertTriangle,
  AlertCircle,
  Sparkles,
  TrendingUp,
  Clock,
  FileText,
  Euro,
  ChevronDown,
  Plus,
  ArrowRight,
  MessageCircle,
  Calendar,
  CheckCircle,
  Globe,
  FileCheck,
  Accessibility,
} from "lucide-react";
import { LucideIcon } from "lucide-react";

// Mapping des icônes par usage
export const icons = {
  // Navigation
  navigation: {
    home: Home,
    offers: Layers,
    copil: Shield,
    about: User,
    contact: Mail,
  },
  // Hero value chips
  hero: {
    vision: Target,
    terrain: MapPin,
    certification: BadgeCheck,
  },
  // Méthode (4 étapes)
  method: {
    comprendre: ScanSearch,
    decider: Gavel,
    structurer: Network,
    securiser: Shield,
  },
  // Offres
  offers: {
    clarifier: Lightbulb,
    structurer: Layers3,
    comprendre: Telescope,
    securiser: ClipboardList,
  },
  // COPIL
  copil: {
    header: Briefcase,
    check: CheckCircle2,
  },
  // Profils
  profiles: {
    user: User,
    users: Users,
    building: Building2,
  },
  // Avant/Après
  impact: {
    before: AlertTriangle,
    after: CheckCircle,
    trending: TrendingUp,
  },
  // FAQ
  faq: {
    clock: Clock,
    file: FileText,
    lock: Lock,
    euro: Euro,
    map: MapPin,
    chevron: ChevronDown,
    plus: Plus,
  },
  // CTA
  cta: {
    arrow: ArrowRight,
    message: MessageCircle,
    calendar: Calendar,
  },
} as const;

// Type helper pour les icônes
export type IconKey = keyof typeof icons;
export type IconName = {
  [K in IconKey]: keyof typeof icons[K];
}[IconKey];

// Helper pour obtenir une icône
export function getIcon(
  category: IconKey,
  name: string
): LucideIcon | undefined {
  const categoryIcons = icons[category];
  if (!categoryIcons) return undefined;
  return (categoryIcons as Record<string, LucideIcon>)[name];
}

