import { motion } from "framer-motion";
import type { ReactNode } from "react";

type PageShellProps = {
  children: ReactNode;
};

function PageShell({ children }: PageShellProps) {
  return (
    <motion.main
      initial={false}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      {children}
    </motion.main>
  );
}

export default PageShell;
