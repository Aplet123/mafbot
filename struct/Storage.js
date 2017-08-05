const _ = require("lodash");
class Storage extends Map {
    constructor(iterable) {
        super(iterable);
    }
    static fromObject(obj) {
        return new this(Object.entries(obj));
    }
    valuesArray() {
        return Array.from(this.values());
    }
    keysArray() {
        return Array.from(this.keys());
    }
    keyArray() {
        return Array.from(this.keys());
    }
    array() {
        return Array.from(this);
    }
    find(test, value, caseSensitive = true, strict = true) {
        if (test instanceof Function) {
            return (this.array().find(element => {
                return test(element[1], element[0], this);
            }, this) || [])[1];
        } else if (typeof test === "string") {
            return (this.array().find(element => {
                if (strict) {
                    if (!caseSensitive) {
                        if (typeof _.at(element[1], [test])[0] === "string" && typeof value === "string") {
                            return _.at(element[1], [test])[0].toLowerCase() === value.toLowerCase();
                        } else {
                            return _.at(element[1], [test])[0] === value;
                        }
                    } else {
                        return _.at(element[1], [test])[0] === value;
                    }
                } else {
                    if (!caseSensitive) {
                        if (typeof _.at(element[1], [test])[0] === "string" && typeof value === "string") {
                            return _.at(element[1], [test])[0].toLowerCase() == value.toLowerCase();
                        } else {
                            return _.at(element[1], [test])[0] == value;
                        }
                    } else {
                        return _.at(element[1], [test])[0] == value;
                    }
                }
            }, this) || [])[1];
        } else {
            throw new TypeError("test must be either string or function");
        }
    }
    findLast(test, value, caseSensitive = true, strict = true) {
        if (test instanceof Function) {
            return (this.array().reverse().find(element => {
                return test(element[1], element[0], this);
            }, this) || [])[1];
        } else if (typeof test === "string") {
            return (this.array().reverse().find(element => {
                if (strict) {
                    if (!caseSensitive) {
                        if (typeof _.at(element[1], [test])[0] === "string" && typeof value === "string") {
                            return _.at(element[1], [test])[0].toLowerCase() === value.toLowerCase();
                        } else {
                            return _.at(element[1], [test])[0] === value;
                        }
                    } else {
                        return _.at(element[1], [test])[0] === value;
                    }
                } else {
                    if (!caseSensitive) {
                        if (typeof _.at(element[1], [test])[0] === "string" && typeof value === "string") {
                            return _.at(element[1], [test])[0].toLowerCase() == value.toLowerCase();
                        } else {
                            return _.at(element[1], [test])[0] == value;
                        }
                    } else {
                        return _.at(element[1], [test])[0] == value;
                    }
                }
            }, this) || [])[1];
        } else {
            throw new TypeError("test must be either string or function");
        }
    }
    findKey(test, value, caseSensitive = true, strict = true) {
        if (test instanceof Function) {
            return (this.array().find(element => {
                return test(element[1], element[0], this);
            }, this) || [])[0];
        } else if (typeof test === "string") {
            return (this.array().find(element => {
                if (strict) {
                    if (!caseSensitive) {
                        if (typeof _.at(element[1], [test])[0] === "string" && typeof value === "string") {
                            return _.at(element[1], [test])[0].toLowerCase() === value.toLowerCase();
                        } else {
                            return _.at(element[1], [test])[0] === value;
                        }
                    } else {
                        return _.at(element[1], [test])[0] === value;
                    }
                } else {
                    if (!caseSensitive) {
                        if (typeof _.at(element[1], [test])[0] === "string" && typeof value === "string") {
                            return _.at(element[1], [test])[0].toLowerCase() == value.toLowerCase();
                        } else {
                            return _.at(element[1], [test])[0] == value;
                        }
                    } else {
                        return _.at(element[1], [test])[0] == value;
                    }
                }
            }, this) || [])[0];
        } else {
            throw new TypeError("test must be either string or function");
        }
    }
    findKeyLast(test, value, caseSensitive = true, strict = true) {
        if (test instanceof Function) {
            return (this.array().reverse().find(element => {
                return test(element[1], element[0], this);
            }, this) || [])[0];
        } else if (typeof test === "string") {
            return (this.array().reverse().find(element => {
                if (strict) {
                    if (!caseSensitive) {
                        if (typeof _.at(element[1], [test])[0] === "string" && typeof value === "string") {
                            return _.at(element[1], [test])[0].toLowerCase() === value.toLowerCase();
                        } else {
                            return _.at(element[1], [test])[0] === value;
                        }
                    } else {
                        return _.at(element[1], [test])[0] === value;
                    }
                } else {
                    if (!caseSensitive) {
                        if (typeof _.at(element[1], [test])[0] === "string" && typeof value === "string") {
                            return _.at(element[1], [test])[0].toLowerCase() == value.toLowerCase();
                        } else {
                            return _.at(element[1], [test])[0] == value;
                        }
                    } else {
                        return _.at(element[1], [test])[0] == value;
                    }
                }
            }, this) || [])[0];
        } else {
            throw new TypeError("test must be either string or function");
        }
    }
    findAll(test, value, caseSensitive = true, strict = true) {
        var ret = [];
        if (test instanceof Function) {
            this.array().map(v => {
                if (test(v[1], v[0], this)) {
                    ret.push(v[1]);
                }
            });
        } else if (typeof test === "string") {
            this.array().map(v => {
                if (strict) {
                    if (!caseSensitive) {
                        if (typeof _.at(v[1], [test])[0] === "string" && typeof value === "string") {
                            if (_.at(v[1], [test])[0].toLowerCase() === value.toLowerCase()) {
                                ret.push(v[1]);
                            }
                        } else {
                            if (_.at(v[1], [test])[0] === value) {
                                ret.push(v[1]);
                            }
                        }
                    } else {
                        if (_.at(v[1], [test])[0] === value) {
                            ret.push(v[1]);
                        }
                    }
                } else {
                    if (!caseSensitive) {
                        if (typeof _.at(v[1], [test])[0] === "string" && typeof value === "string") {
                            if (_.at(v[1], [test])[0].toLowerCase() == value.toLowerCase()) {
                                ret.push(v[1]);
                            }
                        } else {
                            if (_.at(v[1], [test])[0] == value) {
                                ret.push(v[1]);
                            }
                        }
                    } else {
                        if (_.at(v[1], [test])[0] == value) {
                            ret.push(v[1]);
                        }
                    }
                }
            });
        } else {
            throw new TypeError("test must be either string or function");
        }
        return ret;
    }
    findKeyAll(test, value, caseSensitive = true, strict = true) {
        var ret = [];
        if (test instanceof Function) {
            this.array().map(v => {
                if (test(v[1], v[0], this)) {
                    ret.push(v[0]);
                }
            });
        } else if (typeof test === "string") {
            this.array().map(v => {
                if (strict) {
                    if (!caseSensitive) {
                        if (typeof _.at(v[1], [test])[0] === "string" && typeof value === "string") {
                            if (_.at(v[1], [test])[0].toLowerCase() === value.toLowerCase()) {
                                ret.push(v[0]);
                            }
                        } else {
                            if (_.at(v[1], [test])[0] === value) {
                                ret.push(v[0]);
                            }
                        }
                    } else {
                        if (_.at(v[1], [test])[0] === value) {
                            ret.push(v[0]);
                        }
                    }
                } else {
                    if (!caseSensitive) {
                        if (typeof _.at(v[1], [test])[0] === "string" && typeof value === "string") {
                            if (_.at(v[1], [test])[0].toLowerCase() == value.toLowerCase()) {
                                ret.push(v[0]);
                            }
                        } else {
                            if (_.at(v[1], [test])[0] == value) {
                                ret.push(v[0]);
                            }
                        }
                    } else {
                        if (_.at(v[1], [test])[0] == value) {
                            ret.push(v[0]);
                        }
                    }
                }
            });
        } else {
            throw new TypeError("test must be either string or function");
        }
        return ret;
    }
    findStorage(test, value, caseSensitive = true, strict = true) {
        var val = this.find(test, value, caseSensitive, strict);
        var key = this.findKey(test, value, caseSensitive, strict);
        return new this.constructor([[val, key]]);
    }
    findStorageLast(test, value, caseSensitive = true, strict = true) {
        var val = this.findLast(test, value, caseSensitive, strict);
        var key = this.findKeyLast(test, value, caseSensitive, strict);
        return new this.constructor([[val, key]]);
    }
    findStorageAll(test, value, caseSensitive = true, strict = true) {
        var values = this.findAll(test, value, caseSensitive, strict);
        var keys = this.findKeyAll(test, value, caseSensitive, strict);
        return new this.constructor(keys.map((v, i) => [v, values[i]]));
    }
    concat(...iterables) {
        iterables = iterables.map(it => Array.from(it)).map(it => it.filter(v => !this.keysArray().includes(v[0])));
        var array = this.array();
        iterables.map(v => array = array.concat(v));
        return new this.constructor(array);
    }
    concatOverwrite(...iterables) {
        iterables = iterables.map(it => Array.from(it));
        var array = this.array();
        iterables.map(v => array = array.concat(v));
        return new this.constructor(array);
    }
    first() {
        return this.valuesArray()[0];
    }
    firstKey() {
        return this.keysArray()[0];
    }
    last() {
        return this.valuesArray()[this.valuesArray().length - 1];
    }
    lastKey() {
        return this.keysArray()[this.keysArray().length - 1];
    }
    nth(n = 0) {
        return this.valuesArray()[n];
    }
    nthKey(n = 0) {
        return this.keysArray()[n];
    }
    nthRight(n = 0) {
        return this.valuesArray()[this.valuesArray().length - 1 - n];
    }
    nthKeyRight(n = 0) {
        return this.keysArray()[this.keysArray().length - 1 - n];
    }
    random() {
        return this.valuesArray()[Math.floor(Math.random() * this.valuesArray().length)];
    }
    randomKey() {
        return this.keysArray()[Math.floor(Math.random() * this.keysArray().length)];
    }
    randomStorage() {
        return new this.constructor(this.array()[Math.floor(Math.random() * this.array().length)]);
    }
    exists(prop, value, caseSensitive = true, strict = true) {
        return this.find(prop, value, caseSensitive, strict) !== undefined;
    }
    reverse() {
        return new this.constructor(this.array().reverse());
    }
    equals(storage, order = true, strict = true) {
        if (!(storage instanceof this.constructor)) {
            return false;
        }
        if (storage.keysArray().length !== this.keysArray().length) {
            return false;
        }
        if (order) {
            if (strict) {
                var array = this.array();
                var storageArray = storage.array();
                var bool = true;
                storageArray.map((v, i) => {
                    if ((array[i][0] !== v[0]) || (array[i][1] !== v[1])) {
                        bool = false;
                    }
                });
                return bool;
            } else {
                var array = this.array();
                var storageArray = storage.array();
                var bool = true;
                storageArray.map((v, i) => {
                    if ((array[i][0] != v[0]) || (array[i][1] != v[1])) {
                        bool = false;
                    }
                });
                return bool;
            }
        } else {
            if (strict) {
                this.array().map(v => {
                    if (storage.get(v[0]) !== v[1]) {
                        return false;
                    }
                });
                return true;
            } else {
                this.array().map(v => {
                    if (storage.get(v[0]) != v[1]) {
                        return false;
                    }
                });
                return true;
            }
        }
    }
    every(test, value, caseSensitive = true, strict = true) {
        return this.findAll(test, value, caseSensitive, strict).length === this.size;
    }
    some(test, value, caseSensitive = true, strict = true) {
        return this.findAll(test, value, caseSensitive, strict).length > 0;
    }
    fill(value, start = 0, end) {
        if (end === undefined) {
            end = this.size;
        }
        return new this.constructor(this.array().map((v, i) => (i >= start && i < end) ? [v[0], value] : v));
    }
    map(callback) {
        if (callback instanceof Function) {
            return new this.constructor(this.array().map(v => [v[0], callback(v[1], v[0], this)]));
        } else if (typeof callback === "string") {
            return new this.constructor(this.array().map(v => [v[0], _.at(v[1], [callback])[0]]));
        } else {
            throw new TypeError("must give either a function or a string");
        }
    }
    forEach() {
        return this.map.apply(this, arguments);
    }
    includes(value, fromIndex = 0, caseSensitive = true, strict = true) {
        if (fromIndex < 0) {
            fromIndex = this.size - fromIndex;
        }
        var array = this.valuesArray().slice(Math.max(fromIndex, 0));
        return array.find(v => {
            if (strict) {
                if (!caseSensitive && typeof v === "string" && typeof value === "string") {
                    return v.toLowerCase() === value.toLowerCase();
                } else {
                    return v === value;
                }
            } else {
                if (!caseSensitive && typeof v === "string" && typeof value === "string") {
                    return v.toLowerCase() == value.toLowerCase();
                } else {
                    return v == value;
                }
            }
        }) !== undefined;
    }
    keyOf(value, caseSensitive = true, strict = true) {
        var array = this.array();
        return (array.find(v => {
            if (strict) {
                if (!caseSensitive && typeof v[1] === "string" && typeof value === "string") {
                    return v[1].toLowerCase() === value.toLowerCase();
                } else {
                    return v[1] === value;
                }
            } else {
                if (!caseSensitive && typeof v === "string" && typeof value === "string") {
                    return v[1].toLowerCase() == value.toLowerCase();
                } else {
                    return v[1] == value;
                }
            }
        }) || [-1])[0];
    }
    keyOfLast() {
        return this.keyOf.apply(this.reverse(), arguments);
    }
    pop() {
        var ret = this.last();
        this.delete(this.lastKey());
        return ret;
    }
    unshift() {
        var ret = this.first();
        this.delete(this.firstKey());
        return ret;
    }
    filter(test, value, caseSensitive = true, strict = true) {
        var values = this.findAll(test, value, caseSensitive, strict);
        var keys = this.findKeyAll(test, value, caseSensitive, strict);
        return new this.constructor(keys.map((v, i) => [v, values[i]]));
    }
    reduce(callback, initialValue) {
        let i = 0;
        var array = this.array();
        if (initialValue === undefined) {
            i++;
            initialValue = array[0][1];
        }
        var accumulator = initialValue;
        for (; i < array.length; i++) {
            accumulator = callback(accumulator, array[i][1], array[i][0], this);
        }
        return accumulator;
    }
    reduceRight() {
        return this.reduce.apply(this.reverse(), arguments);
    }
    slice(begin = 0, end) {
        if (end === undefined) {
            end = this.length;
        }
        return new this.constructor(this.array().slice(begin, end));
    }
    sort(func = (a, b) => a > b) {
        var sorted = this.array().sort(function(a, b) {
            return func(a[1], b[1]);
        });
        return new this.constructor(sorted);
    }
    splice(start = 0, delcount, ...items) {
        if (delcount === undefined) {
            delcount = this.size - start;
        }
        return new this.constructor(this.array().splice.apply(this.array(), [start, delcount].concat(items)));
    }
    join(char = ",") {
        return this.valuesArray().join(char);
    }
    chunk(num = 1) {
        return _.chunk(this.array(), num).map(v => new this.constructor(v));
    }
    compact() {
        return new this.constructor(this.array().filter(v => v[1]));
    }
    difference(values, caseSensitive = true, strict = true) {
        values = Array.from(values);
        if (strict) {
            if (caseSensitive) {
                return new this.constructor(_.differenceWith(this.array(), values, (a, b) => a[1] === b[1]));
            } else {
                return new this.constructor(_.differenceWith(this.array(), values, (a, b) => {
                    if (typeof a[1] === "string" && typeof b[1] === "string") {
                        return a[1].toLowerCase() === b[1].toLowerCase();
                    } else {
                        return a[1] === b;
                    }
                }));
            }
        } else {
            if (caseSensitive) {
                return new this.constructor(_.differenceWith(this.array(), values, (a, b) => a[1] == b[1]));
            } else {
                return new this.constructor(_.differenceWith(this.array(), values, (a, b) => {
                    if (typeof a[1] === "string" && typeof b[1] === "string") {
                        return a[1].toLowerCase() == b[1].toLowerCase();
                    } else {
                        return a[1] == b[1];
                    }
                }));
            }
        }

    }
    differenceBy(values, iteratee, caseSensitive = true, strict = true) {
        values = Array.from(values);
        iteratee = _.iteratee(iteratee);
        var arr = this.array().map(v => [v[0], iteratee(v[1])]);
        var excludes = values.map(v => iteratee(v));
        if (strict) {
            if (caseSensitive) {
                return new this.constructor(_.differenceWith(arr, excludes, (a, b) => a[1] === b[1]));
            } else {
                return new this.constructor(_.differenceWith(arr, excludes, (a, b) => {
                    if (typeof a[1] === "string" && typeof b[1] === "string") {
                        return a[1].toLowerCase() === b[1].toLowerCase();
                    } else {
                        return a[1] === b;
                    }
                }));
            }
        } else {
            if (caseSensitive) {
                return new this.constructor(_.differenceWith(arr, excludes, (a, b) => a[1] == b[1]));
            } else {
                return new this.constructor(_.differenceWith(arr, excludes, (a, b) => {
                    if (typeof a[1] === "string" && typeof b[1] === "string") {
                        return a[1].toLowerCase() == b[1].toLowerCase();
                    } else {
                        return a[1] == b[1];
                    }
                }));
            }
        }

    }
    differenceWith(values, comparator) {
        values = Array.from(values);
        return new this.constructor(_.differenceWith(this.array(), values, (a, b) => comparator(a[1], b[1])));
    }
    drop(num = 1) {
        return new this.constructor(_.drop(this.array(), num));
    }
    dropRight(num = 1) {
        return new this.constructor(_.dropRight(this.array(), num));
    }
    dropRightWhile(predicate = _.identity) {
        return new this.constructor(_.dropRightWhile(this.array(), v => predicate(v[1], v[0], this)));
    }
    dropWhile(predicate = _.identity) {
        return new this.constructor(_.dropWhile(this.array(), v => predicate(v[1], v[0], this)));
    }
    head() {
        return new this.constructor([
            [this.firstKey(), this.first()]
        ]);
    }
    initial() {
        var arr = this.array();
        arr.pop();
        return new this.constructor(arr);
    }
    intersection(values, caseSensitive = true, strict = true) {
        values = Array.from(values);
        if (strict) {
            if (caseSensitive) {
                return new this.constructor(_.intersectionWith(this.array(), values, (a, b) => a[1] === b[1]));
            } else {
                return new this.constructor(_.intersectionWith(this.array(), values, (a, b) => {
                    if (typeof a[1] === "string" && typeof b[1] === "string") {
                        return a[1].toLowerCase() === b[1].toLowerCase();
                    } else {
                        return a[1] === b[1];
                    }
                }));
            }
        } else {
            if (caseSensitive) {
                return new this.constructor(_.intersectionWith(this.array(), values, (a, b) => a[1] == b[1]));
            } else {
                return new this.constructor(_.intersectionWith(this.array(), values, (a, b) => {
                    if (typeof a[1] === "string" && typeof b[1] === "string") {
                        return a[1].toLowerCase() == b[1].toLowerCase();
                    } else {
                        return a[1] == b[1];
                    }
                }));
            }
        }

    }
    intersectionBy(values, iteratee, caseSensitive = true, strict = true) {
        values = Array.from(values);
        iteratee = _.iteratee(iteratee);
        var arr = this.array().map(v => [v[0], iteratee(v[1])]);
        var excludes = values.map(v => iteratee(v));
        if (strict) {
            if (caseSensitive) {
                return new this.constructor(_.intersectionWith(arr, excludes, (a, b) => a[1] === b[1]));
            } else {
                return new this.constructor(_.intersectionWith(arr, excludes, (a, b) => {
                    if (typeof a[1] === "string" && typeof b[1] === "string") {
                        return a[1].toLowerCase() === b[1].toLowerCase();
                    } else {
                        return a[1] === b[1];
                    }
                }));
            }
        } else {
            if (caseSensitive) {
                return new this.constructor(_.intersectionWith(arr, excludes, (a, b) => a[1] == b[1]));
            } else {
                return new this.constructor(_.intersectionWith(arr, excludes, (a, b) => {
                    if (typeof a[1] === "string" && typeof b[1] === "string") {
                        return a[1].toLowerCase() == b[1].toLowerCase();
                    } else {
                        return a[1] == b[1];
                    }
                }));
            }
        }

    }
    intersectionWith(values, comparator) {
        values = Array.from(values);
        return new this.constructor(_.intersectionWith(this.array(), values, (a, b) => comparator(a[1], b[1])));
    }
    end() {
        return new this.constructor([
            [this.lastKey(), this.last()]
        ]);
    }
    pull() {
        return this.difference.apply(this, arguments);
    }
    pullAll() {
        return this.difference.apply(this, arguments);
    }
    pullAllBy() {
        return this.differenceBy.apply(this, arguments);
    }
    pullAllWith() {
        return this.differenceWith.apply(this, arguments);
    }
    at(indexes) {
        var arr = [];
        indexes.map(v => arr.push([v, this.get(v)]));
        return new this.constructor(arr);
    }
    pullAt(indexes) {
        var arr = [];
        indexes.map(v => arr.push([v, this.get(v)]));
        return new this.constructor(arr);
    }
    remove() {
        return this.filter.apply(this, arguments);
    }
    sortedIndex(val) {
        return _.sortedIndex(this.valuesArray(), val);
    }
    sortedIndexBy(val, iteratee) {
        return _.sortedIndexBy(this.valuesArray(), val, iteratee);
    }
    sortedLastIndex(val) {
        return _.sortedLastIndex(this.valuesArray(), val);
    }
    sortedLastIndexBy(val, iteratee) {
        return _.sortedLastIndexBy(this.valuesArray(), val, iteratee);
    }
    uniq(caseSensitive = true, strict = true) {
        if (strict) {
            if (caseSensitive) {
                return new this.constructor(_.uniqWith(this.array(), (a, b) => a[1] === b[1]));
            } else {
                return new this.constructor(_.uniqWith(this.array(), (a, b) => {
                    if (typeof a[1] === "string" && typeof b[1] === "string") {
                        return a[1].toLowerCase() === b[1].toLowerCase();
                    } else {
                        return a[1] === b[1];
                    }
                }));
            }
        } else {
            if (caseSensitive) {
                return new this.constructor(_.uniqWith(this.array(), (a, b) => a[1] == b[1]));
            } else {
                return new this.constructor(_.uniqWith(this.array(), (a, b) => {
                    if (typeof a[1] === "string" && typeof b[1] === "string") {
                        return a[1].toLowerCase() == b[1].toLowerCase();
                    } else {
                        return a[1] == b[1];
                    }
                }));
            }
        }

    }
    uniqBy(iteratee, caseSensitive = true, strict = true) {
        iteratee = _.iteratee(iteratee);
        var arr = this.array().map(v => [v[0], iteratee(v[1])]);
        if (strict) {
            if (caseSensitive) {
                return new this.constructor(_.uniqWith(arr, (a, b) => a[1] === b[1]));
            } else {
                return new this.constructor(_.uniqWith(arr, (a, b) => {
                    if (typeof a[1] === "string" && typeof b === "string") {
                        return a[1].toLowerCase() === b[1].toLowerCase();
                    } else {
                        return a[1] === b[1];
                    }
                }));
            }
        } else {
            if (caseSensitive) {
                return new this.constructor(_.uniqWith(arr, (a, b) => a[1] == b[1]));
            } else {
                return new this.constructor(_.uniqWith(arr, (a, b) => {
                    if (typeof a[1] === "string" && typeof b[1] === "string") {
                        return a[1].toLowerCase() == b[1].toLowerCase();
                    } else {
                        return a[1] == b[1];
                    }
                }));
            }
        }
    }
    uniqWith(comparator) {
        return new this.constructor(_.uniqWith(this.array(), (a, b) => comparator(a[1], b[1])));
    }
    tail() {
        var arr = this.array();
        arr.shift();
        return new this.constructor(arr);
    }
    take(num = 1) {
        return new this.constructor(_.take(this.array(), num));
    }
    takeRight(num = 1) {
        return new this.constructor(_.takeRight(this.array(), num));
    }
    takeRightWhile(predicate = _.identity) {
        // return new this.constructor(_.takeRightWhile(this.array(), predicate));
        return new this.constructor(_.takeRightWhile(this.array(), v => predicate(v[1], v[0], this)))
    }
    takeWhile(predicate = _.identity) {
        return new this.constructor(_.takeWhile(this.array(), v => predicate(v[1], v[0], this)));
    }
    union() {
        return this.concat.apply(this, arguments);
    }
    unionBy(...arrays) {
        var iteratee = arrays.pop();
        iteratee = _.iteratee(iteratee);
        var stor1 = this.map(v => iteratee(v));
        arrays = arrays.map(arr => Array.from(arr));
        arrays = arrays.map(arr => arr.map(v => [v[0], iteratee(v[1])]));
        return this.concat.apply(stor1, arrays);
    }
    unionWith(...arrays) {
        var comparator = arrays.pop();
        arrays = arrays.map(arr => Array.from(arr));
        return new this.constructor(_.unionWith(_.flatten([this.array()].concat(arrays)), (a, b) => comparator(a[0], b[0], a[1], b[1])));
    }
    xor(...values) {
        var strict;
        var caseSensitive;
        if(_.takeRight(values, 2).length === 2) {
            if(_.takeRight(values, 2).every(v => typeof v === "boolean")) {
                strict = _.takeRight(values, 2)[1];
                caseSensitive = _.takeRight(values, 2)[0];
                values.splice(-2, 2);
            } else if (_.takeRight(values, 2).some(v => typeof v === "boolean")) {
                strict = true;
                caseSensitive = _.takeRight(values, 2)[1];
                values.pop();
            } else {
                strict = true;
                caseSensitive = true;
            }
        } else {
            strict = true;
            caseSensitive = true;
        }
        values = values.map(arr => Array.from(arr));
        if (strict) {
            if (caseSensitive) {
                return new this.constructor(_.xorWith.apply({}, [this.array()].concat(values).concat([(a, b) => a[1] === b[1]])));
            } else {
                return new this.constructor(_.xorWith.apply({}, [this.array()].concat(values).concat([(a, b) => {
                    if (typeof a[1] === "string" && typeof b[1] === "string") {
                        return a[1].toLowerCase() === b[1].toLowerCase();
                    } else {
                        return a[1] === b[1];
                    }
                }])));
            }
        } else {
            if (caseSensitive) {
                return new this.constructor(_.xorWith.apply({}, [this.array()].concat(values).concat([(a, b) => a[1] == b[1]])));
            } else {
                return new this.constructor(_.xorWith.apply({}, [this.array()].concat(values).concat([(a, b) => {
                    if (typeof a[1] === "string" && typeof b[1] === "string") {
                        return a[1].toLowerCase() == b[1].toLowerCase();
                    } else {
                        return a[1] == b[1];
                    }
                }])));
            }
        }

    }
    xorBy(...values) {
        var strict;
        var caseSensitive;
        var iteratee;
        var right = _.takeRight(values, 3);
        if(right.length === 3) {
            if(typeof right[0] === "function") {
                iteratee = right[0];
                strict = right[1];
                caseSensitive = right[2];
                values.splice(-3, 3);
            } else if(typeof right[1] === "function") {
                iteratee = right[1];
                strict = true;
                caseSensitive = right[2];
                values.splice(-2, 2);
            } else if(typeof right[2] === "function") {
                iteratee = right[2];
                strict = true;
                caseSensitive = true;
                values.pop();
            } else {
                iteratee = _.identity;
                strict = true;
                caseSensitive = true;
            }
        } else if(right.length === 2) {
            if(typeof right[0] === "function") {
                iteratee = right[0];
                strict = true;
                caseSensitive = right[1];
                values.splice(-2, 2);
            } else if(typeof right[1] === "function") {
                iteratee = right[1];
                strict = true;
                caseSensitive = true;
                values.pop();
            } else {
                iteratee = _.identity;
                strict = true;
                caseSensitive = true;
            }
        } else if(right.length === 1) {
            if(typeof right[0] === "function") {
                iteratee = right[0];
                caseSensitive = true;
                values.pop();
            } else {
                iteratee = _.identity;
                strict = true;
                caseSensitive = true;
            }
        } else {
            iteratee = _.identity;
            strict = true;
            caseSensitive = true;
        }
        values = values.map(arr => Array.from(arr));
        var arr = this.array().map(v => [v[0], iteratee(v[1])]);
        values = values.map(arr => arr.map(v => [v[0], iteratee(v[1])]));
        return this.xor.apply(new this.constructor(arr), values.concat([strict, caseSensitive]));
    }
    xorWith(...arrays) {
        var comparator = arrays.pop();
        arrays = arrays.map(arr => Array.from(arr));
        return new this.constructor(_.xorWith.apply({}, [this.array()].concat(arrays).concat([(a, b) => comparator(a[0], b[0], a[1], b[1])])));
    }
    shuffle() {
        return new this.constructor(_.shuffle(this.array()));
    }
    sample() {
        return new this.constructor([_.sample(this.array())]);
    }
    sampleSize(num = 1) {
        return new this.constructor(_.sampleSize(this.array(), num));
    }
    reject(test, value, caseSensitive = true, strict = true) {
        if (typeof test === "function") {
            return new this.constructor(_.reject(this.array(), v => test(v[1], v[0], this)));
        } else if (typeof test === "string") {
            if (strict) {
                if (caseSensitive) {
                    return new this.constructor(this.findStorageAll(v => _.at(v, [test])[0] !== value));
                } else {
                    return new this.constructor(this.findStorageAll(v => {
                        if(typeof _.at(v, [test])[0] === "string" && typeof value === "string") {
                            return _.at(v, [test])[0].toLowerCase() !== value.toLowerCase();
                        } else {
                            return _.at(v, [test])[0] !== value;
                        }
                    }
                    ));
                }
            } else {
                if (caseSensitive) {
                    return new this.constructor(this.findStorageAll(v => _.at(v, [test])[0] != value));
                } else {
                    return new this.constructor(this.findStorageAll(v => {
                        if(typeof _.at(v, [test])[0] === "string" && typeof value === "string") {
                            return _.at(v, [test])[0].toLowerCase() != value.toLowerCase();
                        } else {
                            return _.at(v, [test])[0] != value;
                        }
                    }
                    ));
                }
            }
        } else {
            throw new TypeError("must provide either function or string");
        }
    }
    countBy(iteratee = _.identity) {
        return this.constructor.fromObject(_.countBy(this.valuesArray(), iteratee));
    }
    groupBy(iteratee = _.identity) {
        return this.constructor.fromObject(_.groupBy(this.valuesArray(), iteratee)); //.map(v => this.constructor.fromObject(v));
    }
    partition(predicate = _.identity) {
        var stor = new this.constructor();
        var part = _.partition(this.array(), v => predicate(v[1]));
        stor.set(true, new this.constructor(part[0]));
        stor.set(false, new this.constructor(part[1]));
        return stor;
    }
    toString() {
        return `[object ${this.constructor.name}]`;
    }
    toObject() {
        var obj = {};
        this.array().map(v => obj[v[0]] = v[1]);
        return obj;
    }
    toJSON(replacer, space) {
        return this.toObject();
    }
    identity() {
        return this;
    }
}

module.exports = Storage;
