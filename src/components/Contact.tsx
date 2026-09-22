import React from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, MessageSquare, Sparkles, FileText, UserCheck } from 'lucide-react';
import { ContactInfo } from '../types';
import { ContactCard } from './ContactCard';
import { ContactForm } from './ContactForm';

interface ContactProps {
  contact: ContactInfo;
  onOpenCv?: () => void;
}

export function Contact({ contact, onOpenCv }: ContactProps) {
  return (
    <section id="contact" className="py-12 sm:py-20 relative scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-badge text-emerald-300 text-xs font-semibold mb-3">
            <MessageSquare className="w-4 h-4" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Contact Me
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-xl mx-auto">
            Available for scientific inquiries, technical collaborations, and professional networking.
          </p>
        </motion.div>

        {/* Contact Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Contact Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 space-y-4"
          >
            
            <div className="p-4 glass-panel rounded-2xl border border-emerald-500/20 text-xs text-emerald-300 flex items-center justify-between gap-2 mb-2">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>{contact.availability}</span>
              </div>
            </div>

            {/* Phone Card */}
            <ContactCard
              id="contact-card-phone"
              icon={<Phone className="w-5 h-5" />}
              label="Phone / Mobile"
              value={contact.displayPhone}
              href={`tel:${contact.phone}`}
              copyableValue={contact.phone}
            />

            {/* Email Card */}
            <ContactCard
              id="contact-card-email"
              icon={<Mail className="w-5 h-5" />}
              label="Gmail / Email"
              value={contact.email}
              href={`mailto:${contact.email}`}
              copyableValue={contact.email}
            />

            {/* Location Card */}
            <ContactCard
              id="contact-card-location"
              icon={<MapPin className="w-5 h-5" />}
              label="Location Address"
              value={contact.location}
              href={contact.mapUrl}
              copyableValue={contact.location}
            />

            {/* View CV Callout Card */}
            {onOpenCv && (
              <div
                onClick={onOpenCv}
                className="p-5 glass-panel rounded-2xl border border-emerald-500/40 bg-gradient-to-r from-emerald-950/40 to-slate-900 cursor-pointer hover:border-emerald-400 transition-all group shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-emerald-500/20 text-emerald-400 group-hover:scale-110 transition-transform">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                        Preview & Download Official CV
                      </h4>
                      <p className="text-xs text-slate-400">Complete resume with academic references</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-emerald-400 underline">Open</span>
                </div>
              </div>
            )}

            {/* Academic References Box */}
            <div className="p-5 glass-panel rounded-2xl border border-white/10 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                <UserCheck className="w-4 h-4" /> Academic References
              </h4>
              <div className="space-y-2 text-xs text-slate-300">
                <div className="p-2.5 rounded-xl bg-slate-950/60 border border-white/5">
                  <p className="font-semibold text-white">Dr. Maryam Zafar</p>
                  <p className="text-[11px] text-slate-400">Professor Biotechnology • Superior University</p>
                  <p className="text-[11px] text-emerald-400 mt-0.5">03228009169 • maryam.biotech@gmail.com</p>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-950/60 border border-white/5">
                  <p className="font-semibold text-white">Dr. Hania Ramzan</p>
                  <p className="text-[11px] text-slate-400">Professor Zoology • Superior University</p>
                  <p className="text-[11px] text-emerald-400 mt-0.5">03087020002 • hania.ramzan@superior.edu.pk</p>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-950/60 border border-white/5">
                  <p className="font-semibold text-white">Dr. Sammiya Abrar</p>
                  <p className="text-[11px] text-slate-400">Professor Microbiology • Superior University</p>
                  <p className="text-[11px] text-emerald-400 mt-0.5">03074419141 • sammiya.abrar@superior.edu.pk</p>
                </div>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <ContactForm />
          </motion.div>

        </div>

      </div>
    </section>
  );
}
