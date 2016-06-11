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

    function resolveCategory(data, id, category) {
        var result = {};

        result['id'] = id;
        result['displayName'] = category.displayName;
        result['description'] = category.description;

        var professions = [];
        category.professions.forEach(function(professionId) {
            var profession = data.professions[professionId];
            if (profession) {
                professions.push(resolveProfession(data, professionId, profession));
            }
        });
        result['professions'] = professions;

        return result;
    }

    function resolveProfession(data, id, profession) {
        var result = {};

        result['id'] = id;
        result['displayName'] = profession.displayName;
        result['description'] = profession.description;

        var paths = [];
        profession.educationPaths.forEach(function(pathId) {
            paths.push(resolveEducationPath(data, pathId));
        });
        result['educationPaths'] = paths;

        return result;
    }

    function resolveEducationPath(data, pathId) {
        var paths = data.educationPaths[pathId];
        if (!paths) return [];

        var result = [];
        paths.forEach(function(elementId) {
            var element = data.educationElements[elementId];
            if (element) {
                result.push(element);
            }
        });
        return result;
    }

    function resolveObject(data, requestedObj) {
        if (!requestedObj.type || !requestedObj.id) return { errorCode: 1000, errorMsg: 'Invalid search object' };
        if (requestedObj.type !== 'category' && requestedObj.type !== 'profession') return { errorCode: 1001, errorMsg: 'Invalid type' };

        if (requestedObj.type === 'category') {
            var category = data.categories[requestedObj.id];
            if (!category) return { errorCode: 1002, errorMsg: 'Category not found: '+requestedObj.id };
            return resolveCategory(data, requestedObj.id, category);
        } else {
            var profession = data.professions[requestedObj.id];
            if (!profession) return { errorCode: 1003, errorMsg: 'Profession not found: '+requestedObj.id };
            return resolveProfession(data, requestedObj.id, profession);
        }
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
        },
        getDetails: function (requestedObj) {
            return $q(function (resolve, reject) {
                $http.get('/data/appdata.json').then(function (response) {
                    var result = resolveObject(response.data, requestedObj);
                    resolve(result);
                }, function () {
                    reject(response);
                });
            });
        }
    };
}]);