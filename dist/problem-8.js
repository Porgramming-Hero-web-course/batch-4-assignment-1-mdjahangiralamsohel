"use strict";
{
    const validateKeys = (obj, keys) => {
        for (const key of keys) {
            if (key in obj) {
                return true;
            }
        }
        return false;
    };
    const person = { name: "Alice", age: 25, email: "alice@example.com" };
    console.log(validateKeys(person, ["name", "age"]));
}
