

export function InfoUsuario (){
    const usuario = 'Fulano'
    const titulo = "Título do vídeo";

    function reproduzVideo() {
        alert("O vídeo está sendo reproduzido");
    }

    return(
        <div className="box-pagina-principal" onClick={reproduzVideo}>
            <img src="https://picsum.photos/400/400?a=1 " alt="" />
            <h3>{titulo}</h3>
            <h4>{usuario}</h4>
        </div>
    )
}