import { Award, Star, MapPin, Shield, Sparkles } from 'lucide-react';
import { Puzzle, Music, BookOpen, GraduationCap, ArrowRight } from "lucide-react";

export const address = {
  title: "Address",
  lines: ["8622 11th St E Puyallup, WA 98373"],
};

export const contact = {
  title: "Contact",
  lines: ["(253) 845-2511", "info@buttonsandbows.com"],
};

export const hours = {
  title: "Hours",
  lines: ["Monday – Friday, 8:00 AM – 4:00 PM"],
};

export const navigation = [
  "Home",
  "About Us",
  "Curriculum",
  "Preschool Program (Ages 3–5)",
  "Parent Resources",
  "Contact Us",
];

export const achievements = [
  {
    icon: Award,
    title: 'Recognized by the Puyallup',
    subtitle: 'School District & MDA'
  },
  {
    icon: Star,
    title: '5-Star Rated by Local',
    subtitle: 'Families'
  },
  {
    icon: MapPin,
    title: 'Located on South Hill,',
    subtitle: 'Puyallup - Still'
  }
];

export const programsData = [
  {
    title: "Preschool Program",
    subtitle: "(Ages 3 - 5)",
    description:
      "Building confidence through play-based academics and social-emotional support.",
    icon: Puzzle,
    theme: "orange",
  },
  {
    title: "Music & STEM Integration",
    subtitle: "",
    description:
      "Where hands-on learning meets rhythm and curiosity.",
    icon: Music,
    theme: "green",
  },
  {
    title: "Faith-Inspired Learning",
    subtitle: "",
    description:
      "Guided by purpose, compassion, and community values.",
    icon: BookOpen,
    theme: "orange",
  },
];


export const offerings = [
  {
    icon: GraduationCap,
    title: 'Curriculum',
    description: 'Holistic learning, rooted in values & independence',
    link: '#'
  },
  {
    icon: BookOpen,
    title: 'Focus Areas',
    description: 'Mastering mathematics, arabic, literacy, STEM',
    link: '#'
  },
  {
    icon: Music,
    title: 'Enrichment',
    description: 'Music Programs, sports, art, all-inclusive snacks',
    link: '#'
  }
];

export const leftFeatures = [
  {
    icon: BookOpen,
    title: "Faith-Based Foundations",
    subtitle: "Values-driven learning rooted in love and kindness.",
  },
  {
    icon: Shield,
    title: "Secure Drop-Off & Pick-Up",
    subtitle: "A license plate check system ensures your child's safety every day.",
  },
  {
    icon: Sparkles,
    title: "Daily Updates with Brightwheel",
    subtitle: "Stay connected with real-time photos, messages, and reports.",
  },
];

export const whyChooseUs = [
  "50+ years in the community",
  "Family-owned and educator-led",
  "Proven program with STEM and music",
  "Trusted by generations of families",
];

export const FAQS = [
  {
    question: "What curriculum do you use?",
    answer: "We use a play-based, faith-centered curriculum designed to build confidence, creativity, and foundational skills.",
  },
  {
    question: "What ages do you serve?",
    answer: "We serve children from infancy through pre-kindergarten.",
  },
  {
    question: "How does drop-off work?",
    answer: "Our secure drop-off includes a license-plate check system, ensuring a safe and smooth process every morning.",
  },
  {
    question: "How can I tour or enroll?",
    answer: "You can schedule a tour online or contact us directly to begin the enrollment process.",
  },
];

export const REVIEWS = [
  {
    img: "/profile1.jpeg",
    text:
      "We absolutely love Buttons & Bows! The teachers are warm, patient, and truly know how to make learning fun. Katie comes home singing new songs every week.",
    author: "— Melissa J, parent of Katie",
    color: "#518C5E",
  },
  {
    img: "/profile2.jpeg",
    text:
      "From day one, we felt safe and welcomed. The drop-off system is smooth, and we get daily updates through Brightwheel. We couldn't imagine a better place for Lucas.",
    author: "— Jason R, parent of Lucas",
    color: "#FF8D3A",
  },
  {
    img: "/profile3.jpg",
    text:
      "I went to Buttons & Bows as a child, and now my daughter gets to experience the same joy and loving care I did. The staff feel like family.",
    author: "— Amanda S, parent of Emma",
    color: "#518C5E",
  },
];

export const BUTTONS_BOWS_COLORS = {
  GreenBg: 'bg-[#407B4F]',
  ButtonOrange: 'bg-[#F99249]',
  TextPrimary: 'text-white',
  ButtonText: 'text-[#407B4F]',
};
