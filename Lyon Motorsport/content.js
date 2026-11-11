
const CONTENT = {
  brand: {
    name: "LYON MOTORSPORT",
    tagline: "Racing Beyond Limits"
  },

  contact: {
    email: "cglyon24@gmail.com",
    phone: "(385) 645-9151",
    hours: "Monday – Friday, 9:00 AM – 5:00 PM"
  },

  home: {
    hero: {
      eyebrow: "Children's Charity",
      title: "Racing Beyond Limits",
      description:
        "Creating unforgettable motorsport experiences for children and families facing medical challenges.",
      primaryButton: "Get Involved",
      secondaryButton: "Explore Our Services"
    },

    quote: {
      text:
        "Children are the world's most valuable resource and its best hope for the future",
      author: "John F. Kennedy"
    },

    why: {
      eyebrow: "OUR WHY",
      title: "",
      description:
        "For a child facing serious illness, life can become consumed by hospital rooms, treatments, and uncertainty. At Lyon Motorsport, we believe every child deserves moments that remind them there is more to life than their circumstances. Through the thrill of race cars, the excitement of the track, and unforgettable experiences with our team, we create opportunities for children to step away from the everyday and simply be kids again. These experiences can spark joy, build confidence, and remind children of their strength, their potential, and all the incredible things they are capable of accomplishing.",
      button: "Get Involved"
    },

    testimonials: {
      eyebrow: "REAL STORIES",
      title: "The Difference We Make",
      description:
        "A few words about the impact of unforgettable experiences.",
      quotes: [
        "This is the first time he has smiled all week.",
        "An experience our family will never forget.",
        "Seeing the excitement and happiness on their faces made every moment worthwhile.",
        "The memories made here will stay with us forever."
      ]
    },

    contactHeading: "Contact Us",
    contactDescription:
      "Have a question, an idea, or want to get involved? We'd love to hear from you."
  },

  services: {
    title: "Our Services",
    subtitle:
      "Bringing the excitement of motorsport to life through extraordinary experiences.",
    eyebrow: "WHAT WE OFFER",
    heading: "Experiences That Make a Difference",
    description:
      "From the thrill of the track to meaningful community connections, our programs are designed to inspire and create lasting memories.",

    cards: [
      {
        title: "Racing School",
        image: "racingSchool",
        description:
          "An introduction to the excitement of racing through engaging, educational, and unforgettable motorsport experiences."
      },
      {
        title: "Interactive Car Shows",
        image: "carShow",
        description:
          "Bringing incredible vehicles and passionate enthusiasts together for interactive events that inspire joy and connection."
      },
      {
        title: "Personalized Motorsport Experiences",
        image: "experiences",
        description:
          "Creating unique motorsport moments tailored to the interests and circumstances of individual children and families."
      }
    ],

    ctaTitle: "Ready to Make a Difference?",
    ctaDescription:
      "Join us in creating meaningful memories through the power of motorsport.",
    ctaButton: "Contact Us"
  },

  team: {
    title: "Meet the Team",
    subtitle:
      "Driven by passion, united by purpose, and committed to making a difference.",
    eyebrow: "THE PEOPLE BEHIND THE MISSION",
    heading: "Driven by Purpose",
    description:
      "Our team brings together a love for motorsport and a shared commitment to serving children, families, and our community.",

    members: [
      {
        name: "James Lyon",
        role: "Founder & Director",
        image: "james",
        description:
          "Leading the Lyon Motorsport mission with a passion for racing, meaningful experiences, and community impact.",
        tags: ["Leadership", "Motorsport", "Community"]
      },
      {
        name: "Claire Henderson",
        role: "Head of Operations",
        image: "claire",
        description:
          "Helping bring our mission to life through thoughtful planning, coordination, and a dedication to families.",
        tags: ["Operations", "Events", "Outreach"]
      },
      {
        name: "Tom Riley",
        role: "Race Experience Coordinator",
        image: "tom",
        description:
          "Creating memorable on-track and off-track experiences that bring excitement and joy to participants.",
        tags: ["Racing", "Experiences", "Safety"]
      }
    ],

    stats: [
      { value: "20+", label: "Years of Experience" },
      { value: "500+", label: "Children Supported" },
      { value: "100%", label: "Volunteer-Powered Passion" }
    ]
  },

  gallery: {
    title: "Our Gallery",
    subtitle:
      "Take a look at the incredible experiences, memorable moments, and people behind Lyon Motorsport.",
    heading: "Moments That Matter",
    description:
      "Every photograph tells a story. Explore some of the moments that make our mission so meaningful.",

    categories: [
      "All Photos",
      "Events",
      "Racing",
      "Track Days",
      "Charity"
    ],

    // Add as many photos as you want here.
    // category must match one of the filters above.
    items: [
      { title: "On the Track", category: "Racing", image: "gallery1" },
      { title: "Community Car Show", category: "Events", image: "gallery2" },
      { title: "Racing Memories", category: "Track Days", image: "gallery3" },
      { title: "A Special Day", category: "Charity", image: "gallery4" },
      { title: "The Starting Line", category: "Racing", image: "gallery5" },
      { title: "Sharing the Experience", category: "Events", image: "gallery6" },
      { title: "Trackside Moments", category: "Track Days", image: "gallery7" },
      { title: "Making Memories", category: "Charity", image: "gallery8" },
      { title: "Motorsport Passion", category: "Racing", image: "gallery9" },
      { title: "Community Together", category: "Events", image: "gallery10" },
      { title: "Behind the Wheel", category: "Track Days", image: "gallery11" },
      { title: "Driven by Purpose", category: "Charity", image: "gallery12" }
    ],

    ctaTitle: "Be Part of the Story",
    ctaDescription:
      "Help us create the next unforgettable moment.",
    ctaButton: "Get in Touch"
  },

  involved: {
    title: "Get Involved",
    subtitle:
      "Your support can help make incredible experiences possible.",

    heading: "Help Us Drive Change",
    description:
      "Whether you want to volunteer, become a partner, support an event, or simply learn more, there is a place for you at Lyon Motorsport.",

    opportunities: [
      {
        icon: "♥",
        title: "Volunteer",
        description:
          "Contribute your time and talents to help create special experiences."
      },
      {
        icon: "★",
        title: "Become a Partner",
        description:
          "Collaborate with us to bring meaningful motorsport experiences to life."
      },
      {
        icon: "◆",
        title: "Support Our Mission",
        description:
          "Help us make more unforgettable moments possible for children and families."
      }
    ],

    messageTitle: "Send a Message",
    messageDescription:
      "Questions, ideas, or opportunities to collaborate? Reach out to our team.",
    callout:
      "Together, we can use the power of motorsport to create something truly special."
  }
};

// All website image locations are managed here.
// Replace each URL with an original filename such as:
// "images/home-hero.jpg"

const IMAGES = {
  hero: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1800&q=85",
  corvette: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1100&q=85",
  family: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=1100&q=85",

  racingSchool: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1100&q=85",
  carShow: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1100&q=85",
  experiences: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1100&q=85",

  james: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=700&q=85",
  claire: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=700&q=85",
  tom: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=700&q=85",

  gallery1: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1000&q=85",
  gallery2: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1000&q=85",
  gallery3: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1000&q=85",
  gallery4: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=1000&q=85",
  gallery5: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?w=1000&q=85",
  gallery6: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=1000&q=85",
  gallery7: "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?w=1000&q=85",
  gallery8: "https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?w=1000&q=85",
  gallery9: "https://images.unsplash.com/photo-1485291571150-772bcfc10da5?w=1000&q=85",
  gallery10: "https://images.unsplash.com/photo-1493238792000-8113da705763?w=1000&q=85",
  gallery11: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1000&q=85",
  gallery12: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1000&q=85"
};
