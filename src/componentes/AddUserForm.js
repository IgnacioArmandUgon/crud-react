import React, { useState } from "react";
import { useForm } from "react-hook-form";

const AddUserForm = (props) => {

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  //Al hacer click añadir usuario
  const onSubmit = (data, e) => {
    props.addUser(data);
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Name</label>
      <input
        type="text"
        {...register("name", { required: "Campo requerido" })}
      />
      <span className="danger">{errors.name && errors.name.message}</span>
      <label>Username</label>
      <input
        type="text"
        {...register("username", { required: "Campo requerido" })}
      />
      <span className="danger">
        {errors.username && errors.username.message}
      </span>
      <button>Add new user</button>
    </form>
  );
};

export default AddUserForm;
