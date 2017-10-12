import React from 'react'
import PropTypes from 'prop-types'
import trimImageId from '../helpers/trim-image-id'

const imagesBaseUrl = 'http://media.vam.ac.uk/media/thira/collection_images/'

export const Image = props => {
  const { imageId } = props
  const imagesPartialUrl = trimImageId(imageId)

  return (
    <img
      src={`${imagesBaseUrl}${imagesPartialUrl}/${imageId}_jpg_l.jpg`} />
  )
}

Image.propTypes = {
  imageId: PropTypes.string,
}
