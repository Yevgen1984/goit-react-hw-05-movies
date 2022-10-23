import PropTypes from 'prop-types';

export const CastList = ({ movieInfo: {cast} }) => {
   
  return (
    <div>
      {cast.length > 0 ? (
        <ul>
          {cast.map(({ id, name, profile_path, character }) => (
            <li key={id}>
              <div>
                <img
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                      : 'https://i.ibb.co/bPtNcLX/NoImage.png'
                  }
                  alt={name}
                />
              </div>
              <div>
                <p>{name}</p>
                <p>Character: {character}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>We have no more details</p>
      )}
    </div>
  );
};

CastList.propTypes = {
  info: PropTypes.shape({
    cast: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        profile_path: PropTypes.string,
        character: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};
