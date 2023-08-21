import React from 'react'
import Hero from "../components/hero/Hero";
import Banner from "../components/banner/Banner";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <Hero>
      <Banner title="404" subtitle="page not found">
        <Link to="/" className="btn-primary">
          RETURN HOME
        </Link>
      </Banner>
    </Hero>
  )
}
