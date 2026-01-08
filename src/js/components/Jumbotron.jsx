import React from "react";

const Jumbotron = () => {
	return (
		<section className="bg-light p-5 rounded-3 my-4">
			<div className="container-fluid py-4">
				<h1 className="display-4 fw-normal">A Warm Welcome!</h1>
				<p className="col-lg-10 fs-5">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam,
					eligendi, in quo sunt possimus non incidunt odit vero aliquid
					similique quaerat nam nobis illo aspernatur vitae fugiat numquam
					repellat.
				</p>
				<a className="btn btn-primary btn-lg" href="#" role="button">
					Call to action!
				</a>
			</div>
		</section>
	);
};

export default Jumbotron;