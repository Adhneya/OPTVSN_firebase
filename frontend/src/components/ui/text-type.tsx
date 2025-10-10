"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface TextTypeProps {
  text: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  loop?: boolean;
  className?: string;
}

export default function TextType({
  text,
  typingSpeed = 50,
  deletingSpeed = 30,
  pauseDuration = 700,
  loop = true,
  className = "",
}: TextTypeProps) {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [fadeKey, setFadeKey] = useState(0);

  useEffect(() => {
    const current = text[index];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(current.substring(0, displayText.length + 1));
        if (displayText.length + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      } else {
        setDisplayText(current.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setIndex((p) => (p + 1) % text.length);
          setFadeKey((k) => k + 1);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, text, index, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={fadeKey}
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -5 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className={`inline-block ${className}`}
      >
        {displayText}
      </motion.span>
    </AnimatePresence>
  );
}
