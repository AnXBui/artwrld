import Link from "next/link";
import { motion } from "framer-motion";

export default function LinkTo({
  href,
  className,
  children,
  onClick,
  ...props
}) {
  return (
    <Link scroll={false} passHref href={href}>
      <motion.a onClick={onClick} className={className} {...props}>
        {children}
      </motion.a>
    </Link>
  );
}
