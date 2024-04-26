/*
 * Purpose: Represents the settings for configuring the appearance and behavior of the Cesium Viewer component.
 * Data Fields:
 *   - animation: Controls whether the animation widget is displayed.
 *   - timeline: Controls whether the timeline widget is displayed.
 *   - fullscreenButton: Controls whether the fullscreen button is displayed.
 *   - geocoder: Controls whether the geocoder widget is displayed.
 *   - homeButton: Controls whether the home button is displayed.
 *   - infoBox: Controls whether the info box is displayed.
 *   - sceneModePicker: Controls whether the scene mode picker widget is displayed.
 *   - selectionIndicator: Controls whether the selection indicator is displayed.
 *   - baseLayerPicker: Controls whether the base layer picker widget is displayed.
 *   - navigationHelpButton: Controls whether the navigation help button is displayed.
 *   - vrButton: Controls whether the VR mode button is displayed.
 * Return Value and Output Variables:
 *   - Return Value: An object containing the configuration settings for the Cesium Viewer.
 */

const viewSettings = {
    animation: false,
    timeline: false,
    fullscreenButton: true,
    geocoder: false,
    homeButton: true,
    infoBox: false,
    sceneModePicker: true,
    selectionIndicator: true,
    baseLayerPicker: false,
    navigationHelpButton: false,
    vrButton: false,
  };
  
export default viewSettings