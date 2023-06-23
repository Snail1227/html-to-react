import { data } from '../public/fma-data.ts';
import HeaderOfTop5 from './HeaderOfTop5.jsx';

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
            <HeaderOfTop5 
              name='Name'
              skills='SkillSet'
              votes='Votes'
            />
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