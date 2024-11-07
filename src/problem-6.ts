//Problem-6: Define an interface Profile with properties name, age, and email. Create a function updateProfile that accepts an object of type Profile and an object of type Partial representing the updates. The function should return the updated profile.
{
  interface Profile {
    name: string;
    age: number;
    email: string;
  }

  function updateProfile(
    person: Profile,
    updateData: Partial<Profile>
  ): Profile {
    return Object.assign({}, person, updateData);
  }

  const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };

  const updateData: Partial<Profile> = {
    age: 26,
  };

  const updatedProfile = updateProfile(myProfile, updateData);

  console.log(updatedProfile);
}
