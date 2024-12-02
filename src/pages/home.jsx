import { Tecnologies } from "../components/aboutMe/tecnologies";
import { Me } from "../components/aboutMe/Me";
import { NavBar } from "../components/NavBar";
import { Projetos } from "../components/Projetos/projetos";
import { Certificados } from "../components/certificados/certificados";
export function Home() {
	return (
		<div className="box-border">
			<NavBar />
			<Me />
			<Tecnologies />
			<Projetos />
			<Certificados />
		</div>
	);
}
