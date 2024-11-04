import { Tecnologies } from "../components/aboutMe/tecnologies";
import { Me } from "../components/aboutMe/Me";
import { NavBar } from "../components/NavBar";
import { Projetos } from "../components/Projetos/projetos";
export function Home() {
	return (
		<>
			<NavBar />
			<Me />
			<Tecnologies />
			<Projetos />
		</>
	);
}
