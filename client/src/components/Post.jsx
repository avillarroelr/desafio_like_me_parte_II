function Post({ post: { id, titulo, img, descripcion, likes }, like, deleteLikes, startEditing }) {
  return (
    <div className="card col-12 col-sm-4 d-inline mx-0 px-3">
      <div className="card-body p-0">
        <img
          className="card-img-top"
          src={img}
          alt={titulo}
          onClick={() => startEditing({ id, titulo, img, descripcion })}
          style={{ cursor: "pointer" }}
        />
        <div className="p-3">
          <h4 className="card-title">{titulo}</h4>
          <p className="card-text">{descripcion}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <i
                onClick={() => like(id)}
                className={`fa-heart fa-xl ${likes ? "fa-solid" : "fa-regular"}`}
                style={{ cursor: "pointer" }}
              ></i>
              <span className="ms-1">{likes}</span>
            </div>
            <i
              onClick={() => deleteLikes(id)}
              className="fa-solid fa-x"
              style={{ cursor: "pointer" }}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;




