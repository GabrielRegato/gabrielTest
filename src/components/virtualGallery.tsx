"use client"; // This is a client component

const VirtualGallery = (props) => {
  const {
    galleryData = [],
  } = props;

  return (
    <>
    <div className="container">
      <div className="row">
        { galleryData.map((gallery, index) => {
          return (
            <div className="col-md-4" key={`character-${index}`}>
              <div className="card mb-4 box-shadow d-flex align-items-center">
                <img
                  key={gallery?.id}
                  src={gallery?.image}
                  alt={gallery?.name}
                  width={400}
                  height={400}
                  
                />
                <div className="card-body">
                  <p className="card-text text-center">{gallery?.name}</p>
                </div>
              </div>
            </div>  
          )
        })}  
      </div>
    </div>
    </>
  );
};

export default VirtualGallery;