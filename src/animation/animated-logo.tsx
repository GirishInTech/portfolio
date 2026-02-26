import { AnimatePresence, Variants, motion } from "framer-motion";

export default function AnimatedLogo() {
  const iconVariant: Variants = {
    hidden: {
      pathLength: 0,
      fill: "rgba(0, 0, 0, 0)",
    },
    visible: {
      pathLength: 1,
      // Set fill as per your theme - Updated for purple gradient theme with transparency
      fill: "rgba(139, 92, 246, 0.7)",
    },
  };

  return (
    <AnimatePresence>
      <motion.svg
        viewBox="0 0 450 450"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full fill-accent/70 stroke-accent/80"
      >
        <motion.path
          d="M350 225H280V280H325V330C325 355 305 375 280 375H170C145 375 125 355 125 330V120C125 95 145 75 170 75H280C305 75 325 95 325 120V145H375V120C375 67 332 25 280 25H170C117 25 75 67 75 120V330C75 383 117 425 170 425H280C332 425 375 383 375 330V225H350Z"
          strokeWidth="25"
          variants={iconVariant}
          initial="hidden"
          animate="visible"
          transition={{
            default: { duration: 3, ease: "easeInOut" },
            fill: { duration: 3, ease: [1, 0, 0.8, 1] },
          }}
        />
      </motion.svg>
    </AnimatePresence>
  );
}
