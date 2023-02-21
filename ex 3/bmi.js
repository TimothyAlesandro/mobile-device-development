let BMI = (weight, height) => {
    let bmi = weight / (height * height);
    let result;
    
    if (bmi < 18.5) {
        result = "Kekurusan";
    } else if (bmi >= 18.5 && bmi < 25) {
        result = "Normal";
    } else if (bmi >= 25 && bmi < 30) {
        result = "Kegemukan";
    } else {
        result = "Obesitas";
    }

    return `Beran badan anda adalah ${bmi.toFixed(2)} dan anda ${result}.`;
};

export default BMI;
