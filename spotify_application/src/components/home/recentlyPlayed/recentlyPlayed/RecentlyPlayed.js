// import React, { Fragment } from 'react';
// import { connect } from 'react-redux';
// import './RecentlyPlayed.scss';
// // import RecentlyPlayedSongs from "./recentlyPLayedSongs/RecentlyPlayedSongs";
// import { fetchRecentlyPlayed } from '../../../../store/redux/actions';
// // import {
// //   lastActivityIsLoadingSelector,
// // } from '../../store/selectors';

const RecentlyPlayed = (props) => {
  //   //   const renderSongs = () => {
  //   //  return   songs && songs.items
  //   //       ? songs.items.map((songPlaylist, index) => (
  //   //           <RecentlyPlayedSongs key={index} index={index} song={songPlaylist} />
  //   //         ))
  //   //       : "Pas de sons";
  //   //   };

  //   //   return (
  //   //     <div className="SongResultRecent">
  //   //       <h4 className="TitleSection">Écouté dernièrement</h4>
  //   //       <div className="InsideSongResultRecent">{renderSongs()}</div>
  //   //     </div>
  //   //   );
  //   // };

  //   // export default RecentlyPlayed;
  //   // import React from "react";
  //   // import "./RecentlyPlayedContainer.scss";
  //   // import RecentlyPlayedTable from "./RecentlyPlayedTable";
  //   // const RecentlyPlayed = ({ songs }) => {
  //   //   const heading = [
  //   //     "Titre",
  //   //     "Album",
  //   //     "Titre numéro",
  //   //     "Durée",
  //   //     "Popularité",
  //   //     "Logo",
  //   //   ];
  //   //   // const body = songs && songs.items ? songs.items : [];
  //   //   const body = [
  //   //     ["Kapil", "Jaipur", "MCA", "Kapil", "Jaipur", "MCA"],
  //   //     ["Aakash", "Hisar", "Btech", "Kapil", "Jaipur", "MCA"],
  //   //     ["Mani", "Ranchi", "MSc", "Kapil", "Jaipur", "MCA"],
  //   //     ["Yash", "Udaipur", "Mtech", "Kapil", "Jaipur", "MCA"],
  //   //   ];
  //   //   console.log(songs.items);
  //   //   let newArray = [];
  //   //   let insideArray = [];

  //   //   songs.items.map(item=>{
  //   //     item.filter(value=>{
  //   //       if(value === )
  //   //     })
  //   //   })

  //   const convertTime = (num) => {
  //     const minutes = Math.floor(num / 60000);
  //     const secondes = num % 60;
  //     return minutes + ':' + secondes;
  //   };

  return (
    //     // <div className="recently-played">
    //     //   <h2 className="recently-played__title">Écouté dernièrement</h2>
    //     //   <div className="recently-played__content">
    //     //     {props.songs &&
    //     //       props.songs.map((item) => (
    //     //         <div className="recently-played__items" key={item.track.id}>
    //     //           <p>
    //     //             <img
    //     //               src={item.track.album.images[2].url}
    //     //               alt=""
    //     //               style={{ width: '60px' }}
    //     //             />
    //     //           </p>
    //     //           <p className="recently-played__track-name">{item.track.name}</p>

    //     //           <p>{convertTime(item.track.duration_ms)}</p>
    //     //           <p>{new Date(item.played_at).toLocaleDateString('fr')}</p>
    //     //         </div>
    //     //       ))}
    //     //   </div>
    //     // </div>
    <div>
      {props.songs && (
        <div>
          {props.songs.map((track, index) => {
            return (
              <div key={index}>
                <h3>{track.artist}</h3>
                <p>{track.name}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

// const mapStateToProps = (state) => ({
//   recentlyPlayed: state.recentlyPlayed,
// });

// export default connect(mapStateToProps, {
//   fetchRecentlyPlayed,
// })(RecentlyPlayed);
export default RecentlyPlayed;
