"use client"

import { motion } from "framer-motion"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "../../components/ui/button"
import Image from "next/image"

export function Hero() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-teal-900/20 to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-block px-4 py-2 bg-teal-900/30 backdrop-blur-sm rounded-full text-teal-400 text-sm font-medium"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Revolutionizing Gas Provider KYC
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500">
                Seamless KYC Verification
              </span>{" "}
              for Gas Providers
            </motion.h1>

            <motion.p
              className="text-xl text-gray-300 max-w-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              GasChain eliminates repetitive KYC processes when switching gas providers. Verify once, use anywhere with
              secure blockchain technology.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <Button className="bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white px-8 py-6 h-auto text-lg group">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                className="border-teal-500 text-teal-400 hover:bg-teal-950 hover:text-teal-300 px-8 py-6 h-auto text-lg"
              >
                Learn More
              </Button>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-teal-500" />
                <span className="text-gray-300">Secure Blockchain Storage</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-teal-500" />
                <span className="text-gray-300">One-time Verification</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-teal-500" />
                <span className="text-gray-300">Instant Provider Switch</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <div className="relative z-10 bg-gradient-to-br from-black to-teal-950/30 p-1 rounded-2xl border border-teal-500/20 shadow-2xl shadow-teal-500/10">
              <Image
                src="/placeholder.svg?height=600&width=800"
                width={800}
                height={600}
                alt="GasChain Dashboard"
                className="rounded-xl w-full h-auto"
              />

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-teal-500/10 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"></div>
            </div>

            {/* Floating blockchain nodes */}
            <motion.div
              className="absolute -top-8 -right-8 w-16 h-16 bg-teal-900/80 rounded-xl flex items-center justify-center backdrop-blur-sm border border-teal-500/30"
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 5,
                ease: "easeInOut",
              }}
            >
              <div className="text-teal-400 font-mono text-xs">KYC</div>
            </motion.div>

            <motion.div
              className="absolute top-1/4 -left-8 w-20 h-20 bg-blue-900/80 rounded-xl flex items-center justify-center backdrop-blur-sm border border-blue-500/30"
              animate={{
                y: [0, 10, 0],
                rotate: [0, -5, 0],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 6,
                ease: "easeInOut",
              }}
            >
              <div className="text-blue-400 font-mono text-xs">BLOCK</div>
            </motion.div>

            <motion.div
              className="absolute bottom-10 -right-6 w-16 h-16 bg-purple-900/80 rounded-xl flex items-center justify-center backdrop-blur-sm border border-purple-500/30"
              animate={{
                y: [0, 15, 0],
                rotate: [0, 8, 0],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 7,
                ease: "easeInOut",
              }}
            >
              <div className="text-purple-400 font-mono text-xs">HASH</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

