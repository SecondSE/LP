interface caseData {
  title: string;
  description1: string;
  description2: string;
  results: string;
  resultList: string[];
  images: string[];
}

const caseStudies: caseData[] = [
  {
    title: "SOUNDMINT LABS NFT.NYC LAUNCH",
    description1:
      "SoundMint is a web3 Generative Music Platform. For their upcoming NFT drop with San Holo and launch into New York City, they wanted to throw something big.",
    description2:
      "We threw an intimate launch party featuring immersive & interactive art installations as well as live DJ sets from San Holo and other SoundMint artists.",
    results: "RESULTS",
    resultList: [
      "200+ attendees",
      "1M+ social media mentions",
      "Press release from Forbes",
    ],
    images: [
      "/imgs/dj-1.webp",
      "/imgs/dj-2.webp",
      "/imgs/green-doorway.webp",
      "/imgs/sanholo-stage.webp",
    ],
  },
  {
    title: "THE NATE GIFT EXPRESS",
    description1:
      "The Gift Hunt was nate's - a NYC fintech startup - holiday campaign which included a pop-up retail store in the heart of SoHo.",
    description2:
      "Holiday wishlists were created within the nate app that were then brought to life within the storefront. Attendees were able to use their phones for a seamless, touchless, shopping experience.",
    results: "RESULTS",
    resultList: [
      "2500+ attendees",
      "96% increase in daily accounts created",
      "1,700% increase in daily purchases made",
      "990% increase in daily purchases made",
      "35M+ social media mentions",
      "Press release from BizBash & Variety",
    ],
    images: [
      "/imgs/nate-room.webp",
      "/imgs/nate-app.webp",
      "/imgs/nate-store.webp",
      "/imgs/nate-treats.webp",
    ],
  },
  {
    title: "THE NATE GIFT HUNT",
    description1:
      "The Gift Hunt was nate's - a NYC fintech startup - experiential launch activation celebrating all that Manhattan has to offer and powered by nate's universal shopping features.",
    description2:
      "Attendees explored 4 different locations throughout Manhattan, were treated to yummy bites along the way, and learned how to use nate's in-app features.",
    results: "RESULTS",
    resultList: [
      "1,500+ attendees",
      "2,000+ app downloads",
      "1,800% increase in average minutes spent in-app",
      "990% increase in daily purchases made",
      "10M+ social media mentions",
      "Press release from BizBash",
    ],
    images: [
      "/imgs/nate-clue.webp",
      "/imgs/nate-hut.webp",
      "/imgs/nate-map.webp",
      "/imgs/nate-tv.webp",
    ],
  },
];

export default caseStudies;
