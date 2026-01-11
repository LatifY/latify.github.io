import { motion } from "framer-motion";

export const LeetCode = () => {
  return (
    <section className="py-2 flex justify-center items-center px-4">
      <motion.a
        href="https://leetcode.com/u/latify/"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="group relative inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-zinc-900 rounded-full shadow-md border border-orange-100 dark:border-orange-900/30 hover:border-orange-500 dark:hover:border-orange-500 transition-colors duration-300"
      >
        <div className="absolute inset-0 rounded-full bg-orange-500/5 dark:bg-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="relative flex items-center justify-center w-6 h-6 bg-orange-100 dark:bg-orange-900/50 rounded-full text-orange-600 dark:text-orange-400 shrink-0">
          <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor">
            <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.172 5.798a1.372 1.372 0 0 0-.16 1.815c.343.435.885.578 1.488.465L12.986 6.5l-6.83 6.83a1.373 1.373 0 0 0-.007 1.935L7.22 16.32a1.372 1.372 0 0 0 1.93.007l11.23-11.23a1.374 1.374 0 0 0 0-1.935l-5.36-5.36A1.374 1.374 0 0 0 13.483 0zM4.773 1.258a1.374 1.374 0 0 0 .152 2.316l-3.35 1.706A1.374 1.374 0 0 0 0 6.556v10.888a1.374 1.374 0 0 0 .614 1.144l9.23 6.13a1.374 1.374 0 0 0 1.516 0l9.23-6.13a1.374 1.374 0 0 0 .614-1.144V6.556a1.374 1.374 0 0 0-1.575-1.276 1.374 1.374 0 0 0-1.374 1.374v8.138l-6.895 4.58-6.895-4.58V6.556c0-.528-.31-1.002-.79-1.208l-3.66-1.87a1.372 1.372 0 0 0-1.252-2.22z"/>
          </svg>
        </div>

        <div className="relative flex flex-col items-start gap-0">
            <span className="text-xs font-semibold text-gray-800 dark:text-gray-200 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                New Adventure: LeetCode Daily!
            </span>
            <span className="text-[10px] text-gray-500 dark:text-gray-400 font-medium">
                Follow my problem solving journey
            </span>
        </div>

        <svg className="w-3.5 h-3.5 text-gray-400 group-hover:text-orange-500 group-hover:translate-x-0.5 transition-all ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </motion.a>
    </section>
  );
};
