import './UserPlaylists.scss';
import Card from '../../../layout/Card/Card';

const UserPlaylists = (props) => {
  return (
    <div className="user-playlists">
      <div className="user-playlists__title">
        {' '}
        <h2>Vos playlists</h2>
      </div>
      <div className="user-playlists__content">
        {props.playlists &&
          props.playlists.map((item, index) => (
            <div key={index}>
              <Card
                image={item.images}
                uri={item.uri}
                name={item.name}
                description={item.description}
                details="true"
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default UserPlaylists;
