import Thumbnail from './Thumbnail'
import FlipMove from 'react-flip-move'

const Results = (props) => {
  return (
    <FlipMove className="px-5 my-10 sm:grid md:grid-cols-3 xl:grid-cols-4 3xl:flex flex-wrap justify-center">
      {props.results.map((result) => (
        <Thumbnail key={result.mal_id} result={result} />
      ))}
    </FlipMove>
  )
}

export default Results
