import './App.css';
import '../character-ratings.css';
import '../character-cards.css'
import { data } from '../public/fma-data.ts';

export function CharacterRatings() {

  const top5 = data 
    .sort((a, b) => b.votes - a.votes)
    .slice(0, 5);

  return (
    <>
      <h4>Top Characters</h4>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Skillset</th>
            <th>Votes</th>
          </tr>
        </thead>
          <tbody>
            {top5.map((character, index) => {
              const rowClass = index % 2 === 0 ? 'dark' : 'light';
                return (
                  <tr key={index} className={rowClass}>
                    <td>{character.name}</td>
                    <td>{character.skillset.join(', ')}</td>
                    <td>{character.votes}</td>
                  </tr>
                );
              })}
          </tbody>
      </table>
    </>
  )
}

export function CharacterCards() {
  return (
    <>
      {data.map((character, index) => {
        return (
            <div key={index} className='card'>
              <div className='card-titles'>
                <h3>{character.name}</h3>
                <h4>{character.nickName}</h4>
              </div>
              <img 
                src={character.imageUrl} 
                alt="" 
              />
              <p>{character.background}</p>
          </div>
        );
      })}
    </>
  )
}

// export default {CharacterRatings, CharacterCards};

