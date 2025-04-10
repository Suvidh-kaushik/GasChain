"use client"

import React from "react"
import { Blocks, Lock, Globe, Zap } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export function Features() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

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
        stiffness: 50,
        damping: 10,
      },
    },
  }

  return (
    <section id="features" className="py-20 bg-black/80 relative">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
              Revolutionary Features
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our platform combines cutting-edge blockchain technology with user-friendly interfaces to create the
            ultimate Web3 experience.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          <motion.div
            className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
            variants={item}
            whileHover={{
              y: -5,
              transition: { duration: 0.2 },
            }}
          >
            <div className="w-12 h-12 bg-purple-900/50 rounded-lg flex items-center justify-center mb-4">
              <Blocks className="h-6 w-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Decentralized Storage</h3>
            <p className="text-gray-400">
              Store your data securely across a distributed network with no single point of failure.
            </p>
          </motion.div>

          <motion.div
            className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
            variants={item}
            whileHover={{
              y: -5,
              transition: { duration: 0.2 },
            }}
          >
            <div className="w-12 h-12 bg-blue-900/50 rounded-lg flex items-center justify-center mb-4">
              <Lock className="h-6 w-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Enhanced Security</h3>
            <p className="text-gray-400">
              Military-grade encryption and blockchain verification for all your transactions.
            </p>
          </motion.div>

          <motion.div
            className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-green-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10"
            variants={item}
            whileHover={{
              y: -5,
              transition: { duration: 0.2 },
            }}
          >
            <div className="w-12 h-12 bg-green-900/50 rounded-lg flex items-center justify-center mb-4">
              <Globe className="h-6 w-6 text-green-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Global Access</h3>
            <p className="text-gray-400">Connect from anywhere in the world with no restrictions or limitations.</p>
          </motion.div>

          <motion.div
            className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-yellow-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/10"
            variants={item}
            whileHover={{
              y: -5,
              transition: { duration: 0.2 },
            }}
          >
            <div className="w-12 h-12 bg-yellow-900/50 rounded-lg flex items-center justify-center mb-4">
              <Zap className="h-6 w-6 text-yellow-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
            <p className="text-gray-400">Experience blazing fast transactions with our optimized Layer 2 solutions.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

