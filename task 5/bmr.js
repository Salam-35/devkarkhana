function getBMR() {
    document.getElementById('showCALORIE').disabled = false;



    var age = document.getElementById('age').value;
    var gender = document.querySelector('input[name="inlineRadioOptions"]:checked');
    var weight = parseFloat(document.getElementById('weight').value);
    var height = parseFloat(document.getElementById('height').value);
    var activity = document.getElementById('list');
    let calories;
    if (gender.id === "male") {
        calories = (66.5 + (13.75 * weight) + (5.003 * height) - (6.755 * age));

    } else if (gender.id === "female") {
        calories = (655 + (9.563 * weight) + (1.850 * height) - (4.676 * age));

    }

    if (calories) {
        calories = Math.round((calories + Number.EPSILON) * 100) / 100;
        document.getElementById('showCALORIE').value = calories;
    } else
        document.getElementById('showCALORIE').value = "please insert the values properly";
    document.getElementById('showCALORIE').disabled = true;

}