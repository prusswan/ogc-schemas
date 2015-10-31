var OWS_1_1_0_Module_Factory = function () {
  var OWS_1_1_0 = {
    n: 'OWS_1_1_0',
    dens: 'http:\/\/www.opengis.net\/ows\/1.1',
    dans: 'http:\/\/www.w3.org\/1999\/xlink',
    deps: ['XLink_1_0'],
    tis: [{
        ln: 'AbstractReferenceBaseType',
        ps: [{
            n: 'type',
            an: {
              lp: 'type',
              ns: 'http:\/\/www.opengis.net\/ows\/1.1'
            },
            t: 'a'
          }, {
            n: 'href',
            rq: true,
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'ExceptionType',
        ps: [{
            n: 'exceptionText',
            mno: 0,
            col: true,
            en: 'ExceptionText'
          }, {
            n: 'exceptionCode',
            rq: true,
            an: {
              lp: 'exceptionCode'
            },
            t: 'a'
          }, {
            n: 'locator',
            an: {
              lp: 'locator'
            },
            t: 'a'
          }]
      }, {
        ln: 'NoValues',
        tn: null
      }, {
        ln: 'MetadataType',
        ps: [{
            n: 'abstractMetaData',
            en: 'AbstractMetaData',
            ti: 'AnyType'
          }, {
            n: 'about',
            an: {
              lp: 'about'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'ResponsiblePartySubsetType',
        ps: [{
            n: 'individualName',
            en: 'IndividualName'
          }, {
            n: 'positionName',
            en: 'PositionName'
          }, {
            n: 'contactInfo',
            en: 'ContactInfo',
            ti: '.ContactType'
          }, {
            n: 'role',
            en: 'Role',
            ti: '.CodeType'
          }]
      }, {
        ln: 'DomainType',
        bti: '.UnNamedDomainType',
        ps: [{
            n: 'name',
            rq: true,
            an: {
              lp: 'name'
            },
            t: 'a'
          }]
      }, {
        ln: 'ContentsBaseType',
        ps: [{
            n: 'datasetDescriptionSummary',
            mno: 0,
            col: true,
            mx: false,
            dom: false,
            en: 'DatasetDescriptionSummary',
            ti: '.DatasetDescriptionSummaryBaseType',
            t: 'er'
          }, {
            n: 'otherSource',
            mno: 0,
            col: true,
            mx: false,
            dom: false,
            en: 'OtherSource',
            ti: '.MetadataType',
            t: 'er'
          }]
      }, {
        ln: 'ReferenceGroupType',
        bti: '.BasicIdentificationType',
        ps: [{
            n: 'abstractReferenceBase',
            rq: true,
            col: true,
            mx: false,
            dom: false,
            en: 'AbstractReferenceBase',
            ti: '.AbstractReferenceBaseType',
            t: 'er'
          }]
      }, {
        ln: 'AcceptVersionsType',
        ps: [{
            n: 'version',
            rq: true,
            col: true,
            en: 'Version'
          }]
      }, {
        ln: 'TelephoneType',
        ps: [{
            n: 'voice',
            mno: 0,
            col: true,
            en: 'Voice'
          }, {
            n: 'facsimile',
            mno: 0,
            col: true,
            en: 'Facsimile'
          }]
      }, {
        ln: 'CodeType',
        ps: [{
            n: 'value',
            t: 'v'
          }, {
            n: 'codeSpace',
            an: {
              lp: 'codeSpace'
            },
            t: 'a'
          }]
      }, {
        ln: 'DCP',
        tn: null,
        ps: [{
            n: 'http',
            rq: true,
            en: 'HTTP',
            ti: '.HTTP'
          }]
      }, {
        ln: 'IdentificationType',
        bti: '.BasicIdentificationType',
        ps: [{
            n: 'boundingBox',
            mno: 0,
            col: true,
            mx: false,
            dom: false,
            en: 'BoundingBox',
            ti: '.BoundingBoxType',
            t: 'er'
          }, {
            n: 'outputFormat',
            mno: 0,
            col: true,
            en: 'OutputFormat'
          }, {
            n: 'availableCRS',
            mno: 0,
            col: true,
            mx: false,
            dom: false,
            en: 'AvailableCRS',
            t: 'er'
          }]
      }, {
        ln: 'ManifestType',
        bti: '.BasicIdentificationType',
        ps: [{
            n: 'referenceGroup',
            rq: true,
            col: true,
            en: 'ReferenceGroup',
            ti: '.ReferenceGroupType'
          }]
      }, {
        ln: 'ServiceReferenceType',
        bti: '.ReferenceType',
        ps: [{
            n: 'requestMessage',
            rq: true,
            en: 'RequestMessage',
            ti: 'AnyType'
          }, {
            n: 'requestMessageReference',
            rq: true,
            en: 'RequestMessageReference'
          }]
      }, {
        ln: 'WGS84BoundingBoxType',
        bti: '.BoundingBoxType'
      }, {
        ln: 'DatasetDescriptionSummaryBaseType',
        bti: '.DescriptionType',
        ps: [{
            n: 'wgs84BoundingBox',
            mno: 0,
            col: true,
            en: 'WGS84BoundingBox',
            ti: '.WGS84BoundingBoxType'
          }, {
            n: 'identifier',
            rq: true,
            en: 'Identifier',
            ti: '.CodeType'
          }, {
            n: 'boundingBox',
            mno: 0,
            col: true,
            mx: false,
            dom: false,
            en: 'BoundingBox',
            ti: '.BoundingBoxType',
            t: 'er'
          }, {
            n: 'metadata',
            mno: 0,
            col: true,
            en: 'Metadata',
            ti: '.MetadataType'
          }, {
            n: 'datasetDescriptionSummary',
            mno: 0,
            col: true,
            mx: false,
            dom: false,
            en: 'DatasetDescriptionSummary',
            ti: '.DatasetDescriptionSummaryBaseType',
            t: 'er'
          }]
      }, {
        ln: 'ServiceProvider',
        tn: null,
        ps: [{
            n: 'providerName',
            rq: true,
            en: 'ProviderName'
          }, {
            n: 'providerSite',
            en: 'ProviderSite',
            ti: '.OnlineResourceType'
          }, {
            n: 'serviceContact',
            rq: true,
            en: 'ServiceContact',
            ti: '.ResponsiblePartySubsetType'
          }]
      }, {
        ln: 'RangeType',
        ps: [{
            n: 'minimumValue',
            en: 'MinimumValue',
            ti: '.ValueType'
          }, {
            n: 'maximumValue',
            en: 'MaximumValue',
            ti: '.ValueType'
          }, {
            n: 'spacing',
            en: 'Spacing',
            ti: '.ValueType'
          }, {
            n: 'rangeClosure',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'rangeClosure',
              ns: 'http:\/\/www.opengis.net\/ows\/1.1'
            },
            t: 'a'
          }]
      }, {
        ln: 'Operation',
        tn: null,
        ps: [{
            n: 'dcp',
            rq: true,
            col: true,
            en: 'DCP',
            ti: '.DCP'
          }, {
            n: 'parameter',
            mno: 0,
            col: true,
            en: 'Parameter',
            ti: '.DomainType'
          }, {
            n: 'constraint',
            mno: 0,
            col: true,
            en: 'Constraint',
            ti: '.DomainType'
          }, {
            n: 'metadata',
            mno: 0,
            col: true,
            en: 'Metadata',
            ti: '.MetadataType'
          }, {
            n: 'name',
            rq: true,
            an: {
              lp: 'name'
            },
            t: 'a'
          }]
      }, {
        ln: 'AnyValue',
        tn: null
      }, {
        ln: 'GetResourceByIdType',
        ps: [{
            n: 'resourceID',
            mno: 0,
            col: true,
            en: 'ResourceID'
          }, {
            n: 'outputFormat',
            en: 'OutputFormat'
          }, {
            n: 'service',
            rq: true,
            an: {
              lp: 'service'
            },
            t: 'a'
          }, {
            n: 'version',
            rq: true,
            an: {
              lp: 'version'
            },
            t: 'a'
          }]
      }, {
        ln: 'ResponsiblePartyType',
        ps: [{
            n: 'individualName',
            en: 'IndividualName'
          }, {
            n: 'organisationName',
            en: 'OrganisationName'
          }, {
            n: 'positionName',
            en: 'PositionName'
          }, {
            n: 'contactInfo',
            en: 'ContactInfo',
            ti: '.ContactType'
          }, {
            n: 'role',
            rq: true,
            en: 'Role',
            ti: '.CodeType'
          }]
      }, {
        ln: 'ReferenceType',
        bti: '.AbstractReferenceBaseType',
        ps: [{
            n: 'identifier',
            en: 'Identifier',
            ti: '.CodeType'
          }, {
            n: '_abstract',
            mno: 0,
            col: true,
            en: 'Abstract',
            ti: '.LanguageStringType'
          }, {
            n: 'format',
            en: 'Format'
          }, {
            n: 'metadata',
            mno: 0,
            col: true,
            en: 'Metadata',
            ti: '.MetadataType'
          }]
      }, {
        ln: 'RequestMethodType',
        bti: '.OnlineResourceType',
        ps: [{
            n: 'constraint',
            mno: 0,
            col: true,
            en: 'Constraint',
            ti: '.DomainType'
          }]
      }, {
        ln: 'AcceptFormatsType',
        ps: [{
            n: 'outputFormat',
            mno: 0,
            col: true,
            en: 'OutputFormat'
          }]
      }, {
        ln: 'ContactType',
        ps: [{
            n: 'phone',
            en: 'Phone',
            ti: '.TelephoneType'
          }, {
            n: 'address',
            en: 'Address',
            ti: '.AddressType'
          }, {
            n: 'onlineResource',
            en: 'OnlineResource',
            ti: '.OnlineResourceType'
          }, {
            n: 'hoursOfService',
            en: 'HoursOfService'
          }, {
            n: 'contactInstructions',
            en: 'ContactInstructions'
          }]
      }, {
        ln: 'ExceptionReport',
        tn: null,
        ps: [{
            n: 'exception',
            rq: true,
            col: true,
            en: 'Exception',
            ti: '.ExceptionType'
          }, {
            n: 'version',
            rq: true,
            an: {
              lp: 'version'
            },
            t: 'a'
          }, {
            n: 'lang',
            an: {
              lp: 'lang',
              ns: 'http:\/\/www.w3.org\/XML\/1998\/namespace'
            },
            t: 'a'
          }]
      }, {
        ln: 'UnNamedDomainType',
        ps: [{
            n: 'allowedValues',
            rq: true,
            en: 'AllowedValues',
            ti: '.AllowedValues'
          }, {
            n: 'anyValue',
            rq: true,
            en: 'AnyValue',
            ti: '.AnyValue'
          }, {
            n: 'noValues',
            rq: true,
            en: 'NoValues',
            ti: '.NoValues'
          }, {
            n: 'valuesReference',
            rq: true,
            en: 'ValuesReference',
            ti: '.ValuesReference'
          }, {
            n: 'defaultValue',
            en: 'DefaultValue',
            ti: '.ValueType'
          }, {
            n: 'meaning',
            en: 'Meaning',
            ti: '.DomainMetadataType'
          }, {
            n: 'dataType',
            en: 'DataType',
            ti: '.DomainMetadataType'
          }, {
            n: 'uom',
            rq: true,
            en: 'UOM',
            ti: '.DomainMetadataType'
          }, {
            n: 'referenceSystem',
            rq: true,
            en: 'ReferenceSystem',
            ti: '.DomainMetadataType'
          }, {
            n: 'metadata',
            mno: 0,
            col: true,
            en: 'Metadata',
            ti: '.MetadataType'
          }]
      }, {
        ln: 'SectionsType',
        ps: [{
            n: 'section',
            mno: 0,
            col: true,
            en: 'Section'
          }]
      }, {
        ln: 'GetCapabilitiesType',
        ps: [{
            n: 'acceptVersions',
            en: 'AcceptVersions',
            ti: '.AcceptVersionsType'
          }, {
            n: 'sections',
            en: 'Sections',
            ti: '.SectionsType'
          }, {
            n: 'acceptFormats',
            en: 'AcceptFormats',
            ti: '.AcceptFormatsType'
          }, {
            n: 'updateSequence',
            an: {
              lp: 'updateSequence'
            },
            t: 'a'
          }]
      }, {
        ln: 'OperationsMetadata',
        tn: null,
        ps: [{
            n: 'operation',
            rq: true,
            mno: 2,
            col: true,
            en: 'Operation',
            ti: '.Operation'
          }, {
            n: 'parameter',
            mno: 0,
            col: true,
            en: 'Parameter',
            ti: '.DomainType'
          }, {
            n: 'constraint',
            mno: 0,
            col: true,
            en: 'Constraint',
            ti: '.DomainType'
          }, {
            n: 'extendedCapabilities',
            en: 'ExtendedCapabilities',
            ti: 'AnyType'
          }]
      }, {
        ln: 'LanguageStringType',
        ps: [{
            n: 'value',
            t: 'v'
          }, {
            n: 'lang',
            an: {
              lp: 'lang',
              ns: 'http:\/\/www.w3.org\/XML\/1998\/namespace'
            },
            t: 'a'
          }]
      }, {
        ln: 'HTTP',
        tn: null,
        ps: [{
            n: 'getOrPost',
            rq: true,
            col: true,
            mx: false,
            dom: false,
            etis: [{
                en: 'Post',
                ti: '.RequestMethodType'
              }, {
                en: 'Get',
                ti: '.RequestMethodType'
              }],
            t: 'ers'
          }]
      }, {
        ln: 'OnlineResourceType',
        ps: [{
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'DomainMetadataType',
        ps: [{
            n: 'value',
            t: 'v'
          }, {
            n: 'reference',
            an: {
              lp: 'reference',
              ns: 'http:\/\/www.opengis.net\/ows\/1.1'
            },
            t: 'a'
          }]
      }, {
        ln: 'CapabilitiesBaseType',
        ps: [{
            n: 'serviceIdentification',
            en: 'ServiceIdentification',
            ti: '.ServiceIdentification'
          }, {
            n: 'serviceProvider',
            en: 'ServiceProvider',
            ti: '.ServiceProvider'
          }, {
            n: 'operationsMetadata',
            en: 'OperationsMetadata',
            ti: '.OperationsMetadata'
          }, {
            n: 'version',
            rq: true,
            an: {
              lp: 'version'
            },
            t: 'a'
          }, {
            n: 'updateSequence',
            an: {
              lp: 'updateSequence'
            },
            t: 'a'
          }]
      }, {
        ln: 'ValuesReference',
        tn: null,
        ps: [{
            n: 'value',
            t: 'v'
          }, {
            n: 'reference',
            rq: true,
            an: {
              lp: 'reference',
              ns: 'http:\/\/www.opengis.net\/ows\/1.1'
            },
            t: 'a'
          }]
      }, {
        ln: 'BasicIdentificationType',
        bti: '.DescriptionType',
        ps: [{
            n: 'identifier',
            en: 'Identifier',
            ti: '.CodeType'
          }, {
            n: 'metadata',
            mno: 0,
            col: true,
            en: 'Metadata',
            ti: '.MetadataType'
          }]
      }, {
        ln: 'AddressType',
        ps: [{
            n: 'deliveryPoint',
            mno: 0,
            col: true,
            en: 'DeliveryPoint'
          }, {
            n: 'city',
            en: 'City'
          }, {
            n: 'administrativeArea',
            en: 'AdministrativeArea'
          }, {
            n: 'postalCode',
            en: 'PostalCode'
          }, {
            n: 'country',
            en: 'Country'
          }, {
            n: 'electronicMailAddress',
            mno: 0,
            col: true,
            en: 'ElectronicMailAddress'
          }]
      }, {
        ln: 'BoundingBoxType',
        ps: [{
            n: 'lowerCorner',
            rq: true,
            en: 'LowerCorner',
            ti: {
              t: 'l',
              bti: 'Double'
            }
          }, {
            n: 'upperCorner',
            rq: true,
            en: 'UpperCorner',
            ti: {
              t: 'l',
              bti: 'Double'
            }
          }, {
            n: 'crs',
            an: {
              lp: 'crs'
            },
            t: 'a'
          }, {
            n: 'dimensions',
            ti: 'Integer',
            an: {
              lp: 'dimensions'
            },
            t: 'a'
          }]
      }, {
        ln: 'DescriptionType',
        ps: [{
            n: 'title',
            mno: 0,
            col: true,
            en: 'Title',
            ti: '.LanguageStringType'
          }, {
            n: '_abstract',
            mno: 0,
            col: true,
            en: 'Abstract',
            ti: '.LanguageStringType'
          }, {
            n: 'keywords',
            mno: 0,
            col: true,
            en: 'Keywords',
            ti: '.KeywordsType'
          }]
      }, {
        ln: 'AllowedValues',
        tn: null,
        ps: [{
            n: 'valueOrRange',
            rq: true,
            col: true,
            etis: [{
                en: 'Value',
                ti: '.ValueType'
              }, {
                en: 'Range',
                ti: '.RangeType'
              }],
            t: 'es'
          }]
      }, {
        ln: 'ServiceIdentification',
        tn: null,
        bti: '.DescriptionType',
        ps: [{
            n: 'serviceType',
            rq: true,
            en: 'ServiceType',
            ti: '.CodeType'
          }, {
            n: 'serviceTypeVersion',
            rq: true,
            col: true,
            en: 'ServiceTypeVersion'
          }, {
            n: 'profile',
            mno: 0,
            col: true,
            en: 'Profile'
          }, {
            n: 'fees',
            en: 'Fees'
          }, {
            n: 'accessConstraints',
            mno: 0,
            col: true,
            en: 'AccessConstraints'
          }]
      }, {
        ln: 'KeywordsType',
        ps: [{
            n: 'keyword',
            rq: true,
            col: true,
            en: 'Keyword',
            ti: '.LanguageStringType'
          }, {
            n: 'type',
            en: 'Type',
            ti: '.CodeType'
          }]
      }, {
        ln: 'ValueType',
        ps: [{
            n: 'value',
            t: 'v'
          }]
      }],
    eis: [{
        en: 'PositionName'
      }, {
        en: 'Meaning',
        ti: '.DomainMetadataType'
      }, {
        en: 'Exception',
        ti: '.ExceptionType'
      }, {
        en: 'Value',
        ti: '.ValueType'
      }, {
        en: 'ReferenceSystem',
        ti: '.DomainMetadataType'
      }, {
        en: 'OperationResponse',
        ti: '.ManifestType'
      }, {
        en: 'Metadata',
        ti: '.MetadataType'
      }, {
        en: 'DefaultValue',
        ti: '.ValueType'
      }, {
        en: 'Fees'
      }, {
        en: 'ServiceProvider',
        ti: '.ServiceProvider'
      }, {
        en: 'HTTP',
        ti: '.HTTP'
      }, {
        en: 'AvailableCRS'
      }, {
        en: 'Manifest',
        ti: '.ManifestType'
      }, {
        en: 'DCP',
        ti: '.DCP'
      }, {
        en: 'ValuesReference',
        ti: '.ValuesReference'
      }, {
        en: 'WGS84BoundingBox',
        ti: '.WGS84BoundingBoxType',
        sh: 'BoundingBox'
      }, {
        en: 'AccessConstraints'
      }, {
        en: 'Operation',
        ti: '.Operation'
      }, {
        en: 'OutputFormat'
      }, {
        en: 'NoValues',
        ti: '.NoValues'
      }, {
        en: 'ExtendedCapabilities',
        ti: 'AnyType'
      }, {
        en: 'Post',
        ti: '.RequestMethodType',
        sc: '.HTTP'
      }, {
        en: 'ServiceReference',
        ti: '.ServiceReferenceType',
        sh: 'Reference'
      }, {
        en: 'OrganisationName'
      }, {
        en: 'Role',
        ti: '.CodeType'
      }, {
        en: 'ServiceIdentification',
        ti: '.ServiceIdentification'
      }, {
        en: 'GetResourceByID',
        ti: '.GetResourceByIdType'
      }, {
        en: 'IndividualName'
      }, {
        en: 'Title',
        ti: '.LanguageStringType'
      }, {
        en: 'OtherSourceExtension',
        ti: '.MetadataType',
        sh: 'OtherSource'
      }, {
        en: 'OperationsMetadata',
        ti: '.OperationsMetadata'
      }, {
        en: 'Get',
        ti: '.RequestMethodType',
        sc: '.HTTP'
      }, {
        en: 'MaximumValue',
        ti: '.ValueType'
      }, {
        en: 'Reference',
        ti: '.ReferenceType',
        sh: 'AbstractReferenceBase'
      }, {
        en: 'Language'
      }, {
        en: 'ExceptionReport',
        ti: '.ExceptionReport'
      }, {
        en: 'BoundingBox',
        ti: '.BoundingBoxType'
      }, {
        en: 'MinimumValue',
        ti: '.ValueType'
      }, {
        en: 'Abstract',
        ti: '.LanguageStringType'
      }, {
        en: 'Resource',
        ti: 'AnyType'
      }, {
        en: 'ContactInfo',
        ti: '.ContactType'
      }, {
        en: 'AbstractReferenceBase',
        ti: '.AbstractReferenceBaseType'
      }, {
        en: 'SupportedCRS',
        sh: 'AvailableCRS'
      }, {
        en: 'Keywords',
        ti: '.KeywordsType'
      }, {
        en: 'Range',
        ti: '.RangeType'
      }, {
        en: 'AbstractMetaData',
        ti: 'AnyType'
      }, {
        en: 'ReferenceGroup',
        ti: '.ReferenceGroupType'
      }, {
        en: 'UOM',
        ti: '.DomainMetadataType'
      }, {
        en: 'InputData',
        ti: '.ManifestType'
      }, {
        en: 'AllowedValues',
        ti: '.AllowedValues'
      }, {
        en: 'Identifier',
        ti: '.CodeType'
      }, {
        en: 'OtherSource',
        ti: '.MetadataType'
      }, {
        en: 'DataType',
        ti: '.DomainMetadataType'
      }, {
        en: 'AnyValue',
        ti: '.AnyValue'
      }, {
        en: 'PointOfContact',
        ti: '.ResponsiblePartyType'
      }, {
        en: 'DatasetDescriptionSummary',
        ti: '.DatasetDescriptionSummaryBaseType'
      }, {
        en: 'DatasetDescriptionSummaryExtension',
        ti: '.DatasetDescriptionSummaryBaseType',
        sh: 'DatasetDescriptionSummary'
      }, {
        en: 'Spacing',
        ti: '.ValueType'
      }, {
        en: 'GetCapabilities',
        ti: '.GetCapabilitiesType'
      }]
  };
  return {
    OWS_1_1_0: OWS_1_1_0
  };
};
if (typeof define === 'function' && define.amd) {
  define([], OWS_1_1_0_Module_Factory);
}
else {
  var OWS_1_1_0_Module = OWS_1_1_0_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.OWS_1_1_0 = OWS_1_1_0_Module.OWS_1_1_0;
  }
  else {
    var OWS_1_1_0 = OWS_1_1_0_Module.OWS_1_1_0;
  }
}