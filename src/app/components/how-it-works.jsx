"use client"

import React from "react"
import { motion } from "framer-motion"
import { FileCheck, UserCheck, Wallet, ArrowRight } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      icon: <FileCheck className="h-8 w-8 text-white" />,
      title: "Complete Initial KYC",
      description: "Register on GasChain and complete your KYC verification once with your current gas provider.",
    },
    {
      icon: <UserCheck className="h-8 w-8 text-white" />,
      title: "Get Blockchain Verification",
      description: "Your KYC data is securely stored on the blockchain with a unique verification hash.",
    },
    {
      icon: <Wallet className="h-8 w-8 text-white" />,
      title: "Switch Providers Easily",
      description: "When switching providers, simply share your verification hash for instant approval.",
    },
    {
      icon: <ArrowRight className="h-8 w-8 text-white" />,
      title: "Enjoy Seamless Service",
      description: "Start receiving service from your new provider without delays or paperwork.",
    },
  ]

  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-gradient-to-b from-blue-950/20 to-black relative">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              How GasChain Works
            </span>
          </h2>
          <p className="text-xl text-gray-300">
            Our blockchain solution simplifies the gas provider switching process in just a few steps.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 border border-blue-500/20 rounded-2xl p-8 h-full relative overflow-hidden">
                <motion.div
                  className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center font-bold text-xl"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 10,
                    delay: 0.3 + index * 0.2,
                  }}
                >
                  {index + 1}
                </motion.div>

                <div className="mb-6 mt-2 w-16 h-16 rounded-xl bg-gradient-to-br from-blue-600/50 to-purple-600/50 flex items-center justify-center">
                  {step.icon}
                </div>

                <h3 className="text-xl font-semibold mb-3 text-white">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>

                {index < steps.length - 1 && (
                  <motion.div
                    className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 text-blue-500"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.2 }}
                  >
                    <ArrowRight className="h-8 w-8" />
                  </motion.div>
                )}

                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

