// components/SocialLinks.jsx

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const SocialLink = () => {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-12 text-center">
          {/* Enlaces a redes sociales */}
          <p>
            <a href="#" className="text-white me-3"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="#" className="text-white me-3"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="#" className="text-white"><FontAwesomeIcon icon={faInstagram} /></a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SocialLink;
