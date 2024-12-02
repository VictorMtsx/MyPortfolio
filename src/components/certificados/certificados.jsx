import { motion } from "framer-motion";
import certificadoDb from "../../../public/certificado-db.png";
import certificadoLogicaJs from "../../../public/certificado-logica-js.png";
import certificadoNlw from "../../../public/certificado-nlw.png";

export function Certificados() {
	const HoverCardFunction = (img, title, desc, cargaHoraria) => {
		return (
			<motion.div className="w-full flex flex-row justify-center items-center overflow-hidden ">
				<div className="w-full h-full flex sm:flex-row gap-4 items-center justify-center text-center flex-col">
					<img className="w-[196px] " src={img} alt="Radix UI" />
					<div className="h-full flex flex-col justify-start items-start">
						<h2 className="w-80 text-xl font-semibold text-zinc-300">
							{title}
						</h2>
						<p className="w-full text-sm font-normal  text-zinc-400">{desc}</p>
						<span className="w-full text-sm font-normal  text-zinc-400">
							{cargaHoraria}
						</span>
					</div>
				</div>
			</motion.div>
		);
	};

	return (
		<div className="w-full pt-5 pb-10 ">
			<h1 className="pb-14 text-center text-4xl font-semibold text-zinc-300">
				Certificados
			</h1>

			<div className="w-full flex flex-col gap-9 justify-center items-center">
				<div className="w-full  h-full flex justify-center align-center ">
					{HoverCardFunction(
						certificadoDb,
						"Administrando banco de dados",
						"Fundação Bradesco   |   Escola Virtual ",
						"15 horas",
					)}
				</div>
				<div className="w-full  h-full flex justify-center align-center ">
					{HoverCardFunction(
						certificadoLogicaJs,
						"Lógica de programação básica com Javascript",
						"ADA Tech",
						"3 horas",
					)}
				</div>
				<div className="w-full  h-full flex justify-center align-center ">
					{HoverCardFunction(
						certificadoNlw,
						"NLW Journey - Fullstack ",
						"Rocketseat",
						"3 horas",
					)}
				</div>
			</div>
		</div>
	);
}
