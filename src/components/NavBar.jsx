import { RxLinkedinLogo, RxGithubLogo, RxInstagramLogo } from "react-icons/rx";

export function NavBar() {
	return (
		<div className="w-full h-16 px-3 ">
			<div className="w-full h-full flex justify-between items-center px-10">
				<h2 className="logoVT text-3xl text-white font-bold">VT</h2>
				<ul className="flex gap-4 items-center">
					<li className="text-white text-2xl">
						<a
							href="https://www.linkedin.com/in/joao-victor-matos/"
							target="_blank"
							rel="noreferrer"
						>
							<RxLinkedinLogo />
						</a>
					</li>
					<li className="text-white text-2xl">
						<a
							href="https://www.instagram.com/v1ctor_mts/"
							target="_blank"
							rel="noreferrer"
						>
							<RxInstagramLogo />
						</a>
					</li>
					<li className=" text-white text-2xl">
						<a href="https://github.com/VictorMtsx" target="_blank">
							<RxGithubLogo />
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
}
