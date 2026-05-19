// create mini-express app
import exp from "express";
import { UserModel } from "../models/UserModel.js";

export const UserApp = exp.Router();

// CREATE USER
UserApp.post("/users", async (req, res) => {
  try {
    // create user
    const newUser = req.body;

    console.log(newUser);

    // create user document
    const newUserDocument = new UserModel(newUser);

    // save user document in database
    let user = await newUserDocument.save();

    res.status(201).json({
      message: "User created successfully",
      user: user,
    });
  } catch (err) {
    console.log(err);

    res.status(500).json({
      message: "Error creating user",
      error: err.message,
    });
  }
});

// READ ALL USERS
UserApp.get("/users", async (req, res) => {
  try {
    let usersList = await UserModel.find({ status: true });

    res.status(200).json({
      message: "Users list",
      users: usersList,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

// READ USER BY ID
UserApp.get("/users/:id", async (req, res) => {
  try {
    let uid = req.params.id;

    let user = await UserModel.findOne({
      _id: uid,
      status: true,
    });

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.status(200).json({
      message: "User details",
      payload: user,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

// DELETE USER
UserApp.delete("/users/:id", async (req, res) => {
  try {
    let uid = req.params.id;

    let user = await UserModel.findByIdAndUpdate(uid, {
      $set: { status: false },
    });

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.status(200).json({
      message: "User deactivated successfully",
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

// ACTIVATE USER
UserApp.patch("/users/:id", async (req, res) => {
  try {
    let uid = req.params.id;

    let user = await UserModel.findByIdAndUpdate(
      uid,
      {
        $set: { status: true },
      },
      { new: true }
    );

    res.status(200).json({
      message: "User activated successfully",
      payload: user,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

// UPDATE USER
UserApp.put("/users/:id", async (req, res) => {
  try {
    // get user id
    const uid = req.params.id;

    console.log("USER ID:", uid);
    console.log("REQUEST BODY:", req.body);

    // get updated fields
    const {
      name,
      email,
      dateOfBirth,
      mobileNumber,
      status,
    } = req.body;

    // prepare updated object
    const updatedData = {};

    if (name) updatedData.name = name;
    if (email) updatedData.email = email;
    if (dateOfBirth)
      updatedData.dateOfBirth = dateOfBirth;
    if (mobileNumber)
      updatedData.mobileNumber = mobileNumber;

    // allow boolean update
    if (status !== undefined) {
      updatedData.status = status;
    }

    // check empty update
    if (Object.keys(updatedData).length === 0) {
      return res.status(400).json({
        message: "No data provided for update",
      });
    }

    // update user
    const updatedUser =
      await UserModel.findByIdAndUpdate(
        uid,
        { $set: updatedData },
        {
          new: true,
          runValidators: true,
        }
      );

    // check user exists
    if (!updatedUser) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    // send response
    res.status(200).json({
      message: "User updated successfully",
      payload: updatedUser,
    });
  } catch (err) {
    console.log("UPDATE ERROR:", err);

    res.status(500).json({
      message: "Error updating user",
      error: err.message,
    });
  }
});