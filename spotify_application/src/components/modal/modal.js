// import React, { useState } from "react";
// import "./modal.css";

// const Modal = ({ setIsOpen, playlists }) => {
//   const [isSubscribed, setIsSubscribed] = useState(false);

//   const handleChange = (event) => {
//     if (event.target.checked) {
//       console.log("✅ Checkbox is checked");
//     } else {
//       console.log("⛔️ Checkbox is NOT checked");
//     }
//     setIsSubscribed((current) => !current);
//   };

//   return (
//     <>
//       <div className="centered">
//         <div className="modal">
//           <div className="modalHeader">
//             <h5 className="heading">
//               Inclure le titre à une playlist existante
//             </h5>
//           </div>
//           <div className="modalContent">Sélectionner la playlist</div>
//           <div
//             style={{
//               width: "100%",
//               height: "220px",
//               overflowY: "auto",
//             }}
//           >
//             {playlists &&
//               playlists.map((playlist, index) => {
//                 return (
//                   <div
//                     key={index}
//                     style={{
//                       display: "flex",
//                       width: "100%",
//                       justifyContent: "space-between",
//                     }}
//                   >
//                     <span>{playlist.name}</span>{" "}
//                     <input
//                       type="checkbox"
//                       value={isSubscribed}
//                       onChange={handleChange}
//                     ></input>
//                   </div>
//                 );
//               })}
//           </div>
//           <div className="modalActions">
//             <div className="actionsContainer">
//               <button
//                 className="cancel-button"
//                 onClick={() => setIsOpen(false)}
//               >
//                 Annuler
//               </button>
//               <button
//                 className="validate-button"
//                 onClick={() => setIsOpen(false)}
//               >
//                 Valider
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Modal;
import React, { useState } from "react";
import "./modal.css";

const Modal = ({ setIsOpen, playlists }) => {
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleChange = (event) => {
    if (event.target.value) {
      console.log(event.target.value);
    } else {
      console.log("⛔️ Checkbox is NOT checked");
    }
    setIsSubscribed((current) => !current);
  };

  return (
    <>
      <div className="centered">
        <div className="modal">
          <div className="modalHeader">
            <h5 className="heading">Ajouter le titre dans vos playlists</h5>
          </div>
          <div className="modalContent">Sélectionner puis valider</div>
          <div
            style={{
              width: "100%",
              height: "220px",
              overflowY: "auto",
            }}
          >
            {playlists &&
              playlists.map((playlist, index) => {
                return (
                  <div
                    key={index}
                    style={{
                      display: "flex",
                      width: "100%",
                      justifyContent: "space-between",
                    }}
                  >
                    <span>{playlist.name}</span>{" "}
                    <input
                      type="checkbox"
                      value={playlist.uri}
                      onChange={handleChange}
                    ></input>
                  </div>
                );
              })}
          </div>
          <div className="modalActions">
            <div className="actionsContainer">
              <button
                className="cancel-button"
                onClick={() => setIsOpen(false)}
              >
                Annuler
              </button>
              <button
                className="validate-button"
                onClick={() => setIsOpen(false)}
              >
                Valider
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
