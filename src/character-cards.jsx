import { data } from '../public/fma-data.ts';

function CharacterCards() {
    return (
        <>
            <section id='character-cards'>
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
        </section>
        </>
    )
}

export default CharacterCards;