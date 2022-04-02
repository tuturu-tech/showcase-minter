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
      { text: "Team", to: "team", icon: images.opensea },
      { text: "FAQ", to: "faq", icon: images.opensea },
    ],
    social: [
      {
        icon: (
          <img
            src={images.opensea}
            alt="opensea"
            className="h-10 w-10 p-2 text-[#28299f]"
          />
        ),
        link: "",
        alt: "opensea",
      },
      {
        icon: <RiTwitterFill className="h-10 w-10 p-2 text-[#28299f]" />,
        link: "https://twitter.com/babybossnft?s=21",
        alt: "twitter",
      },
      {
        icon: <RiInstagramLine className="h-10 w-10 p-2 text-[#28299f]" />,
        link: "https://instagram.com/babybossnft?utm_medium=copy_link",
        alt: "instagram",
      },
      {
        icon: <RiDiscordFill className="h-10 w-10 p-2 text-[#28299f]" />,
        link: "https://discord.com/invite/44pWT6fx8M",
        alt: "discord",
      },
    ],
  },
  faq: {
    title: "FAQ",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
    bullets: [
      {
        title: "How much is the cost to mint Babyboss?",
        description: (
          <p>
            There is going to be 3 tiers of price for the NFT
            <br />
            - S3L minting for the S3L holders at 0.055 + gas <br /> - Presale
            minting for the Whitelister and OG at 0.066 eth + gas
            <br />- Public minting for anyone at 0.088 eth + gas
          </p>
        ),
      },
      {
        title: "How much gas is needed to mint Babyboss?",
        description:
          "The gas fee is extremely volatile and can be vary depending on the time of theday. S3L holders will have 48 hours, Whitelister and OG will have 24 hours to mint their Babyboss. This way, you can monitor the gas fee and choose to mint when its most optimal.",
      },
      {
        title: "How many Babyboss can I mint per wallet?",
        description:
          "During presale, you will able to mint according to how many S3L NFT you owned. During the public sale, you will able to mint max 2 Babyboss per wallet.",
      },
      {
        title: "When will Babyboss launch?",
        description: (
          <p>
            - S3l Holders minting will go live on 9th April <br />
            - Presale minting will go live on 11th April
            <br />
            - Public sale will go live on 12th April
            <br />
          </p>
        ),
      },
      {
        title: "What is Babyboss?",
        description: (
          <p>
            Baby Boss S3L Club, is a collection of 3999 super adorable pixelated
            baby NFT’s that were born on the Ethereum blockchain.
            <br />
            <br />
            Own, play, earn and connect with the community from all over the
            world where we envision to create a place without a boundless
            communication regardless ofour differences.
            <br />
            <br />
            We want to represent a healthy and positive vibes community and
            built a longlasting presence in the metaverse.
          </p>
        ),
      },
      {
        title: "Where can I get more info about BabyBoss ?",
        description: (
          <p>
            Join our social media.{" "}
            <a
              href="https://discord.com/invite/44pWT6fx8M"
              target="_blank"
              rel="noreferrer"
              className="underline"
            >
              Discord
            </a>
            ,{" "}
            <a
              href="https://twitter.com/babybossnft?s=21"
              target="_blank"
              rel="noreferrer"
              className="underline"
            >
              Twitter
            </a>
            , &{" "}
            <a
              href="https://instagram.com/babybossnft?utm_medium=copy_link"
              target="_blank"
              rel="noreferrer"
              className="underline"
            >
              Instagram
            </a>
            . Let's connect!
          </p>
        ),
      },
    ],
  },
  collab: [
    {
      image: images.akunapie,
      alt: "Aku Napie",
      link: "https://opensea.io/collection/dooodle",
    },
    {
      image: images.badApe,
      alt: "Bad Ape",
      link: "https://app.pentas.io/user/badape",
    },
    {
      image: images.catverse,
      alt: "Catverse",
      link: "https://app.pentas.io/user/catverses",
    },
    {
      image: images.gamerPunks,
      alt: "Gamer Punks",
      link: "https://twitter.com/gamerpunks_nft?s=21&t=-iBoiXONXvROi92HRdzvwQ",
    },
    {
      image: images.Konfederasi,
      alt: "Konfederasi",
      link: "https://app.pentas.io/user/konfederasiNFT",
    },
    {
      image: images.pamiIzmail,
      alt: "Pamil Izmail",
      link: "https://opensea.io/collection/beauty-in-dreamland",
    },
    {
      image: images.RCN,
      alt: "Rich Cats Nation",
      link: "https://app.pentas.io/user/richcatsnation",
    },
    {
      image: images.RoachPunk,
      alt: "Roach Punk",
      link: "https://app.pentas.io/user/roachpunks",
    },
    {
      image: images.sanuri,
      alt: "Sanuri Zulkefli",
      link: "https://app.pentas.io/user/sanuri",
    },
  ],

  team: [
    {
      name: "Aleuto72",
      title: "Founder",
      description:
        "An experienced Trader who is well known in Malaysia and serve the army since his younger days. Also have been involved in cryptocurrency space for few years already. Currently one of the stongest & biggest supporter in PENTAS NFT platform. Creating this project with a goal to bring in more people into the NFT world and growing the community to benefit them all.",
      image: images.Aleuto,
      socials: {
        twitter: "https://twitter.com/uncletuah",
        instagram: "https://www.instagram.com/uncletuah",
      },
    },
    {
      name: "Nick",
      title: "Team Leader",
      description:
        "A wanderer in the metaverse and has been involved in the cryptocurrency space since 2016. Looking forward to making this project as a P2E to make the adoption of gamers more than ever before.",
      image: images.Nick,
      socials: {
        twitter: "https://twitter.com/mr_nick65",
        instagram: "https://www.instagram.com/nikhairul/",
      },
    },
    {
      name: "Akiboi",
      title: "Lead Artist",
      description:
        "An established architect, who is now with the Nasty Builders, a graduate from Oxford Brookes University who creates all the unique traits of the BabyBoss NFT, and also an advisor for a few other projects before.",
      image: images.Akiboi,
      socials: {
        twitter: "https://twitter.com/akiboiii",
        instagram: "https://www.instagram.com/akiboi.eth/",
      },
    },
    {
      name: "Karim",
      title: "Tech Dev",
      description:
        "Learning, experimenting and building in the web3 world. Excited to be a part of the web3 movement and evolution!",
      image: images.karim,
      socials: null,
    },
    {
      name: "Slushy",
      title: "Marketing",
      description:
        "I've been on discord for 6 years, love communicating and networking with other communities and influencers to help with marketing.",
      image: images.slushy,
      socials: null,
    },
    {
      name: "Danish",
      title: "Community Manager",
      description:
        "NFTs lover, gamer and love music. Love to interact with people and help the community. Involve with a few project to moderate and marketing",
      image: images.danish,
      socials: null,
    },
  ],
};
