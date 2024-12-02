import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { animate, motion } from "framer-motion";

const iconVariants = (duration, Delay) => ({
	initial: { y: -10 },
	animate: {
		y: [10, -10],
		transition: {
			duration: duration,
			ease: "linear",
			repeat: Number.POSITIVE_INFINITY,
			repeatType: "reverse",
			delay: Delay,
		},
	},
});

export function Tecnologies() {
	return (
		<div className=" pt-5 pb-10  border-b border-neutral-800">
			<h1 className="pb-14 text-center text-4xl font-semibold text-zinc-300">
				Tecnologias
			</h1>
			<div className="flex flex-wrap justify-center items-center gap-6 ">
				<motion.div
					variants={iconVariants(1.5, 0.0)}
					initial="initial"
					animate="animate"
					className="rounded-2xl p-3 border-4 border-neutral-800 "
				>
					<RiReactjsLine className="text-5xl text-cyan-500" />
				</motion.div>
				<motion.div
					variants={iconVariants(2.5, 0.5)}
					initial="initial"
					animate="animate"
					className="rounded-2xl p-3 border-4 border-neutral-800 "
				>
					<RiTailwindCssFill className="text-5xl text-blue-500" />
				</motion.div>
				<motion.div
					variants={iconVariants(1.5, 1.0)}
					initial="initial"
					animate="animate"
					className="rounded-2xl p-3 border-4 border-neutral-800"
				>
					<FaNodeJs className="text-5xl text-green-600" />
				</motion.div>
				<motion.div
					variants={iconVariants(2.5, 1.5)}
					initial="initial"
					animate="animate"
					className="rounded-2xl p-3 border-4 border-neutral-800"
				>
					<BiLogoPostgresql className="text-5xl text-blue-500" />
				</motion.div>
			</div>
		</div>
	);
}
