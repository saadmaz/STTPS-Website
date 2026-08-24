"use client";

import { motion } from "motion/react";
import { EASE, UnitTag } from "./primitives";

/** Animated stack used to present the LAYERS list (Brand, People, Operations, ...). */
export function LayerStack({ layers }: { layers: string[] }) {
  return (
    <div>
      {layers.map((l, i) => (
        <motion.div
          key={l}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -80px 0px" }}
          transition={{ duration: 0.8, delay: i * 0.08, ease: EASE }}
          className="-mt-px flex items-center justify-between border border-steel/30 bg-card px-6 py-6 transition-transform duration-500 hover:translate-x-2"
        >
          <span className="display-lg text-xl md:text-2xl">{l}</span>
          <UnitTag index={i + 1} className="text-muted-foreground" />
        </motion.div>
      ))}
    </div>
  );
}
