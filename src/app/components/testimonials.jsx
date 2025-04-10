"use client"

import React from "react"
import { motion } from "framer-motion"
import { Star } from "lucide-react"
import Image from "next/image"

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Homeowner",
      image: "/placeholder.svg?height=100&width=100",
      content:
        "GasChain made switching my gas provider so easy! No paperwork, no waiting - just a simple verification and I was done in minutes.",
      stars: 5,
    },
    {
      name: "Michael Chen",
      role: "Property Manager",
      image: "/placeholder.svg?height=100&width=100",
      content:
        "Managing multiple properties used to mean endless KYC forms. With GasChain, I can switch providers for all my properties with just a few clicks.",
      stars: 5,
    },
    {
      name: "EnergyPlus",
      role: "Gas Provider",
      image: "/placeholder.svg?height=100&width=100",
      content:
        "Since implementing GasChain, our customer acquisition costs have dropped by 40% and onboarding time has been reduced from days to minutes.",
      stars: 5,
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-purple-950/20 to-black relative">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-purple-500">
              What People Are Saying
            </span>
          </h2>
          <p className="text-xl text-gray-300">
            Hear from consumers and providers who have transformed their experience with GasChain.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-gray-900/80 to-gray-900/40 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="flex items-center gap-4 mb-6">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  width={60}
                  height={60}
                  alt={testimonial.name}
                  className="rounded-full border-2 border-teal-500/30"
                />
                <div>
                  <h4 className="font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              <p className="text-gray-300">"{testimonial.content}"</p>

              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-teal-500/5 rounded-full blur-3xl"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

