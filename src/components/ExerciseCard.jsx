import ExerciseIllustration from './ExerciseIllustration.jsx'

const CATEGORY_CLASS = {
  'Upper Body': 'cat-upper',
  'Lower Body': 'cat-lower',
  Core: 'cat-core',
  Cardio: 'cat-cardio',
  Rest: 'cat-rest',
}

export default function ExerciseCard({ exercise, onRemove }) {
  const { name, sets, notes, category, videoId, image, custom } = exercise

  return (
    <article className={`card ${CATEGORY_CLASS[category] || ''}`}>
      <div className="card-media">
        {videoId ? (
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${videoId}`}
            title={`${name} — form video`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            loading="lazy"
          />
        ) : (
          <ExerciseIllustration kind={image} />
        )}
      </div>

      <div className="card-body">
        <div className="card-top">
          <span className="chip">{category}</span>
          {custom && <span className="chip chip-custom">Added by you</span>}
        </div>
        <h3>{name}</h3>
        <p className="sets">{sets}</p>
        {notes && <p className="notes">{notes}</p>}
        {custom && (
          <button className="link-btn" onClick={() => onRemove(exercise.id)} type="button">
            Remove
          </button>
        )}
      </div>
    </article>
  )
}
