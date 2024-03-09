// ** Openlayers
import 'ol/ol.css';
import { Map, View } from 'ol';
import {fromLonLat} from 'ol/proj'
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

// ** React
import { useEffect } from 'react';
import styled from 'styled-components';

// ** 
import {CONFIG} from '@/angelswing.frontend.config'


/////////////////////
/* STYLES */
/////////////////////
const StyledLocationMap = styled.div`
  height: 100vh;
  width: 100%;
  
  @media (max-width: 640px) {
    display: none;
  }
  `;

const {__DEFAULT_LAT__, __DEFAULT_LONG__, __DEFAULT_ZOOM__} = CONFIG

export default function LocationMap() {
 
  useEffect(() => {
    const map = new Map({
      target: 'map-container',
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: fromLonLat([__DEFAULT_LONG__, __DEFAULT_LAT__]),
        zoom: __DEFAULT_ZOOM__
      }),
    });

    return () => {
      // Cleanup when component is unmounted
      map.dispose()
    };
  }, []);

  return <StyledLocationMap id='map-container'>
  </StyledLocationMap>;
}
