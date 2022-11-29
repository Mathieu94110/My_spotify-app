import './NewReleases.scss';

const newReleases = ({ newReleases }) => {
  return (
    <div className="newReleases">
      {newReleases &&
        newReleases.map((item, i) => {
          return (
            <li className="newReleases-item" key={i}>
              <div className="newReleases-image">
                <img
                  alt={item.name}
                  src={item.icons ? item.icons[0].url : item.images[0].url}
                  className="newReleases__album-img"
                />

                <p className="newReleases-name">{item.name}</p>
              </div>
            </li>
          );
        })}
    </div>
  );
};

export default newReleases;
