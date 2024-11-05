import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiReactquery } from "react-icons/si";
import { FaDocker } from "react-icons/fa";

export function Projetos() {
	return (
		<div className="flex flex-col justify-center pt-5 pb-10 gap-10 ">
			<h1 className="pb-14 text-center text-4xl font-semibold bg-gradient-to-r from-zinc-900 via-white to-zinc-900 bg-clip-text text-transparent">
				Projetos
			</h1>

			<div className="w-full flex flex-wrap justify-start opacity-60">
				<a
					href="https://github.com/VictorMtsx/"
					target="_blank"
					rel="noreferrer"
					className="w-full flex flex-wrap justify-start"
				>
					<div className="w-full h-28 flex flex-wrap flex-row gap-5 justify-center items-center">
						<span className="text-sm  font-normal text-center text-red-500">
							Pausado
						</span>
						<div className="flex flex-row gap-5">
							<img
								src="../../public/Hotel-projeto.svg"
								alt="imagem de uma projeto realizado"
								className="w-auto h-28 border-2 rounded-md   border-zinc-600"
							/>
							<div className="flex flex-col">
								<h2 className="text-xl font-semibold text-zinc-300">
									Hotel Booking System wireframe
								</h2>
								<p className="w-96 text-sm font-normal  text-zinc-400">
									Aplicação de sistema de reserva de hoteis.
								</p>
								<ul className="flex flex-row  gap-2">
									<li className="flex flex-row gap-2 py-2 ">
										<RiReactjsLine
											title="RactJS"
											className="text-4xl p-1 text-blue-500 border-2 border-zinc-600 rounded-md "
										/>
										<RiTailwindCssFill
											title="TailwindCSS"
											className="text-4xl p-1 text-cyan-500 border-2 border-zinc-600 rounded-md"
										/>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</a>
			</div>
			<div className="w-full flex flex-wrap justify-center">
				<div className="w-full h-28 flex flex-wrap flex-row justify-center items-center gap-5">
					<a
						href="https://github.com/VictorMtsx/in-orbit"
						className="w-full h-28 flex flex-wrap flex-row justify-center items-center gap-5"
						rel="noreferrer"
						target="_blank"
					>
						<span className="text-sm font-normal text-center text-green-500">
							Finalizado
						</span>
						<div className="flex flex-row gap-5">
							<img
								src="../../public/in-orbit-projeto.svg"
								alt="imagem de uma projeto realizado"
								className="w-auto h-28 border-2 rounded-md   border-zinc-600"
							/>
							<div className="flex flex-col">
								<h2 className="text-xl font-semibold text-zinc-300">
									In Orbit - Full Stack project RocketSeact
								</h2>
								<p className="w-96 text-sm font-normal text-zinc-300">
									Sistema de gerenciamento de metas semanais
								</p>
								<ul className="flex flex-row  gap-2">
									<li className="flex flex-row gap-2 py-2 ">
										<RiReactjsLine
											title="RactJS"
											className="text-4xl p-1 text-blue-500 border-2 border-zinc-600 rounded-md "
										/>
										<RiTailwindCssFill
											title="TailwindCSS"
											className="text-4xl p-1 text-cyan-500 border-2 border-zinc-600 rounded-md"
										/>
										<BiLogoPostgresql
											title="PostgreSQL"
											className="text-4xl p-1 text-blue-500 border-2 border-zinc-600 rounded-md"
										/>
										<SiReactquery
											title="ReactQuery"
											className="text-4xl p-1 text-red-500 border-2 border-zinc-600 rounded-md"
										/>
										<img
											src="../../public/drizzle-orm.png"
											alt="drizzle-orm"
											title="drizzle-orm"
											className="h-9 w-auto border-2 border-zinc-600 rounded-md"
										/>
										<li className="">
											<FaDocker
												title="Docker"
												className="text-4xl p-1 text-blue-500 border-2 border-zinc-600 rounded-md"
											/>
										</li>
									</li>
								</ul>
							</div>
						</div>
					</a>
				</div>
			</div>
		</div>
	);
}
