var OLS_1_1_0_Module_Factory = function () {
  var OLS_1_1_0 = {
    n: 'OLS_1_1_0',
    dens: 'http:\/\/www.opengis.net\/xls',
    deps: ['GML_3_1_1'],
    tis: [{
        ln: 'ReverseGeocodeResponseType',
        bti: '.AbstractResponseParametersType',
        ps: [{
            n: 'reverseGeocodedLocation',
            mno: 0,
            col: true,
            en: 'ReverseGeocodedLocation',
            ti: '.ReverseGeocodedLocationType'
          }]
      }, {
        ln: 'RouteSegmentType',
        bti: '.AbstractRouteSegmentType'
      }, {
        ln: 'WayPointType',
        bti: '.AbstractWayPointType',
        ps: [{
            n: 'location',
            rq: true,
            mx: false,
            dom: false,
            en: '_Location',
            ti: '.AbstractLocationType',
            t: 'er'
          }, {
            n: 'geocodeMatchCode',
            en: 'GeocodeMatchCode',
            ti: '.GeocodingQOSType'
          }, {
            n: 'stop',
            ti: 'Boolean',
            an: {
              lp: 'stop'
            },
            t: 'a'
          }]
      }, {
        ln: 'RouteSummaryType',
        bti: '.AbstractRouteSummaryType'
      }, {
        ln: 'AbstractRouteSummaryType',
        bti: '.AbstractDataType',
        ps: [{
            n: 'totalTime',
            rq: true,
            en: 'TotalTime',
            ti: 'Duration'
          }, {
            n: 'totalDistance',
            rq: true,
            en: 'TotalDistance',
            ti: '.DistanceType'
          }, {
            n: 'boundingBox',
            rq: true,
            en: 'BoundingBox',
            ti: 'GML_3_1_1.EnvelopeType'
          }]
      }, {
        ln: 'SpeedType',
        bti: '.AbstractMeasureType',
        ps: [{
            n: 'uom',
            an: {
              lp: 'uom'
            },
            t: 'a'
          }]
      }, {
        ln: 'AbstractPositionType',
        bti: '.AbstractLocationType'
      }, {
        ln: 'RouteGeometryRequestType',
        ps: [{
            n: 'boundingBox',
            en: 'BoundingBox',
            ti: 'GML_3_1_1.EnvelopeType'
          }, {
            n: 'scale',
            ti: 'PositiveInteger',
            an: {
              lp: 'scale'
            },
            t: 'a'
          }, {
            n: 'provideStartingPortion',
            ti: 'Boolean',
            an: {
              lp: 'provideStartingPortion'
            },
            t: 'a'
          }, {
            n: 'maxPoints',
            ti: 'PositiveInteger',
            an: {
              lp: 'maxPoints'
            },
            t: 'a'
          }]
      }, {
        ln: 'WithinBoundaryType',
        ps: [{
            n: 'aoi',
            rq: true,
            en: 'AOI',
            ti: '.AreaOfInterestType'
          }]
      }, {
        ln: 'POIInfoListType',
        ps: [{
            n: 'poiInfo',
            rq: true,
            col: true,
            en: 'POIInfo',
            ti: '.POIInfoType'
          }]
      }, {
        ln: 'LineCorridorType',
        ps: [{
            n: 'lineString',
            rq: true,
            en: {
              lp: 'LineString',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            ti: 'GML_3_1_1.LineStringType'
          }, {
            n: 'distance',
            rq: true,
            en: 'Distance',
            ti: '.DistanceType'
          }]
      }, {
        ln: 'RouteInstructionsRequestType',
        ps: [{
            n: 'format',
            an: {
              lp: 'format'
            },
            t: 'a'
          }, {
            n: 'provideGeometry',
            ti: 'Boolean',
            an: {
              lp: 'provideGeometry'
            },
            t: 'a'
          }, {
            n: 'provideBoundingBox',
            ti: 'Boolean',
            an: {
              lp: 'provideBoundingBox'
            },
            t: 'a'
          }]
      }, {
        ln: 'StyleType',
        ps: [{
            n: 'name',
            rq: true,
            en: 'Name'
          }, {
            n: 'styleContent',
            rq: true,
            en: 'StyleContent'
          }]
      }, {
        ln: 'BuildingLocatorType',
        bti: '.AbstractStreetLocatorType',
        ps: [{
            n: 'number',
            an: {
              lp: 'number'
            },
            t: 'a'
          }, {
            n: 'subdivision',
            an: {
              lp: 'subdivision'
            },
            t: 'a'
          }, {
            n: 'buildingName',
            an: {
              lp: 'buildingName'
            },
            t: 'a'
          }]
      }, {
        ln: 'AbstractPOISelectionCriteriaType'
      }, {
        ln: 'POIPropertyType',
        bti: '.AbstractPOIPropertyType',
        ps: [{
            n: 'name',
            rq: true,
            an: {
              lp: 'name'
            },
            t: 'a'
          }, {
            n: 'value',
            rq: true,
            an: {
              lp: 'value'
            },
            t: 'a'
          }]
      }, {
        ln: 'AbstractMSInformationType',
        ps: [{
            n: 'msIDType',
            an: {
              lp: 'msIDType'
            },
            t: 'a'
          }, {
            n: 'msIDValue',
            an: {
              lp: 'msIDValue'
            },
            t: 'a'
          }, {
            n: 'encryption',
            an: {
              lp: 'encryption'
            },
            t: 'a'
          }]
      }, {
        ln: 'RoutePlanType',
        ps: [{
            n: 'routePreference',
            rq: true,
            en: 'RoutePreference'
          }, {
            n: 'wayPointList',
            rq: true,
            en: 'WayPointList',
            ti: '.WayPointListType'
          }, {
            n: 'avoidList',
            en: 'AvoidList',
            ti: '.AvoidListType'
          }, {
            n: 'useRealTimeTraffic',
            ti: 'Boolean',
            an: {
              lp: 'useRealTimeTraffic'
            },
            t: 'a'
          }, {
            n: 'expectedStartTime',
            ti: 'DateTime',
            an: {
              lp: 'expectedStartTime'
            },
            t: 'a'
          }, {
            n: 'expectedEndTime',
            ti: 'DateTime',
            an: {
              lp: 'expectedEndTime'
            },
            t: 'a'
          }]
      }, {
        ln: 'XLSType',
        ps: [{
            n: 'header',
            rq: true,
            mx: false,
            dom: false,
            en: '_Header',
            ti: '.AbstractHeaderType',
            t: 'er'
          }, {
            n: 'body',
            rq: true,
            col: true,
            mx: false,
            dom: false,
            en: '_Body',
            ti: '.AbstractBodyType',
            t: 'er'
          }, {
            n: 'version',
            rq: true,
            ti: 'Decimal',
            an: {
              lp: 'version'
            },
            t: 'a'
          }, {
            n: 'lang',
            ti: 'Language',
            an: {
              lp: 'lang',
              ns: 'http:\/\/www.opengis.net\/xls'
            },
            t: 'a'
          }]
      }, {
        ln: 'RouteMapRequestType',
        ps: [{
            n: 'output',
            rq: true,
            col: true,
            en: 'Output',
            ti: '.RouteMapOutputType'
          }]
      }, {
        ln: 'OutputGatewayParametersType',
        bti: '.AbstractGatewayParametersType',
        ps: [{
            n: 'outputMSIDs',
            rq: true,
            en: 'OutputMSIDs',
            ti: '.OutputMSIDsType'
          }]
      }, {
        ln: 'ContentType',
        ps: [{
            n: 'data',
            rq: true,
            en: 'Data'
          }, {
            n: 'url',
            rq: true,
            en: 'URL'
          }, {
            n: 'format',
            rq: true,
            an: {
              lp: 'format'
            },
            t: 'a'
          }, {
            n: 'width',
            rq: true,
            ti: 'Integer',
            an: {
              lp: 'width'
            },
            t: 'a'
          }, {
            n: 'height',
            rq: true,
            ti: 'Integer',
            an: {
              lp: 'height'
            },
            t: 'a'
          }]
      }, {
        ln: 'NamedPlaceType',
        ps: [{
            n: 'value',
            t: 'v'
          }, {
            n: 'type',
            rq: true,
            an: {
              lp: 'type'
            },
            t: 'a'
          }]
      }, {
        ln: 'DirectoryRequestType',
        bti: '.AbstractRequestParametersType',
        ps: [{
            n: 'poiLocation',
            en: 'POILocation',
            ti: '.POILocationType'
          }, {
            n: 'poiSelectionCriteria',
            rq: true,
            mx: false,
            dom: false,
            en: '_POISelectionCriteria',
            ti: '.AbstractPOISelectionCriteriaType',
            t: 'er'
          }, {
            n: 'sortCriteria',
            an: {
              lp: 'sortCriteria'
            },
            t: 'a'
          }, {
            n: 'sortDirection',
            an: {
              lp: 'sortDirection'
            },
            t: 'a'
          }, {
            n: 'distanceUnit',
            an: {
              lp: 'distanceUnit'
            },
            t: 'a'
          }]
      }, {
        ln: 'PointOfInterestType',
        bti: '.AbstractPOIType',
        ps: [{
            n: 'poiAttributeList',
            en: 'POIAttributeList',
            ti: '.POIAttributeListType'
          }, {
            n: 'point',
            en: {
              lp: 'Point',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            ti: 'GML_3_1_1.PointType'
          }, {
            n: 'address',
            en: 'Address',
            ti: '.AddressType'
          }, {
            n: 'id',
            rq: true,
            an: {
              lp: 'ID'
            },
            t: 'a'
          }, {
            n: 'poiName',
            an: {
              lp: 'POIName'
            },
            t: 'a'
          }, {
            n: 'phoneNumber',
            an: {
              lp: 'phoneNumber'
            },
            t: 'a'
          }, {
            n: 'description',
            an: {
              lp: 'description'
            },
            t: 'a'
          }]
      }, {
        ln: 'AvailableFormatsType',
        ps: [{
            n: 'format',
            rq: true,
            col: true,
            en: 'Format'
          }]
      }, {
        ln: 'ReverseGeocodeRequestType',
        bti: '.AbstractRequestParametersType',
        ps: [{
            n: 'position',
            rq: true,
            en: 'Position',
            ti: '.PositionType'
          }, {
            n: 'reverseGeocodePreference',
            mno: 0,
            col: true,
            en: 'ReverseGeocodePreference'
          }]
      }, {
        ln: 'ErrorType',
        ps: [{
            n: 'errorCode',
            rq: true,
            an: {
              lp: 'errorCode'
            },
            t: 'a'
          }, {
            n: 'severity',
            an: {
              lp: 'severity'
            },
            t: 'a'
          }, {
            n: 'locationID',
            ti: 'IDREF',
            an: {
              lp: 'locationID'
            },
            t: 'a'
          }, {
            n: 'locationPath',
            an: {
              lp: 'locationPath'
            },
            t: 'a'
          }, {
            n: 'message',
            an: {
              lp: 'message'
            },
            t: 'a'
          }]
      }, {
        ln: 'AbstractResponseParametersType'
      }, {
        ln: 'AbstractRouteSegmentType',
        ps: [{
            n: 'distance',
            rq: true,
            en: 'Distance',
            ti: '.DistanceType'
          }, {
            n: 'travelTime',
            rq: true,
            en: 'TravelTime',
            ti: 'Duration'
          }, {
            n: 'boundingBox',
            rq: true,
            en: 'BoundingBox',
            ti: 'GML_3_1_1.EnvelopeType'
          }, {
            n: 'name',
            an: {
              lp: 'name'
            },
            t: 'a'
          }]
      }, {
        ln: 'ResponseType',
        bti: '.AbstractBodyType',
        ps: [{
            n: 'errorList',
            en: 'ErrorList',
            ti: '.ErrorListType'
          }, {
            n: 'responseParameters',
            mx: false,
            dom: false,
            en: '_ResponseParameters',
            ti: '.AbstractResponseParametersType',
            t: 'er'
          }, {
            n: 'version',
            rq: true,
            an: {
              lp: 'version'
            },
            t: 'a'
          }, {
            n: 'requestID',
            rq: true,
            an: {
              lp: 'requestID'
            },
            t: 'a'
          }, {
            n: 'numberOfResponses',
            ti: 'NonNegativeInteger',
            an: {
              lp: 'numberOfResponses'
            },
            t: 'a'
          }]
      }, {
        ln: 'AbstractHeaderType'
      }, {
        ln: 'LayerType.Layer',
        tn: null,
        ps: [{
            n: 'style',
            en: 'Style',
            ti: '.StyleType'
          }, {
            n: 'name',
            rq: true,
            an: {
              lp: 'name'
            },
            t: 'a'
          }]
      }, {
        ln: 'ClipType',
        ps: [{
            n: 'polygon',
            rq: true,
            en: {
              lp: 'Polygon',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            ti: 'GML_3_1_1.PolygonType'
          }, {
            n: 'circleByCenterPoint',
            rq: true,
            en: {
              lp: 'CircleByCenterPoint',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            ti: 'GML_3_1_1.CircleByCenterPointType'
          }, {
            n: 'lineCorridor',
            rq: true,
            en: 'LineCorridor',
            ti: '.LineCorridorType'
          }]
      }, {
        ln: 'AbstractStreetLocatorType'
      }, {
        ln: 'AvoidListType',
        ps: [{
            n: 'aoi',
            mno: 0,
            col: true,
            en: 'AOI',
            ti: '.AreaOfInterestType'
          }, {
            n: 'location',
            mno: 0,
            col: true,
            mx: false,
            dom: false,
            en: '_Location',
            ti: '.AbstractLocationType',
            t: 'er'
          }, {
            n: 'avoidFeature',
            mno: 0,
            col: true,
            en: 'AvoidFeature'
          }]
      }, {
        ln: 'AbstractMSIDsType',
        ps: [{
            n: 'session',
            an: {
              lp: 'session'
            },
            t: 'a'
          }]
      }, {
        ln: 'RouteInstructionsListType',
        bti: '.AbstractDataType',
        ps: [{
            n: 'routeInstruction',
            rq: true,
            col: true,
            en: 'RouteInstruction',
            ti: '.RouteInstructionType'
          }, {
            n: 'format',
            an: {
              lp: 'format'
            },
            t: 'a'
          }, {
            n: 'lang',
            rq: true,
            ti: 'Language',
            an: {
              lp: 'lang',
              ns: 'http:\/\/www.opengis.net\/xls'
            },
            t: 'a'
          }]
      }, {
        ln: 'AbstractRequestParametersType'
      }, {
        ln: 'GetPortrayMapCapabilitiesResponseType',
        bti: '.AbstractResponseParametersType',
        ps: [{
            n: 'availableSRS',
            rq: true,
            en: 'AvailableSRS',
            ti: '.AvailableSRSType'
          }, {
            n: 'availableLayers',
            rq: true,
            en: 'AvailableLayers',
            ti: '.AvailableLayersType'
          }, {
            n: 'availableFormats',
            rq: true,
            en: 'AvailableFormats',
            ti: '.AvailableFormatsType'
          }, {
            n: 'availableStyles',
            rq: true,
            en: 'AvailableStyles',
            ti: '.AvailableStylesType'
          }]
      }, {
        ln: 'POIAttributeListType',
        ps: [{
            n: 'referenceSystem',
            en: 'ReferenceSystem',
            ti: '.ReferenceSystemType'
          }, {
            n: 'poiInfoList',
            en: 'POIInfoList',
            ti: '.POIInfoListType'
          }]
      }, {
        ln: 'AbstractAddressType',
        bti: '.AbstractLocationType',
        ps: [{
            n: 'addressee',
            an: {
              lp: 'addressee'
            },
            t: 'a'
          }, {
            n: 'countryCode',
            rq: true,
            an: {
              lp: 'countryCode'
            },
            t: 'a'
          }]
      }, {
        ln: 'OutputMSIDsType',
        bti: '.AbstractMSIDsType',
        ps: [{
            n: 'outputMSInformation',
            rq: true,
            en: 'OutputMSInformation',
            ti: '.OutputMSInformationType'
          }]
      }, {
        ln: 'AreaOfInterestType',
        bti: '.AbstractDataType',
        ps: [{
            n: 'circleByCenterPoint',
            rq: true,
            en: {
              lp: 'CircleByCenterPoint',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            ti: 'GML_3_1_1.CircleByCenterPointType'
          }, {
            n: 'polygon',
            rq: true,
            en: {
              lp: 'Polygon',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            ti: 'GML_3_1_1.PolygonType'
          }, {
            n: 'envelope',
            rq: true,
            mx: false,
            dom: false,
            en: {
              lp: 'Envelope',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            ti: 'GML_3_1_1.EnvelopeType',
            t: 'er'
          }]
      }, {
        ln: 'PortrayMapResponseType',
        bti: '.AbstractResponseParametersType',
        ps: [{
            n: 'map',
            rq: true,
            col: true,
            en: 'Map',
            ti: '.MapType'
          }]
      }, {
        ln: 'StreetNameType',
        ps: [{
            n: 'value',
            t: 'v'
          }, {
            n: 'directionalPrefix',
            an: {
              lp: 'directionalPrefix'
            },
            t: 'a'
          }, {
            n: 'typePrefix',
            an: {
              lp: 'typePrefix'
            },
            t: 'a'
          }, {
            n: 'officialName',
            an: {
              lp: 'officialName'
            },
            t: 'a'
          }, {
            n: 'typeSuffix',
            an: {
              lp: 'typeSuffix'
            },
            t: 'a'
          }, {
            n: 'directionalSuffix',
            an: {
              lp: 'directionalSuffix'
            },
            t: 'a'
          }, {
            n: 'muniOctant',
            ti: 'GML_3_1_1.CompassPointEnumeration',
            an: {
              lp: 'muniOctant'
            },
            t: 'a'
          }]
      }, {
        ln: 'OverlayType',
        ps: [{
            n: 'poi',
            rq: true,
            en: 'POI',
            ti: '.PointOfInterestType'
          }, {
            n: 'routeGeometry',
            rq: true,
            en: 'RouteGeometry',
            ti: '.RouteGeometryType'
          }, {
            n: 'position',
            rq: true,
            en: 'Position',
            ti: '.PositionType'
          }, {
            n: 'map',
            rq: true,
            en: 'Map',
            ti: '.MapType'
          }, {
            n: 'style',
            en: 'Style',
            ti: '.StyleType'
          }, {
            n: 'zorder',
            ti: 'Integer',
            an: {
              lp: 'zorder'
            },
            t: 'a'
          }]
      }, {
        ln: 'CircularArcType',
        bti: 'GML_3_1_1.AbstractGeometricPrimitiveType',
        ps: [{
            n: 'pos',
            rq: true,
            en: {
              lp: 'pos',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            ti: 'GML_3_1_1.DirectPositionType'
          }, {
            n: 'innerRadius',
            rq: true,
            ti: 'GML_3_1_1.LengthType'
          }, {
            n: 'outerRadius',
            rq: true,
            ti: 'GML_3_1_1.LengthType'
          }, {
            n: 'startAngle',
            rq: true,
            ti: 'GML_3_1_1.AngleType'
          }, {
            n: 'endAngle',
            rq: true,
            ti: 'GML_3_1_1.AngleType'
          }, {
            n: 'interpolation',
            ti: 'GML_3_1_1.CurveInterpolationType',
            an: {
              lp: 'interpolation'
            },
            t: 'a'
          }, {
            n: 'numARC',
            rq: true,
            ti: 'Integer',
            an: {
              lp: 'numArc'
            },
            t: 'a'
          }]
      }, {
        ln: 'InputMSIDsType',
        bti: '.AbstractMSIDsType',
        ps: [{
            n: 'inputMSInformation',
            rq: true,
            en: 'InputMSInformation',
            ti: '.InputMSInformationType'
          }]
      }, {
        ln: 'VerAccType',
        ps: [{
            n: 'distance',
            rq: true,
            en: 'Distance',
            ti: '.DistanceType'
          }]
      }, {
        ln: 'AltitudeType',
        bti: '.DistanceType'
      }, {
        ln: 'WayPointListType',
        ps: [{
            n: 'startPoint',
            rq: true,
            en: 'StartPoint',
            ti: '.WayPointType'
          }, {
            n: 'viaPoint',
            mno: 0,
            col: true,
            en: 'ViaPoint',
            ti: '.WayPointType'
          }, {
            n: 'endPoint',
            rq: true,
            en: 'EndPoint',
            ti: '.WayPointType'
          }]
      }, {
        ln: 'AbstractNamedReferenceSystem'
      }, {
        ln: 'PositionType',
        bti: '.AbstractPositionType',
        ps: [{
            n: 'point',
            rq: true,
            en: {
              lp: 'Point',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            ti: 'GML_3_1_1.PointType'
          }, {
            n: 'ellipse',
            rq: true,
            en: 'Ellipse',
            ti: '.EllipseType'
          }, {
            n: 'circleByCenterPoint',
            rq: true,
            en: {
              lp: 'CircleByCenterPoint',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            ti: 'GML_3_1_1.CircleByCenterPointType'
          }, {
            n: 'circularArc',
            rq: true,
            en: 'CircularArc',
            ti: '.CircularArcType'
          }, {
            n: 'polygon',
            rq: true,
            en: {
              lp: 'Polygon',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            ti: 'GML_3_1_1.PolygonType'
          }, {
            n: 'multiPolygon',
            rq: true,
            en: {
              lp: 'MultiPolygon',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            ti: 'GML_3_1_1.MultiPolygonType'
          }, {
            n: 'qoP',
            en: 'QoP',
            ti: '.QualityOfPositionType'
          }, {
            n: 'time',
            en: 'Time',
            ti: '.TimeType'
          }, {
            n: 'speed',
            en: 'Speed',
            ti: '.SpeedType'
          }, {
            n: 'direction',
            en: 'Direction',
            ti: '.AngleType'
          }, {
            n: 'levelOfConf',
            an: {
              lp: 'levelOfConf'
            },
            t: 'a'
          }]
      }, {
        ln: 'ReverseGeocodedLocationType',
        ps: [{
            n: 'point',
            rq: true,
            en: {
              lp: 'Point',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            ti: 'GML_3_1_1.PointType'
          }, {
            n: 'address',
            rq: true,
            en: 'Address',
            ti: '.AddressType'
          }, {
            n: 'searchCentreDistance',
            en: 'SearchCentreDistance',
            ti: '.DistanceType'
          }]
      }, {
        ln: 'NACEType',
        bti: '.AbstractNamedReferenceSystem',
        ps: [{
            n: 'division',
            an: {
              lp: 'division'
            },
            t: 'a'
          }, {
            n: 'group',
            an: {
              lp: 'group'
            },
            t: 'a'
          }, {
            n: 'clazz',
            an: {
              lp: 'class'
            },
            t: 'a'
          }, {
            n: 'description',
            an: {
              lp: 'description'
            },
            t: 'a'
          }]
      }, {
        ln: 'HorAccType',
        ps: [{
            n: 'distance',
            rq: true,
            en: 'Distance',
            ti: '.DistanceType'
          }, {
            n: 'angle',
            rq: true,
            en: 'Angle',
            ti: '.AngleType'
          }]
      }, {
        ln: 'TimeType',
        bti: '.TimeStampType',
        ps: [{
            n: 'utcOffset',
            ti: 'Integer',
            an: {
              lp: 'utcOffset'
            },
            t: 'a'
          }]
      }, {
        ln: 'CenterContextType',
        ps: [{
            n: 'centerPoint',
            rq: true,
            en: 'CenterPoint',
            ti: 'GML_3_1_1.PointType'
          }, {
            n: 'displayScale',
            rq: true,
            en: 'DisplayScale',
            ti: 'Integer'
          }, {
            n: 'dpi',
            rq: true,
            en: 'DPI',
            ti: 'Integer'
          }, {
            n: 'radius',
            rq: true,
            en: 'Radius',
            ti: '.RadiusType'
          }, {
            n: 'azimuth',
            ti: 'Integer',
            an: {
              lp: 'azimuth'
            },
            t: 'a'
          }, {
            n: 'srs',
            rq: true,
            an: {
              lp: 'SRS'
            },
            t: 'a'
          }]
      }, {
        ln: 'RouteMapOutputType',
        ps: [{
            n: 'bBoxContext',
            en: 'BBoxContext',
            ti: 'GML_3_1_1.EnvelopeType'
          }, {
            n: 'width',
            ti: 'NonNegativeInteger',
            an: {
              lp: 'width'
            },
            t: 'a'
          }, {
            n: 'height',
            ti: 'NonNegativeInteger',
            an: {
              lp: 'height'
            },
            t: 'a'
          }, {
            n: 'format',
            an: {
              lp: 'format'
            },
            t: 'a'
          }, {
            n: 'bGcolor',
            an: {
              lp: 'BGcolor'
            },
            t: 'a'
          }, {
            n: 'transparent',
            ti: 'Boolean',
            an: {
              lp: 'transparent'
            },
            t: 'a'
          }, {
            n: 'style',
            an: {
              lp: 'style'
            },
            t: 'a'
          }]
      }, {
        ln: 'InputGatewayParametersType',
        bti: '.AbstractGatewayParametersType',
        ps: [{
            n: 'inputMSIDs',
            rq: true,
            en: 'InputMSIDs',
            ti: '.InputMSIDsType'
          }]
      }, {
        ln: 'OutputType',
        ps: [{
            n: 'bBoxContext',
            rq: true,
            en: 'BBoxContext',
            ti: 'GML_3_1_1.EnvelopeType'
          }, {
            n: 'centerContext',
            rq: true,
            en: 'CenterContext',
            ti: '.CenterContextType'
          }, {
            n: 'width',
            ti: 'NonNegativeInteger',
            an: {
              lp: 'width'
            },
            t: 'a'
          }, {
            n: 'height',
            ti: 'NonNegativeInteger',
            an: {
              lp: 'height'
            },
            t: 'a'
          }, {
            n: 'format',
            an: {
              lp: 'format'
            },
            t: 'a'
          }, {
            n: 'bGcolor',
            an: {
              lp: 'BGcolor'
            },
            t: 'a'
          }, {
            n: 'transparent',
            ti: 'Boolean',
            an: {
              lp: 'transparent'
            },
            t: 'a'
          }, {
            n: 'content',
            an: {
              lp: 'content'
            },
            t: 'a'
          }]
      }, {
        ln: 'AbstractWayPointType'
      }, {
        ln: 'ReferenceSystemType',
        ps: [{
            n: 'namedReferenceSystem',
            rq: true,
            col: true,
            mx: false,
            dom: false,
            en: '_NamedReferenceSystem',
            ti: '.AbstractNamedReferenceSystem',
            t: 'er'
          }]
      }, {
        ln: 'AngleType',
        bti: '.AbstractMeasureType',
        ps: [{
            n: 'uom',
            an: {
              lp: 'uom'
            },
            t: 'a'
          }]
      }, {
        ln: 'POIProperties',
        tn: null,
        bti: '.POIPropertiesType'
      }, {
        ln: 'AbstractGatewayParametersType',
        ps: [{
            n: 'requestedQoP',
            en: 'RequestedQoP',
            ti: '.QualityOfPositionType'
          }, {
            n: 'locationType',
            an: {
              lp: 'locationType'
            },
            t: 'a'
          }, {
            n: 'requestedsrsName',
            an: {
              lp: 'requestedsrsName'
            },
            t: 'a'
          }, {
            n: 'priority',
            an: {
              lp: 'priority'
            },
            t: 'a'
          }]
      }, {
        ln: 'DetermineRouteRequestType',
        bti: '.AbstractRequestParametersType',
        ps: [{
            n: 'routeHandle',
            rq: true,
            en: 'RouteHandle',
            ti: '.RouteHandleType'
          }, {
            n: 'routePlan',
            rq: true,
            en: 'RoutePlan',
            ti: '.RoutePlanType'
          }, {
            n: 'routeInstructionsRequest',
            en: 'RouteInstructionsRequest',
            ti: '.RouteInstructionsRequestType'
          }, {
            n: 'routeGeometryRequest',
            en: 'RouteGeometryRequest',
            ti: '.RouteGeometryRequestType'
          }, {
            n: 'routeMapRequest',
            en: 'RouteMapRequest',
            ti: '.RouteMapRequestType'
          }, {
            n: 'provideRouteHandle',
            ti: 'Boolean',
            an: {
              lp: 'provideRouteHandle'
            },
            t: 'a'
          }, {
            n: 'distanceUnit',
            an: {
              lp: 'distanceUnit'
            },
            t: 'a'
          }]
      }, {
        ln: 'AddressType',
        bti: '.AbstractAddressType',
        ps: [{
            n: 'freeFormAddress',
            rq: true
          }, {
            n: 'streetAddress',
            rq: true,
            en: 'StreetAddress',
            ti: '.StreetAddressType'
          }, {
            n: 'place',
            mno: 0,
            col: true,
            en: 'Place',
            ti: '.NamedPlaceType'
          }, {
            n: 'postalCode',
            en: 'PostalCode'
          }]
      }, {
        ln: 'PortrayMapRequestType',
        bti: '.AbstractRequestParametersType',
        ps: [{
            n: 'output',
            rq: true,
            col: true,
            en: 'Output',
            ti: '.OutputType'
          }, {
            n: 'basemap',
            en: 'Basemap',
            ti: '.LayerType'
          }, {
            n: 'overlay',
            mno: 0,
            col: true,
            en: 'Overlay',
            ti: '.OverlayType'
          }]
      }, {
        ln: 'POIPropertiesType',
        bti: '.AbstractPOISelectionCriteriaType',
        ps: [{
            n: 'poiProperty',
            mno: 0,
            col: true,
            mx: false,
            dom: false,
            en: '_POIProperty',
            ti: 'AnyType',
            t: 'er'
          }, {
            n: 'directoryType',
            an: {
              lp: 'directoryType'
            },
            t: 'a'
          }]
      }, {
        ln: 'RequestHeaderType',
        bti: '.AbstractHeaderType',
        ps: [{
            n: 'clientName',
            an: {
              lp: 'clientName'
            },
            t: 'a'
          }, {
            n: 'clientPassword',
            an: {
              lp: 'clientPassword'
            },
            t: 'a'
          }, {
            n: 'sessionID',
            an: {
              lp: 'sessionID'
            },
            t: 'a'
          }, {
            n: 'srsName',
            an: {
              lp: 'srsName'
            },
            t: 'a'
          }, {
            n: 'msid',
            an: {
              lp: 'MSID'
            },
            t: 'a'
          }]
      }, {
        ln: 'GeocodingQOSType',
        ps: [{
            n: 'accuracy',
            ti: 'Float',
            an: {
              lp: 'accuracy'
            },
            t: 'a'
          }, {
            n: 'matchType',
            an: {
              lp: 'matchType'
            },
            t: 'a'
          }]
      }, {
        ln: 'AvailableLayersType',
        ps: [{
            n: 'layer',
            rq: true,
            col: true,
            en: 'Layer'
          }]
      }, {
        ln: 'AvailableSRSType',
        ps: [{
            n: 'srs',
            rq: true,
            col: true,
            en: 'SRS'
          }]
      }, {
        ln: 'WithinDistanceType',
        ps: [{
            n: 'location',
            rq: true,
            mx: false,
            dom: false,
            en: '_Location',
            ti: '.AbstractLocationType',
            t: 'er'
          }, {
            n: 'minimumDistance',
            en: 'MinimumDistance',
            ti: '.DistanceType'
          }, {
            n: 'maximumDistance',
            en: 'MaximumDistance',
            ti: '.DistanceType'
          }]
      }, {
        ln: 'POILocationType',
        ps: [{
            n: 'address',
            rq: true,
            en: 'Address',
            ti: '.AddressType'
          }, {
            n: 'nearest',
            rq: true,
            en: 'Nearest',
            ti: '.NearestType'
          }, {
            n: 'withinDistance',
            rq: true,
            en: 'WithinDistance',
            ti: '.WithinDistanceType'
          }, {
            n: 'withinBoundary',
            rq: true,
            en: 'WithinBoundary',
            ti: '.WithinBoundaryType'
          }]
      }, {
        ln: 'InputMSInformationType',
        bti: '.AbstractMSInformationType'
      }, {
        ln: 'DirectoryResponseType',
        bti: '.AbstractResponseParametersType',
        ps: [{
            n: 'poiContext',
            mno: 0,
            col: true,
            en: 'POIContext',
            ti: '.POIWithDistanceType'
          }]
      }, {
        ln: 'QualityOfPositionType',
        ps: [{
            n: 'horizontalAcc',
            rq: true,
            en: 'HorizontalAcc',
            ti: '.HorAccType'
          }, {
            n: 'verticalAcc',
            rq: true,
            en: 'VerticalAcc',
            ti: '.VerAccType'
          }, {
            n: 'responseReq',
            an: {
              lp: 'responseReq'
            },
            t: 'a'
          }, {
            n: 'responseTimer',
            an: {
              lp: 'responseTimer'
            },
            t: 'a'
          }]
      }, {
        ln: 'AbstractMeasureType',
        ps: [{
            n: 'value',
            rq: true,
            ti: 'Decimal',
            an: {
              lp: 'value'
            },
            t: 'a'
          }, {
            n: 'accuracy',
            ti: 'Decimal',
            an: {
              lp: 'accuracy'
            },
            t: 'a'
          }]
      }, {
        ln: 'OutputMSInformationType',
        bti: '.AbstractMSInformationType',
        ps: [{
            n: 'position',
            rq: true,
            en: 'Position',
            ti: '.PositionType'
          }]
      }, {
        ln: 'GetPortrayMapCapabilitiesRequestType',
        bti: '.AbstractRequestParametersType'
      }, {
        ln: 'StreetAddressType',
        ps: [{
            n: 'streetLocation',
            mx: false,
            dom: false,
            en: '_StreetLocation',
            ti: '.AbstractStreetLocatorType',
            t: 'er'
          }, {
            n: 'street',
            rq: true,
            col: true,
            en: 'Street',
            ti: '.StreetNameType'
          }]
      }, {
        ln: 'RouteMapType',
        bti: '.MapType',
        ps: [{
            n: 'description',
            an: {
              lp: 'description'
            },
            t: 'a'
          }]
      }, {
        ln: 'NAICSType',
        bti: '.AbstractNamedReferenceSystem',
        ps: [{
            n: 'type',
            an: {
              lp: 'type'
            },
            t: 'a'
          }, {
            n: 'subType',
            an: {
              lp: 'subType'
            },
            t: 'a'
          }, {
            n: 'category',
            an: {
              lp: 'category'
            },
            t: 'a'
          }]
      }, {
        ln: 'RouteHandleType',
        ps: [{
            n: 'serviceID',
            an: {
              lp: 'serviceID'
            },
            t: 'a'
          }, {
            n: 'routeID',
            rq: true,
            an: {
              lp: 'routeID'
            },
            t: 'a'
          }]
      }, {
        ln: 'SLIRType',
        bti: '.AbstractRequestParametersType',
        ps: [{
            n: 'inputGatewayParameters',
            rq: true,
            en: 'InputGatewayParameters',
            ti: '.InputGatewayParametersType'
          }]
      }, {
        ln: 'RequestType',
        bti: '.AbstractBodyType',
        ps: [{
            n: 'requestParameters',
            mx: false,
            dom: false,
            en: '_RequestParameters',
            ti: '.AbstractRequestParametersType',
            t: 'er'
          }, {
            n: 'methodName',
            rq: true,
            ti: 'NMToken',
            an: {
              lp: 'methodName'
            },
            t: 'a'
          }, {
            n: 'version',
            rq: true,
            an: {
              lp: 'version'
            },
            t: 'a'
          }, {
            n: 'requestID',
            rq: true,
            an: {
              lp: 'requestID'
            },
            t: 'a'
          }, {
            n: 'maximumResponses',
            ti: 'NonNegativeInteger',
            an: {
              lp: 'maximumResponses'
            },
            t: 'a'
          }]
      }, {
        ln: 'RouteInstructionType',
        ps: [{
            n: 'instruction',
            rq: true,
            en: 'Instruction'
          }, {
            n: 'distance',
            rq: true,
            ti: '.DistanceType'
          }, {
            n: 'routeInstructionGeometry',
            en: 'RouteInstructionGeometry',
            ti: '.RouteGeometryType'
          }, {
            n: 'boundingBox',
            en: 'BoundingBox',
            ti: 'GML_3_1_1.EnvelopeType'
          }, {
            n: 'duration',
            rq: true,
            ti: 'Duration',
            an: {
              lp: 'duration'
            },
            t: 'a'
          }, {
            n: 'description',
            an: {
              lp: 'description'
            },
            t: 'a'
          }]
      }, {
        ln: 'EllipseType',
        bti: 'GML_3_1_1.AbstractGeometricPrimitiveType',
        ps: [{
            n: 'pos',
            rq: true,
            en: {
              lp: 'pos',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            ti: 'GML_3_1_1.DirectPositionType'
          }, {
            n: 'majorAxis',
            rq: true,
            ti: 'GML_3_1_1.LengthType'
          }, {
            n: 'minorAxis',
            rq: true,
            ti: 'GML_3_1_1.LengthType'
          }, {
            n: 'rotation',
            rq: true,
            ti: 'GML_3_1_1.AngleType'
          }]
      }, {
        ln: 'GeocodeResponseListType',
        ps: [{
            n: 'geocodedAddress',
            rq: true,
            col: true,
            en: 'GeocodedAddress',
            ti: '.GeocodedAddressType'
          }, {
            n: 'numberOfGeocodedAddresses',
            rq: true,
            ti: 'NonNegativeInteger',
            an: {
              lp: 'numberOfGeocodedAddresses'
            },
            t: 'a'
          }]
      }, {
        ln: 'SICType',
        bti: '.AbstractNamedReferenceSystem',
        ps: [{
            n: 'type',
            an: {
              lp: 'type'
            },
            t: 'a'
          }, {
            n: 'subType',
            an: {
              lp: 'subType'
            },
            t: 'a'
          }, {
            n: 'category',
            an: {
              lp: 'category'
            },
            t: 'a'
          }, {
            n: 'code',
            an: {
              lp: 'code'
            },
            t: 'a'
          }]
      }, {
        ln: 'AbstractBodyType'
      }, {
        ln: 'GeocodeResponseType',
        bti: '.AbstractResponseParametersType',
        ps: [{
            n: 'geocodeResponseList',
            rq: true,
            col: true,
            en: 'GeocodeResponseList',
            ti: '.GeocodeResponseListType'
          }]
      }, {
        ln: 'SLIAType',
        bti: '.AbstractResponseParametersType',
        ps: [{
            n: 'outputGatewayParameters',
            rq: true,
            en: 'OutputGatewayParameters',
            ti: '.OutputGatewayParametersType'
          }, {
            n: 'requestID',
            an: {
              lp: 'requestID'
            },
            t: 'a'
          }]
      }, {
        ln: 'GeocodedAddressType',
        ps: [{
            n: 'point',
            rq: true,
            en: {
              lp: 'Point',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            ti: 'GML_3_1_1.PointType'
          }, {
            n: 'address',
            rq: true,
            en: 'Address',
            ti: '.AddressType'
          }, {
            n: 'geocodeMatchCode',
            en: 'GeocodeMatchCode',
            ti: '.GeocodingQOSType'
          }]
      }, {
        ln: 'GeocodeRequestType',
        bti: '.AbstractRequestParametersType',
        ps: [{
            n: 'address',
            rq: true,
            col: true,
            en: 'Address',
            ti: '.AddressType'
          }]
      }, {
        ln: 'RouteGeometryType',
        bti: '.AbstractDataType',
        ps: [{
            n: 'lineString',
            rq: true,
            en: {
              lp: 'LineString',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            ti: 'GML_3_1_1.LineStringType'
          }]
      }, {
        ln: 'NearestType',
        ps: [{
            n: 'location',
            rq: true,
            col: true,
            mx: false,
            dom: false,
            en: '_Location',
            ti: '.AbstractLocationType',
            t: 'er'
          }, {
            n: 'nearestCriterion',
            an: {
              lp: 'nearestCriterion'
            },
            t: 'a'
          }]
      }, {
        ln: 'AbstractPOIPropertyType'
      }, {
        ln: 'AbstractLocationType',
        bti: '.AbstractDataType'
      }, {
        ln: 'POIInfoType',
        ps: [{
            n: 'name',
            rq: true,
            an: {
              lp: 'name'
            },
            t: 'a'
          }, {
            n: 'value',
            rq: true,
            an: {
              lp: 'value'
            },
            t: 'a'
          }]
      }, {
        ln: 'AbstractDataType'
      }, {
        ln: 'DistanceType',
        bti: '.AbstractMeasureType',
        ps: [{
            n: 'uom',
            an: {
              lp: 'uom'
            },
            t: 'a'
          }]
      }, {
        ln: 'DetermineRouteResponseType',
        bti: '.AbstractResponseParametersType',
        ps: [{
            n: 'routeHandle',
            en: 'RouteHandle',
            ti: '.RouteHandleType'
          }, {
            n: 'routeSummary',
            rq: true,
            en: 'RouteSummary',
            ti: '.RouteSummaryType'
          }, {
            n: 'routeGeometry',
            en: 'RouteGeometry',
            ti: '.RouteGeometryType'
          }, {
            n: 'routeInstructionsList',
            en: 'RouteInstructionsList',
            ti: '.RouteInstructionsListType'
          }, {
            n: 'routeMap',
            mno: 0,
            col: true,
            en: 'RouteMap',
            ti: '.RouteMapType'
          }]
      }, {
        ln: 'AvailableStylesType',
        ps: [{
            n: 'style',
            rq: true,
            col: true,
            en: 'Style'
          }]
      }, {
        ln: 'MapType',
        bti: '.AbstractDataType',
        ps: [{
            n: 'content',
            rq: true,
            en: 'Content',
            ti: '.ContentType'
          }, {
            n: 'bBoxContext',
            rq: true,
            en: 'BBoxContext',
            ti: 'GML_3_1_1.EnvelopeType'
          }, {
            n: 'centerContext',
            rq: true,
            en: 'CenterContext',
            ti: '.CenterContextType'
          }]
      }, {
        ln: 'TimeStampType',
        ps: [{
            n: 'begin',
            rq: true,
            ti: 'DateTime',
            an: {
              lp: 'begin'
            },
            t: 'a'
          }, {
            n: 'duration',
            ti: 'Duration',
            an: {
              lp: 'duration'
            },
            t: 'a'
          }]
      }, {
        ln: 'POIWithDistanceType',
        ps: [{
            n: 'poi',
            rq: true,
            en: 'POI',
            ti: '.PointOfInterestType'
          }, {
            n: 'distance',
            en: 'Distance',
            ti: '.DistanceType'
          }]
      }, {
        ln: 'LayerType',
        ps: [{
            n: 'layer',
            rq: true,
            col: true,
            en: 'Layer',
            ti: '.LayerType.Layer'
          }, {
            n: 'filter',
            rq: true,
            an: {
              lp: 'filter'
            },
            t: 'a'
          }]
      }, {
        ln: 'ResponseHeaderType',
        bti: '.AbstractHeaderType',
        ps: [{
            n: 'errorList',
            en: 'ErrorList',
            ti: '.ErrorListType'
          }, {
            n: 'sessionID',
            an: {
              lp: 'sessionID'
            },
            t: 'a'
          }]
      }, {
        ln: 'ErrorListType',
        ps: [{
            n: 'error',
            rq: true,
            col: true,
            en: 'Error',
            ti: '.ErrorType'
          }, {
            n: 'highestSeverity',
            an: {
              lp: 'highestSeverity'
            },
            t: 'a'
          }]
      }, {
        ln: 'AbstractPOIType',
        bti: '.AbstractLocationType'
      }, {
        ln: 'RadiusType',
        ps: [{
            n: 'value',
            ti: 'Decimal',
            t: 'v'
          }, {
            n: 'unit',
            rq: true,
            an: {
              lp: 'unit'
            },
            t: 'a'
          }]
      }, {
        t: 'enum',
        ln: 'NearestCriterionType',
        vs: ['Proximity', 'Fastest', 'Shortest', 'Easiest']
      }, {
        t: 'enum',
        ln: 'SpeedUnitType',
        vs: ['KPH', 'MPH', 'MPS', 'FPS']
      }, {
        t: 'enum',
        ln: 'ErrorCodeType',
        vs: ['RequestVersionMismatch', 'ResponseVersionMismatch', 'ValueNotRecognized', 'NotSupported', 'Inconsistent', 'OtherXml', 'DeliveryFailure', 'SecurityFailure', 'Unknown']
      }, {
        t: 'enum',
        ln: 'RouteMapStyleType',
        vs: ['Overview', 'Maneuver']
      }, {
        t: 'enum',
        ln: 'NamedPlaceClassification',
        vs: ['CountrySubdivision', 'CountrySecondarySubdivision', 'Municipality', 'MunicipalitySubdivision']
      }, {
        t: 'enum',
        ln: 'AvoidFeatureType',
        vs: ['Highway', 'Tollway']
      }, {
        t: 'enum',
        ln: 'SeverityType',
        vs: ['Warning', 'Error']
      }, {
        t: 'enum',
        ln: 'RoutePreferenceType',
        vs: ['Fastest', 'Shortest', 'Pedestrian']
      }, {
        t: 'enum',
        ln: 'POIPropertyNameType',
        vs: ['ID', 'POIName', 'PhoneNumber', 'Keyword', 'NAICS_type', 'NAICS_subType', 'NAICS_category', 'SIC_type', 'SIC_subType', 'SIC_category', 'SIC_code', 'other']
      }, {
        t: 'enum',
        ln: 'SortDirectionType',
        vs: ['Ascending', 'Descending']
      }, {
        t: 'enum',
        ln: 'DistanceUnitType',
        vs: ['KM', 'M', 'DM', 'MI', 'YD', 'FT']
      }, {
        t: 'enum',
        ln: 'PresentationContentType',
        vs: ['URL', 'Data']
      }, {
        t: 'enum',
        ln: 'ReverseGeocodePreferenceType',
        vs: ['StreetAddress', 'IntersectionAddress']
      }],
    eis: [{
        en: 'POIProperties',
        ti: '.POIProperties',
        sh: '_POISelectionCriteria'
      }, {
        en: 'Angle',
        ti: '.AngleType',
        sh: '_Measure'
      }, {
        en: 'OutputMSInformation',
        ti: '.OutputMSInformationType',
        sh: '_MSInformation'
      }, {
        en: 'GeocodeRequest',
        ti: '.GeocodeRequestType',
        sh: '_RequestParameters'
      }, {
        en: '_ADT',
        ti: '.AbstractDataType'
      }, {
        en: 'Place',
        ti: '.NamedPlaceType'
      }, {
        en: 'DetermineRouteRequest',
        ti: '.DetermineRouteRequestType',
        sh: '_RequestParameters'
      }, {
        en: 'Ellipse',
        ti: '.EllipseType'
      }, {
        en: 'POIInfo',
        ti: '.POIInfoType'
      }, {
        en: 'StreetAddress',
        ti: '.StreetAddressType'
      }, {
        en: 'EndPoint',
        ti: '.WayPointType',
        sh: '_WayPoint'
      }, {
        en: 'NextSegment',
        ti: '.RouteSegmentType',
        sh: '_NextSegment'
      }, {
        en: 'ResponseHeader',
        ti: '.ResponseHeaderType',
        sh: '_Header'
      }, {
        en: 'InputMSIDs',
        ti: '.InputMSIDsType',
        sh: '_MSIDs'
      }, {
        en: '_POIProperty',
        ti: 'AnyType'
      }, {
        en: 'RouteInstruction',
        ti: '.RouteInstructionType'
      }, {
        en: '_Measure',
        ti: '.AbstractMeasureType'
      }, {
        en: 'ErrorList',
        ti: '.ErrorListType'
      }, {
        en: 'Address',
        ti: '.AddressType',
        sh: '_Location'
      }, {
        en: 'ReferenceSystem',
        ti: '.ReferenceSystemType'
      }, {
        en: '_NamedReferenceSystem',
        ti: '.AbstractNamedReferenceSystem'
      }, {
        en: 'BoundingBox',
        ti: 'GML_3_1_1.EnvelopeType'
      }, {
        en: 'SLIA',
        ti: '.SLIAType',
        sh: '_ResponseParameters'
      }, {
        en: 'DirectoryResponse',
        ti: '.DirectoryResponseType',
        sh: '_ResponseParameters'
      }, {
        en: 'SLIR',
        ti: '.SLIRType',
        sh: '_RequestParameters'
      }, {
        en: 'Distance',
        ti: '.DistanceType',
        sh: '_Measure'
      }, {
        en: '_POISelectionCriteria',
        ti: '.AbstractPOISelectionCriteriaType'
      }, {
        en: 'POIProperty',
        ti: '.POIPropertyType',
        sh: '_POIProperty'
      }, {
        en: 'Error',
        ti: '.ErrorType'
      }, {
        en: 'InputMSInformation',
        ti: '.InputMSInformationType',
        sh: '_MSInformation'
      }, {
        en: 'PostalCode'
      }, {
        en: 'Street',
        ti: '.StreetNameType'
      }, {
        en: 'RouteInstructionsList',
        ti: '.RouteInstructionsListType',
        sh: '_ADT'
      }, {
        en: '_MSInformation',
        ti: '.AbstractMSInformationType'
      }, {
        en: 'NAICS',
        ti: '.NAICSType',
        sh: '_NamedReferenceSystem'
      }, {
        en: '_RouteSummary',
        ti: '.AbstractRouteSummaryType',
        sh: '_ADT'
      }, {
        en: 'OutputGatewayParameters',
        ti: '.OutputGatewayParametersType',
        sh: '_GatewayParameters'
      }, {
        en: 'POI',
        ti: '.PointOfInterestType',
        sh: '_POI'
      }, {
        en: 'WayPointList',
        ti: '.WayPointListType'
      }, {
        en: 'Altitude',
        ti: '.AltitudeType'
      }, {
        en: 'DetermineRouteResponse',
        ti: '.DetermineRouteResponseType',
        sh: '_ResponseParameters'
      }, {
        en: 'RequestHeader',
        ti: '.RequestHeaderType',
        sh: '_Header'
      }, {
        en: 'RouteGeometryRequest',
        ti: '.RouteGeometryRequestType'
      }, {
        en: 'InputGatewayParameters',
        ti: '.InputGatewayParametersType',
        sh: '_GatewayParameters'
      }, {
        en: 'Map',
        ti: '.MapType',
        sh: '_ADT'
      }, {
        en: 'GetPortrayMapCapabilitiesRequest',
        ti: '.GetPortrayMapCapabilitiesRequestType',
        sh: '_RequestParameters'
      }, {
        en: 'Building',
        ti: '.BuildingLocatorType',
        sh: '_StreetLocation'
      }, {
        en: 'POIAttributeList',
        ti: '.POIAttributeListType'
      }, {
        en: 'NACE',
        ti: '.NACEType',
        sh: '_NamedReferenceSystem'
      }, {
        en: 'Speed',
        ti: '.SpeedType',
        sh: '_Measure'
      }, {
        en: 'AvoidList',
        ti: '.AvoidListType'
      }, {
        en: '_MSIDs',
        ti: '.AbstractMSIDsType'
      }, {
        en: 'RoutePreference'
      }, {
        en: 'RoutePlan',
        ti: '.RoutePlanType'
      }, {
        en: 'AOI',
        ti: '.AreaOfInterestType',
        sh: '_ADT'
      }, {
        en: 'RouteInstructionsRequest',
        ti: '.RouteInstructionsRequestType'
      }, {
        en: 'ViaPoint',
        ti: '.WayPointType',
        sh: '_WayPoint'
      }, {
        en: 'GeocodeResponse',
        ti: '.GeocodeResponseType',
        sh: '_ResponseParameters'
      }, {
        en: '_GatewayParameters',
        ti: '.AbstractGatewayParametersType'
      }, {
        en: '_RequestParameters',
        ti: '.AbstractRequestParametersType'
      }, {
        en: 'GeocodeMatchCode',
        ti: '.GeocodingQOSType'
      }, {
        en: 'Position',
        ti: '.PositionType',
        sh: '_Position'
      }, {
        en: 'SIC',
        ti: '.SICType',
        sh: '_NamedReferenceSystem'
      }, {
        en: '_Body',
        ti: '.AbstractBodyType'
      }, {
        en: 'POIInfoList',
        ti: '.POIInfoListType'
      }, {
        en: '_NextSegment',
        ti: '.AbstractRouteSegmentType'
      }, {
        en: '_WayPoint',
        ti: '.AbstractWayPointType'
      }, {
        en: '_POI',
        ti: '.AbstractPOIType',
        sh: '_Location'
      }, {
        en: 'POILocation',
        ti: '.POILocationType'
      }, {
        en: 'Request',
        ti: '.RequestType',
        sh: '_Body'
      }, {
        en: 'AvoidFeature'
      }, {
        en: 'ReverseGeocodeResponse',
        ti: '.ReverseGeocodeResponseType',
        sh: '_ResponseParameters'
      }, {
        en: 'RouteSummary',
        ti: '.RouteSummaryType',
        sh: '_RouteSummary'
      }, {
        en: '_ResponseParameters',
        ti: '.AbstractResponseParametersType'
      }, {
        en: 'PortrayMapResponse',
        ti: '.PortrayMapResponseType',
        sh: '_ResponseParameters'
      }, {
        en: 'StartPoint',
        ti: '.WayPointType',
        sh: '_WayPoint'
      }, {
        en: 'ReverseGeocodePreference'
      }, {
        en: '_Header',
        ti: '.AbstractHeaderType'
      }, {
        en: 'GetPortrayMapCapabilitiesResponse',
        ti: '.GetPortrayMapCapabilitiesResponseType',
        sh: '_ResponseParameters'
      }, {
        en: 'RouteMapRequest',
        ti: '.RouteMapRequestType'
      }, {
        en: 'Time',
        ti: '.TimeType'
      }, {
        en: 'Response',
        ti: '.ResponseType',
        sh: '_Body'
      }, {
        en: '_Location',
        ti: '.AbstractLocationType',
        sh: '_ADT'
      }, {
        en: 'RouteGeometry',
        ti: '.RouteGeometryType',
        sh: '_ADT'
      }, {
        en: 'DirectoryRequest',
        ti: '.DirectoryRequestType',
        sh: '_RequestParameters'
      }, {
        en: '_Position',
        ti: '.AbstractPositionType',
        sh: '_Location'
      }, {
        en: 'RouteMap',
        ti: '.RouteMapType'
      }, {
        en: 'TimeStamp',
        ti: '.TimeStampType'
      }, {
        en: '_StreetLocation',
        ti: '.AbstractStreetLocatorType'
      }, {
        en: 'XLS',
        ti: '.XLSType'
      }, {
        en: 'GeocodeResponseList',
        ti: '.GeocodeResponseListType'
      }, {
        en: 'OutputMSIDs',
        ti: '.OutputMSIDsType',
        sh: '_MSIDs'
      }, {
        en: 'CircularArc',
        ti: '.CircularArcType'
      }, {
        en: 'RouteHandle',
        ti: '.RouteHandleType'
      }, {
        en: 'PortrayMapRequest',
        ti: '.PortrayMapRequestType',
        sh: '_RequestParameters'
      }, {
        en: 'ReverseGeocodeRequest',
        ti: '.ReverseGeocodeRequestType',
        sh: '_RequestParameters'
      }, {
        en: 'SearchCentreDistance',
        ti: '.DistanceType'
      }]
  };
  return {
    OLS_1_1_0: OLS_1_1_0
  };
};
if (typeof define === 'function' && define.amd) {
  define([], OLS_1_1_0_Module_Factory);
}
else {
  var OLS_1_1_0_Module = OLS_1_1_0_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.OLS_1_1_0 = OLS_1_1_0_Module.OLS_1_1_0;
  }
  else {
    var OLS_1_1_0 = OLS_1_1_0_Module.OLS_1_1_0;
  }
}