import React from 'react';
import { Svg } from 'expo';

const TakePhotoButton = () => (
  <Svg height="68" width="68">
    <Svg.Circle cx="34" cy="34" fill="#FFF" r="28" />
    <Svg.Circle cx="34" cy="34" fill="transparent" r="32" stroke="#fff" strokeWidth="2" />
  </Svg>
);

export default TakePhotoButton;