import React from "react";
import axios from "axios";
import { useState, useRef } from "react";
import Swal from "sweetalert2";
import { useEffect } from "react";

export function CreateUserForm() {
  const fileInputRef = useRef();
  const [file, setFile] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    last_name: "",
    username: "",
    address: "",
    password: "",
    previewImage: "",
    mail: "",
    img: "",
    phone: "",
    isAdmin: "unchecked",
  });
  // const [isFormValid, setIsFormValid] = useState(false);

  // const validateForm = () => {
  //   const { name, last_name } = formData;
  //   const isNameValid = name.trim() !== '';
  //   const isLastNameValid = last_name.trim() !== '';
  //   return isNameValid && isLastNameValid;
  // };

  // useEffect(() => {
  //   setIsFormValid(validateForm());
  // }, [formData]);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setFormData({
      ...formData,
      previewImage: URL.createObjectURL(selectedFile),
    });
  };

  const handleChange = (e) => {
    const valId = e.target.id;
    const val = e.target.value;
    setFormData({ ...formData, [valId]: val });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await Swal.fire({
      title: "¿Estás seguro de crear el usuario?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Sí",
      cancelButtonText: "No",
      reverseButtons: true,
    });
    if (result.isConfirmed) {
      try {
        await axios.post("http://localhost:3001/user", formData);
        Swal.fire(
          "¡Usuario creado!",
          "El usuario ha sido creado exitosamente.",
          "success"
        );
      } catch (error) {
        throw new Error(error);
      }
    } else if (result.isDenied) {
      Swal.fire("Cancelado", "No se ha creado ningún usuario.", "info");
    }
  };

  const isFormValid = () => {
    const {
      name,
      last_name,
      username,
      address,
      password,
      previewImage,
      mail,
      phone,
    } = formData;
    return name !== "" && last_name !== "" && username !== "" && address !== "" && password !== "" && previewImage !== "" && mail !== "" && phone !== "";
  };

  return (
    <div className="w-full flex justify-center ">
      <div className=" flex flex-col h-screen items-center  fixed top-20 bg-gray-900 overflow-y-auto">
        <h2 className="text-[2rem] mb-2 justify-center ">Crear Usuario</h2>
        <form className="max-w-screen-xl " onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="text-lg">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-2 shadow appearance-none border rounded w-full py-3 px-4 text-lg leading-tight focus:outline-none focus:shadow-outline bg-white text-black"
                required
              />
            </div>
            <div>
              <label htmlFor="last_name" className="text-lg">
                Apellido
              </label>
              <input
                type="text"
                id="last_name"
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
                className="mt-2 shadow appearance-none border rounded w-full py-3 px-4 text-lg leading-tight focus:outline-none focus:shadow-outline bg-white text-black"
                required
              />
            </div>
            <div>
              <label htmlFor="username" className="text-lg">
                Usuario
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="mt-2 shadow appearance-none border rounded w-full py-3 px-4 text-lg leading-tight focus:outline-none focus:shadow-outline bg-white text-black"
                required
              />
            </div>
            <div>
              <label htmlFor="address" className="text-lg">
                Dirección
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="mt-2 shadow appearance-none border rounded w-full py-3 px-4 text-lg leading-tight focus:outline-none focus:shadow-outline bg-white text-black"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="text-lg">
                Contraseña
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="mt-2 shadow appearance-none border rounded w-full py-3 px-4 text-lg leading-tight focus:outline-none focus:shadow-outline bg-white text-black"
                required
              />
            </div>
            <div>
              <label htmlFor="mail" className="text-lg">
                Correo Electrónico
              </label>
              <input
                type="email"
                id="mail"
                name="mail"
                value={formData.mail}
                onChange={handleChange}
                className="mt-2 shadow appearance-none border rounded w-full py-3 px-4 text-lg leading-tight focus:outline-none focus:shadow-outline bg-white text-black"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="text-lg">
                Teléfono
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-2 shadow appearance-none border rounded w-full py-3 px-4 text-lg leading-tight focus:outline-none focus:shadow-outline bg-white text-black"
                required
              />
            </div>

            <div className="flex flex-col items-start justify-between">
              <label htmlFor="file" className="font-semibold">
                Archivo:
              </label>
              <div className="flex items-center">
                <input
                  type="file"
                  id="file"
                  ref={fileInputRef}
                  className="hidden"
                  onChange={handleFileChange}
                />
                <button
                  type="button"
                  onClick={() => fileInputRef.current.click()}
                  className="px-4 py-2 text-sm font-medium bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
                >
                  Seleccionar Archivo
                </button>
                {formData.previewImage && (
                  <img
                    src={formData.previewImage}
                    alt="Preview"
                    className="ml-4 h-20 w-20 object-cover rounded"
                  />
                )}
              </div>
            </div>

            <div className="col-span-2">
              <label htmlFor="isAdmin" className="flex items-center">
                <input
                  type="checkbox"
                  id="isAdmin"
                  name="isAdmin"
                  // checked={formData.isAdmin}
                  value={formData.isAdmin}
                  onChange={handleChange}
                  className="mr-2 leading-tight"
                />
                <span className="text-lg">Es Administrador</span>
              </label>
            </div>
          </div>
          <div className="mt-6">
            <button
              className="bg-blue-500 hover:bg-primary text-white text-lg py-3 px-6 rounded-md"
              disabled={!isFormValid()}
            >
              Crear Usuario
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
