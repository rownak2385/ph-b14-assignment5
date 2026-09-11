import TechnologyCard from './TechnologyCard.jsx'

function TechnologyGrid({ technologies }) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {technologies.map((technology) => (
        <TechnologyCard key={technology.id} technology={technology} />
      ))}
    </div>
  )
}

export default TechnologyGrid
