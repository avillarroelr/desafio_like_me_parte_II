import axios from "axios";
import { useEffect, useState } from "react";
import Form from "./components/Form";
import Post from "./components/Post";

const urlBaseServer = "http://localhost:3000";

function App() {
  const [titulo, setTitulo] = useState("");
  const [imgSrc, setImgSRC] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [posts, setPosts] = useState([]);
  const [editingPost, setEditingPost] = useState(null);

  const getPosts = async () => {
    try {
      const { data: posts } = await axios.get(urlBaseServer + "/posts");
      setPosts(posts);
    } catch (error) {
      console.error("Error al obtener los posts:", error);
    }
  };

  const agregarPost = async () => {
    const post = { titulo, img: imgSrc, descripcion };
    try {
      if (editingPost) {
        await axios.put(urlBaseServer + `/posts/${editingPost.id}`, post);
        alert("Post actualizado exitosamente");
        setEditingPost(null);
      } else {
        await axios.post(urlBaseServer + "/posts", post);
        alert("Post agregado exitosamente");
      }
      setTitulo("");
      setImgSRC("");
      setDescripcion("");
      getPosts();
    } catch (error) {
      alert("Error al agregar/actualizar el post");
      console.error(error);
    }
  };

  const like = async (id) => {
    try {
      await axios.put(urlBaseServer + `/posts/like/${id}`);
      getPosts();
    } catch (error) {
      console.error("Error al actualizar los likes:", error);
    }
  };

  const deleteLikes = async (id) => {
    try {
      await axios.delete(urlBaseServer + `/posts/${id}`);
      getPosts();
    } catch (error) {
      console.error("Error al eliminar el post:", error);
    }
  };

  const startEditing = (post) => {
    setTitulo(post.titulo);
    setImgSRC(post.img);
    setDescripcion(post.descripcion);
    setEditingPost(post);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="App">
      <h2 className="py-5 text-center">&#128248; Like Me &#128248;</h2>
      <div className="row m-auto px-5">
        <div className="col-12 col-sm-4">
          <Form
            setTitulo={setTitulo}
            setImgSRC={setImgSRC}
            setDescripcion={setDescripcion}
            agregarPost={agregarPost}
            titulo={titulo}
            imgSrc={imgSrc}
            descripcion={descripcion}
          />
        </div>
        <div className="col-12 col-sm-8 px-5 row posts align-items-start">
          {posts.map((post, i) => (
            <Post
              key={i}
              post={post}
              like={like}
              deleteLikes={deleteLikes}
              startEditing={startEditing}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;


