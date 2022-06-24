var btnBMI = document.getElementById("btnBMI");
if (btnBMI) {
    function getBMI() {
        let height = document.getElementById("height").value;
        let weight = document.getElementById("weight").value;
        height /= 100;
        var bmi = weight / (height * height);
        var rounded = Math.round((bmi + Number.EPSILON) * 10) / 10;
        document.getElementById('showBMI').value = rounded;
        if (!height || !weight) {
            document.getElementById('showBMI').value = "please insert values";
        }
        if (rounded < 19)
            document.getElementById("showBMI").style.backgroundColor = "#f0940a";
        else if (rounded > 25)
            document.getElementById("showBMI").style.backgroundColor = "#f06d0a";
        else
            document.getElementById("showBMI").style.backgroundColor = "#17f514";
    }
}

// var btnCALORIE = document.getElementById("btnCALORIE");
// if (btnCALORIE) {
//     function getCALORIE() {
//         document.getElementById('showCALORIE').disabled = false;



//         var age = document.getElementById('age').value;
//         var gender = document.querySelector('input[name="inlineRadioOptions"]:checked');
//         var weight = parseFloat(document.getElementById('weight').value);
//         var height = parseFloat(document.getElementById('height').value);
//         var activity = document.getElementById('list');
//         let calories;
//         if (gender.id === "male") {
//             var maleValue = (66.5 + (13.75 * weight) + (5.003 * height) - (6.755 * age));
//             if ((activity.value == "1"))
//                 calories = 1.2 * maleValue;
//             else if ((activity.value == "2"))
//                 calories = 1.375 * maleValue;
//             else if ((activity.value == "3"))
//                 calories = 1.55 * maleValue;
//             else if ((activity.value == "4"))
//                 calories = 1.725 * maleValue;
//             else if (activity.value === "5")
//                 calories = 1.9 * maleValue;

//         } else if (gender.id === "female") {
//             var femaleValue = (655 + (9.563 * weight) + (1.850 * height) - (4.676 * age));
//             if ((activity.value == "1"))
//                 calories = 1.2 * femaleValue;
//             else if ((activity.value == "2"))
//                 calories = 1.375 * femaleValue;
//             else if ((activity.value == "3"))
//                 calories = 1.55 * femaleValue;
//             else if ((activity.value == "4"))
//                 calories = 1.725 * maleValue;
//             else if ((activity.value == "5"))
//                 calories = 1.9 * femaleValue;
//         }

//         if (calories) {
//             calories = Math.round((calories + Number.EPSILON) * 100) / 100;
//             document.getElementById('showCALORIE').value = calories;
//         } else
//             document.getElementById('showCALORIE').value = "please insert the values properly";
//         document.getElementById('showCALORIE').disabled = true;

//     }
// }