import Title from "./Title";
import { toursContent } from "./data";

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title="featured" subtitle="tours" />
      <div class="section-center featured-center">
        {toursContent.map((tour) => {
          const { image, date, title, info, country, duration, cost } = tour;
          return (
            <article className="tour-card" key={tour.id}>
              <div className="tour-img-container">
                <img src={image} className="tour-img" alt={title} />
                <p className="tour-date">{date}</p>
              </div>
              <div className="tour-info">
                <div className="tour-title">
                  <h4>{title}</h4>
                </div>
                <p>{info}</p>
                <div className="tour-footer">
                  <p>
                    <span>
                      <i className="fas fa-map"></i>
                    </span>{" "}
                    {country}
                  </p>
                  <p>{duration} days</p>
                  <p>from ${cost}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
export default Tours;
