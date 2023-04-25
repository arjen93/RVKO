let map;

async function initMap() {
  // The location of Rotterdam 51.923934658078736, 4.477435382598361
  const position = {
    lat: 51.923934658078736,
    lng: 4.477435382598361
  };
  // Request needed libraries.
  //@ts-ignore
  const {
    Map
  } = await google.maps.importLibrary("maps");
  const {
    AdvancedMarkerView
  } = await google.maps.importLibrary("marker");

  // The map, centered at Uluru
  map = new Map(document.getElementById("map"), {
    zoom: 10,
    center: position,
    mapId: "9e488e3fa0fd537d",
    disableDefaultUI: true,
  });

  // Add marker function
  function addMarker(props) {
    var marker = new google.maps.Marker({
      position: props.coords,
      map: map,
      icon: 'https://uploads-ssl.webflow.com/6400bdb17a0a5f9ffc75f6b4/6446660ee63efd3f91fd1fa9_RVKO-marker.svg'
    });

    // check content
    if (props.content) {
      var infoWindow = new google.maps.InfoWindow({
        content: props.content
      });

      marker.addListener('click', function() {
        infoWindow.open(map, marker);
      });
    }
  }


  // array of markers
  var markers = [{
      coords: {
        lat: 51.91468669034034,
        lng: 4.439307003757908
      },
      content: '<h1 class="heading-5">SBO Lucasschool</h1>' + '<p class="map_card-adres">Korfmakersstraat 68-74, 3026 XJ Rotterdam</p>' + '<a href="https://rvko-banen-bbq.webflow.io/video-library/sbo-lucasschool" class="map_card-link">Bekijk de video</a>'
    },

    {
      coords: {
        lat: 51.89300476461588,
        lng: 4.5658639
      },
      content: '<h1 class="heading-5">De Regenboog</h1>' + '<p class="map_card-adres">Gronsvelderf 105,	3077 SB Rotterdam</p>' + '<a href="https://rvko-banen-bbq.webflow.io/video-library/regenboog-de" class="map_card-link">Bekijk de video</a>'
    },

    {
      coords: {
        lat: 51.91111749554025,
        lng: 4.244654964758853
      },
      content: '<h1 class="heading-5">De Rozenhorst</h1>' + '<p class="map_card-adres">Jan Tooropstraat 1, 3181 HE Rozenburg</p>' + '<a href="https://rvko-banen-bbq.webflow.io/video-library/rozenhorst-de" class="map_card-link">Bekijk de video</a>'
    },

    {
      coords: {
        lat: 51.94019335479174,
        lng: 4.482922442369049
      },
      content: '<h1 class="heading-5">Hildegardisschool</h1>' + '<p class="map_card-adres">Verbraakstraat 7, 3036 MR Rotterdam</p>' + '<a href="https://rvko-banen-bbq.webflow.io/video-library/hildegardisschool" class="map_card-link">Bekijk de video</a>'
    },

    {
      coords: {
        lat: 51.86351317190519,
        lng: 4.356934262805437
      },
      content: '<h1 class="heading-5">jacobusschool</h1>' + '<p class="map_card-adres">Hesselingstraat 5, 3192 BC Hoogvliet Rotterdam</p>' + '<a href="https://rvko-banen-bbq.webflow.io/video-library/jacobusschool" class="map_card-link">Bekijk de video</a>'
    },

    {
      coords: {
        lat: 51.90208666488871,
        lng: 4.547728998279278
      },
      content: '<h1 class="heading-5">Meester Baars</h1>' + '<p class="map_card-adres">Koninginneweg 228, 3078 GS Rotterdam</p>' + '<a href="https://rvko-banen-bbq.webflow.io/video-library/meester-baars" class="map_card-link">Bekijk de video</a>'
    },

    {
      coords: {
        lat: 51.97881619669339,
        lng: 4.5789302693184135
      },
      content: '<h1 class="heading-5">De Waldorfschool</h1>' + '<p class="map_card-adres">Kosboulevard 5, 3059 XZ Rotterdam</p>' + '<a href="https://rvko-banen-bbq.webflow.io/video-library/de-waldorfschool" class="map_card-link">Bekijk de video</a>'
    },

    {
      coords: {
        lat: 52.02374507457006,
        lng: 4.531774037821536
      },
      content: '<h1 class="heading-5">Klimophoeve</h1>' + '<p class="map_card-adres">Hoefweg 49, 2665 CB Bleiswijk</p>' + '<a href="https://rvko-banen-bbq.webflow.io/video-library/klimophoeve" class="map_card-link">Bekijk de video</a>'
    },

    {
      coords: {
        lat: 51.916203449708554,
        lng: 4.458260723961245
      },
      content: '<h1 class="heading-5">Maria Basisschool</h1>' + '<p class="map_card-adres">Schietbaanlaan 90, 3021 LN Rotterdam</p>' + '<a href="https://rvko-banen-bbq.webflow.io/video-library/maria-basisschool-schietbaanlaan" class="map_card-link">Bekijk de video</a>'
    },

    {
      coords: {
        lat: 51.931351242233134,
        lng: 4.589453479019762
      },
      content: '<h1 class="heading-5">Montessorischool Capelle</h1>' + '<p class="map_card-adres">Reigerlaan 64, 2903 LL Capelle aan den IJssel</p>' + '<a href="https://rvko-banen-bbq.webflow.io/video-library/montessorischool-capelle" class="map_card-link">Bekijk de video</a>'
    },

    {
      coords: {
        lat: 51.9315823630736,
        lng: 4.46763409688425
      },
      content: '<h1 class="heading-5">De Provenier</h1>' + '<p class="map_card-adres">Harddraverstraat 7, 3033 XG Rotterdam</p>' + '<a href="https://rvko-banen-bbq.webflow.io/video-library/provenier-de" class="map_card-link">Bekijk de video</a>'
    },

    {
      coords: {
        lat: 51.96300370906962,
        lng: 4.540350897297448
      },
      content: '<h1 class="heading-5">Marga Klompé School</h1>' + '<p class="map_card-adres">Robert Kochplaats 346-348, 3068 JD Rotterdam</p>'+ '<a href="https://rvko-banen-bbq.webflow.io/video-library/minister-marga-klompe" class="map_card-link">Bekijk de video</a>'
    },

    {
      coords: {
        lat: 51.930426746967576,
        lng: 4.50849044350816
      },
      content: '<h1 class="heading-5">Bavokring</h1>' + '<p class="map_card-adres">Willem Ruyslaan 17, 3061 TT Rotterdam</p>' + '<a href="https://rvko-banen-bbq.webflow.io/video-library/bavokring" class="map_card-link">Bekijk de video</a>'
    },

    {
      coords: {
        lat: 51.861961235006504,
        lng: 4.469133412356688
      },
      content: '<h1 class="heading-5">De Grote Reis</h1>' + '<p class="map_card-adres">Binnengracht 2, 3162 WD Rhoon</p>' + '<a href="https://rvko-banen-bbq.webflow.io/video-library/grote-reis-de" class="map_card-link">Bekijk de video</a>'
    },

    {
      coords: {
        lat: 51.839942765158234,
        lng: 4.323222055596405
      },
      content: '<h1 class="heading-5">Paus johannes</h1>' + '<p class="map_card-adres">Galileïlaan 9, 3204 AK Spijkenisse</p>' + '<a href="https://rvko-banen-bbq.webflow.io/video-library/paus-johannes" class="map_card-link">Bekijk de video</a>'
    },

    {
      coords: {
        lat: 51.83282134072808,
        lng: 4.3211183
      },
      content: '<h1 class="heading-5">De Akkers</h1>' + '<p class="map_card-adres">Noordakker 2, 3206 TC Spijkenisse</p>' + '<a href="https://rvko-banen-bbq.webflow.io/video-library/de-akkers" class="map_card-link">Bekijk de video</a>'
    },

    {
      coords: {
        lat: 51.96224688471515,
        lng: 4.570246964572742
      },
      content: '<h1 class="heading-5">Vliedberg</h1>' + '<p class="map_card-adres">Korne 180, 3068 GN Rotterdam</p>' + '<a href="https://rvko-banen-bbq.webflow.io/video-library/de-vliedberg" class="map_card-link">Bekijk de video</a>'
    },

    {
      coords: {
        lat: 51.91171932103334,
        lng: 4.506975965486799
      },
      content: '<h1 class="heading-5">Agnesschool</h1>' + '<p class="map_card-adres">Persoonsdam 18, 3071 EE Rotterdam</p>' + '<a href="https://rvko-banen-bbq.webflow.io/video-library/agnesschool" class="map_card-link">Bekijk de video</a>'
    },

    {
      coords: {
        lat: 51.847797342062854,
        lng: 4.365707114979009
      },
      content: '<h1 class="heading-5">Maasoever</h1>' + '<p class="map_card-adres">Emmy Belinfantestraat 1, 3207 HA Spijkenisse</p>' + '<a href="https://rvko-banen-bbq.webflow.io/video-library/maasoever" class="map_card-link">Bekijk de video</a>'
    },

    {
      coords: {
        lat: 51.8619679403102,
        lng: 4.549247629711414
      },
      content: '<h1 class="heading-5">Dr Schaepmanschool</h1>' + '<p class="map_card-adres">Marijkesingel 30, 2991 BK Barendrecht</p>' + '<a href="https://rvko-banen-bbq.webflow.io/video-library/dr-schaepmanschool" class="map_card-link">Bekijk de video</a>'
    },

    {
      coords: {
        lat: 51.937458002095475,
        lng: 4.430380569069952
      },
      content: '<h1 class="heading-5">Albert Schweitzerschool</h1>' + '<p class="map_card-adres">Baanweg 20, 3042 AB Rotterdam</p>' + '<a href="https://rvko-banen-bbq.webflow.io/video-library/albert-schweitzerschool" class="map_card-link">Bekijk de video</a>'
    },

    {
      coords: {
        lat: 51.9213473433088,
        lng: 4.466886595589832
      },
      content: '<h1 class="heading-5">Augustinusschool</h1>' + '<p class="map_card-adres">Josephstraat 12-14, 3014 TP Rotterdam</p>' + '<a href="https://rvko-banen-bbq.webflow.io/video-library/augustinusschool" class="map_card-link">Bekijk de video</a>'
    },

    {
      coords: {
        lat: 51.878406713401816,
        lng: 4.5131846165126275
      },
      content: '<h1 class="heading-5">Paus joannes</h1>' + '<p class="map_card-adres">Stuart Millpad 82, 3076 RK Rotterdam</p>' + '<a href="https://rvko-banen-bbq.webflow.io/video-library/paus-joannes" class="map_card-link">Bekijk de video</a>'
    },

    {
      coords: {
        lat: 51.91504786837854,
        lng: 4.440527005068777
      },
      content: '<h1 class="heading-5">Nicolaas Basisschool</h1>' + '<p class="map_card-adres">Korfmakersstraat 12, 3026 XH Rotterdam</p>' + '<a href="https://rvko-banen-bbq.webflow.io/video-library/nicolaasschool" class="map_card-link">Bekijk de video</a>'
    },

    {
      coords: {
        lat: 51.93853176041757,
        lng: 4.489435335738193
      },
      content: '<h1 class="heading-5">Oscar Romero School</h1>' + '<p class="map_card-adres">Isaäc Hubertstraat 151, 3034 CS Rotterdam</p>' + '<a href="https://rvko-banen-bbq.webflow.io/video-library/oscar-romeroschool" class="map_card-link">Bekijk de video</a>'
    },

    {
      coords: {
        lat: 51.94525761361213,
        lng: 4.599221633621742
      },
      content: '<h1 class="heading-5">Pieter Bas</h1>' + '<p class="map_card-adres">Dakotaweg 65, 2905 AB Capelle aan den IJssel</p>' + '<a href="https://rvko-banen-bbq.webflow.io/video-library/pieter-bas" class="map_card-link">Bekijk de video</a>'
    },

    {
      coords: {
        lat: 51.834431673692464,
        lng: 4.313836138636827
      },
      content: '<h1 class="heading-5">De Klinker</h1>' + '<p class="map_card-adres">Chopinstraat 77, 3208 RC Spijkenisse</p>' + '<a href="https://rvko-banen-bbq.webflow.io/video-library/klinker-de" class="map_card-link">Bekijk de video</a>'
    },

    {
      coords: {
        lat: 51.90319165158533,
        lng: 4.502006569350901
      },
      content: '<h1 class="heading-5">De Globetrotter</h1>' + '<p class="map_card-adres">Afrikaanderplein 5, 3072 EA Rotterdam</p>' + '<a href="https://rvko-banen-bbq.webflow.io/video-library/globetrotter-katendrecht-de" class="map_card-link">Bekijk de video</a>'
    },

    {
      coords: {
        lat: 51.88984454290506,
        lng: 4.477287332813358
      },
      content: '<h1 class="heading-5">Elisabethschool</h1>' + '<p class="map_card-adres">Carnissedreef 292, 3084 NN Rotterdam</p>' + '<a href="https://rvko-banen-bbq.webflow.io/video-library/elisabethschool" class="map_card-link">Bekijk de video</a>'
    },

    {
      coords: {
        lat: 51.908698826404155,
        lng: 4.504753151188406
      },
      content: '<h1 class="heading-5">De Wissel</h1>' + '<p class="map_card-adres">Spoorweghaven 174, 3071 ZG Rotterdam</p>' + '<a href="https://rvko-banen-bbq.webflow.io/video-library/wissel-de" class="map_card-link">Bekijk de video</a>'
    },

    {
      coords: {
        lat: 51.96563727839326,
        lng: 4.509902992133727
      },
      content: '<h1 class="heading-5">St. Michaelschool</h1>' + '<p class="map_card-adres">Mahlersingel 9, 3055 SJ Rotterdam</p>' + '<a href="https://rvko-banen-bbq.webflow.io/video-library/st-michaelschool" class="map_card-link">Bekijk de video</a>'
    },

    {
      coords: {
        lat: 51.89471775638815,
        lng: 4.509902992133727
      },
      content: '<h1 class="heading-5">SBO Laurens Cupertinoschool</h1>' + '<p class="map_card-adres">Bree 61, 3074 BC Rotterdam</p>' + '<a href="https://rvko-banen-bbq.webflow.io/video-library/sbo-laurens-cupertinoschool" class="map_card-link">Bekijk de video</a>'
    },

    {
      coords: {
        lat: 51.97961771968516,
        lng: 4.13108510795524
      },
      content: '<h1 class="heading-5">jozefschool</h1>' + '<p class="map_card-adres">Planciusstraat 34-36, 3151 BT Hoek van Holland</p>' + '<a href="https://rvko-banen-bbq.webflow.io/video-library/jozefschool" class="map_card-link">Bekijk de video</a>'
    },

    {
      coords: {
        lat: 51.954636222625936,
        lng: 4.521575964943122
      },
      content: '<h1 class="heading-5">WOW Verbazisschool</h1>' + '<p class="map_card-adres">Meerum Terwogtlaan 135, 3056 PP Rotterdam</p>' + '<a href="https://rvko-banen-bbq.webflow.io/video-library/verbazisschool-wow" class="map_card-link">Bekijk de video</a>'
    },

    {
      coords: {
        lat: 51.97166555793127,
        lng: 4.5648346324527616
      },
      content: '<h1 class="heading-5">De Horizon</h1>' + '<p class="map_card-adres">Jan Greshoffstraat 5, 3069 WG Rotterdam</p>' + '<a href="https://rvko-banen-bbq.webflow.io/video-library/de-horizon" class="map_card-link">Bekijk de video</a>'
    }
  ];

  // Loop through markers
  for (var i = 0; i < markers.length; i++) {
    addMarker(markers[i]);
  }

}

initMap();
