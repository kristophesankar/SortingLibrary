var Algorithm = function(list) {
    this.list = list
}

Algorithm.prototype.insertionSort = function() {
    for (var i = 1; i < this['list'].length; i++) {
        var temp = this['list'][i];
        for (var j = i - 1; j >= 0 && (this['list'][j] > temp); j--) {
            this['list'][j + 1] = this['list'][j];
        }
        this['list'][j + 1] = temp;
    }
    return this['list'];
};
