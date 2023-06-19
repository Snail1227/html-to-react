import { data } from '../public/fma-data.ts';

function CharacterRating() {
    const top5 = data 
    .slice()
    .sort((a, b) => b.votes - a.votes)
    .slice(0, 5);

  return (
    <>
      <section id='character-ratings'>
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
      </section>
    </>
  )
}

export default CharacterRating;