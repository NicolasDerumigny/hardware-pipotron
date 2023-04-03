<script>
function pipotron() {
	var Gender = {
		"masc": 1 << 0,
		"fem": 1 << 1
	};

	// Renvoi le sous-array des adjectifs correcpondant pour la catégorie cat et au genre gender
	function getSubArray(array, cat, gender = Gender.masc | Gender.fem) {
		var tempTable = new Array();
		for (var i = 0; i < array.length; i++) { // for( var a in array) ne fonctionne pas
			if ((array[i].cat & cat) && (array[i].gender & gender)) {
				tempTable = tempTable.concat(new Array(array[i].str));
			}
		}
		return tempTable;
	};

	function getSubArray_with_carac(array, cat, gender = Gender.masc | Gender.fem) {
		var tempTable = new Array();
		for (var i = 0; i < array.length; i++) { // for( var a in array) ne fonctionne pas
			if ((array[i].cat & cat) && (array[i].gender & gender)) {
				tempTable = tempTable.concat(new Array(array[i]));
			}
		}
		return tempTable;
	};

	function choose(array) {
		return array[Math.floor(Math.random() * (array.length))];
	}

	var Category = { //Permission en bitfield, augmenter d'un si rajout
		"cooling": 1 << 0,
		"compo": 1 << 1,
		"screen": 1 << 2,
		"audio": 1 << 3,
		"case": 1 << 4,
		"psu": 1 << 5,
		"storage": 1 << 6,
		"elec": 1 << 7,
		"all": (1 << 15) - 1 //Attention, comportement étrange de JS avec les int
	};

	let p = class {
		constructor(str, cat, gender = Gender.masc | Gender.fem) {
			this.str = str;
			this.cat = cat;
			this.gender = gender;
		}
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
		// Ne pas utiliser Category.elec tout seul !! Il sert pour sélectionner les produits uniquement et n'a 
d'adjectives correspondants
		new p("ventirad", Category.cooling, Gender.masc),
		new p("gamme de ventilateurs", Category.cooling, Gender.fem),
		new p("GPU", Category.compo, Gender.masc),
		new p("CPU", Category.compo, Gender.masc),
		new p("génération de processeurs", Category.compo, Gender.fem),
		new p("génération de carte graphique", Category.compo, Gender.fem),
		new p("microcontrôleur", Category.compo, Gender.masc),
		new p("carte mère", Category.compo, Gender.fem),
		new p("transistor", Category.compo | Category.elec, Gender.masc),
		new p("lampe", Category.compo | Category.screen | Category.case | Category.elec, Gender.fem),
		new p("switch", Category.compo | Category.case | Category.elec, Gender.masc),
		new p("carte son", Category.audio, Gender.fem),
		new p("transformateur", Category.psu | Category.elec, Gender.masc),
		new p("alimentation", Category.psu | Category.elec, Gender.fem),
		new p("boitier", Category.case, Gender.masc),
		new p("clavier", Category.case, Gender.masc),
		new p("souris", Category.case, Gender.fem),
		new p("batterie", Category.psu | Category.elec, Gender.fem),
		new p("onduleur", Category.psu, Gender.masc),
		new p("interconnect", Category.compo | Category.elec, Gender.masc),
		new p("barrette de DDR4", Category.compo, Gender.fem),
		new p("redesign de la DDR3", Category.compo, Gender.masc),
		new p("réutilisation de la DDR2", Category.compo, Gender.fem),
		new p("récupérage de la DDR1", Category.compo, Gender.masc),
		new p("vision des câbles", Category.compo, Gender.fem),
		new p("casque autonome", Category.case | Category.screen, Gender.masc),
		new p("casque", Category.audio, Gender.masc),
		new p("kit d'enceintes", Category.audio, Gender.masc),
		new p("dernier écran", Category.screen, Gender.masc),
		new p("série de condensateurs", Category.psu | Category.audio | Category.elec, Gender.fem),
		new p("gamme de bobines", Category.psu | Category.audio | Category.elec, Gender.fem),
		new p("antenne Wi-Fi", Category.case | Category.compo | Category.elec, Gender.fem),
		new p("clef USB", Category.case | Category.compo | Category.storage, Gender.fem),
		new p("module Bluetooth", Category.case | Category.compo, Gender.masc),
		new p("carte PCIe", Category.compo, Gender.fem),
		new p("AiO", Category.screen | Category.cooling, Gender.masc),
		new p("DAC", Category.audio | Category.elec, Gender.masc),
		new p("disque dur", Category.storage, Gender.masc),
		new p("SSD", Category.storage, Gender.masc),
		new p("interface analogique/digitale", Category.audio | Category.elec, Gender.fem),
		new p("BX", Category.all, Gender.fem)
	);

	// Varier les déterminants
	var determinant = new Array(
		new p("ce", Category.all, Gender.masc),
		new p("cette", Category.all, Gender.fem),
		new p("notre", Category.all, Gender.fem | Category.masc),
		new p("la", Category.all, Gender.fem),
		new p("le", Category.all, Gender.masc)
	);

	// Adjectif bidon a mettre entre le det et le nom
	var pre_adj = new Array(
		new p("nouveau", Category.all, Gender.masc),
		new p("nouvelle", Category.all, Gender.fem),
		new p("prochain", Category.all, Gender.masc),
		new p("prochaine", Category.all, Gender.fem),
		new p("dernier", Category.all, Gender.masc),
		new p("dernière", Category.all, Gender.fem)
	);

	// Uniquement du marketing générique qui ne veut rien dire ici
	var adj_marketing = new Array(
		"gaming",
		"Overclocked Edition",
		"Advanced Edition",
		"Extrem Edition",
		"Ultimate Edition",
		"Creators Edition",
		"Mescouy Edtion",
		"Tactique",
		"Turbo",
		"SuperCharged",
		"SuperClocked",
		"OCed!",
		"iCholl",
		"Ultra Alloy",
		"Amplified",
		"made for gamers",
		"by gamers",
		"next-gen",
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
		"Green",
		"dernier cri",
		"Aurum"
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
		new p("plaqué or", Category.all, Gender.masc),
		new p("plaquée or", Category.all, Gender.fem),
		new p("en MU-metal", Category.audio | Category.psu),
		new p("mécanique", Category.all & (!Category.compo)),
		new p("analogique", Category.audio | Category.case),
		new p("numérique", Category.all),
		new p("haut-de-gamme", Category.all),
		new p("pour professionnels exigeants", Category.all),
		new p("pour amateurs enthousiastes", Category.all),
		new p("à refroidissement liquide", Category.all),
		new p("sous watercooling", Category.all),
		new p("low-profile", Category.psu | Category.compo | Category.case)
	);
	var verb = new Array(
		"supporte",
		"rend accessible à tous",
		"apporte au grand public",
		"investit le marché de",
		"apporte directement chez vous",
		"révolutionne",
		"introduit",
		"secoue",
		"renouvelle",
		"rajeunit",
		"renverse",
		"casse le monde de",
		"renvoit dans les pâquerettes",
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
		new p("jouable", Category.all),
		new p("best-in-class", Category.all),
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
		new p("au-delà des laboratoires", Category.all),
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
		"en première mondiale",
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
		"renvoyant dans les pâquerettes",
		"faisant trembler le monde de",
		"secouant",
		"défrichant le domaine de",
		"cassant les limites de",
		"renversant l'ordre établit de"
	);
	var version = new Array(
		"version",
		"édition",
		"génération"
	);
	var pronom = new Array(
		new p("il", Category.all, Gender.masc),
		new p("elle", Category.all, Gender.fem),
		new p("ce dernier", Category.all, Gender.masc),
		new p("cette dernière", Category.all, Gender.fem),
	);
	var verb_with_new_com = new Array(
		"intègre",
		"utilise",
	  	"comprend"
	);
	var loc_but = new Array(
		"dans le but de",
		"afin de",
		"pour pouvoir",
		"pour",
	  	"en vue de"
	);
	var verb_inf = new Array(
		"supporter",
		"rendre accessible",
		"apporter",
		"révolutionner",
		"secouer",
		"renouveller",
		"rajeunir",
		"renverser",
		"casser le monde de",
		"renvoyer dans les pâquerettes",
		"changer complètement",
		"redéfinir",
		"établir",
		"dévoiler au monde entier",
		"changer la donne de",
		"bouleverser",
		"poser les bases de",
		"assurer",
		"dégrossir",
		"repousser les limites de"
	);
	var cplt_possessif = new Array(
		new p("dernier cri", Category.all),
		new p("maison", Category.all),
		new p("nouvellement mis au point", Category.all, Gender.masc),
		new p("nouvellement mise au point", Category.all, Gender.fem),
		new p("dernière génération", Category.all)
	);

	var rand_obj_produit = choose(produit);
	var rand_produit = rand_obj_produit.str;
	var cat = rand_obj_produit.cat;
	var gend = rand_obj_produit.gender;

	var tempTable;
	tempTable = getSubArray(determinant, cat, gend);
	var rand_det = choose(tempTable);
	if (Math.random() < 0.3) {
		tempTable = getSubArray(pre_adj, cat, gend);
		var rand_pre_adj = choose(tempTable);
		rand_produit = rand_det + " " + rand_pre_adj + " " + rand_produit;
	} else {
		rand_produit = rand_det + " " + rand_produit;
	}

	tempTable = getSubArray(techno, cat, gend);
	var rand_techno = choose(tempTable);
	tempTable = getSubArray(techno_adj, cat, gend);
	var rand_techno_adj = choose(tempTable);
	tempTable = getSubArray(adj_fonctionnalite, cat, gend);
	var rand_a_fonc = choose(tempTable);


	var rand_intro = choose(intro);
	var rand_a_mark = choose(adj_marketing);
	if (Math.random() < 0.2) { // on double l'adj bullshit environ une fois sur cinq
		var new_a_mark = choose(adj_marketing);
		if (new_a_mark != rand_a_mark) { // pas de doublons...
			rand_a_mark = rand_a_mark + " " + new_a_mark;
		}
	}
	var rand_verb = choose(verb);
	var rand_dispo = choose(dispo);
	var rand_pp = choose(participe_present);
	var rand_version = choose(version);
	var res;

	var choice = Math.floor(Math.random() * 4); // ATTENTION METTRE A JOUR ICI SI AJOUT STRUCTURE
	switch (choice) {
		case 0:
			res = rand_intro + " " + rand_produit + " " + rand_a_mark + " " + rand_a_fonc + " " + rand_verb 

				" " + rand_techno + " " + rand_techno_adj + ", " + rand_dispo + ".";
			break;
		case 1:
			res = rand_dispo + ", " + rand_produit + " " + rand_a_mark + " " + rand_a_fonc + " " +
				rand_verb + " " + rand_techno + " " + rand_techno_adj + ".";
			break;
		case 2:
			res = rand_pp + " " + rand_techno + " " + rand_techno_adj + ", " + rand_produit + " " +
				rand_a_fonc + " est " + rand_dispo + " en " + rand_version + " " + rand_a_mark + ".";
			break;
		case 3:
			res = rand_produit + " " + rand_a_mark + " " + rand_a_fonc + ", " + rand_dispo + ", " +
				rand_verb + " " + rand_techno + " " + rand_techno_adj + ".";
			break;
	}

	// Seconde phrase, plus "technique"
	if (Math.random() < 0.5) {
		tempTable = getSubArray(pronom, cat, gend);
		var rand_pronom = choose(tempTable);
		var rand_verb2 = choose(verb_with_new_com);
		tempTable = getSubArray_with_carac(produit, Category.elec);
		var rand_obj_produit2;
		do {
			rand_obj_produit2 = choose(tempTable);
		} while (rand_obj_produit2.str == rand_obj_produit.str);
		var rand_produit2 = rand_obj_produit2.str;
		var cat2 = rand_obj_produit2.cat;
		var gend2 = rand_obj_produit2.gender;

		tempTable = getSubArray(determinant, cat2, gend2);
		var rand_det2 = choose(tempTable);
		if (Math.random() < 0.3) {
			tempTable = getSubArray(pre_adj, cat2, gend2);
			var rand_pre_adj2 = choose(tempTable);
			rand_produit2 = rand_det2 + " " + rand_pre_adj2 + " " + rand_produit2;
		} else {
			rand_produit2 = rand_det2 + " " + rand_produit2;
		}
		tempTable = getSubArray(cplt_possessif, cat2, gend2);
		var rand_cplt_poss = choose(tempTable);

		var rand_loc_but = choose(loc_but);
		var rand_verb_inf = choose(verb_inf);
		tempTable = getSubArray(techno, cat, gend);
		var rand_techno2;
		do {
			rand_techno2 = choose(tempTable);
		} while (rand_techno2 == rand_techno);

		if (Math.random() < 0.5) {
			tempTable = getSubArray(techno_adj, cat, gend);
		} else {
			tempTable = getSubArray(adj_fonctionnalite, cat, gend);
		}
		var rand_techno_adj2;
		do {
			rand_techno_adj2 = choose(tempTable);
		} while (rand_techno_adj2 == rand_techno_adj);

		var res2;
		res2 = rand_pronom + " " + rand_verb2 + " " + rand_produit2 + " " + rand_cplt_poss + " " + rand_loc_but 
" + rand_verb_inf + " " + rand_techno2 + " " + rand_techno_adj2 + ".";
		res2 = res2.charAt(0).toUpperCase() + res2.slice(1);
		res = res + " " + res2;
	}

	res = res.charAt(0).toUpperCase() + res.slice(1);
	// Post-process pour obéir aux superbes règles de français...
	res = res.replace(/de le/g, "du");
	res = res.replace(/ de e/g, " d'e");
	res = res.replace(/ de é/g, " d'é");
	res = res.replace(/nouveau h/g, "nouvel h");
	res = res.replace(/nouveau a/g, "nouvel a");
	res = res.replace(/nouveau e/g, "nouvel e");
	res = res.replace(/nouveau i/g, "nouvel i");
	res = res.replace(/nouveau o/g, "nouvel o");
	res = res.replace(/nouveau u/g, "nouvel u");
	res = res.replace(/ la h/g, " l'h");
	res = res.replace(/ la a/g, " l'a");
	res = res.replace(/ la e/g, " l'e");
	res = res.replace(/ la é/g, " l'é");
	res = res.replace(/ la è/g, " l'è");
	res = res.replace(/ la i/g, " l'i");
	res = res.replace(/ la o/g, " l'o");
	res = res.replace(/ la u/g, " l'u");
	res = res.replace(/ le h/g, " l'h");
	res = res.replace(/ le a/g, " l'a");
	res = res.replace(/ le e/g, " l'e");
	res = res.replace(/ le é/g, " l'é");
	res = res.replace(/ le è/g, " l'è");
	res = res.replace(/ le i/g, " l'i");
	res = res.replace(/ le o/g, " l'o");
	res = res.replace(/ le u/g, " l'u");
	res = res.replace(/ ce h/g, " cet h");
	res = res.replace(/ ce a/g, " cet a");
	res = res.replace(/ ce e/g, " cet e");
	res = res.replace(/ ce é/g, " cet é");
	res = res.replace(/ ce è/g, " cet è");
	res = res.replace(/ ce i/g, " cet i");
	res = res.replace(/ ce o/g, " cet o");
	res = res.replace(/ ce u/g, " cet u");
	res = "<span id=\"copy\">" + res + "</span>";
	document.getElementById("pipotation").innerHTML = res;
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
};
</script>
