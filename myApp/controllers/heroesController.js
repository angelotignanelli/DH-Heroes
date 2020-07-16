const fs =  require('fs');
const heroes = JSON.parse(fs.readFileSync(__dirname + '/../data/heroes.json', 'utf-8'));


const controller = {
    
    home: (req, res) => {
	    res.send("Ni Superman, Iron Man o La Mujer Maravilla son tan importantes cómo las y los Heroes de carne y hueso que encontrarás en este sitio. Esperamos que ellas y ellos te sirvan como inspiración para poder cumplir tus objetivos. Recuerda: ¡nunca pares de creer en ti!")
    },


    heroes: (req, res) => {
	    res.send(heroes);
    },


    id: (req, res) => {
	// Acá lo primero será encontrar al héroe que corresponda
    let heroe = heroes.find(function(element){
		return element.id == req.params.id
	});
	// Si se encuentra al héroe se envía el nombre y su profesión
	// Si NO se encuentra se envía el mensaje de no encontrado	
		if(heroe != undefined){
		res.send(heroe.nombre + " " + heroe.profesion);
		}else{
			res.send("No se encontró el heroe");
		}
	},


    resenia: (req,res) => {
	// Acá lo primero será encontrar al héroe que corresponda
	let heroe = heroes.find(function(element){
		return element.id == req.params.id;
	});
	// Si NO se encuentra al héroe se envía un mensaje
	// Si se encuentra al héroe:
		// Se pregunta si vino el parámetro Y el valor esperado y se envía la información
		// Si nó vino el parámetro se envía el mensaje de error
		if(heroe!=undefined){
			if(req.params.ok=="ok"){
				res.send(heroe.nombre + " " + heroe.resenia)
			}else{
				res.send("Lamento que no desees saber nada de mi :(")
			}
		}else{
			res.send("No encontramos un heroe para mostrarte su biografia")
		}
	},


    error: (req, res) => {
	res.status(404).send('404 not found. <br> ¡Houston, poseemos problemas!');
    },

}

module.exports = controller;