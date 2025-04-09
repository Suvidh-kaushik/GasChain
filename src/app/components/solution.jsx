"use client"

import React from "react"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { Database, Lock, Shield, Zap } from "lucide-react"

export function Solution() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section id="solution" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-teal-950/20 to-blue-950/20"></div>
      <motion.div
        className="absolute top-20 -left-20 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl"
        animate={{
          x: [0, 30, 0],
          y: [0, 20, 0],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 15,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500">
              Our Solution: GasChain
            </span>
          </h2>
          <p className="text-xl text-gray-300">
            A blockchain-based platform that securely stores KYC information, allowing consumers to verify once and
            switch providers seamlessly.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 bg-gradient-to-br from-black to-teal-950/30 p-1 rounded-2xl border border-teal-500/20 shadow-2xl shadow-teal-500/10 overflow-hidden">
              <Image
                src="/placeholder.svg?height=600&width=800"
                width={800}
                height={600}
                alt="GasChain Blockchain Solution"
                className="rounded-xl w-full h-auto"
              />

              {/* Animated blockchain connection lines */}
              <svg className="absolute inset-0 w-full h-full z-20 opacity-70" viewBox="0 0 800 600">
                <motion.path
                  d="M200,150 C300,50 500,250 600,150"
                  stroke="url(#blueGradient)"
                  strokeWidth="2"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                />
                <motion.path
                  d="M150,300 C250,400 550,200 650,300"
                  stroke="url(#tealGradient)"
                  strokeWidth="2"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                  transition={{ duration: 1.5, delay: 0.8 }}
                />
                <motion.path
                  d="M200,450 C350,350 450,350 600,450"
                  stroke="url(#blueGradient)"
                  strokeWidth="2"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                  transition={{ duration: 1.5, delay: 1.1 }}
                />
                <defs>
                  <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#0ea5e9" />
                    <stop offset="100%" stopColor="#2563eb" />
                  </linearGradient>
                  <linearGradient id="tealGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#14b8a6" />
                    <stop offset="100%" stopColor="#0ea5e9" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Floating blockchain nodes */}
            <BlockchainNode
              className="absolute -top-6 -left-6 bg-teal-900/80 border-teal-500/30"
              label="KYC Data"
              delay={0}
            />

            <BlockchainNode
              className="absolute top-1/3 -right-6 bg-blue-900/80 border-blue-500/30"
              label="Verified"
              delay={0.2}
            />

            <BlockchainNode
              className="absolute -bottom-6 left-1/4 bg-teal-900/80 border-teal-500/30"
              label="Secure"
              delay={0.4}
            />
          </motion.div>

          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <SolutionFeature
              icon={<Database className="h-8 w-8 text-teal-400" />}
              title="Decentralized KYC Storage"
              description="Customer information is securely stored on the blockchain, accessible only with proper authorization."
              delay={0.1}
            />

            <SolutionFeature
              icon={<Lock className="h-8 w-8 text-blue-400" />}
              title="One-Time Verification"
              description="Complete the KYC process once, and use your blockchain verification for all future provider switches."
              delay={0.3}
            />

            <SolutionFeature
              icon={<Zap className="h-8 w-8 text-teal-400" />}
              title="Instant Provider Switching"
              description="Switch gas providers in minutes instead of days by simply sharing your blockchain verification hash."
              delay={0.5}
            />

            <SolutionFeature
              icon={<Shield className="h-8 w-8 text-blue-400" />}
              title="Enhanced Security"
              description="Blockchain technology ensures your data cannot be tampered with or fraudulently accessed."
              delay={0.7}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}


function BlockchainNode({ className, label, delay }) {
  return (
    <motion.div
      className={`w-16 h-16 rounded-xl flex items-center justify-center backdrop-blur-sm ${className}`}
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        delay,
        type: "tween",
        stiffness: 200,
        damping: 15,
        repeat: Number.POSITIVE_INFINITY,
        duration: 5 + delay,
        ease: "easeInOut",
      }}
      animate={{
        y: [0, -10, 0],
        rotate: [0, 5, 0],
      }}
      // transition={{
      //   repeat: Number.POSITIVE_INFINITY,
      //   duration: 5 + delay,
      //   ease: "easeInOut",
      // }}
    >
      <div className="text-white font-mono text-xs">{label}</div>
    </motion.div>
  )
}

function SolutionFeature({ icon, title, description, delay }) {
  return (
    <motion.div
      className="flex gap-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
    >
      <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-teal-900/50 to-blue-900/50 flex items-center justify-center border border-teal-500/20">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </motion.div>
  )
}

