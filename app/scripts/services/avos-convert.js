'use strict';

/**
 * @ngdoc service
 * @name shophotoApp.avosConvert
 * @description
 * # avosConvert
 * Service in the shophotoApp.
 */
angular.module('shophotoApp')
  .service('AvosConvert', function AvosConvert() {
    // AngularJS will instantiate a singleton by calling "new" on this function
    return {
      /*
       * 将数组形式的 AVOS.Object 列表转化为适用于 angular 的 JSON
       */
      toScopeByArray: function(array) {
        var results = [];
        var that = this;

        angular.forEach(array, function(obj) {
          results.push(that.toScopeByObject(obj));
        });

        return results;
      },
      /*
       * 将对象形式的 AVOS.Object 转化为适用于 angular 的 JSON
       */
      toScopeByObject: function(obj) {

        var scope = obj.toJSON ? obj.toJSON() : obj;
        return this.parseScope(scope);
      },
      /*
       * 解析 Scope 转化类型
       */
      parseScope: function(scope) {
        var result = {};
        var that = this;

        angular.forEach(scope, function(value, key) {

          // Array forEach convert
          if (angular.isArray(value)) {
            result[key] = that.toScopeByArray(value);

          // Default object, string & number
          } else {
            switch (value.__type) {
              case 'Date':
                result[key] = new Date(value.iso);
                break;
              default:
                result[key] = value;
            }
          }
        });

        return result;
      },
      /*
       * 判断结果，转化为适合的 JSON 格式
       */
      toScope: function(result) {
        if(Array.isArray(result)) {
          return this.toScopeByArray(result);
        } else {
          return this.toScopeByObject(result);
        }
      }
    };
  });
