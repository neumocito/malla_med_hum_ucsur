const malla = {
  "1° semestre": [
    "Biología Celular y Molecular",
    "Química",
    "Matemática",
    "Lengua y Oratoria",
    "Introducción a la Medicina",
    "Desempeño Universitario"
  ],
  "2° semestre": [
    "Morfosiología I",
    "Anatomía General",
    "Introducción a la Investigación",
    "Bioquímica",
    "Redacción General",
    "Realidad Nacional"
  ],
  "3° semestre": [
    "Morfosiología II",
    "Fisiología Humana",
    "Embriología Humana",
    "Genética Médica",
    "Psicología General"
  ],
  "4° semestre": [
    "Farmacología General",
    "Patología General",
    "Microbiología Médica",
    "Parasitología",
    "Psicología Médica"
  ],
  "5° semestre": [
    "Semiología Médica I",
    "Inmunología",
    "Patología Sistémica I",
    "Salud Pública I",
    "Filosofía y Ética"
  ],
  "6° semestre": [
    "Semiología Médica II",
    "Patología Sistémica II",
    "Farmacología Clínica",
    "Imagenología",
    "Salud Pública II"
  ],
  "7° semestre": [
    "Medicina Interna I",
    "Pediatría I",
    "Ginecoobstetricia I",
    "Psiquiatría I",
    "Ética Médica"
  ],
  "8° semestre": [
    "Medicina Interna II",
    "Pediatría II",
    "Ginecoobstetricia II",
    "Psiquiatría II",
    "Metodología de la Investigación"
  ],
  "9° semestre": [
    "Cirugía General I",
    "Medicina Familiar y Comunitaria",
    "Medicina Legal",
    "Bioética Clínica",
    "Epidemiología Clínica"
  ],
  "10° semestre": [
    "Cirugía General II",
    "Traumatología",
    "Dermatología",
    "Oftalmología",
    "Otorrinolaringología"
  ],
  "11° semestre": [
    "Internado: Medicina Interna",
    "Internado: Pediatría",
    "Internado: Ginecoobstetricia"
  ],
  "12° semestre": [
    "Internado: Cirugía General",
    "Internado: Psiquiatría",
    "Internado: Medicina Familiar"
  ],
  "13° semestre": [
    "Internado: Medicina Comunitaria",
    "Internado: Emergencias",
    "Electivo Profesional I"
  ],
  "14° semestre": [
    "Internado: Electivo Profesional II",
    "Internado: Investigación Aplicada",
    "Internado: Revisión de Casos Clínicos"
  ]
};

function construirMalla() {
  const contenedor = document.getElementById("contenedor-malla");
  contenedor.innerHTML = "";

  for (const [semestre, ramos] of Object.entries(malla)) {
    const divSemestre = document.createElement("div");
    divSemestre.className = "semestre";

    const titulo = document.createElement("h2");
    titulo.textContent = semestre;
    divSemestre.appendChild(titulo);

    ramos.forEach((ramo) => {
      const divRamo = document.createElement("div");
      divRamo.className = "ramo";
      divRamo.textContent = ramo;

      if (localStorage.getItem(ramo) === "aprobado") {
        divRamo.classList.add("aprobado");
      }

      divRamo.addEventListener("click", () => {
        divRamo.classList.toggle("aprobado");
        localStorage.setItem(ramo, divRamo.classList.contains("aprobado") ? "aprobado" : "");
      });

      divSemestre.appendChild(divRamo);
    });

    contenedor.appendChild(divSemestre);
  }
}

window.addEventListener("DOMContentLoaded", construirMalla);
