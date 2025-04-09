"use client"

import React from "react"

import { useState } from "react"
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "../../components/ui/resizable-navbar";
import DialogMainContent from "./dialog-main-content";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "../../components/ui/dialog"

import {Button} from "../../components/ui/button"

export function Header() {
  const navItems = [
    {
      name: "Features",
      link: "#features",
    },
    {
      name: "Pricing",
      link: "#pricing",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];
 
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
      <Navbar className={"fixed w-10/12 mx-auto top-10"}>
        {/* Desktop Navigation */}
        <NavBody className={""} visible={true}>
          <NavbarLogo />
          <NavItems items={navItems} className={""} onItemClick={""}/>
          <div className="flex items-center gap-4">
              <Dialog>    
                <NavbarButton className={"bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white group"} href={""} variant="primary">
                  <DialogTrigger>
                    Connect to Wallet
                  </DialogTrigger>
                  <DialogContent className="bg-black text-white h-56">
                      <DialogMainContent/>
                  </DialogContent>
                </NavbarButton>
              </Dialog>
                
          </div>
        </NavBody>
 
        {/* Mobile Navigation */}
        <MobileNav className={""} visible={true}>
          <MobileNavHeader className={""}>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            />
          </MobileNavHeader>
 
          <MobileNavMenu
          className={""}
            isOpen={mobileMenuOpen}
            onClose={() => setMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              <NavbarButton
                href={""}
                onClick={() => setMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Login
              </NavbarButton>
              <NavbarButton
                onClick={() => setMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
                href={""}
              >
                Book a call
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
  )
}

