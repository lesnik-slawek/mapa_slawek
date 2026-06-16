var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_polska_z_lotu_1 = new ol.format.GeoJSON();
var features_polska_z_lotu_1 = format_polska_z_lotu_1.readFeatures(json_polska_z_lotu_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_polska_z_lotu_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_polska_z_lotu_1.addFeatures(features_polska_z_lotu_1);
var lyr_polska_z_lotu_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_polska_z_lotu_1, 
                style: style_polska_z_lotu_1,
                popuplayertitle: 'polska_z_lotu',
                interactive: true,
                title: '<img src="styles/legend/polska_z_lotu_1.png" /> polska_z_lotu'
            });
var group_group1 = new ol.layer.Group({
                                layers: [lyr_OpenStreetMap_0,],
                                fold: 'open',
                                title: 'group1'});

lyr_OpenStreetMap_0.setVisible(true);lyr_polska_z_lotu_1.setVisible(true);
var layersList = [group_group1,lyr_polska_z_lotu_1];
lyr_polska_z_lotu_1.set('fieldAliases', {'fid': 'fid', 'opis': 'opis', 'miejscowość': 'miejscowość', 'seria': 'seria', 'sezon': 'sezon', 'odcinek': 'odcinek', 'wikipedia': 'wikipedia', 'strona obiektu': 'strona obiektu', });
lyr_polska_z_lotu_1.set('fieldImages', {'fid': 'TextEdit', 'opis': 'TextEdit', 'miejscowość': '', 'seria': '', 'sezon': '', 'odcinek': '', 'wikipedia': '', 'strona obiektu': '', });
lyr_polska_z_lotu_1.set('fieldLabels', {'fid': 'no label', 'opis': 'no label', 'miejscowość': 'no label', 'seria': 'no label', 'sezon': 'no label', 'odcinek': 'no label', 'wikipedia': 'no label', 'strona obiektu': 'no label', });
lyr_polska_z_lotu_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});