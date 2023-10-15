import React from 'react';
import { useForm } from 'react-hook-form';

const EditUserForm = ({ currentUser, updateUser, isEditing, addUser }) => {
  const { register, errors, handleSubmit, setValue } = useForm({
    defaultValues: currentUser,
  });

  setValue('name', currentUser.name);
  setValue('username', currentUser.username);

  const onSubmit = (data, e) => {
    if (isEditing) {
      data.id = currentUser.id;
      updateUser(currentUser.id, data);
    } else {
      addUser(data);
    }

    //Se limpian los campos
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Nombre</label>
      <input
        className='box-input'
        type='text'
        name='name'
        maxLength={20}
        {...register('name', {
          required: {
            value: true,
            message: 'Nombre es requerido.',
          },
        })}
      />
      <div>{errors?.name?.message}</div>

      <label>NickName</label>
      <input
        type='text'
        name='username'
        maxLength={15}
        {...register('username', {
          required: {
            value: true,
            message: 'UserName es requerido',
          },
        })}
      />
      {errors?.username?.type === 'required' && <span>Campo requerido</span>}
      <button>{isEditing ? 'Editar Usuario' : 'Agregar usuario'}</button>
    </form>
  );
};

export default EditUserForm;
