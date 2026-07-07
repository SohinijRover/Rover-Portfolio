"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { contactSchema, ContactFormValues } from "@/lib/schema";

const inputClasses =
  "w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3.5 text-white placeholder:text-white/35 outline-none transition-colors focus:border-white/50 focus:bg-white/10";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  async function onSubmit() {
    await new Promise((resolve) => setTimeout(resolve, 700));
    setSubmitted(true);
    reset();
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-2xl border border-white/15 bg-white/5 p-8 text-center"
      >
        <p className="text-xl font-semibold text-white">Message sent.</p>
        <p className="mt-2 text-white/60">
          Thanks for reaching out — I&apos;ll get back to you soon.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 text-sm font-medium text-white/70 underline underline-offset-4 hover:text-white"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div>
        <input
          {...register("name")}
          type="text"
          placeholder="Your name"
          className={inputClasses}
        />
        {errors.name && (
          <p className="mt-2 text-sm text-rose-400">{errors.name.message}</p>
        )}
      </div>

      <div>
        <input
          {...register("email")}
          type="email"
          placeholder="Your email"
          className={inputClasses}
        />
        {errors.email && (
          <p className="mt-2 text-sm text-rose-400">{errors.email.message}</p>
        )}
      </div>

      <div>
        <textarea
          {...register("project")}
          rows={5}
          placeholder="Tell me about the role or opportunity"
          className={`${inputClasses} resize-none`}
        />
        {errors.project && (
          <p className="mt-2 text-sm text-rose-400">{errors.project.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex h-12 w-full items-center justify-center rounded-full bg-white text-sm font-bold text-black transition-colors hover:bg-white/85 disabled:opacity-60 sm:w-auto sm:px-8"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
