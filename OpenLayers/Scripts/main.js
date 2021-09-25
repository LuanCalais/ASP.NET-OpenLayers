window.onload = init;

function init() {

    //Criação dos mapas
    const map = new ol.Map({

        view: new ol.View({
            center: ol.proj.fromLonLat([-51.9253, -14.2350]),
            zoom: 3.8,
            maxZoom: 20,
            minZoom: 0
        }),

        layers: [
            new ol.layer.Tile({
                source: new ol.source.OSM()
            })
        ],
        target: 'js-map'
    })


    //GeoJson em tela
    //Poligono marcando o Brasil
    const PolBra = new ol.layer.VectorImage({
        source: new ol.source.Vector({
            url: './data/BrasilPolygon.geojson',
            format: new ol.format.GeoJSON()
        }),
        visible: true,
        title: "BrasilCont"
    })

    map.addLayer(PolBra);

}