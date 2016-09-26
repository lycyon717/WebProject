function strrep(num: number): void {
    for (var p = 0; p < num; p++) {
        var result: string = "";
        for (var i = 0; i < 10-p; i++) {
            result += " ";
        }
        for (var j = 0; j < p; j++) {
            result += "* ";
        }
        console.log(result);
    }
}

window.onload = function(){
    strrep(5);
};