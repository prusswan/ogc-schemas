var Filter_1_0_0_Module_Factory = function () {
  var Filter_1_0_0 = {
    n: 'Filter_1_0_0',
    dens: 'http:\/\/www.opengis.net\/ogc',
    deps: ['GML_2_1_2'],
    tis: [{
        ln: 'FunctionType',
        bti: '.ExpressionType',
        ps: [{
            n: 'expression',
            col: true,
            mx: false,
            dom: false,
            ti: '.ExpressionType',
            t: 'er'
          }, {
            n: 'name',
            an: {
              lp: 'name'
            },
            t: 'a'
          }]
      }, {
        ln: 'ComparisonOpsType'
      }, {
        ln: 'BinaryLogicOpType',
        bti: '.LogicOpsType',
        ps: [{
            n: 'ops',
            col: true,
            mx: false,
            dom: false,
            etis: [{
                en: 'spatialOps',
                ti: '.SpatialOpsType'
              }, {
                en: 'comparisonOps',
                ti: '.ComparisonOpsType'
              }, {
                en: 'logicOps',
                ti: '.LogicOpsType'
              }],
            t: 'ers'
          }]
      }, {
        ln: 'PropertyIsBetweenType',
        bti: '.ComparisonOpsType',
        ps: [{
            n: 'expression',
            mx: false,
            dom: false,
            ti: '.ExpressionType',
            t: 'er'
          }, {
            n: 'lowerBoundary',
            en: 'LowerBoundary',
            ti: '.LowerBoundaryType'
          }, {
            n: 'upperBoundary',
            en: 'UpperBoundary',
            ti: '.UpperBoundaryType'
          }]
      }, {
        ln: 'ExpressionType'
      }, {
        ln: 'DistanceBufferType',
        bti: '.SpatialOpsType',
        ps: [{
            n: 'propertyName',
            en: 'PropertyName',
            ti: '.PropertyNameType'
          }, {
            n: 'geometry',
            mx: false,
            dom: false,
            en: {
              lp: '_Geometry',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            ti: 'GML_2_1_2.AbstractGeometryType',
            t: 'er'
          }, {
            n: 'distance',
            en: 'Distance',
            ti: '.DistanceType'
          }]
      }, {
        ln: 'SortPropertyType',
        ps: [{
            n: 'propertyName',
            en: 'PropertyName',
            ti: '.PropertyNameType'
          }, {
            n: 'sortOrder',
            en: 'SortOrder'
          }]
      }, {
        ln: 'BBOXType',
        bti: '.SpatialOpsType',
        ps: [{
            n: 'propertyName',
            en: 'PropertyName',
            ti: '.PropertyNameType'
          }, {
            n: 'box',
            en: {
              lp: 'Box',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            ti: 'GML_2_1_2.BoxType'
          }]
      }, {
        ln: 'UpperBoundaryType',
        ps: [{
            n: 'expression',
            mx: false,
            dom: false,
            ti: '.ExpressionType',
            t: 'er'
          }]
      }, {
        ln: 'UnaryLogicOpType',
        bti: '.LogicOpsType',
        ps: [{
            n: 'comparisonOps',
            mx: false,
            dom: false,
            ti: '.ComparisonOpsType',
            t: 'er'
          }, {
            n: 'spatialOps',
            mx: false,
            dom: false,
            ti: '.SpatialOpsType',
            t: 'er'
          }, {
            n: 'logicOps',
            mx: false,
            dom: false,
            ti: '.LogicOpsType',
            t: 'er'
          }]
      }, {
        ln: 'DistanceType',
        ps: [{
            n: 'content',
            t: 'v'
          }, {
            n: 'units',
            an: {
              lp: 'units'
            },
            t: 'a'
          }]
      }, {
        ln: 'LowerBoundaryType',
        ps: [{
            n: 'expression',
            mx: false,
            dom: false,
            ti: '.ExpressionType',
            t: 'er'
          }]
      }, {
        ln: 'PropertyIsLikeType',
        bti: '.ComparisonOpsType',
        ps: [{
            n: 'propertyName',
            en: 'PropertyName',
            ti: '.PropertyNameType'
          }, {
            n: 'literal',
            en: 'Literal',
            ti: '.LiteralType'
          }, {
            n: 'wildCard',
            an: {
              lp: 'wildCard'
            },
            t: 'a'
          }, {
            n: 'singleChar',
            an: {
              lp: 'singleChar'
            },
            t: 'a'
          }, {
            n: 'escape',
            an: {
              lp: 'escape'
            },
            t: 'a'
          }]
      }, {
        ln: 'FeatureIdType',
        ps: [{
            n: 'fid',
            an: {
              lp: 'fid'
            },
            t: 'a'
          }]
      }, {
        ln: 'SortByType',
        ps: [{
            n: 'sortProperty',
            col: true,
            en: 'SortProperty',
            ti: '.SortPropertyType'
          }]
      }, {
        ln: 'LogicOpsType'
      }, {
        ln: 'LiteralType',
        bti: '.ExpressionType',
        ps: [{
            n: 'content',
            col: true,
            dom: false,
            t: 'ae'
          }]
      }, {
        ln: 'BinaryOperatorType',
        bti: '.ExpressionType',
        ps: [{
            n: 'expression',
            col: true,
            mx: false,
            dom: false,
            ti: '.ExpressionType',
            t: 'er'
          }]
      }, {
        ln: 'PropertyIsNullType',
        bti: '.ComparisonOpsType',
        ps: [{
            n: 'propertyName',
            en: 'PropertyName',
            ti: '.PropertyNameType'
          }, {
            n: 'literal',
            en: 'Literal',
            ti: '.LiteralType'
          }]
      }, {
        ln: 'FilterType',
        ps: [{
            n: 'spatialOps',
            mx: false,
            dom: false,
            ti: '.SpatialOpsType',
            t: 'er'
          }, {
            n: 'comparisonOps',
            mx: false,
            dom: false,
            ti: '.ComparisonOpsType',
            t: 'er'
          }, {
            n: 'logicOps',
            mx: false,
            dom: false,
            ti: '.LogicOpsType',
            t: 'er'
          }, {
            n: 'featureId',
            col: true,
            en: 'FeatureId',
            ti: '.FeatureIdType'
          }]
      }, {
        ln: 'BinarySpatialOpType',
        bti: '.SpatialOpsType',
        ps: [{
            n: 'propertyName',
            en: 'PropertyName',
            ti: '.PropertyNameType'
          }, {
            n: 'geometry',
            mx: false,
            dom: false,
            en: {
              lp: '_Geometry',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            ti: 'GML_2_1_2.AbstractGeometryType',
            t: 'er'
          }, {
            n: 'box',
            en: {
              lp: 'Box',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            ti: 'GML_2_1_2.BoxType'
          }]
      }, {
        ln: 'BinaryComparisonOpType',
        bti: '.ComparisonOpsType',
        ps: [{
            n: 'expression',
            col: true,
            mx: false,
            dom: false,
            ti: '.ExpressionType',
            t: 'er'
          }]
      }, {
        ln: 'SpatialOpsType'
      }, {
        ln: 'PropertyNameType',
        bti: '.ExpressionType',
        ps: [{
            n: 'content',
            t: 'v'
          }]
      }, {
        t: 'enum',
        ln: 'SortOrderType',
        vs: ['DESC', 'ASC']
      }],
    eis: [{
        en: 'expression',
        ti: '.ExpressionType'
      }, {
        en: 'PropertyIsLessThanOrEqualTo',
        ti: '.BinaryComparisonOpType',
        sh: 'comparisonOps'
      }, {
        en: 'Literal',
        ti: '.LiteralType',
        sh: 'expression'
      }, {
        en: 'PropertyIsNull',
        ti: '.PropertyIsNullType',
        sh: 'comparisonOps'
      }, {
        en: 'Intersects',
        ti: '.BinarySpatialOpType',
        sh: 'spatialOps'
      }, {
        en: 'Add',
        ti: '.BinaryOperatorType',
        sh: 'expression'
      }, {
        en: 'SortBy',
        ti: '.SortByType'
      }, {
        en: 'Mul',
        ti: '.BinaryOperatorType',
        sh: 'expression'
      }, {
        en: 'PropertyIsBetween',
        ti: '.PropertyIsBetweenType',
        sh: 'comparisonOps'
      }, {
        en: 'Or',
        ti: '.BinaryLogicOpType',
        sh: 'logicOps'
      }, {
        en: 'Touches',
        ti: '.BinarySpatialOpType',
        sh: 'spatialOps'
      }, {
        en: 'Contains',
        ti: '.BinarySpatialOpType',
        sh: 'spatialOps'
      }, {
        en: 'Sub',
        ti: '.BinaryOperatorType',
        sh: 'expression'
      }, {
        en: 'FeatureId',
        ti: '.FeatureIdType'
      }, {
        en: 'Equals',
        ti: '.BinarySpatialOpType',
        sh: 'spatialOps'
      }, {
        en: 'logicOps',
        ti: '.LogicOpsType'
      }, {
        en: 'comparisonOps',
        ti: '.ComparisonOpsType'
      }, {
        en: 'Function',
        ti: '.FunctionType',
        sh: 'expression'
      }, {
        en: 'And',
        ti: '.BinaryLogicOpType',
        sh: 'logicOps'
      }, {
        en: 'Overlaps',
        ti: '.BinarySpatialOpType',
        sh: 'spatialOps'
      }, {
        en: 'Filter',
        ti: '.FilterType'
      }, {
        en: 'DWithin',
        ti: '.DistanceBufferType',
        sh: 'spatialOps'
      }, {
        en: 'PropertyIsLike',
        ti: '.PropertyIsLikeType',
        sh: 'comparisonOps'
      }, {
        en: 'PropertyIsEqualTo',
        ti: '.BinaryComparisonOpType',
        sh: 'comparisonOps'
      }, {
        en: 'Not',
        ti: '.UnaryLogicOpType',
        sh: 'logicOps'
      }, {
        en: 'PropertyIsGreaterThanOrEqualTo',
        ti: '.BinaryComparisonOpType',
        sh: 'comparisonOps'
      }, {
        en: 'PropertyIsLessThan',
        ti: '.BinaryComparisonOpType',
        sh: 'comparisonOps'
      }, {
        en: 'BBOX',
        ti: '.BBOXType',
        sh: 'spatialOps'
      }, {
        en: 'spatialOps',
        ti: '.SpatialOpsType'
      }, {
        en: 'Disjoint',
        ti: '.BinarySpatialOpType',
        sh: 'spatialOps'
      }, {
        en: 'PropertyIsNotEqualTo',
        ti: '.BinaryComparisonOpType',
        sh: 'comparisonOps'
      }, {
        en: 'Crosses',
        ti: '.BinarySpatialOpType',
        sh: 'spatialOps'
      }, {
        en: 'Within',
        ti: '.BinarySpatialOpType',
        sh: 'spatialOps'
      }, {
        en: 'Beyond',
        ti: '.DistanceBufferType',
        sh: 'spatialOps'
      }, {
        en: 'PropertyIsGreaterThan',
        ti: '.BinaryComparisonOpType',
        sh: 'comparisonOps'
      }, {
        en: 'Div',
        ti: '.BinaryOperatorType',
        sh: 'expression'
      }, {
        en: 'PropertyName',
        ti: '.PropertyNameType',
        sh: 'expression'
      }]
  };
  return {
    Filter_1_0_0: Filter_1_0_0
  };
};
if (typeof define === 'function' && define.amd) {
  define([], Filter_1_0_0_Module_Factory);
}
else {
  var Filter_1_0_0_Module = Filter_1_0_0_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.Filter_1_0_0 = Filter_1_0_0_Module.Filter_1_0_0;
  }
  else {
    var Filter_1_0_0 = Filter_1_0_0_Module.Filter_1_0_0;
  }
}