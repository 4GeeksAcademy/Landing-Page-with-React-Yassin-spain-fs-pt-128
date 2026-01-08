import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Card from "./components/Card";
import Footer from "./components/Footer";

const cardContent = {
	image: "https://placehold.co/500x325?text=500x325",
	title: "Card title",
	text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus nequeum voluptatum laboriosam nihil, molestiae perferendis.",
	buttonText: "Find Out More!",
};

const cards = [1, 2, 3, 4].map((id) => ({
	id,
	...cardContent,
}));

ReactDOM.createRoot(document.getElementById('root')).render(
 <React.StrictMode>

		<div>

			<Navbar/>

			<main className="container">

				<Jumbotron/>

				<div className="row g-4">

					{cards.map((card) => (

						<div className="col-12 col-sm-6 col-lg-3" key={card.id}>
							<Card
								image={card.image}
								title={card.title}
								text={card.text}
								buttonText={card.buttonText}
              />
						</div>
					))}

				</div>

			</main>

			<Footer/>

		</div>

	</React.StrictMode>
);
