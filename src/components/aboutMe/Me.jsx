import { motion } from "framer-motion";

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
					src="./me.png"
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
					className="w-11/12  sm:w-screen block px-2  text-justify  text-zinc-200
				max-w-[600px]"
				>
					Olá, muito prazer! Sou João Victor.
					<br />
					Desenvolvedor Front-end com paixão por criar experiências digitais
					intuitivas e envolventes. Possuo sólida experiência em JavaScript,
					React e Tailwind CSS, construindo interfaces modernas e responsivas.
					Embora minha especialidade seja Front-end, possuo um forte interesse
					em desenvolvimento full-stack, buscando sempre construir soluções
					completas e escaláveis. Atualmente, estou aprofundando meus
					conhecimentos em DevOps para otimizar meus processos de
					desenvolvimento e garantir a qualidade dos meus projetos. Meu inglês
					está em constante desenvolvimento, e estou sempre buscando
					oportunidades para praticar e melhorar minhas habilidades de
					comunicação técnica. Com 18 anos e experiência em desenvolvimento
					desde os 16, sou proativo e busco constantemente desafios. Um dos meus
					projetos em andamento é um sistema de reservas de hotéis, onde estou
					aplicando minhas habilidades em React e Tailwind CSS para criar uma
					interface intuitiva e moderna. Paralelamente, estou trabalhando no
					desenvolvimento do backend e na implantação da infraestrutura,
					utilizando conceitos de DevOps para garantir a escalabilidade e a
					confiabilidade da aplicação.
				</motion.p>
			</div>
		</div>
	);
}
