import Link from "next/link";
import { ClientComponent } from "./components/ClientComponent";
import { ServerComponent } from "./components/ServerComponent";
import { ClientSideRouter } from "./components/ClientSideRouter";

export default function Home() {
	return (
		<main style={{ display: "grid", placeItems: "center", padding: "20% 0" }}>
			Language switchers:
			<ClientSideRouter />
			<article
				style={{
					display: "grid",
					gridTemplateColumns: "repeat(2, fit-content(100%))",
					gap: "30px",
					margin: "20px",
				}}
			>
				<a href='/en/'>EN</a>
				<a href='/de/'>DE</a>
			</article>
			<article
				style={{
					display: "grid",
					gridTemplateColumns: "repeat(2, fit-content(100%))",
					gap: "30px",
					margin: "20px",
				}}
			>
				<Link href='/en'>EN NEXT</Link>
				<Link href='/de'>DE NEXT</Link>
			</article>
			<ClientComponent />
			<ServerComponent />
		</main>
	);
}
