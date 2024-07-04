import StyledAbout from "./About.styled";

function About() {
	return (
		<StyledAbout>
			<div className="about-container">
				<h1 className="title">About COVID-19</h1>
				<p className="content">
					COVID-19 is caused by the SARS-CoV-2 virus. It was first identified in
					December 2019 in Wuhan, China. The virus spreads mainly through
					respiratory droplets when an infected person coughs, sneezes, or
					talks. Symptoms can range from mild to severe, and some people may not
					experience any symptoms at all.
				</p>
				<p className="content">
					Common symptoms include fever, cough, and shortness of breath. In
					severe cases, the infection can cause pneumonia, acute respiratory
					distress syndrome, and even death. It is crucial to follow public
					health guidelines to prevent the spread of the virus, such as wearing
					masks, practicing social distancing, and washing hands regularly.
				</p>
				<p className="content">
					Vaccines have been developed and distributed globally to help combat
					the virus. Vaccination is highly recommended to reduce the risk of
					severe illness and hospitalization. Continued efforts in vaccination,
					along with other preventive measures, are key to controlling the
					pandemic.
				</p>
			</div>
		</StyledAbout>
	);
}

export default About;
