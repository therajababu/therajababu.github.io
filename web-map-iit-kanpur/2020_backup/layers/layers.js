var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM B&W',
    'type': 'base',
    source: new ol.source.XYZ({
        url: 'http://{a-c}.www.toolserver.org/tiles/bw-mapnik/{z}/{x}/{y}.png',
        attributions: [new ol.Attribution({html: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'})]
    })
})
]
});
var format_Boundary_0 = new ol.format.GeoJSON();
var features_Boundary_0 = format_Boundary_0.readFeatures(json_Boundary_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Boundary_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Boundary_0.addFeatures(features_Boundary_0);var lyr_Boundary_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Boundary_0, 
                style: style_Boundary_0,
                title: '<img src="styles/legend/Boundary_0.png" /> Boundary'
            });var format_Landuse_1 = new ol.format.GeoJSON();
var features_Landuse_1 = format_Landuse_1.readFeatures(json_Landuse_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Landuse_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Landuse_1.addFeatures(features_Landuse_1);var lyr_Landuse_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Landuse_1, 
                style: style_Landuse_1,
                title: '<img src="styles/legend/Landuse_1.png" /> Landuse'
            });var format_Water_2 = new ol.format.GeoJSON();
var features_Water_2 = format_Water_2.readFeatures(json_Water_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Water_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Water_2.addFeatures(features_Water_2);var lyr_Water_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Water_2, 
                style: style_Water_2,
                title: '<img src="styles/legend/Water_2.png" /> Water'
            });var format_Walkway_3 = new ol.format.GeoJSON();
var features_Walkway_3 = format_Walkway_3.readFeatures(json_Walkway_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Walkway_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Walkway_3.addFeatures(features_Walkway_3);var lyr_Walkway_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Walkway_3, 
                style: style_Walkway_3,
                title: '<img src="styles/legend/Walkway_3.png" /> Walkway'
            });var format_Building_4 = new ol.format.GeoJSON();
var features_Building_4 = format_Building_4.readFeatures(json_Building_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Building_4 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Building_4.addFeatures(features_Building_4);var lyr_Building_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Building_4, 
                style: style_Building_4,
                title: '<img src="styles/legend/Building_4.png" /> Building'
            });var format_Landmark_5 = new ol.format.GeoJSON();
var features_Landmark_5 = format_Landmark_5.readFeatures(json_Landmark_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Landmark_5 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Landmark_5.addFeatures(features_Landmark_5);var lyr_Landmark_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Landmark_5, 
                style: style_Landmark_5,
                title: '<img src="styles/legend/Landmark_5.png" /> Landmark'
            });var format_Road_6 = new ol.format.GeoJSON();
var features_Road_6 = format_Road_6.readFeatures(json_Road_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Road_6 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Road_6.addFeatures(features_Road_6);var lyr_Road_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Road_6, 
                style: style_Road_6,
                title: '<img src="styles/legend/Road_6.png" /> Road'
            });var format_Railway_7 = new ol.format.GeoJSON();
var features_Railway_7 = format_Railway_7.readFeatures(json_Railway_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Railway_7 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Railway_7.addFeatures(features_Railway_7);var lyr_Railway_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Railway_7, 
                style: style_Railway_7,
                title: '<img src="styles/legend/Railway_7.png" /> Railway'
            });var format_Pole_8 = new ol.format.GeoJSON();
var features_Pole_8 = format_Pole_8.readFeatures(json_Pole_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pole_8 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Pole_8.addFeatures(features_Pole_8);var lyr_Pole_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Pole_8, 
                style: style_Pole_8,
                title: '<img src="styles/legend/Pole_8.png" /> Pole'
            });

lyr_Boundary_0.setVisible(true);lyr_Landuse_1.setVisible(true);lyr_Water_2.setVisible(true);lyr_Walkway_3.setVisible(true);lyr_Building_4.setVisible(true);lyr_Landmark_5.setVisible(true);lyr_Road_6.setVisible(true);lyr_Railway_7.setVisible(true);lyr_Pole_8.setVisible(true);
var layersList = [baseLayer,lyr_Boundary_0,lyr_Landuse_1,lyr_Water_2,lyr_Walkway_3,lyr_Building_4,lyr_Landmark_5,lyr_Road_6,lyr_Railway_7,lyr_Pole_8];
lyr_Boundary_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'AREA': 'AREA', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Landuse_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Shape_Leng': 'Shape_Leng', 'type': 'type', 'ABOUT': 'About', 'use': 'Use', 'AREA': 'AREA', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Area', });
lyr_Water_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'Name': 'Name', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Area', });
lyr_Walkway_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'Location': 'Location', 'Shape_Leng': 'Length', 'Shape_Area': 'Shape_Area', });
lyr_Building_4.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'Join_Count': 'Join_Count', 'TARGET_FID': 'TARGET_FID', 'OBJECTID': 'OBJECTID', 'id': 'id', 'Name': 'Name', 'Type': 'Type', 'OBJECTID_2': 'OBJECTID_2', 'Shape_Leng': 'Shape_Leng', 'LETTER': 'LETTER', 'GUIDE': 'GUIDE', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Area', 'LABEL': 'LABEL', });
lyr_Landmark_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'name': 'Name', });
lyr_Road_6.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'Id': 'Id', 'type': 'Type', 'Name': 'Name', 'Surface': 'Surface', 'TEMPNAME': 'TEMPNAME', 'Shape_Leng': 'Length', });
lyr_Railway_7.set('fieldAliases', {'Id': 'Id', 'Shape_Leng': 'Length', });
lyr_Pole_8.set('fieldAliases', {'pole_id': 'pole_id', 'pole_type': 'Pole Type', 'no_lights_': 'no_lights_', 'utility_in': 'utility_in', 'Easting': 'Easting', 'Northing': 'Northing', });
lyr_Boundary_0.set('fieldImages', {'OBJECTID': 'Hidden', 'Id': 'Hidden', 'AREA': 'TextEdit', 'Shape_Leng': 'Hidden', 'Shape_Area': 'Hidden', });
lyr_Landuse_1.set('fieldImages', {'OBJECTID': 'Hidden', 'Shape_Leng': 'Hidden', 'type': 'Hidden', 'ABOUT': 'TextEdit', 'use': 'TextEdit', 'AREA': 'Hidden', 'Shape_Le_1': 'Hidden', 'Shape_Area': 'TextEdit', });
lyr_Water_2.set('fieldImages', {'OBJECTID': 'Hidden', 'Id': 'Hidden', 'Name': 'TextEdit', 'Shape_Leng': 'Hidden', 'Shape_Area': 'TextEdit', });
lyr_Walkway_3.set('fieldImages', {'OBJECTID': 'Hidden', 'Id': 'Hidden', 'Location': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'Hidden', });
lyr_Building_4.set('fieldImages', {'OBJECTID_1': 'Hidden', 'Join_Count': 'Hidden', 'TARGET_FID': 'Hidden', 'OBJECTID': 'TextEdit', 'id': 'Hidden', 'Name': 'TextEdit', 'Type': 'TextEdit', 'OBJECTID_2': 'Hidden', 'Shape_Leng': 'Hidden', 'LETTER': 'Hidden', 'GUIDE': 'Hidden', 'Shape_Le_1': 'Hidden', 'Shape_Area': 'TextEdit', 'LABEL': 'Hidden', });
lyr_Landmark_5.set('fieldImages', {'OBJECTID': 'Hidden', 'Id': 'Hidden', 'name': 'TextEdit', });
lyr_Road_6.set('fieldImages', {'OBJECTID_1': 'Hidden', 'Id': 'TextEdit', 'type': 'TextEdit', 'Name': 'Hidden', 'Surface': 'TextEdit', 'TEMPNAME': 'Hidden', 'Shape_Leng': 'TextEdit', });
lyr_Railway_7.set('fieldImages', {'Id': 'Hidden', 'Shape_Leng': 'TextEdit', });
lyr_Pole_8.set('fieldImages', {'pole_id': 'Hidden', 'pole_type': 'TextEdit', 'no_lights_': 'Hidden', 'utility_in': 'Hidden', 'Easting': 'TextEdit', 'Northing': 'TextEdit', });
lyr_Boundary_0.set('fieldLabels', {'AREA': 'inline label', });
lyr_Landuse_1.set('fieldLabels', {'ABOUT': 'inline label', 'use': 'inline label', 'Shape_Area': 'inline label', });
lyr_Water_2.set('fieldLabels', {'Name': 'inline label', 'Shape_Area': 'inline label', });
lyr_Walkway_3.set('fieldLabels', {'Location': 'inline label', 'Shape_Leng': 'inline label', });
lyr_Building_4.set('fieldLabels', {'OBJECTID': 'inline label', 'Name': 'inline label', 'Type': 'inline label', 'Shape_Area': 'inline label', });
lyr_Landmark_5.set('fieldLabels', {'name': 'inline label', });
lyr_Road_6.set('fieldLabels', {'Id': 'inline label', 'type': 'inline label', 'Surface': 'inline label', 'Shape_Leng': 'inline label', });
lyr_Railway_7.set('fieldLabels', {'Shape_Leng': 'inline label', });
lyr_Pole_8.set('fieldLabels', {'pole_type': 'inline label', 'Easting': 'inline label', 'Northing': 'inline label', });
lyr_Pole_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});