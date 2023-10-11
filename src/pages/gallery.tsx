"use client"; // This is a client component
import React, { useState, useEffect } from 'react';

import Pagination from '../components/pagination';
import VirtualGallery from '../components/virtualGallery';

import Image from 'next/image'

export default function Gallery() {
  const [galleryData, setGalleryData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0)
  const [paginationData, setPaginationData] = useState({})
  useEffect(() => {
    handleGalleryData(currentPage);
  }, [currentPage]);

  const handleGalleryData = async (currentPage) => {
    const res = await fetch(`https://rickandmortyapi.com/api/character/?page=${currentPage + 1}`);
    const data = await res.json();
    setGalleryData(data?.results);
    if ( currentPage === 0 ) {
      setPaginationData(data?.info);
    }
  };

  return (
    <>
    <main>
      <section className="jumbotron text-center my-3">
        <div className="container">
          <h1 className="jumbotron-heading">Rick And Morty Characters</h1>
        </div>
      </section>
      <VirtualGallery
        galleryData={galleryData}
      />
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        paginationData={paginationData}
      />
    </main>
    </>
  )
}
