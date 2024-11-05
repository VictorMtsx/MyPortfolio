import { animate, motion } from "framer-motion";

const VictorProfile = (duration) => ({
	initial: { opacity: 0, scale: 0 },
	animate: {
		opacity: 1,
		scale: 1,
		transition: {
			duration: duration,
		},
	},
});

const VictorDescription = (duration, Delay) => ({
	initial: { x: -40, opacity: 0 },
	animate: {
		x: 0,
		opacity: 1,
		transition: {
			duration: duration,
			delay: Delay,
		},
	},
});
const VictorWork = (duration, Delay) => ({
	initial: { x: 40, opacity: 0 },
	animate: {
		x: 0,
		opacity: 1,
		transition: {
			duration: duration,
			delay: Delay,
		},
	},
});

export function Me() {
	return (
		<div className="h-auto py-10 gap-10 flex flex-col justify-center border-b border-neutral-800">
			<div className="w-full flex justify-center h-2/5 ">
				<motion.img
					variants={VictorProfile(1)}
					initial="initial"
					animate="animate"
					src="../../public/me.png"
					alt="VictorPicture"
					className="w-2/3 h-auto
					max-w-[400px]"
				/>
			</div>
			<div className="flex flex-col justify-center items-center h-1/3 w-screen text-center">
				<h1 className="text-5xl text-white font-extralight">João Victor</h1>
				<motion.h2
					variants={VictorWork(1.2, 0.5)}
					initial="initial"
					animate="animate"
					className="text-xl font-semibold text-transparent bg-gradient-to-r from-pink-500 to-purple-800 bg-clip-text inline-block"
				>
					Front-end Developer
				</motion.h2>
				<motion.p
					variants={VictorDescription(1.2, 1)}
					initial="initial"
					animate="animate"
					className="w-screen block px-2  text-justify  text-zinc-200
				max-w-[600px]"
				>
					Olá, muito prazer! Sou João Victor.
					<br />
					Atualmente sou estudante de análise e desenvolvimento de sistemas
					através da faculdade Uniaselvi e me encontro, nesse momento, no
					segundo semestre do meu curso. Porém, mesmo com apenas 18 anos,
					iniciei meus estudos na área com apenas 16 anos. Naquela época, eu não
					possuia um notebook então o inicio da minha jornada não foi muito
					facil. Entretando assim como várias pessoas, dei prosseguimento mesmo
					dentre essa dificuldade. Com 17 anos foi quando eu comecei a estudar
					HTML, CSS, JavaScript, pois tinha acabado de montar meu primeiro PC,
					desde entao eu comecei a programar. Atualmente, estou estudando
					ReactJS e NodeJS, assim como conhecendo também o Docker.
				</motion.p>
			</div>
		</div>
	);
}
