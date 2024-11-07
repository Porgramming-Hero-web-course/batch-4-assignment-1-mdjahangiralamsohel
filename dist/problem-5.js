"use strict";
{
    const getProperty = (obj, property) => {
        const { [property]: value } = obj;
        return value;
    };
    const person = { name: "Alice", age: 30 };
    console.log(getProperty(person, "name"));
}
