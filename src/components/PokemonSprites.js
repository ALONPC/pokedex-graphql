import React from "react";

const PokemonSprites = props => {
  const { sprites } = props;
  console.log("TCL: sprites", sprites);
  return (
    <img
      className="rounded float-left"
      src={sprites.front_default}
      alt="front"
    />
    // <div className="row">
    //   <div className="col-md-6" align="center">
    //   </div>
    //   <div className="col-md-6" align="center">
    //     <img
    //       className="rounded float-right"
    //       src={sprites.back_default}
    //       alt="back"
    //     />
    //   </div>
    // </div>
  );
};

export default PokemonSprites;
