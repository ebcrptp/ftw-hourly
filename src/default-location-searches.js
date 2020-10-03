import { types as sdkTypes } from './util/sdkLoader';

const { LatLng, LatLngBounds } = sdkTypes;

// An array of locations to show in the LocationAutocompleteInput when
// the input is in focus but the user hasn't typed in any search yet.
//
// Each item in the array should be an object with a unique `id` (String) and a
// `predictionPlace` (util.types.place) properties.
export default [
  {
    id: 'default-europe',
    predictionPlace: {
      address: 'Europe',
      bounds: new LatLngBounds(
        new LatLng(40.472944, -33.127037 ),
        new LatLng(71.612415, -24.362691)
      ),
    },
  },
  {
    id: 'default-united-states',
    predictionPlace: {
      address: 'USA',
      bounds: new LatLngBounds(
        new LatLng(48.435571, -110.058789),
        new LatLng(45.635286, -79.983817)
      ),
    },
  },
  {
    id: 'default-San-Francisco',
    predictionPlace: {
      address: 'San Francisco, California, USA',
      bounds: new LatLngBounds(
        new LatLng(37.8324430069081, -122.354995082683),
        new LatLng(37.6044780500533, -122.517910874663)
      ),
    },
  },
  {
    id: 'default-stockholm',
    predictionPlace: {
      address: 'Stockholm, Sweden, Europe',
      bounds: new LatLngBounds(
        new LatLng(59.4201525, -17.8581242),
        new LatLng(59.0921959, -18.9111511)
      ),
    },
  },
];
