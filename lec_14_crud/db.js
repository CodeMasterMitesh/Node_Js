db.createCollection("users",
    {
        validator:
        {
            $jsonSchema:
            {
                bsonType: "object", 
                required: ["name", "email", "age"],
                properties:
                {
                    name:
                    {
                        bsonType: "string",
                        description: "Name must be a string"
                    },
                    email: {
                        bsonType: "string",
                        pattern: "^.+@.+\\..+$",
                        description: "Valid email required"
                    },
                    age: {
                        bsonType: "int",
                        minimum: 18,
                        maximum: 100,
                        description: "Age must be 18-100"
                    },
                    mobile: {
                        bsonType: "int",
                        minimum: 1,
                        maximum: 10,
                        description: "Mobile Number must 10 Digit"
                    },
                    isActive: {
                        bsonType: "bool",
                        description: "Boolean field"
                    }
                }
            }
        }, validationLevel: "strict", validationAction: "error"
    })