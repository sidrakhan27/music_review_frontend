import './artist.css';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import {Link, useNavigate} from "react-router-dom";
import Button from 'react-bootstrap/Button';

const Artist = ({ artists }) => {
  return (
    <div className="artist-carousel-container">
      <Carousel>
        {artists?.map((artist) => {
          return (
            <Paper key={artist.id}>
              <div className="artist-card-container">
                <div
                  className="artist-card"
                  style={{ '--img': `url(${artist.artistImage})` }}
                >
                  <div className="artist-detail">
                    <div className="artist-title">
                      <h4>{artist.name}</h4>
                    </div>
                    <div className="artist-buttons-container">
                      <Link
                        to={`/Artist/${artist.id}`} // Adjust the route as needed
                      >
                        <div className="play-button-icon-container">
                          <FontAwesomeIcon
                            className="play-button-icon"
                            icon={faPlayCircle}
                          />
                        </div>
                      </Link>
                      <div className="artist-review-button-container">
                        {/* You can replace this with a button for artist details or other actions */}
                        <Button variant="info">Artist Details</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Paper>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Artist;

