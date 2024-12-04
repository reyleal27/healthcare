import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export const GenderOptions = ["male", "female", "other"];

export const IdentificationTypes = [
  "Philippine Passport",
  "PhilSys ID (Philippine Identification System ID)",
  "SSS UMID (Unified Multi-Purpose Identification Card)",
  "GSIS UMID (Government Service Insurance System ID)",
  "Drivers License",
  "PRC ID (Professional Regulatory Commission ID)",
  "Voters ID",
  "Senior Citizen ID",
  "PWD ID (Persons with Disabilities ID)",
  "PhilHealth ID",
  "TIN ID (Tax Identification Number ID)",
  "Postal ID",
  "GSIS e-Card",
];

export const PatientFormDefaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  birthDate: new Date(Date.now()),
  gender: "male" as Gender,
  address: "",
  occupation: "",
  emergencyContactName: "",
  emergencyContactNumber: "",
  primaryPhysician: "",
  insuranceProvider: "",
  insurancePolicyNumber: "",
  allergies: "",
  currentMedication: "",
  familyMedicalHistory: "",
  pastMedicalHistory: "",
  identificationType: "Birth Certificate",
  identificationNumber: "",
  identificationDocument: [],
  treatmentConsent: false,
  disclosureConsent: false,
  privacyConsent: false,
};

export const Doctors = [
  {
    image: "/assets/images/dr-green.png",
    name: "John Green",
  },
  {
    image: "/assets/images/dr-cameron.png",
    name: "Leila Cameron",
  },
  {
    image: "/assets/images/dr-livingston.png",
    name: "David Livingston",
  },
  {
    image: "/assets/images/dr-peter.png",
    name: "Evan Peter",
  },
  {
    image: "/assets/images/dr-powell.png",
    name: "Jane Powell",
  },
  {
    image: "/assets/images/dr-remirez.png",
    name: "Alex Ramirez",
  },
  {
    image: "/assets/images/dr-lee.png",
    name: "Jasmine Lee",
  },
  {
    image: "/assets/images/dr-cruz.png",
    name: "Alyana Cruz",
  },
  {
    image: "/assets/images/dr-sharma.png",
    name: "Hardik Sharma",
  },
];

export const StatusIcon = {
  scheduled: "/assets/icons/check.svg",
  pending: "/assets/icons/pending.svg",
  cancelled: "/assets/icons/cancelled.svg",
};

export const NavbarLinks = [
  {
    title: "Home",
    link: "home",
  },
  {
    title: "About Us",
    link: "about",
  },
  {
    title: "Our Services",
    link: "services",
  },
];

export const services = [
  {
    image: "/assets/services/expert-doctor.png",
    title: "Expert Doctor",
    description: "We have a team of expert specialist doctor.",
  },
  {
    image: "/assets/services/dental.png",
    title: "Dental",
    description: "Maintain the overall health of your mouth.",
  },
  {
    image: "/assets/services/pathology.png",
    title: "Pathology",
    description: "Highly specialized MD or DO Physician.",
  },
  {
    image: "/assets/services/cardiology.png",
    title: "Cardiology",
    description: "We have a team of expert cardiology doctor.",
  },
  {
    image: "/assets/services/medicine.png",
    title: "Medicine",
    description: "Specialist pharmacist suggests best medicine.",
  },
  {
    image: "/assets/services/neurology.png",
    title: "Neurology",
    description: "We have a team of expert specialist of neurologist.",
  },
  {
    image: "/assets/services/ambulance.png",
    title: "Ambulance",
    description: "24/7 emergency service just call us.",
  },
];


export const quickLinks = ['About Us', 'Services', 'Contact Us', 'Patients']
export const support = ['FAQs', 'Help Center', 'Privacy Policy', 'Terms & Conditions']
export const socials = [
  {
    social: 'Facebook',
    icon:   FaFacebookF,
  },
   {
    social: 'Instagram',
    icon: FaInstagram,
  },
    {
    social: 'LinkedIn',
    icon: FaLinkedinIn,
  },
     {
    social: 'Twitter',
    icon: FaTwitter,
  },
]