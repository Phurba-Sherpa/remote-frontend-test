// ** Openlayers
import { Map, Feature, View } from 'ol';
import { Point } from 'ol/geom';
import { fromLonLat } from 'ol/proj';
import 'ol/ol.css';
import { Vector, OSM } from 'ol/source';
import { Vector as VL, Tile } from 'ol/layer';
import { Circle, Stroke, Style } from 'ol/style';

// ** React
import { type FC, useEffect } from 'react';
import styled from 'styled-components';

// **
import { CONFIG } from '@/angelswing.frontend.config';
import { Icoordinate } from './useLocation';

/////////////////////
/* STYLES */
/////////////////////

const StyledLocationMap = styled.div`
  height: 100%;
  width: 100%;

  @media (max-width: 640px) {
    display: none;
  }
`;

type ILocationMapProps = {
  coordinates: Icoordinate[] | null;
};

// ** Default lat, long, zoom
const { __DEFAULT_LAT__, __DEFAULT_LONG__, __DEFAULT_ZOOM__ } = CONFIG;

// ** Comp
const LocationMap: FC<ILocationMapProps> = ({ coordinates }) => {
  useEffect(() => {
    const vectorSource = new Vector();
    const zoomLevel = !!coordinates ? 4 : __DEFAULT_ZOOM__;

    const map = new Map({
      target: 'map-container',
      layers: [
        new Tile({
          source: new OSM(),
        }),
        new VL({
          source: vectorSource,
          style: new Style({
            image: new Circle({
              radius: 10, // Adjust the radius to enlarge the circle
              stroke: new Stroke({
                color: 'blue', // Set the stroke color
                width: 2, // Set the stroke width
              }),
            }),
          }),
        }),
      ],
      view: new View({
        center: fromLonLat([__DEFAULT_LONG__, __DEFAULT_LAT__]),
        zoom: zoomLevel,
      }),
    });

    if (coordinates && coordinates.length > 0) {
      coordinates.forEach(coordinate => {
        const [lat, long] = coordinate;
        const point = new Point(fromLonLat([long, lat]));
        const feature = new Feature(point);
        vectorSource.addFeature(feature);
        const extent = vectorSource.getExtent();
        map.getView().fit(extent, { padding: [10, 30, 10, 40] });
      });
    }

    return () => {
      map.dispose();
    };
  }, [coordinates]);

  return <StyledLocationMap id="map-container"></StyledLocationMap>;
};

export default LocationMap;
