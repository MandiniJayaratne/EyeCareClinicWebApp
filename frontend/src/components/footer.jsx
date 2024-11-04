const Footer = () => {
  return (
    <footer className="bg-red-700 py-12">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/4 mb-8 md:mb-0" style={{ paddingRight: '15px', paddingLeft: '15px' }}>
            <h4 className="text-white text-lg font-semibold mb-4">EYE SITE</h4>
            <ul>
              <li><a href="#" className="text-gray-300 hover:text-white">Consulting and Dispensing Opticians</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-8 md:mb-0" style={{ paddingRight: '15px', paddingLeft: '15px' }}>
            <h4 className="text-white text-lg font-semibold mb-4">get help</h4>
            <ul>
              <li><a href="#" className="text-gray-300 hover:text-white">FAQ</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">shipping</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">returns</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">location</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-8 md:mb-0" style={{ paddingRight: '15px', paddingLeft: '15px' }}>
            <h4 className="text-white text-lg font-semibold mb-4">online shop</h4>
            <ul>
              <li><a href="#" className="text-gray-300 hover:text-white">spectacles</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">sun glasses</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">contact lenses</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-8 md:mb-0" style={{ paddingRight: '15px', paddingLeft: '15px' }}>
            <h4 className="text-white text-lg font-semibold mb-4">follow us</h4>
            <div className="flex">
              <a href="#" className="text-gray-300 hover:text-white mr-2"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-gray-300 hover:text-white mr-2"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-gray-300 hover:text-white mr-2"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-gray-300 hover:text-white"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>
      </div>
      <style>
        {`
          /* Additional CSS styles */
          .footer-col h4::before {
            content: '';
            position: absolute;
            left: 0;
            bottom: -10px;
            background-color: #080103;
            height: 2px;
            box-sizing: border-box;
            width: 50px;
          }
          .footer-col ul li:not(:last-child) {
            margin-bottom: 10px;
          }
          .footer-col ul li a {
            font-size: 16px;
            text-transform: capitalize;
            color: #ffffff;
            text-decoration: none;
            font-weight: 300;
            color: #bbbbbb;
            display: block;
            transition: all 0.3s ease;
          }
          .footer-col ul li a:hover {
            color: #ffffff;
            padding-left: 8px;
          }
          .footer-col .social-links a {
            display: inline-block;
            height: 40px;
            width: 40px;
            background-color: rgba(255, 255, 255, 0.2);
            margin: 0 10px 10px 0;
            text-align: center;
            line-height: 40px;
            border-radius: 50%;
            color: #ffffff;
            transition: all 0.5s ease;
          }
          .footer-col .social-links a:hover {
            color: #a2a3a7;
            background-color: #ffffff;
          }
          @media (max-width: 767px) {
            .footer-col {
              width: 50%;
              margin-bottom: 30px;
            }
          }
          @media (max-width: 574px) {
            .footer-col {
              width: 100%;
            }
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;
