import React, { useState, useRef } from "react";

import { useMintQuery } from "../queries";
import { Button, Modal } from "../lib/Primitives";
import AdminPanel from "./AdminPanel";
import content from "../content";
import hamburger from "../assets/images/hamburgerIcon.png";
import { WalletButton } from "../lib";
import Link from "react-scroll/modules/components/Link";
import { GiHamburgerMenu } from "react-icons/gi";

const Navigation = () => {
  const [active, setActive] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [height, setHeight] = useState("0px");
  const [adminModalOpen, setAdminModalOpen] = useState();
  const [{ isContractOwner, loaded }] = useMintQuery();

  const contentSpace = useRef(null);

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
    setHeight(menuOpen ? "0px" : `${contentSpace.current.scrollHeight}px`);
  };
  let temp = "w-2/4 sm:w-2/5 md:w-2/6 lg:w-3/12 xl:w-1/5";

  return (
    <div className="relative z-10 top-0 right-0 bg-transparent h-28 pt-2">
      <div className="flex flex-row justify-between items-center w-10/12 h-full mx-auto text-white">
        <p className="font-bold text-lg">Baby Boss</p>
        <button
          className="flex md:hidden w-10 h-10 items-center justify-center"
          onClick={toggleMenu}
        >
          <GiHamburgerMenu className="h-10 w-10" />
        </button>
        <div className="hidden md:flex flex-row h-full items-center justify-center">
          <div className="flex flex-row mr-6">
            {content.nav.links.map((item, index) => (
              <Link
                key={index}
                to={item.to}
                smooth={true}
                className="p-3 text-sm cursor-pointer hover:scale-110"
              >
                {item.text}
              </Link>
            ))}
          </div>
          <div className="flex-row mr-6 hidden lg:flex">
            {content.nav.social.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-white mr-2 w-8 h-8 flex items-center justify-center hover:ring-1 ring-white"
              >
                {item.icon}
              </a>
            ))}
          </div>
          <WalletButton className="pr-6 pl-6 pt-2 pb-2 w-50 bg-[#1e50ff] text-sm rounded-full hover:ring-2 ring-white text-white">
            Connect Wallet
          </WalletButton>
        </div>
      </div>
      <div className="relative w-10/12 xl:w-8/12 mx-auto">
        <div
          ref={contentSpace}
          style={{ maxHeight: `${height}` }}
          className="absolute top right-0 bg-[#28299f] shadow-lg text-white transition-max-height duration-700 ease-in-out overflow-hidden pl-5 pr-5"
        >
          <div className="flex flex-col justify-center mb-1 items-center pb-2 pt-2 text-md sm:text-lg">
            {isContractOwner && (
              <div className="m-8">
                <Button
                  className="uppercase bg-[#1e50ff] rounded-full hover:ring-2 ring-white font-[Helvetica_Neue] font-bold text-white"
                  onClick={() => setAdminModalOpen(true)}
                >
                  Admin Panel
                </Button>
                {adminModalOpen && (
                  <>
                    <Modal
                      open={adminModalOpen}
                      onClose={() => setAdminModalOpen(false)}
                    >
                      <AdminPanel />
                    </Modal>
                  </>
                )}
              </div>
            )}
            <WalletButton className="pr-6 pl-6 pt-2 pb-2 w-50 bg-[#1e50ff] text-sm rounded-full hover:ring-2 ring-white text-white">
              Connect Wallet
            </WalletButton>
            {content.nav.links.map((item, index) => (
              <Link
                key={index}
                to={item.to}
                smooth={true}
                className="p-3 text-sm cursor-pointer hover:scale-110"
              >
                {item.text}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
