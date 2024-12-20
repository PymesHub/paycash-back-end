import { UserModel, UserModelUpdate } from "./user.models";

describe("UserModel", () => {
  it("should create an instance of UserModel", () => {
    const user = new UserModel(
      "1",
      "John",
      "Doe",
      "john.doe@example.com",
      "1990-01-01",
      "male",
      "approved"
    );
    expect(user).toBeInstanceOf(UserModel);
    expect(user.id).toBe("1");
    expect(user.name).toBe("John");
    expect(user.lastName).toBe("Doe");
    expect(user.email).toBe("john.doe@example.com");
    expect(user.birthday).toBe("1990-01-01");
    expect(user.genre).toBe("male");
    expect(user.statusPLD).toBe("approved");
  });

  it("should create an instance of UserModel with null id", () => {
    const user = new UserModel(
      null,
      "Jane",
      "Doe",
      "jane.doe@example.com",
      "1992-02-02",
      "female",
      "pending"
    );
    expect(user).toBeInstanceOf(UserModel);
    expect(user.id).toBeNull();
    expect(user.name).toBe("Jane");
    expect(user.lastName).toBe("Doe");
    expect(user.email).toBe("jane.doe@example.com");
    expect(user.birthday).toBe("1992-02-02");
    expect(user.genre).toBe("female");
    expect(user.statusPLD).toBe("pending");
  });
});

describe("UserModelUpdate", () => {
  it("should create an instance of UserModelUpdate", () => {
    const userUpdate = new UserModelUpdate(
      "1",
      "John",
      "Doe",
      "john.doe@example.com",
      "1990-01-01",
      "male"
    );
    expect(userUpdate).toBeInstanceOf(UserModelUpdate);
    expect(userUpdate.id).toBe("1");
    expect(userUpdate.name).toBe("John");
    expect(userUpdate.lastName).toBe("Doe");
    expect(userUpdate.email).toBe("john.doe@example.com");
    expect(userUpdate.birthday).toBe("1990-01-01");
    expect(userUpdate.genre).toBe("male");
  });

  it("should create an instance of UserModelUpdate with null values", () => {
    const userUpdate = new UserModelUpdate("1", null, null, null, null, null);
    expect(userUpdate).toBeInstanceOf(UserModelUpdate);
    expect(userUpdate.id).toBe("1");
    expect(userUpdate.name).toBeNull();
    expect(userUpdate.lastName).toBeNull();
    expect(userUpdate.email).toBeNull();
    expect(userUpdate.birthday).toBeNull();
    expect(userUpdate.genre).toBeNull();
  });
});
