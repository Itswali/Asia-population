import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BiRightArrowCircle, BiMicrophone } from 'react-icons/bi';
import { BsGearWide } from 'react-icons/bs';
import { FiChevronLeft } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { setSelectedCountry } from '../redux/API';
import Asia from '../img/Asia.png';
import Bangladesh from '../img/Bangladesh.png';
import china from '../img/china.png';
import india from '../img/india.png';
import indonesia from '../img/indonesia.png';
import Japan from '../img/Japan.png';
import pakistan from '../img/pakistan.png';
import philippines from '../img/philipines.png';
import vietnam from '../img/vietnam.png';
import iran from '../img/iran.png';
import turkey from '../img/turkey.png';

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const countries = useSelector((state) => state.countries);
  const total = countries.reduce(
    (accumulator, currentValue) => accumulator + currentValue['2022 Population'],
    0,
  );

  const images = [
    china,
    india,
    indonesia,
    pakistan,
    Bangladesh,
    Japan,
    philippines,
    vietnam,
    iran,
    turkey,
  ];

  const fullCountries = countries.map((country, index) => ({
    ...country,
    image: images[index],
  }));

  const handleClick = (country) => {
    dispatch(setSelectedCountry(country));
    navigate('/country');
  };

  return (
    <div className="home-container">
      <div className="nav-status">
        <div className="nav-left">
          <FiChevronLeft className="statusIcon" />
          2022
        </div>
        <div className="nav-title">Most populate</div>
        <div className="nav-right">
          <BiMicrophone className="statusIcon" />
          <BsGearWide className="statusIcon" />
        </div>
      </div>
      <div className="head">
        <img src={Asia} alt="Asia" />
        <div className="infos">
          <p>ASIA</p>
          <strong>
            {total}
            {' '}
            population
          </strong>
        </div>
      </div>
      <div className="title-bar title-metrics">INFO BY COUNTRY</div>
      <div className="countriesList">
        {countries
          && fullCountries.map((country) => (
            <div
              role="button"
              tabIndex={0}
              key={country.Rank}
              className="countryItem"
              onClick={() => handleClick(country)}
              onKeyDown={() => handleClick(country)}
            >
              <BiRightArrowCircle className="icon" />
              <div className="imageContainer">
                <img src={country.image} alt={country.Country} />
              </div>

              <div className="infos">
                <p>{country.Country}</p>
                <strong>{country['2022 Population']}</strong>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
export default Home;
