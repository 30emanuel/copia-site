import { Component, OnInit } from '@angular/core';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import { fromLonLat } from 'ol/proj';
import { Vector as VectorLayer } from 'ol/layer';
import { Vector as VectorSource } from 'ol/source';
import { Style, Icon } from 'ol/style';
import { Attribution } from 'ol/control';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  map!: Map

  ngOnInit() {
    this.initializeMap()
  }

  initializeMap() {
    const coordinates = fromLonLat([-42.026695, -20.255550])

    const markerFeature = new Feature({
      geometry: new Point(coordinates),
    })

    const markerStyle = new Style({
      image: new Icon({
        src: 'assets/imgs/marker.png',
        anchor: [0.5, 1],
        scale: 0.1,
      }),
    })

    markerFeature.setStyle(markerStyle);

    const markerLayer = new VectorLayer({
      source: new VectorSource({
        features: [markerFeature],
      }),
    })

    this.map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
        markerLayer,
      ],
      view: new View({
        center: coordinates,
        zoom: 19
      }),
    })
  }

}
