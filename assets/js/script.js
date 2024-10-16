const iife = (() => {
  //Crear función privada
  const recibeVideo = (url, id) => {
    document.getElementById(id).setAttribute("src", url);
  };
  return {
    mostrarVideo: (url, id) => recibeVideo(url, id),
  };
})();

class Multimedia {
  constructor(url) {
    let _url = url;
    this.getUrl = () => _url;
  }

  setInicio() {
    return "Este método es para realizar un cambio en la URL del video";
  }
}

class Reproductor extends Multimedia {
  constructor(url, id) {
    super(url);
    this.id = id;
  }
  //Metodos
  getId() {
    return this._id;
  }
  playMultimedia() {
    iife.mostrarVideo(this.getUrl(), this.id);
  }
  setInicio(tiempo) {
    let nuevaUrl = `${this.getUrl()}?start=${tiempo}`;
    MultimediaModule.setVideo(nuevaUrl, this.id);
  }
}

const musica = new Reproductor(
  "https://www.youtube.com/embed/xfS4bhImASk?si=9g81lokdn9DtH17n",
  "musica"
);
const pelicula = new Reproductor(
  "https://www.youtube.com/embed/QxVvk-OuJb0?si=q3xIaYfNSIwO4qJi",
  "peliculas"
);
const serie = new Reproductor(
  "https://www.youtube.com/embed/Ylv21uNzW4k?si=YlVnm8MAkX6zcmjm",
  "series"
);

musica.playMultimedia();
pelicula.playMultimedia();
serie.playMultimedia();

musica.setInicio(30);
pelicula.setInicio(30);
serie.setInicio(30);
