"use client"

import React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Flame, Github, Twitter, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black border-t border-teal-900/30 py-12 md:py-16">
      <div className="container mx-auto px-4">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-500 to-blue-600 flex items-center justify-center">
                <Flame className="h-5 w-5 text-white" />
              </div>
              <span className="font-bold text-lg">GasChain</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Revolutionizing KYC verification for gas providers through blockchain technology.
            </p>
            <div className="flex gap-4">
              <motion.div whileHover={{ y: -3, transition: { duration: 0.2 } }}>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Github className="h-5 w-5" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ y: -3, transition: { duration: 0.2 } }}>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="h-5 w-5" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ y: -3, transition: { duration: 0.2 } }}>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ y: -3, transition: { duration: 0.2 } }}>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Mail className="h-5 w-5" />
                </Link>
              </motion.div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white">Product</h3>
            <ul className="space-y-2">
              <motion.li whileHover={{ x: 5, transition: { duration: 0.2 } }}>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Features
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5, transition: { duration: 0.2 } }}>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  How It Works
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5, transition: { duration: 0.2 } }}>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Pricing
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5, transition: { duration: 0.2 } }}>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Documentation
                </Link>
              </motion.li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white">Resources</h3>
            <ul className="space-y-2">
              <motion.li whileHover={{ x: 5, transition: { duration: 0.2 } }}>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Blog
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5, transition: { duration: 0.2 } }}>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Tutorials
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5, transition: { duration: 0.2 } }}>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Support
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5, transition: { duration: 0.2 } }}>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  API Documentation
                </Link>
              </motion.li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white">Company</h3>
            <ul className="space-y-2">
              <motion.li whileHover={{ x: 5, transition: { duration: 0.2 } }}>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  About Us
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5, transition: { duration: 0.2 } }}>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Careers
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5, transition: { duration: 0.2 } }}>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Privacy Policy
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5, transition: { duration: 0.2 } }}>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Terms of Service
                </Link>
              </motion.li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          className="border-t border-teal-900/30 mt-12 pt-6 text-center text-gray-500 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <p>© {new Date().getFullYear()} GasChain. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}

