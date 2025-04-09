"use client"

import React from "react"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ClipboardList, Clock, FileText, Frown, Repeat } from "lucide-react"

export function Problem() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

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
    <section id="problem" className="py-20 md:py-32 bg-gradient-to-b from-black to-teal-950/20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-orange-500">
              The Problem
            </span>
          </h2>
          <p className="text-xl text-gray-300">
            The current KYC process for switching gas providers is inefficient, time-consuming, and frustrating for
            consumers.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <ProblemCard
            icon={<FileText className="h-8 w-8 text-red-400" />}
            title="Repetitive Paperwork"
            description="Consumers must fill out the same KYC forms repeatedly when switching between gas providers."
            variants={itemVariants}
          />

          <ProblemCard
            icon={<Clock className="h-8 w-8 text-orange-400" />}
            title="Time Consuming"
            description="The verification process can take days or weeks, delaying access to essential services."
            variants={itemVariants}
          />

          <ProblemCard
            icon={<ClipboardList className="h-8 w-8 text-yellow-400" />}
            title="Manual Verification"
            description="Each provider independently verifies the same information, creating redundant work."
            variants={itemVariants}
          />

          <ProblemCard
            icon={<Repeat className="h-8 w-8 text-red-400" />}
            title="Duplicate Processes"
            description="Consumers must restart the entire KYC process with each new provider, regardless of previous verifications."
            variants={itemVariants}
          />

          <ProblemCard
            icon={<Frown className="h-8 w-8 text-orange-400" />}
            title="Poor User Experience"
            description="The frustrating process leads to negative customer experiences and provider switching hesitation."
            variants={itemVariants}
          />

          <motion.div
            className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-red-950/40 to-orange-950/40 border border-red-500/20 p-8 h-full flex items-center justify-center"
            variants={itemVariants}
          >
            <div className="text-center">
              <p className="text-2xl font-bold text-red-400 mb-2">85%</p>
              <p className="text-gray-300">
                of consumers find the current KYC process frustrating when switching providers
              </p>
            </div>

            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-red-500/10 rounded-full blur-3xl"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}


function ProblemCard({ icon, title, description, variants }) {
  return (
    <motion.div
      className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-red-950/40 to-orange-950/40 border border-red-500/20 p-8 h-full"
      variants={variants}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
      <p className="text-gray-300">{description}</p>

      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-red-500/5 rounded-full blur-3xl"></div>
    </motion.div>
  )
}

