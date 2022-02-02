import Link from "next/link";
import { motion } from "framer-motion";

export default function LinkTo({ href, className, children, onClick }) {
  return (
    <Link scroll={false} passHref href={href}>
      <motion.a onClick={onClick} className={className}>
        {children}
      </motion.a>
    </Link>
  );
}
