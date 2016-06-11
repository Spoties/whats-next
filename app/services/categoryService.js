angular.module('myApp')

.factory('categoryService', [ '$http', '$q', function($http, $q) {
    function retrieveResults(dataObj, type, text) {
        var result = [];
        for (var property in dataObj) {
            if (dataObj.hasOwnProperty(property)) {
                var displayName = dataObj[property].displayName;
                if (displayName.toLowerCase().indexOf(text.toLowerCase()) >= 0) {
                    result.push({
                        id: property,
                        name: displayName,
                        type: type
                    });
                }
            }
        }
        return result;
    }

    return {
        search: function(text) {
            return $q(function (resolve, reject) {
                $http.get('/data/appdata.json').then(function (response) {
                    var result = retrieveResults(response.data.categories, 'category', text);
                    result = result.concat(retrieveResults(response.data.professions, 'profession', text));
                    resolve(result);
                }, function (response) {
                    reject(response);
                })
            });
        }
    };
}]);