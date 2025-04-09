"use client"

import React from "react"
import { useState } from "react"
import Image from "next/image"
import { ChevronDown, Wallet } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function Web3Hero() {
  const [selectedRole, setSelectedRole] = useState("Select your role")

  const handleConnectWallet = () => {
    alert("Wallet connection functionality would be implemented here")
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  }

  const buttonHover = {
    scale: 1.05,
    transition: { type: "spring", stiffness: 400, damping: 10 },
  }

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-radial from-purple-900/20 to-transparent"></div>

      <motion.div
        className="absolute top-20 -left-24 w-72 h-72 bg-purple-600/30 rounded-full filter blur-3xl"
        animate={{
          x: [0, 20, 0],
          y: [0, 15, 0],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 8,
          ease: "easeInOut",
        }}
      ></motion.div>

      <motion.div
        className="absolute bottom-10 -right-20 w-80 h-80 bg-blue-600/20 rounded-full filter blur-3xl"
        animate={{
          x: [0, -20, 0],
          y: [0, -15, 0],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 10,
          ease: "easeInOut",
        }}
      ></motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-12"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-500 to-green-400"
            variants={item}
          >
            The Future of Web3 Starts Here
          </motion.h1>

          <motion.p className="text-xl text-gray-300 mb-8" variants={item}>
            Join the decentralized revolution and take control of your digital assets. Connect your wallet, select your
            role, and start building the future.
          </motion.p>

          <motion.div
            className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-md mx-auto"
            variants={item}
          >
            <motion.div whileHover={buttonHover}>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                  size={10}
                    variant="outline"
                    className="w-full md:w-auto border-gray-700 bg-black/50 backdrop-blur-sm hover:bg-black/70 text-white flex justify-between"
                  >
                    {selectedRole}
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-gray-900 border-gray-800 text-white">
                  <DropdownMenuItem onClick={() => setSelectedRole("Developer")} className={undefined} inset={undefined}>Developer</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSelectedRole("Investor")} className={undefined} inset={undefined}>Investor</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSelectedRole("Creator")} className={undefined} inset={undefined}>Creator</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSelectedRole("Trader")} className={undefined} inset={undefined}>Trader</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </motion.div>

            <motion.div whileHover={buttonHover} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={handleConnectWallet}
                className="w-full md:w-auto bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium" variant={undefined} size={undefined}              >
                <Wallet className="mr-2 h-4 w-4" /> Connect Wallet
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative mx-auto max-w-4xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.8,
            duration: 0.8,
            type: "spring",
            stiffness: 100,
          }}
        >
          <div className="relative rounded-xl overflow-hidden border border-gray-800 shadow-2xl">
            <Image
              src="/placeholder.svg?height=600&width=1000"
              width={1000}
              height={600}
              alt="Web3 Platform Dashboard"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
          </div>

          <motion.div
            className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 rounded-full text-white font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            Powered by blockchain technology
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

