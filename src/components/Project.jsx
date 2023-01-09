
export function Project(props) {
  return (
    <article className="card">
      <img className="card-img" src={props.img} />
      <div className="card-info extra-margin">
        <h3 className="card-title">{props.title}</h3>
        <h4 className="card-subtitle">{props.subtitle}</h4>
        <div className="card-label-container">
          {
            props.tech.map(tec => (
              <span className="card-label">{tec}</span>
            ))
          }
        </div>
        <div className="card-buttons-container">
          {
            props.links.map(link => (
              <a href={link.link} className="btn btn-primary card-link">{link.linkName}</a>
            ))
          }
        </div>

      </div>
    </article>
  )
}

