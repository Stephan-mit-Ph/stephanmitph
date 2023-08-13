const sidebarVariants = {
  open: {
    x: 0,
    transition: {
      stiffness: 1000,
      damping: 100,
      staggerChildren: 0.07,
      delayChildren: 0.2,
    },
  },
  closed: {
    x: "-100%",
    transition: {
      stiffness: 1000,
      damping: 100,
    },
  },
};

const listVariants = {
  open: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
  closed: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
};

const listItemVariants = {
  open: {
    x: 0,
    opacity: 1,
    transition: { x: { stiffness: 1000, velocity: -100 } },
  },
  closed: {
    x: -50,
    opacity: 0,
    transition: { x: { stiffness: 1000 } },
  },
};

export { sidebarVariants, listVariants, listItemVariants };
