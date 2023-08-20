function calculate() {
    const baseVoltage = parseFloat(document.getElementById("baseVoltage").value);
    const baseApparentPower = parseFloat(document.getElementById("baseApparentPower").value);
    const quantityValue = parseFloat(document.getElementById("quantityValue").value);
    const quantityType = document.getElementById("quantityType").value;
    const perUnit = calculatePerUnit(quantityValue, quantityType, baseVoltage, baseApparentPower);

    document.getElementById("perUnitValue").textContent = perUnit.toFixed(5);
}

function calculatePerUnit(value, type, baseVoltage, baseApparentPower) {
    if (type === "current") {
        return value * baseVoltage / baseApparentPower;
    } else if (type === "impedance") {
        return value / (baseVoltage * baseVoltage * 1000 / baseApparentPower);
    } else if (type === "voltage") {
        return value / baseVoltage;
    } else if (type === "power") {
        return value / baseApparentPower;
    }
    return 0;
}
