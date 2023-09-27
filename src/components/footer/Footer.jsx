import './footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="contato">
          <ul>
            <li>
              <a href="#"><img src="whats.png" alt="" width="25px" /> 11 3003-9303</a>
            </li>
            <li>
              <a href="#"><img src="ouvi.png" alt="" width="25px" /> 0800-727-1184</a>
            </li>
            <li>
              <a href="#"><img src="tel.png" alt="" width="25px" /> 3337-6786</a>
            </li>
            <li>
              <a href="#"><img src="email.png" alt="" width="25px" /> ouvidoria@portoseguro.com.br</a>
            </li>
          </ul>
        </div>
        <div className="sobre">
          <ul>
            <li>
              <a href="#">Loja</a>
            </li>
            <li>
              <a href="#">Notícias</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Serviços</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
