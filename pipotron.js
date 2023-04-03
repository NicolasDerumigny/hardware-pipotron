function getSubArray(array, cat) {
	var tempTable = new Array();
	for (var i = 0; i < array.length; i++) { // for( var a in array) ne fonctionne pas
		if (array[i].cat & cat) {
			tempTable = tempTable.concat(new Array(array[i].str));
		}
	}
	return tempTable;
}

function pipotron() {
	document.getElementById('pipotron_head').className='click';
	let p = class {
		constructor(str, cat) {
			this.str = str;
			this.cat = cat;
		}
	};
	var Category = { //Permission en bitfield, augmenter d'un si rajout
		"cooling": 1 << 0,
		"compo": 1 << 1,
		"screen": 1 << 2,
		"audio": 1 << 3,
		"case": 1 << 4,
		"psu": 1 << 5,
		"storage": 1 << 6,
		"all": (1 << 15) - 1 //Attention, comportement étrange de JS avec les int
	};

	var intro = new Array(
		"nous sommes fiers d'annoncer que",
		"après 10 ans de développement",
		"après être reparti de rien,",
		"en renaissant de ses cendres,",
		"grâce aux retours des joueurs professionnels,",
		"suite à une validation de 10h d'utilisation intensive,",
		"contrairement aux rumeurs,",
		"suite à la demande générale,",
		"inspiré par le minage,",
		"inspiré par les plus grands professionnels,",
		"dans le but de révolutionner votre ordinaire,",
		"grâce à notre nouvelle finesse de gravure,",
		"après 15 papiers de recherche à ce sujet,",
		"a la suite de plus de $10 milliards d'investissement",
		"en exclusivité pour cette conférence,",
		"officiellement,",
		"sans conteste,",
		"nous pouvons affirmer que",
		"pur produit de notre leadership incontesté,",
		"en moyenne sur un banc d'essai de 50 benchmarks,",
		"selon une étude réalisée sur plus de 1000 joueurs,"
	);
	var produit = new Array(
		new p("ce ventirad", Category.cooling),
		new p("cette nouvelle gamme de ventilateurs", Category.cooling),
		new p("notre GPU", Category.compo),
		new p("notre nouveau CPU", Category.compo),
		new p("cette nouvelle génération de processeurs", Category.compo),
		new p("cette nouvelle génération de carte graphique", Category.compo),
		new p("ce microcontrôleur", Category.compo),
		new p("cette carte mère dernier cri", Category.compo),
		new p("cette carte son", Category.audio),
		new p("ce transformateur", Category.psu),
		new p("cette nouvelle alimentation", Category.psu),
		new p("notre prochain boitier", Category.psu),
		new p("notre dernier clavier", Category.case),
		new p("la dernière souris", Category.case),
		new p("cette batterie", Category.psu),
		new p("cet onduleur", Category.psu),
		new p("ce nouvel interconnect", Category.compo),
		new p("cette barrette de DDR4", Category.compo),
		new p("notre redesign de la DDR3", Category.compo),
		new p("notre réutilisation de la DDR2", Category.compo),
		new p("ce récupérage de la DDR1", Category.compo),
		new p("cette nouvelle vision des câbles", Category.compo),
		new p("ce casque autonome", Category.case | Category.screen),
		new p("ce casque", Category.audio),
		new p("ce kit d'enceintes", Category.audio),
		new p("notre dernier écran", Category.screen),
		new p("notre série de condensateurs", Category.psu | Category.audio),
		new p("notre gamme de bobines", Category.psu | Category.audio),
		new p("cette antenne Wi-Fi", Category.case | Category.compo),
		new p("cette clef USB", Category.case | Category.compo | Category.storage),
		new p("ce module Bluetooth", Category.case | Category.compo),
		new p("cette carte PCIe", Category.compo),
		new p("cet AiO", Category.screen | Category.cooling),
		new p("notre nouveau DAC", Category.audio),
		new p("ce disque dur", Category.storage),
		new p("ce SSD", Category.storage),
		new p("cette interface analogique/digitale", Category.audio),
		new p("cette BX", Category.all)
	);
	// Uniquement du marketing générique qui ne veut rien dire ici
	var adj_marketing = new Array(
		"gaming",
		"Overclocked Edition",
		"Advanced Edition",
		"Extrem Edition",
		"Ultimate Edition",
		"Creators Edition",				"Mescouy Edtion",
		"Turbo",
		"SuperCharged",
		"SuperClocked",
		"OCed!",
		"iCholl",
		"Ultra Alloy",
		"made for gamers",
		"by gamers",
		"next-next-gen",
		"custom",
		"hand made",
		"Dike",
		"RAG",
		"STROX",
		"MMO Edition",
		"Signature Pro",
		"Carbon",
		"Military Class",
		"made in Japan",
		"Ultra Durable",
		"écologique",
		"Super Green",
		"Green"
	);
	// Les fonctionnalités sont spécifiques et apportent une information
	// sur l'équippement du bousin
	var adj_fonctionnalite = new Array(
		new p("full cuivre", Category.psu | Category.case | Category.cooling | Category.audio),
		new p("full alu", Category.psu | Category.case | Category.cooling),
		new p("5-nm", Category.compo),
		new p("3D", Category.compo, Category.storage, Category.screen),
		new p("triple couche", Category.compo, Category.storage),
		new p("dual-fan", Category.compo | Category.case | Category.psu),
		new p("triple-fan", Category.compo | Category.case | Category.psu),
		new p("à blower", Category.psu | Category.compo | Category.case),
		new p("64-bit", Category.compo | Category.audio | Category.screen),
		new p("scalable", Category.compo),
		new p("RGB", Category.all),
		new p("à licorne", Category.all),
		new p("waterproof", Category.all),
		new p("résistant aux températures extrêmes", Category.all),
		new p("rétrocompatible avec les générations précédentes", Category.all),
		new p("à fréquence variable", Category.compo | Category.screen | Category.audio),
		new p("en aluminium pur", Category.all),
		new p("plaqué or", Category.all),
		new p("en MU-metal", Category.audio | Category.psu),
		new p("mécanique", Category.all & (!Category.compo)),
		new p("analogique", Category.audio | Category.case),
		new p("numérique", Category.all),
		new p("haut-de-gamme", Category.all),
		new p("pour professionnels exigeants", Category.all),
		new p("pour amateurs enthousiastes", Category.all),
		new p("à refroidissement liquide", Category.all),
		new p("sous watercooling", Category.all)
	);
	var verb = new Array(
		"supporte",
		"rend accessible à tous",
		"apporte au grand public",
		"apporte directement chez vous",
		"révolutionne",
		"introduit",
		"secoue",
		"renouvelle",
		"rajeunit",
		"renverse",
		"casse le monde de",
		"fait trembler",
		"change complètement",
		"redéfinit",
		"standardise",
		"établit",
		"dévoile au monde entier",
		"change la donne de",
		"bouleverse",
		"boulverse l'ordre établi de",
		"pose les bases de",
		"défriche le domaine de",
		"assure",
		"dégrossit",
		"repousse les limites de"
	);
	var techno = new Array(
		new p("le RayTracing", Category.screen | Category.compo),
		new p("la VR", Category.screen | Category.compo),
		new p("la 4K", Category.screen | Category.compo),
		new p("l'UHD", Category.screen | Category.compo),
		new p("la barrière des 200 Hz", Category.screen | Category.compo | Category.audio),
		new p("la barre des 300 fps", Category.screen | Category.compo),
		new p("l'IA", Category.compo),
		new p("la G-SYNC", Category.screen | Category.compo),
		new p("le FreeSync", Category.screen | Category.compo),
		new p("la 3D stéréoscopique", Category.screen | Category.compo),
		new p("l'allumage", Category.psu),
		new p("l'extinction", Category.psu),
		new p("le minage", Category.compo | Category.storage | Category.psu),
		new p("le multiplexage", Category.compo | Category.screen | Category.audio),
		new p("l'anti-aliasing", Category.screen | Category.compo),
		new p("l'upscaling", Category.screen | Category.compo),
		new p("l'efficacité énergétique", Category.compo, Category.psu),
		new p("la productivité", Category.all),
		new p("le machine learning", Category.compo | Category.stockage),
		new p("la conduite autonome", Category.compo),
		new p("le confort d'utilisation", Category.all),
		new p("l'immersion", Category.all),
		new p("le courant utilisé", Category.psu | Category.compo),
		new p("le son", Category.audio),
		new p("l'écoute", Category.audio),
		new p("la blockchain", Category.compo | Category.stockage),
		new p("le débit", Category.compo | Category.screen | Category.case)
	);
	var techno_adj = new Array(
		new p("en temps réel", Category.screen | Category.compo),
		new p("5.1", Category.audio | Category.compo),
		new p("7.1", Category.audio | Category.compo),
		new p("en version 2.0", Category.all),
		new p("jouable", Category.all),				new p("best-in-class", Category.all),
		new p("open-source", Category.all),
		new p("surround", Category.audio | Category.screen),
		new p("sans pertes", Category.audio | Category.screen),
		new p("sans précalcul", Category.compo),
		new p("dans le cloud", Category.compo),
		new p("sans fil", Category.case | Category.audio),
		new p("à distance", Category.case | Category.audio),
		new p("sous standard libre", Category.all),
		new p("sous contrôle par radiocommande", Category.all),
		new p("d'une qualité exceptionnelle", Category.all),
		new p("HDR", Category.screen | Category.compo),
		new p("à profondeur 10-bit", Category.screen | Category.compo),
		new p("pour serveurs", Category.all),
		// new p("au-delà des laboratoires", Category.all),
		new p("sans temps de chargement", Category.all),
		new p("64-bit", Category.compo),
		new p("avec monitoring en façade", Category.all),
		new p("au SDK libre dédié", Category.all),
		new p("avec une puissance de 10 GigaRay/s", Category.compo),
		new p("grâce à ses 100 TFLOPS", Category.compo),
		new p("sous chiffrement sécurisé", Category.all),
		new p("d'une pureté cristaline", Category.audio),
		new p("d'une spacialité incomparable", Category.audio),
		new p("quantique", Category.all)
	);
	var dispo = new Array(
		"pour la première fois au monde",
		"en exclusivité mondiale",
		"en précommande pour 1499$ seulement",
		"en pré-lancement aux Etats-Unis",
		"en beta-test en Asie",
		"déjà disponible en boutique",
		"en financement participatif",
		"distribué en DLC",
		"en mise à jour gratuite",
		"disponible sous peu",
		"encore en test",
		"en avant-première",
		"en collaboration avec les OEMs",
		"bientôt dans les rayons",
		"disponible en quantité limitée",
		"uniquement sur réservation",
		"uniquement sur invitation",
		"en béta ouverte chez nos revendeurs",
		"en béta fermée dans nos laboratoires"
	);
	var participe_present = new Array(
		"rajeunissant",
		"redéfinissant",
		"repoussant les limites de",
		"faisant trembler le monde de",
		"secouant",
		"défrichant le domaine de",
		"cassant les limites de",
		"renversant l'ordre établit de"
	);
	var version = new Array(
		"version",
		"édition"
	);

	var rand_obj_produit = produit[Math.floor(Math.random() * (produit.length))];
	var rand_produit = rand_obj_produit.str;
	var cat = rand_obj_produit.cat;
	var tempTable;
	tempTable = getSubArray(techno, cat);
	var rand_techno = tempTable[Math.floor(Math.random() * (tempTable.length))];
	tempTable = getSubArray(techno_adj, cat);
	var rand_techno_adj = tempTable[Math.floor(Math.random() * (tempTable.length))];
	tempTable = getSubArray(adj_fonctionnalite, cat);
	var rand_a_fonc = tempTable[Math.floor(Math.random() * (tempTable.length))];


	var rand_intro = intro[Math.floor(Math.random() * (intro.length))];
	var rand_a_mark = adj_marketing[Math.floor(Math.random() * (adj_marketing.length))];
	if (Math.random() < 0.2) { // on double l'adj bullshit environ une fois sur cinq
		var new_a_mark = adj_marketing[Math.floor(Math.random() * (adj_marketing.length))];
		if (new_a_mark != rand_a_mark) { // pas de doublons...
			rand_a_mark = rand_a_mark + " " + new_a_mark;
		}
	}
	var rand_verb = verb[Math.floor(Math.random() * (verb.length))];
	var rand_dispo = dispo[Math.floor(Math.random() * (dispo.length))];
	var rand_pp = participe_present[Math.floor(Math.random() * (participe_present.length))];
	var rand_version = version[Math.floor(Math.random() * (version.length))];
	var res;

	var choice = Math.floor(Math.random() * 4); // ATTENTION METTRE A JOUR ICI SI AJOUT STRUCTURE
	switch (choice) {
		case 0:
			res = rand_intro + " " + rand_produit + " " + rand_a_mark + " " + rand_a_fonc + " " + rand_verb + " " + rand_techno + " " + rand_techno_adj + ".";
			break;
		case 1:
			res = rand_dispo + ", " + rand_produit + " " + rand_a_mark + " " + rand_a_fonc + " " + rand_verb + " " + rand_techno + " " + rand_techno_adj + ".";
			break;
		case 2:
			res = rand_pp + " " + rand_techno + " " + rand_techno_adj + ", " + rand_produit + " " + rand_a_fonc + " est " + rand_dispo + " en " + rand_version + " " + rand_a_mark + ".";
			break;
		case 3:
			res = rand_produit + " " + rand_a_mark + " " + rand_a_fonc + ", " + rand_dispo + ", " + rand_verb + " " + rand_techno + " " + rand_techno_adj + ".";
			break;
	}
	res = res.charAt(0).toUpperCase() + res.slice(1);
	res = res.replace(/de le/g, "du");
	setTimeout(function(){
		self.location.href="/modules/mod_pipotron/pipotron.php?options="+pipotron_size+"&pipo="+res;
	},700);
	// return(res);
	// res = "<span id=\"copy\">" + res + "</span>";
	// document.getElementById("pipotation").innerHTML = res;
};

function copy() {
	var text = document.getElementById("copy");
	var copied = text.cloneNode(true);
	document.body.appendChild(copied);
	var range = document.createRange();
	range.selectNodeContents(copied);
	var selection = window.getSelection();
	selection.removeAllRanges();
	selection.addRange(range);
	document.execCommand('copy');
	selection.removeAllRanges();
	copied.remove();
	// document.getElementById('pipotron_copy_done').style.display="block"
	document.getElementById('pipotron_copy_done').style.opacity=1;
	setTimeout(function(){
		document.getElementById('pipotron_copy_done').style.opacity=0;
	},2000);
};
