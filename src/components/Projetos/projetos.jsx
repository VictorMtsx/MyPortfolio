import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";
import { SiReactquery } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { Separetor } from "../separetor";
import { TbBrandFramerMotion } from "react-icons/tb";

export function Projetos() {
	return (
		<div className="h- flex flex-col justify-center items-center pt-5 pb-10 gap-10 ">
			<h1 className="pb-14 text-center text-4xl font-semibold bg-gradient-to-r from-zinc-900 via-white to-zinc-900 bg-clip-text text-transparent">
				Projetos
			</h1>

			<div className="w-full flex flex-wrap justify-start ">
				<a
					href="https://github.com/VictorMtsx/Hotel-Project-system"
					target="_blank"
					rel="noreferrer"
					className="w-full flex flex-wrap justify-start "
				>
					<div className="w-full h-28 flex sm:flex  flex-col sm:flex-row  gap-5 justify-center items-center ">
						<span className="pt-5 pb-12 text-sm  font-normal text-center text-orange-500">
							Em desenvolvimento
						</span>
						<div className=" flex flex-col mb-10 sm:flex-row gap-5">
							<img
								src="./landingPageHotel.svg"
								alt="imagem de uma projeto realizado"
								className="w-[196px]   sm:border-2 rounded-md   sm:border-zinc-600"
							/>
							<div className="flex justify-center items-center flex-col">
								<h2 className="w-80 text-xl font-semibold text-zinc-300">
									Hotel Booking System
								</h2>
								<p className="w-80 text-sm font-normal  text-zinc-400">
									Aplicação de sistema de reserva de hoteis.
								</p>
								<ul className="flex w-full justify-center items-center sm:flex sm:justify-start sm:flex-row  gap-2">
									<li className="flex w-full flex-row gap-2 py-2 ">
										<RiReactjsLine
											title="RactJS"
											className="text-4xl p-1 text-blue-500 border-2 border-zinc-600 rounded-md "
										/>
										<RiTailwindCssFill
											title="TailwindCSS"
											className="text-4xl p-1 text-cyan-500 border-2 border-zinc-600 rounded-md"
										/>
										<TbBrandFramerMotion
											title="Framer Motion"
											alt="drizzle-orm"
											className="h-9 p-1  bg-gradient-to-r from-pink-500 via-porple-800 to-blue-500  w-auto border-2 border-zinc-600 rounded-md"
										/>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</a>
			</div>
			<Separetor />
			<div className="w-full flex flex-wrap justify-start opacity-60 ">
				<a
					href="https://github.com/VictorMtsx/"
					target="_blank"
					rel="noreferrer"
					className="w-full flex flex-wrap justify-start "
				>
					<div className="w-full h-28 flex sm:flex  flex-col sm:flex-row  gap-5 justify-center items-center ">
						<span className="pt-5 pb-12 text-sm  font-normal text-center text-red-500">
							Pausado
						</span>
						<div className=" flex flex-col mb-10 sm:flex-row gap-5">
							<img
								src="./hotel.svg"
								alt="imagem de uma projeto realizado"
								className=" h-28 sm:border-2 rounded-md   sm:border-zinc-600"
							/>
							<div className="flex justify-center items-center flex-col">
								<h2 className="w-80 text-xl font-semibold text-zinc-300">
									Hotel Booking System wireframe
								</h2>
								<p className="w-80 text-sm font-normal  text-zinc-400">
									Aplicação de sistema de reserva de hoteis.
								</p>
								<ul className="flex w-full justify-center items-center sm:flex sm:justify-start sm:flex-row  gap-2">
									<li className="flex w-full flex-row gap-2 py-2 ">
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
			<Separetor />
			<div className="w-full flex flex-wrap justify-center">
				<a
					href="https://github.com/VictorMtsx/in-orbit"
					className="w-full flex flex-wrap flex-row justify-center items-center gap-5"
					rel="noreferrer"
					target="_blank"
				>
					<div className="w-full flex items-center sm:flex  flex-col sm:flex-row  gap-5 justify-center ">
						<span className="text-sm font-normal pb-12 justify-center items-center text-green-500">
							Finalizado
						</span>
						<div className="flex h-28 flex-col mb-10 sm:flex-row gap-5">
							<img
								src="./in-orbit-projeto.svg"
								alt="imagem de uma projeto realizado"
								className="h-28 sm:border-2 rounded-md   sm:border-zinc-600"
							/>
							<div className="h-full flex justify-center items-center flex-col">
								<h2 className="w-80 text-xl font-semibold text-zinc-300">
									In Orbit - Full Stack project RocketSeact
								</h2>
								<p className="w-80 text-sm font-normal text-zinc-300">
									Sistema de gerenciamento de metas semanais
								</p>
								<ul className="flex w-full justify-center items-center sm:flex sm:justify-start sm:flex-row  gap-2">
									<li className="flex w-full flex-wrap flex-row gap-2 py-2 ">
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
											src="./drizzle-orm.png"
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
										<li className="">
											<BiLogoTypescript
												title="TypeScript"
												className="text-4xl p-1 text-blue-500 border-2 border-zinc-600 rounded-md"
											/>
										</li>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</a>
			</div>
		</div>
	);
}
