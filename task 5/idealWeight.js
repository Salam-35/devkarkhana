function getIW() {
    var age = document.getElementById('age').value;
    var gender = document.querySelector('input[name="inlineRadioOptions"]:checked');
    var height = parseFloat(document.getElementById('height').value);
    height *= 0.393701;
    height = 60 - height;

    let calories;
    var tabledata = "";
    if (gender.id === "male") {
        var idealWeiht = 48.0 + 2.7 * height;
        tabledata += `<tr>
        <td>G.J.Hamwi Formula(1964)</td>
        <td>${idealWeiht}</td>
        </tr>`

        idealWeiht = 50.0 + 2.3 * height;
        tabledata += `<tr>
        <td>B. J. Devine Formula (1974)</td>
        <td>${idealWeiht}</td>
        </tr>`


        idealWeiht = 52.0 + 1.9 * height;
        tabledata += `<tr>
        <td>J. D. Robinson Formula (1983)</td>
        <td>${idealWeiht}</td>
        </tr>`


        idealWeiht = 56.2 + 1.41 * height;
        tabledata += `<tr>
        <td>J. D. Robinson Formula (1983)</td>
        <td>${idealWeiht}</td>
        </tr>`
        document.getElementById('showResult').innerHTML = tabledata;



    } else if (gender.id === "female") {
        // Female: 45.5 kg + 2.2 kg per inch over 5 feet
        // Female:	45.5 kg + 2.3 kg per inch over 5 feet

    }







    // if (calories) {
    //     calories = Math.round((calories + Number.EPSILON) * 100) / 100;
    //     document.getElementById('showCALORIE').value = calories;
    // } else
    //     document.getElementById('showCALORIE').value = "please insert the values properly";
    // document.getElementById('showCALORIE').disabled = true;

}