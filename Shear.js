import React from 'react';
import { View } from 'react-native';

const Shear = (props) => {
  if (!props.body || !props.size) {
    return null;
  }

  const width = props.size[0];
  const height = props.size[1];
  const x = props.body.position.x - width / 2;
  const y = props.body.position.y - height / 2;

  const bladeHeight = height * 0.6; // Blade part will be the top 60% of the shear
  const handleHeight = height * 0.4; // Handle part will be the bottom 40%
  const handleWidth = width * 0.5; // Narrower handles compared to blades

  return (
    <>
      {/* Shear Blades */}
      <View
        style={{
          position: 'absolute',
          left: x,
          top: y,
          width: width,
          height: bladeHeight,
          backgroundColor: 'silver', // Blade color
          borderTopLeftRadius: 10, // Rounded top-left edge to mimic the blade shape
          borderTopRightRadius: 10, // Rounded top-right edge
          borderColor: '#808080', // Slightly darker gray for blade outline
          borderWidth: 2,
        }}
      />

      {/* Shear Handles */}
      <View
        style={{
          position: 'absolute',
          left: x + width * 0.25, // Center the handles relative to the blade
          top: y + bladeHeight,
          width: handleWidth,
          height: handleHeight,
          backgroundColor: '#8B0000', // Dark red color for the handle
          borderBottomLeftRadius: handleWidth / 2, // Rounded bottom-left for handle grip
          borderBottomRightRadius: handleWidth / 2, // Rounded bottom-right for handle grip
          borderColor: '#000', // Black border for handles
          borderWidth: 2,
        }}
      />

      {/* Second Handle for the Other Blade */}
      <View
        style={{
          position: 'absolute',
          left: x + width * 0.75 - handleWidth, // Offset to create the second handle
          top: y + bladeHeight,
          width: handleWidth,
          height: handleHeight,
          backgroundColor: '#8B0000', // Same dark red color for the second handle
          borderBottomLeftRadius: handleWidth / 2,
          borderBottomRightRadius: handleWidth / 2,
          borderColor: '#000',
          borderWidth: 2,
        }}
      />
    </>
  );
};

export default Shear;
