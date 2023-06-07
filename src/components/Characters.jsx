import React from 'react'

const Characters = ({characters = []}) => {
  return (
    <div className="container mt-3 d-flex  justify-content-center align-items-center flex-wrap">
    {characters.map((item) => (
      <div className="card m-2" style={{width: '18rem'}} key={item.id}>
        <img
          className="card-img-top"  
          src={item.image}
          alt="Card image cap"
          
        />
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <hr/>
          <p className="card-text">
           <span><strong>Estado: </strong> </span><span>{item.status}</span>
          </p>
          <p className="card-text">
           <span><strong>Especie: </strong> </span><span>{item.species}</span>
          </p>
          <p className="card-text">
           <span><strong>Tipo: </strong> </span><span>{item.type === "" ? '---' : item.type}</span>
          </p>
          <p className="card-text">
           <span><strong>Sexo: </strong> </span><span>{item.gender}</span>
          </p>
        </div>
      </div>
    ))}
  </div>
  )
}

export default Characters