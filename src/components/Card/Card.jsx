import './Card.scss';

const Card = ({
	imageUrl,
	title,
	description,
	ethereumAmount,
	remainingTime,
	author,
}) => {
	return (
		<article className="card">
			<div className="card__image">
				<img width="302" height="302" src={imageUrl} alt="" />
			</div>
			<div className="card__content">
				<h2 className="card__title">
					<a href="#" className="btn btn--link">
						{title}
					</a>
				</h2>
				<p className="card__desc">{description}</p>
				<ul className="card__stats-list">
					<li className="card__stats-list-item">
						<i className="icon-ethereum" aria-hidden="true"></i>
						<span>{ethereumAmount} ETH</span>
					</li>
					<li className="card__stats-list-item">
						<i className="icon-clock" aria-hidden="true"></i>
						<span>{remainingTime} days left</span>
					</li>
				</ul>
				<div className="card__author">
					<img
						className="card__author-img"
						width="33"
						height="33"
						src={author.imageUrl}
						alt={author.name}
					/>
					<span className="card__author-desc">
						Creation of&nbsp;
						<a href="#" className="btn btn--link">
							{author.name}
						</a>
					</span>
				</div>
			</div>
		</article>
	);
};

export default Card;
