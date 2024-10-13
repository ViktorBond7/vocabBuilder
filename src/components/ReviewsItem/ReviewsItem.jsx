import css from "./ReviewsItem.module.css";

const Rating = ({ rating, maxRating = 5 }) => {
  const fullStars = Math.floor(rating);
  const emptyStars = maxRating - fullStars;

  return (
    <div className={css.containerRating}>
      {[...Array(fullStars)].map((_, i) => (
        <span key={i} className={css.spanRating}>
          ★
        </span>
      ))}
      {[...Array(emptyStars)].map((_, i) => (
        <span key={i} className={css.spanRatingDefault}>
          ★
        </span>
      ))}
    </div>
  );
};

const Review = ({ name, rating }) => {
  return (
    <div>
      <h2>{name}</h2>
      <Rating rating={rating} />
    </div>
  );
};

const ReviewsItem = ({ camper }) => {
  if (!camper || !camper.reviews || !Array.isArray(camper.reviews)) {
    return <div>No reviews available</div>;
  }
  console.log(camper);
  return (
    <ul>
      {camper.reviews.map((review, index) => (
        <li className={css.item} key={index}>
          <div className={css.containerHeader}>
            <span className={css.span}>{review.reviewer_name[0]}</span>
            <div>
              <Review
                name={review.reviewer_name}
                rating={review.reviewer_rating}
              />
            </div>
          </div>
          <p>{review.comment}</p>
        </li>
      ))}
    </ul>
  );
};

export default ReviewsItem;
