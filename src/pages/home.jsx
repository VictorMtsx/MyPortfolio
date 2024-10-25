import { AboutMe } from "../components/aboutMe/aboutMe";
import { Me } from "../components/aboutMe/Me";
import { NavBar } from "../components/NavBar";
export function Home() {
	return (
		<>
			<NavBar />
			<Me />
			<AboutMe />
		</>
	);
}
