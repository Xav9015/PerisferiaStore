import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";

const ReviewForm = ({ id }) => {
  const { user } = useAuth0();
  const [rating, setRating] = useState("5");
  const [comment, setComment] = useState("");
  const [userId, setUserId] = useState("");

  useEffect(() => {
    const fetchId = async () => {
      if (user && user.email) {
        try {
          const response = await axios.get(
            `http://localhost:3001/admin/user/${user.email}`
          );
          setUserId(response.data.id);
        } catch (error) {
          console.error("Error al obtener el usuario:", error);
        }
      }
    };

    if (user && user.email) {
      fetchId();
    }
  }, [user]);

  const handleRatingChange = (event) => {
    setRating(parseInt(event.target.value));
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!user) {
      Swal.fire({
        title: "Inicia sesión",
        text: "Inicia sesión para agregar una reseña 😉",
        icon: "warning",
        confirmButtonText: "Ok",
      });
    } else {
      const sendReview = {
        userId: userId,
        comment: comment,
        rating: rating,
      };
      try {
        Swal.fire({
          title: "Gracias!",
          text: "Se ha registrado tu comentario",
          icon: "info",
          confirmButtonText: "Ok",
        }).then((result) => {
          if (result.isConfirmed) {
            axios.post(`http://localhost:3001/product/${id}`, sendReview);
            setComment("");
            location.reload();
          }
        });
      } catch (error) {
        console.error("Error al enviar la reseña:", error);
      }
    }
  };

  return (
    <div className="container text-black bg-white rounded-lg p-3 mt-4">
      <h2 className="text-2xl font-bold text-center">Deja tu reseña</h2>
      <label htmlFor="user">Usuario: </label>
      <span id="user">{user && `${user.name}`}</span>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="rating">Puntuación:</label>
          <select
            className="text-black bg-white select ml-2"
            id="rating"
            value={rating}
            onChange={handleRatingChange}
          >
            <option value="5">⭐⭐⭐⭐⭐</option>
            <option value="4">⭐⭐⭐⭐</option>
            <option value="3">⭐⭐⭐</option>
            <option value="2">⭐⭐</option>
            <option value="1">⭐</option>
          </select>
        </div>
        <div className="flex flex-col">
          <textarea
            className="textarea text-black bg-white mt-2"
            id="comment"
            value={comment}
            required={true}
            onChange={handleCommentChange}
            rows="2"
            cols="50"
            placeholder="Deja tu comentario"
          />
        </div>
        <div className="w-full flex justify-end pr-4">
          <button
            className="btn text-white bg-blue-700 mt-2  w-20"
            type="submit"
          >
            Enviar
          </button>
        </div>
      </form>
     </div>
  );
};

export default ReviewForm;
