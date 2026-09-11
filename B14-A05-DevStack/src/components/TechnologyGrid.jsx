import TechnologyCard from './TechnologyCard.jsx'

function TechnologyGrid({ technologies, addToStack, selectedStack }) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {technologies.map((technology) => (
        <TechnologyCard
          key={technology.id}
          technology={technology}
          addToStack={addToStack}
          selectedStack={selectedStack}
        />
      ))}
    </div>
  )
}

export default TechnologyGrid
