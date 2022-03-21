// eslint-disable-next-line import/no-anonymous-default-export
import { images } from "../constants";
import {
  RiFacebookFill,
  RiGoogleFill,
  RiTwitterFill,
  RiInstagramLine,
  RiDiscordFill,
} from "react-icons/ri";

export default {
  nav: {
    links: [
      { text: "Home", to: "home", icon: images.discord },
      { text: "Roadmap", to: "roadmap", icon: images.twitter },
      { text: "Mint", to: "mint", icon: images.opensea },
      { text: "Teamaz", to: "team", icon: images.opensea },
      { text: "FAQ", to: "faq", icon: images.opensea },
    ],
    social: [
      {
        icon: <RiGoogleFill className="h-10 w-10 p-2 text-[#28299f]" />,
        link: "",
        alt: "google",
      },
      {
        icon: <RiFacebookFill className="h-10 w-10 p-2 text-[#28299f]" />,
        link: "",
        alt: "facebook",
      },
      {
        icon: <RiTwitterFill className="h-10 w-10 p-2 text-[#28299f]" />,
        link: "",
        alt: "twitter",
      },
      {
        icon: <RiInstagramLine className="h-10 w-10 p-2 text-[#28299f]" />,
        link: "",
        alt: "instagram",
      },
      {
        icon: <RiDiscordFill className="h-10 w-10 p-2 text-[#28299f]" />,
        link: "",
        alt: "discord",
      },
    ],
  },
  faq: {
    title: "OUR FAQS",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
    bullets: [
      {
        title: "How much Babyboss NFT cost ?",
        description: (
          <p>
            Theres gonna be 3 tier of price for the NFT
            <br />
            <ul>
              <li>- S3L minting for the S3L holders at 0.055 + gas</li>
              <li>
                - Presale minting for the Whitelister and OG at 0.066 eth + gas
              </li>
              <li>- Public minting for anyone at 0.077 eth + gas</li>
            </ul>
          </p>
        ),
      },
      {
        title: "How much I need to pay to mint Babyboss ?",
        description:
          "The gas fee are extremely volatile and can be vary depending on the time of the day. S3L holders will have 48 hours, Whitelister and OG will have 24 hours to mint their Babyboss. This way, you can monitor the gas fee and choose to mint when its most optimal.",
      },
      {
        title: "How many Babyboss I can mint per wallet ?",
        description:
          "During presale, you will able to mint according to how many S3L NFT you are holding. During the public sales, you will able to mint max 2 Babyboss per wallet.",
      },
      {
        title: "When will Babyboss launch ?",
        description: (
          <p>
            - S3l Holders minting will go live on 25 march <br />
            - Presale minting will go live on 27 march
            <br />
            - Public sale will go live on 28 march
            <br />
          </p>
        ),
      },
      {
        title: "What is Babyboss ?",
        description: (
          <p>
            Baby Boss S3L Club, is a collections of 3999 super adorable
            pixelated baby NFT's who are a born on the Ethereum blockchain.
            <br />
            <br />
            Own, play, earn and connect with the community from all over the
            world where we envision to create a place without a boundless
            communication regardless of our differences.
            <br />
            <br />
            We want to represent a healthy and positive vibes community and
            built a long lasting presence in the metaverse.
          </p>
        ),
      },
    ],
  },
  team: [
    {
      name: "Aleuto72",
      title: "Founder",
      description:
        "Serve the army since his younger days and an experienced FX Trader who is well known in Malaysia. Also been in cryptocurrency space for few years already. Creating this project with a goal to bringing in more people into the NFT world and growing the community to benefit them all.",
      image: images.Aleuto,
      socials: {
        facebook: "",
        twitter: "",
        instagram: "",
      },
    },
    {
      name: "Akiboi",
      title: "Co-Founder/Lead Artist",
      description:
        "An establish architect, who is now with the Nasty Builders, a graduate of Oxford Brookes University who creates all the unique traits of the Babyboss and also an advisor for few others project before.",
      image: images.Akiboi,
      socials: {
        facebook: "",
        twitter: "",
        instagram: "",
      },
    },
    {
      name: "Nick",
      title: "Co-Founder",
      description:
        "A wonderer in the metaverse and been involve in the cryptocurrency space since 2016. Looking forward to make this project as a P2E to make adoption of gamers more than ever before.",
      image: images.Nick,
      socials: {
        facebook: "",
        twitter: "",
        instagram: "",
      },
    },
  ],
};
