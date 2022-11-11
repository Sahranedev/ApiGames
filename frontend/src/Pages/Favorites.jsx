import React from "react";
import IMGnotFound from "../images/IMGnotFound.png";
import "../Styles/favorite.css";

function Favorites() {
  return (
    <div className="container p-md-5 favorite-container">
      <h2 className="p-md-5">Favorites</h2>
      <div className="container md-p-5 ">
        <div className="row">
          <div className="col">
            <div className="game-list-favorite">
              <div className="single-game">
                <div className="row">
                  <div className="col-md-2 col-sm-2">
                    <img
                      src={IMGnotFound}
                      alt="game"
                      className="game-photo-lg"
                    />
                  </div>

                  <div className="col-md-7 col-sm-7 py-4">
                    <h5>
                      <a href="/likes" className="">
                        Elden Ring
                      </a>
                    </h5>
                  </div>
                  <div className="col-md-3 col-sm-3 py-3">
                    <button type="button" className="btn  pull-right">
                      <div className="like text-center" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="single-game">
                <div className="row">
                  <div className="col-md-2 col-sm-2">
                    <img
                      src={IMGnotFound}
                      alt="game"
                      className="game-photo-lg"
                    />
                  </div>
                  <div className="col-md-7 col-sm-7 py-4">
                    <h5>
                      <a href="/likes" className="">
                        League of legends
                      </a>
                    </h5>
                  </div>
                  <div className="col-md-3  col-sm-3 py-3">
                    <button type="button" className="btn  pull-right">
                      <div className="like text-center" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="single-game">
                <div className="row">
                  <div className="col-md-2 col-sm-2">
                    <img
                      src={IMGnotFound}
                      alt="game"
                      className="game-photo-lg"
                    />
                  </div>
                  <div className="col-md-7 col-sm-7 py-4">
                    <h5>
                      <a href="/likes" className="">
                        Dark Souls : Remastered
                      </a>
                    </h5>
                  </div>
                  <div className="col-md-3 col-sm-3 py-3 ">
                    <button type="button" className="btn  pull-right">
                      <div className="like text-center" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Favorites;
