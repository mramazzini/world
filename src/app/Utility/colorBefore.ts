export const numberColor = (level: number) =>
  level >= 1 && level <= 4
    ? "border-success"
    : level >= 5 && level <= 8
    ? "border-primary"
    : level >= 9 && level <= 12
    ? "border-accent"
    : level >= 13 && level <= 16
    ? "border-secondary"
    : level >= 17 && level <= 20
    ? "border-error"
    : "border-info";
export const numberColorBefore = [
  {
    bg: "before:border-primary",
    opacity: "before:opacity-0",
  },
  {
    bg: "before:border-primary",
    opacity: "before:opacity-[25%]",
  },
  {
    bg: "before:border-primary",
    opacity: "before:opacity-[50%]",
  },
  {
    bg: "before:border-primary",
    opacity: "before:opacity-[75%]",
  },
  {
    bg: "before:border-primary",
    opacity: "before:opacity-[100%]",
  },
  {
    bg: "before:border-accent",
    opacity: "before:opacity-[25%]",
  },
  {
    bg: "before:border-accent",
    opacity: "before:opacity-[50%]",
  },
  {
    bg: "before:border-accent",
    opacity: "before:opacity-[75%]",
  },
  {
    bg: "before:border-accent",
    opacity: "before:opacity-[100%]",
  },
  {
    bg: "before:border-secondary",
    opacity: "before:opacity-[25%]",
  },
  {
    bg: "before:border-secondary",
    opacity: "before:opacity-[50%]",
  },
  {
    bg: "before:border-secondary",
    opacity: "before:opacity-[75%]",
  },
  {
    bg: "before:border-secondary",
    opacity: "before:opacity-[100%]",
  },
  {
    bg: "before:border-error",
    opacity: "before:opacity-25",
  },
  {
    bg: "before:border-error",
    opacity: "before:opacity-50",
  },
  {
    bg: "before:border-error",
    opacity: "before:opacity-75",
  },
  {
    bg: "before:border-error",
    opacity: "before:opacity-100",
  },
  {
    bg: "before:border-info",
    opacity: "before:opacity-[25%]",
  },
  {
    bg: "before:border-info",
    opacity: "before:opacity-[50%]",
  },
  {
    bg: "before:border-info",
    opacity: "before:opacity-[75%]",
  },
  {
    bg: "before:border-info",
    opacity: "before:opacity-[100%]",
  },
];
