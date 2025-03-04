import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";
import { HoverCard, Text } from "@radix-ui/themes";
import { SiReactquery } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { Separetor } from "../separetor";
import { TbBrandFramerMotion } from "react-icons/tb";

export function Projetos() {
	return (
		<>
			<div className="h- flex flex-col justify-center items-center pt-5 pb-10 gap-10 border-b border-neutral-800">
				<div className="flex justify-center gap-5">
					<h1 className="pb-14 text-center text-4xl font-semibold text-zinc-300">
						Projetos Pessoais
					</h1>

					<HoverCard.Root>
						<HoverCard.Trigger>
							<button
								type="button"
								className="w-8 h-8 flex justify-center items-center text-zinc-300 mt-2 border-2 bg-zinc-800 border-zinc-900 hover:bg-zinc-900 border-solid cursor-default rounded-md "
							>
								<img src="./about-icon.png" alt="" className="w-6 h-6   " />
							</button>
						</HoverCard.Trigger>
						<HoverCard.Content
							size="1"
							maxWidth="240px"
							className="bg-zinc-600 margin-top-2 border-2 border-zinc-600 border-solid rounded-md p-1"
						>
							<Text
								as="div"
								size="1"
								trim="both"
								className="text-zinc-300 max-w-[340px]"
							>
								Nessa sessão voce vai encontrar alguns dos meus projetos
								pessoais, onde desenvolvi por conta própia.
							</Text>
						</HoverCard.Content>
					</HoverCard.Root>
				</div>

				<div className="w-full flex flex-wrap justify-start ">
					<a
						href="https://github.com/VictorMtsx/Hotel-Project-system"
						target="_blank"
						rel="noreferrer"
						className="w-full h-28 flex sm:flex  flex-col sm:flex-row  gap-5 justify-center items-center "
					>
						<div className="w-full h-28 flex sm:flex  flex-col sm:flex-row  gap-5 justify-center items-center ">
							<div className="w-full h-full flex flex-col justify-center items-center  sm:flex-row gap-5">
								<span className="h-full flex justify-center items-center text-sm  font-normal text-center text-orange-500 ">
									Em desenvolvimento
								</span>
								<img
									src="./landingPageHotel.svg"
									alt="imagem de uma projeto realizado"
									className=" h-full flex justify-center items-center sm:border-2 rounded-md   sm:border-zinc-600"
								/>
								<div className="flex justify-center items-center flex-col">
									<h2 className="w-80 text-center sm:text-start text-xl font-semibold text-zinc-300">
										Hotel Booking System
									</h2>
									<p className="w-80 text-sm text-center sm:text-start font-normal  text-zinc-400">
										Aplicação de sistema de reserva de hoteis.
									</p>
									<ul className="flex w-full justify-center items-center sm:flex sm:justify-start sm:flex-row  gap-2">
										<li className="flex w-full sm:justify-start justify-center items-center flex-row gap-2 py-2 ">
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
			</div>

			<div className="h- flex flex-col justify-center items-center pt-5 pb-10 gap-10 border-b border-neutral-800">
				<div className="flex justify-center gap-5">
					<h1 className="pb-14 text-center text-4xl font-semibold text-zinc-300">
						Projetos Para fins de conhecimento
					</h1>
					<HoverCard.Root>
						<HoverCard.Trigger>
							<button
								type="button"
								className="w-8 h-8 flex justify-center items-center text-zinc-300 mt-2 border-2 bg-zinc-800 border-zinc-900 hover:bg-zinc-900 border-solid cursor-default rounded-md "
							>
								<img src="./about-icon.png" alt="" className="w-6 h-6   " />
							</button>
						</HoverCard.Trigger>
						<HoverCard.Content
							size="1"
							maxWidth="240px"
							className="bg-zinc-600 margin-top-2 border-2 border-zinc-600 border-solid rounded-md p-1"
						>
							<Text
								as="div"
								size="1"
								trim="both"
								className="text-zinc-300 max-w-[340px]"
							>
								Nessa sessão voce vai encontrar alguns dos projetos que
								desenvolvi com ajudas semanas intensivas de estudos. Ex:
								NextLevelWeek (Rocketseat), FullStackWeek, etc.
							</Text>
						</HoverCard.Content>
					</HoverCard.Root>
				</div>

				<div className="w-full flex flex-wrap justify-start ">
					<a
						href="https://github.com/VictorMtsx/Hotel-Project-system"
						target="_blank"
						rel="noreferrer"
						className="w-full h-28 flex sm:flex  flex-col sm:flex-row  gap-5 justify-center items-center "
					>
						<div className="w-full h-28 flex sm:flex  flex-col sm:flex-row  gap-5 justify-center items-center ">
							<div className="w-full h-full flex flex-col justify-center items-center  sm:flex-row gap-5">
								<span className="h-full flex justify-center items-center text-sm  font-normal text-center text-orange-500 ">
									Em desenvolvimento
								</span>
								<img
									src="./Capa.png"
									alt="imagem de uma projeto realizado"
									className=" h-full flex justify-center items-center sm:border-2 rounded-md   sm:border-zinc-600"
								/>
								<div className="flex justify-center items-center flex-col">
									<h2 className="w-80 text-center sm:text-start text-xl font-semibold text-zinc-300">
										Sistema de self-checkout inspirado no Macdonalds
									</h2>
									<p className="w-80 text-sm text-center sm:text-start font-normal  text-zinc-400">
										Aplicação de sistema de self checkout onde podemos fazer
										pedidos de lanches e aconpanhar a situação dos mesmos em
										tempo real.
									</p>
								</div>
							</div>
						</div>
					</a>
				</div>

				<Separetor />
				<div className="w-full flex flex-wrap justify-start opacity-60">
					<a
						href="https://github.com/VictorMtsx/"
						target="_blank"
						rel="noreferrer"
						className="w-full h-28 flex sm:flex  flex-col sm:flex-row  gap-5 justify-center items-center "
					>
						<div className="w-full h-28 flex sm:flex  flex-col sm:flex-row  gap-5 justify-center items-center ">
							<div className="w-full h-full flex flex-col justify-center items-center  sm:flex-row gap-5">
								<span className="w-[128px] h-28 flex justify-center items-center text-sm  font-normal text-cente text-red-500">
									Pausado
								</span>
								<img
									src="./hotel.svg"
									alt="imagem de uma projeto realizado"
									className=" h-full flex justify-center items-center sm:border-2 rounded-md   sm:border-zinc-600"
								/>
								<div className="flex justify-center items-center flex-col">
									<h2 className="w-80 sm:text-start text-center text-xl font-semibold text-zinc-300">
										Hotel Booking System wireframe
									</h2>
									<p className="w-80 sm:text-start text-center text-sm font-normal  text-zinc-400">
										Aplicação de sistema de reserva de hoteis.
									</p>
									<ul className="flex w-full justify-center items-center sm:flex sm:justify-start sm:flex-row  gap-2">
										<li className="flex w-full sm:justify-start justify-center items-center flex-row gap-2 py-2 ">
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
				<div className="sm:w-full pb-10 sm:pb-0 h-full w-full flex flex-wrap justify-start mb-8">
					<a
						href="https://github.com/VictorMtsx/in-orbit "
						target="_blank"
						rel="noreferrer"
						className="w-full h-28 flex sm:flex  flex-col sm:flex-row  gap-5 justify-center items-center"
					>
						<div className="w-full h-28 flex sm:flex  flex-col sm:flex-row  gap-5 justify-center items-center ">
							<div className="w-full h-full flex flex-col justify-center items-center  sm:flex-row gap-5">
								<span className="w-[128px] h-28 flex justify-center items-center text-sm  font-normal text-cente text-green-500">
									Finalizado
								</span>
								<img
									src="./in-orbit-projeto.svg"
									alt="imagem de uma projeto realizado"
									className=" h-full flex justify-center items-center sm:border-2 rounded-md   sm:border-zinc-600"
								/>
								<div className="flex justify-center items-center flex-col">
									<h2 className="w-80 sm:text-start text-center text-xl font-semibold text-zinc-300">
										In Orbit - Projeto Full-Stack Rocketseat
									</h2>
									<p className="w-80 sm:text-start text-center text-sm font-normal text-zinc-300">
										Sistema de gerenciamento de metas semanais
									</p>
									<ul className="flex w-full justify-center items-center flex-wrap gap-2">
										<li className="flex w-full sm:justify-start justify-center items-center flex-row gap-2 py-2">
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
		</>
	);
}
