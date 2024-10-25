export function Me() {
	return (
		<div className="h-auto pt-10 flex flex-col justify-center border-b-2 border-zinc-100">
			<div className="w-full  justify-items-center h-2/5 ">
				<img
					src="../../src/assets/me.png"
					alt="VictorPicture"
					className="w-2/3 h-auto"
				/>
			</div>
			<div className="h-1/3 w-full text-center">
				<h1 className="text-5xl text-white font-extralight">João Victor</h1>
				<h2 className="text-xl font-semibold text-transparent bg-gradient-to-r from-pink-500 to-purple-800 bg-clip-text inline-block">
					Front-end Developer
				</h2>
				<p className="w-full block px-2  text-zinc-200">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos
					doloremque dignissimos adipisci minus ut repellendus soluta! Quaerat
					consequatur architecto officia, obcaecati vero nemo facilis dolorem
					sequi qui beatae. Tenetur, temporibus.
				</p>
			</div>
		</div>
	);
}
