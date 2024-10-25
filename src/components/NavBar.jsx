import { RxLinkedinLogo, RxGithubLogo, RxInstagramLogo } from "react-icons/rx";

export function NavBar() {
	return (
		<div className="w-full h-16 px-3 ">
			<div className="w-full h-full flex justify-between items-center">
				<h2 className="logoVT text-3xl text-white font-bold">VT</h2>
				<ul className="flex gap-4 items-center">
					<li className="text-white text-2xl">
						<a href="">
							<RxLinkedinLogo />
						</a>
					</li>
					<li className="text-white text-2xl">
						<a href="#">
							<RxInstagramLogo />
						</a>
					</li>
					<li className=" text-white text-2xl">
						<a href="#">
							<RxGithubLogo />
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
}
