// src/pages/HomePage.jsx
import React, { useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCountries, setFilter, loadMore } from '../redux/countrySlice';
import { Container, Row, Button, Col, Spinner } from 'react-bootstrap';
import Slider from '../components/Slider';
import CountryCard from '../components/CountryCard';
import { FaGoogle, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa'; // Import icons

const HomePage = () => {
  const { allCountries, displayedCountries, loading, error, filterRegion } = useSelector((state) => state.countries);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  const regions = useMemo(() => ['All', 'Asia', 'Europe'], []);

  const handleFilterChange = (region) => dispatch(setFilter(region));

  const handleLoadMore = () => dispatch(loadMore());

  const filteredCountries = useMemo(() => 
    allCountries.filter(c => filterRegion === 'All' || c.region === filterRegion),
  [allCountries, filterRegion]);

  const hasMore = displayedCountries.length < filteredCountries.length;

  return (
    <Container fluid className="p-0">
      {/* Header */}
      <div className="app-header px-3 py-2">
        <div className="header-title">Countries</div>
        <div className="filters">
          {regions.map((region) => (
            <button
              key={region}
              className={`filter-item ${filterRegion === region ? 'active' : ''}`}
              onClick={() => handleFilterChange(region)}
            >
              {region}
            </button>
          ))}
        </div>
      </div>

      {/* Welcome Title & Slider */}
      <div className="welcome-title">WELCOME</div>
      <Slider />

      {/* Countries Grid: Responsive, 1 per row on mobile, 2 on desktop */}
      {error ? (
        <div className="text-center">Error: {error}</div>
      ) : loading && displayedCountries.length === 0 ? (
        <div className="text-center">Loading...</div>
      ) : (
        <>
          <Row className="country-grid mx-3 mb-3">
            {displayedCountries.map((country) => (
              <CountryCard key={country.name} country={country} />
            ))}
          </Row>
          {hasMore && (
            <Button className="load-more d-flex mx-auto" onClick={handleLoadMore} disabled={loading}>
              {loading ? <Spinner animation="border" size="sm" /> : 'Load more'}
            </Button>
          )}
        </>
      )}

      {/* Footer updated to match Figma with icons */}
      <div className="footer">
        <div className="footer-icons">
          <FaGoogle size={20} color="#4285F4" />
          <FaFacebook size={20} color="#3B5998" />
          <FaLinkedin size={20} color="#0077B5" />
          <FaTwitter size={20} color="#1DA1F2" />
        </div>
        <div className="footer-email">example@email.com</div>
        <div className="copyright">Copyright 2020 Name. All rights reserved.</div>
      </div>
    </Container>
  );
};

export default HomePage;