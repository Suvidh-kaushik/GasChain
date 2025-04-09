"use client"

import React from "react"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Clock, FileCheck, Lock, Sparkles, UserCheck, Wallet } from "lucide-react"

export function Benefits() {
  const consumerRef = useRef(null)
  const providerRef = useRef(null)
  const isConsumerInView = useInView(consumerRef, { once: true, amount: 0.3 })
  const isProviderInView = useInView(providerRef, { once: true, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="benefits" className="py-20 md:py-32 bg-gradient-to-b from-black to-purple-950/20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
              Benefits for Everyone
            </span>
          </h2>
          <p className="text-xl text-gray-300">
            GasChain creates value for both consumers and gas providers through our innovative blockchain solution.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Consumer Benefits */}
          <div>
            <motion.h3
              className="text-2xl font-bold mb-8 flex items-center gap-3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <UserCheck className="h-6 w-6 text-purple-400" />
              <span>For Consumers</span>
            </motion.h3>

            <motion.div
              ref={consumerRef}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate={isConsumerInView ? "visible" : "hidden"}
            >
              <BenefitCard
                icon={<Clock className="h-6 w-6 text-purple-400" />}
                title="Save Time"
                description="Switch providers in minutes instead of days or weeks."
                variants={itemVariants}
                gradient="from-purple-900/40 to-pink-900/40"
                border="border-purple-500/20"
              />

              <BenefitCard
                icon={<FileCheck className="h-6 w-6 text-purple-400" />}
                title="No Paperwork"
                description="Eliminate repetitive form filling and document submissions."
                variants={itemVariants}
                gradient="from-purple-900/40 to-pink-900/40"
                border="border-purple-500/20"
              />

              <BenefitCard
                icon={<Lock className="h-6 w-6 text-purple-400" />}
                title="Data Security"
                description="Your information is securely stored using blockchain encryption."
                variants={itemVariants}
                gradient="from-purple-900/40 to-pink-900/40"
                border="border-purple-500/20"
              />

              <BenefitCard
                icon={<Wallet className="h-6 w-6 text-purple-400" />}
                title="Provider Freedom"
                description="Switch providers easily to get the best rates and service."
                variants={itemVariants}
                gradient="from-purple-900/40 to-pink-900/40"
                border="border-purple-500/20"
              />
            </motion.div>
          </div>

          {/* Provider Benefits */}
          <div>
            <motion.h3
              className="text-2xl font-bold mb-8 flex items-center gap-3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Sparkles className="h-6 w-6 text-pink-400" />
              <span>For Gas Providers</span>
            </motion.h3>

            <motion.div
              ref={providerRef}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate={isProviderInView ? "visible" : "hidden"}
            >
              <BenefitCard
                icon={<Clock className="h-6 w-6 text-pink-400" />}
                title="Faster Onboarding"
                description="Onboard new customers in minutes with pre-verified KYC."
                variants={itemVariants}
                gradient="from-pink-900/40 to-purple-900/40"
                border="border-pink-500/20"
              />

              <BenefitCard
                icon={<FileCheck className="h-6 w-6 text-pink-400" />}
                title="Reduced Costs"
                description="Save on KYC processing and administrative expenses."
                variants={itemVariants}
                gradient="from-pink-900/40 to-purple-900/40"
                border="border-pink-500/20"
              />

              <BenefitCard
                icon={<Lock className="h-6 w-6 text-pink-400" />}
                title="Fraud Prevention"
                description="Blockchain verification reduces the risk of fraudulent applications."
                variants={itemVariants}
                gradient="from-pink-900/40 to-purple-900/40"
                border="border-pink-500/20"
              />

              <BenefitCard
                icon={<Wallet className="h-6 w-6 text-pink-400" />}
                title="Competitive Edge"
                description="Attract more customers with a seamless switching experience."
                variants={itemVariants}
                gradient="from-pink-900/40 to-purple-900/40"
                border="border-pink-500/20"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}


function BenefitCard({ icon, title, description, variants, gradient, border }) {
  return (
    <motion.div
      className={`relative overflow-hidden rounded-xl bg-gradient-to-br ${gradient} ${border} p-6 h-full`}
      variants={variants}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <div className="flex items-center gap-3 mb-3">
        {icon}
        <h4 className="text-lg font-semibold text-white">{title}</h4>
      </div>
      <p className="text-gray-300">{description}</p>

      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-500/5 rounded-full blur-3xl"></div>
    </motion.div>
  )
}

