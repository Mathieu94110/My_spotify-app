import './BrowseContent.scss';

const BrowseContent = ({ newReleases }) => {
  return (
    <div className="browse-content">
      {newReleases &&
        newReleases.map((item, i) => {
          return (
            <li className="browse-content-item" key={i}>
              <div className="browse-content-image">
                <img
                  alt={item.name}
                  src={item.icons ? item.icons[0].url : item.images[0].url}
                  className="browse-content__album-img"
                />

                <p className="browse-content-name">{item.name}</p>
              </div>
            </li>
          );
        })}
    </div>
  );
};

export default BrowseContent;
