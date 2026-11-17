
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
      eyebrow: "",
      title: "The Difference We Make",
      description:
        "A few words about the impact of unforgettable experiences.",
      quotes: [
        "This is the first time he has smiled all week.",
        "An experience our family will never forget.",
        "I am living my dream right now.",
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
      "Every experience we offer is designed to put a smile on a child's face and create memories that last a lifetime.",
    eyebrow: "WHAT WE OFFER",
    heading: "",
    description:
      "Lyon Motorsport partners with Primary Children’s Hospital and Intermountain Health to deliver a range of unforgettable motorsport experiences for children facing medical challenges. From sitting in a real race car to meeting professional drivers, every moment is crafted with care.",

    cards: [
      {
        title: "Racing School",
        image: "racingSchool",
        description:
          "We bring youth undergoing medical treatment to West Desert Raceway for an unforgettable day at the track. They get the chance to ride alongside our drivers in a real race car, learn how to race with go-karts, drive immersive racing simulators, and enjoy watching professional races with lunch and refreshments."
      },
      {
        title: "Interactive Car Shows",
        image: "carShow",
        description:
          "We bring race cars, drivers, and the excitement of motorsports directly to children's hospitals or organized events for children."
      },
      {
        title: "Personalized Motorsport Experiences",
        image: "experiences",
        description:
          "Our personalized experiences accommodate children of all abilities and health conditions, ensuring each activity meets their individual needs and comfort levels. From adapted ride-alongs to VIP tours, behind-the-scenes access, and racing simulators, we strive to make the excitement of motorsports accessible to the whole family."
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
    heading: "",
    description:
      "Behind every unforgettable experience is a dedicated team of motorsport professionals, childcare specialists, and event coordinators who pour their hearts into every moment. We come from different backgrounds, but we share the same belief: every child deserves to feel extraordinary.",

    members: [
      {
        name: "Connor Lyon",
        role: "Founder & Director",
        image: "Connor",
        description:
          "Leading the Lyon Motorsport mission with a passion for racing, meaningful experiences, and community impact.",
        tags: [""]
      },
      {
        name: "Craig Lyon",
        role: "Head of Operations",
        image: "claire",
        description:
          "Helping bring our mission to life through thoughtful planning, coordination, and a dedication to families.",
        tags: [""]
      },
      {
        name: "Gunner Smyth",
        role: "Race Experience Coordinator",
        image: "tom",
        description:
          "Creating memorable on-track and off-track experiences that bring excitement and joy to participants.",
        tags: [""]
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
      "A glimpse into the moments, memories, and magic that Lyon Motorsport creates for children and families every year.",
    heading: "Moments That Matter",
    description:
      "Every photograph tells a story. Explore some of the moments that make our mission so meaningful.",

      // Add quotes to add new catagory button to gallery
    categories: [
      "All Photos",
      "Community",
      "Track",
      
    ],

    // Add as many photos as you want here.
    // category must match one of the filters above.
    items: [
      { title: "On the Track", category: "Community", image: "images/babycar.jpg" },
      { title: "Community Car Show", category: "Community", image: "images/helmetkid.png" },
      { title: "Racing Memories", category: "Community", image: "images/track.png" },
      { title: "A Special Day", category: "Community", image: "images/gallery1.PNG" },
      { title: "The Starting Line", category: "Community", image: "images/newhero.jpg" },
      { title: "Sharing the Experience", category: "Community", image: "images/gallery2.PNG" },
      { title: "Trackside Moments", category: "Community", image: "images/gallery.3.jfif" },
      { title: "Motorsport Passion", category: "Community", image: "images/gallery6.jpg" },
      { title: "Making Memories", category: "Community", image: "images/gallery4.jfif" },
      { title: "Community Together", category: "Track", image: "images/gallery7.jpg" },
      { title: "Behind the Wheel", category: "Community", image: "images/gallery5.jfif" },
      { title: "Driven by Purpose", category: "Community", image: "images/kidcar.jpg" }
    ],

    ctaTitle: "Be Part of the Story",
    ctaDescription:
      "Help us create the next unforgettable moment.",
    ctaButton: "Get in Touch"
  },

  involved: {
    title: "Get Involved",
    subtitle:
      "Every contribution — big or small — gives a child an experience they'll never forget.",

    heading: "Make a Difference",
    description:
      "Whether you're looking to fund an unforgettable racing experience, partner with our mission, or connect a child with our program, we appreciate any contribution.",

    opportunities: [
      {
        icon: "♥",
        title: "Donate an Experience",
        description:
          "Your donation directly covers the cost of a child’s experience with Lyon Motorsport, helping a child enjoy an unforgettable day filled with excitement, confidence, and accomplishment."
      },
      {
        icon: "★",
        title: "Partner with Lyon Motorsport",
        description:
          "Your sponsorship helps us develop our racing team and tailor our program to create meaningful experiences for children facing medical challenges. In recognition of your support, your business will receive a decal on our race cars and visibility through our social media channels, connecting your brand with a mission that makes a difference."
      },
      {
        icon: "◆",
        title: "Refer a Child",
        description:
          "Bring the excitement of motorsports to your school, hospital, charity, or community event! Lyon Motorsport partners with organizations to connect children with race cars and drivers, creating memorable experiences that inspire confidence and spark joy."
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
  hero: "images/newhero.jpg",
  corvette: "images/mindblown.png",
  family: "images/ourwhy.jpg",

  racingSchool: "images/camphoto.png",
  carShow: "images/kidcar.jpg",
  experiences: "images/personalizedexp.jpg",

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
