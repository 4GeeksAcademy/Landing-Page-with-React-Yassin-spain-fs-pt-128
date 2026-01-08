import React from "react";

const Card = ({ image, title, text, buttonText }) => {
	return (
		<div className="card h-100">
			<img src={image} className="card-img-top" alt={title} />
			<div className="card-body text-center">
				<h5 className="card-title">{title}</h5>
				<p className="card-text">{text}</p>
			</div>
			<div className="card-footer bg-white border-top-0 text-center">
				<a href="#" className="btn btn-primary">
					{buttonText}
				</a>
			</div>
		</div>
	);
};

export default Card;
