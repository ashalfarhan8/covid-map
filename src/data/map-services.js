export const mapServices = [
  {
    name: "OpenStreetMap",
    attribution:
      '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  },
  {
    name: "BlueMarble",
    attribution: "&copy; NASA Blue Marble, image service by OpenGeo",
    url:
      "https://gibs-{s}.earthdata.nasa.gov/wmts/epsg3857/best/BlueMarble_ShadedRelief_Bathymetry/default//EPSG3857_500m/{z}/{y}/{x}.jpeg",
  },
  {
    name: "DarkBlue",
    attribution: `© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>`,
    url:
      "http://api.mapbox.com/styles/v1/ashalfarhan8/ckigc46725fq11amxuedm6o2c/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYXNoYWxmYXJoYW44IiwiYSI6ImNraWdjYzNwYTAxbjMycG5sa2ZlZmllc3cifQ.dxM93c71GlBUDOHcncwwgA",
  },
];
