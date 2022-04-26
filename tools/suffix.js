module.exports.addSuffix = function (name) {
    if (name.endsWith("y")) {
        return name.substring(0, name.length - 1) + "ies";
    }

    if (name.endsWith("s") || name.endsWith("x")) {
        return name + "es";
    }

    return name + "s";
};
