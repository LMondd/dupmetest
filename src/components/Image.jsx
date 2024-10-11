import PropTypes from "prop-types";

export default function Image({ imageURL }) {
  return (
    <>
      <img src={imageURL} width="100px" />
    </>
  );
}

Image.propTypes = { 
  imageURL: PropTypes.string,
};
