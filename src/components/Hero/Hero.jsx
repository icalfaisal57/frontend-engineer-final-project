import StyledHero from "./Hero.styled";

function Hero() {
	return (
		<StyledHero>
			<div className="container">
				<section className="hero">
					<div className="hero__left">
						<h2 className="hero__title">Covid ID</h2>
						<h3 className="hero__genre">
							Monitoring Perkembangan Covid
						</h3>
						<p className="hero__description">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Et beatae
							nesciunt dolor quo quos eos, delectus sunt suscipit commodi
							possimus? Asperiores optio, exercitationem cum nostrum repellat
							assumenda tenetur cumque ad?
						</p>
						<button className="hero__button">Vaccine</button>
					</div>
					<div className="hero__right">
						<img
							className="hero__image"
							src="2.svg"
							alt="gambar"
						/>
					</div>
				</section>
			</div>
		</StyledHero>
	);
}

export default Hero