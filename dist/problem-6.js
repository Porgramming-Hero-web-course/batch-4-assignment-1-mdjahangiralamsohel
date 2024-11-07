"use strict";
{
    function updateProfile(person, updateData) {
        return Object.assign({}, person, updateData);
    }
    const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
    const updateData = {
        age: 26,
    };
    const updatedProfile = updateProfile(myProfile, updateData);
    console.log(updatedProfile);
}
