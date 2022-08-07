
export function Project(props) {
  return (
    <article className="card">
      <img className="card-img" src="/img/mis-intereses.png" />
      <div className="card-info extra-margin">
        <h3 className="card-title">{props.title}</h3>
        <h4 className="card-subtitle">{props.subtitle}</h4>
        <a href={props.link} className="card-link">Show Details</a>



      </div>

    </article>
  )
}

